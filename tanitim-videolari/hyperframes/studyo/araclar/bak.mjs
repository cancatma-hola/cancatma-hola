// Ekran haritasında öğe arar: node araclar/bak.mjs <ekran> [metin]   (k = kutu, c = buton/bağlantı)
import fs from "node:fs";
const [e, q] = process.argv.slice(2);
const m = JSON.parse(fs.readFileSync(new URL(`../assets/ekran/${e}.json`, import.meta.url), "utf8"));
for (const o of m.ogeler) {
  const t = o.t || "", f = o.f || "";
  if (q && !t.toLowerCase().includes(q.toLowerCase()) && !(o.k && f.toLowerCase().includes(q.toLowerCase()))) continue;
  if (!q && !t) continue;
  console.log(`${o.k ? "k" : " "}${o.c ? "c" : " "} ${String(o.x).padStart(4)},${String(o.y).padStart(4)} ${String(o.w).padStart(4)}x${String(o.h).padEnd(4)} ${t.slice(0, 70)}${o.k && !t ? "  [" + f.slice(0, 60) + "]" : ""}`);
}
