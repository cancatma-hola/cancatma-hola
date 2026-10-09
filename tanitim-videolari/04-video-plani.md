# MTS Hijyen B2B – Video Serisi Planı ve Kurgu (Onay İçin)

> Durum: **Plan / onay aşaması — henüz video üretilmedi.**
> Kaynak: `panel.mtshijyen.com` üzerinde *Can Çatma (Cari Sahibi)* hesabıyla yapılan inceleme (06.10.2026). Tüm rakam, sipariş no, kişi ve departman adları paneldeki gerçek kayıtlardır.
> Görsel sistem: **A · Klinik (ana sistem)** + **C · Koli & Mühür anları**. Tüm videolarda **Türkçe dış ses** var.

---

## 0. Ortak Kurallar (tüm seri)

### Görsel sistem (A, marka renklerine uyarlandı)
Örnek videodaki turkuaz yerine paneldeki gerçek marka renkleri kullanılacak:

| Rol | Renk | Nerede |
|---|---|---|
| Zemin | `#F4F6F8` soğuk kırık beyaz | Tüm grafik sahneler |
| Mürekkep | `#0B1F33` koyu lacivert | Başlıklar, çizgiler |
| Marka mavisi | `#1D5FA8` (logo) | İlerleme rayı, aktif adım, vurgular |
| Petrol | `#0B5677` (panel üst bar) | İkincil yüzeyler, kapanış zemini |
| Vurgu | `#F5B019` (panel “Yeni Sipariş / Teklif İste” butonu) | Tek CTA, sayaç tamamlanma anı |
| C anları | Kraft `#C99866`, mühür mürekkebi **marka mavisi** | Koli, etiket, mühür |

- **Tipografi:** Inter Tight (başlık/gövde) + JetBrains Mono (sipariş no, SKU, tutar etiketleri).
- **Ekran kayıtları:** Gerçek panel, 1920×1080. Ekran kaydı **çerçevesiz** (sahte tarayıcı çerçevesi yok); hafif gölgeli “kart” olarak sahneye oturur, kamera yavaş itme (scale 1.00→1.04).
- **Vurgu dili:** imleç büyütülmüş + tıklama halkası; ilgili alan dışı %40 karartma + **silecek (squeegee) ile açılan odak çerçevesi**; ince lacivert çizgiyle alan etiketi.
- **Hareket token’ları:** hızlı 180 ms (UI geri bildirim) · standart 320 ms (panel/çerçeve) · sinematik 1.0–1.2 s (açılış/kapanış). Giriş `expo-out`, çıkış `expo-in`, nesne taşıma `in-out-quart`, mühür `sharp`, koli/araç `yay (spring)`.
- **C anları (seri boyunca sabit 4 imza):** ① koli düşüp ezilerek oturur ② etiket yapışır ③ mühür basılır (“ONAYLANDI”, “TESLİM EDİLDİ”) ④ koli rayda kayarak sonraki adıma geçer.
- **Kapanış kartı (3 sn, tüm videolarda aynı):** logo + “Hijyen tedariğiniz tek panelde.” + `panel.mtshijyen.com` · `+90 543 683 57 65`.

### Dış ses
- Ton: sıcak, güven veren, net; kurumsal ama samimi. Hız ≈ **2,3 kelime/sn** (eğitimlerde 2,0).
- Promo: tek anlatıcı. Eğitim: aynı anlatıcı, ikinci tekil (“siz”) hitap, adım adım.
- Müzik: promo’da ritmik/umut veren (≈110 BPM), eğitimde düşük seviyede ambient; dış ses altında −18 dB.
- **Karar gerekiyor:** profesyonel seslendirmen (önerilen) veya Türkçe yapay zekâ seslendirme (hızlı, düşük maliyet).

### “Teslim Edildi” sahnesi (seri imzası — Video 1 ve 2’de tam, diğerlerinde 3 sn kısa versiyon)
Düz (flat) illüstrasyon, A paleti:
1. **MTS Hijyen aracı** (lacivert, kapıda logo + tik işareti) kadraja girer, durur — süspansiyon yayla hafifçe esner.
2. **MTS personeli** (lacivert yelek, logolu) arka kapıyı açar, kolileri el arabasıyla çıkarır; koliler üst üste yayla oturur.
3. **Müşteri** (otel housekeeping şefi) tablette imza atar → **“TESLİM EDİLDİ” mührü** ekrana basılır.
4. Personel ve müşteri gülümseyerek el sıkışır; arka planda aracın yanında ikinci personel el sallar.
5. Panelde sipariş durumu **Teslim Edildi**’ye döner (gerçek ekran), etkinlik akışına bildirim düşer.
- **Karar gerekiyor:** illüstrasyon (tamamen bizim tarafımızda) **veya** gerçek araç/personel fotoğrafları (gönderirseniz kesilip hareketlendirilir — daha inandırıcı).

---

## 1. Seri Özeti

| # | Video | Tür | Süre | Hedef kitle | Öncelik |
|---|---|---|---|---|---|
| 1 | Hijyen Tedariğiniz Tek Panelde | Ana promo | **60 sn** (+30 sn ve 15 sn dikey kesim) | Yeni müşteri, bayi, sosyal medya | ★ Faz 1 |
| 2 | Bir Siparişin Yolculuğu | Süreç | **80 sn** | Müşteri + MTS iç ekip | ★ Faz 1 |
| 3 | Kurumsal Kontrol: Onay, Bütçe, Yetki | Süreç / satış | **75 sn** | Satın alma müdürleri, yöneticiler | ★ Faz 1 |
| 4 | Cari ve Finans Şeffaflığı | Süreç | **45 sn** | Muhasebe / finans | Faz 2 |
| E1 | Panele Giriş ve Özet Ekranı | Eğitim | **60 sn** | Tüm kullanıcılar | ★ Faz 1 |
| E2 | Katalogdan Sipariş Verme | Eğitim | **90 sn** | Satınalmacı | ★ Faz 1 |
| E3 | Hızlı Sipariş: SKU ve Excel/CSV | Eğitim | **60 sn** | Sık sipariş verenler | Faz 2 |
| E4 | Periyodik Siparişler ve Listeler | Eğitim | **60 sn** | Düzenli tüketim yapanlar | Faz 2 |
| E5 | Siparişlerimi Takip Etmek | Eğitim | **75 sn** | Tüm kullanıcılar | Faz 2 |
| E6 | Onaylarım ve Onay Kuralları | Eğitim | **90 sn** | Cari sahibi, yöneticiler | ★ Faz 1 |
| E7 | Kullanıcılar, Yetkiler, Departman Bütçeleri | Eğitim | **90 sn** | Cari sahibi | Faz 2 |
| E8 | Cari Ekstre ve Faturalar | Eğitim | **60 sn** | Muhasebe | Faz 2 |
| E9 | Teklif İste, Paketler, Numune ve İade | Eğitim | **75 sn** | Satınalmacı | Faz 3 |
| E10 | Sadakat, Kupon ve Davet | Eğitim | **45 sn** | Tüm kullanıcılar | Faz 3 |

Toplam ≈ **15,5 dk** içerik. **Faz 1 = 6 video (≈ 7,5 dk)**.

---

## 2. Video 1 — “Hijyen Tedariğiniz Tek Panelde” (Ana Promo, 60 sn)

**Amaç:** 1 dakikada “neden MTS Hijyen B2B?” sorusunu cevaplamak. **Yay:** sorun → çözüm → kanıt → mutlu son → çağrı.

| Süre | Görüntü / Sahne | Hareket (A + C) | Ekran yazısı | Dış ses |
|---|---|---|---|---|
| 0:00–0:05 | Masada telefon, WhatsApp mesajları, Excel tablosu, kâğıt not yığını (illüstrasyon) | Nesneler hızlı staccato düşer, ekran kalabalıklaşır | — | “Telefon, mesaj, e-posta, Excel… Hijyen tedariği neden bu kadar dağınık olsun?” |
| 0:05–0:08 | Tam ekran **silecek** kalabalığı temizler | Silecek geçişi (imza) | **Tek panel.** | “Artık değil.” |
| 0:08–0:14 | Logo + panel ana sayfası (gerçek), “12.000+ kurum güveniyor” şeridi | Logo kayar, ekran kartı yavaş itme | MTS Hijyen B2B | “MTS Hijyen B2B ile tüm hijyen ihtiyaçlarınız tek adreste.” |
| 0:14–0:21 | Kategori menüsü → Wanda Soft ürün kartları → ürün sayfası (Stok: 37 · 1 iş günü kargo) | Kategori ikonları staccato; stok rozeti vurgu | Kağıt · Kimya · Ekipman · Dispenser | “Kâğıttan kimyasala, ekipmandan dispensere; stok ve fiyatı anında görün.” |
| 0:21–0:27 | Hızlı Sipariş ekranı (SKU satırları dolar) → sepet | Satırlar daktilo gibi dolar | SKU ile saniyeler içinde | “Ürün koduyla ya da Excel’den, saniyeler içinde sipariş verin.” |
| 0:27–0:34 | Onaylarım: MTS-2026-0026 · Zeynep Kaya · İdari İşler · ₺1.779,56 → **Onayla** | Tık halkası → **C: “ONAYLANDI” mührü** | Onay zinciri sizin kurallarınızla | “Ekibiniz sipariş versin, onay sizin kurallarınızla işlesin.” |
| 0:34–0:40 | Sipariş rayı: MTS Onayladı → Hazırlanıyor → Sevkiyatta | **C: koli düşer, etiket yapışır, rayda kayar**; odometre adım sayacı | Hazırlanıyor · Sevkiyatta | “Siparişiniz depoda hazırlanır, yola çıkar; her adımı anlık izlersiniz.” |
| 0:40–0:48 | **Teslim sahnesi** (araç → personel → imza → mühür → el sıkışma) | Araç yayla durur, koliler yığılır, **“TESLİM EDİLDİ” mührü** | Teslim edildi. | “Ve kapınızda. Güler yüzlü ekibimizle, zamanında.” |
| 0:48–0:54 | Özet ekranı: Bu ay harcama, açık bakiye, kredi limiti, kategori kırılımı | KPI sayaçları 0’dan sayar, halka grafik çizilir | Harcama · Bakiye · Bütçe | “Harcamalarınız, bakiyeniz ve bütçeniz her zaman gözünüzün önünde.” |
| 0:54–0:57 | Panel “Yeni Sipariş” butonu (turuncu) büyür | Tek kararlı CTA vuruşu, öncesinde 0,3 sn durgunluk | — | “MTS Hijyen B2B.” |
| 0:57–1:00 | Kapanış kartı | Silecek ile açılır | Hijyen tedariğiniz tek panelde. · panel.mtshijyen.com | “Hijyen tedariğiniz, tek panelde.” |

**Kesimler:** 30 sn = 0:05–0:08, 0:14–0:21, 0:27–0:34, 0:40–0:48, kapanış. 15 sn dikey (1080×1920) = silecek + mühür + teslim + kapanış.

---

## 3. Video 2 — “Bir Siparişin Yolculuğu” (Süreç, 80 sn)

**Amaç:** Paneldeki gerçek 9 aşamalı durum akışını anlaşılır kılmak. **Kahraman sipariş:** `MTS-2026-0020` (05.10.2026 · Ayşe Yılmaz) — 13 mikrofiber cam bezi, 5 gürgen sap, 8 pembe bez, 8 mop, 19 Toptel · ₺2.925,48.

| Süre | Aşama (panelde) | Görüntü | Hareket | Dış ses |
|---|---|---|---|---|
| 0:00–0:06 | Açılış | “Bir sipariş. Dokuz adım.” dev tipografi | Satır maskesi; adım sayacı 01 | “Bir siparişin panelde izlediği yolu birlikte görelim.” |
| 0:06–0:14 | **Taslak** | Sepet → kalemler eklenir | Kalem satırları staccato | “Siparişiniz önce taslak olarak oluşur; dilediğiniz kadar düzenleyebilirsiniz.” |
| 0:14–0:22 | **Onay Bekleniyor** | Onay kuralı kartı: “10.000 TL üzeri → Can Çatma” | Kural kartı çevrilir, ok yöneticiye akar | “Tutar ya da departman kurallarınıza uyuyorsa, sipariş yetkili kişinin onayına düşer.” |
| 0:22–0:28 | **MTS Onayı Bekleniyor → MTS İncelemede** | Sipariş MTS ekranına geçer (grafik) | Koli rayda kayar | “Onaylanan sipariş MTS Hijyen ekibine ulaşır ve incelenir.” |
| 0:28–0:34 | **MTS Onayladı** | Mühür anı | **C: “ONAYLANDI” mührü** | “Stok ve fiyat teyit edilir; sipariş onaylanır.” |
| 0:34–0:42 | **Hazırlanıyor** | Gerçek sipariş detayı: “Sıradaki adım: Depo personeli ürünleri toplayıp paketliyor.” | **C: koli düşer, bant çekilir, etiket yapışır**; kalem sayacı 0→53 | “Depo ekibimiz ürünlerinizi toplar ve özenle paketler.” |
| 0:42–0:50 | **Sevkiyatta** | MTS aracı yükleme + rota çizgisi | Koliler araca kayar, kesikli rota çizilir | “Siparişiniz yola çıkar; durum değişimi anında bildirim olarak düşer.” |
| 0:50–1:02 | **Teslim Edildi** | **Tam teslim sahnesi** (araç, personel, imza, el sıkışma) + panelde durum güncellenir | **C: “TESLİM EDİLDİ” mührü** | “Ve teslim! Ekibimiz siparişinizi elden teslim eder; panel anında güncellenir.” |
| 1:02–1:10 | **Faturalandı** | Faturalarım + Cari Ekstre satırı belirir | Fatura kâğıdı kayar, ekstre satırı silecekle açılır | “Fatura otomatik oluşur, cari ekstrenize işlenir.” |
| 1:10–1:17 | Özet | 9 adımlı ray tamamen dolu, tüm duraklar yeşil tik | Ray doluşu + tik çizimi | “Dokuz adım, tek ekran, sıfır telefon.” |
| 1:17–1:20 | Kapanış kartı | | | “MTS Hijyen B2B.” |

---

## 4. Video 3 — “Kurumsal Kontrol: Onay, Bütçe, Yetki” (75 sn)

**Hikâye:** İdari İşler’den **Zeynep Kaya** sipariş açar → kural devreye girer → Cari Sahibi **Can Çatma** onaylar → bütçe panosu güncellenir.

| Süre | Görüntü | Hareket | Dış ses |
|---|---|---|---|
| 0:00–0:07 | Organizasyon şeması: Satın Alma, Üretim, İdari İşler, Depo ve Lojistik (gerçek departmanlar) | Düğümler yayla belirir, çizgiler çizilir | “Birden fazla departman, onlarca kullanıcı… Harcamalar kontrol altında mı?” |
| 0:07–0:17 | Kullanıcılar & Yetkiler: Genel Müdür, Satınalmacı, Görüntüleyici rolleri, onay limitleri | Rol rozetleri staccato, “45 yetki / 39 yetki / 19 yetki” sayaçları | “Her kullanıcıya rol, yetki ve onay limiti verin.” |
| 0:17–0:27 | Departman & Bütçe: Üretim ₺90.000, İdari İşler ₺45.000, Satın Alma ₺150.000, Depo ₺60.000 | Bütçe çubukları dolar (%15, %23, %2, %3) | “Departmanlara aylık bütçe tanımlayın.” |
| 0:27–0:37 | Onay Kuralları: 10.000 / 50.000 / 100.000 TL üzeri → onay zinciri | Kural kartları kademeli yığılır | “Tutar eşiklerine göre onay zincirini siz belirleyin.” |
| 0:37–0:50 | Zeynep sipariş açar (₺1.779,56) → **Onaylarım**’a düşer → Can **Onayla** (alternatif: “Revize için Geri Yolla”) | Bildirim zili, tık halkası, **C: ONAYLANDI mührü** | “Ekipten gelen sipariş onayınıza düşer; tek tıkla onaylayın ya da revizeye gönderin.” |
| 0:50–0:58 | Etkinlik akışı: “Siparişiniz otomatik onaylandı — tutar eşiğin altında” | Satır silecekle açılır | “Eşiğin altındaki siparişler ise otomatik onaylanır; kimse beklemez.” |
| 0:58–1:08 | Bütçe Panosu: kalan bütçe, kullanıcı limit kullanımı, kredi limiti ₺250.000 | Sayaçlar, ilerleme çubukları | “Bütçe ve limit kullanımını anlık izleyin; sürpriz yok.” |
| 1:08–1:12 | Teslim sahnesi kısa versiyon (3 sn) | Mühür | “Kontrol sizde, teslimat bizde.” |
| 1:12–1:15 | Kapanış kartı | | “MTS Hijyen B2B.” |

---

## 5. Video 4 — “Cari ve Finans Şeffaflığı” (45 sn)

| Süre | Görüntü | Hareket | Dış ses |
|---|---|---|---|
| 0:00–0:06 | “Bakiyeniz kaç? Vadesi ne zaman?” tipografi | Soru işaretleri silecekle temizlenir | “Bakiyeniz, vadeniz, faturalarınız… hepsi tek yerde.” |
| 0:06–0:16 | Cari Ekstre: Açık bakiye ₺15.405,55 · 0–30 gün · 31–60 · 60+ | Yaşlandırma çubukları, sayaç | “Açık bakiyenizi vade dilimlerine göre görün.” |
| 0:16–0:26 | Borç–alacak hareketleri (sipariş / tahsilat satırları) + tarih filtresi | Satırlar staccato | “Tüm sipariş ve tahsilat hareketleriniz tarih filtresiyle önünüzde.” |
| 0:26–0:34 | Faturalarım → PDF | Fatura kâğıdı kayar | “Faturalarınızı tek tıkla indirin.” |
| 0:34–0:42 | Sadakat birikimi: Altın Müşteri · 49.833 puan · kullanılabilir 4.980 ₺ | Puan sayacı, rozet parlaması | “Her siparişte puan kazanın, harcamanızda kullanın.” |
| 0:42–0:45 | Kapanış kartı | | “MTS Hijyen B2B.” |

---

## 6. Eğitim Videoları (ortak şablon)

Her eğitim videosu aynı iskeleti kullanır (izleyici formatı öğrenir):
1. **Başlık kartı (3 sn):** “Eğitim 0X · Konu adı” + adım sayısı (ör. “4 adım”).
2. **Adımlar:** her adım = adım numarası sol üstte (odometre) + gerçek ekran kaydı + odak çerçevesi + kısa ekran yazısı.
3. **İpucu kartı (4–5 sn):** sarı vurgu çizgisiyle “İpucu”.
4. **Kapanış (3 sn):** “Sıradaki eğitim: …” + kapanış kartı.

### E1 — Panele Giriş ve Özet Ekranı (60 sn)
| Süre | Adım | Ekran | Dış ses |
|---|---|---|---|
| 0:00–0:03 | Başlık | — | “Panele giriş ve özet ekranı.” |
| 0:03–0:13 | 1 · Giriş | Kurumsal Hesap Girişi: e-posta, şifre, “Beni hatırla”, Google ile devam et | “Kurumsal e-posta ve şifrenizle giriş yapın; dilerseniz Google hesabınızla devam edin.” |
| 0:13–0:25 | 2 · Özet kartları | Bu ay harcama, açık bakiye, kredi limiti, onay bekleyen | “Özet ekranında bu ayki harcamanızı, açık bakiyenizi, kredi limitinizi ve onay bekleyen siparişleri görürsünüz.” |
| 0:25–0:35 | 3 · Hızlı eylemler | Yeni Sipariş · Şablonlar · Sık Listeler | “Yeni sipariş, şablonlar ve sık listelere buradan tek tıkla ulaşın.” |
| 0:35–0:45 | 4 · Trend ve kırılım | Aylık harcama trendi, kategori kırılımı | “Aylık trendiniz ve hangi kategoriye ne harcadığınız grafiklerle hazır.” |
| 0:45–0:54 | 5 · Son siparişler ve etkinlik | Son siparişler tablosu, etkinlik akışı | “Son siparişleriniz ve tüm durum değişiklikleri akışta.” |
| 0:54–1:00 | İpucu + kapanış | Bildirim zili | “İpucu: zildeki kırmızı sayı, size bekleyen işleri gösterir.” |

### E2 — Katalogdan Sipariş Verme (90 sn)
| Süre | Adım | Ekran | Dış ses |
|---|---|---|---|
| 0:00–0:03 | Başlık | — | “Katalogdan sipariş verme.” |
| 0:03–0:15 | 1 · Ürün bulma | Arama (ürün, SKU veya barkod) + kategori menüsü | “Ürün adı, ürün kodu ya da barkodla arayın veya kategorilerden ilerleyin.” |
| 0:15–0:30 | 2 · Ürün sayfası | Wanda Soft 4 kg kağıt havlu: liste fiyatı ₺420 + KDV / koli, stok 37, 1 iş günü kargo, +4 puan | “Ürün sayfasında KDV hariç ve dahil fiyatı, stok durumunu, teslim süresini ve kazanacağınız puanı görürsünüz.” |
| 0:30–0:42 | 3 · Toplu fiyat | “Toplu alım için özel fiyat iste”, kademeli fiyat | “Toplu alımlarda kademeli fiyat otomatik uygulanır; daha büyük miktarlar için özel fiyat isteyin.” |
| 0:42–0:55 | 4 · Sepet | Sepete ekle → sepet; adet, adres, proje seçimi | “Sepette adetleri, teslimat adresini ve projeyi seçin.” |
| 0:55–1:08 | 5 · Siparişi gönder | Siparişi tamamla → durum: Onay Bekleniyor / MTS Onayı Bekleniyor | “Siparişi gönderin; kurallarınıza göre onaya ya da doğrudan MTS’ye iletilir.” |
| 1:08–1:20 | 6 · Listeye/aboneliğe ekle | “Listeye Ekle”, “Aboneliğe Çevir” | “Sık aldığınız ürünleri listeye ekleyin ya da aboneliğe çevirin.” |
| 1:20–1:30 | İpucu + kapanış | **C: koli düşer, etiket yapışır** | “İpucu: hazır paketlerde indirim otomatik uygulanır.” |

### E3 — Hızlı Sipariş: SKU ve Excel/CSV (60 sn)
Adımlar: Hızlı Sipariş sayfası → SKU + miktar satırları (555204, 7906628, ST00560…) → “CSV Yapıştır” → “Doğrula” (ürün adı, birim fiyat, satır toplamı otomatik dolar) → “Sepete Ekle” → İpucu: “En fazla 100 satır; miktar kademeli iskontoyu otomatik uygular.”

### E4 — Periyodik Siparişler ve Listeler (60 sn)
Adımlar: Periyodik Siparişler → “Aylık Temizlik Sarf Aboneliği · her ayın 5. günü · Merkez Depo, İstanbul” kartı → Yeni Şablon (sıklık, gün, ürünler, adres) → Sonraki sipariş tarihi → Sipariş Listelerim / Favorilerim → İpucu: “Sipariş detayında ‘Şablona Kaydet’ ile tek tıkla şablon oluşturun.”

### E5 — Siparişlerimi Takip Etmek (75 sn)
Adımlar: Siparişlerim (27 sipariş) → durum filtresi (11 durum) ve “Hızlı: Onay / Hazırlanıyor / Sevkiyatta / Teslim” → proje filtresi (PRJ-2026-01, PRJ-2026-02) → Excel’e Aktar → Sipariş detayı MTS-2026-0020: 9 adımlı durum rayı + “Sıradaki adım” → Yazdır/PDF, Şablona Kaydet → Bildirimler → kısa teslim sahnesi.

### E6 — Onaylarım ve Onay Kuralları (90 sn)
Adımlar: Onaylarım (2 bekleyen) → MTS-2026-0026 kartı (Zeynep Kaya · İdari İşler · Seviye 1 · kalemler) → **Onayla** (**C: ONAYLANDI mührü**) / **Revize için Geri Yolla** → Onay Kuralları → “+ Yeni Kural”: tutar aralığı, departman, onay zinciri, öncelik → mevcut kurallar (10.000 / 50.000 / 100.000 TL üzeri) → otomatik onay eşiği → İpucu: “Kademeli kurallarla büyük tutarlara ek onaylayıcı ekleyin.”

### E7 — Kullanıcılar, Yetkiler, Departman Bütçeleri (90 sn)
Adımlar: Kullanıcılar & Yetkiler → “+ Kullanıcı Davet Et” (e-posta, rol, departman, onay limiti) → roller: Cari Sahibi / Genel Müdür / Satınalmacı / Görüntüleyici → yetki sayısı ve düzenleme → Devre Dışı / Etkinleştir → Departman & Bütçe: aylık bütçe tanımı → Bütçe Panosu’nda kullanım ve durum → Projeler / Şantiyeler → İpucu: “Görüntüleyici rolü, sipariş veremeyen ama raporları izleyen kişiler içindir.”

### E8 — Cari Ekstre ve Faturalar (60 sn)
Adımlar: Cari Ekstre → tarih filtresi → açık bakiye ve vade dilimleri → hareket tablosu (Sipariş / Tahsilat, vade tarihi) → Faturalarım → PDF / e-Fatura → İpucu: sadakat puanının ekstrede görünmesi.

### E9 — Teklif İste, Paketler, Numune ve İade (75 sn)
Adımlar: Fiyat Tekliflerim → Yeni Teklif Talebi → durumlar (Gönderildi → Teklif Hazır, ör. TKF-2026-0002) → Paketler (Ofis, Restoran & Mutfak, Otel Housekeeping, Endüstriyel Zemin) → “Tüm Paketi Sepete Ekle / Aboneliğe Çevir” → Numune Talep → İade Taleplerim → İpucu: “500+ adet için Teklif İste’yi kullanın.”

### E10 — Sadakat, Kupon ve Davet (45 sn)
Adımlar: Sadakat Programı (Altın seviye, 49.833 puan, ürün başına puan) → Kuponlarım → Arkadaşını Davet Et → İpucu.

---

## 7. Çekimden Önce Panelde Düzeltilmesi Önerilen Veriler

Gerçek veriyle çekim yapılacağı için şu kayıtlar ekranda hatalı görünür:

| Yer | Sorun | Öneri |
|---|---|---|
| Paketler (4 paket) | Paket fiyatı **₺0,00**, içerik “0 ürün” | Paket içeriği ve fiyatlarını girin (E2, E9 ve promo’da görünecek) |
| Ürün “Palex Mini Cimri Tuv. Kağ. Dispanseri Siyah” | Fiyat **₺0,00** | Fiyat girin veya listelerden gizleyin |
| Periyodik sipariş “Aylık periyodik sipariş” | Adres **“asd, istanbul”** | Gerçekçi adresle güncelleyin |
| Kullanıcılar | `canacatma@gmail.com` ve `eceozcaan1@gmail.com` gerçek e-postalar | Çekimde bulanıklaştırılacak (veya demo e-posta ile değiştirilsin) |
| Analitik, AI Ürün Asistanı, Sadakat, Sözleşme & Fiyat | İnceleme sırasında **502 / upstream hatası** verdi | Sunucu kontrolü; bu sayfalar E8/E10’da kullanılacak |
| Çerez bandı, kayan kampanya şeridi | Ekran kaydını kapatır | Çekimde kapatılarak kaydedilecek |

---

## 8. Üretim Akışı (onaydan sonra)

1. **Dış ses metinleri kilitlenir** (bu dosyadaki metinler, onayınız sonrası).
2. **Seslendirme** → her videonun süresi sese göre ±1 sn ayarlanır.
3. **Ekran kayıtları:** Playwright ile otomatik, 1920×1080 / 30 fps, imleç yolu senaryolu (sadece görüntüleme; “Onayla” gibi işlem yapan adımlar için ayrı test siparişi kullanılır veya animasyonla canlandırılır — **sizin onayınızla**).
4. **Motion sahneleri:** HTML/zaman tabanlı motor (`motion/`), A + C kütüphanesi.
5. **Birleştirme:** ffmpeg; müzik + dış ses miksajı; altyazı (SRT) her videoya eklenir.
6. **Teslim:** MP4 1080p (yatay) + promo için 1080×1920 dikey + SRT.

---

## 9. Onayınızı Beklenen Kararlar

1. **Seri ve öncelik:** Faz 1 (Video 1, 2, 3, E1, E2, E6) ile başlayalım mı?
2. **Süreler:** tablo uygun mu?
3. **Teslim sahnesi:** illüstrasyon mu, gerçek araç/personel fotoğrafı mı?
4. **Seslendirme:** profesyonel seslendirmen mi, yapay zekâ Türkçe ses mi?
5. **İşlem yapan adımlar** (Onayla, Sepete Ekle, Sipariş Gönder): panelde gerçekten tıklayarak mı kaydedelim, yoksa animasyonla mı canlandıralım?
6. **Bölüm 7’deki veri düzeltmeleri** çekimden önce yapılacak mı?
