# GitHub Araştırması ve Hype Promo

## İncelenen projeler (ticari kullanım açısından)

| Proje | Ne işe yarar | Lisans | Kullanımımız |
|---|---|---|---|
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | HTML → deterministik MP4; ajanlar için 20 beceri (product-launch, motion-graphics…), 48 hareket kuralı | Apache 2.0 | Kod kopyalanmadı; **hareket ve kurgu kuralları** okunup kendi motorumuza uygulandı |
| [greensock/GSAP](https://github.com/greensock/gsap) | Animasyon kütüphanesi (SplitText, MorphSVG dahil tüm eklentiler 2025’ten beri ücretsiz) | Ücretsiz, ticari serbest | Gerek duyulmadı; aynı eğriler kendi `lib.js` motorumuzda |
| Remotion | React ile video | Şirketler için ücretli lisans | Kullanılmadı |
| [feitangyuan/motion-web](https://github.com/feitangyuan/motion-web) | Hareket tasarımı ilkeleri | CC BY-NC (ticari yasak) | Yalnızca ilkeler (önceki aşama) |

## HyperFrames’ten öğrenilip uygulanan teknikler

| Teknik | Kural | Promo’da nerede |
|---|---|---|
| **Hız tepesinde kesme** (zoom-through) | Çıkan öğe hızlanarak kameraya gelir, bulanıklık ve opaklık tepe noktasında sert kesme, giren öğe aynı yönde devam eder. Bulanıklık: yazıda 10px, tam ekran yüzeyde 18–20px | Açılış → uçuş, yörünge → fiyat, mühür → koşu |
| **Ters zoom-through** | “Varış” anları için: giren öğe büyükten küçüğe oturur | Fiyat → SKU, sayılar → logo |
| **Kesmeyi eğriden yap** (whip) | İki sahne aynı yönde, aynı hızda | Uçuş → yörünge (yatay), SKU → mühür (dikey) |
| **3D kamera uçuşu** | Tek mercek (perspective sabit), tek kamera durumu, bacak bacak hareket; filtre perspektif sahnesine | Panel ekranlarının arasından dalış |
| **Kinetik beat-slam** | Ortak vuruş dizisi, her ifadeye farklı giriş (ölçek / yandan / yükselme / 3D), kilitli final | “Sipariş. Onay. Teslimat. Fatura.”, “9 adım. 1 panel. 0 telefon.” |
| **3D harf çözülmesi** (hacker flip) | Harf menteşeden döner, karışık glifler gerçek harfe oturur | “Hijyen tedariği” |
| **Yörüngeye 3D giriş** | Kartlar yörünge konumunda yerinde döner, sonra elips yörüngede akar; arkadakiler bulanık | Ürün kategorileri, merkezde logo |
| **3D sayfa + spot ışığı** | Sabit eğik kart, odak dışı kararır | “Size özel fiyat” — ₺420,00 parlar |
| **Kromatik glitch** | Kuantize zaman + deterministik karma; RGB kopyalar titrer, temiz oturur | “ONAYLANDI” mühür darbesi |
| **Parçacık patlaması** | Konum = zamanın saf fonksiyonu, yerçekimi formülde | Sepete ekle, mühür, teslim konfetisi |
| **Derinlikten toplanma** (scatter-assemble) | Altın açı dağılımı, kademeli derinlik, `power3.out` toplanma | “MTS Hijyen B2B” logo montajı |
| **Değerle büyüyen sayaç** | Sayı arttıkça yazı büyür | “12.000+ kurum güveniyor” |
| **Gerçek hareket bulanıklığı** | Her kare 4 alt kare (180° obtüratör) ortalaması | Tüm video |
| **Beat ızgarası** | Kesmeler ve vuruşlar 120 BPM ızgarasında; ses efektleri görüntü olay listesinden | Müzik + darbe/whoosh/mühür/pop |

## Hype promo
- Dosyalar: `motion/hype/promo.html` (sahne), `motion/hype/render.js` (hareket bulanıklıklı render), `motion/hype/audio.py` (müzik + efekt sentezi)
- Süre 52 sn · 1920×1080 · 30 fps · −14 LUFS
- Sahneler: açılış → 3D uçuş → kategori yörüngesi → özel fiyat → hızlı sipariş → onay mührü → teslimat koşusu → büyük sayılar → logo montajı
