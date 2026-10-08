#!/bin/bash
# Kullanım: araclar/render.sh [id ...]   (id verilmezse cikti/ altındaki hepsi)
# Çıktı: tanitim-videolari/videolar/{egitim,tanitim}/<id>-{yatay,dikey}.mp4 · var olanı atlar (kesintide kaldığı yerden devam eder)
cd "$(dirname "$0")/.."
H=${HF:-npx --yes hyperframes@0.8.139}
HEDEF=../../videolar
ids=("$@"); [ ${#ids[@]} -eq 0 ] && ids=($(ls cikti))
for id in "${ids[@]}"; do
  tur=${id%%-*}; mkdir -p "$HEDEF/$tur"
  for yon in yatay dikey; do
    out="$HEDEF/$tur/$id-$yon.mp4"; d="cikti/$id/$yon"
    [ -s "$out" ] && continue
    [ -f "$d/index.html" ] || continue
    if (cd "$d" && $H render -o renders/video.mp4 -q standard -w 4 > render.log 2>&1); then
      ffmpeg -nostdin -v error -y -i "$d/renders/video.mp4" -c:v libx264 -preset medium -crf 25 -pix_fmt yuv420p \
        -af "loudnorm=I=-14:TP=-1:LRA=9" -c:a aac -b:a 160k -ar 48000 -movflags +faststart "$out.tmp.mp4" && mv "$out.tmp.mp4" "$out"
      rm -rf "$d/renders"
      echo "tamam $out $(du -h "$out" | cut -f1)"
    else echo "HATA $id $yon (bkz. $d/render.log)"; fi
  done
done
