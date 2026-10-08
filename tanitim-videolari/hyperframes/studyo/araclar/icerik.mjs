// İçerik alanındaki öğeler (kenar menü ve üst şerit hariç): node araclar/icerik.mjs <ekran> [ymin] [ymax]
import fs from "node:fs";
const [e, y0 = 180, y1 = 1080] = process.argv.slice(2);
const m = JSON.parse(fs.readFileSync(new URL(`../assets/ekran/${e}.json`, import.meta.url), "utf8"));
const hesap = m.son.startsWith("/tr/hesap");
for (const o of m.ogeler) {
  if (o.y < +y0 || o.y > +y1 || (hesap && o.x < 555)) continue;
  const t = o.t || "";
  if (!t && !o.k) continue;
  console.log(`${o.k ? "k" : " "}${o.c ? "c" : " "} ${String(o.x).padStart(4)},${String(o.y).padStart(4)} ${String(o.w).padStart(4)}x${String(o.h).padEnd(4)} ${t.slice(0, 64)}${o.k ? "  [" + (o.f || "").slice(0, 70) + "]" : ""}`);
}
