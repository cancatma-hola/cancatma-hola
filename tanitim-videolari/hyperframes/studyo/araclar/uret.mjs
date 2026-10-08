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

// ── Video tanımlarını yükle
export async function videolar() {
  const out = [];
  for (const f of fs.readdirSync(path.join(KOK, "videolar")).filter((f) => f.endsWith(".mjs")).sort()) {
    const m = await import(pathToFileURL(path.join(KOK, "videolar", f)).href);
    out.push(...(Array.isArray(m.default) ? m.default : [m.default]));
  }
  return out;
}

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
const GIZLI = /@(gmail|hotmail|outlook|yahoo)\.|\basd\b|05\d{2}\s?\d{3}\s?\d{2}\s?\d{2}|^0533/i;
function gizle(ekran) {
  return harita(ekran).ogeler.filter((o) => o.t && !o.k && (o.b || GIZLI.test(o.t)) && o.w < 900).map(oge);
}
const VARSAYILAN = { hesap: { x: 555, y: 205, w: 1095, h: 840 }, magaza: { x: 270, y: 200, w: 1380, h: 860 } };

function coz(video, yon) {
  const v = structuredClone(video);
  v.yon = yon;
  v.sahneler.forEach((s) => {
    if (s.tip !== "ekran") return;
    const e = s.ekran, h = harita(e);
    s.dosya = `assets/ekran/${e}.jpg`;
    s.url = h.son.replace(/^\/tr/, "").replace(/\?.*$/, "") || "";
    const b = (yon === "dikey" && s.bolgeD) || s.bolge || (h.son.startsWith("/tr/hesap") ? VARSAYILAN.hesap : VARSAYILAN.magaza);
    s.r = typeof b === "string" || Array.isArray(b) ? bul(e, b) : b;
    if (s.pay) s.r = { x: s.r.x - s.pay, y: s.r.y - s.pay, w: s.r.w + 2 * s.pay, h: s.r.h + 2 * s.pay };
    (s.vurgu || []).forEach((x) => { x.r = bul(e, x.hedef); });
    if (s.yaz) s.yaz.r = bul(e, s.yaz.hedef);
    if (s.tikla) s.tikla.r = bul(e, s.tikla.hedef);
    s.gizle = gizle(e);
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
    const m4a = ses(video, kl);
    for (const yon of ["yatay", "dikey"]) {
      const d = path.join(kl, yon);
      fs.mkdirSync(d, { recursive: true });
      const v = coz(video, yon);
      fs.writeFileSync(path.join(d, "index.html"), html(v));
      fs.copyFileSync(m4a, path.join(d, "ses.m4a"));
      const ln = path.join(d, "assets");
      if (!fs.existsSync(ln)) fs.symlinkSync("../../../assets", ln);
      fs.writeFileSync(path.join(d, "hyperframes.json"), JSON.stringify({ paths: { blocks: "compositions", components: "compositions/components", assets: "assets" } }));
      fs.writeFileSync(path.join(d, "meta.json"), JSON.stringify({ id: `${video.id}-${yon}`, name: `${video.baslik} (${yon})` }));
    }
    fs.rmSync(m4a);
    console.log(`${video.id.padEnd(28)} ${ZAMAN.zamanla(video).total.toFixed(1).padStart(5)} sn  ${video.baslik}`);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args[0] === "--dogrula") {
    let hata = 0;
    for (const v of await videolar()) for (const yon of ["yatay", "dikey"]) { try { coz(v, yon); } catch (e) { hata++; if (yon === "yatay") console.log(`${v.id}: ${e.message}`); } }
    console.log(hata ? `${hata / 2} hata` : "tüm hedefler bulundu");
  } else if (args[0] === "--liste") {
    const hepsi = await videolar(); let top = 0;
    for (const v of hepsi) { const d = ZAMAN.zamanla(v).total; top += d; console.log(`${v.id.padEnd(28)} ${d.toFixed(1).padStart(5)} sn  ${v.baslik}`); }
    console.log(`${hepsi.length} video · toplam ${(top / 60).toFixed(1)} dk (her biri yatay + dikey)`);
  } else await uret(args);
}
