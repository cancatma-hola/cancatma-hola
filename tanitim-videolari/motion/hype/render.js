// Kullanım: node hype/render.js [--stills 1,2.5] [--mb 4] [--fps 30] [--from 0 --to 52]
// Hareket bulanıklığı: her kare için N alt kare (180° obtüratör) → ffmpeg tmix ile ortalama.
const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const D = __dirname, FPS = Number(arg('--fps', 30)), MB = Number(arg('--mb', 4));
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on('pageerror', e => console.error('SAYFA HATASI', e.message));
  await p.goto('file://' + path.join(D, 'promo.html'));
  await p.waitForFunction(() => window.READY === true, null, { timeout: 60000 });
  const total = await p.evaluate(() => window.TOTAL);
  fs.writeFileSync(path.join(D, 'hits.json'), JSON.stringify(await p.evaluate(() => window.HITS), null, 1));
  const st = arg('--stills');
  if (st) {
    fs.mkdirSync(path.join(D, 'kareler'), { recursive: true });
    for (const t of st.split(',')) { await p.evaluate(t => window.render(t), Number(t)); await p.screenshot({ path: path.join(D, `kareler/p-${t}.png`) }); }
    await b.close(); return;
  }
  const from = Number(arg('--from', 0)), to = Number(arg('--to', total));
  const out = path.join(D, 'build-video.mp4');
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS * MB), '-i', '-',
    '-vf', MB > 1 ? `tmix=frames=${MB},select='not(mod(n+1\\,${MB}))',setpts=N/${FPS}/TB` : 'null',
    '-r', String(FPS), '-c:v', 'libx264', '-preset', 'medium', '-crf', '16', '-pix_fmt', 'yuv420p', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const frames = Math.round((to - from) * FPS);
  for (let i = 0; i < frames; i++) {
    for (let k = 0; k < MB; k++) {
      const t = from + (i + (MB > 1 ? (k / MB) * 0.5 - 0.25 : 0)) / FPS;   // kare merkezli yarım obtüratör
      await p.evaluate(t => window.render(t), Math.max(0, t));
      const buf = await p.screenshot({ type: 'jpeg', quality: 92 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    }
    if (i % 150 === 0) console.log(`kare ${i}/${frames}`);
  }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); await b.close();
  console.log('görüntü hazır', out);
})();
