// Video kataloğu: tanitim-videolari/08-video-katalogu.md (başlık, süre, dosyalar, ekrandaki metinler)
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { videolar } from "./uret.mjs";
const require = createRequire(import.meta.url);
const KOK = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ZAMAN = require(path.join(KOK, "assets/zaman.js"));
const temiz = (t) => (t || "").replace(/\*/g, "");
const sure = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;
function metinler(v) {
  const out = [];
  for (const s of v.sahneler) {
    if (s.tip === "kapak") out.push(`${temiz(s.baslik)} — ${s.alt}`);
    if (s.tip === "ekran") { out.push(`${s.adim ? s.adim + ". " : ""}${temiz(s.metin)}`); (s.vurgu || []).forEach((x) => x.not && out.push(`   · ${x.not}`)); if (s.tikla?.sonuc) out.push(`   ✓ ${s.tikla.sonuc}`); }
    if (s.tip === "ipucu") out.push(`${temiz(s.baslik)}: ${s.maddeler.map((m) => m[1]).join(" · ")}`);
    if (s.tip === "soru") out.push(temiz(s.metin) + (s.alt ? ` — ${s.alt}` : ""));
    if (s.tip === "sayac") out.push(`${temiz(s.baslik)}: ${s.para ? "₺" : ""}${s.deger.toLocaleString("tr-TR")}${s.sonek ? " " + s.sonek : ""}${s.alt ? " — " + s.alt : ""}`);
    if (s.tip === "cubuk") out.push(`${temiz(s.baslik)} (${s.satirlar.map((r) => r[0]).join(", ")})`);
    if (s.tip === "akis") out.push(`${temiz(s.baslik)} ${s.adimlar.map((a) => a[1]).join(" → ")}`);
    if (s.tip === "karsilastir") out.push(`${temiz(s.baslik)} ${s.once}: ${s.sol.join(", ")} / ${s.sonra}: ${s.sag.join(", ")}`);
    if (s.tip === "kapanis") out.push(`Kapanış: ${temiz(s.slogan)}`);
  }
  return out;
}
const hepsi = await videolar();
let md = `# Video kataloğu

Tüm videolar hem **yatay (1920×1080)** hem **dikey (1080×1920, Reels/Shorts)** olarak üretilir. Dosyalar \`videolar/egitim/\` ve \`videolar/tanitim/\` klasörlerindedir: \`<ad>-yatay.mp4\`, \`<ad>-dikey.mp4\`.
Kaynak tanımlar: \`hyperframes/studyo/videolar/\`. Yeniden üretmek için: \`node araclar/uret.mjs <ad>\` → \`araclar/render.sh <ad>\`.

`;
for (const [tur, ad] of [["egitim", "Eğitim videoları"], ["tanitim", "Tanıtım videoları"]]) {
  const l = hepsi.filter((v) => v.tur === tur), top = l.reduce((a, v) => a + ZAMAN.zamanla(v).total, 0);
  md += `## ${ad} (${l.length} video · toplam ${sure(top)})\n\n| # | Video | Süre | Dosya |\n|---|---|---|---|\n`;
  l.forEach((v, i) => { md += `| ${i + 1} | ${v.baslik} | ${sure(ZAMAN.zamanla(v).total)} | \`${v.id}\` |\n`; });
  md += `\n### Ekrandaki metinler\n\n`;
  for (const v of l) md += `**${v.baslik}** (\`${v.id}\`)\n\n` + metinler(v).map((m) => (m.startsWith("   ") ? `  - ${m.trim()}` : `- ${m}`)).join("\n") + "\n\n";
}
fs.writeFileSync(path.resolve(KOK, "../../08-video-katalogu.md"), md);
console.log("08-video-katalogu.md yazıldı", hepsi.length, "video");
