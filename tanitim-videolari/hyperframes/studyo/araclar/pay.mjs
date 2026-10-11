// Kurgu ölçümü: panel ekranlarının payı ve ilk panel ekranına kadar geçen süre.
// Kullanım: node araclar/pay.mjs [id ...]   (id verilmezse tüm videolar)
import { createRequire } from "node:module";
import { videolar } from "./uret.mjs";
const ZAMAN = createRequire(import.meta.url)("../assets/zaman.js");
const PANEL = ["ekran", "telefon", "cihaz"], ids = process.argv.slice(2);
for (const v of (await videolar()).filter((v) => !ids.length || ids.includes(v.id))) {
  const p = ZAMAN.zamanla(v), panel = p.sahneler.filter((z) => PANEL.includes(z.tip)).reduce((a, z) => a + z.dur, 0);
  const ilk = p.sahneler.findIndex((z) => PANEL.includes(z.tip)), giris = ilk < 0 ? p.total : p.sahneler[ilk].bas;
  console.log(`${v.id.padEnd(34)} ${p.total.toFixed(1).padStart(5)} sn · panel %${String(Math.round((100 * panel) / p.total)).padStart(2)} · ilk ekran ${giris.toFixed(1)} sn · ${v.sahneler.map((s) => s.tip).join(">")}`);
}
