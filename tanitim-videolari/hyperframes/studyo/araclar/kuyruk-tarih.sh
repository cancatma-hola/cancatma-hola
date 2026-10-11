#!/bin/bash
# Tarihli seri kuyruğu: videolar/<klasör>/*.mjs dosyalarını üretir ve render eder.
# 1) Taslak geçişi: her dosya bir kez hemen render edilir (CPU boş beklemesin).
# 2) Onay geçişi: dosyanın yanında <dosya>.hazir işareti oluşunca yeniden üretilir; yalnız değişen videolar yeniden render edilir (render.md5).
# Kullanım: araclar/kuyruk-tarih.sh 2026-10-09 [beklenen dosya sayısı]   · kesilirse yeniden başlatılabilir
cd "$(dirname "$0")/.."
K=$1; N=${2:-8}; export HF=${HF:-npx --yes hyperframes@0.8.139}
D="videolar/$K/.islendi"; mkdir -p "$D"
isle() {   # $1 = dosya adı (uzantısız)
  local f="videolar/$K/$1.mjs" ids
  ids=$(node -e "import('./$f?t='+Date.now()).then(m=>console.log(m.default.map(v=>v.id).join(' '))).catch(e=>process.exit(1))") || return 1
  echo "== $1 ($2): $ids"
  node araclar/uret.mjs $ids && araclar/render.sh $ids
}
while :; do
  for f in videolar/$K/*.mjs; do
    b=$(basename "$f" .mjs)
    if [ -f "videolar/$K/$b.hazir" ]; then
      [ -f "$D/$b" ] && [ "$(stat -c %Y "videolar/$K/$b.hazir")" -le "$(stat -c %Y "$D/$b")" ] && continue
      ref=$(stat -c %Y "videolar/$K/$b.hazir")   # işlem sırasında .hazir yenilenirse sonraki turda yeniden işlenir
      isle "$b" onay && touch -d "@$ref" "$D/$b"
    elif [ ! -f "$D/$b.taslak" ]; then
      isle "$b" taslak && touch "$D/$b.taslak"
    fi
  done
  n=$(ls "$D" | grep -vc taslak)
  [ "$n" -ge "$N" ] && { echo "KUYRUK BİTTİ"; break; }
  sleep 60
done
