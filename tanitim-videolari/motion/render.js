// Kullanım: node render.js <sahne.html> <cikti.mp4> <süre_sn> [fps]
// Sahnenin window.render(t) fonksiyonunu her kare için çağırır, ekran görüntüsünü ffmpeg'e aktarır.
const path = require('path');
const { spawn, execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));

const [html, out, durArg, fpsArg] = process.argv.slice(2);
const dur = Number(durArg), fps = Number(fpsArg || 30);
if (!html || !out || !dur) {
  console.error('Kullanım: node render.js <sahne.html> <cikti.mp4> <süre_sn> [fps]');
  process.exit(1);
}

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('file://' + path.resolve(html));
  await page.evaluate(() => document.fonts.ready);

  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out],
    { stdio: ['pipe', 'inherit', 'inherit'] });

  const frames = Math.round(dur * fps);
  for (let i = 0; i < frames; i++) {
    await page.evaluate(t => window.render(t), i / fps);
    const buf = await page.screenshot({ type: 'png' });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  await browser.close();
  console.log(`${out} · ${frames} kare`);
})();
