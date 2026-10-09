#!/bin/bash
# Tarihli seri kuyruğu: videolar/<klasör>/*.mjs dosyaları hazır oldukça (yanında <dosya>.hazir işareti) üretir ve render eder.
# Kullanım: araclar/kuyruk-tarih.sh 2026-10-09 [beklenen dosya sayısı]
# Biten videoları atlar; kesilirse yeniden başlatılabilir. Tüm dosyalar işlendiğinde "KUYRUK BİTTİ" yazar.
cd "$(dirname "$0")/.."
K=$1; N=${2:-8}; export HF=${HF:-npx --yes hyperframes@0.8.139}
mkdir -p "videolar/$K/.islendi"
while :; do
  for f in videolar/$K/*.mjs; do
    b=$(basename "$f" .mjs); [ -f "videolar/$K/$b.hazir" ] || continue
    [ -f "videolar/$K/.islendi/$b" ] && [ ! "videolar/$K/$b.hazir" -nt "videolar/$K/.islendi/$b" ] && continue
    ids=$(node -e "import('./$f').then(m=>console.log(m.default.map(v=>v.id).join(' ')))")
    echo "== $b: $ids"
    node araclar/uret.mjs $ids && araclar/render.sh $ids && touch "videolar/$K/.islendi/$b"
  done
  n=$(ls videolar/$K/.islendi | wc -l)
  [ "$n" -ge "$N" ] && { echo "KUYRUK BİTTİ"; break; }
  sleep 60
done
