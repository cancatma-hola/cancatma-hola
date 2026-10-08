// Ekranın içerik alanındaki başlık, buton ve kutuların kısa dökümü: node araclar/ozet.mjs <ekran> [ekran ...]
import fs from "node:fs";
for (const e of process.argv.slice(2)) {
  const m = JSON.parse(fs.readFileSync(new URL(`../assets/ekran/${e}.json`, import.meta.url), "utf8"));
  const hesap = m.son.startsWith("/tr/hesap"), seen = new Set(), out = [];
  for (const o of m.ogeler) {
    if (o.y < 200 || (hesap ? o.x < 555 : o.x < 270) || o.y > 1075) continue;
    let t = o.t || "";
    if (!t && o.k) t = "[" + (o.f || "").slice(0, 50) + "]";
    if (!t || t.length < 2 || seen.has(t) || /^[\d\s.,₺%+-]+$/.test(t) && !o.c) continue;
    seen.add(t); out.push(`${o.c ? "▸" : o.k ? "□" : " "}${t.slice(0, 58)} @${o.x},${o.y},${o.w}x${o.h}`);
  }
  console.log(`== ${e} (${m.son})\n` + out.slice(0, +(process.env.N || 45)).join("\n"));
}
