// Kullanım: node build.js <video> [--stills 1,4.5,9] [--fps 30]
// 1) dış ses sürelerini okur  2) kareleri işler  3) ses + müzik miksajı  4) SRT
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));

const V = process.argv[2];
const arg = k => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };
const FPS = Number(arg('--fps') || 30);
const D = __dirname;
const dur = f => Number(execSync(`ffprobe -v error -show_entries format=duration -of csv=p=0 "${f}"`).toString());

// çekim kutuları → build/shots.js
const shots = {};
for (const f of fs.readdirSync(path.join(D, 'shots')).filter(f => f.endsWith('.json')))
  shots[f.replace('.json', '')] = JSON.parse(fs.readFileSync(path.join(D, 'shots', f))).rects;
fs.writeFileSync(path.join(D, 'build/shots.js'), 'const SHOTS = ' + JSON.stringify(shots) + ';');

// dış ses süreleri
const voDir = path.join(D, 'ses', V);
const voDur = {};
if (fs.existsSync(voDir)) for (const f of fs.readdirSync(voDir).filter(f => f.endsWith('.mp3') && fs.statSync(path.join(voDir, f)).size > 0))
  voDur[f.replace('.mp3', '')] = dur(path.join(voDir, f));
fs.writeFileSync(path.join(D, `build/${V}-dur.js`), 'window.VO_DUR = ' + JSON.stringify(voDur) + ';');

const srtTime = s => { const ms = Math.round(s * 1000); const h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, sec = Math.floor(ms / 1000) % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')},${String(ms % 1000).padStart(3, '0')}`; };

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('pageerror', e => console.error('SAYFA HATASI', e.message));
  page.on('console', m => m.type() === 'warning' && console.warn('uyarı:', m.text()));
  await page.goto('file://' + path.join(D, 'player.html') + '?v=' + V);
  await page.waitForFunction(() => window.READY === true, null, { timeout: 60000 });
  const total = await page.evaluate(() => window.TOTAL);
  const cues = await page.evaluate(() => window.CUES);
  console.log(`${V}: ${total.toFixed(2)} sn, ${cues.length} dış ses satırı, ${Object.keys(voDur).length} ses dosyası`);

  if (process.argv.includes('--tl')) console.log((await page.evaluate(() => TL.scenes.map(s => `${s.i}:${s.type}${s.shot ? '/' + s.shot : ''}@${s.start.toFixed(1)}+${s.dur.toFixed(1)}`))).join('  '));
  const stills = arg('--stills');
  if (stills) {
    fs.mkdirSync(path.join(D, 'cikti/kareler'), { recursive: true });
    for (const t of stills.split(',')) {
      await page.evaluate(t => window.render(t), Number(t));
      await page.screenshot({ path: path.join(D, `cikti/kareler/${V}-${t}.png`) });
    }
    await browser.close();
    return;
  }

  // SRT
  fs.writeFileSync(path.join(D, `cikti/${V}.srt`), cues.map((c, i) => `${i + 1}\n${srtTime(c.at)} --> ${srtTime(c.at + c.dur)}\n${c.text}\n`).join('\n'));

  // görüntü
  const silent = path.join(D, `build/${V}-video.mp4`);
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '17', '-pix_fmt', 'yuv420p', silent], { stdio: ['pipe', 'inherit', 'inherit'] });
  const frames = Math.ceil(total * FPS);
  for (let i = 0; i < frames; i++) {
    await page.evaluate(t => window.render(t), i / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 94 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % 300 === 0) console.log(`  kare ${i}/${frames}`);
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  await browser.close();

  // ses: müzik yatağı + dış ses satırları (müzik konuşma altında kısılır)
  const VIDEO = require(path.join(D, 'videos', V + '.js'));
  const music = path.join(D, 'muzik', (VIDEO.music || 'egitim') + '.wav');
  const have = cues.filter(c => voDur[c.id] !== undefined);
  const out = path.join(D, `cikti/${V}.mp4`);
  const inputs = [], filters = [];
  inputs.push('-i', silent);
  let n = 1, mix = [];
  if (fs.existsSync(music)) {
    inputs.push('-stream_loop', '-1', '-i', music);
    filters.push(`[${n}:a]atrim=0:${total.toFixed(2)},afade=t=in:d=1.2,afade=t=out:st=${(total - 2.5).toFixed(2)}:d=2.5,volume=${VIDEO.musicVol || 0.32}[mus]`);
    n++;
  }
  have.forEach(c => {
    inputs.push('-i', path.join(voDir, c.id + '.mp3'));
    const ms = Math.round(c.at * 1000);
    filters.push(`[${n}:a]aresample=48000,adelay=${ms}|${ms},volume=1.0[v${n}]`);
    mix.push(`[v${n}]`);
    n++;
  });
  if (mix.length) {
    filters.push(`${mix.join('')}amix=inputs=${mix.length}:normalize=0[vo]`);
    if (filters[0].includes('[mus]')) {
      filters.push(`[vo]asplit=2[vo1][vo2]`);
      filters.push(`[mus][vo1]sidechaincompress=threshold=0.03:ratio=8:attack=20:release=400[duck]`);
      filters.push(`[duck][vo2]amix=inputs=2:normalize=0,alimiter=limit=0.95[a]`);
    } else filters.push(`[vo]alimiter=limit=0.95[a]`);
  } else if (filters.length) filters.push(`[mus]anull[a]`);
  if (filters.length) {
    execSync(`ffmpeg -y -loglevel error ${inputs.map(a => `"${a}"`).join(' ')} -filter_complex "${filters.join(';')}" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -t ${total.toFixed(2)} -movflags +faststart "${out}"`);
  } else fs.copyFileSync(silent, out);
  console.log(`${out} hazır · ${have.length}/${cues.length} dış ses`);
})();
