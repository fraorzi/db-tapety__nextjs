#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Użycie: scripts/encode-video.sh <źródło> <nazwa> [długość_s] [max_wysokość]" >&2
  echo "Przykład: scripts/encode-video.sh ~/Downloads/salon.mov process-1 12 1440" >&2
  exit 1
fi

src=$1
name=$2
duration=${3:-}
height=${4:-1440}
out=public/video
mkdir -p "$out"

trim=()
[ -n "$duration" ] && trim=(-t "$duration")
scale="scale=-2:'min($height,ih)':flags=lanczos"

ffmpeg -loglevel error -y -i "$src" "${trim[@]}" -an -vf "$scale" -pix_fmt yuv420p10le \
  -c:v libsvtav1 -preset 4 -crf 38 -g 48 -svtav1-params "tune=0:film-grain=10" "$out/$name.webm"

ffmpeg -loglevel error -y -i "$src" "${trim[@]}" -an -vf "$scale" -pix_fmt yuv420p \
  -c:v libx264 -preset slow -crf 25 -profile:v high -movflags +faststart "$out/$name.mp4"

ls -lh "$out/$name.webm" "$out/$name.mp4"
