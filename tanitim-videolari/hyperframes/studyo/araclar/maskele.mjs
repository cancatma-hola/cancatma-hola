// Ekran haritalarındaki kişisel e-posta ve telefonları maskeler (gizle işareti b=1 korunur): node araclar/maskele.mjs
import fs from "node:fs";
const D = new URL("../assets/ekran/", import.meta.url);
const R = /[\w.+-]+@(gmail|hotmail|outlook|yahoo)\.[a-z.]+|05\d{2}\s?\d{3}\s?\d{2}\s?\d{2}/gi;
let n = 0;
for (const f of fs.readdirSync(D).filter((f) => f.endsWith(".json"))) {
  const m = JSON.parse(fs.readFileSync(new URL(f, D), "utf8"));
  for (const o of m.ogeler) {
    if (o.t && R.test(o.t)) { o.t = o.t.replace(R, "[gizli]"); o.b = 1; n++; }
    R.lastIndex = 0;
    if (o.f) o.f = o.f.replace(R, "[gizli]");
  }
  fs.writeFileSync(new URL(f, D), JSON.stringify(m));
}
console.log(n, "öğe maskelendi");
