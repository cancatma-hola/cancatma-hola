// Video kataloğu: tanitim-videolari/08-video-katalogu.md (başlık, süre, dosyalar, ekrandaki metinler)
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
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
    if (s.tip === "telefon") { out.push(`${s.adim ? s.adim + ". " : ""}${temiz(s.metin)} (telefon)`); (s.vurgu || []).forEach((x) => x.not && out.push(`   · ${x.not}`)); if (s.tikla?.sonuc) out.push(`   ✓ ${s.tikla.sonuc}`); }
    if (s.tip === "cihaz") out.push(`${temiz(s.metin)}${s.alt ? " — " + s.alt : ""}`);
    if (s.tip === "kelime") out.push(`${s.kelimeler.join(" ")} → ${temiz(s.son)}`);
    if (s.tip === "karakter") out.push(`${s.ad ? s.ad + (s.rol ? " (" + s.rol + ")" : "") + ": " : ""}${temiz(s.metin)}`);
    if (s.tip === "gundem") out.push(`${temiz(s.baslik || "Bu videoda")}: ${s.maddeler.join(" · ")}`);
    if (s.tip === "kontrol") out.push(`${temiz(s.baslik)}: ${s.maddeler.join(" · ")}`);
    if (s.tip === "test") out.push(`Test: ${temiz(s.soru)} (${s.secenekler.map((o, i) => (i === s.dogru ? "✓ " : "") + o).join(" / ")})${s.aciklama ? " — " + temiz(s.aciklama) : ""}`);
    if (s.tip === "rakamlar") out.push(`${temiz(s.baslik)}: ${s.kartlar.map((c) => `${c.para ? "₺" : c.onek || ""}${c.deger.toLocaleString("tr-TR")}${c.sonek ? " " + c.sonek : ""} ${c.etiket}`).join(" · ")}`);
    if (s.tip === "son" && s.metin) out.push(`Kapanış: ${temiz(s.metin)}`);
    if (s.tip === "kapanis") out.push(`Kapanış: ${temiz(s.slogan)}${s.cta ? " · " + s.cta : ""}`);
  }
  return out;
}
// Stüdyo dışında üretilen videolar (dosyalar videolar/ altında; süreler dosyadan okunur)
const EK = {
  tanitim: [
    ["tanitim-00-hype-promo", "Hype promo"],
    ["tanitim-01-kontrol", "Kontrol sizde"],
    ["tanitim-02-periyodik", "Bir kez kurun"],
    ["tanitim-03-cari", "Cari ve fatura"],
    ["tanitim-04-sadakat", "Her siparişte kazanın"],
  ],
  "ilk-seri": [
    ["ilk-seri-v1-tek-panel", "Hijyen tedariğiniz tek panelde"],
    ["ilk-seri-v2-siparisin-yolculugu", "Bir siparişin yolculuğu"],
    ["ilk-seri-v3-kurumsal-kontrol", "Kurumsal kontrol: onay, bütçe, yetki"],
    ["ilk-seri-v4-cari-ve-finans", "Cari ve finans şeffaflığı"],
    ["ilk-seri-e01-giris-ve-ozet", "Panele giriş ve özet ekranı"],
    ["ilk-seri-e02-katalogdan-siparis", "Katalogdan sipariş verme"],
    ["ilk-seri-e03-hizli-siparis", "Hızlı sipariş: SKU ve Excel/CSV"],
    ["ilk-seri-e04-periyodik-ve-listeler", "Periyodik siparişler ve listeler"],
    ["ilk-seri-e05-siparis-takibi", "Siparişlerimi takip etmek"],
    ["ilk-seri-e06-onaylar-ve-kurallar", "Onaylarım ve onay kuralları"],
    ["ilk-seri-e07-kullanicilar-ve-butceler", "Kullanıcılar, yetkiler, departman bütçeleri"],
    ["ilk-seri-e08-ekstre-ve-faturalar", "Cari ekstre ve faturalar"],
    ["ilk-seri-e09-teklif-numune-iade", "Teklif iste, paketler, numune ve iade"],
    ["ilk-seri-e10-sadakat-kupon-davet", "Sadakat, kupon ve davet"],
  ],
  arsiv: [
    ["hype-promo-ilk-surum", "Hype promo · ilk sürüm (eski motor)"],
    ["stil-a-klinik-beyaz", "Stil denemesi A · Klinik beyaz (seçilen stil)"],
    ["stil-b-gece-vardiyasi", "Stil denemesi B · Gece vardiyası"],
    ["stil-c-koli-muhur", "Stil denemesi C · Koli ve mühür (seçilen anlar)"],
  ],
};
const VID = path.resolve(KOK, "../../videolar");
const dosyaSure = (tur, ad, yon) => {
  const f = path.join(VID, tur, `${ad}-${yon}.mp4`);
  if (!fs.existsSync(f)) return null;
  return Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]).toString());
};
const no = (id) => id.match(/-([ve]?)(\d+)-/).slice(1).map((x, i) => (i ? String(+x) : x.toUpperCase())).join("");

const hepsi = await videolar();
let md = `# Video kataloğu

Tüm videolar \`videolar/\` klasöründedir. Dosya adı: \`<tür>-<no>-<konu>-<yatay|dikey>.mp4\`.
- **yatay** 1920×1080 (web sitesi, YouTube, sunum) · **dikey** 1080×1920 (Reels, Shorts, TikTok, WhatsApp durum)

\`\`\`
videolar/
├── 2026-10-09/ 9 Ekim serisi: egitim/ ve tanitim/ (yatay + dikey, kapaklar/)
├── egitim/     eğitim videoları (yatay + dikey)
├── tanitim/    tanıtım ve promo videoları (yatay + dikey)
├── ilk-seri/   ilk üretilen eğitim ve süreç videoları (yatay + altyazı)
└── arsiv/      ilk hype promo ve stil denemeleri
\`\`\`
Stüdyo videolarının kaynak tanımları: \`hyperframes/studyo/videolar/\`. Yeniden üretmek için: \`node araclar/uret.mjs <ad>\` → \`araclar/render.sh <ad>\`.

`;
for (const [tur, ad] of [["egitim", "Eğitim videoları"], ["tanitim", "Tanıtım videoları"]]) {
  const l = hepsi.filter((v) => v.tur === tur && !v.klasor);
  const satir = [
    ...l.map((v) => ({ id: v.id, baslik: v.baslik, y: ZAMAN.zamanla(v).total, d: ZAMAN.zamanla(v).total })),
    ...(EK[tur] || []).map(([id, baslik]) => ({ id, baslik, y: dosyaSure(tur, id, "yatay"), d: dosyaSure(tur, id, "dikey") })),
  ].sort((a, b) => a.id.localeCompare(b.id));
  const top = satir.reduce((a, s) => a + s.y, 0);
  md += `## ${ad} (${satir.length} video · toplam ${sure(top)})\n\n| No | Video | Süre | Dosya |\n|---|---|---|---|\n`;
  satir.forEach((s) => {
    const sr = s.d == null ? `${sure(s.y)} · yalnız yatay` : Math.abs(s.d - s.y) > 1 ? `${sure(s.y)} · dikey ${sure(s.d)}` : sure(s.y);
    md += `| ${no(s.id)} | ${s.baslik} | ${sr} | \`${tur}/${s.id}\` |\n`;
  });
  md += `\n### Ekrandaki metinler\n\n`;
  if (EK[tur]) md += `Tanıtım 01–04 (P1–P4) ve dikey kesimleri: \`07-tanitim-serisi.md\`. Hype promo: \`06-arastirma-ve-hype-promo.md\`.\n\n`;
  for (const v of l) md += `**${v.baslik}** (\`${v.id}\`)\n\n` + metinler(v).map((m) => (m.startsWith("   ") ? `  - ${m.trim()}` : `- ${m}`)).join("\n") + "\n\n";
}
for (const k of [...new Set(hepsi.filter((v) => v.klasor && !v.klasor.startsWith("_")).map((v) => v.klasor))].sort()) {
  md += `## ${k} serisi\n\nDosyalar \`videolar/${k}/egitim/\` ve \`videolar/${k}/tanitim/\` altında; kapak görselleri \`kapaklar/\` klasöründe. Plan: \`09-seri-${k}.md\`.\n\n`;
  for (const [tur, ad] of [["egitim", "Eğitim videoları"], ["tanitim", "Tanıtım videoları"]]) {
    const l = hepsi.filter((v) => v.klasor === k && v.tur === tur), top = l.reduce((a, v) => a + ZAMAN.zamanla(v).total, 0);
    if (!l.length) continue;
    md += `### ${ad} (${l.length} video · toplam ${sure(top)})\n\n| No | Video | Süre | Dosya |\n|---|---|---|---|\n`;
    l.forEach((v) => { md += `| ${no(v.id)} | ${v.baslik} | ${sure(ZAMAN.zamanla(v).total)} | \`${k}/${tur}/${v.id}\` |\n`; });
    md += `\n#### Ekrandaki metinler\n\n`;
    for (const v of l) md += `**${v.baslik}** (\`${v.id}\`)\n\n` + metinler(v).map((m) => (m.startsWith("   ") ? `  - ${m.trim()}` : `- ${m}`)).join("\n") + "\n\n";
  }
}
{
  const l = EK["ilk-seri"].map(([id, baslik]) => ({ id, baslik, y: dosyaSure("ilk-seri", id, "yatay") }));
  md += `## İlk seri (${l.length} video · toplam ${sure(l.reduce((a, s) => a + s.y, 0))})\n\nİlk motorla üretilen videolar. Yalnız yatay; dış ses yok. Her videonun altyazısı aynı adla \`.srt\` dosyasında. Kurgu: \`04-video-plani.md\`.\n\n| No | Video | Süre | Dosya |\n|---|---|---|---|\n`;
  l.forEach((s) => { md += `| ${no(s.id)} | ${s.baslik} | ${sure(s.y)} | \`ilk-seri/${s.id}\` |\n`; });
}
md += `\n## Arşiv\n\n| Video | Süre | Dosya |\n|---|---|---|\n`;
EK.arsiv.forEach(([id, baslik]) => { md += `| ${baslik} | ${sure(dosyaSure("arsiv", id, "yatay"))} | \`arsiv/${id}\` |\n`; });
md += `| Stil karşılaştırma görseli | — | \`arsiv/stil-karsilastirma.png\` |\n`;
fs.writeFileSync(path.resolve(KOK, "../../08-video-katalogu.md"), md);
console.log("08-video-katalogu.md yazıldı", hepsi.length, "stüdyo videosu +", Object.values(EK).flat().length, "diğer");
