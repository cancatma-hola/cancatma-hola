// Kullanım: node seslendir.js V1 [E1 ...]  → ses/<video>/<id>.mp3 (var olanlar atlanır; FORCE=1 ile yeniden)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
for (const id of process.argv.slice(2)) {
  const V = require(path.join(__dirname, 'videos', id + '.js'));
  const dir = path.join(__dirname, 'ses', id);
  fs.mkdirSync(dir, { recursive: true });
  const items = V.scenes.flatMap(s => (s.vo || []).map(v => ({ id: v.id, text: v.text })));
  fs.writeFileSync(path.join(dir, 'satirlar.json'), JSON.stringify(items, null, 1));
  execSync(`python3 "${path.join(__dirname, 'tts.py')}" "${path.join(dir, 'satirlar.json')}" "${dir}"`, { stdio: 'inherit' });
}
