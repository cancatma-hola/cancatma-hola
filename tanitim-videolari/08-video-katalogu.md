# Video kataloğu

Tüm videolar `videolar/` klasöründedir. Dosya adı: `<tür>-<no>-<konu>-<yatay|dikey>.mp4`.
- **yatay** 1920×1080 (web sitesi, YouTube, sunum) · **dikey** 1080×1920 (Reels, Shorts, TikTok, WhatsApp durum)

```
videolar/
├── 2026-10-09/ 9 Ekim serisi: egitim/ ve tanitim/ (yatay + dikey, kapaklar/)
├── egitim/     eğitim videoları (yatay + dikey)
├── tanitim/    tanıtım ve promo videoları (yatay + dikey)
├── ilk-seri/   ilk üretilen eğitim ve süreç videoları (yatay + altyazı)
└── arsiv/      ilk hype promo ve stil denemeleri
```
Stüdyo videolarının kaynak tanımları: `hyperframes/studyo/videolar/`. Yeniden üretmek için: `node araclar/uret.mjs <ad>` → `araclar/render.sh <ad>`.

## Eğitim videoları (42 video · toplam 22:58)

| No | Video | Süre | Dosya |
|---|---|---|---|
| 1 | Panele giriş | 0:41 | `egitim/egitim-01-giris` |
| 2 | Özet ekranı | 0:47 | `egitim/egitim-02-ozet` |
| 3 | Ürün arama | 0:35 | `egitim/egitim-03-urun-arama` |
| 4 | Kategoriler ve filtreler | 0:37 | `egitim/egitim-04-kategoriler` |
| 5 | Ürün sayfası | 0:35 | `egitim/egitim-05-urun-sayfasi` |
| 6 | Kademeli iskonto | 0:30 | `egitim/egitim-06-kademeli-iskonto` |
| 7 | Hızlı sipariş | 0:40 | `egitim/egitim-07-hizli-siparis` |
| 8 | Siparişlerim | 0:38 | `egitim/egitim-08-siparislerim` |
| 9 | Sipariş detayı | 0:40 | `egitim/egitim-09-siparis-detayi` |
| 10 | Onay bekleyen sipariş | 0:32 | `egitim/egitim-10-onay-bekleyen-siparis` |
| 11 | Ödeme bekleyen sipariş | 0:27 | `egitim/egitim-11-odeme-bekleyen-siparis` |
| 12 | Periyodik siparişler | 0:30 | `egitim/egitim-12-periyodik-siparisler` |
| 13 | Periyodik şablon oluşturma | 0:38 | `egitim/egitim-13-periyodik-sablon` |
| 14 | Sipariş listeleri | 0:35 | `egitim/egitim-14-siparis-listeleri` |
| 15 | Favorilerim | 0:27 | `egitim/egitim-15-favoriler` |
| 16 | Fiyat teklifleri | 0:30 | `egitim/egitim-16-fiyat-teklifleri` |
| 17 | Yeni fiyat teklifi | 0:34 | `egitim/egitim-17-yeni-teklif` |
| 18 | Toplu alım teklifi | 0:31 | `egitim/egitim-18-toplu-alim-teklifi` |
| 19 | Sözleşme ve fiyat | 0:30 | `egitim/egitim-19-sozlesme-fiyat` |
| 20 | Onaylarım | 0:33 | `egitim/egitim-20-onaylarim` |
| 21 | Onay kuralları | 0:30 | `egitim/egitim-21-onay-kurallari` |
| 22 | Yeni onay kuralı | 0:33 | `egitim/egitim-22-yeni-onay-kurali` |
| 23 | Kullanıcılar ve yetkiler | 0:30 | `egitim/egitim-23-kullanicilar` |
| 24 | Kullanıcı davet etme | 0:35 | `egitim/egitim-24-kullanici-davet` |
| 25 | Departman ve bütçe | 0:30 | `egitim/egitim-25-departmanlar` |
| 26 | Bütçe panosu | 0:35 | `egitim/egitim-26-butce-panosu` |
| 27 | Projeler ve şantiyeler | 0:30 | `egitim/egitim-27-projeler` |
| 28 | Adres defteri | 0:34 | `egitim/egitim-28-adres-defteri` |
| 29 | Cari ekstre | 0:35 | `egitim/egitim-29-cari-ekstre` |
| 30 | Faturalarım | 0:27 | `egitim/egitim-30-faturalar` |
| 31 | Satın alma analitiği | 0:37 | `egitim/egitim-31-analitik` |
| 32 | İade talebi | 0:30 | `egitim/egitim-32-iade-talebi` |
| 33 | Numune talebi | 0:30 | `egitim/egitim-33-numune-talebi` |
| 34 | AI ürün asistanı | 0:31 | `egitim/egitim-34-ai-asistan` |
| 35 | Sadakat programı | 0:30 | `egitim/egitim-35-sadakat` |
| 36 | Kuponlarım | 0:30 | `egitim/egitim-36-kuponlar` |
| 37 | Arkadaşını davet et | 0:33 | `egitim/egitim-37-arkadasini-davet-et` |
| 38 | Kampanyalar | 0:28 | `egitim/egitim-38-kampanyalar` |
| 39 | Bildirimler | 0:30 | `egitim/egitim-39-bildirimler` |
| 40 | Destek talebi | 0:36 | `egitim/egitim-40-destek-talebi` |
| 41 | Hesap ayarları | 0:35 | `egitim/egitim-41-hesap-ayarlari` |
| 42 | Yardım merkezi | 0:30 | `egitim/egitim-42-yardim-merkezi` |

### Ekrandaki metinler

**Panele giriş** (`egitim-01-giris`)

- Panele giriş — Kurumsal hesabınızla panele güvenle girin.
- 1. Giriş sayfasında e-posta adresinizi yazın.
- 2. Şifrenizi yazıp Giriş Yap butonuna basın.
  - · Şifreniz gizli olarak yazılır
  - · Bu cihazda oturumunuz açık kalır
  - ✓ Özet ekranı açılır
- 3. Şifrenizi unuttuysanız yeni şifre isteyin.
  - · Şifre yenileme bağlantısı gelir
  - · Hesabı olmayan firmalar başvurur
- Unutmayın: Kurumsal e-postanızla girin · Şifrenizi kimseyle paylaşmayın · Ortak bilgisayarda Beni hatırla seçmeyin

**Özet ekranı** (`egitim-02-ozet`)

- Özet ekranı — Hesabınızın durumunu tek bakışta görün.
- 1. Panele girdiğinizde ilk Özet ekranı açılır.
  - · Bu ay yaptığınız toplam harcama
  - · Ödenmemiş açık bakiyeniz
  - · Kredi limitinizin kullanılan kısmı
- 2. Onay bekleyen siparişleri tek tıkla açın.
  - · Onayınızı bekleyen 3 sipariş var
  - ✓ Onaylarım sayfası açılır
- 3. Harcama trendini ve son siparişlerinizi inceleyin.
  - · Son 12 ayın harcama grafiği
  - · Harcamanın kategorilere dağılımı
  - · Son siparişleriniz ve durumları
- Unutmayın: Harcama, bakiye ve kredi limiti · Onay bekleyen siparişler · Aylık harcama trendi · Etkinlik akışı ve bildirimler

**Ürün arama** (`egitim-03-urun-arama`)

- Ürün arama — Aradığınız ürünü saniyeler içinde bulun.
- 1. Üstteki arama kutusuna ürün adını yazın.
- 2. Sonuçlar siz yazarken listelenir.
  - · Ürün adı ve ürün kodu birlikte görünür
  - ✓ Tüm sonuçlar listelenir
- 3. Ürün kodu veya barkod ile de arayabilirsiniz.
- Unutmayın: Ürün adının bir kısmını yazmanız yeterli · Ürün kodu ile tam eşleşme bulunur · Barkod ile de arama yapılır

**Kategoriler ve filtreler** (`egitim-04-kategoriler`)

- Kategoriler ve filtreler — Ürünleri kategoriye göre süzün.
- 1. Üst menüden bir kategori seçin.
  - · Tüm ana kategoriler burada
  - · 75 ürün, 11 marka ve fiyat aralığı
- 2. Sol taraftaki filtrelerle sonuçları daraltın.
  - · Alt kategoriye göre süzün
  - · Markaya göre süzün
- 3. Ürünleri fiyata veya ada göre sıralayın.
  - · Önerilen, fiyat veya A–Z sıralama
- Unutmayın: Önce kategori seçin · Sonra marka ve alt kategoriyle daraltın · Filtreleri Temizle ile sıfırlayın

**Ürün sayfası** (`egitim-05-urun-sayfasi`)

- Ürün sayfası — Fiyatı, stoğu ve kargo süresini tek sayfada görün.
- 1. Ürün sayfasında size özel liste fiyatını görün.
  - · Firmanıza özel fiyat, KDV hariç
  - · Her alımda sadakat puanı kazanırsınız
- 2. Stok ve kargo bilgisini kontrol edin.
  - · Stoktaki ürün 1 iş günü içinde kargoda
- 3. Adedi seçip Sepete Ekle butonuna basın.
  - ✓ Ürün sepete eklendi
- Unutmayın: Fiyatlar firmanıza özeldir · Stok ve kargo süresi sayfada yazar · Her alım puan kazandırır

**Kademeli iskonto** (`egitim-06-kademeli-iskonto`)

- Kademeli iskonto — Çok alın, birim fiyatınız düşsün.
- 1. FIRSAT tablosu adet arttıkça düşen fiyatı gösterir.
  - · 5 koliden %5, 30 koliden %8, 40 koliden %10
- 2. Toplu Alım Hesaplayıcı ile toplam tutarı görün.
  - · Hazır adet seçenekleri
  - · Birim fiyat, KDV ve genel toplam
- Unutmayın: Adet arttıkça birim fiyat düşer · Hesaplayıcı toplamı anında gösterir · İndirim sepette otomatik uygulanır

**Hızlı sipariş** (`egitim-07-hizli-siparis`)

- Hızlı sipariş — Ürün koduyla tek ekranda toplu sipariş verin.
- 1. Hızlı Sipariş ekranında ürün kodunu yazın.
  - · Her satıra bir ürün ve miktar
- 2. Yeni ürün için Satır Ekle butonunu kullanın.
  - · En fazla 100 satır eklenebilir
  - · Excel listenizi tek seferde yapıştırın
- 3. Listeyi doğrulayıp sepete ekleyin.
  - · Kodlar ve stoklar kontrol edilir
  - ✓ Tüm satırlar sepete eklendi
- Unutmayın: Ürün kodunu biliyorsanız en hızlı yol · Excel'den kopyalayıp yapıştırın · Göndermeden önce Doğrula'ya basın

**Siparişlerim** (`egitim-08-siparislerim`)

- Siparişlerim — Tüm siparişlerinizi tek listede takip edin.
- 1. Siparişlerim sayfası firmanızın tüm siparişlerini listeler.
  - · Sipariş no, tarih, açan kişi, durum, tutar
- 2. Filtrelerle aradığınız siparişi bulun.
  - · Sipariş no veya PO ile arayın
  - · Duruma göre süzün
  - · Hızlı durum filtreleri
- 3. Listeyi Excel'e aktarın.
  - ✓ Excel dosyası indirildi
- Unutmayın: Açan kişiyi ve durumu listede görün · Proje ve tarihe göre süzün · Raporlar için Excel'e aktarın

**Sipariş detayı** (`egitim-09-siparis-detayi`)

- Sipariş detayı — Siparişin hangi adımda olduğunu görün.
- 1. Sipariş detayında durum çubuğunu izleyin.
  - · Sipariş şu an hazırlanıyor
  - · Sıradaki adım her zaman yazılı
- 2. Sipariş kalemlerini ve tutarı kontrol edin.
  - · Ürün, kod, adet ve birim fiyat
  - · İndirim, KDV ve kargo dahil toplam
- 3. Siparişi PDF olarak alın veya şablona kaydedin.
  - · Aynı siparişi tekrar vermek için
  - ✓ Sipariş PDF olarak hazırlandı
- Unutmayın: Durum çubuğu 9 adımı gösterir · Bekleyen puanınız teslimde eklenir · Şablona kaydedip tekrar kullanın

**Onay bekleyen sipariş** (`egitim-10-onay-bekleyen-siparis`)

- Onay bekleyen sipariş — Onay zincirindeki siparişi takip edin.
- 1. Bu sipariş şirket içi onay bekliyor.
  - · Sıradaki onaylayıcının işlemi bekleniyor
- 2. Onay zincirinde kimin beklediğini görün.
  - · Seviye 2 onayı bekleniyor
- 3. Gerekirse siparişi iptal edebilirsiniz.
  - · İşleme alınmadan önce iptal edilebilir
- Unutmayın: Onay zinciri siparişi sırayla gezer · Her onay bildirim olarak gelir · MTS hazırlığa başlamadan iptal edilebilir

**Ödeme bekleyen sipariş** (`egitim-11-odeme-bekleyen-siparis`)

- Ödeme bekleyen sipariş — Ödemesi tamamlanmamış siparişi yönetin.
- 1. Sipariş durumunda Ödeme Bekleniyor yazar.
  - · Ödeme tamamlanınca sipariş ilerler
- 2. Sıradaki adım ne yapmanız gerektiğini söyler.
  - · Ödeme tamamlanması bekleniyor
- Unutmayın: Havale/EFT ile ödemede %2 indirim var · Ödeme gelince sipariş MTS onayına geçer · Gerekirse siparişi iptal edin

**Periyodik siparişler** (`egitim-12-periyodik-siparisler`)

- Periyodik siparişler — Düzenli siparişleri otomatiğe bağlayın.
- 1. Periyodik Siparişler sayfası şablonlarınızı listeler.
  - · Her ayın 1. günü otomatik sipariş
  - · Her ayın 5. günü otomatik sipariş
- 2. Yeni bir şablon için Yeni Şablon butonuna basın.
  - ✓ Yeni şablon formu açılır
- Unutmayın: Sistem siparişi zamanı gelince oluşturur · Şablonu duraklatabilir veya düzenleyebilirsiniz · Sonraki sipariş tarihi listede yazar

**Periyodik şablon oluşturma** (`egitim-13-periyodik-sablon`)

- Periyodik şablon oluşturma — Bir kez kurun, sistem her ay tekrarlasın.
- 1. Şablona bir ad verin.
- 2. Sipariş sıklığını ve günü seçin.
  - · Haftalık, iki haftada bir veya aylık
  - · Siparişin oluşacağı gün
- 3. Ürünleri ekleyip Şablonu Kaydet butonuna basın.
  - ✓ Şablon kaydedildi
- Unutmayın: Ödeme yöntemi ve adres şablonda kayıtlı · Ürün ve miktarı istediğiniz zaman değiştirin · Sipariş günü 1 ile 28 arasında seçilir

**Sipariş listeleri** (`egitim-14-siparis-listeleri`)

- Sipariş listeleri — Sık aldıklarınızı listeye kaydedin.
- 1. Sipariş Listelerim sayfası kayıtlı listelerinizi gösterir.
  - · Kişisel ve firma listeleri
  - · 5 ürünlük firma listesi
- 2. Listeyi tek tıkla sepete ekleyin.
  - ✓ 5 ürün sepete eklendi
- 3. Yeni liste için Yeni Liste butonuna basın.
  - · Listeye istediğiniz ürünleri ekleyin
- Unutmayın: Firma listesini tüm ekip kullanır · Kişisel liste yalnız sizindir · Listeyi düzenleyip güncel tutun

**Favorilerim** (`egitim-15-favoriler`)

- Favorilerim — Sık aldığınız ürünlere hızlı ulaşın.
- 1. Favorilerim sayfası işaretlediğiniz ürünleri gösterir.
  - · Favori ürün fiyatıyla birlikte görünür
- 2. Ürünü buradan doğrudan sepete ekleyin.
  - ✓ Ürün sepete eklendi
- Unutmayın: Ürün sayfasındaki kalp ile favoriye ekleyin · Favoriler fiyatlarla birlikte listelenir · Sepete eklemek tek tık

**Fiyat teklifleri** (`egitim-16-fiyat-teklifleri`)

- Fiyat teklifleri — Özel fiyat isteyin, teklifinizi takip edin.
- 1. Fiyat Tekliflerim sayfası tüm taleplerinizi listeler.
  - · Teklif hazır: 19.055,50 ₺
  - · Fiyat bekleniyor
- 2. Yeni talep için Yeni Teklif Talebi butonuna basın.
  - ✓ Teklif formu açılır
- Unutmayın: Teklif hazır olunca bildirim gelir · Hazır teklifi Teklifi Kabul Et ile onaylayın · Teklif Hazır yazınca teklifi açın

**Yeni fiyat teklifi** (`egitim-17-yeni-teklif`)

- Yeni fiyat teklifi — Ürün ve miktarı yazın, fiyatı MTS hazırlasın.
- 1. Ürün kodunu ve miktarı yazın.
  - · Her satıra özel not ekleyebilirsiniz
- 2. Notunuzu yazıp Teklif Oluştur butonuna basın.
  - ✓ Teklif talebiniz iletildi
- Unutmayın: Birden çok ürün tek talepte · Teslimat ve adet bilgisini not edin · Teklif hazır olunca bildirim gelir

**Toplu alım teklifi** (`egitim-18-toplu-alim-teklifi`)

- Toplu alım teklifi — Büyük alımlar için teklif formunu doldurun.
- 1. Teklif İste sayfasında firma bilgilerinizi yazın.
  - · Firma ve iletişim bilgileri
- 2. Ürün, adet ve süreyi açıklayın.
  - ✓ Talebiniz satış ekibine iletildi
- Unutmayın: Adet ve periyodu net yazın · Varsa dosya ekleyin · Satış ekibi size özel fiyat hazırlar

**Sözleşme ve fiyat** (`egitim-19-sozlesme-fiyat`)

- Sözleşme ve fiyat — Fiyat listenizi ve ödeme koşullarınızı görün.
- 1. Sözleşme & Fiyat sayfası anlaşma koşullarınızı gösterir.
  - · Kredi limiti: ₺250.000
  - · 30 gün vadeli ödeme
- 2. Otomatik onay eşiği küçük siparişleri hızlandırır.
  - · ₺5.000 altı siparişler onay beklemez
- Unutmayın: Fiyat listesi firmanıza özeldir · Kredi limitini anlık izleyin · Vade süresi ödeme planınızı belirler

**Onaylarım** (`egitim-20-onaylarim`)

- Onaylarım — Onayınızı bekleyen siparişleri yönetin.
- 1. Onaylarım sayfası onayınızı bekleyen siparişleri listeler.
  - · Tutar, açan kişi ve departman
  - · Siparişin onay seviyesi
- 2. Siparişi onaylayın, revize isteyin ya da reddedin.
  - · Üç seçenek: onay, revize, ret
  - ✓ Sipariş onaylandı
- Unutmayın: Onay bildirimi anında gelir · Revize ile siparişi geri gönderin · Onay sonrası sipariş MTS'ye iletilir

**Onay kuralları** (`egitim-21-onay-kurallari`)

- Onay kuralları — Hangi siparişin kime düşeceğini belirleyin.
- 1. Onay Kuralları sayfası tanımlı kuralları listeler.
  - · 10.000 TL üzeri siparişler onaya düşer
  - · Daha büyük tutar için ayrı kural
- 2. Yeni kural için Yeni Kural butonuna basın.
  - ✓ Yeni kural formu açılır
- Unutmayın: Kurallar tutara ve departmana göre çalışır · Birden çok seviye tanımlanabilir · Eşiğin altındaki sipariş beklemez

**Yeni onay kuralı** (`egitim-22-yeni-onay-kurali`)

- Yeni onay kuralı — Tutar eşiği ve onaylayıcıları seçin.
- 1. Kurala bir ad ve tutar aralığı verin.
  - · Alt ve üst tutar sınırı
- 2. Onaylayıcı zincirini seviye seviye kurun.
  - · Sipariş bu kişileri sırayla bekler
  - · Öncelik ve aktiflik ayarı
- Unutmayın: Departman seçerseniz kural yalnız oraya uygulanır · En fazla 3 seviye onay · Yüksek öncelikli kural kazanır

**Kullanıcılar ve yetkiler** (`egitim-23-kullanicilar`)

- Kullanıcılar ve yetkiler — Ekibinizi ve yetkilerini yönetin.
- 1. Kullanıcılar & Yetkiler sayfası ekibinizi listeler.
  - · Her kişinin rolü ve departmanı
  - · Kişinin onaysız sipariş limiti
- 2. Yeni kişi için Kullanıcı Davet Et butonuna basın.
  - ✓ Davet formu açılır
- Unutmayın: Roller: Genel Müdür, Satınalmacı, Görüntüleyici · Kullanıcıyı devre dışı bırakabilirsiniz · Onay limiti kişiye özeldir

**Kullanıcı davet etme** (`egitim-24-kullanici-davet`)

- Kullanıcı davet etme — Ekibinize yeni bir kullanıcı ekleyin.
- 1. Kişinin adını ve e-postasını yazın.
- 2. Rol, departman ve onay limiti seçin.
  - · Rol varsayılan yetkileri belirler
  - · Boş bırakırsanız limit yok
- 3. Kullanıcıyı Davet Et butonuna basın.
  - ✓ Davet e-postası gönderildi
- Unutmayın: Davet edilen kişi e-postadan hesap açar · Yetkileri rol seçtikten sonra özelleştirin · Departman bütçe takibi için önemlidir

**Departman ve bütçe** (`egitim-25-departmanlar`)

- Departman ve bütçe — Her departmana aylık bütçe tanımlayın.
- 1. Departman & Bütçe sayfası harcamaları departmana göre gösterir.
  - · Bu ay ₺10.413 harcandı, bütçe ₺45.000
- 2. Yeni departmanın adını ve bütçesini yazın.
  - ✓ Departman eklendi
- Unutmayın: Bütçe aşımı panoda görünür · Kullanıcıları departmana bağlayın · Bütçe isteğe bağlıdır

**Bütçe panosu** (`egitim-26-butce-panosu`)

- Bütçe panosu — Bütçe ve limitleri anlık izleyin.
- 1. Bütçe Panosu bu ayki toplam harcamayı gösterir.
  - · Bu ay toplam ₺29.348
  - · Kredi kullanımı ve limit
- 2. Departmanların kalan bütçesini tabloda görün.
  - · Kalan: ₺34.586, kullanım %23
- 3. Kullanıcı onay limitlerini de buradan izleyin.
  - · Kişi başı limit ve bu ayki harcama
- Unutmayın: Durum sütunu aşımı uyarır · Departmanları yönet bağlantısı ayarlara gider · Onay bekleyen siparişler de hesaba katılır

**Projeler ve şantiyeler** (`egitim-27-projeler`)

- Projeler ve şantiyeler — Harcamayı projeye göre takip edin.
- 1. Projeler / Şantiyeler sayfası proje harcamalarını özetler.
  - · Projelerin toplam harcaması
  - · Her projenin bütçe kullanımı
- 2. Yeni proje için proje adını ve şantiye adresini yazın.
- Unutmayın: Siparişte proje seçin, harcama projeye yazılır · Proje kodu Logo ERP ile eşleşir · Şantiye adresi teslimatta kullanılır

**Adres defteri** (`egitim-28-adres-defteri`)

- Adres defteri — Teslimat ve fatura adreslerinizi yönetin.
- 1. Adres Ekle formunda adres türünü seçin.
  - · Teslimat veya fatura adresi
- 2. Adres bilgilerini yazıp kaydedin.
  - ✓ Adres kaydedildi
- Unutmayın: Her tip için bir varsayılan adres seçin · Varsayılan adres siparişte otomatik gelir · Proje adresleri ayrı tutulabilir

**Cari ekstre** (`egitim-29-cari-ekstre`)

- Cari ekstre — Borç, alacak ve bakiyenizi takip edin.
- 1. Cari Ekstre üstte bakiyenizi yaşlandırarak gösterir.
  - · Toplam açık bakiye
  - · Vadesi 30 gün içinde olan tutar
- 2. Tüm hareketleri tarih sırasıyla görün.
  - · Borç, alacak ve yürüyen bakiye
- 3. Tarih aralığı seçip Filtrele butonuna basın.
  - ✓ Seçilen dönem listelendi
- Unutmayın: Tahsilatlar alacak sütununda görünür · Vade tarihleri her satırda yazar · Sadakat puanınız da bu sayfada

**Faturalarım** (`egitim-30-faturalar`)

- Faturalarım — e-Faturalarınızı görüntüleyin ve indirin.
- 1. Faturalarım sayfası tüm e-faturalarınızı listeler.
  - · Fatura no, sipariş, tutar ve durum
- 2. Faturayı PDF olarak indirin.
  - ✓ Fatura PDF olarak indirildi
- Unutmayın: Faturalar Logo ERP'den otomatik gelir · Her fatura siparişiyle eşleşir · Yazdır ile doğrudan çıktı alın

**Satın alma analitiği** (`egitim-31-analitik`)

- Satın alma analitiği — Harcamanızı rakamlarla analiz edin.
- 1. Analitik sayfası son 12 ayın özetini gösterir.
  - · Toplam harcama
  - · Sipariş başına ortalama tutar
- 2. Aylık trend ve kategori dağılımını inceleyin.
  - · Son 6 ayın harcaması
  - · Hangi kategoriye ne harcandı
- 3. En çok aldığınız ürünleri listede görün.
  - · En çok sipariş edilen ürünler
- Unutmayın: Toplam indirim tasarrufunuzu gösterir · Trend bütçe planına yardım eder · Durum dağılımı süreci özetler

**İade talebi** (`egitim-32-iade-talebi`)

- İade talebi — İade sürecini panelden başlatın ve takip edin.
- 1. İade Taleplerim sayfası iadelerinizi listeler.
  - · Duruma göre süzün
  - · Talep alındı durumundaki iade
- 2. Yeni iade için Sipariş seç ve iade aç butonuna basın.
  - ✓ Sipariş seçim ekranı açılır
- Unutmayın: İade sebebini mutlaka yazın · Durum: alındı, onaylandı, depoya ulaştı · Tamamlanan iade cariye yansır

**Numune talebi** (`egitim-33-numune-talebi`)

- Numune talebi — Ürünü almadan önce ücretsiz deneyin.
- 1. Numune Taleplerim sayfası taleplerinizi listeler.
  - ✓ Numune formu açılır
- 2. Formda istediğiniz ürün kodlarını yazın.
  - ✓ Talebiniz alındı
- Unutmayın: Numune ücretsizdir · Birden çok ürünü virgülle yazın · Satış ekibi size dönüş yapar

**AI ürün asistanı** (`egitim-34-ai-asistan`)

- AI ürün asistanı — İhtiyacınızı yazın, uygun ürünü asistan önersin.
- 1. AI Ürün Asistanı örnek sorularla başlar.
  - · Örnek sorulardan birini seçebilirsiniz
- 2. Sorunuzu yazıp Gönder butonuna basın.
  - ✓ Asistan ürün önerilerini hazırlar
- Unutmayın: Kişi sayısı ve alanı belirtin · Öneriler doğrudan sepete eklenebilir · En fazla 500 karakter yazın

**Sadakat programı** (`egitim-35-sadakat`)

- Sadakat programı — Her siparişte puan kazanın, kademe atlayın.
- 1. Sadakat Programı puanınızı ve kademenizi gösterir.
  - · Altın Müşteri: 49.833 puan
  - · Platin kademesine 167 puan kaldı
- 2. Kademeler her seviyedeki ayrıcalıkları gösterir.
  - · Bronz, Gümüş, Altın, Platin
- Unutmayın: Puanlar teslimde bakiyeye eklenir · 100 puan 10 ₺ kupon değerindedir · Kademe yükseldikçe ayrıcalık artar

**Kuponlarım** (`egitim-36-kuponlar`)

- Kuponlarım — Size özel kuponları kullanın.
- 1. Kuponlarım sayfası kullanılabilir kuponları listeler.
  - · %10 indirim kuponu
  - ✓ Kupon kodu kopyalandı
- 2. Kodu sepette Kupon Kodu alanına yapıştırın.
  - · Her kupon tek sipariş için geçerli
- Unutmayın: Kuponların son kullanım tarihi yazar · Kullanılan kuponlar ayrı listelenir · Sadakat puanını kupona dönüştürün

**Arkadaşını davet et** (`egitim-37-arkadasini-davet-et`)

- Arkadaşını davet et — Firma davet edin, ikiniz de kazanın.
- 1. Davet üç adımda tamamlanır.
  - · Önce e-posta ile davet gönderin
  - · İlk siparişte ikinize de %5 indirim
- 2. Firmanın e-postasını yazıp gönderin.
  - ✓ Davet gönderildi
- Unutmayın: Davet ettiğiniz firma kayıt olur · İlk siparişte iki firma da kazanır · Gönderilen davetler listede görünür

**Kampanyalar** (`egitim-38-kampanyalar`)

- Kampanyalar — Güncel indirimleri ve paketleri görün.
- 1. Sürekli avantajlar koşul sağlanınca otomatik uygulanır.
  - · Adet arttıkça birim fiyat düşer
  - · Havale/EFT ile %2 indirim
  - · ₺3.500 üzeri kargo ücretsiz
- Unutmayın: Kupon kodu gerekmez · Paket fırsatları sepette uygulanır · Kampanya sayfasını düzenli kontrol edin

**Bildirimler** (`egitim-39-bildirimler`)

- Bildirimler — Sipariş ve onay hareketlerinden haberdar olun.
- 1. Bildirimler sayfası tüm hareketleri listeler.
  - · Durum değişince bildirim gelir
- 2. Bildirimleri türe göre süzün.
  - · Durum, yeni sipariş, iade gibi türler
  - ✓ Tüm bildirimler okundu
- Unutmayın: Yeni bildirim zil simgesinde görünür · E-posta tercihlerini ayarlardan seçin · Onay bildirimleri önceliklidir

**Destek talebi** (`egitim-40-destek-talebi`)

- Destek talebi — Sorununuzu yazın, destek ekibi dönsün.
- 1. Destek Taleplerim sayfasında yeni talep oluşturun.
  - ✓ Talep formu açılır
- 2. Konuyu ve önceliği seçin.
  - · Öncelik dönüş süresini belirler
- 3. Açıklamayı yazıp Talebi Oluştur butonuna basın.
  - ✓ Destek talebiniz oluşturuldu
- Unutmayın: Talebin durumunu listeden izleyin · Acil durumda telefonla da ulaşın · Açıklamayı ayrıntılı yazın

**Hesap ayarları** (`egitim-41-hesap-ayarlari`)

- Hesap ayarları — Profilinizi, şifrenizi ve bildirimlerinizi yönetin.
- 1. Profil bölümünde ad ve telefonunuzu güncelleyin.
  - · Ad, telefon ve e-posta bilgileri
- 2. Şifrenizi güvenlik bölümünden değiştirin.
  - · En az 8 karakter, harf ve rakam
  - ✓ Şifre güncellendi
- 3. Hangi bildirimleri alacağınızı seçin.
  - · Sipariş, onay, kampanya bildirimleri
- Unutmayın: KDV muafiyeti talebini buradan gönderin · Şifrenizi düzenli değiştirin · KVKK veri talebiniz de bu sayfada

**Yardım merkezi** (`egitim-42-yardim-merkezi`)

- Yardım merkezi — Sık sorulan soruların cevabını bulun.
- 1. Yardım Merkezi konuları başlıklara ayırır.
  - · Sipariş ve fatura soruları
  - · Teslimat ve kargo soruları
- 2. Aradığınız konuyu arama kutusuna yazın.
- Unutmayın: Cevap bulamazsanız destek talebi açın · Kurumsal hat: +90 543 683 57 65 · Hafta içi 08:00–18:00 hizmet

## Tanıtım videoları (20 video · toplam 8:59)

| No | Video | Süre | Dosya |
|---|---|---|---|
| 0 | Hype promo | 1:00 · yalnız yatay | `tanitim/tanitim-00-hype-promo` |
| 1 | Kontrol sizde | 0:30 · dikey 0:15 | `tanitim/tanitim-01-kontrol` |
| 2 | Bir kez kurun | 0:30 · dikey 0:15 | `tanitim/tanitim-02-periyodik` |
| 3 | Cari ve fatura | 0:30 · dikey 0:15 | `tanitim/tanitim-03-cari` |
| 4 | Her siparişte kazanın | 0:25 · dikey 0:15 | `tanitim/tanitim-04-sadakat` |
| 5 | Siparişiniz nerede? | 0:31 | `tanitim/tanitim-05-siparis-takibi` |
| 6 | Ürün koduyla hızlı sipariş | 0:30 | `tanitim/tanitim-06-hizli-siparis` |
| 7 | Toplu alımda özel fiyat | 0:23 | `tanitim/tanitim-07-toplu-alim-teklifi` |
| 8 | Harcamanızı rakamlarla görün | 0:22 | `tanitim/tanitim-08-analitik` |
| 9 | AI ürün asistanı | 0:26 | `tanitim/tanitim-09-ai-asistan` |
| 10 | Projeler ve şantiyeler | 0:21 | `tanitim/tanitim-10-projeler` |
| 11 | Ekip ve yetkiler | 0:26 | `tanitim/tanitim-11-ekip-ve-yetkiler` |
| 12 | Çok alın, az ödeyin | 0:23 | `tanitim/tanitim-12-kademeli-iskonto` |
| 13 | Numune ve iade | 0:25 | `tanitim/tanitim-13-numune-ve-iade` |
| 14 | Sık aldıklarınız bir tık uzakta | 0:21 | `tanitim/tanitim-14-listeler-favoriler` |
| 15 | Davet edin, birlikte kazanın | 0:25 | `tanitim/tanitim-15-arkadasini-davet-et` |
| 16 | Satın almayı panele taşıyın | 0:24 | `tanitim/tanitim-16-once-sonra` |
| 17 | Neden MTS Hijyen B2B? | 0:26 | `tanitim/tanitim-17-neden-mts-hijyen` |
| 18 | Net koşullar, şeffaf fiyat | 0:19 | `tanitim/tanitim-18-sozlesme-ve-vade` |
| 19 | Destek ekibimiz yanınızda | 0:25 | `tanitim/tanitim-19-destek` |

### Ekrandaki metinler

Tanıtım 01–04 (P1–P4) ve dikey kesimleri: `07-tanitim-serisi.md`. Hype promo: `06-arastirma-ve-hype-promo.md`.

**Siparişiniz nerede?** (`tanitim-05-siparis-takibi`)

- Siparişiniz şu an nerede?
- Her sipariş adım adım ilerler. Taslak → Onay → MTS inceleme → Hazırlanıyor → Sevkiyatta → Teslim edildi
- Siparişin durumunu anlık görün.
  - · Sipariş şu an sevkiyatta
  - · Sıradaki adım her zaman yazılı
- Her değişiklikte bildirim alın.
  - · Durum değişince bildirim gelir
- Kapanış: Siparişiniz her an gözünüzün önünde.

**Ürün koduyla hızlı sipariş** (`tanitim-06-hizli-siparis`)

- Onlarca ürünü tek tek mi arıyorsunuz?
- Ürün kodlarını yazın, tek seferde ekleyin.
  - ✓ Tüm satırlar sepete eklendi
- Üç adımda sipariş hazır. Kodu yazın → Doğrulayın → Sepete ekleyin
- Tek seferde en fazla: 100 satır — Excel listenizi kopyalayıp yapıştırın.
- Kapanış: Kodu yazın, sipariş hazır.

**Toplu alımda özel fiyat** (`tanitim-07-toplu-alim-teklifi`)

- Büyük alımda özel fiyat mı istiyorsunuz?
- Ürün ve miktarı yazın, teklif isteyin.
  - ✓ Teklif talebiniz iletildi
- Teklif hazır olunca panelde görün.
  - · Teklif hazır: 19.055,50 ₺
- Kapanış: Toplu alımda size özel fiyat.

**Harcamanızı rakamlarla görün** (`tanitim-08-analitik`)

- Son 12 ayda toplam harcama: ₺51.320,08
- Aylık harcamanızı grafikte izleyin.
  - · Son 6 ayın harcama grafiği
- Hangi kategoriye ne harcadığınızı görün.
  - · Kategorilere göre harcama dağılımı
- Kapanış: Veriyle doğru satın alma.

**AI ürün asistanı** (`tanitim-09-ai-asistan`)

- Hangi ürünü seçeceğinizi bilmiyor musunuz?
- İhtiyacınızı yazın, asistan önersin.
  - ✓ Asistan ürün önerilerini hazırlar
- Sorudan sepete üç adım. Sorun → Öneri alın → Sepete ekleyin
- Kapanış: Doğru ürün, ilk seferde.

**Projeler ve şantiyeler** (`tanitim-10-projeler`)

- Hangi proje ne kadar harcadı?
- Projelerin toplam harcaması: ₺38.720,95
- Her projenin bütçe kullanımını görün.
  - · Proje bütçesi ve harcama
- Kapanış: Her proje kontrol altında.

**Ekip ve yetkiler** (`tanitim-11-ekip-ve-yetkiler`)

- Ekibinizde kim, neyi sipariş edebilir?
- Her kişiye rol ve onay limiti verin.
  - · Rol ve departman
  - · Kişiye özel onay limiti
- Yeni kullanıcıyı dakikalar içinde davet edin.
  - ✓ Davet e-postası gönderildi
- Kapanış: Doğru kişi, doğru yetki.

**Çok alın, az ödeyin** (`tanitim-12-kademeli-iskonto`)

- Adet arttıkça birim fiyat düşer. (1 koli, 5+ koli, 30+ koli, 40+ koli)
- FIRSAT tablosu indirimi gösterir.
  - · 40 koliden itibaren %10 indirim
- Kupon gerekmez, indirim otomatik uygulanır.
  - · Uygun adette otomatik uygulanır
- Kapanış: Çok alın, az ödeyin.

**Numune ve iade** (`tanitim-13-numune-ve-iade`)

- Ürünü almadan önce denemek ister misiniz?
- Numune talebini formla gönderin.
  - ✓ Talebiniz alındı
- İade adım adım ilerler. Talep alındı → Onaylandı → Depoya ulaştı → İade tamamlandı
- Kapanış: Deneyin, gönül rahatlığıyla alın.

**Sık aldıklarınız bir tık uzakta** (`tanitim-14-listeler-favoriler`)

- Her ay aynı ürünleri mi arıyorsunuz?
- Sık aldıklarınızı favorilere ekleyin.
  - ✓ Ürün sepete eklendi
- Listeyi tek tıkla sepete ekleyin.
  - ✓ 5 ürün sepete eklendi
- Kapanış: Sık aldıklarınız bir tık uzakta.

**Davet edin, birlikte kazanın** (`tanitim-15-arkadasini-davet-et`)

- İş ortağınızı davet edin. — İlk siparişte iki firma da %5 indirim kazanır.
- Üç adımda kazanın. Davet gönderin → Firma kayıt olsun → İkiniz de kazanın
- E-postayı yazın, daveti gönderin.
  - ✓ Davet gönderildi
- Kapanış: Birlikte alın, birlikte kazanın.

**Satın almayı panele taşıyın** (`tanitim-16-once-sonra`)

- Siparişi hâlâ telefonla mı veriyorsunuz?
- Fark açık. Eskiden: Telefonla sipariş, Kaybolan e-postalar, Belirsiz teslimat, Elle onay / MTS Hijyen B2B ile: Panelden sipariş, Her şey kayıtlı, Anlık durum takibi, Otomatik onay zinciri
- Siparişten faturaya tek panel. Sipariş → Onay → Teslimat → Fatura
- Kapanış: Satın almayı panele taşıyın.

**Neden MTS Hijyen B2B?** (`tanitim-17-neden-mts-hijyen`)

- Bizi tercih eden kurumlar: 12.000 + — Kurumlar hijyen tedariğinde bizi tercih ediyor.
- Neden MTS Hijyen B2B?: Firmanıza özel fiyat · Çok kademeli onay akışı · 14:00'a kadar aynı gün kargo · Periyodik sipariş
- Tüm hesabınız tek ekranda.
  - · Harcama, bakiye ve limit
  - · Onay bekleyen siparişler
- Kapanış: Hijyen tedariğiniz tek panelde.

**Net koşullar, şeffaf fiyat** (`tanitim-18-sozlesme-ve-vade`)

- Firmanıza tanımlı kredi limiti: ₺250.000
- Anlaşma koşullarınız her an panelde.
  - · Limit, kullanılan ve kalan
  - · 30 gün vadeli ödeme
- Kapanış: Net koşullar, şeffaf fiyat.

**Destek ekibimiz yanınızda** (`tanitim-19-destek`)

- Bir sorunuz mu var?
- Cevabı önce Yardım Merkezinde arayın.
  - · Sık sorulan sorular konulara ayrılmış
- Bulamazsanız destek talebi açın.
  - ✓ Destek talebiniz oluşturuldu
- Kapanış: Destek ekibimiz yanınızda.

## 2026-10-09 serisi

Dosyalar `videolar/2026-10-09/egitim/` ve `videolar/2026-10-09/tanitim/` altında; kapak görselleri `kapaklar/` klasöründe. Plan: `09-seri-2026-10-09.md`.

### Eğitim videoları (33 video · toplam 24:13)

| No | Video | Süre | Dosya |
|---|---|---|---|
| 43 | Panelde her şey nerede? | 0:48 | `2026-10-09/egitim/egitim-43-menu-haritasi` |
| 44 | Paneli telefondan kullanın | 0:47 | `2026-10-09/egitim/egitim-44-telefondan-panel` |
| 45 | İlk siparişinizi verin | 0:58 | `2026-10-09/egitim/egitim-45-ilk-siparis` |
| 46 | Önceden aldıklarınızı hızlı bulun | 0:40 | `2026-10-09/egitim/egitim-46-onceden-aldiklarim` |
| 47 | Aynı siparişi tekrar vermenin 3 yolu | 0:44 | `2026-10-09/egitim/egitim-47-tekrar-siparis` |
| 48 | Hazır paketlerle tasarruf edin | 0:47 | `2026-10-09/egitim/egitim-48-paketler` |
| 49 | Ürünleri karşılaştırın | 0:43 | `2026-10-09/egitim/egitim-49-urun-karsilastirma` |
| 50 | Ürün kartını doğru okuyun | 0:44 | `2026-10-09/egitim/egitim-50-urun-karti` |
| 51 | Stokta olmayan ürün için haber alın | 0:33 | `2026-10-09/egitim/egitim-51-stok-bildirimi` |
| 52 | Doğru ürünü seçin: teknik özellikler | 0:38 | `2026-10-09/egitim/egitim-52-teknik-ozellikler` |
| 53 | Kargonuz nerede? | 0:36 | `2026-10-09/egitim/egitim-53-kargo-takibi` |
| 54 | Ürünleri değerlendirin, puan kazanın | 0:37 | `2026-10-09/egitim/egitim-54-urun-degerlendirme` |
| 55 | Hasarlı ürün için iade | 0:46 | `2026-10-09/egitim/egitim-55-iade-talebi` |
| 56 | Siparişiniz reddedildiyse | 0:35 | `2026-10-09/egitim/egitim-56-reddedilen-siparis` |
| 57 | Sipariş belgesini yazdırın | 0:36 | `2026-10-09/egitim/egitim-57-siparis-belgesi` |
| 58 | Havale yaptım, sipariş neden ilerlemiyor? | 0:36 | `2026-10-09/egitim/egitim-58-havale-odeme` |
| 59 | Siparişimi iptal edebilir miyim? | 0:37 | `2026-10-09/egitim/egitim-59-siparis-iptal` |
| 60 | Teklifiniz hazır: detayı okuyun | 0:41 | `2026-10-09/egitim/egitim-60-teklif-detayi` |
| 61 | Fiyat teklifi mi, toplu alım mı? | 0:45 | `2026-10-09/egitim/egitim-61-teklif-turleri` |
| 62 | Hesabı 4 adımda kurun | 0:56 | `2026-10-09/egitim/egitim-62-hesap-kurulumu` |
| 63 | Roller ve yetkiler | 0:47 | `2026-10-09/egitim/egitim-63-roller-yetkiler` |
| 64 | Bir siparişin onay yolculuğu | 0:52 | `2026-10-09/egitim/egitim-64-onay-yolculugu` |
| 65 | Telefondan onay verin | 0:34 | `2026-10-09/egitim/egitim-65-telefondan-onay` |
| 66 | Rol rehberi: satın alma sorumlusu | 0:56 | `2026-10-09/egitim/egitim-66-rol-satin-alma` |
| 67 | Rol rehberi: yönetici | 0:55 | `2026-10-09/egitim/egitim-67-rol-yonetici` |
| 68 | Rol rehberi: muhasebe | 0:54 | `2026-10-09/egitim/egitim-68-rol-muhasebe` |
| 69 | Rol rehberi: şube ve depo sorumlusu | 0:52 | `2026-10-09/egitim/egitim-69-rol-sube` |
| 70 | Puanınızı kupona dönüştürün | 0:44 | `2026-10-09/egitim/egitim-70-puan-kupon` |
| 71 | Kupon kodu gerektirmeyen avantajlar | 0:38 | `2026-10-09/egitim/egitim-71-avantajlar` |
| 72 | Bildirim tercihleri | 0:39 | `2026-10-09/egitim/egitim-72-bildirim-tercihleri` |
| 73 | Mini test: sipariş | 0:48 | `2026-10-09/egitim/egitim-73-test-siparis` |
| 74 | Mini test: ödeme ve indirimler | 0:49 | `2026-10-09/egitim/egitim-74-test-odeme` |
| 75 | Mini test: onay ve bütçe | 0:48 | `2026-10-09/egitim/egitim-75-test-onay` |

#### Ekrandaki metinler

**Panelde her şey nerede?** (`egitim-43-menu-haritasi`)

- Panelde her şey nerede? — Menüleri tanıyın, aradığınız sayfayı hızla bulun.
- Bu videoda: Sol menüyü tanıyın · Hesap menüsünü açın · Kategori ve filtreleri kullanın
- 1. Sol menüde sipariş ve finans sayfalarını bulun.
  - · Sipariş verme ve takip sayfaları menünün başında durur
  - · Hesap hareketlerini ve faturaları buradan açın
- 2. Onay ve ekip sayfalarını da aynı menüde bulun.
  - · Onay bekleyen siparişleri buradan açın
  - · Kullanıcıları ve bütçeleri buradan yönetin
- 3. Sağ üstteki adınıza basıp hesap menüsünü açın.
  - · Menü bu düğmeyle açılır
  - · Sık kullanılan sayfalara tek tıkla gidin
- 4. Ürünleri kategori menüsü ve filtrelerle bulun.
  - · Yedi ana kategori her sayfada üstte durur
  - · Soldan kategori seçip listeyi daraltın
- Özet: Sipariş ve fatura sayfalarını menüde bulun. · Hesap menüsünü sağ üstten açın. · Ürünleri kategori ve filtrelerle daraltın.
- Kapanış: Şimdi panelde menüleri gezin.

**Paneli telefondan kullanın** (`egitim-44-telefondan-panel`)

- Paneli telefondan kullanın — Siparişlerinizi telefondan da izleyin.
- Bilgisayardan uzakta mısınız? — Panel telefonda da aynı çalışır.
- Aynı panel telefonunuzda da açılır. — İki cihazda da aynı hesapla girin
- 1. Özet ekranında hesabınızı tek bakışta görün. (telefon)
  - · Bu ayki harcama ve açık bakiye en üstte yazar
  - · Yeni siparişe buradan başlayın
- 2. Özet düğmesine dokunup başka sayfaya geçin. (telefon)
  - · Bu düğme tüm bölümlerin listesini açar
  - ✓ Siparişlerim sayfası açılır
- 3. Siparişlerinizi durumlarıyla izleyin. (telefon)
  - · Her kartta durum, tutar ve tarih yazar
  - ✓ Sevkiyattaki siparişler listelenir
- Özet: Özet ekranında hesabınızı kontrol edin. · Özet düğmesiyle bölüm listesini açın. · Siparişleri hızlı filtreyle süzün.
- Kapanış: Şimdi telefonunuzdan paneli açın.

**İlk siparişinizi verin** (`egitim-45-ilk-siparis`)

- İlk siparişinizi verin — Ürünü bulun, sepete ekleyin ve siparişi izleyin.
- Bu videoda: Ürünü arayın · Fiyatı ve indirimi okuyun · Sepete ekleyin · Siparişi izleyin
- 1. Arama kutusuna yazıp ürünü listeden seçin.
  - ✓ Ürün sayfası açılır
- 2. Fiyatı ve kademeli indirimi okuyun.
  - · Fiyat KDV hariçtir; KDV dahil tutar altında yazar
  - · 5 koliden %5, 30 koliden %8, 40 koliden %10 indirim alırsınız
- 3. Stoğu kontrol edip Sepete Ekle düğmesine basın.
  - · Stok ve kargo süresi düğmenin altında yazar
  - ✓ Ürün sepete eklendi
- 4. Siparişten sonra Siparişlerim sayfasını açın.
  - · Her satırda siparişin durumu yazar
  - ✓ Sipariş detayı açılır
- 5. Detayda siparişin hangi adımda olduğunu görün.
  - · Koyu mavi işaret siparişin şu anki adımıdır
  - · Sıradaki işi bu kutuda okuyun
- Özet: Ürünü arama kutusundan bulun. · Kademeli indirimi kontrol edip sepete ekleyin. · Siparişin durumunu detayda izleyin.
- Kapanış: Şimdi ilk ürününüzü sepete ekleyin.

**Önceden aldıklarınızı hızlı bulun** (`egitim-46-onceden-aldiklarim`)

- Önceden aldıklarınızı hızlı bulun — Daha önce aldığınız ürünleri tek filtreyle listeleyin.
- Selin (Satın alma sorumlusu): Geçen ay aldığım ürünü her seferinde baştan arıyorum.
- 1. Katalogda Sadece önceden aldıklarım filtresini açın.
  - · Bu filtre açıkken yalnız aldığınız ürünler görünür
  - · Aldığınız ürünlerin sayısı burada yazar
- 2. Ürünü listeden doğrudan sepete ekleyin.
  - ✓ Ürün sepete eklendi
- 3. Eski siparişi açıp Yeniden Sipariş Ver düğmesine basın.
  - · Siparişteki ürünler ve adetler burada yazar
  - ✓ Siparişin ürünleri sepete eklendi
- Özet: Sadece önceden aldıklarım filtresini açın. · Ürünü listeden sepete ekleyin. · Eski siparişte Yeniden Sipariş Ver düğmesine basın.
- Kapanış: Şimdi katalogda bu filtreyi açın.

**Aynı siparişi tekrar vermenin 3 yolu** (`egitim-47-tekrar-siparis`)

- Aynı siparişi tekrar vermenin 3 yolu — Sık aldığınız ürünleri baştan girmeden sipariş edin.
- Aynı siparişi 3 yoldan tekrar verin. Yeniden Sipariş Ver → Sipariş Listelerim → Aboneliğe Çevir
- 1. Eski siparişte Yeniden Sipariş Ver düğmesine basın.
  - · Siparişi şablon olarak da saklayabilirsiniz
  - ✓ Siparişin ürünleri sepete eklendi
- 2. Kayıtlı listeyi Sepete Ekle ile tek seferde ekleyin.
  - · Listedeki 5 ürün birlikte eklenir
  - ✓ 5 ürün sepete eklendi
- 3. Düzenli aldığınız ürünü aboneliğe çevirin.
  - · Ürün belirli aralıkla otomatik sipariş edilir
  - ✓ Ürün aboneliğe çevrildi
- Özet: Eski siparişte Yeniden Sipariş Ver düğmesine basın. · Kayıtlı listeyi Sepete Ekle ile ekleyin. · Düzenli aldığınız ürünü aboneliğe çevirin.
- Kapanış: Şimdi Siparişlerim sayfasını açın.

**Hazır paketlerle tasarruf edin** (`egitim-48-paketler`)

- Hazır paketlerle tasarruf edin — Sektörünüze uygun paketi tek tıkla sepete ekleyin.
- Her ay aynı ürünleri tek tek mi ekliyorsunuz? — Hazır paketler bu işi kısaltır.
- 1. Paketler sayfasında işletmenize uygun paketi seçin.
  - · Paketin kime uygun olduğu adının altında yazar
  - · Paket fiyatı, eski fiyat ve tasarruf altta yazar
- 2. Paket sayfasında içeriği ve fiyatı kontrol edin.
  - · Her satırın başında ürünün adedi yazar
  - · ₺4.861,80 yerine ₺4.472,86 ödersiniz
- 3. Paketi tek tıkla sepete ekleyin.
  - · Aynı paket her ay otomatik sipariş edilir
  - ✓ Paketteki 4 ürün sepete eklendi
- Paket büyüdükçe tasarruf artar.: ₺388,94 Ofis Başlangıç · %8 · ₺931,95 Okul & Eğitim · %10 · ₺1.768,29 Restoran & Mutfak · %10
- Özet: Paket kartında tasarruf tutarını okuyun. · Tüm Paketi Sepete Ekle düğmesine basın. · Aylık alım için Aboneliğe Çevir düğmesini kullanın.
- Kapanış: Şimdi Paketler sayfasını açın.

**Ürünleri karşılaştırın** (`egitim-49-urun-karsilastirma`)

- Ürünleri karşılaştırın — Benzer ürünleri fiyat ve özellikleriyle yan yana görün.
- Emre (Depo sorumlusu): İki havluyu kıyaslamak için sekmeler arasında gidip geliyorum.
- 1. Ürün kartındaki karşılaştır simgesine dokunun. (telefon)
  - · Bu simge ürünü karşılaştırma listesine ekler
  - ✓ Ürün karşılaştırmaya eklendi
- 2. Fiyatı ve stoğu yan yana karşılaştırın.
  - · KDV hariç fiyatlar aynı satırda yazar
  - · Stok durumu da yan yana görünür
- 3. Farkı görüp seçtiğiniz ürünü sepete ekleyin.
  - · Ürünler farklı dispenserlere uyar
  - ✓ Ürün sepete eklendi
- Özet: Kartta karşılaştır simgesine basın. · Fiyatı ve stoğu yan yana kıyaslayın. · Seçtiğiniz ürünü Sepete Ekle ile ekleyin.
- Kapanış: Şimdi Kağıt Ürünleri kategorisini açın.

**Ürün kartını doğru okuyun** (`egitim-50-urun-karti`)

- Ürün kartını doğru okuyun — Fiyatı, birimi ve indirimi tek bakışta anlayın.
- Bu fiyata KDV dahil mi? — Ürün kartı bu sorunun cevabını verir.
- 1. Liste fiyatı KDV hariç yazılır.
  - · KDV dahil fiyat hemen altında yazar.
- 2. Fiyat bir koli içindir.
  - · Bir kolide 6 rulo bulunur.
  - · Her koli 4 sadakat puanı kazandırır.
- 3. Çok alırsanız birim fiyat düşer.
  - · İndirim 5 koliden %5, 30 koliden %8, 40 koliden %10 olur.
- Test: ₺420,00 liste fiyatı neyi gösterir? (✓ Bir koli, KDV hariç / Bir koli, KDV dahil / Bir rulo, KDV dahil) — Koli fiyatı KDV hariçtir.
- Özet: KDV dahil fiyatı liste fiyatının altında okuyun. · Fiyatın yanındaki satış birimine bakın. · Kademe tablosunda indirim oranını kontrol edin.
- Kapanış: Şimdi bir ürün sayfası açın.

**Stokta olmayan ürün için haber alın** (`egitim-51-stok-bildirimi`)

- Stokta olmayan ürün için haber alın — Ürün stoğa girince haberiniz olsun.
- Murat (Satın alma sorumlusu): Tuvalet kağıdı yine stokta yok.
- 1. Ürün adının üstünde Stokta yok yazar.
  - · Bu ürün şu an sepete eklenemez.
- 2. Stok Gelince Haber Ver düğmesine basın.
  - ✓ Ürün gelince size haber verilir
- 3. Ürünü listenize de ekleyin.
  - ✓ Ürün listenize eklenir
- Özet: Ürün adının üstünde Stokta yok etiketine bakın. · Stok Gelince Haber Ver düğmesine basın. · Ürünü Listeye Ekle ile kaydedin.
- Kapanış: Şimdi aradığınız ürünün sayfasını açın.

**Doğru ürünü seçin: teknik özellikler** (`egitim-52-teknik-ozellikler`)

- Doğru ürünü seçin: teknik özellikler — Satın almadan önce ürünün size uyduğunu kontrol edin.
- Selin (İdari işler sorumlusu): Aldığım havlu dispensere uymadı.
- 1. Teknik Özellikler bölümünü okuyun.
  - · Havlunun uyduğu dispenser burada yazar.
  - · Gramajı ve kat sayısını karşılaştırın.
- 2. Yeni Numune Talebi düğmesine basın.
  - ✓ Numune formu açılır
- 3. Ürün kodunu yazıp ücretsiz numune isteyin.
  - ✓ Numune talebiniz iletildi
- Özet: Dispenser uyumunu Teknik Özellikler bölümünde kontrol edin. · Gramajı ve kat sayısını karşılaştırın. · Emin değilseniz ücretsiz numune isteyin.
- Kapanış: Şimdi Numune Taleplerim sayfasını açın.

**Kargonuz nerede?** (`egitim-53-kargo-takibi`)

- Kargonuz nerede? — Kargo takip numaranızı siparişte bulun.
- Kargom nerede? — Cevap sipariş detayında yazar.
- 1. Sevkiyatta filtresini seçin.
  - ✓ Kargodaki siparişler listelenir
- 2. Siparişi açıp sıradaki adımı okuyun.
  - · Siparişiniz kargoya verildi.
- 3. Takip et ile kargonuzu izleyin.
  - · Kargo firması, durum ve takip numarası burada yazar.
  - ✓ Kargo firmasının takip sayfası açılır
- Özet: Siparişlerim sayfasında Sevkiyatta filtresini seçin. · Siparişi açıp sıradaki adımı okuyun. · Kargo bölümünde Takip et bağlantısına basın.
- Kapanış: Şimdi Siparişlerim sayfasını açın.

**Ürünleri değerlendirin, puan kazanın** (`egitim-54-urun-degerlendirme`)

- Ürünleri değerlendirin, puan kazanın — Teslim edilen ürünlere yorum yazın.
- Bu videoda: Puan kuralını görün · Yıldız verip yorum yazın · Yorumu gönderin
- 1. Her ürün yorumu 5 puan kazandırır.
  - · Kural teslim edilen her ürün için geçerlidir.
- 2. Yıldız verip kısa bir yorum yazın.
  - · Ürüne 1 ile 5 arasında yıldız verin.
- 3. Yorumu Gönder düğmesine basın.
  - ✓ Yorumunuz gönderildi
- Özet: Ürüne yıldız verin. · Kısa bir yorum yazın. · Yorumu Gönder düğmesine basın.
- Kapanış: Şimdi Siparişlerim sayfasını açın.

**Hasarlı ürün için iade** (`egitim-55-iade-talebi`)

- Hasarlı ürün için iade — İade talebini panelden birkaç adımda açın.
- Kemal (Depo sorumlusu): İki koli hasarlı geldi.
- 1. Siparişte İade Talebi Aç düğmesine basın.
  - ✓ İade formu açılır
- 2. Hasarlı ürünün iade adedini yazın.
  - · Siparişteki her ürün ayrı satırda yazar.
- 3. Sebebi yazıp talebi gönderin.
  - ✓ İade talebiniz alındı
- 4. Talebi İade Taleplerim sayfasında izleyin.
  - · MTS ekibi talebinizi inceler.
  - · Talepleri duruma göre filtreleyin.
- Özet: Siparişte İade Talebi Aç düğmesine basın. · İade adedini ve sebebi yazın. · Durumu İade Taleplerim sayfasında izleyin.
- Kapanış: Şimdi İade Taleplerim sayfasını açın.

**Siparişiniz reddedildiyse** (`egitim-56-reddedilen-siparis`)

- Siparişiniz reddedildiyse — Ret nedenini okuyun, siparişi yeniden verin.
- Siparişiniz neden reddedildi? — Gerekçe sipariş detayında yazar.
- 1. Sipariş durumunda Reddedildi yazar.
  - · Sipariş onay zincirinde durdu.
- 2. Onay Zinciri bölümünde gerekçeyi okuyun.
  - · Siparişi kimin reddettiğini görürsünüz.
  - · Ret gerekçesi onay notunda yazar.
- 3. Gerekirse Yeniden Sipariş Ver düğmesine basın.
  - ✓ Aynı ürünlerle yeni sipariş hazırlanır
- Özet: Sipariş durumunda Reddedildi etiketine bakın. · Onay Zinciri bölümünde gerekçeyi okuyun. · Yeniden Sipariş Ver düğmesine basın.
- Kapanış: Şimdi Siparişlerim sayfasını açın.

**Sipariş belgesini yazdırın** (`egitim-57-siparis-belgesi`)

- Sipariş belgesini yazdırın — Sipariş belgesini açıp kontrol edin ve yazdırın.
- Derya (Muhasebe sorumlusu): Her siparişin çıktısını dosyaya eklemem gerekiyor.
- 1. Sipariş detayında Yazdır / PDF düğmesine basın.
  - ✓ Sipariş belgesi açılır
- 2. Belgede PO numarasını ve toplamı kontrol edin.
  - · Satın alma numaranız müşteri bilgisinin altında yazar.
  - · İndirim, kargo ve KDV toplamın üstünde ayrı satırlarda yazar.
- 3. Yazdır / PDF olarak Kaydet düğmesine basın.
  - ✓ Yazdırma penceresi açılır
- Özet: Sipariş detayında Yazdır / PDF düğmesine basın. · Belgede PO numarasını ve toplamı kontrol edin. · Yazdır / PDF olarak Kaydet ile çıktı alın.
- Kapanış: Şimdi bir siparişin belgesini yazdırın.

**Havale yaptım, sipariş neden ilerlemiyor?** (`egitim-58-havale-odeme`)

- Havale yaptım, sipariş neden ilerlemiyor? — Havale ödemesinin siparişle nasıl eşleştiğini öğrenin.
- Havale yaptınız ama sipariş ilerlemiyor mu? — Cevap sipariş detayında yazar.
- 1. Sipariş detayında Ödeme Bekleniyor durumuna bakın.
  - · Ödeme hesaba geçince sipariş hazırlığa alınır.
- 2. Havale açıklamasına sipariş numarasını yazın.
  - · Ödemeniz bu numarayla siparişe bağlanır.
- 3. Numarayı Kopyala düğmesiyle alın. (telefon)
  - · Bu numarayı havale açıklamasına yapıştırın.
  - ✓ Sipariş numarası kopyalandı
- Özet: Sipariş detayında Ödeme Bekleniyor durumuna bakın. · Havale açıklamasına sipariş numarasını yazın. · Numarayı Kopyala düğmesiyle alın.
- Kapanış: Şimdi Siparişlerim sayfasını açın.

**Siparişimi iptal edebilir miyim?** (`egitim-59-siparis-iptal`)

- Siparişimi iptal edebilir miyim? — İptal kuralını öğrenin, doğru yolu seçin.
- İptal ne zaman mümkün? Hazırlık başladıysa: Siparişi İptal Et düğmesi görünmez, İptal için destek talebi gerekir / İşleme alınmadan önce: Siparişi İptal Et düğmesi görünür, Siparişi kendiniz iptal edersiniz
- 1. İşleme alınmamış siparişte Siparişi İptal Et düğmesine basın.
  - · Bu durumda sipariş henüz işleme alınmadı.
  - ✓ Sipariş iptal edilir
- 2. Hazırlık başladıysa destek talebi açın.
  - ✓ Destek talebiniz oluşturuldu
- Özet: Sipariş detayında durumu kontrol edin. · İşleme alınmamış siparişte Siparişi İptal Et düğmesine basın. · Hazırlık başladıysa destek talebi açın.
- Kapanış: Şimdi Siparişlerim sayfasını açın.

**Teklifiniz hazır: detayı okuyun** (`egitim-60-teklif-detayi`)

- Teklifiniz hazır: detayı okuyun — Teklifin fiyatını, notunu ve son tarihini okuyun.
- Teklifiniz hazır. Neye bakmalısınız? — Kabul etmeden önce detayı okuyun.
- 1. Teklif Hazır yazan teklifi açın.
  - · Fiyatı hazırlanan teklifler bu durumla görünür.
  - ✓ Teklif detayı açılır
- 2. Admin notunu ve birim fiyatları okuyun.
  - · Fiyatla ilgili açıklama bu notta yazar.
  - · Her kalemin birim fiyatı kendi satırında yazar.
- 3. Son tarihten önce Teklifi Kabul Et düğmesine basın.
  - · Teklif bu tarihe kadar geçerlidir.
  - ✓ Teklif siparişe çevrilir
- Özet: Teklif Hazır durumundaki teklifi açın. · Admin notunu ve birim fiyatları okuyun. · Son tarihten önce Teklifi Kabul Et düğmesine basın.
- Kapanış: Şimdi Fiyat Tekliflerim sayfasını açın.

**Fiyat teklifi mi, toplu alım mı?** (`egitim-61-teklif-turleri`)

- Fiyat teklifi mi, toplu alım mı? — İhtiyacınıza uygun teklif formunu seçin.
- Hangi form ne zaman kullanılır?: Fiyat teklifi: ürünü ve miktarı panelde girin · Toplu alım: 500+ adet için satış ekibinden teklif alın
- 1. Yeni Fiyat Teklifi formuna ürünü yazın.
  - ✓ Fiyatı admin ekibi hazırlar
- 2. 500+ adet için Teklif İste formunu doldurun.
  - · Talep Detayı alanına ürünü, adedi ve periyodu yazın.
  - ✓ Talebiniz satış ekibine iletilir
- Test: 500+ adetlik alım için hangi formu doldurursunuz? (✓ Toplu Alım Teklifi / Hızlı Sipariş / Numune Talebi) — Toplu Alım Teklifi 500+ adet içindir.
- Özet: Yeni Fiyat Teklifi formuna ürünü yazın. · 500+ adet için Teklif İste formunu kullanın. · Teklif Talep Et düğmesiyle talebi gönderin.
- Kapanış: Şimdi Teklif İste sayfasını açın.

**Hesabı 4 adımda kurun** (`egitim-62-hesap-kurulumu`)

- Hesabı 4 adımda kurun — Departman, kullanıcı ve onay kuralını sırayla kurun.
- Bu videoda: Departman ekleyin · Kullanıcı davet edin · Onay kuralı kurun · Onay eşiğini kontrol edin
- 1. Departman & Bütçe sayfasında yeni departman ekleyin.
  - · Bütçe girerseniz harcama bu tutarla izlenir.
  - ✓ Departman eklendi
- 2. Kullanıcı Davet Et formunda rolü seçin.
  - · Rol seçimi varsayılan yetkileri belirler.
  - · Onay limitini boş bırakırsanız limit sınırsız olur.
  - ✓ Kullanıcı davet edildi
- 3. Yeni Onay Kuralı ile tutar sınırını belirleyin.
  - · Siparişi ilk onaylayacak kişiyi burada seçersiniz.
  - ✓ Onay kuralı oluşturuldu
- 4. Otomatik onay eşiğini kontrol edin.
  - · ₺5.000 altındaki siparişler doğrudan onaylanır.
- Özet: Departman ekleyip kullanıcıları davet edin. · Tutar sınırıyla onay kuralı oluşturun. · Otomatik onay eşiğini kontrol edin.
- Kapanış: Şimdi Departman & Bütçe sayfasını açın.

**Roller ve yetkiler** (`egitim-63-roller-yetkiler`)

- Roller ve yetkiler — Kimin ne yapabileceğini rol ve yetkilerle belirleyin.
- Ekipte kim ne yapabilir? — Bunu rol ve yetkiler belirler.
- 1. Kullanıcılar & Yetkiler sayfasında rolleri görün.
  - · Kullanıcıya Genel Müdür, Satınalmacı ya da Görüntüleyici rolü verilir.
  - ✓ Kullanıcının yetki sayfası açılır
- 2. Kullanıcının rolünü ve onay limitini belirleyin.
  - · Rol seçimi varsayılan yetkileri belirler.
  - · Boş bırakırsanız onay limiti sınırsız olur.
- 3. Hazır şablon ile yetkileri tek seferde seçin.
  - ✓ Şablondaki yetkiler işaretlenir
- 4. Detaylı Yetkiler listesinde ekstra yetki açın.
  - · Varsayılan etiketi yetkinin rolden geldiğini gösterir.
  - ✓ Ekstra yetki açılır
- Özet: Kullanıcı listesinde rolleri kontrol edin. · Düzenle sayfasında rolü ve onay limitini belirleyin. · Detaylı Yetkiler listesinde ekstra yetki açın.
- Kapanış: Şimdi Kullanıcılar & Yetkiler sayfasını açın.

**Bir siparişin onay yolculuğu** (`egitim-64-onay-yolculugu`)

- Bir siparişin onay yolculuğu — Siparişin onaydan faturaya hangi adımlardan geçtiğini görün.
- Bu videoda: Onay kuralını görün · Siparişi Onaylarım'da onaylayın · Siparişin 9 durumunu öğrenin
- 1. Onay kuralı siparişin kime gideceğini belirler.
  - · Kural tutar sınırını ve onaylayacak kişiyi gösterir.
- 2. Onaya düşen sipariş Onay Bekleniyor durumuna geçer.
  - · Sıradaki adım şirket içi onaydır.
  - · Onay zinciri siparişin kimde beklediğini gösterir.
- 3. Yeni onay talebi bildirim olarak gelir.
  - · Zil simgesi bekleyen onayı size haber verir.
- 4. Onaylayıcı siparişi Onaylarım sayfasında karara bağlar.
  - · Siparişi onaylayabilir, revizeye yollayabilir ya da reddedebilirsiniz.
  - ✓ Sipariş onaylandı
- Sipariş 9 durumdan geçer. Taslak → Onay Bekleniyor → MTS Onayı → Hazırlanıyor → Sevkiyatta → Teslim Edildi
- Özet: Onay zincirini Onay Kuralları sayfasında kontrol edin. · Siparişin durumunu detay sayfasında izleyin. · Bekleyen siparişi Onaylarım sayfasında onaylayın.
- Kapanış: Şimdi Onaylarım sayfasını açın.

**Telefondan onay verin** (`egitim-65-telefondan-onay`)

- Telefondan onay verin — Bekleyen siparişi telefondan tek dokunuşla onaylayın.
- Kerem (Operasyon müdürü): Onayları toplantı arasında veriyorum.
- 1. Özet ekranında Onay bekleyen kartına dokunun. (telefon)
  - · Bekleyen onaylara bu karttan geçersiniz.
  - ✓ Onaylarım sayfası açılır
- 2. Kartı okuyup Onayla düğmesine dokunun. (telefon)
  - · Kartta tutar, açan kişi ve ürünler yazar.
  - ✓ Sipariş onaylandı
- Özet: Özet ekranında Onay bekleyen kartına dokunun. · Kartta tutarı ve ürünleri kontrol edin. · Onayla düğmesine dokunun.
- Kapanış: Şimdi telefonunuzda Onaylarım sayfasını açın.

**Rol rehberi: satın alma sorumlusu** (`egitim-66-rol-satin-alma`)

- Rol rehberi: satın alma sorumlusu — Günlük satın alma işlerini panelde hızla yapın.
- Elif (Satın alma sorumlusu): Her hafta aynı ürünleri tek tek sipariş ediyorum.
- Bu videoda: Özet ekranını açın · Ürün kodunu yazın · Kayıtlı listeyi sepete ekleyin · Siparişi takip edin
- 1. Güne Özet ekranıyla başlayın.
  - · Yeni sipariş, şablonlar ve sık listeler buradan açılır.
- 2. Hızlı Sipariş sayfasına ürün kodunu yazın.
  - · Tek seferde 100 satıra kadar ürün girebilirsiniz.
  - ✓ Ürün sepete eklendi
- 3. Kayıtlı listeyi tek tıkla sepete ekleyin.
  - · Listedeki 6 ürün birlikte eklenir.
  - ✓ 6 ürün sepete eklendi
- 4. Siparişleri durumuna göre izleyin.
  - · Hızlı filtreler listeyi tek tıkla süzer.
  - ✓ Kargodaki siparişler listelenir
- Özet: Hızlı Sipariş sayfasına ürün kodunu yazın. · Kayıtlı listede Sepete Ekle düğmesine basın. · Siparişleri Sevkiyatta filtresiyle izleyin.
- Kapanış: Şimdi Hızlı Sipariş sayfasını açın.

**Rol rehberi: yönetici** (`egitim-67-rol-yonetici`)

- Rol rehberi: yönetici — Onayları, bütçeyi ve harcamayı tek panelden izleyin.
- Murat (Genel müdür): Bütçe ve onaylar için her gün rapor istiyorum.
- Bu videoda: Özet kartlarını okuyun · Siparişi onaylayın · Bütçeyi izleyin · Harcamayı inceleyin
- 1. Özet kartlarında onayları ve krediyi görün.
  - · Bekleyen onaylara bu karttan geçersiniz.
  - · Kalan kredi limitiniz bu kartta yazar.
- 2. Onaylarım sayfasında siparişi onaylayın.
  - · Kartta tutar, açan kişi ve departman yazar.
  - ✓ Sipariş onaylandı
- 3. Bütçe Panosu ile harcamayı izleyin.
  - · Kredi kullanımı limitle birlikte yazar.
  - · Her departmanın kalan bütçesi bu sütunda yazar.
- 4. Analitik sayfasında harcamanın dağılımını görün.
  - · Son 12 ayın toplam harcaması kartta yazar.
  - · Harcama kategorilere yüzdeyle ayrılır.
- Özet: Özet kartlarında bekleyen onayları görün. · Onaylarım sayfasında Onayla düğmesine basın. · Bütçe Panosu sayfasında harcamayı izleyin.
- Kapanış: Şimdi Bütçe Panosu sayfasını açın.

**Rol rehberi: muhasebe** (`egitim-68-rol-muhasebe`)

- Rol rehberi: muhasebe — Ekstreyi, faturaları ve sipariş belgelerini panelden alın.
- Seda (Muhasebe uzmanı): Ay sonunda faturaları tek tek topluyorum.
- Bu videoda: Ekstreyi filtreleyin · Faturayı yazdırın · Listeyi Excel'e aktarın · PO numarasını bulun
- 1. Cari Ekstre sayfasında tarih aralığı seçin.
  - ✓ Bu aralıktaki hareketler listelenir
- 2. Borçları vade aralığına göre okuyun.
  - · Borçlar vadesine göre gün aralıklarında toplanır.
- 3. Faturalarım sayfasında faturayı yazdırın.
  - · Faturalarınız panele otomatik gelir.
  - ✓ Yazdırma görünümü açılır
- 4. Sipariş listesini Excel'e aktarın.
  - ✓ Liste Excel dosyasına aktarılır
- 5. Sipariş belgesinde PO numarasını bulun.
  - · Belgede siparişi veren kişi ve PO numarası yazar.
- Özet: Cari Ekstre'yi tarih aralığıyla filtreleyin. · Faturayı Yazdır düğmesiyle yazdırın. · Sipariş listesini Excel'e aktarın.
- Kapanış: Şimdi Cari Ekstre sayfasını açın.

**Rol rehberi: şube ve depo sorumlusu** (`egitim-69-rol-sube`)

- Rol rehberi: şube ve depo sorumlusu — Şube siparişini doğru listeden doğru adrese verin.
- Hakan (Şube ve depo sorumlusu): Her şubenin siparişini farklı adrese gönderiyorum.
- Bu videoda: Firma listesini sepete ekleyin · Proje kaydı açın · Varsayılan adresi kontrol edin · Siparişin adresini görün
- 1. Firma listesini tek tıkla sepete ekleyin.
  - · Firma listesi şirketin ortak listesidir.
  - ✓ Listedeki 5 ürün sepete eklendi
- 2. Her şube için proje kaydı açın.
  - · Projenin kodu, adresi ve sipariş sayısı burada yazar.
  - ✓ Yeni proje formu açılır
- 3. Varsayılan teslimat adresini kontrol edin.
  - · Varsayılan etiketi ana teslimat adresinizi gösterir.
- 4. Sipariş detayında teslimat adresini görün.
  - · Sıradaki adım kutusu siparişin nerede olduğunu söyler.
  - · Ürünler Merkez Depo adresine teslim edilir.
- Özet: Firma listesinde Sepete Ekle düğmesine basın. · Yeni Proje düğmesiyle şube projesi açın. · Varsayılan teslimat adresini kontrol edin.
- Kapanış: Şimdi Adres Defteri sayfasını açın.

**Puanınızı kupona dönüştürün** (`egitim-70-puan-kupon`)

- Puanınızı kupona dönüştürün — Biriken puanınızı indirim kuponuna çevirin.
- Murat (Satın alma sorumlusu): Puanım birikiyor, nasıl kullanacağımı bilmiyorum.
- 1. Sadakat Programı sayfasında bakiyenizi görün.
  - · Puanınızın kupon karşılığı rakamın altında yazar
  - ✓ Puan Kullan bölümü açılır
- 2. Birim sayısını yazıp İndirim Kuponu Oluştur düğmesine basın.
  - · Örneğin 10 birim 100 TL'lik kupon olur
  - ✓ 100 TL indirim kuponu oluşturuldu
- 3. Kuponlarım sayfasında kodu kopyalayıp sepette kullanın.
  - · Her kupon tek siparişte bir kez kullanılır
  - ✓ Kupon kodu kopyalandı
- Özet: Sadakat Programı sayfasında bakiyenizi kontrol edin. · Birim sayısını yazıp İndirim Kuponu Oluştur düğmesine basın. · Kuponlarım sayfasında kupon kodunu kopyalayın.
- Kapanış: Şimdi Sadakat Programı sayfasını açın.

**Kupon kodu gerektirmeyen avantajlar** (`egitim-71-avantajlar`)

- Kupon kodu gerektirmeyen avantajlar — Sepette kendiliğinden uygulanan indirimleri tanıyın.
- İndirim için kupon kodu mu arıyorsunuz? — Bazı indirimler sepette kendiliğinden uygulanır.
- 1. Kampanyalar sayfasında Sürekli Avantajlar bölümünü bulun.
  - · Bu bölümde üç kalıcı avantaj listelenir
  - · Adet arttıkça indirim %5, %8 ve %10 olur
- 2. Ödeme ve kargo avantajlarını okuyun.
  - · İndirim havale veya EFT ile ödemede geçerlidir
  - · Sepet tutarı ₺3.500'e ulaşınca kargo ücretsiz olur
- Bu avantajlar için kod gerekmez.: %10 Kademeli indirimde en yüksek oran · %2 Peşin ödeme indirimi · ₺3.500 Ücretsiz kargo sınırı · %8–%10 Paket indirimi
- Özet: Kampanyalar sayfasında Sürekli Avantajlar bölümünü bulun. · Peşin ödeme indirimini kartta okuyun. · Ücretsiz kargo sınırını kontrol edin.
- Kapanış: Şimdi Kampanyalar sayfasını açın.

**Bildirim tercihleri** (`egitim-72-bildirim-tercihleri`)

- Bildirim tercihleri — Hangi e-postaları alacağınızı kendiniz seçin.
- Derya (Muhasebe sorumlusu): Gelen kutum bildirim e-postalarıyla doluyor.
- 1. Ayarlar sayfasında Bildirim Tercihleri bölümünü bulun.
  - · İşaretli seçenekler için e-posta gönderilir
- 2. Seçimlerinizi yapıp Tercihleri Kaydet düğmesine basın.
  - · İşareti kaldırılan e-postalar size gönderilmez
  - · Sepette kalan ürünler için 24 saat, 3 gün ve 7 gün sonra e-posta gelir
  - ✓ Tercihleriniz kaydedildi
- 3. Verilerimi İndir (ZIP) ile verilerinizin kopyasını alın.
  - ✓ Verileriniz ZIP dosyası olarak iner
- Özet: Ayarlar sayfasında Bildirim Tercihleri bölümünü bulun. · İstemediğiniz e-postaların işaretini kaldırıp kaydedin. · Verilerimi İndir (ZIP) düğmesine basın.
- Kapanış: Şimdi Ayarlar sayfasını açın.

**Mini test: sipariş** (`egitim-73-test-siparis`)

- Mini test: sipariş — Sipariş bilginizi üç soruyla pekiştirin.
- Test: Kargoya verilen sipariş hangi durumda görünür? (Hazırlanıyor / ✓ Sevkiyatta / Teslim Edildi)
- Kargodaki sipariş Sevkiyatta durumunda görünür.
  - · Durum etiketi siparişin aşamasını gösterir
- Test: Hızlı Sipariş formuna en fazla kaç satır girersiniz? (50 satır / ✓ 100 satır / 500 satır) — Sınır 100 satırdır.
- Test: Kargo takip numarası nerede yazar? (✓ Sipariş detayındaki Sevkiyat kutusunda / Faturalarım sayfasında / Cari Ekstre sayfasında)
- Takip numarası Sevkiyat kutusunda yazar.
  - · Takip et bağlantısıyla kargonuzu izleyebilirsiniz
- Özet: Kargodaki siparişi Sevkiyatta durumunda bulun. · Hızlı Sipariş formuna en fazla 100 satır girin. · Takip numarasını Sevkiyat kutusunda okuyun.
- Kapanış: Şimdi Siparişlerim sayfasını açın.

**Mini test: ödeme ve indirimler** (`egitim-74-test-odeme`)

- Mini test: ödeme ve indirimler — İndirim kurallarını üç soruyla pekiştirin.
- Test: Havale/EFT ile peşin ödemede indirim yüzde kaçtır? (✓ %2 / %5 / %10)
- Peşin ödemede net tutardan %2 düşülür.
  - · Bu indirim için kupon kodu gerekmez
- Test: Ücretsiz kargo hangi tutardan başlar? (₺1.500 / ✓ ₺3.500 / ₺5.000) — ₺3.500 ve üzerinde kargo ücretsizdir.
- Test: Ürün sayfasındaki kademeli indirim oranları hangileridir? (✓ %5 / %8 / %10 / %2 / %4 / %6 / %10 / %15 / %20)
- Adet arttıkça indirim oranı artar.
  - · İndirim sepette her satıra kendiliğinden yansır
- Özet: Havale/EFT ile ödeyip %2 indirim alın. · ₺3.500 ve üzeri siparişte ücretsiz kargodan yararlanın. · Kademe tablosunda indirim oranını okuyun.
- Kapanış: Şimdi Kampanyalar sayfasını açın.

**Mini test: onay ve bütçe** (`egitim-75-test-onay`)

- Mini test: onay ve bütçe — Onay ve bütçe kurallarını üç soruyla pekiştirin.
- Test: Otomatik onay eşiğinin altındaki sipariş ne olur? (✓ Doğrudan onaylanır / Onay zincirine girer / İptal edilir)
- Eşiğin altındaki sipariş onay zincirine girmez.
  - · Eşik tutarı sözleşmenizde tanımlıdır
- Test: Bir onay kuralına en fazla kaç seviye onaylayıcı eklersiniz? (2 seviye / ✓ 3 seviye / 5 seviye) — Üç seviye seçilebilir.
- Test: Departmanın kalan bütçesini nerede görürsünüz? (✓ Bütçe Panosu / Kuponlarım / Faturalarım)
- Bütçe Panosu kalan bütçeyi gösterir.
  - · Bütçe, harcanan ve kalan tutar aynı satırda yazar
- Özet: Otomatik onay eşiğini Sözleşme & Fiyat sayfasında kontrol edin. · Onay zincirine en fazla üç seviye ekleyin. · Kalan bütçeyi Bütçe Panosu sayfasında izleyin.
- Kapanış: Şimdi Bütçe Panosu sayfasını açın.

### Tanıtım videoları (20 video · toplam 7:13)

| No | Video | Süre | Dosya |
|---|---|---|---|
| 20 | Hepsi tek panelde | 0:17 | `2026-10-09/tanitim/tanitim-20-tek-panel` |
| 21 | Panel cebinizde | 0:21 | `2026-10-09/tanitim/tanitim-21-panel-cebinizde` |
| 22 | Otel: kat hizmetleri tek panelde | 0:24 | `2026-10-09/tanitim/tanitim-22-otel` |
| 23 | Okul: dönem başlamadan hazır | 0:24 | `2026-10-09/tanitim/tanitim-23-okul` |
| 24 | Restoran: mutfak hijyeni tek pakette | 0:23 | `2026-10-09/tanitim/tanitim-24-restoran` |
| 25 | Ofis: bir aylık ihtiyaç tek pakette | 0:26 | `2026-10-09/tanitim/tanitim-25-ofis` |
| 26 | Sağlık kuruluşları: kontrol sizde | 0:26 | `2026-10-09/tanitim/tanitim-26-saglik` |
| 27 | Fabrika: üretim hattı durmasın | 0:26 | `2026-10-09/tanitim/tanitim-27-fabrika` |
| 28 | Rakamlarla MTS Hijyen B2B | 0:25 | `2026-10-09/tanitim/tanitim-28-rakamlarla` |
| 29 | Bir satın almacının günü | 0:35 | `2026-10-09/tanitim/tanitim-29-bir-gun` |
| 30 | Toplantıdan çıkmadan onaylayın | 0:14 | `2026-10-09/tanitim/tanitim-30-toplantidan-onay` |
| 31 | Muhasebe için 3 neden | 0:26 | `2026-10-09/tanitim/tanitim-31-muhasebe` |
| 32 | Ay sonu: önce / sonra | 0:21 | `2026-10-09/tanitim/tanitim-32-ay-sonu` |
| 33 | Ödemeyi siz seçin | 0:20 | `2026-10-09/tanitim/tanitim-33-odeme` |
| 34 | Kupon kodu gerektirmeyen 4 avantaj | 0:17 | `2026-10-09/tanitim/tanitim-34-avantajlar` |
| 35 | Saat 14:00, bugün kargoda | 0:16 | `2026-10-09/tanitim/tanitim-35-saat-14` |
| 36 | Aynı panel, iki rol | 0:25 | `2026-10-09/tanitim/tanitim-36-iki-rol` |
| 37 | Yedi kategori, tek tedarikçi | 0:17 | `2026-10-09/tanitim/tanitim-37-yedi-kategori` |
| 38 | Doğru ürün, ilk seferde | 0:20 | `2026-10-09/tanitim/tanitim-38-dogru-urun` |
| 39 | Kurumsal hesabınızı açın | 0:16 | `2026-10-09/tanitim/tanitim-39-kurumsal-hesap` |

#### Ekrandaki metinler

**Hepsi tek panelde** (`tanitim-20-tek-panel`)

- Telefon. E-posta. Excel. → Hepsi artık tek panelde.
- Siparişi, onayı ve bakiyeyi tek ekranda görün. — Aynı hesap masaüstünde ve telefonda açılır
- Kapanış: Satın almayı tek yerden yönetin. · Kurumsal hesap açın

**Panel cebinizde** (`tanitim-21-panel-cebinizde`)

- Bilgisayardaki panel telefonda da çalışır. — Siparişleriniz iki ekranda da aynı görünür
- Hesabınızı tek bakışta görün. (telefon)
  - · Onay bekleyen siparişler Özet ekranında görünür
- Siparişi tek dokunuşla onaylayın. (telefon)
  - ✓ Sipariş onaylandı
- Kapanış: Siparişlerinizi her yerden izleyin. · Panelde deneyin

**Otel: kat hizmetleri tek panelde** (`tanitim-22-otel`)

- Sevgi (Kat hizmetleri şefi): Her sabah kat arabasında bir ürünü eksik buluyorum.
- Kat ürünlerini tek pakette alın.
  - · Tuvalet, cam ve oda ürünleri aynı pakette gelir
  - · Paket içi %10 indirimle ₺879,28 tasarruf edersiniz
- Siparişi her ay otomatik tekrarlayın.
  - · Sipariş her ayın aynı günü kendiliğinden oluşur
- Kapanış: Kat arabasını eksiksiz hazırlayın. · Kurumsal hesap açın

**Okul: dönem başlamadan hazır** (`tanitim-23-okul`)

- Tuvalet kağıdı. Kağıt havlu. El sabunu. → Dönem başlamadan hepsini hazırlayın.
- Okulun temel ihtiyacını tek pakette alın.
  - · Tuvalet kağıdı, kağıt havlu ve el sabunu aynı pakette gelir
  - · Paket içi %10 indirimle ₺931,95 tasarruf edersiniz
- Her birimin bütçesini ayrı izleyin.
  - · Bu ayki harcama, aylık bütçenin yanında görünür
- Kapanış: Okulun siparişlerini önceden planlayın. · Kurumsal hesap açın

**Restoran: mutfak hijyeni tek pakette** (`tanitim-24-restoran`)

- Deterjan. Eldiven. Yağ sökücü. → Hepsini tek siparişte alın.
- Mutfak hijyenini tek pakette toplayın.
  - · Deterjan, tablet, yağ sökücü ve eldiven aynı pakette gelir
  - · Paket fiyatına %10 indirim kendiliğinden yansır
- Eksilen ürünü koduyla ekleyin.
- Kapanış: Mutfağı servise hazır tutun. · Kurumsal hesap açın

**Ofis: bir aylık ihtiyaç tek pakette** (`tanitim-25-ofis`)

- Murat (Ofis yöneticisi): Her ay aynı listeyi yazıyorum.
- Bir aylık ihtiyacı tek pakette alın.
  - · Paket içi %8 indirimle ₺388,94 tasarruf edersiniz
- Paketi aylık aboneliğe çevirin. (telefon)
  - ✓ Aylık abonelik oluşturuldu
- Mutfak için bulaşık setini ekleyin.
  - · Tablet, tuz ve parlatıcı aynı sette gelir
- Kapanış: Aylık siparişi bir kez ayarlayın. · Kurumsal hesap açın

**Sağlık kuruluşları: kontrol sizde** (`tanitim-26-saglik`)

- Hangi sipariş kimin onayından geçiyor? — Sağlık kuruluşlarında siparişler birçok birimden gelir.
- Onay kurallarını siz belirleyin.
  - · Kural tutara ve departmana göre çalışır
- Departman bütçelerini izleyin.
  - · Bütçe, harcama ve kalan tutar aynı satırda görünür
- Bekleyen siparişi telefondan onaylayın. (telefon)
  - ✓ Sipariş onaylandı
- Kapanış: Her siparişi kendi kurallarınızla onaylayın. · Kurumsal hesap açın

**Fabrika: üretim hattı durmasın** (`tanitim-27-fabrika`)

- Serkan (Fabrika satın alma sorumlusu): Sünger bitti, hat bekliyor.
- Hattın listesini tek tıkla sepete ekleyin.
  - · Firma listesi şirket genelinde görünür
  - ✓ Liste sepete eklendi
- Üretimden gelen siparişi telefondan onaylayın. (telefon)
  - · Siparişi açan departman kartta yazar
  - ✓ Sipariş onaylandı
- Kapanış: Hattın ihtiyacını tek listeden karşılayın. · Kurumsal hesap açın

**Rakamlarla MTS Hijyen B2B** (`tanitim-28-rakamlarla`)

- Katalogda aradığınızı bulun.: 1.326 ürün · 7 ana kategori · +100 marka
- Kurallar panelde açıkça yazar.: %2 Havale/EFT ile peşin ödemede indirim · ₺3.500 ve üzeri siparişte kargo ücretsiz · 100 satır hızlı siparişle tek seferde eklenir
- Tüm ürünleri tek katalogda süzün.
  - · Her kategorinin ürün sayısı yanında yazar
  - · Marka filtresi aramayı daraltır
- Kapanış: Hijyen ihtiyacınızı tek panelden alın. · Kurumsal hesap açın

**Bir satın almacının günü** (`tanitim-29-bir-gun`)

- Derya (Satın alma sorumlusu): Bugün dört işim var.
- Sabah onay bekleyenlere bakın.
  - · Bekleyen siparişlerin sayısı özette görünür
- Ürün kodunu yazıp sepete ekleyin.
  - ✓ Ürün sepete eklendi
- Öğle arasında telefondan onaylayın. (telefon)
  - ✓ Sipariş onaylandı
- Öğleden sonra kargoyu izleyin.
  - · Siparişin durumu sayfanın başında yazar
  - · Takip bilgisi kargo bölümünde yer alır
- Kapanış: Günün işini tek panelde bitirin. · Kurumsal hesap açın

**Toplantıdan çıkmadan onaylayın** (`tanitim-30-toplantidan-onay`)

- Siparişi masaya dönmeden onaylayın. (telefon)
  - · Siparişi açan kişi ve departmanı kartta yazar
  - ✓ Sipariş onaylandı
- Kapanış: Satın almayı bekletmeden yürütün. · Panelde deneyin

**Muhasebe için 3 neden** (`tanitim-31-muhasebe`)

- 3 neden: Faturalar panele otomatik gelir · Fatura ve sipariş eşleşir · Bakiye vadeye göre ayrılır
- Her fatura siparişiyle eşleşir.
  - · e-Faturalar bu listeye otomatik düşer
  - · Faturanın yanında sipariş numarası yazar
- Bakiyeyi vadesine göre görün.
  - · Borçlar vade aralıklarına göre ayrılır
  - · Her siparişin vade tarihi satırında yazar
- Kapanış: Faturayı ve bakiyeyi tek yerde izleyin. · Kurumsal hesap açın

**Ay sonu: önce / sonra** (`tanitim-32-ay-sonu`)

- Ay sonu raporu nasıl hazırlanır? Elle: Siparişler e-postalardan toplanır, Tablo elle doldurulur, Toplamlar tek tek kontrol edilir / Panelde: Tüm siparişler tek listede durur, Durum ve tarihe göre süzülür, Liste Excel'e aktarılır
- Sipariş listesini Excel'e aktarın.
  - · Hızlı filtre listeyi duruma göre daraltır
  - ✓ Liste Excel'e aktarıldı
- Kapanış: Raporunuzu panelden alın. · Panelde deneyin

**Ödemeyi siz seçin** (`tanitim-33-odeme`)

- Siparişi üç yoldan ödeyin. Cari hesap → Kredi kartı → Havale/EFT
- Ödeme yolları ürün sayfasında yazar.
  - · Ödeme yolunu siparişe göre siz seçersiniz
  - · Peşin ödemede net tutardan %2 düşülür
- Kapanış: Her siparişte size uyanı kullanın. · Kurumsal hesap açın

**Kupon kodu gerektirmeyen 4 avantaj** (`tanitim-34-avantajlar`)

- Çok alın. Peşin ödeyin. Paketi seçin. ₺3.500'e ulaşın. → Hepsi kendiliğinden uygulanır.
- Avantajları Kampanyalar sayfasında görün.
  - · Koşul sağlanınca avantaj otomatik uygulanır.
- Kapanış: İndirimleri kod girmeden kullanın. · Panelde deneyin

**Saat 14:00, bugün kargoda** (`tanitim-35-saat-14`)

- Siparişi 14:00'a kadar verin.: 14 :00 — Sipariş aynı gün kargoya verilir.
- Stok ve kargo bilgisi ürün sayfasında yazar.
  - · Stok adedi sepete eklemeden önce görünür.
- Kapanış: Acil ihtiyacı beklemeden karşılayın. · Kurumsal hesap açın

**Aynı panel, iki rol** (`tanitim-36-iki-rol`)

- Zeynep (Satın alma sorumlusu): Haftalık siparişi ürün kodlarıyla hazırlıyorum.
- Ürünleri kodlarıyla sepete ekleyin.
- Kerem (Birim yöneticisi): Onay bekleyen siparişleri telefondan görüyorum.
- Zeynep'in siparişini telefondan onaylayın. (telefon)
  - ✓ Sipariş onaylandı
- Kapanış: Siparişi hazırlayın, yöneticiniz onaylasın. · Kurumsal hesap açın

**Yedi kategori, tek tedarikçi** (`tanitim-37-yedi-kategori`)

- Kağıt. Kimyasal. Mutfak. Ekipman. → Hepsini tek tedarikçiden alın.
- Yedi kategoriyi tek katalogda gezin.
  - · Her kategorinin ürün sayısı yanında yazar.
- Kapanış: Tüm ihtiyacı tek siparişte toplayın. · Kurumsal hesap açın

**Doğru ürün, ilk seferde** (`tanitim-38-dogru-urun`)

- Havlu dispensere uyar mı? — Cevabı ürün sayfasında bulun.
- Cevap Teknik Özellikler bölümünde yazar.
  - · Satın almadan önce dispenser tipinizle karşılaştırın.
- Emin değilseniz ücretsiz numune isteyin.
  - · Satış ekibi onaylayınca numune gönderilir.
- Kapanış: Ürünü önce deneyin, sonra sipariş verin. · Kurumsal hesap açın

**Kurumsal hesabınızı açın** (`tanitim-39-kurumsal-hesap`)

- Cari özel fiyat. Yetki zincirli onay. Kademeli iskonto. → Hepsi tek formla başlar.
- Kurumsal Üyelik formunu doldurun.
  - · Cari özel fiyatlar onay sonrası otomatik tanımlanır.
- Kapanış: Firmanızı bugün panele taşıyın. · Kurumsal hesap açın

## İlk seri (14 video · toplam 17:02)

İlk motorla üretilen videolar. Yalnız yatay; dış ses yok. Her videonun altyazısı aynı adla `.srt` dosyasında. Kurgu: `04-video-plani.md`.

| No | Video | Süre | Dosya |
|---|---|---|---|
| V1 | Hijyen tedariğiniz tek panelde | 1:05 | `ilk-seri/ilk-seri-v1-tek-panel` |
| V2 | Bir siparişin yolculuğu | 1:19 | `ilk-seri/ilk-seri-v2-siparisin-yolculugu` |
| V3 | Kurumsal kontrol: onay, bütçe, yetki | 1:15 | `ilk-seri/ilk-seri-v3-kurumsal-kontrol` |
| V4 | Cari ve finans şeffaflığı | 0:54 | `ilk-seri/ilk-seri-v4-cari-ve-finans` |
| E1 | Panele giriş ve özet ekranı | 1:05 | `ilk-seri/ilk-seri-e01-giris-ve-ozet` |
| E2 | Katalogdan sipariş verme | 1:29 | `ilk-seri/ilk-seri-e02-katalogdan-siparis` |
| E3 | Hızlı sipariş: SKU ve Excel/CSV | 1:01 | `ilk-seri/ilk-seri-e03-hizli-siparis` |
| E4 | Periyodik siparişler ve listeler | 1:12 | `ilk-seri/ilk-seri-e04-periyodik-ve-listeler` |
| E5 | Siparişlerimi takip etmek | 1:17 | `ilk-seri/ilk-seri-e05-siparis-takibi` |
| E6 | Onaylarım ve onay kuralları | 1:33 | `ilk-seri/ilk-seri-e06-onaylar-ve-kurallar` |
| E7 | Kullanıcılar, yetkiler, departman bütçeleri | 1:25 | `ilk-seri/ilk-seri-e07-kullanicilar-ve-butceler` |
| E8 | Cari ekstre ve faturalar | 1:01 | `ilk-seri/ilk-seri-e08-ekstre-ve-faturalar` |
| E9 | Teklif iste, paketler, numune ve iade | 1:29 | `ilk-seri/ilk-seri-e09-teklif-numune-iade` |
| E10 | Sadakat, kupon ve davet | 0:57 | `ilk-seri/ilk-seri-e10-sadakat-kupon-davet` |

## Arşiv

| Video | Süre | Dosya |
|---|---|---|
| Hype promo · ilk sürüm (eski motor) | 1:00 | `arsiv/hype-promo-ilk-surum` |
| Stil denemesi A · Klinik beyaz (seçilen stil) | 0:10 | `arsiv/stil-a-klinik-beyaz` |
| Stil denemesi B · Gece vardiyası | 0:10 | `arsiv/stil-b-gece-vardiyasi` |
| Stil denemesi C · Koli ve mühür (seçilen anlar) | 0:10 | `arsiv/stil-c-koli-muhur` |
| Stil karşılaştırma görseli | — | `arsiv/stil-karsilastirma.png` |
