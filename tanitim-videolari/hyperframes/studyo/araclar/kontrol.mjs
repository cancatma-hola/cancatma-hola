// Hızlı kalite kontrolü: her videonun önemli anlarından kare alır (kontrol/<id>-<yon>.jpg) ve taşan yazıları raporlar.
// Kullanım: node araclar/kontrol.mjs [id ...] [--yon yatay|dikey]
import fs from "node:fs";
import path from "node:path";
import { execSync, execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
const require = createRequire(import.meta.url);
const KOK = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ZAMAN = require(path.join(KOK, "assets/zaman.js"));
const { chromium } = require(path.join(execSync("npm root -g").toString().trim(), "playwright"));
const args = process.argv.slice(2), yi = args.indexOf("--yon"), yonlar = yi >= 0 ? [args[yi + 1]] : ["yatay", "dikey"];
const ids = args.filter((a, i) => !a.startsWith("--") && (yi < 0 || i !== yi + 1));
const OUT = path.join(KOK, "kontrol"); fs.mkdirSync(OUT, { recursive: true });

function anlar(v) {
  const p = ZAMAN.zamanla(v), t = [];
  p.sahneler.forEach((z) => {
    if (z.tip === "ekran" || z.tip === "telefon") { z.vurgu.forEach((x) => t.push(z.bas + x + 1.8)); if (z.yaz) t.push(z.bas + z.yaz.bit + 0.3); if (z.tikla) t.push(z.bas + z.tikla.sonuc + 0.6); if (!z.vurgu.length && !z.tikla && !z.yaz) t.push(z.bas + z.dur * 0.6); }
    else t.push(z.bas + z.dur * 0.75);
  });
  return t.map((x) => +x.toFixed(2));
}

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--no-sandbox", "--allow-file-access-from-files"] });
const dirs = fs.readdirSync(path.join(KOK, "cikti")).filter((d) => !ids.length || ids.includes(d)).sort();
for (const id of dirs) for (const yon of yonlar) {
  const f = path.join(KOK, "cikti", id, yon, "index.html"); if (!fs.existsSync(f)) continue;
  const dikey = yon === "dikey", w = dikey ? 1080 : 1920, h = dikey ? 1920 : 1080;
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  // Kontrolde shader kütüphanesi yerine basit geçiş: sahne görünürlüğü aynı zaman çizelgesiyle yönetilir
  await page.addInitScript(() => {
    const stub = { init(c) { const tl = c.timeline; c.scenes.forEach((id, i) => i && tl.set("#" + id, { opacity: 0 }, 0));
      c.transitions.forEach((t, i) => { tl.fromTo("#" + c.scenes[i + 1], { opacity: 0 }, { opacity: 1, duration: t.duration }, t.time);
        tl.fromTo("#" + c.scenes[i], { opacity: 1 }, { opacity: 0, duration: t.duration }, t.time); }); return tl; } };
    Object.defineProperty(window, "HyperShader", { get: () => stub, set: () => {}, configurable: false });
  });
  const hatalar = []; page.on("pageerror", (e) => hatalar.push(e.message));
  await page.goto(pathToFileURL(f).href); await page.waitForTimeout(1200);
  const v = await page.evaluate(() => window.VIDEO);
  if (!v) { console.log(id, yon, "YÜKLENEMEDİ", hatalar.join(" | ")); await page.close(); continue; }
  const T = anlar(v), kareler = [], uyari = new Set();
  for (const [i, t] of T.entries()) {
    await page.evaluate((t) => { window.__timelines.main.seek(t, false); }, t); await page.waitForTimeout(120);
    const tasan = await page.evaluate(([w, h]) => {
      const out = [];
      document.querySelectorAll(".scene").forEach((sc) => { if (+getComputedStyle(sc).opacity < 0.5) return;
        sc.querySelectorAll(".h1,.h2,.note,.chip,.toast,.card,.tile,.wm").forEach((el) => { const r = el.getBoundingClientRect(), o = +getComputedStyle(el).opacity;
          if (o > 0.5 && r.width > 0 && (r.left < -2 || r.right > w + 2 || r.top < -2 || r.bottom > h + 2)) out.push(`${el.className.split(" ")[0]} "${(el.innerText || "").slice(0, 40)}" (${Math.round(r.left)},${Math.round(r.top)},${Math.round(r.right)},${Math.round(r.bottom)})`); });
        sc.querySelectorAll(".h1,.h2").forEach((el) => { if (el.scrollWidth > el.clientWidth + 4) out.push(`taşan satır "${el.innerText.slice(0, 40)}"`); }); });
      return out; }, [w, h]);
    tasan.forEach((x) => uyari.add(x));
    const k = path.join(OUT, `_k${i}.jpg`); await page.screenshot({ path: k, type: "jpeg", quality: 70 }); kareler.push(k);
  }
  const n = kareler.length, cols = dikey ? Math.min(n, 6) : Math.min(n, 4), rows = Math.ceil(n / cols), tw = dikey ? 360 : 640;
  const inp = kareler.flatMap((k) => ["-i", k]);
  const filt = kareler.map((_, i) => `[${i}]scale=${tw}:-1,drawtext=text='${T[i]}':x=8:y=8:fontsize=24:fontcolor=yellow:box=1:boxcolor=black@0.6[v${i}]`).join(";")
    + ";" + kareler.map((_, i) => `[v${i}]`).join("") + `xstack=inputs=${n}:layout=` + kareler.map((_, i) => `${(i % cols) ? Array(i % cols).fill("w0").join("+") : "0"}_${Math.floor(i / cols) ? Array(Math.floor(i / cols)).fill("h0").join("+") : "0"}`).join("|") + `:fill=black`;
  const out = path.join(OUT, `${id}-${yon}.jpg`);
  execFileSync("ffmpeg", ["-v", "error", "-y", ...inp, "-filter_complex", filt, out]);
  kareler.forEach((k) => fs.rmSync(k));
  console.log(`${id}-${yon}: ${n} kare${hatalar.length ? " · HATA: " + hatalar.join(" | ") : ""}${uyari.size ? "\n   UYARI " + [...uyari].join("\n   UYARI ") : ""}`);
  await page.close();
}
await browser.close();
