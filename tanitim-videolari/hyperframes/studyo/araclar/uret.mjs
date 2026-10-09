// Video tanımlarından (videolar/*.mjs) HyperFrames projeleri üretir: cikti/<id>/{yatay,dikey}/index.html + ses.m4a
// Kullanım: node araclar/uret.mjs [id ...]      (id verilmezse hepsi)
//           node araclar/uret.mjs --liste       (tüm videoları ve sürelerini yazdır)
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const KOK = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ZAMAN = require(path.join(KOK, "assets/zaman.js"));
const AUDIO = path.resolve(KOK, "../../motion/hype/audio.py");

// ── Video tanımlarını yükle: videolar/*.mjs ve videolar/<klasör>/*.mjs (klasör adı çıktı klasörü olur, ör. 2026-10-09)
export async function videolar() {
  const out = [], kok = path.join(KOK, "videolar");
  const yukle = async (f, klasor) => {
    let m;
    try { m = await import(pathToFileURL(f).href + "?t=" + fs.statSync(f).mtimeMs); }
    catch (e) { console.error(`uyarı: ${path.relative(KOK, f)} yüklenemedi: ${e.message.split("\n")[0]}`); return; }
    for (const v of Array.isArray(m.default) ? m.default : [m.default]) out.push(klasor ? { klasor, ...v } : v);
  };
  for (const f of fs.readdirSync(kok).sort()) {
    const p = path.join(kok, f);
    if (f.endsWith(".mjs")) await yukle(p);
    else if (fs.statSync(p).isDirectory()) for (const g of fs.readdirSync(p).filter((g) => g.endsWith(".mjs")).sort()) await yukle(path.join(p, g), f);
  }
  return out;
}
// Çıktı klasörü (tanitim-videolari/videolar/ altında): <klasör>/<tür> ya da <tür>
export const hedef = (v) => (v.klasor ? `${v.klasor}/${v.tur}` : v.tur);

// ── Ekran haritaları ve hedef çözümleme
const HARITA = {};
const harita = (ad) => (HARITA[ad] ||= JSON.parse(fs.readFileSync(path.join(KOK, "assets/ekran", ad + ".json"), "utf8")));
const alan = (r) => r.w * r.h;
const icinde = (a, b) => a.x >= b.x - 1 && a.y >= b.y - 1 && a.x + a.w <= b.x + b.w + 1 && a.y + a.h <= b.y + b.h + 1;
const birlesim = (rs) => { const x = Math.min(...rs.map((r) => r.x)), y = Math.min(...rs.map((r) => r.y));
  return { x, y, w: Math.max(...rs.map((r) => r.x + r.w)) - x, h: Math.max(...rs.map((r) => r.y + r.h)) - y }; };
const oge = (o) => ({ x: o.x, y: o.y, w: o.w, h: o.h });

export function bul(ekran, q) {
  if (q && typeof q === "object" && !Array.isArray(q)) return { x: q.x, y: q.y, w: q.w, h: q.h };
  if (Array.isArray(q)) return birlesim(q.map((x) => bul(ekran, x)));
  const ogeler = harita(ekran).ogeler;
  let s = q, nth = 0;
  const m = s.match(/^(.*)#(\d+)$/); if (m) { s = m[1]; nth = +m[2] - 1; }
  let adaylar;
  if (s.startsWith("[]")) {
    const t = s.slice(2);
    adaylar = ogeler.filter((o) => o.k && o.f && o.f.includes(t) && o.w < 1700);
    adaylar = adaylar.filter((a) => !adaylar.some((b) => b !== a && icinde(b, a) && alan(b) < alan(a)));
  } else {
    const t = s.startsWith("~") ? s.slice(1) : s, tam = !s.startsWith("~");
    adaylar = ogeler.filter((o) => o.t && (tam ? o.t === t : o.t.includes(t)));
    const kontroller = adaylar.filter((o) => o.c);
    adaylar = adaylar.filter((a) => !kontroller.some((c) => c !== a && icinde(a, c)));
  }
  adaylar.sort((a, b) => a.y - b.y || a.x - b.x);
  const o = adaylar[nth];
  if (!o) {
    const ip = ogeler.filter((x) => x.t && x.t.toLowerCase().includes(s.replace(/^\[\]|^~/, "").split(" ")[0].toLowerCase())).slice(0, 8).map((x) => `"${x.t}"`);
    throw new Error(`[${ekran}] hedef bulunamadı: ${q}  ·  yakın: ${ip.join(", ")}`);
  }
  return oge(o);
}
// Kişisel veriler ve test kayıtları: gri bantla kapatılır
const GIZLI = /@(gmail|hotmail|outlook|yahoo)\.|\basd\b|05(?!43\s?683)\d{2}\s?\d{3}\s?\d{2}\s?\d{2}|^0533/i;
function gizle(ekran) {
  return harita(ekran).ogeler.filter((o) => o.t && (o.c || !o.k) && (o.b || GIZLI.test(o.t)) && o.w < 1100).map(oge);
}
// Menü yolu (konum çipi): araclar/ekranlar.js içindeki `yol` alanı; tanımda `yol` verilirse o kullanılır, `yol: null` çipi kapatır
const YOL = Object.fromEntries(require("./ekranlar.js").filter((e) => e.yol).map((e) => [e.ad, e.yol]));
// Ekran bazında her sahnede kapatılacak test kayıtları (ekranlar.js `ortu`)
const ORTU = Object.fromEntries(require("./ekranlar.js").filter((e) => e.ortu).map((e) => [e.ad, e.ortu]));
const VARSAYILAN = { hesap: { x: 555, y: 205, w: 1095, h: 840 }, magaza: { x: 270, y: 200, w: 1380, h: 860 } };

const UYARI = [];
function coz(video, yon) {
  const v = structuredClone(video);
  v.yon = yon;
  // Dikey sürüm için sahnenin yerine geçecek tanım (ör. masaüstü ekran → telefon ekranı)
  v.sahneler = v.sahneler.map((s) => (yon === "dikey" && s.dikey ? { adim: s.adim, metin: s.metin, ...s.dikey } : (({ dikey, ...r }) => r)(s)));
  v.sahneler.forEach((s) => {
    if (s.tip === "cihaz") {   // masaüstü kırpım + telefon görüntüsü
      const hm = harita(s.masa.ekran), ht = harita(s.tel.ekran);
      Object.assign(s.masa, { dosya: `assets/ekran/${s.masa.ekran}.jpg`, url: hm.son.replace(/^\/tr/, "").replace(/\?.*$/, ""), gizle: gizle(s.masa.ekran) });
      s.masa.r = typeof s.masa.bolge === "string" || Array.isArray(s.masa.bolge) ? bul(s.masa.ekran, s.masa.bolge) : s.masa.bolge || VARSAYILAN.hesap;
      Object.assign(s.tel, { dosya: `assets/ekran/${s.tel.ekran}.jpg`, _pw: ht.vw || 430, gizle: gizle(s.tel.ekran) });
      return;
    }
    if (s.tip === "telefon") {   // mobil çekim: hedefler 430 px genişlikteki sayfa koordinatında
      const e = s.ekran, h = harita(e);
      if (!h.vw) throw new Error(`[${e}] mobil çekim değil (telefon sahnesi mobil ekran ister)`);
      Object.assign(s, { dosya: `assets/ekran/${e}.jpg`, url: h.son.replace(/^\/tr/, "").replace(/\?.*$/, "") || "", _pw: h.vw, _ph: h.ph, yol: s.yol ?? YOL[e] });
      (s.vurgu || []).forEach((x) => { x.r = bul(e, x.hedef); });
      if (s.yaz) s.yaz.r = bul(e, s.yaz.hedef);
      if (s.tikla) s.tikla.r = bul(e, s.tikla.hedef);
      s.gizle = [...gizle(e), ...[...(ORTU[e] || []), ...(s.ortu || [])].map((q) => bul(e, q))];
      return;
    }
    if (s.tip !== "ekran") return;
    const e = s.ekran, h = harita(e);
    if (s.yol === undefined && YOL[e]) s.yol = YOL[e];
    s.dosya = `assets/ekran/${e}.jpg`;
    s.url = h.son.replace(/^\/tr/, "").replace(/\?.*$/, "") || "";
    const b = (yon === "dikey" && s.bolgeD) || s.bolge || (h.son.startsWith("/tr/hesap") ? VARSAYILAN.hesap : VARSAYILAN.magaza);
    s.r = typeof b === "string" || Array.isArray(b) ? bul(e, b) : b;
    if (s.pay) s.r = { x: s.r.x - s.pay, y: s.r.y - s.pay, w: s.r.w + 2 * s.pay, h: s.r.h + 2 * s.pay };
    (s.vurgu || []).forEach((x) => { x.r = bul(e, x.hedef);
      if (x.r.w * x.r.h > 0.4 * s.r.w * s.r.h) UYARI.push(`${v.id} [${e}] vurgu kadrajın %${Math.round((100 * x.r.w * x.r.h) / (s.r.w * s.r.h))}'i: ${JSON.stringify(x.hedef)} (daha küçük hedef seçin)`); });
    if (s.yaz) s.yaz.r = bul(e, s.yaz.hedef);
    if (s.tikla) s.tikla.r = bul(e, s.tikla.hedef);
    s.gizle = [...gizle(e), ...[...(ORTU[e] || []), ...(s.ortu || [])].map((q) => bul(e, q))];   // ortu: tanımda ayrıca kapatılacak test kayıtları
  });
  return v;
}

function html(v) {
  const dikey = v.yon === "dikey", w = dikey ? 1080 : 1920, h = dikey ? 1920 : 1080;
  const plan = ZAMAN.zamanla(v), dur = plan.total;
  const sec = v.sahneler.map((_, i) => `      <section id="s${i + 1}" class="scene${i === 0 ? " first" : ""} clip" data-start="0" data-duration="${dur}"></section>`).join("\n");
  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=${w}, height=${h}" />
    <title>${v.id} · ${v.baslik} (${dikey ? "dikey" : "yatay"})</title>
    <link rel="stylesheet" href="assets/kit.css" />
    <script src="assets/vendor/gsap.min.js"></script>
    <script src="assets/vendor/hyper-shader.js"></script>
    <script src="assets/parts.js"></script>
    <script src="assets/zaman.js"></script>
    <script src="assets/motor.js"></script>
    <style>html, body { width: ${w}px; height: ${h}px; }</style>
  </head>
  <body>
    <!-- Bu dosya araclar/uret.mjs tarafından videolar/ tanımından üretildi; elle düzenlemeyin. -->
    <div id="main" data-composition-id="main" data-width="${w}" data-height="${h}" data-start="0" data-duration="${dur}">
      <audio id="muzik" src="ses.m4a" data-start="0" data-duration="${dur}"></audio>
${sec}
    </div>
    <script>
      window.VIDEO = ${JSON.stringify(v)};
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });
      const sahne = MOTOR.kur(window.VIDEO);
      HyperShader.init({ bgColor: "#050d18", accentColor: "#5FD3FF", compositionId: "main", timeline: tl, scenes: sahne.scenes, transitions: sahne.transitions });
      MOTOR.canlandir(tl);
      window.__timelines["main"] = tl;
    </script>
  </body>
</html>
`;
}

function ses(video, klasor) {
  const plan = ZAMAN.zamanla(video);
  const j = path.join(klasor, "ses.json"), wav = path.join(klasor, "ses.wav"), m4a = path.join(klasor, "ses.m4a");
  fs.writeFileSync(j, JSON.stringify(plan.hits));
  execFileSync("python3", [AUDIO, j, wav, String(plan.total)], { stdio: "ignore" });
  execFileSync("ffmpeg", ["-v", "error", "-y", "-i", wav, "-c:a", "aac", "-b:a", "192k", m4a]);
  fs.rmSync(wav); fs.rmSync(j);
  return m4a;
}

export async function uret(ids) {
  const hepsi = await videolar();
  const sec = ids.length ? hepsi.filter((v) => ids.includes(v.id)) : hepsi;
  for (const video of sec) {
    const kl = path.join(KOK, "cikti", video.id);
    fs.mkdirSync(kl, { recursive: true });
    for (const yon of ["yatay", "dikey"]) {
      const d = path.join(kl, yon);
      fs.mkdirSync(d, { recursive: true });
      const v = coz(video, yon);
      fs.writeFileSync(path.join(d, "index.html"), html(v));
      ses(v, d);   // müzik ve efektler her yön için kendi zamanlamasıyla (dikey sahne değişebilir)
      const ln = path.join(d, "assets");
      if (!fs.existsSync(ln)) fs.symlinkSync("../../../assets", ln);
      fs.writeFileSync(path.join(d, "hyperframes.json"), JSON.stringify({ paths: { blocks: "compositions", components: "compositions/components", assets: "assets" } }));
      fs.writeFileSync(path.join(d, "meta.json"), JSON.stringify({ id: `${video.id}-${yon}`, name: `${video.baslik} (${yon})` }));
    }
    fs.writeFileSync(path.join(kl, "hedef"), hedef(video));
    // Kapak görseli anı: eğitimde kapak sahnesinin sonu, tanıtımda ilk sahnenin sonu (metin tam görünür)
    const p0 = ZAMAN.zamanla(video).sahneler[0];
    fs.writeFileSync(path.join(kl, "kapak_t"), String(+(p0.bas + p0.dur - 0.7).toFixed(2)));
    console.log(`${video.id.padEnd(28)} ${ZAMAN.zamanla(video).total.toFixed(1).padStart(5)} sn  ${video.baslik}`);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args[0] === "--dogrula") {
    let hata = 0;
    const sec = args.slice(1);
    for (const v of (await videolar()).filter((v) => !sec.length || sec.includes(v.id))) for (const yon of ["yatay", "dikey"]) { try { coz(v, yon); } catch (e) { hata++; console.log(`${v.id} (${yon}): ${e.message}`); } }
    UYARI.forEach((u) => console.log("uyarı:", u));
    console.log(hata ? `${hata} hata` : "tüm hedefler bulundu");
  } else if (args[0] === "--liste") {
    const hepsi = await videolar(); let top = 0;
    for (const v of hepsi) { const d = ZAMAN.zamanla(v).total; top += d; console.log(`${v.id.padEnd(28)} ${d.toFixed(1).padStart(5)} sn  ${v.baslik}`); }
    console.log(`${hepsi.length} video · toplam ${(top / 60).toFixed(1)} dk (her biri yatay + dikey)`);
  } else await uret(args);
}
