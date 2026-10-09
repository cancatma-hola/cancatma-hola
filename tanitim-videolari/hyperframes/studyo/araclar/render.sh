#!/bin/bash
# Kullanım: araclar/render.sh [id ...]   (id verilmezse cikti/ altındaki hepsi)
# Çıktı: tanitim-videolari/videolar/<hedef>/<id>-{yatay,dikey}.mp4 · hedef: cikti/<id>/hedef (ör. 2026-10-09/egitim) ya da türü
# Var olanı atlar (kesintide kaldığı yerden devam eder)
cd "$(dirname "$0")/.."
H=${HF:-npx --yes hyperframes@0.8.139}
HEDEF=../../videolar
ids=("$@"); [ ${#ids[@]} -eq 0 ] && ids=($(ls cikti))
for id in "${ids[@]}"; do
  tur=$(cat "cikti/$id/hedef" 2>/dev/null || echo "${id%%-*}"); mkdir -p "$HEDEF/$tur"
  for yon in yatay dikey; do
    out="$HEDEF/$tur/$id-$yon.mp4"; d="cikti/$id/$yon"
    [ -f "$d/index.html" ] || continue
    # Güncel mi? render.md5 = render edilen index.html'in özeti. Özet yoksa (eski seriler) var olan çıktı korunur.
    if [ -s "$out" ]; then
      [ ! -f "$d/render.md5" ] && continue
      md5sum -c --quiet "$d/render.md5" >/dev/null 2>&1 && continue
      echo "değişti, yeniden: $id $yon"
    fi
    h=$(md5sum "$d/index.html")   # render başlamadan önceki tanım (render sırasında değişirse sonraki geçişte yeniden yapılır)
    if (cd "$d" && $H render -o renders/video.mp4 -q standard -w 4 > render.log 2>&1); then
      ffmpeg -nostdin -v error -y -i "$d/renders/video.mp4" -c:v libx264 -preset medium -crf 25 -pix_fmt yuv420p \
        -af "loudnorm=I=-14:TP=-1:LRA=9" -c:a aac -b:a 160k -ar 48000 -movflags +faststart "$out.tmp.mp4" && mv "$out.tmp.mp4" "$out"
      rm -rf "$d/renders"; echo "$h" > "$d/render.md5"
      # YouTube / sosyal medya kapak görseli: <hedef>/kapaklar/<id>-<yön>.jpg
      if [[ "$tur" == */* ]]; then   # yalnız tarihli serilerde
        kt=$(cat "cikti/$id/kapak_t" 2>/dev/null || echo 3); mkdir -p "$HEDEF/$tur/kapaklar"
        ffmpeg -nostdin -v error -y -ss "$kt" -i "$out" -frames:v 1 -q:v 3 "$HEDEF/$tur/kapaklar/$id-$yon.jpg"
      fi
      echo "tamam $out $(du -h "$out" | cut -f1)"
    else echo "HATA $id $yon (bkz. $d/render.log)"; fi
  done
done
