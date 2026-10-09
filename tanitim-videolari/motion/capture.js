// Panel ekran görüntülerini (1920×1080) ve vurgu için öğe konumlarını kaydeder.
// Kullanım: PANEL_USER=... PANEL_PASS=... node capture.js [çekim_adı ...]
// Yalnızca görüntüleme yapar; kayıt değiştiren hiçbir butona basılmaz.
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));
const SHOTS = require('./capture-shots');

const BASE = 'https://panel.mtshijyen.com';
const OUT = path.join(__dirname, 'shots');
const STATE = path.join(__dirname, '.panel-state.json'); // .gitignore'da

// Sayfa içinde: çekimi bozan katmanları gizle, kişisel e-postaları bulanıklaştır
function clean() {
  const hide = el => el && (el.style.display = 'none');
  for (const el of document.querySelectorAll('body *')) {
    const s = getComputedStyle(el);
    const txt = el.innerText || '';
    if (s.position === 'fixed' && (txt.includes('çerez') || el.matches('button.fixed'))) hide(el);
  }
  // kayan kampanya şeridi (ilk üst şerit)
  for (const el of document.querySelectorAll('body div')) {
    if ((el.innerText || '').startsWith('İLK SİPARİŞİNİZE') || (el.innerText || '').includes('İLK SİPARİŞİNİZE ÖZEL %10 İNDİRİM ●')) {
      let top = el; while (top.parentElement && top.parentElement !== document.body && top.parentElement.offsetHeight < 60) top = top.parentElement;
      if (top.offsetHeight < 60) { hide(top); break; }
    }
  }
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n; const blur = new Set();
  while ((n = walker.nextNode())) if (/@(gmail|hotmail|outlook|yahoo)\.|asd, istanbul/i.test(n.textContent)) blur.add(n.parentElement);
  for (const el of document.querySelectorAll('body *')) if (el.children.length <= 3 && /^\W*asd,\s*istanbul\s*$/i.test((el.textContent || '').trim())) blur.add(el);
  blur.forEach(el => { el.style.filter = 'blur(6px)'; });
}

// Metne göre en küçük görünür öğenin kutusu
function rectOf([text, nth = 0, exact = true]) {
  const els = [...document.querySelectorAll('body *')].filter(e => {
    if (!e.offsetParent && getComputedStyle(e).position !== 'fixed') return false;
    const t = (e.innerText || e.value || '').trim();
    return exact ? t === text : t.includes(text);
  });
  const small = els.filter(e => !els.some(o => o !== e && e.contains(o)));
  const el = small[nth];
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) };
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const only = process.argv.slice(2);
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });

  const guest = await browser.newContext({ viewport: { width: 1920, height: 1080 }, locale: 'tr-TR' });
  let auth;
  if (fs.existsSync(STATE)) auth = await browser.newContext({ viewport: { width: 1920, height: 1080 }, locale: 'tr-TR', storageState: STATE });
  else {
    auth = await browser.newContext({ viewport: { width: 1920, height: 1080 }, locale: 'tr-TR' });
    const p = await auth.newPage();
    await p.goto(BASE + '/tr/giris', { waitUntil: 'networkidle' });
    await p.fill('input[name=email]', process.env.PANEL_USER);
    await p.fill('input[name=password]', process.env.PANEL_PASS);
    await p.click('button[type=submit]:has-text("Giriş Yap")');
    await p.waitForURL(/hesap/, { timeout: 30000 });
    await auth.storageState({ path: STATE });
    await p.close();
  }

  for (const shot of SHOTS) {
    if (only.length && !only.includes(shot.name)) continue;
    const page = await (shot.guest ? guest : auth).newPage();
    try {
      await page.goto(BASE + shot.url, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForTimeout(1500);
      await page.evaluate(clean);
      if (shot.before) await shot.before(page);
      await page.waitForTimeout(shot.wait || 800);
      await page.evaluate(clean);
      const rects = {};
      for (const [k, q] of Object.entries(shot.targets || {})) rects[k] = await page.evaluate(rectOf, q);
      await page.screenshot({ path: path.join(OUT, shot.name + '.png') });
      fs.writeFileSync(path.join(OUT, shot.name + '.json'), JSON.stringify({ url: shot.url, rects }, null, 1));
      const miss = Object.entries(rects).filter(([, v]) => !v).map(([k]) => k);
      console.log(shot.name, miss.length ? 'EKSİK: ' + miss.join(', ') : 'tamam');
    } catch (e) {
      console.log(shot.name, 'HATA', e.message.split('\n')[0]);
    }
    await page.close();
    await new Promise(r => setTimeout(r, 1500)); // sunucuyu yormamak için
  }
  await browser.close();
})();
