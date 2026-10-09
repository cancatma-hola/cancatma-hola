# MTS Hijyen video stüdyosu

Tek bir video tanımından hem **yatay (1920×1080)** hem **dikey (1080×1920)** video üretir. HyperFrames + GSAP + WebGL shader geçişleri.

## Akış
```bash
node araclar/cek.js [ekran ...]          # panel ekranlarını 2x çek + öğe haritası (yalnız görüntüleme)
node araclar/uret.mjs --dogrula          # tanımlardaki tüm hedefler haritada var mı?
node araclar/uret.mjs [video-id ...]     # cikti/<id>/{yatay,dikey}/ projelerini ve müziği üret
node araclar/kontrol.mjs [video-id ...]  # render öncesi kareler (kontrol/) + taşan yazı raporu
araclar/render.sh [video-id ...]         # ../../videolar/<klasör>/<tür>/<id>-{yatay,dikey}.mp4 + kapaklar/<id>-<yön>.jpg
araclar/kuyruk.sh                        # hepsini sırayla render et (bitenleri atlar)
node araclar/katalog.mjs                 # ../../08-video-katalogu.md
```
Yardımcılar: `araclar/bak.mjs <ekran> [metin]`, `araclar/ozet.mjs <ekran>` (öğe ve konumları listeler).

## Tanım dili (`videolar/*.mjs`, `videolar/<klasör>/*.mjs`)
- Tüm sahne tipleri ve alanları: [`SAHNELER.md`](SAHNELER.md).
- Ekran: `ekran` (masaüstü), `telefon` (gerçek mobil ekran), `cihaz` (ikisi birlikte).
- Anlatım: `kapak`, `gundem`, `karakter`, `kelime`, `soru`, `akis`, `karsilastir`, `sayac`, `rakamlar`, `cubuk`, `test`, `kontrol`, `ipucu`, `kapanis`, `son`.
- Alt klasördeki tanımlar (ör. `videolar/2026-10-09/`) aynı adlı çıktı klasörüne yazılır.
- Hedefler: `"Metin"` birebir, `"~parça"` içerir, `"[]metin"` o metni içeren en küçük kutu, `"#2"` ikinci eşleşme, dizi = birleşim, `{x,y,w,h}` ham kutu.
- `*yıldızlı*` kelimeler sarı vurgulanır. Metinler kısa ve düz cümle; fiil sonda.
- Kayıt değiştiren adımlar (sepete ekle, onayla, kaydet) panelde yapılmaz; motor tıklamayı ve sonucu canlandırır.

## Önemli notlar
- `HyperShader.init` çağrısı üretilen `index.html` içinde **satır içi** kalmalı; render motoru shader geçişlerini oradan tanır.
- Kişisel e-posta, telefon ve "asd" test kayıtları haritada maskelenir ve videoda gri bantla kapatılır; şirket telefonu (0543 683 57 65) istisnadır.
- Mobil ekranlar (`m-` önekli) 430 px genişlikte, 3x çözünürlükte çekilir (`mobil: true` ekranlar.js'te).
- Dikey videolarda önemli metin 210–1510 px arasında kalır (Reels/TikTok/Shorts arayüzü dışında).
- Zamanlama `assets/zaman.js` içinde; hem görüntü hem müzik/efekt aynı hesaptan çıkar (120 BPM ızgarası). Eğitimlerde sakin müzik modu kullanılır.
