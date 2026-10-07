// Kullanım: node sesler/olustur.mjs p1-kontrol  → assets/muzik-p1.m4a
// HTML içindeki <script id="hits"> listesinden müzik + efekt sesi üretir (motion/hype/audio.py).
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
const name = process.argv[2], html = readFileSync(`${name}/index.html`, "utf8");
const json = html.match(/<script type="application\/json" id="hits">([\s\S]*?)<\/script>/)[1];
const hits = JSON.parse(json), dur = hits.find((h) => h.type === "meta").dur, id = name.split("-")[0];
writeFileSync(`sesler/${id}.json`, JSON.stringify(hits));
execFileSync("python3", ["../../motion/hype/audio.py", `sesler/${id}.json`, `sesler/${id}.wav`, String(dur)], { stdio: "inherit" });
execFileSync("ffmpeg", ["-v", "error", "-y", "-i", `sesler/${id}.wav`, "-c:a", "aac", "-b:a", "256k", `assets/muzik-${id}.m4a`], { stdio: "inherit" });
console.log(`assets/muzik-${id}.m4a`);
