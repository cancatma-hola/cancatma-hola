# Tanıtım serisi (HyperFrames)

Dört yatay tanıtım videosu ve her birinin 15 saniyelik dikey (1080×1920) kesimi. Metinler kısa ve düz cümlelerle yazıldı. Rakamlar paneldeki gerçek verilerden alındı.

| Video | Süre | Konu | Görsel fikir | Ekrandaki metinler |
|---|---|---|---|---|
| P1 · Kontrol sizde | 30 sn | Departman bütçesi, onay kuralları, tek tıkla onay | Departman çipleri → dolan bütçe çubukları → yükselen onay basamakları → onay mührü | Her departman sipariş veriyor. / Bütçeyi kim takip ediyor? / Her departmana aylık bütçe tanımlayın. / Büyük siparişler onayınıza düşer. / Küçük siparişler beklemeden ilerler. / Tek tıkla onaylayın. / Kontrol sizde. |
| P2 · Bir kez kurun | 30 sn | Periyodik siparişler, sipariş listeleri | Üst üste yığılan aylık sipariş kartları → takvime kendiliğinden düşen koliler → listeden tek tıkla sepete ekleme | Her ay aynı siparişi mi veriyorsunuz? / Periyodik siparişi bir kez kurun. / Sistem siparişi her ay kendisi oluşturur. / Tüm periyodik siparişleriniz tek ekranda. / Sık aldıklarınızı tek tıkla sepete ekleyin. / Bir kez kurun, sistem hatırlasın. |
| P3 · Cari ve fatura | 30 sn | Açık bakiye, kredi limiti, cari ekstre, e-fatura | Savrulan evraklar → kredi halkası ve bakiye kartları → ekstrede satır vurgusu → PDF indirme | Ekstre ve fatura takibi zor mu? / Cari durumunuzu anlık görün. / Tüm hareketleriniz tek ekstrede. / e-Faturalarınızı tek tıkla indirin. / Faturalar Logo ERP üzerinden otomatik düzenlenir. / Cari takibi artık çok kolay. |
| P4 · Her siparişte kazanın | 25 sn | Sadakat puanı, kademe, kuponlar | Koliden fırlayan puan jetonları → puan sayacı ve Altın Müşteri rozeti → kupon kodları | Her sipariş puan kazandırır. / Bu ay +575 puan / Puan biriktikçe kademeniz yükselir. / Puanlarınızı kupona dönüştürün. / 49.833 puan ≈ ₺4.980 kupon değeri / Her siparişte kazanın. |

Dikey kesimler (D1–D4) aynı hikâyeyi üç sahnede anlatır: soru → ana görsel → logo.

## Dosyalar
- Kaynak: `hyperframes/seri/<video>/index.html`, ortak parçalar `hyperframes/seri/assets/kit.js` ve `kit.css`
- Ses: `node sesler/olustur.mjs <video>` (HTML içindeki vuruş listesinden müzik ve efekt üretir)
- Render: `HF=<hyperframes yolu> ./render.sh p1-kontrol d1-kontrol ...` → `videolar/tanitim/tanitim-01-kontrol-yatay.mp4` ve `-dikey.mp4` (P1–P4 = tanıtım 01–04, D1–D4 bunların dikey kesimi)
