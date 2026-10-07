#!/bin/bash
# Kullanım: ./render.sh p1-kontrol p2-periyodik ...  → ../../motion/cikti/<ad>.mp4 (+ -paylasim.mp4)
H=${HF:-npx --yes hyperframes@0.8.139}
cd "$(dirname "$0")"
for p in "$@"; do
  (cd $p && $H render -o renders/video.mp4 -q delivery -w 4 > render.log 2>&1) || { echo "HATA: $p"; continue; }
  out=../../motion/cikti/$p
  ffmpeg -v error -y -i $p/renders/video.mp4 -c:v copy -af "loudnorm=I=-14:TP=-1:LRA=9" -c:a aac -b:a 192k -ar 48000 -movflags +faststart $out.mp4
  ffmpeg -v error -y -i $out.mp4 -c:v libx264 -preset slow -crf 24 -c:a copy -movflags +faststart $out-paylasim.mp4
  echo "tamam: $out.mp4"
done
