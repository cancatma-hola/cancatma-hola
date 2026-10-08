// Panel ekranlarını 2x çözünürlükte (3840×2160 JPEG) çeker ve her ekranın öğe haritasını kaydeder.
// Kullanım: node araclar/cek.js [ad ...]   (oturum: motion/.panel-state.json; yoksa PANEL_USER/PANEL_PASS ile giriş)
// Yalnızca görüntüleme yapar: form açılabilir, yazı yazılabilir; kayıt değiştiren hiçbir butona basılmaz.
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));
const BASE = 'https://panel.mtshijyen.com';
const OUT = path.join(__dirname, '../assets/ekran');
const STATE = path.join(__dirname, '../../../motion/.panel-state.json');
const LIST = require('./ekranlar');

function clean() {
  const hide = (el) => el && (el.style.display = 'none');
  for (const el of document.querySelectorAll('body *')) {
    const s = getComputedStyle(el), txt = el.innerText || '';
    if (s.position === 'fixed' && (txt.includes('çerez') || el.matches('button.fixed'))) hide(el);
  }
  for (const el of document.querySelectorAll('body div')) {
    if ((el.innerText || '').includes('İLK SİPARİŞİNİZE ÖZEL %10 İNDİRİM ●')) {
      let top = el; while (top.parentElement && top.parentElement !== document.body && top.parentElement.offsetHeight < 60) top = top.parentElement;
      if (top.offsetHeight < 60) { hide(top); break; }
    }
  }
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; const blur = new Set();
  while ((n = walker.nextNode())) if (/@(gmail|hotmail|outlook|yahoo)\.|asd, istanbul/i.test(n.textContent)) blur.add(n.parentElement);
  for (const el of document.querySelectorAll('body *')) if (el.children.length <= 3 && /^\W*asd,\s*istanbul\s*$/i.test((el.textContent || '').trim())) blur.add(el);
  blur.forEach((el) => { el.style.filter = 'blur(6px)'; el.dataset.bulanik = '1'; });
}
// Görünür öğeler: kendi metni olanlar, kontroller ve kutular (arka planı / kenarlığı olan)
function harita() {
  const out = [], W = innerWidth, H = innerHeight;
  for (const el of document.querySelectorAll('body *')) {
    const s = getComputedStyle(el);
    if (s.visibility === 'hidden' || s.display === 'none' || +s.opacity === 0) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 3 || r.height < 3 || r.bottom <= 0 || r.top >= H || r.right <= 0 || r.left >= W) continue;
    const tag = el.tagName.toLowerCase(), ctl = ['button', 'a', 'input', 'select', 'textarea', 'label'].includes(tag);
    let t = [...el.childNodes].filter((x) => x.nodeType === 3).map((x) => x.textContent).join(' ').trim();
    if (ctl) t = (el.innerText || el.value || el.placeholder || '').trim();
    t = t.replace(/\s+/g, ' ').slice(0, 100);
    const bg = s.backgroundColor !== 'rgba(0, 0, 0, 0)', bd = parseFloat(s.borderTopWidth) > 0 || parseFloat(s.borderLeftWidth) > 0 || s.boxShadow !== 'none';
    const kutu = (bg || bd) && r.width >= 120 && r.height >= 28 && !(r.width > 1850 && r.height > 900);
    if (!t && !kutu) continue;
    const o = { t, g: tag, x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) };
    if (ctl) o.c = 1;
    if (el.dataset.bulanik) o.b = 1;
    if (kutu) { o.k = 1; o.f = (el.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 300); }
    out.push(o);
  }
  return out;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const only = process.argv.slice(2);
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const opts = { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 2, locale: 'tr-TR' };
  const guest = await browser.newContext(opts);
  let auth;
  if (fs.existsSync(STATE)) auth = await browser.newContext({ ...opts, storageState: STATE });
  else {
    auth = await browser.newContext(opts);
    const p = await auth.newPage();
    await p.goto(BASE + '/tr/giris', { waitUntil: 'networkidle' });
    await p.fill('input[name=email]', process.env.PANEL_USER); await p.fill('input[name=password]', process.env.PANEL_PASS);
    await p.click('button[type=submit]:has-text("Giriş Yap")'); await p.waitForURL(/hesap/, { timeout: 30000 });
    await auth.storageState({ path: STATE }); await p.close();
  }
  for (const e of LIST) {
    if (only.length && !only.includes(e.ad)) continue;
    const page = await (e.misafir ? guest : auth).newPage();
    try {
      await page.goto(BASE + e.url, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForTimeout(1500); await page.evaluate(clean);
      if (e.once) await e.once(page);
      await page.waitForTimeout(e.bekle || 900); await page.evaluate(clean);
      const map = await page.evaluate(harita);
      await page.screenshot({ path: path.join(OUT, e.ad + '.jpg'), type: 'jpeg', quality: 86 });
      fs.writeFileSync(path.join(OUT, e.ad + '.json'), JSON.stringify({ url: e.url, son: page.url().replace(BASE, ''), ogeler: map }));
      execSync(`node ${path.join(__dirname, "maskele.mjs")}`);
      console.log(e.ad.padEnd(22), String(map.length).padStart(4), 'öğe', page.url().replace(BASE, ''));
    } catch (err) { console.log(e.ad, 'HATA', err.message.split('\n')[0]); }
    await page.close(); await new Promise((r) => setTimeout(r, 1200));
  }
  await browser.close();
})();
