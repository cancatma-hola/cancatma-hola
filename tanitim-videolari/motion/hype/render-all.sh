#!/bin/bash
# 60 sn'yi 10 sn'lik parçalara bölüp 4'er paralel render eder; biten parçaları atlar (yeniden başlatılabilir).
cd "$(dirname "$0")/.."
run() { f=$1; t=$((f+10)); o=hype/seg-$f.mp4
  [ -s $o.ok ] && return
  node hype/render.js --mb 4 --fps 30 --from $f --to $t --out seg-$f.mp4 > hype/seg-$f.log 2>&1 && echo ok > $o.ok; }
export -f run
printf "%s\n" 0 10 20 30 40 50 | xargs -P 4 -I{} bash -c 'run {}'
ls hype/seg-*.ok | wc -l
