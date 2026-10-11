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

## Eğitim videoları (42 video · toplam 23:12)

| No | Video | Süre | Dosya |
|---|---|---|---|
| 1 | Panele giriş | 0:41 | `egitim/egitim-01-giris` |
| 2 | Özet ekranı | 0:46 | `egitim/egitim-02-ozet` |
| 3 | Ürün arama | 0:35 | `egitim/egitim-03-urun-arama` |
| 4 | Kategoriler ve filtreler | 0:37 | `egitim/egitim-04-kategoriler` |
| 5 | Ürün sayfası | 0:35 | `egitim/egitim-05-urun-sayfasi` |
| 6 | Kademeli iskonto | 0:30 | `egitim/egitim-06-kademeli-iskonto` |
| 7 | Hızlı sipariş | 0:40 | `egitim/egitim-07-hizli-siparis` |
| 8 | Siparişlerim | 0:38 | `egitim/egitim-08-siparislerim` |
| 9 | Sipariş detayı | 0:40 | `egitim/egitim-09-siparis-detayi` |
| 10 | Onay bekleyen sipariş | 0:32 | `egitim/egitim-10-onay-bekleyen-siparis` |
| 11 | Ödeme bekleyen sipariş | 0:32 | `egitim/egitim-11-odeme-bekleyen-siparis` |
| 12 | Periyodik siparişler | 0:30 | `egitim/egitim-12-periyodik-siparisler` |
| 13 | Periyodik şablon oluşturma | 0:38 | `egitim/egitim-13-periyodik-sablon` |
| 14 | Sipariş listeleri | 0:35 | `egitim/egitim-14-siparis-listeleri` |
| 15 | Favorilerim | 0:27 | `egitim/egitim-15-favoriler` |
| 16 | Fiyat teklifleri | 0:30 | `egitim/egitim-16-fiyat-teklifleri` |
| 17 | Yeni fiyat teklifi | 0:34 | `egitim/egitim-17-yeni-teklif` |
| 18 | Toplu alım teklifi | 0:31 | `egitim/egitim-18-toplu-alim-teklifi` |
| 19 | Sözleşme ve fiyat | 0:33 | `egitim/egitim-19-sozlesme-fiyat` |
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
| 40 | Destek talebi | 0:40 | `egitim/egitim-40-destek-talebi` |
| 41 | Hesap ayarları | 0:38 | `egitim/egitim-41-hesap-ayarlari` |
| 42 | Yardım merkezi | 0:30 | `egitim/egitim-42-yardim-merkezi` |

### Ekrandaki metinler

**Panele giriş** (`egitim-01-giris`)

- Panele giriş — Kurumsal hesabınızla panele güvenle girin.
- 1. Giriş sayfasında e-posta adresinizi yazın.
- 2. Şifrenizi yazıp Giriş Yap butonuna basın.
  - · Şifreniz noktalarla gizlenir
  - · Bu cihazda oturumunuz açık kalır
  - ✓ Özet ekranı açılır
- 3. Şifrenizi unuttuysanız yeni şifre isteyin.
  - · E-postanıza sıfırlama bağlantısı gelir
  - · Hesabı olmayan firmalar buradan kayıt olur
- Unutmayın: E-postanızı ve şifrenizi yazıp Giriş Yap'a basın. · Şifrenizi unutursanız Şifremi unuttum'a basın. · Ortak bilgisayarda Beni hatırla kutusunu boş bırakın.
- Kapanış: Şimdi panele giriş yapın.

**Özet ekranı** (`egitim-02-ozet`)

- Özet ekranı — Hesabınızın durumunu tek bakışta görün.
- 1. Panele girdiğinizde ilk Özet ekranı açılır.
  - · Bu ayki toplam harcamanız burada yazar
  - · Ödenmemiş bakiyeniz ve vadeniz burada yazar
  - · Kalan kredi limitiniz burada yazar
- 2. Onay bekleyen siparişleri tek tıkla açın.
  - · Bekleyen onayların sayısı bu kartta yazar
  - ✓ Onaylarım sayfası açılır
- 3. Harcama trendini ve son siparişlerinizi inceleyin.
  - · Grafik son 12 ayın harcamasını gösterir
  - · Harcama kategorilere göre ayrılır
  - · Son siparişler durumlarıyla listelenir
- Unutmayın: Güne Özet ekranıyla başlayın. · Bekleyen onayları Şimdi incele ile açın. · Son siparişlerin durumunu listede izleyin.
- Kapanış: Şimdi Özet ekranını açın.

**Ürün arama** (`egitim-03-urun-arama`)

- Ürün arama — Aradığınız ürünü arama kutusuyla bulun.
- 1. Üstteki arama kutusuna ürün adını yazın.
- 2. Sonuçlar siz yazarken listelenir.
  - · Ürün adı ve ürün kodu birlikte görünür
  - ✓ Tüm sonuçlar listelenir
- 3. Ürün kodu veya barkod ile de arayabilirsiniz.
- Unutmayın: Ürün adının bir kısmını yazın. · Tüm sonuçlar için listenin son satırına basın. · Ürün kodunu ya da barkodu da yazabilirsiniz.
- Kapanış: Şimdi bir ürünü arayın.

**Kategoriler ve filtreler** (`egitim-04-kategoriler`)

- Kategoriler ve filtreler — Ürünleri kategoriye göre süzün.
- 1. Üst menüden bir kategori seçin.
  - · Ana kategoriler bu menüde durur
  - · Ürün sayısı, marka ve fiyat aralığı burada yazar
- 2. Sol taraftaki filtrelerle sonuçları daraltın.
  - · Alt kategoriye göre süzün
  - · Markaya göre süzün
- 3. Ürünleri fiyata veya ada göre sıralayın.
  - · Fiyat düğmeleri listeyi fiyata göre sıralar
- Unutmayın: Önce üst menüden kategori seçin. · Listeyi marka ve alt kategoriyle daraltın. · Filtreleri Temizle düğmesiyle sıfırlayın.
- Kapanış: Şimdi Kağıt Ürünleri kategorisini açın.

**Ürün sayfası** (`egitim-05-urun-sayfasi`)

- Ürün sayfası — Fiyatı, stoğu ve kargo süresini tek sayfada görün.
- 1. Ürün sayfasında KDV hariç fiyatı görün.
  - · KDV dahil fiyat hemen altında yazar
  - · Her koli 4 sadakat puanı kazandırır
- 2. Stok ve kargo bilgisini kontrol edin.
  - · Stok adedi ve kargo süresi burada yazar
- 3. Adedi seçip Sepete Ekle butonuna basın.
  - ✓ Ürün sepete eklendi
- Unutmayın: KDV dahil fiyatı liste fiyatının altında okuyun. · Sepete eklemeden önce stok adedine bakın. · Kazanacağınız puanı fiyat kutusunda görün.
- Kapanış: Şimdi bir ürün sayfası açın.

**Kademeli iskonto** (`egitim-06-kademeli-iskonto`)

- Kademeli iskonto — Çok alın, birim fiyatınız düşsün.
- 1. FIRSAT tablosu adet arttıkça düşen fiyatı gösterir.
  - · 5 koliden %5, 30 koliden %8, 40 koliden %10 indirim alırsınız
- 2. Toplu Alım Hesaplayıcı ile toplam tutarı görün.
  - · Adedi yazın ya da hazır adetlerden seçin
  - · Birim fiyat ve KDV dahil toplam burada yazar
- Unutmayın: Kademe tablosunda indirim oranını okuyun. · Toplam tutarı hesaplayıcıda görün. · İndirim sepette kendiliğinden uygulanır.
- Kapanış: Şimdi kademe tablosunu inceleyin.

**Hızlı sipariş** (`egitim-07-hizli-siparis`)

- Hızlı sipariş — Ürün koduyla tek ekranda toplu sipariş verin.
- 1. Hızlı Sipariş ekranında ürün kodunu yazın.
  - · Her satıra bir ürün ve miktar yazın
- 2. Yeni ürün için Satır Ekle butonunu kullanın.
  - · En fazla 100 satır ekleyebilirsiniz
  - · Hazır listenizi tek seferde yapıştırın
- 3. Listeyi doğrulayıp sepete ekleyin.
  - · Kodları sepete eklemeden önce kontrol edin
  - ✓ Ürünler sepete eklendi
- Unutmayın: Ürün kodunu biliyorsanız bu ekranı kullanın. · Uzun listeyi CSV Yapıştır ile ekleyin. · Sepete eklemeden önce Doğrula'ya basın.
- Kapanış: Şimdi Hızlı Sipariş sayfasını açın.

**Siparişlerim** (`egitim-08-siparislerim`)

- Siparişlerim — Tüm siparişlerinizi tek listede takip edin.
- 1. Siparişlerim sayfası firmanızın tüm siparişlerini listeler.
  - · Her satırda açan kişi, durum ve tutar yazar
- 2. Filtrelerle aradığınız siparişi bulun.
  - · Sipariş no veya PO ile arayın
  - · Duruma göre süzün
  - · Tek tıkla duruma göre süzün
- 3. Listeyi Excel'e aktarın.
  - ✓ Liste Excel dosyasına aktarılır
- Unutmayın: Her siparişin durumunu listede izleyin. · Siparişi numarasıyla ya da PO ile arayın. · Rapor için listeyi Excel'e aktarın.
- Kapanış: Şimdi Siparişlerim sayfasını açın.

**Sipariş detayı** (`egitim-09-siparis-detayi`)

- Sipariş detayı — Siparişin hangi adımda olduğunu görün.
- 1. Sipariş detayında durum çubuğunu izleyin.
  - · Sipariş şu an Hazırlanıyor adımında
  - · Sıradaki işi bu kutuda okuyun
- 2. Sipariş kalemlerini ve tutarı kontrol edin.
  - · Her satırda kod, adet ve birim fiyat yazar
  - · İndirim, KDV ve kargo toplamın üstünde yazar
- 3. Siparişi yazdırın ya da şablona kaydedin.
  - · Aynı siparişi tekrar vermek için saklayın
  - ✓ Sipariş belgesi açılır
- Unutmayın: Siparişin adımını durum çubuğunda izleyin. · Kalemleri ve toplam tutarı kontrol edin. · Sık verdiğiniz siparişi şablona kaydedin.
- Kapanış: Şimdi bir sipariş detayı açın.

**Onay bekleyen sipariş** (`egitim-10-onay-bekleyen-siparis`)

- Onay bekleyen sipariş — Onay zincirindeki siparişi takip edin.
- 1. Bu sipariş şirket içi onay bekliyor.
  - · Siparişi sıradaki onaylayıcı inceleyecek
- 2. Onay zincirinde kimin beklediğini görün.
  - · Bekleyen kişinin adı burada yazar
- 3. Gerekirse siparişi iptal edebilirsiniz.
  - · Sipariş işleme alınmadan iptal edilebilir
- Unutmayın: Sipariş onaylayıcılara sırayla gider. · Bekleyen kişiyi Onay Zinciri bölümünde görün. · Hazırlık başladıysa iptal için destek ekibine ulaşın.
- Kapanış: Şimdi onay bekleyen bir siparişi açın.

**Ödeme bekleyen sipariş** (`egitim-11-odeme-bekleyen-siparis`)

- Ödeme bekleyen sipariş — Siparişin ödemesini tamamlayın.
- 1. Sipariş durumunda Ödeme Bekleniyor yazar.
  - · Ödeme hesaba geçince sipariş hazırlığa alınır
- 2. Sıradaki adım ne yapmanız gerektiğini söyler.
  - · Kart sorununda farklı kart ya da havale deneyin
- 3. Havale açıklamasına sipariş numarasını yazın.
  - · Ödemeniz bu numarayla siparişe bağlanır
- Unutmayın: Havale açıklamasına sipariş numarasını yazın. · Ödeme hesaba geçince sipariş hazırlığa alınır. · Havale ile ödeyip %2 indirim alın.
- Kapanış: Şimdi Siparişlerim sayfasını açın.

**Periyodik siparişler** (`egitim-12-periyodik-siparisler`)

- Periyodik siparişler — Düzenli siparişleri otomatiğe bağlayın.
- 1. Periyodik Siparişler sayfası şablonlarınızı listeler.
  - · Bu şablon her ayın 1. günü sipariş oluşturur
  - · Sonraki sipariş tarihi kartta yazar
- 2. Yeni bir şablon için Yeni Şablon butonuna basın.
  - ✓ Yeni şablon formu açılır
- Unutmayın: Sonraki sipariş tarihini kartta kontrol edin. · Şablonu kalem simgesiyle düzenleyin. · Yeni şablon için Yeni Şablon düğmesine basın.
- Kapanış: Şimdi Periyodik Siparişler sayfasını açın.

**Periyodik şablon oluşturma** (`egitim-13-periyodik-sablon`)

- Periyodik şablon oluşturma — Bir kez kurun, sistem her ay tekrarlasın.
- 1. Şablona bir ad verin.
- 2. Sipariş sıklığını ve günü seçin.
  - · Haftalık, iki haftada bir ya da aylık seçin
  - · Sipariş ayın bu gününde oluşur
- 3. Ürünleri ekleyip Şablonu Kaydet butonuna basın.
  - ✓ Şablon kaydedildi
- Unutmayın: Sipariş gününü 1 ile 28 arasında seçin. · Ödeme yöntemini ve teslimat adresini formda seçin. · Ürünleri ekleyip Şablonu Kaydet düğmesine basın.
- Kapanış: Şimdi ilk şablonunuzu oluşturun.

**Sipariş listeleri** (`egitim-14-siparis-listeleri`)

- Sipariş listeleri — Sık aldıklarınızı listeye kaydedin.
- 1. Sipariş Listelerim sayfası kayıtlı listelerinizi gösterir.
  - · Listeler kişisel ve firma olarak ayrılır
  - · Bu firma listesi 5 ürün içerir
- 2. Listeyi tek tıkla sepete ekleyin.
  - ✓ 5 ürün sepete eklendi
- 3. Yeni liste için Yeni Liste butonuna basın.
  - · Listeye istediğiniz ürünleri ekleyin
- Unutmayın: Ortak listeleri Firma sekmesinde bulun. · Kayıtlı listeyi Sepete Ekle ile ekleyin. · Listeyi Düzenle düğmesiyle güncel tutun.
- Kapanış: Şimdi Sipariş Listelerim sayfasını açın.

**Favorilerim** (`egitim-15-favoriler`)

- Favorilerim — Sık aldığınız ürünlere hızlı ulaşın.
- 1. Favorilerim sayfası işaretlediğiniz ürünleri gösterir.
  - · Favori ürün fiyatıyla birlikte görünür
- 2. Ürünü buradan doğrudan sepete ekleyin.
  - ✓ Ürün sepete eklendi
- Unutmayın: Sık aldığınız ürünleri favori olarak işaretleyin. · Favorileri fiyatlarıyla birlikte görün. · Favoriden tek tıkla sepete ekleyin.
- Kapanış: Şimdi Favorilerim sayfasını açın.

**Fiyat teklifleri** (`egitim-16-fiyat-teklifleri`)

- Fiyat teklifleri — Özel fiyat isteyin, teklifinizi takip edin.
- 1. Fiyat Tekliflerim sayfası tüm taleplerinizi listeler.
  - · Bu teklifin fiyatı hazırlandı
  - · Bu teklifin fiyatı henüz hazırlanıyor
- 2. Yeni talep için Yeni Teklif Talebi butonuna basın.
  - ✓ Teklif formu açılır
- Unutmayın: Durumda Teklif Hazır yazınca teklifi açın. · Hazır teklifi Teklifi Kabul Et ile onaylayın. · Teklifi son geçerlilik tarihinden önce kabul edin.
- Kapanış: Şimdi Fiyat Tekliflerim sayfasını açın.

**Yeni fiyat teklifi** (`egitim-17-yeni-teklif`)

- Yeni fiyat teklifi — Ürün ve miktarı yazın, fiyatı MTS hazırlasın.
- 1. Ürün kodunu ve miktarı yazın.
  - · Her satıra özel not ekleyebilirsiniz
- 2. Notunuzu yazıp Teklif Oluştur butonuna basın.
  - ✓ Teklif talebiniz iletildi
- Unutmayın: Birden çok ürünü tek talepte isteyin. · Teslimat ve adet bilgisini nota yazın. · Talebinizi Teklif Oluştur ile gönderin.
- Kapanış: Şimdi ilk teklif talebinizi oluşturun.

**Toplu alım teklifi** (`egitim-18-toplu-alim-teklifi`)

- Toplu alım teklifi — 500+ adetlik alımlar için teklif isteyin.
- 1. Teklif İste sayfasında firma bilgilerinizi yazın.
  - · Firma ve iletişim bilgilerinizi yazın
- 2. Ürün, adet ve süreyi açıklayın.
  - ✓ Talebiniz satış ekibine iletildi
- Unutmayın: Adedi ve süreyi açıkça yazın. · Varsa ek dosyayı forma ekleyin. · Teklifi satış ekibi hazırlar.
- Kapanış: Şimdi Teklif İste sayfasını açın.

**Sözleşme ve fiyat** (`egitim-19-sozlesme-fiyat`)

- Sözleşme ve fiyat — Fiyat listenizi ve ödeme koşullarınızı görün.
- 1. Sözleşme & Fiyat sayfası anlaşma koşullarınızı gösterir.
  - · Hesabınızda uygulanan fiyat listesi burada yazar
  - · Limit ve kullanılabilir tutar burada yazar
  - · Ödemeniz 30 gün vadelidir
- 2. Otomatik onay eşiği küçük siparişleri hızlandırır.
  - · ₺5.000 altındaki siparişler doğrudan onaylanır
- Unutmayın: Fiyat listenizi bu sayfada kontrol edin. · Kullanılabilir kredi limitinizi izleyin. · Faturanızı 30 gün içinde ödeyin.
- Kapanış: Şimdi Sözleşme & Fiyat sayfasını açın.

**Onaylarım** (`egitim-20-onaylarim`)

- Onaylarım — Onayınızı bekleyen siparişleri karara bağlayın.
- 1. Onaylarım sayfası onayınızı bekleyen siparişleri listeler.
  - · Kartta tutar, açan kişi ve departman yazar
  - · Siparişin onay seviyesi sağ üstte yazar
- 2. Siparişi onaylayın, revize isteyin ya da reddedin.
  - · Revize için Geri Yolla siparişi geri gönderir
  - ✓ Sipariş onaylandı
- Unutmayın: Kartta tutarı ve ürünleri kontrol edin. · Değişiklik isterseniz Revize için Geri Yolla'ya basın. · Onaylanan sipariş MTS onayına geçer.
- Kapanış: Şimdi Onaylarım sayfasını açın.

**Onay kuralları** (`egitim-21-onay-kurallari`)

- Onay kuralları — Hangi siparişin kime düşeceğini belirleyin.
- 1. Onay Kuralları sayfası tanımlı kuralları listeler.
  - · Kural tutar sınırını ve onaylayıcıyı gösterir
  - · Her tutar sınırı için ayrı kural kurulur
- 2. Yeni kural için Yeni Kural butonuna basın.
  - ✓ Yeni kural formu açılır
- Unutmayın: Kuralı tutara ve departmana göre kurun. · Her kurala en fazla 3 seviye onaylayıcı ekleyin. · Otomatik onay eşiğinin altındaki sipariş onay beklemez.
- Kapanış: Şimdi Onay Kuralları sayfasını açın.

**Yeni onay kuralı** (`egitim-22-yeni-onay-kurali`)

- Yeni onay kuralı — Tutar eşiği ve onaylayıcıları seçin.
- 1. Kurala bir ad ve tutar aralığı verin.
  - · Alt ve üst tutarı burada yazın
- 2. Onaylayıcı zincirini seviye seviye kurun.
  - · Sipariş bu kişileri sırayla bekler
  - · Birden çok kural eşleşirse yüksek öncelik kazanır
- Unutmayın: Departman seçerseniz kural yalnız o departmana uygulanır. · En fazla 3 seviye onaylayıcı seçin. · Önemli kurala yüksek öncelik verin.
- Kapanış: Şimdi ilk onay kuralınızı kurun.

**Kullanıcılar ve yetkiler** (`egitim-23-kullanicilar`)

- Kullanıcılar ve yetkiler — Ekibinizi ve yetkilerini yönetin.
- 1. Kullanıcılar & Yetkiler sayfası ekibinizi listeler.
  - · Her kişinin rolü ve departmanı burada yazar
  - · Kişinin onay limiti ve yetki sayısı burada yazar
- 2. Yeni kişi için Kullanıcı Davet Et butonuna basın.
  - ✓ Davet formu açılır
- Unutmayın: Rolü Genel Müdür, Satınalmacı ya da Görüntüleyici seçin. · Ayrılan kişiyi Devre Dışı bağlantısıyla kapatın. · Onay limitini her kişi için ayrı belirleyin.
- Kapanış: Şimdi Kullanıcılar & Yetkiler sayfasını açın.

**Kullanıcı davet etme** (`egitim-24-kullanici-davet`)

- Kullanıcı davet etme — Ekibinize yeni bir kullanıcı ekleyin.
- 1. Kişinin adını ve e-postasını yazın.
- 2. Rolü seçip onay limitini yazın.
  - · Rol seçimi varsayılan yetkileri belirler
  - · Boş bırakırsanız limit sınırsız olur
- 3. Kullanıcıyı Davet Et butonuna basın.
  - ✓ Kullanıcı davet edildi
- Unutmayın: Rol seçince varsayılan yetkiler gelir. · Gerekirse yetkileri sonra özelleştirin. · Bütçe takibi için departmanı seçin.
- Kapanış: Şimdi ekibinizden birini davet edin.

**Departman ve bütçe** (`egitim-25-departmanlar`)

- Departman ve bütçe — Her departmana aylık bütçe tanımlayın.
- 1. Departman & Bütçe sayfası harcamaları departmana göre gösterir.
  - · Bu ayki harcama bütçeyle birlikte yazar
- 2. Yeni departmanın adını ve bütçesini yazın.
  - ✓ Departman eklendi
- Unutmayın: Bütçe girerseniz harcama bu tutarla izlenir. · Kullanıcıları bir departmana bağlayın. · Bütçe durumunu Bütçe Panosu'nda izleyin.
- Kapanış: Şimdi Departman & Bütçe sayfasını açın.

**Bütçe panosu** (`egitim-26-butce-panosu`)

- Bütçe panosu — Bütçe ve limitleri anlık izleyin.
- 1. Bütçe Panosu bu ayki toplam harcamayı gösterir.
  - · Bu ayki toplam harcama ilk kartta yazar
  - · Kredi kullanımı limitle birlikte yazar
- 2. Departmanların kalan bütçesini tabloda görün.
  - · Kalan bütçe ve kullanım oranı satırda yazar
- 3. Kullanıcı onay limitlerini de buradan izleyin.
  - · Kişinin limiti ve bu ayki siparişi yan yana yazar
- Unutmayın: Aşımı Durum sütununda kontrol edin. · Bütçeyi değiştirmek için Departmanları yönet'e tıklayın. · Onay bekleyen siparişler de harcamaya eklenir.
- Kapanış: Şimdi Bütçe Panosu sayfasını açın.

**Projeler ve şantiyeler** (`egitim-27-projeler`)

- Projeler ve şantiyeler — Harcamayı projeye göre takip edin.
- 1. Projeler / Şantiyeler sayfası proje harcamalarını özetler.
  - · Tüm projelerin harcaması burada toplanır
  - · Her projenin harcaması bütçesiyle birlikte yazar
- 2. Yeni projenin adını ve adresini yazın.
- Unutmayın: Siparişi verirken projeyi seçin. · Şantiye adresini teslimat adresi olarak yazın. · Proje bütçesini özet tablosunda izleyin.
- Kapanış: Şimdi Projeler / Şantiyeler sayfasını açın.

**Adres defteri** (`egitim-28-adres-defteri`)

- Adres defteri — Teslimat ve fatura adreslerinizi yönetin.
- 1. Adres Ekle formunda adres türünü seçin.
  - · Teslimat ya da fatura adresini seçin
- 2. Adres bilgilerini yazıp kaydedin.
  - ✓ Adres kaydedildi
- Unutmayın: Her adres türü için bir varsayılan adres seçin. · Varsayılan adresi Varsayılan yap ile değiştirin. · Adresin türünü Teslim ya da Fatura olarak seçin.
- Kapanış: Şimdi Adres Defteri sayfasını açın.

**Cari ekstre** (`egitim-29-cari-ekstre`)

- Cari ekstre — Borç, alacak ve bakiyenizi takip edin.
- 1. Cari Ekstre borçlarınızı vade aralığına göre gösterir.
  - · Borçlar vadesine göre gün aralıklarında toplanır
- 2. Tüm hareketleri tarih sırasıyla görün.
  - · Her satırda borç, alacak ve bakiye yazar
- 3. Tarih aralığı seçip Filtrele butonuna basın.
  - ✓ Seçilen dönem listelendi
- Unutmayın: Ödemelerinizi Alacak sütununda görün. · Vade tarihini her satırda kontrol edin. · Dönem seçip Filtrele ile listeleyin.
- Kapanış: Şimdi Cari Ekstre sayfasını açın.

**Faturalarım** (`egitim-30-faturalar`)

- Faturalarım — e-Faturalarınızı görün ve yazdırın.
- 1. Faturalarım sayfası tüm e-faturalarınızı listeler.
  - · Her faturanın siparişi ve durumu satırda yazar
- 2. Faturayı Yazdır ile çıktı alın.
  - ✓ Yazdırma görünümü açılır
- Unutmayın: Faturalarınız panele otomatik gelir. · Her faturanın sipariş numarasını satırda görün. · Çıktı için Yazdır düğmesine basın.
- Kapanış: Şimdi Faturalarım sayfasını açın.

**Satın alma analitiği** (`egitim-31-analitik`)

- Satın alma analitiği — Harcamanızı rakamlarla analiz edin.
- 1. Analitik sayfası son 12 ayın özetini gösterir.
  - · Son 12 ayın toplam harcaması burada yazar
  - · Kazandığınız toplam indirim burada yazar
- 2. Aylık trend ve kategori dağılımını inceleyin.
  - · Grafik son 6 ayın harcamasını gösterir
  - · Harcama kategorilere yüzdeyle ayrılır
- 3. En çok aldığınız ürünleri listede görün.
  - · Ürünler alınan adede göre sıralanır
- Unutmayın: Kazandığınız indirimi Toplam İndirim kartında görün. · Gelecek ayın bütçesini trende bakarak planlayın. · En çok aldığınız ürünleri listede görün.
- Kapanış: Şimdi Analitik sayfasını açın.

**İade talebi** (`egitim-32-iade-talebi`)

- İade talebi — İade sürecini panelden başlatın ve takip edin.
- 1. İade Taleplerim sayfası iadelerinizi listeler.
  - · Talepleri duruma göre süzün
  - · MTS ekibi talebinizi inceler
- 2. Yeni iade için Sipariş seç ve iade aç butonuna basın.
  - ✓ Sipariş seçim ekranı açılır
- Unutmayın: Yeni iade için Sipariş seç ve iade aç'a basın. · İade dört adımda tamamlanır. · İade bitince cari ekstrenizi kontrol edin.
- Kapanış: Şimdi İade Taleplerim sayfasını açın.

**Numune talebi** (`egitim-33-numune-talebi`)

- Numune talebi — Ürünü almadan önce ücretsiz deneyin.
- 1. Yeni Numune Talebi butonuna basın.
  - ✓ Numune formu açılır
- 2. Formda istediğiniz ürün kodlarını yazın.
  - ✓ Numune talebiniz iletildi
- Unutmayın: Numuneyi ücretsiz isteyin. · Birden çok ürünü virgülle ayırarak yazın. · Onaydan sonra numune 2 iş günü içinde gönderilir.
- Kapanış: Şimdi Numune Taleplerim sayfasını açın.

**AI ürün asistanı** (`egitim-34-ai-asistan`)

- AI ürün asistanı — İhtiyacınızı yazın, uygun ürünü asistan önersin.
- 1. AI Ürün Asistanı örnek sorularla başlar.
  - · Sorunuzu bu örneklere benzer yazın
- 2. Sorunuzu yazıp Gönder butonuna basın.
  - ✓ Asistan uygun ürünleri önerir
- Unutmayın: Sorunuza kişi sayısını ve alanı yazın. · En fazla 500 karakter yazın. · Sorunuzu Gönder düğmesiyle iletin.
- Kapanış: Şimdi asistana ilk sorunuzu sorun.

**Sadakat programı** (`egitim-35-sadakat`)

- Sadakat programı — Her siparişte puan kazanın, kademe atlayın.
- 1. Sadakat Programı puanınızı ve kademenizi gösterir.
  - · Puanınız ve kupon karşılığı burada yazar
  - · Platin kademesine 167 puan kaldı
- 2. Kademeler puanınız arttıkça açılır.
  - · Kademe Bronz'dan Platin'e yükselir
- Unutmayın: Puanlar sipariş teslim edilince bakiyenize eklenir. · 100 puanı 10 TL'lik kupona çevirin. · Kademe yükseldikçe ayrıcalığınız artar.
- Kapanış: Şimdi Sadakat Programı sayfasını açın.

**Kuponlarım** (`egitim-36-kuponlar`)

- Kuponlarım — Size özel kuponları kullanın.
- 1. Kuponlarım sayfası kullanılabilir kuponları listeler.
  - · Bu kupon %10 indirim sağlar
  - ✓ Kupon kodu kopyalandı
- 2. Kodu sepette Kupon Kodu alanına yapıştırın.
  - · Her kupon tek siparişte bir kez kullanılır
- Unutmayın: Son kullanım tarihini kupon kartında kontrol edin. · Kullanılan kuponlar ayrı listelenir. · Sadakat puanınızı kupona dönüştürün.
- Kapanış: Şimdi Kuponlarım sayfasını açın.

**Arkadaşını davet et** (`egitim-37-arkadasini-davet-et`)

- Arkadaşını davet et — Firma davet edin, ikiniz de kazanın.
- 1. Davet üç adımda tamamlanır.
  - · Davet ettiğiniz firma panele kayıt olur
  - · İlk siparişte iki firma da %5 indirim kuponu alır
- 2. Firmanın e-postasını yazıp gönderin.
  - ✓ Davet gönderildi
- Unutmayın: Firmanın e-posta adresini yazıp Davet Gönder'e basın. · İlk siparişte iki firma da indirim kuponu alır. · Davetleri Gönderilen Davetler listesinde izleyin.
- Kapanış: Şimdi bir firmayı davet edin.

**Kampanyalar** (`egitim-38-kampanyalar`)

- Kampanyalar — Güncel indirimleri ve paketleri görün.
- 1. Sürekli avantajlar koşul sağlanınca otomatik uygulanır.
  - · Adet arttıkça birim fiyat düşer
  - · Havale/EFT ile ödemede %2 indirim alırsınız
  - · ₺3.500 ve üzeri siparişte kargo ücretsizdir
- Unutmayın: Bu avantajlar için kupon kodu gerekmez. · Havale/EFT ile ödeyip %2 indirim alın. · ₺3.500 ve üzeri siparişte kargo ödemezsiniz.
- Kapanış: Şimdi Kampanyalar sayfasını açın.

**Bildirimler** (`egitim-39-bildirimler`)

- Bildirimler — Sipariş ve onay hareketlerinden haberdar olun.
- 1. Bildirimler sayfası tüm hareketleri listeler.
  - · Durum değişince bildirim gelir
- 2. Bildirimleri türe göre süzün.
  - · Durum güncellemesi ya da yeni sipariş gibi türleri seçin
  - ✓ Tüm bildirimler okundu olarak işaretlendi
- Unutmayın: Yeni bildirimleri üstteki zil simgesinde görün. · E-posta tercihlerinizi Ayarlar sayfasında seçin. · Onay bildirimini Aç bağlantısıyla açın.
- Kapanış: Şimdi Bildirimler sayfasını açın.

**Destek talebi** (`egitim-40-destek-talebi`)

- Destek talebi — Sorununuzu yazın, destek ekibi dönsün.
- 1. Destek Taleplerim sayfasında yeni talep oluşturun.
  - ✓ Talep formu açılır
- 2. Konuyu yazın, önceliği seçin.
  - · Destek ekibi önceliğe göre dönüş yapar
- 3. Açıklamayı yazıp Talebi Oluştur butonuna basın.
  - ✓ Destek talebiniz oluşturuldu
- Unutmayın: Sorunu açıklamada ayrıntılı anlatın. · Talebin durumunu Destek Taleplerim listesinde izleyin. · Acil konularda kurumsal hattı arayın.
- Kapanış: Şimdi Destek Taleplerim sayfasını açın.

**Hesap ayarları** (`egitim-41-hesap-ayarlari`)

- Hesap ayarları — Profilinizi, şifrenizi ve bildirimlerinizi yönetin.
- 1. Profil bölümünde bilgilerinizi güncelleyin.
  - · Değişikliği Kaydet ile saklayın
- 2. Şifrenizi güvenlik bölümünden değiştirin.
  - · Şifrede en az 8 karakter, 1 harf ve 1 rakam kullanın
  - ✓ Şifre güncellendi
- 3. Hangi bildirimleri alacağınızı seçin.
  - · İşaretli konular için e-posta gelir
  - ✓ Tercihleriniz kaydedildi
- Unutmayın: Şifrenizi düzenli olarak değiştirin. · İstemediğiniz bildirim e-postalarının işaretini kaldırın. · KDV muafiyeti talebini bu sayfadan gönderin.
- Kapanış: Şimdi Ayarlar sayfasını açın.

**Yardım merkezi** (`egitim-42-yardim-merkezi`)

- Yardım merkezi — Sık sorulan soruların cevabını bulun.
- 1. Yardım Merkezi konuları başlıklara ayırır.
  - · Sipariş ve fatura soruları bu başlıkta toplanır
  - · Kargo takibi ve teslimat süreleri burada anlatılır
- 2. Aradığınız konuyu arama kutusuna yazın.
- Unutmayın: Sorunuzu önce arama kutusuna yazın. · Cevap bulamazsanız destek talebi açın. · Müşteri hizmetlerini 0543 683 57 65 numarasından arayın.
- Kapanış: Şimdi Yardım Merkezi sayfasını açın.

## Tanıtım videoları (20 video · toplam 9:02)

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
| 10 | Projeler ve şantiyeler | 0:23 | `tanitim/tanitim-10-projeler` |
| 11 | Ekip ve yetkiler | 0:26 | `tanitim/tanitim-11-ekip-ve-yetkiler` |
| 12 | Çok alın, az ödeyin | 0:23 | `tanitim/tanitim-12-kademeli-iskonto` |
| 13 | Numune ve iade | 0:25 | `tanitim/tanitim-13-numune-ve-iade` |
| 14 | Sık aldıklarınız bir tık uzakta | 0:21 | `tanitim/tanitim-14-listeler-favoriler` |
| 15 | Davet edin, birlikte kazanın | 0:25 | `tanitim/tanitim-15-arkadasini-davet-et` |
| 16 | Satın almayı panele taşıyın | 0:24 | `tanitim/tanitim-16-once-sonra` |
| 17 | Neden MTS Hijyen B2B? | 0:26 | `tanitim/tanitim-17-neden-mts-hijyen` |
| 18 | Net koşullar, şeffaf fiyat | 0:20 | `tanitim/tanitim-18-sozlesme-ve-vade` |
| 19 | Destek ekibimiz yanınızda | 0:25 | `tanitim/tanitim-19-destek` |

### Ekrandaki metinler

Tanıtım 01–04 (P1–P4) ve dikey kesimleri: `07-tanitim-serisi.md`. Hype promo: `06-arastirma-ve-hype-promo.md`.

**Siparişiniz nerede?** (`tanitim-05-siparis-takibi`)

- Siparişiniz şu an nerede?
- Her sipariş adım adım ilerler. Taslak → Şirket onayı → MTS onayı → Hazırlanıyor → Sevkiyatta → Teslim edildi
- Siparişin durumunu anlık görün.
  - · Koyu adım siparişin yerini gösterir
  - · Sıradaki adım burada yazar
- Her değişiklikte bildirim alın.
  - · Durum değişince bildirim gelir
- Kapanış: Siparişinizi her an izleyin.

**Ürün koduyla hızlı sipariş** (`tanitim-06-hizli-siparis`)

- Onlarca ürünü tek tek mi arıyorsunuz?
- Ürün kodlarını yazın, tek tıkla ekleyin.
  - ✓ Tüm satırlar sepete eklendi
- Siparişi üç adımda hazırlayın. Kodu yazın → Doğrulayın → Sepete ekleyin
- Uzun listeyi tek seferde ekleyin.: 100 satır — Listenizi CSV olarak yapıştırın.
- Kapanış: Kodu yazın, zaman kazanın.

**Toplu alımda özel fiyat** (`tanitim-07-toplu-alim-teklifi`)

- Büyük alımda özel fiyat mı istiyorsunuz?
- Ürün ve miktarı yazın, teklif isteyin.
  - ✓ Teklif talebiniz iletildi
- Teklif hazır olunca panelde görün.
  - · Teklif Hazır yazınca teklifi açın
- Kapanış: Büyük alımda teklif isteyin.

**Harcamanızı rakamlarla görün** (`tanitim-08-analitik`)

- Satın almanızın yıllık özetini görün.: 12 ay
- Aylık harcamanızı grafikte izleyin.
  - · Grafik son 6 ayı gösterir
- Hangi kategoriye ne harcadığınızı görün.
  - · Kategoriler harcamaya göre sıralanır
- Kapanış: Satın almayı veriyle planlayın.

**AI ürün asistanı** (`tanitim-09-ai-asistan`)

- Hangi ürünü seçeceğinizi bilmiyor musunuz?
- İhtiyacınızı yazın, asistan önersin.
  - ✓ Asistan ürün önerilerini hazırlar
- Sorudan sepete üç adımda geçin. Sorun → Öneri alın → Sepete ekleyin
- Kapanış: Doğru ürünü ilk seferde seçin.

**Projeler ve şantiyeler** (`tanitim-10-projeler`)

- Hangi proje ne kadar harcadı?
- Her projenin bütçe kullanımını görün.
  - · Her satır harcamayı ve bütçeyi gösterir
- Siparişleri projeye göre süzün.
  - · Listeden bir proje seçin
  - · Proje adı numaranın altında yazar
- Kapanış: Her projeyi ayrı izleyin.

**Ekip ve yetkiler** (`tanitim-11-ekip-ve-yetkiler`)

- Ekibinizde kim, neyi sipariş edebilir?
- Her kişiye rol ve onay limiti verin.
  - · Rol, kişinin yetkilerini belirler
  - · Limit boş kalırsa sınırsız olur
- Yeni kullanıcıyı tek formla davet edin.
  - ✓ Kullanıcı davet edildi
- Kapanış: Yetkiyi ekibinize göre ayarlayın.

**Çok alın, az ödeyin** (`tanitim-12-kademeli-iskonto`)

- Adet arttıkça birim fiyat düşer. (1 koli, 5+ koli, 30+ koli, 40+ koli)
- FIRSAT tablosu indirimi gösterir.
  - · İndirim 5 koliden itibaren başlar
- Kupon gerekmez, indirim otomatik uygulanır.
  - · Her kademeli üründe geçerlidir
- Kapanış: Miktarı artırın, birim fiyatı düşürün.

**Numune ve iade** (`tanitim-13-numune-ve-iade`)

- Ürünü almadan önce denemek ister misiniz?
- Numune talebini formla gönderin.
  - ✓ Talebiniz alındı
- İade adım adım ilerler. Talep alındı → Onaylandı → Depoya ulaştı → İade tamamlandı
- Kapanış: Deneyin, gönül rahatlığıyla alın.

**Sık aldıklarınız bir tık uzakta** (`tanitim-14-listeler-favoriler`)

- Her ay aynı ürünleri mi arıyorsunuz?
- Favorilerden tek tıkla sepete ekleyin.
  - ✓ Ürün sepete eklendi
- Tüm listeyi bir kerede sepete ekleyin.
  - ✓ 5 ürün sepete eklendi
- Kapanış: Aynı ürünleri tekrar aramayın.

**Davet edin, birlikte kazanın** (`tanitim-15-arkadasini-davet-et`)

- İş ortağınızı davet edin. — İlk siparişte iki firma da %5 indirim kazanır.
- Üç adımda kazanın. Davet gönderin → Firma kayıt olsun → İkiniz de kazanın
- E-postayı yazın, daveti gönderin.
  - ✓ Davet gönderildi
- Kapanış: Davet gönderin, indirimi paylaşın.

**Satın almayı panele taşıyın** (`tanitim-16-once-sonra`)

- Siparişi hâlâ telefonla mı veriyorsunuz?
- Panelle satın alma kolaylaşır. Eskiden: Telefonla sipariş, Kaybolan e-postalar, Belirsiz teslimat, Elle onay / MTS Hijyen B2B ile: Panelden sipariş, Her şey kayıtlı, Anlık durum takibi, Kurala bağlı onay zinciri
- Her adımı tek panelde izleyin. Sipariş → Onay → Teslimat → Fatura
- Kapanış: İlk siparişinizi panelden verin.

**Neden MTS Hijyen B2B?** (`tanitim-17-neden-mts-hijyen`)

- Bizi tercih eden kurumlar: 12.000 + — Temizlik ve kâğıdı tek yerden alın.
- Neden MTS Hijyen B2B?: Firmanıza özel fiyat ve kademeli indirim alın · Çok kademeli onay akışı kurun · 14:00'a kadar verilen sipariş aynı gün kargolanır · Düzenli siparişleri otomatik oluşturun
- Hesabınızı tek ekranda izleyin.
  - · Harcamayı, bakiyeyi ve limiti görün
  - · Bekleyen onayları buradan açın
- Kapanış: Tedariğinizi tek panelden yönetin.

**Net koşullar, şeffaf fiyat** (`tanitim-18-sozlesme-ve-vade`)

- Peşin ödeyin, ek indirim kazanın.: 2 — Havale/EFT ile ödenen siparişlerde geçerlidir.
- Anlaşma koşullarınızı her an görün.
  - · Kalan limitinizi buradan izleyin
  - · Vade ve onay eşiği burada yazar
- Kapanış: Koşullarınızı panelden izleyin.

**Destek ekibimiz yanınızda** (`tanitim-19-destek`)

- Sorunuz mu var?
- Cevabı önce Yardım Merkezinde arayın.
  - · Sorular konulara göre ayrılır
- Bulamazsanız destek talebi açın.
  - ✓ Destek talebiniz oluşturuldu
- Kapanış: Sorunuzu destek ekibine iletin.

## 2026-10-09 serisi

Dosyalar `videolar/2026-10-09/egitim/` ve `videolar/2026-10-09/tanitim/` altında; kapak görselleri `kapaklar/` klasöründe. Plan: `09-seri-2026-10-09.md`.

### Eğitim videoları (33 video · toplam 21:26)

| No | Video | Süre | Dosya |
|---|---|---|---|
| 43 | Panelde her şey nerede? | 0:40 | `2026-10-09/egitim/egitim-43-menu-haritasi` |
| 44 | Paneli telefondan kullanın | 0:42 | `2026-10-09/egitim/egitim-44-telefondan-panel` |
| 45 | İlk siparişinizi verin | 0:54 | `2026-10-09/egitim/egitim-45-ilk-siparis` |
| 46 | Önceden aldıklarınızı hızlı bulun | 0:39 | `2026-10-09/egitim/egitim-46-onceden-aldiklarim` |
| 47 | Aynı siparişi tekrar vermenin 3 yolu | 0:40 | `2026-10-09/egitim/egitim-47-tekrar-siparis` |
| 48 | Hazır paketlerle tasarruf edin | 0:38 | `2026-10-09/egitim/egitim-48-paketler` |
| 49 | Ürünleri karşılaştırın | 0:39 | `2026-10-09/egitim/egitim-49-urun-karsilastirma` |
| 50 | Ürün kartını doğru okuyun | 0:32 | `2026-10-09/egitim/egitim-50-urun-karti` |
| 51 | Stokta olmayan ürün için haber alın | 0:32 | `2026-10-09/egitim/egitim-51-stok-bildirimi` |
| 52 | Doğru ürünü seçin: teknik özellikler | 0:37 | `2026-10-09/egitim/egitim-52-teknik-ozellikler` |
| 53 | Kargonuz nerede? | 0:28 | `2026-10-09/egitim/egitim-53-kargo-takibi` |
| 54 | Ürünleri değerlendirin, puan kazanın | 0:38 | `2026-10-09/egitim/egitim-54-urun-degerlendirme` |
| 55 | Hasarlı ürün için iade | 0:43 | `2026-10-09/egitim/egitim-55-iade-talebi` |
| 56 | Siparişiniz reddedildiyse | 0:27 | `2026-10-09/egitim/egitim-56-reddedilen-siparis` |
| 57 | Sipariş belgesini yazdırın | 0:38 | `2026-10-09/egitim/egitim-57-siparis-belgesi` |
| 58 | Havale yaptım, sipariş neden ilerlemiyor? | 0:28 | `2026-10-09/egitim/egitim-58-havale-odeme` |
| 59 | Siparişimi iptal edebilir miyim? | 0:32 | `2026-10-09/egitim/egitim-59-siparis-iptal` |
| 60 | Teklifiniz hazır: detayı okuyun | 0:40 | `2026-10-09/egitim/egitim-60-teklif-detayi` |
| 61 | Fiyat teklifi mi, toplu alım mı? | 0:34 | `2026-10-09/egitim/egitim-61-teklif-turleri` |
| 62 | Hesabı 4 adımda kurun | 0:52 | `2026-10-09/egitim/egitim-62-hesap-kurulumu` |
| 63 | Roller ve yetkiler | 0:44 | `2026-10-09/egitim/egitim-63-roller-yetkiler` |
| 64 | Bir siparişin onay yolculuğu | 0:40 | `2026-10-09/egitim/egitim-64-onay-yolculugu` |
| 65 | Telefondan onay verin | 0:36 | `2026-10-09/egitim/egitim-65-telefondan-onay` |
| 66 | Rol rehberi: satın alma sorumlusu | 0:48 | `2026-10-09/egitim/egitim-66-rol-satin-alma` |
| 67 | Rol rehberi: yönetici | 0:47 | `2026-10-09/egitim/egitim-67-rol-yonetici` |
| 68 | Rol rehberi: muhasebe | 0:46 | `2026-10-09/egitim/egitim-68-rol-muhasebe` |
| 69 | Rol rehberi: şube ve depo sorumlusu | 0:44 | `2026-10-09/egitim/egitim-69-rol-sube` |
| 70 | Puanınızı kupona dönüştürün | 0:41 | `2026-10-09/egitim/egitim-70-puan-kupon` |
| 71 | Kupon kodu gerektirmeyen avantajlar | 0:27 | `2026-10-09/egitim/egitim-71-avantajlar` |
| 72 | Bildirim tercihleri | 0:32 | `2026-10-09/egitim/egitim-72-bildirim-tercihleri` |
| 73 | Mini test: sipariş | 0:45 | `2026-10-09/egitim/egitim-73-test-siparis` |
| 74 | Mini test: ödeme ve indirimler | 0:45 | `2026-10-09/egitim/egitim-74-test-odeme` |
| 75 | Mini test: onay ve bütçe | 0:45 | `2026-10-09/egitim/egitim-75-test-onay` |

#### Ekrandaki metinler

**Panelde her şey nerede?** (`egitim-43-menu-haritasi`)

- Aradığınız sayfayı bulamıyor musunuz? — Sol menü ve hesap menüsü yolu gösterir.
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
- Özet: Sipariş ve fatura sayfalarını sol menüde bulun. · Hesap menüsünü sağ üstten açın. · Ürünleri kategori ve filtrelerle daraltın. — Sıradaki: Paneli telefondan kullanın

**Paneli telefondan kullanın** (`egitim-44-telefondan-panel`)

- Zeynep (Şube sorumlusu): Bilgisayardan uzaktayken siparişleri göremiyorum.
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
- Zeynep (Şube sorumlusu): Artık siparişleri telefondan izliyorum.
- Özet: Özet ekranında hesabınızı kontrol edin. · Özet düğmesiyle bölüm listesini açın. · Siparişleri Sevkiyatta filtresiyle süzün. — Sıradaki: İlk siparişinizi verin

**İlk siparişinizi verin** (`egitim-45-ilk-siparis`)

- Deniz (İdari işler sorumlusu): İlk siparişi nereden vereceğimi bilmiyorum.
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
- Deniz (İdari işler sorumlusu): Artık siparişi verip durumunu izliyorum.
- Özet: Ürünü arama kutusundan bulun. · Kademeli indirimi kontrol edip sepete ekleyin. · Siparişin durumunu detayda izleyin. — Sıradaki: Önceden aldıklarınızı hızlı bulun

**Önceden aldıklarınızı hızlı bulun** (`egitim-46-onceden-aldiklarim`)

- Selin (Satın alma sorumlusu): Aldığım ürünü her seferinde baştan arıyorum.
- 1. Katalogda Sadece önceden aldıklarım filtresini açın.
  - · Bu filtre açıkken yalnız aldığınız ürünler görünür
  - · Aldığınız ürünlerin sayısı burada yazar
- 2. Adedi seçip ürünü listeden sepete ekleyin.
  - · Adedi bu kutuda ayarlayın
  - ✓ Ürün sepete eklendi
- 3. Eski siparişi açıp Yeniden Sipariş Ver düğmesine basın.
  - · Siparişteki ürünler ve adetler burada yazar
  - ✓ Siparişin ürünleri sepete eklendi
- Selin (Satın alma sorumlusu): Artık önceden aldıklarımı tek filtreyle buluyorum.
- Özet: Sadece önceden aldıklarım filtresini açın. · Ürünü listeden sepete ekleyin. · Eski siparişte Yeniden Sipariş Ver düğmesine basın. — Sıradaki: Aynı siparişi tekrar vermenin 3 yolu

**Aynı siparişi tekrar vermenin 3 yolu** (`egitim-47-tekrar-siparis`)

- Burak (Tesis sorumlusu): Her ay aynı siparişi satır satır giriyorum.
- 1. Eski siparişte Yeniden Sipariş Ver düğmesine basın.
  - · Siparişi şablon olarak da saklayabilirsiniz
  - ✓ Siparişin ürünleri sepete eklendi
- 2. Kayıtlı listeyi Sepete Ekle ile tek seferde ekleyin.
  - · Listedeki 5 ürün birlikte eklenir
  - ✓ 5 ürün sepete eklendi
- 3. Düzenli aldığınız ürünü aboneliğe çevirin.
  - · Ürün belirli aralıkla otomatik sipariş edilir
  - ✓ Ürün aboneliğe çevrildi
- Burak (Tesis sorumlusu): Artık aynı siparişi tek tıkla veriyorum.
- Özet: Eski siparişte Yeniden Sipariş Ver düğmesine basın. · Kayıtlı listeyi Sepete Ekle ile ekleyin. · Düzenli aldığınız ürünü aboneliğe çevirin. — Sıradaki: Hazır paketlerle tasarruf edin

**Hazır paketlerle tasarruf edin** (`egitim-48-paketler`)

- Aylin (Ofis yöneticisi): Her ay ürünleri sepete tek tek ekliyorum.
- 1. Paketler sayfasında işletmenize uygun paketi seçin.
  - · Paketin kime uygun olduğu adının altında yazar
  - · Paket fiyatı, eski fiyat ve tasarruf altta yazar
- 2. Paket sayfasında içeriği ve fiyatı kontrol edin.
  - · Her satırın başında ürünün adedi yazar
  - · ₺4.861,80 yerine ₺4.472,86 ödersiniz
- 3. Paketi tek tıkla sepete ekleyin.
  - · Aynı paket her ay otomatik sipariş edilir
  - ✓ Paketteki 4 ürün sepete eklendi
- Aylin (Ofis yöneticisi): Artık paketi tek tıkla ekliyorum.
- Özet: Paket kartında tasarruf tutarını okuyun. · Tüm Paketi Sepete Ekle düğmesine basın. · Aylık alım için Aboneliğe Çevir düğmesini kullanın. — Sıradaki: Ürünleri karşılaştırın

**Ürünleri karşılaştırın** (`egitim-49-urun-karsilastirma`)

- Emre (Depo sorumlusu): Havluları kıyaslamak için sekmeler arasında gidip geliyorum.
- 1. Ürün kartındaki karşılaştır simgesine dokunun. (telefon)
  - · Bu simge ürünü karşılaştırma listesine ekler
  - ✓ Ürün karşılaştırmaya eklendi
- 2. Fiyatı ve stoğu yan yana karşılaştırın.
  - · KDV hariç fiyatlar aynı satırda yazar
  - · Stok durumu da yan yana görünür
- 3. Farkı görüp seçtiğiniz ürünü sepete ekleyin.
  - · Ürünler farklı dispenserlere uyar
  - ✓ Ürün sepete eklendi
- Emre (Depo sorumlusu): Artık iki ürünü yan yana kıyaslıyorum.
- Özet: Kartta karşılaştır simgesine basın. · Fiyatı ve stoğu yan yana kıyaslayın. · Seçtiğiniz ürünü Sepete Ekle ile ekleyin. — Sıradaki: Ürün kartını doğru okuyun

**Ürün kartını doğru okuyun** (`egitim-50-urun-karti`)

- Bu fiyata KDV dahil mi? — Ürün kartı bu sorunun cevabını verir.
- 1. Liste fiyatı KDV hariç yazılır.
  - · KDV dahil fiyat hemen altında yazar.
- 2. Fiyat bir koli içindir.
  - · Bir kolide 6 rulo bulunur.
  - · Her koli 4 sadakat puanı kazandırır.
- 3. Çok alırsanız birim fiyat düşer.
  - · İndirim 5 koliden %5, 30 koliden %8, 40 koliden %10 olur.
- 4. Sepete eklemeden önce stoğu kontrol edin.
  - · Stoktaki ürünler 1 iş günü içinde kargoya verilir.
- Özet: KDV dahil fiyatı liste fiyatının altında okuyun. · Kademe tablosunda indirim oranına bakın. · Sepete eklemeden önce stoğu kontrol edin. — Sıradaki: Stokta olmayan ürün için haber alın

**Stokta olmayan ürün için haber alın** (`egitim-51-stok-bildirimi`)

- Murat (Satın alma sorumlusu): Tuvalet kağıdı yine stokta yok.
- 1. Ürün adının üstünde Stokta yok yazar.
  - · Bu ürün şu an sepete eklenemez.
- 2. Stok Gelince Haber Ver düğmesine basın.
  - · Sepete Ekle düğmesinin yerinde bu uyarı durur.
  - ✓ Ürün gelince size haber verilir
- 3. Ürünü listenize de ekleyin.
  - ✓ Ürün listenize eklenir
- Murat (Satın alma sorumlusu): Stok gelince haber alıyorum.
- Özet: Ürün adının üstünde Stokta yok etiketine bakın. · Stok Gelince Haber Ver düğmesine basın. · Ürünü Listeye Ekle ile kaydedin. — Sıradaki: Doğru ürünü seçin: teknik özellikler

**Doğru ürünü seçin: teknik özellikler** (`egitim-52-teknik-ozellikler`)

- Nazlı (Temizlik sorumlusu): Aldığım havlu dispensere uymadı.
- 1. Teknik Özellikler bölümünü okuyun.
  - · Havlunun uyduğu dispenser burada yazar.
  - · Gramajı ve kat sayısını karşılaştırın.
- 2. Numune Taleplerim sayfasında yeni talep açın.
  - · Talebinizin durumunu bu listede izleyin.
  - ✓ Numune formu açılır
- 3. Ürün kodunu yazıp ücretsiz numune isteyin.
  - ✓ Numune talebiniz iletildi
- Nazlı (Temizlik sorumlusu): Artık önce teknik özellikleri okuyorum.
- Özet: Dispenser uyumunu Teknik Özellikler bölümünde kontrol edin. · Gramajı ve kat sayısını karşılaştırın. · Emin değilseniz ücretsiz numune isteyin. — Sıradaki: Kargonuz nerede?

**Kargonuz nerede?** (`egitim-53-kargo-takibi`)

- Kargo takip numarasını nereden bulurum? — Numara sipariş detayında yazar.
- 1. Sevkiyatta filtresini seçin.
  - ✓ Kargodaki siparişler listelenir
- 2. Siparişi açıp sıradaki adımı okuyun.
  - · Siparişiniz kargoya verildi.
- 3. Takip et ile kargonuzu izleyin.
  - · Kargo firması, durum ve takip numarası burada yazar.
  - ✓ Kargo firmasının takip sayfası açılır
- Özet: Siparişlerim sayfasında Sevkiyatta filtresini seçin. · Siparişi açıp sıradaki adımı okuyun. · Kargo bölümünde Takip et bağlantısına basın. — Sıradaki: Ürünleri değerlendirin, puan kazanın

**Ürünleri değerlendirin, puan kazanın** (`egitim-54-urun-degerlendirme`)

- Elif (Kalite sorumlusu): Puanlarım çok yavaş birikiyor.
- 1. Teslim edilen siparişin detayını açın.
  - · Ürünleri aynı sayfanın altında değerlendirin.
- 2. Ürünleri Değerlendir bölümünde yıldız verip yorum yazın.
  - · Ürüne 1 ile 5 arasında yıldız verin.
- 3. Yorumu Gönder düğmesine basın.
  - ✓ Yorumunuz gönderildi
- 4. Her ürün yorumu 5 puan kazandırır.
  - · Kural teslim edilen her ürün için geçerlidir.
- Elif (Kalite sorumlusu): Artık yorum yazıp puan kazanıyorum.
- Özet: Teslim edilen siparişte ürüne yıldız verin. · Kısa bir yorum yazıp Yorumu Gönder düğmesine basın. · Puan kuralını Sadakat Programı sayfasında okuyun. — Sıradaki: Hasarlı ürün için iade

**Hasarlı ürün için iade** (`egitim-55-iade-talebi`)

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
- Kemal (Depo sorumlusu): Artık iadeyi panelden açıp izliyorum.
- Özet: Siparişte İade Talebi Aç düğmesine basın. · İade adedini ve sebebi yazın. · Durumu İade Taleplerim sayfasında izleyin. — Sıradaki: Siparişiniz reddedildiyse

**Siparişiniz reddedildiyse** (`egitim-56-reddedilen-siparis`)

- Siparişiniz neden reddedildi? — Gerekçe sipariş detayında yazar.
- 1. Sipariş durumunda Reddedildi yazar.
  - · Sipariş onay zincirinde durdu.
- 2. Onay Zinciri bölümünde gerekçeyi okuyun.
  - · Siparişi kimin reddettiğini görürsünüz.
  - · Ret gerekçesi onay notunda yazar.
- 3. Gerekirse Yeniden Sipariş Ver düğmesine basın.
  - ✓ Aynı ürünlerle yeni sipariş hazırlanır
- Özet: Sipariş durumunda Reddedildi etiketine bakın. · Onay Zinciri bölümünde gerekçeyi okuyun. · Yeniden Sipariş Ver düğmesine basın. — Sıradaki: Sipariş belgesini yazdırın

**Sipariş belgesini yazdırın** (`egitim-57-siparis-belgesi`)

- Derya (Muhasebe sorumlusu): Her siparişin çıktısını dosyaya eklemem gerekiyor.
- 1. Siparişlerim sayfasında siparişin detayını açın.
  - ✓ Sipariş detayı açılır
- 2. Sipariş detayında Yazdır / PDF düğmesine basın.
  - ✓ Sipariş belgesi açılır
- 3. Belgede PO numarasını ve toplamı kontrol edin.
  - · Satın alma numaranız müşteri bilgisinin altında yazar.
  - · İndirim, kargo ve KDV toplamın üstünde ayrı satırlarda yazar.
- 4. Yazdır / PDF olarak Kaydet düğmesine basın.
  - ✓ Yazdırma penceresi açılır
- Derya (Muhasebe sorumlusu): Artık belgeyi sipariş detayından yazdırıyorum.
- Özet: Sipariş detayında Yazdır / PDF düğmesine basın. · Belgede PO numarasını ve toplamı kontrol edin. · Yazdır / PDF olarak Kaydet ile çıktı alın. — Sıradaki: Havale yaptım, sipariş neden ilerlemiyor?

**Havale yaptım, sipariş neden ilerlemiyor?** (`egitim-58-havale-odeme`)

- Havale yaptınız, sipariş hâlâ Ödeme Bekleniyor mu? — Cevap sipariş detayında yazar.
- 1. Sipariş detayında Ödeme Bekleniyor durumuna bakın.
  - · Ödeme hesaba geçince sipariş hazırlığa alınır.
- 2. Havale açıklamasına sipariş numarasını yazın.
  - · Ödemeniz bu numarayla siparişe bağlanır.
- 3. Numarayı Kopyala düğmesiyle alın. (telefon)
  - · Bu numarayı havale açıklamasına yapıştırın.
  - ✓ Sipariş numarası kopyalandı
- Özet: Sipariş detayında Ödeme Bekleniyor durumuna bakın. · Sipariş numarasını Kopyala düğmesiyle alın. · Numarayı havale açıklamasına yazın. — Sıradaki: Siparişimi iptal edebilir miyim?

**Siparişimi iptal edebilir miyim?** (`egitim-59-siparis-iptal`)

- Sipariş ne zaman iptal edilebilir? — Cevap siparişin durumuna bağlıdır.
- 1. İşleme alınmamış siparişte Siparişi İptal Et düğmesine basın.
  - · Bu durumda sipariş henüz işleme alınmadı.
  - ✓ Sipariş iptal edilir
- 2. Hazırlanan siparişte iptal düğmesi görünmez.
  - · Bu aşamada iptal için destek talebi gerekir.
- 3. Hazırlık başladıysa destek talebi açın.
  - ✓ Destek talebiniz oluşturuldu
- Özet: Sipariş detayında durumu kontrol edin. · İşleme alınmamış siparişte Siparişi İptal Et düğmesine basın. · Hazırlık başladıysa destek talebi açın. — Sıradaki: Teklifiniz hazır: detayı okuyun

**Teklifiniz hazır: detayı okuyun** (`egitim-60-teklif-detayi`)

- Ozan (Satın alma uzmanı): Teklif geldi ama neye bakacağımı bilmiyorum.
- 1. Teklif Hazır yazan teklifi açın.
  - · Fiyatı hazırlanan teklifler bu durumla görünür.
  - ✓ Teklif detayı açılır
- 2. Admin notunu ve birim fiyatları okuyun.
  - · Fiyatla ilgili açıklama bu notta yazar.
  - · Her kalemin birim fiyatı kendi satırında yazar.
- 3. Son tarihten önce Teklifi Kabul Et düğmesine basın.
  - · Teklif bu tarihe kadar geçerlidir.
  - ✓ Teklif siparişe çevrilir
- Ozan (Satın alma uzmanı): Artık kabul etmeden önce notu ve son tarihi okuyorum.
- Özet: Teklif Hazır yazan teklifi açın. · Admin notunu ve birim fiyatları okuyun. · Son tarihten önce Teklifi Kabul Et düğmesine basın. — Sıradaki: Fiyat teklifi mi, toplu alım mı?

**Fiyat teklifi mi, toplu alım mı?** (`egitim-61-teklif-turleri`)

- Özel fiyat için hangi formu doldurmalısınız? — Seçim adede ve ihtiyaca bağlıdır.
- 1. Fiyat Tekliflerim sayfasında Yeni Teklif Talebi düğmesine basın.
  - · Gönderdiğiniz talep fiyatlanana kadar böyle görünür.
  - ✓ Yeni Fiyat Teklifi formu açılır
- 2. Yeni Fiyat Teklifi formuna ürünü yazın.
  - ✓ Fiyatı admin ekibi hazırlar
- 3. 500+ adet için Teklif İste formunu doldurun.
  - · Talep Detayı alanına ürünü, adedi ve periyodu yazın.
  - ✓ Talebiniz satış ekibine iletilir
- Özet: Fiyat Tekliflerim'de Yeni Teklif Talebi düğmesine basın. · Formda ürünü yazıp Teklif Oluştur düğmesine basın. · 500+ adet için Teklif İste formunu doldurun. — Sıradaki: Hesabı 4 adımda kurun

**Hesabı 4 adımda kurun** (`egitim-62-hesap-kurulumu`)

- Nihan (İdari işler müdürü): Ekip büyüdü, siparişlerde onay sırası karıştı.
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
- Nihan (İdari işler müdürü): Artık büyük siparişleri onay kuralıyla yönetiyorum.
- Özet: Departman ekleyip kullanıcıları davet edin. · Tutar sınırıyla onay kuralı oluşturun. · Otomatik onay eşiğini kontrol edin. — Sıradaki: Roller ve yetkiler

**Roller ve yetkiler** (`egitim-63-roller-yetkiler`)

- Okan (İşletme müdürü): Ekipte kimin ne yapacağını ayarlayamıyorum.
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
- Okan (İşletme müdürü): Artık herkese rolüne göre yetki veriyorum.
- Özet: Düzenle sayfasında rolü ve onay limitini belirleyin. · Hazır şablonla yetkileri tek seferde seçin. · Detaylı Yetkiler listesinde ekstra yetki açın. — Sıradaki: Bir siparişin onay yolculuğu

**Bir siparişin onay yolculuğu** (`egitim-64-onay-yolculugu`)

- Tuğba (Satın alma uzmanı): Siparişimin kimde beklediğini göremiyorum.
- 1. Onay kuralı siparişin kime gideceğini belirler.
  - · Kural tutar sınırını ve onaylayacak kişiyi gösterir.
- 2. Onaya düşen sipariş Onay Bekleniyor durumuna geçer.
  - · Sipariş bu 9 durumdan sırayla geçer.
  - · Onay zinciri siparişin kimde beklediğini gösterir.
- 3. Yeni onay talebi bildirim olarak gelir.
  - · Zil simgesi bekleyen onayı size haber verir.
- 4. Onaylayıcı siparişi Onaylarım sayfasında karara bağlar.
  - · Siparişi onaylayabilir, revizeye yollayabilir ya da reddedebilirsiniz.
  - ✓ Sipariş onaylandı
- Tuğba (Satın alma uzmanı): Artık siparişin hangi durumda olduğunu görüyorum.
- Özet: Onay zincirini Onay Kuralları sayfasında kontrol edin. · Siparişin durumunu detay sayfasında izleyin. · Bekleyen siparişi Onaylarım sayfasında onaylayın. — Sıradaki: Telefondan onay verin

**Telefondan onay verin** (`egitim-65-telefondan-onay`)

- Kerem (Operasyon müdürü): Onay vermek için masama dönmem gerekiyor.
- 1. Yeni onay talebi bildirim olarak gelir. (telefon)
  - · Bildirim hangi departmanın onay beklediğini söyler.
- 2. Özet ekranında Onay bekleyen kartına dokunun. (telefon)
  - · Bekleyen onaylara bu karttan geçersiniz.
  - ✓ Onaylarım sayfası açılır
- 3. Kartı okuyup Onayla düğmesine dokunun. (telefon)
  - · Kartta tutar, açan kişi ve ürünler yazar.
  - ✓ Sipariş onaylandı
- Kerem (Operasyon müdürü): Artık onayları telefondan veriyorum.
- Özet: Özet ekranında Onay bekleyen kartına dokunun. · Kartta tutarı ve ürünleri kontrol edin. · Onayla düğmesine dokunun. — Sıradaki: Rol rehberi: satın alma sorumlusu

**Rol rehberi: satın alma sorumlusu** (`egitim-66-rol-satin-alma`)

- Elif (Satın alma sorumlusu): Her hafta aynı ürünleri tek tek sipariş ediyorum.
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
- Elif (Satın alma sorumlusu): Artık kayıtlı listeyi tek seferde sepete ekliyorum.
- Özet: Hızlı Sipariş sayfasına ürün kodunu yazın. · Kayıtlı listede Sepete Ekle düğmesine basın. · Siparişleri Sevkiyatta filtresiyle izleyin. — Sıradaki: Rol rehberi: yönetici

**Rol rehberi: yönetici** (`egitim-67-rol-yonetici`)

- Murat (Genel müdür): Bütçe ve onaylar için her gün rapor istiyorum.
- 1. Özet ekranından bekleyen onaylara geçin.
  - · Bekleyen onaylar bu kartta toplanır.
  - ✓ Onaylarım sayfası açılır
- 2. Onaylarım sayfasında siparişi onaylayın.
  - · Kartta tutar, açan kişi ve departman yazar.
  - ✓ Sipariş onaylandı
- 3. Bütçe Panosu ile harcamayı izleyin.
  - · Kredi kullanımı limitle birlikte yazar.
  - · Her departmanın kalan bütçesi bu sütunda yazar.
- 4. Analitik sayfasında harcamanın dağılımını görün.
  - · Son 12 ayın toplam harcaması kartta yazar.
  - · Harcama kategorilere yüzdeyle ayrılır.
- Murat (Genel müdür): Artık onayları ve bütçeyi tek panelden izliyorum.
- Özet: Özet kartından bekleyen onaylara geçin. · Onaylarım sayfasında Onayla düğmesine basın. · Bütçe Panosu sayfasında harcamayı izleyin. — Sıradaki: Rol rehberi: muhasebe

**Rol rehberi: muhasebe** (`egitim-68-rol-muhasebe`)

- Seda (Muhasebe uzmanı): Ay sonunda faturaları tek tek topluyorum.
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
- Seda (Muhasebe uzmanı): Artık faturaları ve ekstreyi panelden alıyorum.
- Özet: Cari Ekstre'yi tarih aralığıyla filtreleyin. · Faturayı Yazdır düğmesiyle yazdırın. · Sipariş listesini Excel'e aktarın. — Sıradaki: Rol rehberi: şube ve depo sorumlusu

**Rol rehberi: şube ve depo sorumlusu** (`egitim-69-rol-sube`)

- Hakan (Şube ve depo sorumlusu): Her şubenin siparişini farklı adrese gönderiyorum.
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
- Hakan (Şube ve depo sorumlusu): Artık her şubeyi ayrı projeyle takip ediyorum.
- Özet: Firma listesinde Sepete Ekle düğmesine basın. · Yeni Proje düğmesiyle şube projesi açın. · Varsayılan teslimat adresini kontrol edin. — Sıradaki: Puanınızı kupona dönüştürün

**Puanınızı kupona dönüştürün** (`egitim-70-puan-kupon`)

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
- Murat (Satın alma sorumlusu): Artık biriken puanımı kupona çeviriyorum.
- Özet: Sadakat Programı sayfasında bakiyenizi kontrol edin. · Birim sayısını yazıp İndirim Kuponu Oluştur düğmesine basın. · Kuponlarım sayfasında kupon kodunu kopyalayın. — Sıradaki: Kupon kodu gerektirmeyen avantajlar

**Kupon kodu gerektirmeyen avantajlar** (`egitim-71-avantajlar`)

- İndirim için kupon kodu mu arıyorsunuz? — Bazı indirimler sepette kendiliğinden uygulanır.
- 1. Kampanyalar sayfasında Sürekli Avantajlar bölümünü bulun.
  - · Bu bölümde üç kalıcı avantaj listelenir
- 2. Ödeme ve kargo avantajlarını okuyun.
  - · İndirim havale veya EFT ile ödemede geçerlidir
  - · Sepet tutarı ₺3.500'e ulaşınca kargo ücretsiz olur
- 3. Kademeli indirimi ürün sayfasında görün.
  - · Adet arttıkça indirim %5, %8 ve %10 olur
- Özet: Kampanyalar sayfasında Sürekli Avantajlar bölümünü bulun. · Peşin ödeme ve ücretsiz kargo koşullarını okuyun. · Ürün sayfasında kademe tablosunu kontrol edin. — Sıradaki: Bildirim tercihleri

**Bildirim tercihleri** (`egitim-72-bildirim-tercihleri`)

- Derya (Muhasebe sorumlusu): Gelen kutum bildirim e-postalarıyla doluyor.
- 1. Ayarlar sayfasında Bildirim Tercihleri bölümünü bulun.
  - · İşaretli seçenekler için e-posta gönderilir
- 2. İstemediğiniz e-postanın işaretini kaldırın.
  - · İşareti kaldırılan e-postalar size gönderilmez
- 3. Seçimlerinizi yapıp Tercihleri Kaydet düğmesine basın.
  - · Sepette kalan ürünler için 24 saat, 3 gün ve 7 gün sonra e-posta gelir
  - ✓ Tercihleriniz kaydedildi
- Derya (Muhasebe sorumlusu): Artık istediğim e-postaları alıyorum.
- Özet: Ayarlar sayfasında Bildirim Tercihleri bölümünü bulun. · İstemediğiniz e-postaların işaretini kaldırın. · Tercihleri Kaydet düğmesine basın. — Sıradaki: Mini test: sipariş

**Mini test: sipariş** (`egitim-73-test-siparis`)

- Test: Kargoya verilen sipariş hangi durumda görünür? (Hazırlanıyor / ✓ Sevkiyatta / Teslim Edildi)
- Kargodaki sipariş Sevkiyatta durumunda görünür.
  - · Durum etiketi siparişin aşamasını gösterir
- Test: Hızlı Sipariş formuna en fazla kaç satır girersiniz? (50 satır / ✓ 100 satır / 500 satır)
- Hızlı Sipariş formu 100 satır alır.
  - · Satır sınırı formun hemen altında yazar
- Test: Kargo takip numarası nerede yazar? (✓ Sipariş detayındaki Sevkiyat kutusunda / Faturalarım sayfasında / Cari Ekstre sayfasında)
- Takip numarası Sevkiyat kutusunda yazar.
  - · Takip et bağlantısıyla kargonuzu izleyebilirsiniz
- Özet: Kargodaki siparişi Sevkiyatta durumunda bulun. · Hızlı Sipariş formuna en fazla 100 satır girin. · Takip numarasını Sevkiyat kutusunda okuyun. — Sıradaki: Mini test: ödeme ve indirimler

**Mini test: ödeme ve indirimler** (`egitim-74-test-odeme`)

- Test: Havale/EFT ile peşin ödemede indirim yüzde kaçtır? (✓ %2 / %5 / %10)
- Peşin ödemede net tutardan %2 düşülür.
  - · Bu indirim için kupon kodu gerekmez
- Test: Ücretsiz kargo hangi tutardan başlar? (₺1.500 / ✓ ₺3.500 / ₺5.000)
- ₺3.500 ve üzerinde kargo ücreti alınmaz.
  - · Sınır Sürekli Avantajlar bölümünde yazar
- Test: Ürün sayfasındaki kademeli indirim oranları hangileridir? (✓ %5 / %8 / %10 / %2 / %4 / %6 / %10 / %15 / %20)
- Adet arttıkça indirim oranı artar.
  - · İndirim sepette her satıra kendiliğinden yansır
- Özet: Havale/EFT ile ödeyip %2 indirim alın. · ₺3.500 ve üzeri siparişte ücretsiz kargodan yararlanın. · Kademe tablosunda indirim oranını okuyun. — Sıradaki: Mini test: onay ve bütçe

**Mini test: onay ve bütçe** (`egitim-75-test-onay`)

- Test: Otomatik onay eşiğinin altındaki sipariş ne olur? (✓ Doğrudan onaylanır / Onay zincirine girer / İptal edilir)
- Eşiğin altındaki sipariş onay zincirine girmez.
  - · Eşik tutarı sözleşmenizde tanımlıdır
- Test: Bir onay kuralına en fazla kaç seviye onaylayıcı eklersiniz? (2 seviye / ✓ 3 seviye / 5 seviye)
- Bir kurala en fazla üç seviye eklenir.
  - · Siparişi en fazla üç kişi sırayla onaylar
- Test: Departmanın kalan bütçesini nerede görürsünüz? (✓ Bütçe Panosu / Kuponlarım / Faturalarım)
- Bütçe Panosu kalan bütçeyi gösterir.
  - · Bütçe, harcanan ve kalan tutar aynı satırda yazar
- Özet: Otomatik onay eşiğini Sözleşme & Fiyat sayfasında kontrol edin. · Onay zincirine en fazla üç seviye ekleyin. · Kalan bütçeyi Bütçe Panosu sayfasında izleyin.

### Tanıtım videoları (20 video · toplam 7:40)

| No | Video | Süre | Dosya |
|---|---|---|---|
| 20 | Hepsi tek panelde | 0:15 | `2026-10-09/tanitim/tanitim-20-tek-panel` |
| 21 | Panel cebinizde | 0:26 | `2026-10-09/tanitim/tanitim-21-panel-cebinizde` |
| 22 | Otel: kat hizmetleri tek panelde | 0:24 | `2026-10-09/tanitim/tanitim-22-otel` |
| 23 | Okul: dönem başlamadan hazır | 0:25 | `2026-10-09/tanitim/tanitim-23-okul` |
| 24 | Restoran: mutfak hijyeni tek pakette | 0:27 | `2026-10-09/tanitim/tanitim-24-restoran` |
| 25 | Ofis: bir aylık ihtiyaç tek pakette | 0:24 | `2026-10-09/tanitim/tanitim-25-ofis` |
| 26 | Sağlık kuruluşları: kontrol sizde | 0:25 | `2026-10-09/tanitim/tanitim-26-saglik` |
| 27 | Fabrika: üretim hattı durmasın | 0:28 | `2026-10-09/tanitim/tanitim-27-fabrika` |
| 28 | Rakamlarla MTS Hijyen B2B | 0:28 | `2026-10-09/tanitim/tanitim-28-rakamlarla` |
| 29 | Bir satın almacının günü | 0:34 | `2026-10-09/tanitim/tanitim-29-bir-gun` |
| 30 | Toplantıdan çıkmadan onaylayın | 0:16 | `2026-10-09/tanitim/tanitim-30-toplantidan-onay` |
| 31 | Muhasebe için 3 neden | 0:28 | `2026-10-09/tanitim/tanitim-31-muhasebe` |
| 32 | Ay sonu: önce / sonra | 0:25 | `2026-10-09/tanitim/tanitim-32-ay-sonu` |
| 33 | Ödemeyi siz seçin | 0:25 | `2026-10-09/tanitim/tanitim-33-odeme` |
| 34 | Kupon kodu gerektirmeyen 4 avantaj | 0:15 | `2026-10-09/tanitim/tanitim-34-avantajlar` |
| 35 | Saat 14:00, bugün kargoda | 0:16 | `2026-10-09/tanitim/tanitim-35-saat-14` |
| 36 | Aynı panel, iki rol | 0:25 | `2026-10-09/tanitim/tanitim-36-iki-rol` |
| 37 | Yedi kategori, tek tedarikçi | 0:16 | `2026-10-09/tanitim/tanitim-37-yedi-kategori` |
| 38 | Doğru ürün, ilk seferde | 0:25 | `2026-10-09/tanitim/tanitim-38-dogru-urun` |
| 39 | Kurumsal hesabınızı açın | 0:16 | `2026-10-09/tanitim/tanitim-39-kurumsal-hesap` |

#### Ekrandaki metinler

**Hepsi tek panelde** (`tanitim-20-tek-panel`)

- Telefon. E-posta. Excel. → 
- Hepsini tek panelde bulun.
  - · Sipariş, onay ve fatura aynı menüde durur
  - · Her 100 puan 10 TL'lik kupona dönüşür
- Kapanış: Satın almayı tek yerden yönetin. · Kurumsal hesap açın

**Panel cebinizde** (`tanitim-21-panel-cebinizde`)

- Onay için masaya mı dönüyorsunuz?
- Bilgisayardaki panel telefonda da çalışır. — Siparişleriniz iki ekranda da aynı görünür
- Siparişi tek dokunuşla onaylayın. (telefon)
  - · Tutar ve ürünler tek kartta görünür
  - ✓ Sipariş onaylandı
- Avantajlar telefonda da aynı kalır.: 100 satır Hızlı siparişte tek form · %2 Peşin ödeme indirimi · ₺3.500 Ücretsiz kargo sınırı
- Kapanış: Siparişleri her yerden onaylayın. · Panelde deneyin

**Otel: kat hizmetleri tek panelde** (`tanitim-22-otel`)

- Sevgi (Kat hizmetleri şefi): Kat arabası hep eksik çıkıyor.
- Kat ürünlerini tek pakette alın.
  - · Tuvalet, cam ve oda ürünleri aynı pakette gelir
  - · Paket içi %10 indirimle ₺879,28 tasarruf edersiniz
- Siparişi her ay otomatik tekrarlayın.
  - · Sipariş her ayın aynı günü kendiliğinden oluşur
- Sevgi (Kat hizmetleri şefi): Artık siparişim her ay kendiliğinden oluşuyor.
- Kapanış: Kat arabasını eksiksiz hazırlayın. · Kurumsal hesap açın

**Okul: dönem başlamadan hazır** (`tanitim-23-okul`)

- Tuvalet kağıdı. Kağıt havlu. El sabunu. → 
- Dönem başlamadan hepsini tek pakette alın.
  - · Tuvalet kağıdı, kağıt havlu ve el sabunu aynı pakette gelir
  - · İndirim sepette kendiliğinden uygulanır
- Her birimin bütçesini ayrı izleyin.
  - · Bu ayki harcama, aylık bütçenin yanında görünür
- İndirim ve ücretsiz kargo kendiliğinden uygulanır.: %10 Paket içi indirim · ₺931,95 Okul paketinde tasarruf · ₺3.500 Üzerinde kargo ücretsiz
- Kapanış: Okulun siparişlerini önceden planlayın. · Kurumsal hesap açın

**Restoran: mutfak hijyeni tek pakette** (`tanitim-24-restoran`)

- Eldiven yine mi bitti?
- Mutfak hijyenini tek pakette toplayın.
  - · Deterjan, tablet, yağ sökücü ve eldiven aynı pakette gelir
  - · İndirim sepette kendiliğinden uygulanır
- Eksilen ürünü koduyla ekleyin.
  - · Tek formda 100 satıra kadar ürün girilir
- Mutfak paketi indirimle gelir.: %10 Paket içi indirim · ₺1.768,29 Restoran paketinde tasarruf · %2 Peşin ödeme indirimi
- Kapanış: Mutfağı servise hazır tutun. · Kurumsal hesap açın

**Ofis: bir aylık ihtiyaç tek pakette** (`tanitim-25-ofis`)

- Murat (Ofis yöneticisi): Her ay aynı listeyi yazıyorum.
- Bir aylık ihtiyacı tek pakette alın.
  - · Dört temel ürün aynı pakette gelir
  - · Paket içi %8 indirimle ₺388,94 tasarruf edersiniz
- Paketi aylık aboneliğe çevirin. (telefon)
  - ✓ Aylık abonelik oluşturuldu
- Murat (Ofis yöneticisi): Artık paketi her ay abonelikle alıyorum.
- Kapanış: Aylık siparişi bir kez ayarlayın. · Kurumsal hesap açın

**Sağlık kuruluşları: kontrol sizde** (`tanitim-26-saglik`)

- Hangi sipariş kimin onayından geçiyor?
- Onay kurallarını siz belirleyin.
  - · Kural tutara ve departmana göre çalışır
- Bekleyen siparişi telefondan onaylayın. (telefon)
  - · Siparişi açan kişi ve departmanı kartta yazar
  - ✓ Sipariş onaylandı
- Onay zinciri üç seviyeye kadar uzar.: 3 seviye — Her seviye sırayla onay verir
- Kapanış: Her siparişi kendi kurallarınızla onaylayın. · Kurumsal hesap açın

**Fabrika: üretim hattı durmasın** (`tanitim-27-fabrika`)

- Serkan (Fabrika satın alma sorumlusu): Sünger bitti, hat bekliyor.
- Hattın listesini tek tıkla sepete ekleyin.
  - · Firma listesi şirket genelinde görünür.
  - ✓ Liste sepete eklendi
- Üretimden gelen siparişi telefondan onaylayın. (telefon)
  - · Siparişi açan departman kartta yazar.
  - ✓ Sipariş onaylandı
- Serkan (Fabrika satın alma sorumlusu): Hattın listesini artık tek tıkla ekliyorum.
- Kapanış: Hattın ihtiyacını tek listeden karşılayın. · Kurumsal hesap açın

**Rakamlarla MTS Hijyen B2B** (`tanitim-28-rakamlarla`)

- 100+ marka. → Katalogda 1.326 ürün var.
- Ürünleri kategori ve markayla süzün.
  - · Her kategorinin ürün sayısı yanında yazar.
  - · Marka filtresi aramayı daraltır.
- Kurallar Kampanyalar sayfasında yazar.
  - · İndirim net tutardan otomatik düşülür.
  - · Sipariş bu tutara ulaşınca kargo ücretsizdir.
- Her rakam panelde yazar.: 7 ana kategori · 100 + marka · %2 peşin ödemede indirim · ₺3.500 ve üzeri siparişte kargo ücretsiz
- Kapanış: Hijyen ihtiyacınızı tek panelden alın. · Kurumsal hesap açın

**Bir satın almacının günü** (`tanitim-29-bir-gun`)

- Derya (Satın alma sorumlusu): İşler çok, zaman az.
- Sabah onay bekleyenlere bakın.
  - · Bekleyen siparişlerin sayısı özette görünür.
- Ürün kodunu yazıp sepete ekleyin.
  - ✓ Ürün sepete eklendi
- Öğle arasında telefondan onaylayın. (telefon)
  - ✓ Sipariş onaylandı
- Öğleden sonra kargoyu izleyin.
  - · Siparişin durumu sayfanın başında yazar.
- Derya (Satın alma sorumlusu): Dört işi de tek panelde bitirdim.
- Kapanış: Günün işini tek panelde bitirin. · Kurumsal hesap açın

**Toplantıdan çıkmadan onaylayın** (`tanitim-30-toplantidan-onay`)

- Toplantı. → Sipariş onay bekliyor.
- Siparişi masaya dönmeden onaylayın. (telefon)
  - · Tutar, açan kişi ve onay seviyesi kartta yazar.
  - ✓ Sipariş onaylandı
- Kapanış: Satın almayı bekletmeden yürütün. · Panelde deneyin

**Muhasebe için 3 neden** (`tanitim-31-muhasebe`)

- Bu fatura hangi siparişe ait?
- Her fatura siparişiyle eşleşir.
  - · e-Faturalar bu listeye otomatik düşer.
  - · Faturanın yanında sipariş numarası yazar.
- Bakiyeyi vadesine göre görün.
  - · Borçlar vade aralıklarına göre ayrılır.
  - · Her siparişin vade tarihi satırında yazar.
- Kurallar panelde yazar.: 3 vade aralığı: 0–30, 31–60, 60+ gün · %2 Havale/EFT ile peşin ödemede indirim
- Kapanış: Faturayı ve bakiyeyi tek yerde izleyin. · Kurumsal hesap açın

**Ay sonu: önce / sonra** (`tanitim-32-ay-sonu`)

- Selin (Satın alma uzmanı): Ay sonu tabloyu elle dolduruyorum.
- Sipariş listesini Excel'e aktarın.
  - · Hızlı filtre listeyi duruma göre daraltır.
  - ✓ Liste Excel'e aktarıldı
- Aylık harcamayı grafikte görün.
  - · Son 6 ayın harcaması aylara göre ayrılır.
- Selin (Satın alma uzmanı): Ay sonu listesini Excel'e aktarıyorum.
- Kapanış: Raporunuzu panelden alın. · Panelde deneyin

**Ödemeyi siz seçin** (`tanitim-33-odeme`)

- Siparişi nasıl ödersiniz?
- Ödeme yolları ürün sayfasında yazar.
  - · Ödeme yolunu siparişe göre siz seçersiniz.
- Havale indirimi sipariş özetinde düşer.
  - · Peşin indirim özette ayrı satırda yazar.
  - ✓ Sipariş numarası kopyalandı
- Havale/EFT ile peşin ödeyin.: 2 — Net tutardan indirim düşülür.
- Kapanış: Her siparişte size uyanı kullanın. · Kurumsal hesap açın

**Kupon kodu gerektirmeyen 4 avantaj** (`tanitim-34-avantajlar`)

- İndirim için kupon kodu gerekir mi?
- Avantajları Kampanyalar sayfasında görün.
  - · Koşul sağlanınca avantaj otomatik uygulanır.
  - · Paketlerde %8–%10 indirim sepette düşer.
- Kapanış: İndirimleri kod girmeden kullanın. · Panelde deneyin

**Saat 14:00, bugün kargoda** (`tanitim-35-saat-14`)

- Aynı gün kargo. → 14:00'a kadar sipariş verin.
- Stoğu görün, hemen sepete ekleyin.
  - · Stoktaki ürün 1 iş günü içinde kargoya verilir.
  - ✓ Ürün sepete eklendi
- Kapanış: Acil ihtiyacı beklemeden karşılayın. · Kurumsal hesap açın

**Aynı panel, iki rol** (`tanitim-36-iki-rol`)

- Zeynep (Satın alma sorumlusu): Onay için yöneticimi bekliyorum.
- Satın almacı ürünleri kodlarıyla ekler.
  - ✓ Ürün sepete eklendi
- Yönetici siparişi telefondan onaylar. (telefon)
  - ✓ Sipariş onaylandı
- Zeynep (Satın alma sorumlusu): Siparişimi yöneticim tek dokunuşla onayladı.
- Kapanış: Siparişi hazırlayın, yöneticiniz onaylasın. · Kurumsal hesap açın

**Yedi kategori, tek tedarikçi** (`tanitim-37-yedi-kategori`)

- 7 kategori. → Tek tedarikçiden alın.
- Yedi kategoriyi tek katalogda gezin.
  - · 7 kategoride toplam 1.326 ürün listelenir.
  - ✓ Kağıt ürünleri listelendi
- Kapanış: Tüm ihtiyacı tek siparişte toplayın. · Kurumsal hesap açın

**Doğru ürün, ilk seferde** (`tanitim-38-dogru-urun`)

- Ece (Tesis sorumlusu): Aldığım havlu dispensere uymadı.
- Uyumu Teknik Özellikler bölümünde görün.
  - · Satın almadan önce dispenser tipinizle karşılaştırın.
- Emin değilseniz ücretsiz numune isteyin.
  - · Satış ekibi onaylayınca numune gönderilir.
  - ✓ Numune talebi gönderildi
- Ece (Tesis sorumlusu): Artık önce dispenser uyumuna bakıyorum.
- Kapanış: Ürünü önce deneyin, sonra sipariş verin. · Kurumsal hesap açın

**Kurumsal hesabınızı açın** (`tanitim-39-kurumsal-hesap`)

- Cari özel fiyat nasıl alınır?
- Kurumsal Üyelik formunu gönderin.
  - · Cari özel fiyatlar onay sonrası otomatik tanımlanır.
  - ✓ Form gönderildi
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
