// Kullanım: node stills.js <sahne.html> <önek> t1 t2 ...  → cikti/<önek>-<t>.png
const path = require('path');
const { execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));
const [html, prefix, ...times] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on('pageerror', e => console.error('HATA', e.message));
  await p.goto('file://' + path.resolve(html));
  await p.evaluate(() => document.fonts.ready);
  for (const t of times) {
    await p.evaluate(t => window.render(t), Number(t));
    await p.screenshot({ path: `cikti/${prefix}-${t}.png` });
  }
  await b.close();
})();
