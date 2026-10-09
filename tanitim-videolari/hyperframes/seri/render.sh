#!/bin/bash
# Kullanım: ./render.sh p1-kontrol d1-kontrol ...
# Çıktı: ../../videolar/tanitim/tanitim-0<n>-<ad>-{yatay,dikey}.mp4  (p = yatay, d = 15 sn dikey kesim)
H=${HF:-npx --yes hyperframes@0.8.139}
cd "$(dirname "$0")"
for p in "$@"; do
  (cd $p && $H render -o renders/video.mp4 -q delivery -w 4 > render.log 2>&1) || { echo "HATA: $p"; continue; }
  [ "${p:0:1}" = d ] && yon=dikey || yon=yatay
  out=../../videolar/tanitim/tanitim-0${p:1:1}-${p#*-}-$yon.mp4
  ffmpeg -nostdin -v error -y -i $p/renders/video.mp4 -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p \
    -af "loudnorm=I=-14:TP=-1:LRA=9" -c:a aac -b:a 192k -ar 48000 -movflags +faststart $out
  echo "tamam: $out"
done
