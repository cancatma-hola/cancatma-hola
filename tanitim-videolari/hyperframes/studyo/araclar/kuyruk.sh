#!/bin/bash
# Tüm videoları sırayla render eder (var olanları atlar): eğitimler → tanıtımlar → seri (P1–P4, D1–D4)
cd "$(dirname "$0")/.."
export HF=${HF:-npx --yes hyperframes@0.8.139}
araclar/render.sh $(ls cikti | grep '^egitim')
araclar/render.sh $(ls cikti | grep '^tanitim')
if [ ! -f ../seri/.yeniden-render-tamam ]; then
  (cd ../seri && ./render.sh p1-kontrol p2-periyodik p3-cari p4-sadakat d1-kontrol d2-periyodik d3-cari d4-sadakat) && touch ../seri/.yeniden-render-tamam
fi
echo "KUYRUK BİTTİ"
