# MTS Hijyen B2B · Motion video üretim hattı

Zaman tabanlı HTML sahneler → Playwright ile kare kare render → ffmpeg ile MP4 + dış ses + müzik + SRT.

| Dosya | Görev |
|---|---|
| `capture.js`, `capture-shots.js` | Panel ekran görüntüleri ve odak kutuları (`shots/`). Yalnızca görüntüleme; kayıt değiştirmez, kişisel e-postaları bulanıklaştırır. |
| `kit/kit.js`, `kit/kit.css` | Zaman çizelgesi, silecek geçişi, sahneler: `title`, `screen`, `list`, `end` |
| `kit/illus.js` | İllüstrasyonlu sahneler: `chaos`, `journey` (koli/mühür), `delivery` (araç, personel, müşteri), `org` |
| `videos/*.js` | Video tanımları (sahne sırası, kamera, odak, imleç, dış ses metni) |
| `seslendir.js`, `tts.py` | Türkçe nöral dış ses (edge-tts, `tr-TR-AhmetNeural`) |
| `music.py` | Telifsiz müzik yatağı sentezi (`muzik/promo.wav`, `muzik/egitim.wav`) |
| `build.js` | Render + miksaj → `cikti/<video>.mp4` ve `cikti/<video>.srt` (çalışma çıktısı; son hâlleri `../videolar/ilk-seri/`) |
| `metin.js` | Dış ses metin belgesini üretir (`../05-dis-ses-metinleri.md`) |

## Komutlar
```bash
npm i --ignore-scripts                      # fontlar
PANEL_USER=... PANEL_PASS=... node capture.js   # ekranları yeniden çek (isteğe bağlı)
node seslendir.js V1 V2 V3 E1 E2 E6         # dış sesler (speech.platform.bing.com erişimi gerekir)
node build.js V1                            # render + miksaj
node build.js V1 --stills 3,12.5 --tl       # kontrol kareleri + sahne zamanları
```
Sahne süreleri dış ses süresine göre otomatik uzar; dış ses yoksa kelime sayısından tahmin edilir.
