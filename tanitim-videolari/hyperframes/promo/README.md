# Hype Promo · HyperFrames sürümü (60 sn)

`motion/hype/promo.html` (v2) videosunun [HyperFrames](https://github.com/heygen-com/hyperframes) (Apache 2.0) ile yeniden yapılmış hali.
Aynı 120 BPM vuruş ızgarası kullanıldığı için müzik ve efektler (`assets/muzik.m4a`, `motion/hype/audio.py` çıktısı) birebir senkron.

## v2'ye göre yenilikler
- **WebGL shader geçişleri** (`@hyperframes/shader-transitions`): cinematic-zoom, whip-pan, chromatic-split, flash-through-white, cross-warp-morph.
- **GSAP zaman çizelgesi**: tek duraklatılmış timeline, `back` / `elastic` / `expo` eğrileri, stagger'lı harf ve kelime girişleri.
- **Tarayıcı çerçevesi** (browser-device-stage fikri): panel ekranları adres çubuklu çerçevede, 1,6× yakın.
- **Işık geçişi** (light-sweep) başlıklarda, ürün kartında ve logoda; her sahnede yavaş süzülen ortam ışıkları.
- **Otomatik kalite kontrolü**: `check` ile 72/72 yazı WCAG AA kontrast testini geçiyor; yerleşim ve hareket denetimi temiz.

## Komutlar
```bash
npx --yes hyperframes@0.8.139 check                     # lint + çalışma + yerleşim + kontrast
npx --yes hyperframes@0.8.139 snapshot --at 3.5,17,38   # ara kareleri PNG olarak al
npx --yes hyperframes@0.8.139 render -o renders/promo.mp4 -q delivery -w 4
```
Kullanım verisi göndermemek için: `npx hyperframes telemetry disable`.

## Notlar
- Bu ortamda jsdelivr CDN kapalı olduğu için GSAP ve shader paketi `assets/vendor/` altında yerel kopya.
- `assets/parts.js`: ikonlar ve teslimat illüstrasyonu (araç, personel, müşteri) `motion/kit/` içinden.
- `HyperShader.init` mutlaka kendi `gsap.timeline({ paused: true })` nesnemizle (`timeline: tl`) çağrılmalı; aksi halde render sırasında her geçişten sonra eski sahne ~0,4 sn geri görünüyor.
- Render süresi: 4 işçiyle ~4 dk (eski motorda ~10 dk). Çıktı: `renders/promo.mp4`; paylaşım kodlamasıyla (crf 24, −14 LUFS) `videolar/tanitim/tanitim-00-hype-promo-yatay.mp4`.
- Shader geçişleri sahneleri dokuya çevirdiği için sahnelerde `var()` ve `transparent` kullanılmıyor; her `.scene` düz arka plan renginde.
