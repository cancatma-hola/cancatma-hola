// Panel eğitim seti. Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı vurgulanır.
// Hedefler: "Metin" (birebir), "~parça" (içerir), "[]metin" (o metni içeren en küçük kutu), "#2" (ikinci eşleşme), dizi (birleşim).
// Kayıt değiştiren adımlar (sepete ekle, onayla, kaydet) panelde yapılmaz; motor tıklamayı ve sonucu canlandırır.
const LISTE = [];
const E = (ad, baslik, ikon, alt, sahneler, ipucu) => LISTE.push({ ad, baslik, ikon, alt, sahneler, ipucu });
const ek = (ekran, adim, metin, ayar) => ({ tip: "ekran", ekran, adim, metin, ...ayar });
const B = (x, y, w, h) => ({ x, y, w, h });

// ── Başlangıç
E("giris", "Panele giriş", "key", "Kurumsal hesabınızla panele güvenle girin.", [
  ek("giris", 1, "Giriş sayfasında *e-posta* adresinizi yazın.", { bolge: B(500, 290, 920, 500),
    yaz: { hedef: "ornek@firma.com", metin: "satinalma@firmaniz.com" } }),
  ek("giris", 2, "Şifrenizi yazıp *Giriş Yap* butonuna basın.", { bolge: B(500, 290, 920, 500),
    vurgu: [{ hedef: "••••••••", not: "Şifreniz gizli olarak yazılır" }, { hedef: "Beni hatırla", not: "Bu cihazda oturumunuz açık kalır" }],
    tikla: { hedef: "Giriş Yap#2", sonuc: "Özet ekranı açılır" } }),
  ek("giris", 3, "Şifrenizi unuttuysanız *yeni şifre* isteyin.", { bolge: B(500, 290, 920, 500),
    vurgu: [{ hedef: "Şifremi unuttum", not: "Şifre yenileme bağlantısı gelir" }, { hedef: "Kurumsal hesap aç →", not: "Hesabı olmayan firmalar başvurur" }] }),
], ["Kurumsal e-postanızla girin", "Şifrenizi kimseyle paylaşmayın", "Ortak bilgisayarda Beni hatırla seçmeyin"]);

E("ozet", "Özet ekranı", "chart", "Hesabınızın durumunu tek bakışta görün.", [
  ek("ozet", 1, "Panele girdiğinizde ilk *Özet* ekranı açılır.", { bolge: B(555, 205, 1095, 300),
    vurgu: [{ hedef: "[]BU AY HARCAMA", not: "Bu ay yaptığınız toplam harcama" },
      { hedef: ["Açık bakiye", "₺15.405,55"], not: "Ödenmemiş açık bakiyeniz" },
      { hedef: "[]KREDİ LİMİTİ KULLANIMI", not: "Kredi limitinizin kullanılan kısmı" }] }),
  ek("ozet", 2, "Onay bekleyen siparişleri *tek tıkla* açın.", { bolge: B(555, 205, 1095, 300),
    vurgu: [{ hedef: "[]ONAY BEKLEYEN", not: "Onayınızı bekleyen 3 sipariş var" }],
    tikla: { hedef: "Şimdi incele →", sonuc: "Onaylarım sayfası açılır" } }),
  ek("ozet", 3, "Harcama trendini ve son siparişlerinizi inceleyin.", { bolge: B(555, 505, 1095, 540),
    vurgu: [{ hedef: "[]Aylık Harcama Trendi", not: "Son 12 ayın harcama grafiği" },
      { hedef: "[]Kategori Kırılımı", not: "Harcamanın kategorilere dağılımı" },
      { hedef: ["Son Siparişler", "₺10.319,89"], not: "Son siparişleriniz ve durumları" }] }),
], ["Harcama, bakiye ve kredi limiti", "Onay bekleyen siparişler", "Aylık harcama trendi", "Etkinlik akışı ve bildirimler"]);

// ── Ürün bulma ve sipariş
E("urun-arama", "Ürün arama", "search", "Aradığınız ürünü saniyeler içinde bulun.", [
  ek("anasayfa", 1, "Üstteki *arama kutusuna* ürün adını yazın.", { bolge: B(280, 80, 1360, 420),
    yaz: { hedef: "Ürün, SKU veya barkod...", metin: "kağıt havlu" } }),
  ek("arama", 2, "Sonuçlar siz *yazarken* listelenir.", { bolge: B(380, 80, 760, 520),
    vurgu: [{ hedef: "Fotoselli/Sensörlü Kağıt Havlu 4 kg 555204 ÜRÜN", not: "Ürün adı ve ürün kodu birlikte görünür" }],
    tikla: { hedef: "\"kağıt havlu\" için tüm sonuçları gör", sonuc: "Tüm sonuçlar listelenir" } }),
  ek("anasayfa", 3, "Ürün *kodu* veya *barkod* ile de arayabilirsiniz.", { bolge: B(280, 80, 1360, 420),
    yaz: { hedef: "Ürün, SKU veya barkod...", metin: "555204" } }),
], ["Ürün adının bir kısmını yazmanız yeterli", "Ürün kodu ile tam eşleşme bulunur", "Barkod ile de arama yapılır"]);

E("kategoriler", "Kategoriler ve filtreler", "filter", "Ürünleri kategoriye göre süzün.", [
  ek("kategori", 1, "Üst menüden bir *kategori* seçin.", { bolge: B(270, 150, 1380, 420),
    vurgu: [{ hedef: ["Kağıt Ürünleri", "Atık Yönetimi & Ortam Bakımı"], not: "Tüm ana kategoriler burada" }, { hedef: ["75", "Fiyat aralığı"], not: "75 ürün, 11 marka ve fiyat aralığı" }] }),
  ek("kategori", 2, "Sol taraftaki *filtrelerle* sonuçları daraltın.", { bolge: B(270, 300, 700, 760),
    vurgu: [{ hedef: ["Alt Kategoriler", "Endüstriyel Temizlik Rulosu"], not: "Alt kategoriye göre süzün" },
      { hedef: ["Marka ara...", "Papilion 1"], not: "Markaya göre süzün" }] }),
  ek("kategori", 3, "Ürünleri *fiyata* veya ada göre sıralayın.", { bolge: B(550, 300, 1100, 300),
    vurgu: [{ hedef: "[]75 ürün Önerilen", not: "Önerilen, fiyat veya A–Z sıralama" }] }),
], ["Önce kategori seçin", "Sonra marka ve alt kategoriyle daraltın", "Filtreleri Temizle ile sıfırlayın"]);

E("urun-sayfasi", "Ürün sayfası", "box", "Fiyatı, stoğu ve kargo süresini tek sayfada görün.", [
  ek("urun", 1, "Ürün sayfasında size özel *liste fiyatını* görün.", { bolge: B(810, 200, 840, 460),
    vurgu: [{ hedef: "[]LİSTE FİYATI (KDV HARİÇ)", not: "Firmanıza özel fiyat, KDV hariç" },
      { hedef: "Bu üründen 1 adet alırsan +4 puan kazanırsın", not: "Her alımda sadakat puanı kazanırsınız" }] }),
  ek("urun", 2, "*Stok* ve *kargo* bilgisini kontrol edin.", { bolge: B(270, 200, 560, 460),
    vurgu: [{ hedef: "[]Stoktaki ürünlerde 1 iş günü içinde kargo", not: "Stoktaki ürün 1 iş günü içinde kargoda" }] }),
  ek("urun-alt", 3, "Adedi seçip *Sepete Ekle* butonuna basın.", { bolge: B(1180, 0, 760, 260),
    tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" } }),
], ["Fiyatlar firmanıza özeldir", "Stok ve kargo süresi sayfada yazar", "Her alım puan kazandırır"]);

E("kademeli-iskonto", "Kademeli iskonto", "percent", "Çok alın, birim fiyatınız düşsün.", [
  ek("urun", 1, "*FIRSAT* tablosu adet arttıkça düşen fiyatı gösterir.", { bolge: B(810, 600, 840, 300),
    vurgu: [{ hedef: "[]FIRSAT Kademeli iskonto", not: "5 koliden %5, 30 koliden %8, 40 koliden %10" }] }),
  ek("urun", 2, "*Toplu Alım Hesaplayıcı* ile toplam tutarı görün.", { bolge: B(270, 620, 560, 300),
    vurgu: [{ hedef: ["30", "120"], not: "Hazır adet seçenekleri" }, { hedef: "[]Birim Fiyat ₺420,00 Ara Toplam", not: "Birim fiyat, KDV ve genel toplam" }] }),
], ["Adet arttıkça birim fiyat düşer", "Hesaplayıcı toplamı anında gösterir", "İndirim sepette otomatik uygulanır"]);

E("hizli-siparis", "Hızlı sipariş", "bolt", "Ürün koduyla tek ekranda toplu sipariş verin.", [
  ek("hizli", 1, "*Hızlı Sipariş* ekranında ürün kodunu yazın.", { bolge: B(555, 205, 1095, 340),
    yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" }, vurgu: [{ hedef: "[]Ürün Miktar Ürün Adı Birim Fiyat", not: "Her satıra bir ürün ve miktar" }] }),
  ek("hizli", 2, "Yeni ürün için *Satır Ekle* butonunu kullanın.", { bolge: B(555, 205, 1095, 340),
    vurgu: [{ hedef: "Satır Ekle", not: "En fazla 100 satır eklenebilir" }, { hedef: "CSV Yapıştır", not: "Excel listenizi tek seferde yapıştırın" }] }),
  ek("hizli", 3, "Listeyi *doğrulayıp* sepete ekleyin.", { bolge: B(555, 205, 1095, 340),
    vurgu: [{ hedef: "Doğrula", not: "Kodlar ve stoklar kontrol edilir" }],
    tikla: { hedef: "Sepete Ekle", sonuc: "Tüm satırlar sepete eklendi" } }),
], ["Ürün kodunu biliyorsanız en hızlı yol", "Excel'den kopyalayıp yapıştırın", "Göndermeden önce Doğrula'ya basın"]);

// ── Siparişler
E("siparislerim", "Siparişlerim", "list", "Tüm siparişlerinizi tek listede takip edin.", [
  ek("siparisler", 1, "*Siparişlerim* sayfası firmanızın tüm siparişlerini listeler.", { bolge: B(555, 500, 1095, 300),
    vurgu: [{ hedef: "[]Sipariş No Tarih Açan Durum Tutar", not: "Sipariş no, tarih, açan kişi, durum, tutar" }] }),
  ek("siparisler", 2, "*Filtrelerle* aradığınız siparişi bulun.", { bolge: B(555, 320, 1095, 170),
    vurgu: [{ hedef: "Sipariş no veya PO ara...", not: "Sipariş no veya PO ile arayın" },
      { hedef: "~Tüm Durumlar", not: "Duruma göre süzün" }, { hedef: ["Hızlı:", "Teslim"], not: "Hızlı durum filtreleri" }] }),
  ek("siparisler", 3, "Listeyi *Excel'e* aktarın.", { bolge: B(555, 205, 1095, 300),
    tikla: { hedef: "Excel'e Aktar", sonuc: "Excel dosyası indirildi" } }),
], ["Açan kişiyi ve durumu listede görün", "Proje ve tarihe göre süzün", "Raporlar için Excel'e aktarın"]);

E("siparis-detayi", "Sipariş detayı", "doc", "Siparişin hangi adımda olduğunu görün.", [
  ek("siparis-hazirlaniyor", 1, "Sipariş detayında *durum çubuğunu* izleyin.", { bolge: B(555, 225, 1095, 380),
    vurgu: [{ hedef: "[]Taslak → Onay Bekleniyor", not: "Sipariş şu an hazırlanıyor", kaydir: true }, { hedef: "[]Sıradaki adım", not: "Sıradaki adım her zaman yazılı" }] }),
  ek("siparis-hazirlaniyor-alt", 2, "*Sipariş kalemlerini* ve tutarı kontrol edin.", { bolge: B(555, 200, 1095, 380),
    vurgu: [{ hedef: "[]ÜRÜN SKU ADET BİRİM TUTAR", not: "Ürün, kod, adet ve birim fiyat" }, { hedef: "[]Toplam ₺2.925,48", not: "İndirim, KDV ve kargo dahil toplam" }] }),
  ek("siparis-hazirlaniyor", 3, "Siparişi *PDF* olarak alın veya şablona kaydedin.", { bolge: B(555, 205, 1095, 260),
    vurgu: [{ hedef: "Şablona Kaydet", not: "Aynı siparişi tekrar vermek için" }], tikla: { hedef: "Yazdır / PDF", sonuc: "Sipariş PDF olarak hazırlandı" } }),
], ["Durum çubuğu 9 adımı gösterir", "Bekleyen puanınız teslimde eklenir", "Şablona kaydedip tekrar kullanın"]);

E("onay-bekleyen-siparis", "Onay bekleyen sipariş", "approve", "Onay zincirindeki siparişi takip edin.", [
  ek("siparis-onay", 1, "Bu sipariş *şirket içi onay* bekliyor.", { bolge: B(555, 330, 1095, 350),
    vurgu: [{ hedef: "[]Sıradaki adım", not: "Sıradaki onaylayıcının işlemi bekleniyor" }] }),
  ek("siparis-onay", 2, "*Onay zincirinde* kimin beklediğini görün.", { bolge: B(555, 680, 1095, 360),
    vurgu: [{ hedef: "[]Onay Zinciri Seviye 2", not: "Seviye 2 onayı bekleniyor" }] }),
  ek("siparis-onay", 3, "Gerekirse siparişi *iptal* edebilirsiniz.", { bolge: B(555, 330, 1095, 350),
    vurgu: [{ hedef: "[]Siparişi İptal Et Sipariş henüz", not: "İşleme alınmadan önce iptal edilebilir" }] }),
], ["Onay zinciri siparişi sırayla gezer", "Her onay bildirim olarak gelir", "MTS hazırlığa başlamadan iptal edilebilir"]);

E("odeme-bekleyen-siparis", "Ödeme bekleyen sipariş", "wallet", "Ödemesi tamamlanmamış siparişi yönetin.", [
  ek("siparis-odeme", 1, "Sipariş durumunda *Ödeme Bekleniyor* yazar.", { bolge: B(555, 330, 1095, 350),
    vurgu: [{ hedef: "[]Sipariş Durumu Ödeme Bekleniyor", not: "Ödeme tamamlanınca sipariş ilerler" }] }),
  ek("siparis-odeme", 2, "*Sıradaki adım* ne yapmanız gerektiğini söyler.", { bolge: B(555, 330, 1095, 350),
    vurgu: [{ hedef: "[]Sıradaki adım Ödeme tamamlanması", not: "Ödeme tamamlanması bekleniyor" }] }),
], ["Havale/EFT ile ödemede %2 indirim var", "Ödeme gelince sipariş MTS onayına geçer", "Gerekirse siparişi iptal edin"]);

// ── Tekrarlayan alımlar
E("periyodik-siparisler", "Periyodik siparişler", "repeat", "Düzenli siparişleri otomatiğe bağlayın.", [
  ek("periyodik", 1, "*Periyodik Siparişler* sayfası şablonlarınızı listeler.", { bolge: B(555, 205, 1095, 380),
    vurgu: [{ hedef: "[]Aylık periyodik sipariş", not: "Her ayın 1. günü otomatik sipariş" }, { hedef: "[]Aylık Temizlik Sarf Aboneliği", not: "Her ayın 5. günü otomatik sipariş" }] }),
  ek("periyodik", 2, "Yeni bir şablon için *Yeni Şablon* butonuna basın.", { bolge: B(555, 205, 1095, 380),
    tikla: { hedef: "~Yeni Şablon", sonuc: "Yeni şablon formu açılır" } }),
], ["Sistem siparişi zamanı gelince oluşturur", "Şablonu duraklatabilir veya düzenleyebilirsiniz", "Sonraki sipariş tarihi listede yazar"]);

E("periyodik-sablon", "Periyodik şablon oluşturma", "calendar", "Bir kez kurun, sistem her ay tekrarlasın.", [
  ek("periyodik-yeni", 1, "Şablona bir *ad* verin.", { bolge: B(555, 300, 1095, 360),
    yaz: { hedef: "Örn: Aylık Temizlik Paketi", metin: "Aylık Ofis Temizliği" } }),
  ek("periyodik-yeni", 2, "Sipariş *sıklığını* ve günü seçin.", { bolge: B(555, 300, 1095, 360),
    vurgu: [{ hedef: ["Haftalık", "Aylık"], not: "Haftalık, iki haftada bir veya aylık" }, { hedef: "Ayın Günü (1-28)", not: "Siparişin oluşacağı gün" }] }),
  ek("periyodik-yeni", 3, "Ürünleri ekleyip *Şablonu Kaydet* butonuna basın.", { bolge: B(555, 640, 1095, 400),
    yaz: { hedef: "Ürün ara (ad veya kod)", metin: "ST00560" }, tikla: { hedef: "Şablonu Kaydet", sonuc: "Şablon kaydedildi" } }),
], ["Ödeme yöntemi ve adres şablonda kayıtlı", "Ürün ve miktarı istediğiniz zaman değiştirin", "Sipariş günü 1 ile 28 arasında seçilir"]);

E("siparis-listeleri", "Sipariş listeleri", "list", "Sık aldıklarınızı listeye kaydedin.", [
  ek("listeler", 1, "*Sipariş Listelerim* sayfası kayıtlı listelerinizi gösterir.", { bolge: B(555, 340, 1095, 220),
    vurgu: [{ hedef: ["Tümü", "Firma"], not: "Kişisel ve firma listeleri" }, { hedef: "[]Üretim Hattı Standart Set", not: "5 ürünlük firma listesi" }] }),
  ek("listeler", 2, "Listeyi *tek tıkla* sepete ekleyin.", { bolge: B(555, 340, 1095, 220),
    tikla: { hedef: "Sepete Ekle#2", sonuc: "5 ürün sepete eklendi" } }),
  ek("listeler", 3, "Yeni liste için *Yeni Liste* butonuna basın.", { bolge: B(555, 205, 1095, 360),
    vurgu: [{ hedef: "Yeni Liste", not: "Listeye istediğiniz ürünleri ekleyin" }] }),
], ["Firma listesini tüm ekip kullanır", "Kişisel liste yalnız sizindir", "Listeyi düzenleyip güncel tutun"]);

E("favoriler", "Favorilerim", "heart", "Sık aldığınız ürünlere hızlı ulaşın.", [
  ek("favoriler", 1, "*Favorilerim* sayfası işaretlediğiniz ürünleri gösterir.", { bolge: B(555, 340, 1095, 500),
    vurgu: [{ hedef: "[]SELPAK Ürün Kodu: 7906666", not: "Favori ürün fiyatıyla birlikte görünür" }] }),
  ek("favoriler", 2, "Ürünü buradan *doğrudan* sepete ekleyin.", { bolge: B(555, 340, 1095, 500),
    tikla: { hedef: "Ekle", sonuc: "Ürün sepete eklendi" } }),
], ["Ürün sayfasındaki kalp ile favoriye ekleyin", "Favoriler fiyatlarla birlikte listelenir", "Sepete eklemek tek tık"]);

// ── Fiyat ve teklif
E("fiyat-teklifleri", "Fiyat teklifleri", "tag", "Özel fiyat isteyin, teklifinizi takip edin.", [
  ek("teklifler", 1, "*Fiyat Tekliflerim* sayfası tüm taleplerinizi listeler.", { bolge: B(555, 205, 1095, 320),
    vurgu: [{ hedef: "[]TKF-2026-0003", not: "Teklif hazır: 19.055,50 ₺" }, { hedef: "[]TKF-2026-0004", not: "Fiyat bekleniyor" }], ortu: ["[]TKF-2026-0002"] }),
  ek("teklifler", 2, "Yeni talep için *Yeni Teklif Talebi* butonuna basın.", { bolge: B(555, 205, 1095, 320),
    tikla: { hedef: "Yeni Teklif Talebi", sonuc: "Teklif formu açılır" } }),
], ["Teklif hazır olunca bildirim gelir", "Hazır teklifi Teklifi Kabul Et ile onaylayın", "Teklif Hazır yazınca teklifi açın"]);

E("yeni-teklif", "Yeni fiyat teklifi", "edit", "Ürün ve miktarı yazın, fiyatı MTS hazırlasın.", [
  ek("teklif-yeni", 1, "Ürün kodunu ve *miktarı* yazın.", { bolge: B(555, 320, 1095, 400),
    yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" }, vurgu: [{ hedef: "Özel not...", not: "Her satıra özel not ekleyebilirsiniz" }] }),
  ek("teklif-yeni", 2, "Notunuzu yazıp *Teklif Oluştur* butonuna basın.", { bolge: B(555, 320, 1095, 400),
    yaz: { hedef: "Örn: 3 farklı depoya teslimat olacak, ayrı fiyat verebilir misiniz?", metin: "Aylık 200 koli alım planlıyoruz." },
    tikla: { hedef: "Teklif Oluştur", sonuc: "Teklif talebiniz iletildi" } }),
], ["Birden çok ürün tek talepte", "Teslimat ve adet bilgisini not edin", "Teklif hazır olunca bildirim gelir"]);

E("toplu-alim-teklifi", "Toplu alım teklifi", "package", "Büyük alımlar için teklif formunu doldurun.", [
  ek("teklif-iste", 1, "*Teklif İste* sayfasında firma bilgilerinizi yazın.", { bolge: B(620, 220, 690, 520),
    vurgu: [{ hedef: ["Firma Ünvanı", "E-posta"], not: "Firma ve iletişim bilgileri" }] }),
  ek("teklif-iste", 2, "Ürün, *adet* ve süreyi açıklayın.", { bolge: B(620, 560, 690, 300),
    yaz: { hedef: "~Örn: 6 ay boyunca aylık 200 koli", metin: "12 ay boyunca aylık 150 koli kağıt havlu" },
    tikla: { hedef: "Teklif Talep Et", sonuc: "Talebiniz satış ekibine iletildi" } }),
], ["Adet ve periyodu net yazın", "Varsa dosya ekleyin", "Satış ekibi size özel fiyat hazırlar"]);

E("sozlesme-fiyat", "Sözleşme ve fiyat", "invoice", "Fiyat listenizi ve ödeme koşullarınızı görün.", [
  ek("sozlesme", 1, "*Sözleşme & Fiyat* sayfası anlaşma koşullarınızı gösterir.", { bolge: B(555, 320, 1095, 420),
    vurgu: [{ hedef: "[]Kredi Limiti Limit", not: "Kredi limiti: ₺250.000" }, { hedef: "[]Ödeme Koşulları", not: "30 gün vadeli ödeme" }] }),
  ek("sozlesme", 2, "*Otomatik onay eşiği* küçük siparişleri hızlandırır.", { bolge: B(555, 520, 1095, 220),
    vurgu: [{ hedef: "[]Otomatik Onay Eşiği", not: "₺5.000 altı siparişler onay beklemez" }] }),
], ["Fiyat listesi firmanıza özeldir", "Kredi limitini anlık izleyin", "Vade süresi ödeme planınızı belirler"]);

// ── Onay ve kontrol
E("onaylarim", "Onaylarım", "approve", "Onayınızı bekleyen siparişleri yönetin.", [
  ek("onaylarim", 1, "*Onaylarım* sayfası onayınızı bekleyen siparişleri listeler.", { bolge: B(555, 320, 1095, 260),
    vurgu: [{ hedef: ["Sipariş tutarı: ₺1.779,56", "Açan: Zeynep Kaya · 06.10.2026 · Departman: İdari İşler"], not: "Tutar, açan kişi ve departman" }, { hedef: ["Onay seviyesi", "Seviye 1"], not: "Siparişin onay seviyesi" }] }),
  ek("onaylarim", 2, "Siparişi *onaylayın*, revize isteyin ya da reddedin.", { bolge: B(555, 320, 1095, 260),
    vurgu: [{ hedef: ["Onayla", "Reddet"], not: "Üç seçenek: onay, revize, ret" }], tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } }),
], ["Onay bildirimi anında gelir", "Revize ile siparişi geri gönderin", "Onay sonrası sipariş MTS'ye iletilir"]);

E("onay-kurallari", "Onay kuralları", "shield", "Hangi siparişin kime düşeceğini belirleyin.", [
  ek("onay-kurallari", 1, "*Onay Kuralları* sayfası tanımlı kuralları listeler.", { bolge: B(555, 205, 1095, 480),
    vurgu: [{ hedef: "[]10.000 TL Üzeri Siparişler", not: "10.000 TL üzeri siparişler onaya düşer" }, { hedef: "[]100.000 TL Üzeri Siparişler", not: "Daha büyük tutar için ayrı kural" }] }),
  ek("onay-kurallari", 2, "Yeni kural için *Yeni Kural* butonuna basın.", { bolge: B(555, 205, 1095, 480),
    tikla: { hedef: "+ Yeni Kural", sonuc: "Yeni kural formu açılır" } }),
], ["Kurallar tutara ve departmana göre çalışır", "Birden çok seviye tanımlanabilir", "Eşiğin altındaki sipariş beklemez"]);

E("yeni-onay-kurali", "Yeni onay kuralı", "edit", "Tutar eşiği ve onaylayıcıları seçin.", [
  ek("onay-kural-yeni", 1, "Kurala bir *ad* ve tutar aralığı verin.", { bolge: B(555, 300, 1095, 260),
    yaz: { hedef: "Örn: 10.000 ₺ üzeri siparişler", metin: "25.000 ₺ üzeri siparişler" }, vurgu: [{ hedef: ["Alt Tutar (₺) (opsiyonel)", "sınırsız"], not: "Alt ve üst tutar sınırı" }] }),
  ek("onay-kural-yeni", 2, "*Onaylayıcı zincirini* seviye seviye kurun.", { bolge: B(555, 460, 1095, 460),
    vurgu: [{ hedef: "[]Onaylayıcı Zinciri", not: "Sipariş bu kişileri sırayla bekler" }, { hedef: ["Öncelik", "Kural aktif"], not: "Öncelik ve aktiflik ayarı" }] }),
], ["Departman seçerseniz kural yalnız oraya uygulanır", "En fazla 3 seviye onay", "Yüksek öncelikli kural kazanır"]);

E("kullanicilar", "Kullanıcılar ve yetkiler", "users", "Ekibinizi ve yetkilerini yönetin.", [
  ek("kullanicilar", 1, "*Kullanıcılar & Yetkiler* sayfası ekibinizi listeler.", { bolge: B(555, 300, 1095, 340),
    vurgu: [{ hedef: ["Rol", "Departman", "Görüntüleyici", "Satın Alma#2"], not: "Her kişinin rolü ve departmanı" }, { hedef: ["Onay Limiti", "Yetki", "19 yetki"], not: "Kişinin onaysız sipariş limiti" }] }),
  ek("kullanicilar", 2, "Yeni kişi için *Kullanıcı Davet Et* butonuna basın.", { bolge: B(555, 205, 1095, 340),
    tikla: { hedef: "+ Kullanıcı Davet Et", sonuc: "Davet formu açılır" } }),
], ["Roller: Genel Müdür, Satınalmacı, Görüntüleyici", "Kullanıcıyı devre dışı bırakabilirsiniz", "Onay limiti kişiye özeldir"]);

E("kullanici-davet", "Kullanıcı davet etme", "userplus", "Ekibinize yeni bir kullanıcı ekleyin.", [
  ek("kullanici-davet", 1, "Kişinin *adını* ve e-postasını yazın.", { bolge: B(555, 320, 1095, 260),
    yaz: { hedef: "Ahmet Yılmaz", metin: "Selin Aydın" } }),
  ek("kullanici-davet", 2, "*Rol*, departman ve onay limiti seçin.", { bolge: B(555, 400, 1095, 220),
    vurgu: [{ hedef: "~Rol seçin...", not: "Rol varsayılan yetkileri belirler" }, { hedef: "Örn: 5000", not: "Boş bırakırsanız limit yok" }] }),
  ek("kullanici-davet", 3, "*Kullanıcıyı Davet Et* butonuna basın.", { bolge: B(555, 540, 1095, 220),
    tikla: { hedef: "Kullanıcıyı Davet Et", sonuc: "Davet e-postası gönderildi" } }),
], ["Davet edilen kişi e-postadan hesap açar", "Yetkileri rol seçtikten sonra özelleştirin", "Departman bütçe takibi için önemlidir"]);

E("departmanlar", "Departman ve bütçe", "building", "Her departmana aylık bütçe tanımlayın.", [
  ek("departmanlar", 1, "*Departman & Bütçe* sayfası harcamaları departmana göre gösterir.", { bolge: B(555, 400, 1095, 340),
    vurgu: [{ hedef: "[]İdari İşler 1 kullanıcı", not: "Bu ay ₺10.413 harcandı, bütçe ₺45.000" }] }),
  ek("departman-yeni", 2, "Yeni departmanın *adını* ve bütçesini yazın.", { bolge: B(1100, 220, 560, 200),
    yaz: { hedef: "örn. Satın Alma", metin: "Bakım Onarım" }, tikla: { hedef: "Kaydet", sonuc: "Departman eklendi" } }),
], ["Bütçe aşımı panoda görünür", "Kullanıcıları departmana bağlayın", "Bütçe isteğe bağlıdır"]);

E("butce-panosu", "Bütçe panosu", "wallet", "Bütçe ve limitleri anlık izleyin.", [
  ek("butce", 1, "*Bütçe Panosu* bu ayki toplam harcamayı gösterir.", { bolge: B(555, 320, 1095, 110),
    vurgu: [{ hedef: "[]BU AY TOPLAM HARCAMA", not: "Bu ay toplam ₺29.348" }, { hedef: "[]KREDİ KULLANIMI", not: "Kredi kullanımı ve limit" }] }),
  ek("butce", 2, "Departmanların *kalan bütçesini* tabloda görün.", { bolge: B(555, 430, 1095, 270),
    vurgu: [{ hedef: "[]İdari İşler ₺45.000,00", not: "Kalan: ₺34.586, kullanım %23" }] }),
  ek("butce-alt", 3, "*Kullanıcı onay limitlerini* de buradan izleyin.", { bolge: B(555, 300, 1095, 300),
    vurgu: [{ hedef: "[]Kullanıcı Onay Limitleri", not: "Kişi başı limit ve bu ayki harcama" }] }),
], ["Durum sütunu aşımı uyarır", "Departmanları yönet bağlantısı ayarlara gider", "Onay bekleyen siparişler de hesaba katılır"]);

E("projeler", "Projeler ve şantiyeler", "map", "Harcamayı projeye göre takip edin.", [
  ek("projeler", 1, "*Projeler / Şantiyeler* sayfası proje harcamalarını özetler.", { bolge: B(555, 320, 1095, 340),
    vurgu: [{ hedef: "[]Toplam Harcama ₺38.720,95", not: "Projelerin toplam harcaması" }, { hedef: "[]PROJE HARCAMA ÖZETİ", not: "Her projenin bütçe kullanımı" }] }),
  ek("proje-yeni", 2, "Yeni proje için *proje adını* ve şantiye adresini yazın.", { bolge: B(555, 540, 1095, 500),
    yaz: { hedef: "Türkcell Ankara", metin: "Kadıköy Şube Açılışı" } }),
], ["Siparişte proje seçin, harcama projeye yazılır", "Proje kodu Logo ERP ile eşleşir", "Şantiye adresi teslimatta kullanılır"]);

E("adres-defteri", "Adres defteri", "pin", "Teslimat ve fatura adreslerinizi yönetin.", [
  ek("adresler", 1, "*Adres Ekle* formunda adres türünü seçin.", { bolge: B(555, 340, 1095, 300),
    vurgu: [{ hedef: "Teslim Fatura", not: "Teslimat veya fatura adresi" }], yaz: { hedef: "Merkez Ofis", metin: "Ankara Depo" } }),
  ek("adresler", 2, "Adres bilgilerini yazıp *kaydedin*.", { bolge: B(555, 460, 1095, 420),
    yaz: { hedef: "Sokak, cadde, bina no", metin: "Ostim OSB 1234. Cadde No:5" }, tikla: { hedef: "Adres Ekle", sonuc: "Adres kaydedildi" } }),
], ["Her tip için bir varsayılan adres seçin", "Varsayılan adres siparişte otomatik gelir", "Proje adresleri ayrı tutulabilir"]);

// ── Finans
E("cari-ekstre", "Cari ekstre", "invoice", "Borç, alacak ve bakiyenizi takip edin.", [
  ek("ekstre", 1, "*Cari Ekstre* üstte bakiyenizi yaşlandırarak gösterir.", { bolge: B(555, 400, 1095, 90),
    vurgu: [{ hedef: "[]Açık Bakiye ₺15.405,55", not: "Toplam açık bakiye" }, { hedef: "[]0–30 gün (Vade 30 gün)", not: "Vadesi 30 gün içinde olan tutar" }] }),
  ek("ekstre-alt", 2, "Tüm *hareketleri* tarih sırasıyla görün.", { bolge: B(555, 200, 1095, 500),
    vurgu: [{ hedef: ["Tarih", "Bakiye"], not: "Borç, alacak ve yürüyen bakiye" }] }),
  ek("ekstre", 3, "Tarih aralığı seçip *Filtrele* butonuna basın.", { bolge: B(1100, 205, 560, 120),
    tikla: { hedef: "Filtrele", sonuc: "Seçilen dönem listelendi" } }),
], ["Tahsilatlar alacak sütununda görünür", "Vade tarihleri her satırda yazar", "Sadakat puanınız da bu sayfada"]);

E("faturalar", "Faturalarım", "doc", "e-Faturalarınızı görüntüleyin ve indirin.", [
  ek("faturalar", 1, "*Faturalarım* sayfası tüm e-faturalarınızı listeler.", { bolge: B(555, 205, 1095, 320),
    vurgu: [{ hedef: "[]FATURA NO TARİH SİPARİŞ TİP TUTAR DURUM", not: "Fatura no, sipariş, tutar ve durum" }] }),
  ek("faturalar", 2, "Faturayı *PDF* olarak indirin.", { bolge: B(555, 320, 1095, 200),
    tikla: { hedef: "PDF", sonuc: "Fatura PDF olarak indirildi" } }),
], ["Faturalar Logo ERP'den otomatik gelir", "Her fatura siparişiyle eşleşir", "Yazdır ile doğrudan çıktı alın"]);

E("analitik", "Satın alma analitiği", "trend", "Harcamanızı rakamlarla analiz edin.", [
  ek("analitik", 1, "*Analitik* sayfası son 12 ayın özetini gösterir.", { bolge: B(555, 320, 1095, 100),
    vurgu: [{ hedef: "[]Toplam Harcama ₺51.320,08", not: "Toplam harcama" }, { hedef: "[]Ortalama Sipariş Tutarı", not: "Sipariş başına ortalama tutar" }] }),
  ek("analitik", 2, "*Aylık trend* ve kategori dağılımını inceleyin.", { bolge: B(555, 410, 1095, 540),
    vurgu: [{ hedef: "[]Aylık Harcama Trendi Son 6 ay", not: "Son 6 ayın harcaması" }, { hedef: "[]Kategori Dağılımı", not: "Hangi kategoriye ne harcandı" }] }),
  ek("analitik-alt", 3, "En çok aldığınız ürünleri *listede* görün.", { bolge: B(1130, 190, 520, 230),
    vurgu: [{ hedef: ["MTSMG925", "ST00282"], not: "En çok sipariş edilen ürünler" }] }),
], ["Toplam indirim tasarrufunuzu gösterir", "Trend bütçe planına yardım eder", "Durum dağılımı süreci özetler"]);

// ── İade, numune, asistan
E("iade-talebi", "İade talebi", "undo", "İade sürecini panelden başlatın ve takip edin.", [
  ek("iadeler", 1, "*İade Taleplerim* sayfası iadelerinizi listeler.", { bolge: B(555, 320, 1095, 180),
    vurgu: [{ hedef: ["Tümü", "Reddedildi"], not: "Duruma göre süzün" }, { hedef: "[]02.10.2026 MTS-2026-0017", not: "Talep alındı durumundaki iade" }] }),
  ek("iadeler", 2, "Yeni iade için *Sipariş seç ve iade aç* butonuna basın.", { bolge: B(555, 205, 1095, 300),
    tikla: { hedef: "Sipariş seç ve iade aç →", sonuc: "Sipariş seçim ekranı açılır" } }),
], ["İade sebebini mutlaka yazın", "Durum: alındı, onaylandı, depoya ulaştı", "Tamamlanan iade cariye yansır"]);

E("numune-talebi", "Numune talebi", "sample", "Ürünü almadan önce ücretsiz deneyin.", [
  ek("numune", 1, "*Numune Taleplerim* sayfası taleplerinizi listeler.", { bolge: B(555, 205, 1095, 420),
    tikla: { hedef: "+ Yeni Numune Talebi", sonuc: "Numune formu açılır" } }),
  ek("numune-yeni", 2, "Formda istediğiniz *ürün kodlarını* yazın.", { bolge: B(620, 340, 690, 580),
    yaz: { hedef: "Virgülle ayırarak yazın. Örn: MTS-1001, MTS-2030", metin: "555204, ST00560" }, tikla: { hedef: "Numune Talep Et", sonuc: "Talebiniz alındı" } }),
], ["Numune ücretsizdir", "Birden çok ürünü virgülle yazın", "Satış ekibi size dönüş yapar"]);

E("ai-asistan", "AI ürün asistanı", "sparkle", "İhtiyacınızı yazın, uygun ürünü asistan önersin.", [
  ek("ai-oneri", 1, "*AI Ürün Asistanı* örnek sorularla başlar.", { bolge: B(555, 205, 1095, 360),
    vurgu: [{ hedef: "[]Örnek sorular:", not: "Örnek sorulardan birini seçebilirsiniz" }] }),
  ek("ai-oneri", 2, "Sorunuzu yazıp *Gönder* butonuna basın.", { bolge: B(555, 380, 1095, 180),
    yaz: { hedef: "~Örn: Otelim için aylık ne kadar kağıt havlu lazım?", metin: "Ofisimiz için hangi el dezenfektanını önerirsiniz?" },
    tikla: { hedef: "Gönder", sonuc: "Asistan ürün önerilerini hazırlar" } }),
], ["Kişi sayısı ve alanı belirtin", "Öneriler doğrudan sepete eklenebilir", "En fazla 500 karakter yazın"]);

// ── Sadakat ve kampanya
E("sadakat", "Sadakat programı", "star", "Her siparişte puan kazanın, kademe atlayın.", [
  ek("sadakat", 1, "*Sadakat Programı* puanınızı ve kademenizi gösterir.", { bolge: B(555, 290, 1095, 330),
    vurgu: [{ hedef: "[]MEVCUT KADEME ALTIN MÜŞTERİ", not: "Altın Müşteri: 49.833 puan" }, { hedef: "[]SONRAKİ Platin", not: "Platin kademesine 167 puan kaldı" }] }),
  ek("sadakat-alt", 2, "*Kademeler* her seviyedeki ayrıcalıkları gösterir.", { bolge: B(555, 660, 1095, 400),
    vurgu: [{ hedef: "[]AÇILDI BRONZ MÜŞTERİ", not: "Bronz, Gümüş, Altın, Platin" }] }),
], ["Puanlar teslimde bakiyeye eklenir", "100 puan 10 ₺ kupon değerindedir", "Kademe yükseldikçe ayrıcalık artar"]);

E("kuponlar", "Kuponlarım", "gift", "Size özel kuponları kullanın.", [
  ek("kuponlar", 1, "*Kuponlarım* sayfası kullanılabilir kuponları listeler.", { bolge: B(555, 320, 1095, 340),
    vurgu: [{ hedef: "SADAKAT10-MUWO14U7", not: "%10 indirim kuponu" }], tikla: { hedef: "Kopyala", sonuc: "Kupon kodu kopyalandı" } }),
  ek("kuponlar", 2, "Kodu sepette *Kupon Kodu* alanına yapıştırın.", { bolge: B(555, 560, 1095, 200),
    vurgu: [{ hedef: "[]Nasıl kullanılır?", not: "Her kupon tek sipariş için geçerli" }] }),
], ["Kuponların son kullanım tarihi yazar", "Kullanılan kuponlar ayrı listelenir", "Sadakat puanını kupona dönüştürün"]);

E("arkadasini-davet-et", "Arkadaşını davet et", "mail", "Firma davet edin, ikiniz de kazanın.", [
  ek("davet", 1, "Davet *üç adımda* tamamlanır.", { bolge: B(555, 220, 1095, 180),
    vurgu: [{ hedef: "[]1 E-posta ile davet gönderin", not: "Önce e-posta ile davet gönderin" }, { hedef: "[]3 İlk siparişte ikisi de %5 indirim!", not: "İlk siparişte ikinize de %5 indirim" }] }),
  ek("davet", 2, "Firmanın *e-postasını* yazıp gönderin.", { bolge: B(555, 410, 1095, 160),
    yaz: { hedef: "firma@ornek.com", metin: "satinalma@ornekfirma.com" }, tikla: { hedef: "Davet Gönder", sonuc: "Davet gönderildi" } }),
], ["Davet ettiğiniz firma kayıt olur", "İlk siparişte iki firma da kazanır", "Gönderilen davetler listede görünür"]);

E("kampanyalar", "Kampanyalar", "percent", "Güncel indirimleri ve paketleri görün.", [
  ek("kampanyalar", 1, "*Sürekli avantajlar* koşul sağlanınca otomatik uygulanır.", { bolge: B(270, 340, 1380, 200),
    vurgu: [{ hedef: "[]Çok Al Az Öde Kademeli", not: "Adet arttıkça birim fiyat düşer" }, { hedef: "[]Peşin Ödeme %2 İndirim", not: "Havale/EFT ile %2 indirim" }, { hedef: "[]Ücretsiz Kargo", not: "₺3.500 üzeri kargo ücretsiz" }] }),
], ["Kupon kodu gerekmez", "Paket fırsatları sepette uygulanır", "Kampanya sayfasını düzenli kontrol edin"]);

// ── İletişim ve ayarlar
E("bildirimler", "Bildirimler", "bell", "Sipariş ve onay hareketlerinden haberdar olun.", [
  ek("bildirimler", 1, "*Bildirimler* sayfası tüm hareketleri listeler.", { bolge: B(555, 205, 1095, 560),
    vurgu: [{ hedef: ["MTS-2026-0018, Sevkiyatta", "Durum güncellendi: Hazırlanıyor → Sevkiyatta"], not: "Durum değişince bildirim gelir" }] }),
  ek("bildirimler", 2, "Bildirimleri *türe göre* süzün.", { bolge: B(555, 205, 1095, 300),
    vurgu: [{ hedef: "~Tüm tipler", not: "Durum, yeni sipariş, iade gibi türler" }], tikla: { hedef: "Tümünü okundu işaretle", sonuc: "Tüm bildirimler okundu" } }),
], ["Yeni bildirim zil simgesinde görünür", "E-posta tercihlerini ayarlardan seçin", "Onay bildirimleri önceliklidir"]);

E("destek-talebi", "Destek talebi", "chat", "Sorununuzu yazın, destek ekibi dönsün.", [
  ek("destek", 1, "*Destek Taleplerim* sayfasında yeni talep oluşturun.", { bolge: B(555, 205, 1095, 480),
    tikla: { hedef: "+ Yeni Destek Talebi", sonuc: "Talep formu açılır" } }),
  ek("destek-yeni", 2, "*Konuyu* ve önceliği seçin.", { bolge: B(555, 340, 1095, 420),
    yaz: { hedef: "Destek talebinizin konusunu girin", metin: "Fatura adresi değişikliği" }, vurgu: [{ hedef: "Düşük Normal Yüksek Acil", not: "Öncelik dönüş süresini belirler" }] }),
  ek("destek-yeni", 3, "Açıklamayı yazıp *Talebi Oluştur* butonuna basın.", { bolge: B(555, 340, 1095, 420),
    tikla: { hedef: "Talebi Oluştur", sonuc: "Destek talebiniz oluşturuldu" } }),
], ["Talebin durumunu listeden izleyin", "Acil durumda telefonla da ulaşın", "Açıklamayı ayrıntılı yazın"]);

E("hesap-ayarlari", "Hesap ayarları", "gear", "Profilinizi, şifrenizi ve bildirimlerinizi yönetin.", [
  ek("ayarlar", 1, "*Profil* bölümünde ad ve telefonunuzu güncelleyin.", { bolge: B(555, 300, 1095, 260),
    vurgu: [{ hedef: ["Ad Soyad", "Telefon"], not: "Ad, telefon ve e-posta bilgileri" }] }),
  ek("ayarlar-alt", 2, "*Şifrenizi* güvenlik bölümünden değiştirin.", { bolge: B(555, 200, 1095, 300),
    vurgu: [{ hedef: "En az 8 karakter, 1 harf ve 1 rakam içermeli.", not: "En az 8 karakter, harf ve rakam" }], tikla: { hedef: "Şifreyi Güncelle", sonuc: "Şifre güncellendi" } }),
  ek("ayarlar-alt", 3, "Hangi *bildirimleri* alacağınızı seçin.", { bolge: B(555, 500, 1095, 300),
    vurgu: [{ hedef: "[]Bildirim Tercihleri", not: "Sipariş, onay, kampanya bildirimleri" }] }),
], ["KDV muafiyeti talebini buradan gönderin", "Şifrenizi düzenli değiştirin", "KVKK veri talebiniz de bu sayfada"]);

E("yardim-merkezi", "Yardım merkezi", "help", "Sık sorulan soruların cevabını bulun.", [
  ek("yardim", 1, "*Yardım Merkezi* konuları başlıklara ayırır.", { bolge: B(500, 220, 920, 620),
    vurgu: [{ hedef: "[]Sipariş ve Fatura Siparişlerimi", not: "Sipariş ve fatura soruları" }, { hedef: "[]Teslimat ve Kargo", not: "Teslimat ve kargo soruları" }] }),
  ek("yardim", 2, "Aradığınız konuyu *arama kutusuna* yazın.", { bolge: B(500, 220, 920, 300),
    yaz: { hedef: "Konu veya anahtar kelime ara…", metin: "onay zinciri" } }),
], ["Cevap bulamazsanız destek talebi açın", "Kurumsal hat: +90 543 683 57 65", "Hafta içi 08:00–18:00 hizmet"]);

// ── Çıktı: numaralı eğitimler + sıradaki eğitim bağlantısı
export default LISTE.map((v, i) => {
  const no = String(i + 1).padStart(2, "0");
  return {
    id: `egitim-${no}-${v.ad}`, tur: "egitim", baslik: v.baslik, etiket: `Eğitim ${no} · ${v.baslik}`, tohum: i + 1,
    sahneler: [
      { tip: "kapak", ust: `Eğitim ${no}`, baslik: v.baslik, ikon: v.ikon, alt: v.alt, sure: "1 dakika" },
      ...v.sahneler,
      { tip: "ipucu", baslik: "*Unutmayın*", maddeler: v.ipucu.map((m, j) => [["check", "bolt", "star", "shield"][j % 4], m]) },
      { tip: "son", sonraki: LISTE[i + 1] ? LISTE[i + 1].baslik : null },
    ],
  };
});
