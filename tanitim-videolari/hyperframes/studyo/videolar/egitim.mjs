// Panel eğitim seti. Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı vurgulanır.
// Hedefler: "Metin" (birebir), "~parça" (içerir), "[]metin" (o metni içeren en küçük kutu), "#2" (ikinci eşleşme), dizi (birleşim).
// Kayıt değiştiren adımlar (sepete ekle, onayla, kaydet) panelde yapılmaz; motor tıklamayı ve sonucu canlandırır.
// Metinler, hedefler ve kadrajlar 9 Ekim 2026 çekimlerinin öğe haritalarına göre güncellendi (sürüm 1 düzeni korunur).
const LISTE = [];
// son: kapanış ekranındaki tek eylem cümlesi ("Şimdi … açın.")
const E = (ad, baslik, ikon, alt, sahneler, ipucu, son) => LISTE.push({ ad, baslik, ikon, alt, sahneler, ipucu, son });
const ek = (ekran, adim, metin, ayar) => ({ tip: "ekran", ekran, adim, metin, ...ayar });
const B = (x, y, w, h) => ({ x, y, w, h });

// Gri bantla kapatılan alanlar (CSS px)
const SAAT = B(644, 3, 152, 26);                      // üst şeritteki destek saatleri ("Pzt-Cum 08:00-18:00")
const BANNER_YAZI = B(283, 176, 124, 518);            // arama listesinin solunda kalan, geçişte yakalanmış kesik banner yazısı
const MARKA_BOS = B(298, 606, 231, 22);               // kategori filtresinde adı boş marka satırı
const TARIH = [B(1466, 313, 156, 30), B(601, 353, 131, 30)];   // Siparişlerim tarih kutuları ("mm/dd/yyyy" yer tutucusu)
const TARIH_LISTE = [B(1300, 309, 160, 34), B(1466, 309, 160, 34)];   // İade ve numune listelerindeki tarih kutuları ("mm/dd/yyyy")
const BASLANGIC = B(1266, 205, 133, 22), BITIS = B(1434, 205, 133, 22);   // Cari Ekstre tarih kutuları
const GECMIS_HAZIR = ["[]Geçmiş 05.10.2026", "~DEMO-SHOWCASE-PAY"];      // sipariş geçmişindeki ham durum kodları ve ödeme kodu
const GECMIS_ONAY = ["[]Geçmiş 06.10.2026"];
const DOSYA_EN = B(645, 722, 160, 20);              // dosya kutusundaki İngilizce tarayıcı yazısı ("Choose File No file chosen")
const SAATLER_YARDIM = "Müşteri hizmetlerimiz hafta içi 09:00–18:00 hizmetinizdedir.";

// ── Başlangıç
E("giris", "Panele giriş", "key", "Kurumsal hesabınızla panele güvenle girin.", [
  ek("giris", 1, "Giriş sayfasında *e-posta* adresinizi yazın.", { bolge: B(500, 290, 920, 500),
    yaz: { hedef: "ornek@firma.com", metin: "satinalma@firmaniz.com" } }),
  ek("giris", 2, "Şifrenizi yazıp *Giriş Yap* butonuna basın.", { bolge: B(500, 290, 920, 500),
    vurgu: [{ hedef: "••••••••", not: "Şifreniz noktalarla gizlenir" }, { hedef: "Beni hatırla", not: "Bu cihazda oturumunuz açık kalır" }],
    tikla: { hedef: "Giriş Yap#2", sonuc: "Özet ekranı açılır" } }),
  ek("giris", 3, "Şifrenizi unuttuysanız *yeni şifre* isteyin.", { bolge: B(500, 290, 920, 500),
    vurgu: [{ hedef: "Şifremi unuttum", not: "E-postanıza sıfırlama bağlantısı gelir" }, { hedef: "Kurumsal hesap aç →", not: "Hesabı olmayan firmalar buradan kayıt olur" }] }),
], ["E-postanızı ve şifrenizi yazıp Giriş Yap'a basın.", "Şifrenizi unutursanız Şifremi unuttum'a basın.", "Ortak bilgisayarda Beni hatırla kutusunu boş bırakın."],
"Şimdi panele *giriş* yapın.");

E("ozet", "Özet ekranı", "chart", "Hesabınızın durumunu tek bakışta görün.", [
  ek("ozet", 1, "Panele girdiğinizde ilk *Özet* ekranı açılır.", { bolge: B(555, 205, 1095, 300),
    vurgu: [{ hedef: "[]BU AY HARCAMA", not: "Bu ayki toplam harcamanız burada yazar" },
      { hedef: ["Açık bakiye", "₺15.405,55"], not: "Ödenmemiş bakiyeniz ve vadeniz burada yazar" },
      { hedef: "[]KREDİ LİMİTİ KULLANIMI", not: "Kalan kredi limitiniz burada yazar" }] }),
  ek("ozet", 2, "Onay bekleyen siparişleri *tek tıkla* açın.", { bolge: B(555, 205, 1095, 300),
    vurgu: [{ hedef: "[]ONAY BEKLEYEN", not: "Bekleyen onayların sayısı bu kartta yazar" }],
    tikla: { hedef: "Şimdi incele →", sonuc: "Onaylarım sayfası açılır" } }),
  ek("ozet", 3, "Harcama trendini ve son siparişlerinizi inceleyin.", { bolge: B(555, 505, 1095, 540),
    vurgu: [{ hedef: "[]Aylık Harcama Trendi", not: "Grafik son 12 ayın harcamasını gösterir" },
      { hedef: "[]Kategori Kırılımı", not: "Harcama kategorilere göre ayrılır" },
      { hedef: ["Son Siparişler", "₺10.319,89"], not: "Son siparişler durumlarıyla listelenir" }] }),
], ["Güne Özet ekranıyla başlayın.", "Bekleyen onayları Şimdi incele ile açın.", "Son siparişlerin durumunu listede izleyin."],
"Şimdi *Özet* ekranını açın.");

// ── Ürün bulma ve sipariş
// Ana sayfanın banner'ı çekimde geçiş anında yakalanmış (yazılar kesik): arama kutusu Tüm Ürünler sayfasında gösterilir
E("urun-arama", "Ürün arama", "search", "Aradığınız ürünü arama kutusuyla bulun.", [
  ek("katalog", 1, "Üstteki *arama kutusuna* ürün adını yazın.", { bolge: B(285, 40, 1100, 470), bolgeD: B(285, 32, 880, 948), ortu: [SAAT],
    yaz: { hedef: "Ürün, SKU veya barkod...", metin: "kağıt havlu" } }),
  ek("arama", 2, "Sonuçlar siz *yazarken* listelenir.", { bolge: B(380, 80, 760, 520), bolgeD: B(407, 40, 700, 740), ortu: [SAAT, BANNER_YAZI],
    vurgu: [{ hedef: "Fotoselli/Sensörlü Kağıt Havlu 4 kg 555204 ÜRÜN", not: "Ürün adı ve ürün kodu birlikte görünür" }],
    tikla: { hedef: "\"kağıt havlu\" için tüm sonuçları gör", sonuc: "Tüm sonuçlar listelenir" } }),
  ek("katalog", 3, "Ürün *kodu* veya *barkod* ile de arayabilirsiniz.", { bolge: B(285, 40, 1100, 470), bolgeD: B(285, 32, 880, 948), ortu: [SAAT],
    yaz: { hedef: "Ürün, SKU veya barkod...", metin: "555204" } }),
], ["Ürün adının bir kısmını yazın.", "Tüm sonuçlar için listenin son satırına basın.", "Ürün kodunu ya da barkodu da yazabilirsiniz."],
"Şimdi bir ürünü *arayın.*");

E("kategoriler", "Kategoriler ve filtreler", "filter", "Ürünleri kategoriye göre süzün.", [
  ek("kategori", 1, "Üst menüden bir *kategori* seçin.", { bolge: B(270, 150, 1380, 420), ortu: [SAAT, MARKA_BOS],
    vurgu: [{ hedef: ["Kağıt Ürünleri", "Mutfak, Bulaşık & Gıda Servisi"], not: "Ana kategoriler bu menüde durur" },
      { hedef: ["75", "Fiyat aralığı"], not: "Ürün sayısı, marka ve fiyat aralığı burada yazar" }] }),
  ek("kategori", 2, "Sol taraftaki *filtrelerle* sonuçları daraltın.", { bolge: B(270, 300, 700, 760), ortu: [SAAT, MARKA_BOS],
    vurgu: [{ hedef: ["Alt Kategoriler", "Endüstriyel Temizlik Rulosu"], not: "Alt kategoriye göre süzün" },
      { hedef: ["Marka ara...", "Papilion 1"], not: "Markaya göre süzün" }] }),
  ek("kategori", 3, "Ürünleri *fiyata* veya ada göre sıralayın.", { bolge: B(550, 300, 1100, 300), ortu: [SAAT, MARKA_BOS],
    vurgu: [{ hedef: ["Önerilen", "A → Z"], not: "Fiyat düğmeleri listeyi fiyata göre sıralar" }] }),
], ["Önce üst menüden kategori seçin.", "Listeyi marka ve alt kategoriyle daraltın.", "Filtreleri Temizle düğmesiyle sıfırlayın."],
"Şimdi *Kağıt Ürünleri* kategorisini açın.");

// Bu hesapta "Liste fiyatı ile görüntülenmektedir" yazar: "size özel fiyat" denmez
E("urun-sayfasi", "Ürün sayfası", "box", "Fiyatı, stoğu ve kargo süresini tek sayfada görün.", [
  ek("urun", 1, "Ürün sayfasında *KDV hariç* fiyatı görün.", { bolge: B(810, 200, 840, 460),
    vurgu: [{ hedef: ["Liste Fiyatı (KDV Hariç)", "KDV dahil ₺504,00"], not: "KDV dahil fiyat hemen altında yazar" },
      { hedef: "Bu üründen 1 adet alırsan +4 puan kazanırsın", not: "Her koli 4 sadakat puanı kazandırır" }] }),
  ek("urun", 2, "*Stok* ve *kargo* bilgisini kontrol edin.", { bolge: B(810, 740, 500, 220), bolgeD: B(815, 600, 500, 540),
    vurgu: [{ hedef: "Stok: 88 adet · 1 iş günü içinde kargo", not: "Stok adedi ve kargo süresi burada yazar" }] }),
  // urun-alt çekiminde Sepete Ekle düğmesi sabit üst menünün altında kalıyor: düğme ürün sayfasının ilk çekiminde gösterilir
  ek("urun", 3, "Adedi seçip *Sepete Ekle* butonuna basın.", { bolge: B(810, 740, 500, 220), bolgeD: B(815, 600, 500, 540),
    tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" } }),
], ["KDV dahil fiyatı liste fiyatının altında okuyun.", "Sepete eklemeden önce stok adedine bakın.", "Kazanacağınız puanı fiyat kutusunda görün."],
"Şimdi bir *ürün sayfası* açın.");

E("kademeli-iskonto", "Kademeli iskonto", "percent", "Çok alın, birim fiyatınız düşsün.", [
  ek("urun", 1, "*FIRSAT* tablosu adet arttıkça düşen fiyatı gösterir.", { bolge: B(810, 600, 840, 300),
    vurgu: [{ hedef: "[]FIRSAT Kademeli iskonto", not: "5 koliden %5, 30 koliden %8, 40 koliden %10 indirim alırsınız" }] }),
  ek("urun", 2, "*Toplu Alım Hesaplayıcı* ile toplam tutarı görün.", { bolge: B(270, 620, 560, 300),
    vurgu: [{ hedef: B(292, 655, 173, 88), not: "Adedi yazın ya da hazır adetlerden seçin" },   // Adet kutusu ve 5 · 30 · 40 · 80 · 120 düğmeleri
      { hedef: "[]Birim Fiyat ₺420,00 Ara Toplam", not: "Birim fiyat ve KDV dahil toplam burada yazar" }] }),
], ["Kademe tablosunda indirim oranını okuyun.", "Toplam tutarı hesaplayıcıda görün.", "İndirim sepette kendiliğinden uygulanır."],
"Şimdi *kademe tablosunu* inceleyin.");

E("hizli-siparis", "Hızlı sipariş", "bolt", "Ürün koduyla tek ekranda toplu sipariş verin.", [
  ek("hizli", 1, "*Hızlı Sipariş* ekranında ürün kodunu yazın.", { bolge: B(555, 205, 1095, 340),
    yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" }, vurgu: [{ hedef: B(583, 316, 288, 72), not: "Her satıra bir ürün ve miktar yazın" }] }),
  ek("hizli", 2, "Yeni ürün için *Satır Ekle* butonunu kullanın.", { bolge: B(555, 205, 1095, 340),
    vurgu: [{ hedef: "Satır Ekle", not: "En fazla 100 satır ekleyebilirsiniz" }, { hedef: "CSV Yapıştır", not: "Hazır listenizi tek seferde yapıştırın" }] }),
  ek("hizli", 3, "Listeyi *doğrulayıp* sepete ekleyin.", { bolge: B(555, 205, 1095, 340),
    vurgu: [{ hedef: "Doğrula", not: "Kodları sepete eklemeden önce kontrol edin" }],
    tikla: { hedef: "Sepete Ekle", sonuc: "Ürünler sepete eklendi" } }),
], ["Ürün kodunu biliyorsanız bu ekranı kullanın.", "Uzun listeyi CSV Yapıştır ile ekleyin.", "Sepete eklemeden önce Doğrula'ya basın."],
"Şimdi *Hızlı Sipariş* sayfasını açın.");

// ── Siparişler
E("siparislerim", "Siparişlerim", "list", "Tüm siparişlerinizi tek listede takip edin.", [
  ek("siparisler", 1, "*Siparişlerim* sayfası firmanızın tüm siparişlerini listeler.", { bolge: B(555, 500, 1095, 300), ortu: TARIH,
    vurgu: [{ hedef: "[]MTS-2026-0026 06.10.2026 Zeynep Kaya", not: "Her satırda açan kişi, durum ve tutar yazar", kaydir: true }] }),
  ek("siparisler", 2, "*Filtrelerle* aradığınız siparişi bulun.", { bolge: B(555, 320, 1095, 170), ortu: TARIH,
    vurgu: [{ hedef: "Sipariş no veya PO ara...", not: "Sipariş no veya PO ile arayın" },
      { hedef: "~Tüm Durumlar", not: "Duruma göre süzün" }, { hedef: ["Hızlı:", "Teslim"], not: "Tek tıkla duruma göre süzün" }] }),
  ek("siparisler", 3, "Listeyi *Excel'e* aktarın.", { bolge: B(555, 205, 1095, 300), ortu: TARIH,
    tikla: { hedef: "Excel'e Aktar", sonuc: "Liste Excel dosyasına aktarılır" } }),
], ["Her siparişin durumunu listede izleyin.", "Siparişi numarasıyla ya da PO ile arayın.", "Rapor için listeyi Excel'e aktarın."],
"Şimdi *Siparişlerim* sayfasını açın.");

E("siparis-detayi", "Sipariş detayı", "doc", "Siparişin hangi adımda olduğunu görün.", [
  ek("siparis-hazirlaniyor", 1, "Sipariş detayında *durum çubuğunu* izleyin.", { bolge: B(555, 225, 1095, 380),
    // Durum çubuğunun tamamı ~1000 px (yakınlaşma olmuyor): yalnız şu anki adım ve iki komşusu
    vurgu: [{ hedef: B(1138, 386, 330, 36), not: "Sipariş şu an Hazırlanıyor adımında" },
      { hedef: ["Sıradaki adım", "Depo personeli ürünleri toplayıp paketliyor."], not: "Sıradaki işi bu kutuda okuyun" }] }),
  ek("siparis-hazirlaniyor-alt", 2, "*Sipariş kalemlerini* ve tutarı kontrol edin.", { bolge: B(555, 200, 1095, 380), ortu: GECMIS_HAZIR,
    vurgu: [{ hedef: "[]ÜRÜN SKU ADET BİRİM TUTAR", not: "Her satırda kod, adet ve birim fiyat yazar" }, { hedef: "[]Toplam ₺2.925,48", not: "İndirim, KDV ve kargo toplamın üstünde yazar" }] }),
  ek("siparis-hazirlaniyor", 3, "Siparişi *yazdırın* ya da şablona kaydedin.", { bolge: B(555, 205, 1095, 260),
    vurgu: [{ hedef: "Şablona Kaydet", not: "Aynı siparişi tekrar vermek için saklayın" }], tikla: { hedef: "Yazdır / PDF", sonuc: "Sipariş belgesi açılır" } }),
], ["Siparişin adımını durum çubuğunda izleyin.", "Kalemleri ve toplam tutarı kontrol edin.", "Sık verdiğiniz siparişi şablona kaydedin."],
"Şimdi bir *sipariş detayı* açın.");

E("onay-bekleyen-siparis", "Onay bekleyen sipariş", "approve", "Onay zincirindeki siparişi takip edin.", [
  ek("siparis-onay", 1, "Bu sipariş *şirket içi onay* bekliyor.", { bolge: B(555, 330, 1095, 350), ortu: GECMIS_ONAY,
    vurgu: [{ hedef: ["Sıradaki adım", "~Şirket içi onay zincirinde"], not: "Siparişi sıradaki onaylayıcı inceleyecek" }] }),
  ek("siparis-onay", 2, "*Onay zincirinde* kimin beklediğini görün.", { bolge: B(555, 680, 1095, 360), ortu: GECMIS_ONAY,
    vurgu: [{ hedef: "[]Onay Zinciri Seviye 2", not: "Bekleyen kişinin adı burada yazar" }] }),
  ek("siparis-onay", 3, "Gerekirse siparişi *iptal* edebilirsiniz.", { bolge: B(555, 330, 1095, 350), ortu: GECMIS_ONAY,
    vurgu: [{ hedef: "Siparişi İptal Et", not: "Sipariş işleme alınmadan iptal edilebilir" }] }),
], ["Sipariş onaylayıcılara sırayla gider.", "Bekleyen kişiyi Onay Zinciri bölümünde görün.", "Hazırlık başladıysa iptal için destek ekibine ulaşın."],
"Şimdi onay bekleyen bir *siparişi* açın.");

E("odeme-bekleyen-siparis", "Ödeme bekleyen sipariş", "wallet", "Siparişin ödemesini tamamlayın.", [
  ek("siparis-odeme", 1, "Sipariş durumunda *Ödeme Bekleniyor* yazar.", { bolge: B(555, 330, 1095, 350),
    vurgu: [{ hedef: "Ödeme Bekleniyor", not: "Ödeme hesaba geçince sipariş hazırlığa alınır" }] }),
  ek("siparis-odeme", 2, "*Sıradaki adım* ne yapmanız gerektiğini söyler.", { bolge: B(555, 330, 1095, 350),
    vurgu: [{ hedef: ["Sıradaki adım", "~Ödeme tamamlanması bekleniyor"], not: "Kart sorununda farklı kart ya da havale deneyin", kaydir: true }] }),
  // Ekranın altındaki kesik "Havale açıklamasına yazınız" satırı gri bantla kapatılır
  ek("siparis-odeme", 3, "Havale açıklamasına *sipariş numarasını* yazın.", { bolge: B(1000, 640, 920, 410), bolgeD: B(1100, 560, 560, 520), ortu: [B(1330, 1050, 310, 30)],
    vurgu: [{ hedef: "Açıklama alanına sipariş numaranızı yazmazsanız ödemenizin eşleştirilmesi gecikir.", not: "Ödemeniz bu numarayla siparişe bağlanır" }] }),
], ["Havale açıklamasına sipariş numarasını yazın.", "Ödeme hesaba geçince sipariş hazırlığa alınır.", "Havale ile ödeyip %2 indirim alın."],
"Şimdi *Siparişlerim* sayfasını açın.");

// ── Tekrarlayan alımlar
E("periyodik-siparisler", "Periyodik siparişler", "repeat", "Düzenli siparişleri otomatiğe bağlayın.", [
  ek("periyodik", 1, "*Periyodik Siparişler* sayfası şablonlarınızı listeler.", { bolge: B(555, 205, 1095, 380),
    vurgu: [{ hedef: "[]Aylık periyodik sipariş", not: "Bu şablon her ayın 1. günü sipariş oluşturur" }, { hedef: "[]Aylık Temizlik Sarf Aboneliği", not: "Sonraki sipariş tarihi kartta yazar" }] }),
  ek("periyodik", 2, "Yeni bir şablon için *Yeni Şablon* butonuna basın.", { bolge: B(555, 205, 1095, 380),
    tikla: { hedef: "~Yeni Şablon", sonuc: "Yeni şablon formu açılır" } }),
], ["Sonraki sipariş tarihini kartta kontrol edin.", "Şablonu kalem simgesiyle düzenleyin.", "Yeni şablon için Yeni Şablon düğmesine basın."],
"Şimdi *Periyodik Siparişler* sayfasını açın.");

E("periyodik-sablon", "Periyodik şablon oluşturma", "calendar", "Bir kez kurun, sistem her ay tekrarlasın.", [
  ek("periyodik-yeni", 1, "Şablona bir *ad* verin.", { bolge: B(555, 300, 1095, 360),
    yaz: { hedef: "Örn: Aylık Temizlik Paketi", metin: "Aylık Ofis Temizliği" } }),
  ek("periyodik-yeni", 2, "Sipariş *sıklığını* ve günü seçin.", { bolge: B(555, 300, 1095, 360),
    vurgu: [{ hedef: ["Haftalık", "Aylık"], not: "Haftalık, iki haftada bir ya da aylık seçin" }, { hedef: "Ayın Günü (1-28)", not: "Sipariş ayın bu gününde oluşur" }] }),
  ek("periyodik-yeni", 3, "Ürünleri ekleyip *Şablonu Kaydet* butonuna basın.", { bolge: B(555, 640, 1095, 400),
    yaz: { hedef: "Ürün ara (ad veya kod)", metin: "ST00560" }, tikla: { hedef: "Şablonu Kaydet", sonuc: "Şablon kaydedildi" } }),
], ["Sipariş gününü 1 ile 28 arasında seçin.", "Ödeme yöntemini ve teslimat adresini formda seçin.", "Ürünleri ekleyip Şablonu Kaydet düğmesine basın."],
"Şimdi ilk *şablonunuzu* oluşturun.");

E("siparis-listeleri", "Sipariş listeleri", "list", "Sık aldıklarınızı listeye kaydedin.", [
  ek("listeler", 1, "*Sipariş Listelerim* sayfası kayıtlı listelerinizi gösterir.", { bolge: B(555, 340, 1095, 220),
    vurgu: [{ hedef: ["Tümü", "Firma"], not: "Listeler kişisel ve firma olarak ayrılır" }, { hedef: "[]Üretim Hattı Standart Set", not: "Bu firma listesi 5 ürün içerir" }] }),
  ek("listeler", 2, "Listeyi *tek tıkla* sepete ekleyin.", { bolge: B(555, 340, 1095, 220),
    tikla: { hedef: "Sepete Ekle#2", sonuc: "5 ürün sepete eklendi" } }),
  ek("listeler", 3, "Yeni liste için *Yeni Liste* butonuna basın.", { bolge: B(555, 205, 1095, 360),
    vurgu: [{ hedef: "Yeni Liste", not: "Listeye istediğiniz ürünleri ekleyin" }] }),
], ["Ortak listeleri Firma sekmesinde bulun.", "Kayıtlı listeyi Sepete Ekle ile ekleyin.", "Listeyi Düzenle düğmesiyle güncel tutun."],
"Şimdi *Sipariş Listelerim* sayfasını açın.");

E("favoriler", "Favorilerim", "heart", "Sık aldığınız ürünlere hızlı ulaşın.", [
  ek("favoriler", 1, "*Favorilerim* sayfası işaretlediğiniz ürünleri gösterir.", { bolge: B(555, 340, 1095, 500),
    vurgu: [{ hedef: "[]SELPAK Ürün Kodu: 7906666", not: "Favori ürün fiyatıyla birlikte görünür" }] }),
  ek("favoriler", 2, "Ürünü buradan *doğrudan* sepete ekleyin.", { bolge: B(555, 340, 1095, 500),
    tikla: { hedef: "Ekle", sonuc: "Ürün sepete eklendi" } }),
], ["Sık aldığınız ürünleri favori olarak işaretleyin.", "Favorileri fiyatlarıyla birlikte görün.", "Favoriden tek tıkla sepete ekleyin."],
"Şimdi *Favorilerim* sayfasını açın.");

// ── Fiyat ve teklif
E("fiyat-teklifleri", "Fiyat teklifleri", "tag", "Özel fiyat isteyin, teklifinizi takip edin.", [
  ek("teklifler", 1, "*Fiyat Tekliflerim* sayfası tüm taleplerinizi listeler.", { bolge: B(555, 205, 1095, 320),
    vurgu: [{ hedef: ["TKF-2026-0003", "Teklif Hazır#2"], not: "Bu teklifin fiyatı hazırlandı", kaydir: true }, { hedef: ["TKF-2026-0004", "Gönderildi"], not: "Bu teklifin fiyatı henüz hazırlanıyor", kaydir: true }],
    ortu: ["[]TKF-2026-0002"] }),
  ek("teklifler", 2, "Yeni talep için *Yeni Teklif Talebi* butonuna basın.", { bolge: B(555, 205, 1095, 320),
    tikla: { hedef: "Yeni Teklif Talebi", sonuc: "Teklif formu açılır" } }),
], ["Durumda Teklif Hazır yazınca teklifi açın.", "Hazır teklifi Teklifi Kabul Et ile onaylayın.", "Teklifi son geçerlilik tarihinden önce kabul edin."],
"Şimdi *Fiyat Tekliflerim* sayfasını açın.");

E("yeni-teklif", "Yeni fiyat teklifi", "edit", "Ürün ve miktarı yazın, fiyatı MTS hazırlasın.", [
  ek("teklif-yeni", 1, "Ürün kodunu ve *miktarı* yazın.", { bolge: B(555, 320, 1095, 400),
    yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" }, vurgu: [{ hedef: "Özel not...", not: "Her satıra özel not ekleyebilirsiniz" }] }),
  ek("teklif-yeni", 2, "Notunuzu yazıp *Teklif Oluştur* butonuna basın.", { bolge: B(555, 320, 1095, 400),
    yaz: { hedef: "Örn: 3 farklı depoya teslimat olacak, ayrı fiyat verebilir misiniz?", metin: "Aylık 200 koli alım planlıyoruz." },
    tikla: { hedef: "Teklif Oluştur", sonuc: "Teklif talebiniz iletildi" } }),
], ["Birden çok ürünü tek talepte isteyin.", "Teslimat ve adet bilgisini nota yazın.", "Talebinizi Teklif Oluştur ile gönderin."],
"Şimdi ilk *teklif talebinizi* oluşturun.");

E("toplu-alim-teklifi", "Toplu alım teklifi", "package", "500+ adetlik alımlar için teklif isteyin.", [
  ek("teklif-iste", 1, "*Teklif İste* sayfasında firma bilgilerinizi yazın.", { bolge: B(620, 220, 690, 520), ortu: [DOSYA_EN],
    vurgu: [{ hedef: ["Firma Ünvanı", "E-posta"], not: "Firma ve iletişim bilgilerinizi yazın" }] }),
  ek("teklif-iste", 2, "Ürün, *adet* ve süreyi açıklayın.", { bolge: B(620, 560, 690, 300), ortu: [DOSYA_EN],
    yaz: { hedef: "~Örn: 6 ay boyunca aylık 200 koli", metin: "12 ay boyunca aylık 150 koli kağıt havlu" },
    tikla: { hedef: "Teklif Talep Et", sonuc: "Talebiniz satış ekibine iletildi" } }),
], ["Adedi ve süreyi açıkça yazın.", "Varsa ek dosyayı forma ekleyin.", "Teklifi satış ekibi hazırlar."],
"Şimdi *Teklif İste* sayfasını açın.");

// Bu hesapta "Standart fiyat listesi uygulanıyor" yazar: "fiyat listesi firmanıza özel" denmez
E("sozlesme-fiyat", "Sözleşme ve fiyat", "invoice", "Fiyat listenizi ve ödeme koşullarınızı görün.", [
  ek("sozlesme", 1, "*Sözleşme & Fiyat* sayfası anlaşma koşullarınızı gösterir.", { bolge: B(555, 320, 1095, 420),
    vurgu: [{ hedef: ["Fiyat Listesi", "Standart fiyat listesi uygulanıyor"], not: "Hesabınızda uygulanan fiyat listesi burada yazar" },
      { hedef: "[]Kredi Limiti Limit", not: "Limit ve kullanılabilir tutar burada yazar" }, { hedef: ["Ödeme Koşulları", "30 gün vadeli ödeme"], not: "Ödemeniz 30 gün vadelidir" }] }),
  ek("sozlesme", 2, "*Otomatik onay eşiği* küçük siparişleri hızlandırır.", { bolge: B(555, 520, 1095, 220),
    vurgu: [{ hedef: "[]Otomatik Onay Eşiği", not: "₺5.000 altındaki siparişler doğrudan onaylanır" }] }),
], ["Fiyat listenizi bu sayfada kontrol edin.", "Kullanılabilir kredi limitinizi izleyin.", "Faturanızı 30 gün içinde ödeyin."],
"Şimdi *Sözleşme & Fiyat* sayfasını açın.");

// ── Onay ve kontrol
E("onaylarim", "Onaylarım", "approve", "Onayınızı bekleyen siparişleri karara bağlayın.", [
  ek("onaylarim", 1, "*Onaylarım* sayfası onayınızı bekleyen siparişleri listeler.", { bolge: B(555, 320, 1095, 260),
    vurgu: [{ hedef: ["Sipariş tutarı: ₺1.779,56", "Açan: Zeynep Kaya · 06.10.2026 · Departman: İdari İşler"], not: "Kartta tutar, açan kişi ve departman yazar" }, { hedef: ["Onay seviyesi", "Seviye 1"], not: "Siparişin onay seviyesi sağ üstte yazar" }] }),
  ek("onaylarim", 2, "Siparişi *onaylayın*, revize isteyin ya da reddedin.", { bolge: B(555, 320, 1095, 260),
    vurgu: [{ hedef: ["Onayla", "Reddet"], not: "Revize için Geri Yolla siparişi geri gönderir" }], tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } }),
], ["Kartta tutarı ve ürünleri kontrol edin.", "Değişiklik isterseniz Revize için Geri Yolla'ya basın.", "Onaylanan sipariş MTS onayına geçer."],
"Şimdi *Onaylarım* sayfasını açın.");

E("onay-kurallari", "Onay kuralları", "shield", "Hangi siparişin kime düşeceğini belirleyin.", [
  ek("onay-kurallari", 1, "*Onay Kuralları* sayfası tanımlı kuralları listeler.", { bolge: B(555, 205, 1095, 480),
    vurgu: [{ hedef: ["10.000 TL Üzeri Siparişler", "Onay zinciri: 1. Can Çatma"], not: "Kural tutar sınırını ve onaylayıcıyı gösterir" },
      { hedef: ["100.000 TL Üzeri Siparişler", "Tutar: ₺100.000,00 – ∞"], not: "Her tutar sınırı için ayrı kural kurulur" }] }),
  ek("onay-kurallari", 2, "Yeni kural için *Yeni Kural* butonuna basın.", { bolge: B(555, 205, 1095, 480),
    tikla: { hedef: "+ Yeni Kural", sonuc: "Yeni kural formu açılır" } }),
], ["Kuralı tutara ve departmana göre kurun.", "Her kurala en fazla 3 seviye onaylayıcı ekleyin.", "Otomatik onay eşiğinin altındaki sipariş onay beklemez."],
"Şimdi *Onay Kuralları* sayfasını açın.");

E("yeni-onay-kurali", "Yeni onay kuralı", "edit", "Tutar eşiği ve onaylayıcıları seçin.", [
  ek("onay-kural-yeni", 1, "Kurala bir *ad* ve tutar aralığı verin.", { bolge: B(555, 300, 1095, 260),
    yaz: { hedef: "Örn: 10.000 ₺ üzeri siparişler", metin: "25.000 ₺ üzeri siparişler" }, vurgu: [{ hedef: ["Alt Tutar (₺) (opsiyonel)", "sınırsız"], not: "Alt ve üst tutarı burada yazın" }] }),
  ek("onay-kural-yeni", 2, "*Onaylayıcı zincirini* seviye seviye kurun.", { bolge: B(555, 460, 1095, 460),
    vurgu: [{ hedef: "[]Onaylayıcı Zinciri", not: "Sipariş bu kişileri sırayla bekler" }, { hedef: ["Öncelik", "Kural aktif"], not: "Birden çok kural eşleşirse yüksek öncelik kazanır" }] }),
], ["Departman seçerseniz kural yalnız o departmana uygulanır.", "En fazla 3 seviye onaylayıcı seçin.", "Önemli kurala yüksek öncelik verin."],
"Şimdi ilk *onay kuralınızı* kurun.");

E("kullanicilar", "Kullanıcılar ve yetkiler", "users", "Ekibinizi ve yetkilerini yönetin.", [
  ek("kullanicilar", 1, "*Kullanıcılar & Yetkiler* sayfası ekibinizi listeler.", { bolge: B(555, 300, 1095, 340),
    vurgu: [{ hedef: ["Rol", "Departman", "Görüntüleyici"], not: "Her kişinin rolü ve departmanı burada yazar" }, { hedef: ["Onay Limiti", "Yetki", "19 yetki"], not: "Kişinin onay limiti ve yetki sayısı burada yazar" }] }),
  ek("kullanicilar", 2, "Yeni kişi için *Kullanıcı Davet Et* butonuna basın.", { bolge: B(555, 205, 1095, 340),
    tikla: { hedef: "+ Kullanıcı Davet Et", sonuc: "Davet formu açılır" } }),
], ["Rolü Genel Müdür, Satınalmacı ya da Görüntüleyici seçin.", "Ayrılan kişiyi Devre Dışı bağlantısıyla kapatın.", "Onay limitini her kişi için ayrı belirleyin."],
"Şimdi *Kullanıcılar & Yetkiler* sayfasını açın.");

E("kullanici-davet", "Kullanıcı davet etme", "userplus", "Ekibinize yeni bir kullanıcı ekleyin.", [
  ek("kullanici-davet", 1, "Kişinin *adını* ve e-postasını yazın.", { bolge: B(555, 320, 1095, 260),
    yaz: { hedef: "Ahmet Yılmaz", metin: "Selin Aydın" } }),
  ek("kullanici-davet", 2, "*Rolü* seçip onay limitini yazın.", { bolge: B(555, 400, 1095, 220),
    vurgu: [{ hedef: "~Rol seçin...", not: "Rol seçimi varsayılan yetkileri belirler" }, { hedef: "Örn: 5000", not: "Boş bırakırsanız limit sınırsız olur" }] }),
  ek("kullanici-davet", 3, "*Kullanıcıyı Davet Et* butonuna basın.", { bolge: B(555, 540, 1095, 220),
    tikla: { hedef: "Kullanıcıyı Davet Et", sonuc: "Kullanıcı davet edildi" } }),
], ["Rol seçince varsayılan yetkiler gelir.", "Gerekirse yetkileri sonra özelleştirin.", "Bütçe takibi için departmanı seçin."],
"Şimdi ekibinizden birini *davet edin.*");

E("departmanlar", "Departman ve bütçe", "building", "Her departmana aylık bütçe tanımlayın.", [
  ek("departmanlar", 1, "*Departman & Bütçe* sayfası harcamaları departmana göre gösterir.", { bolge: B(555, 260, 1095, 340),
    vurgu: [{ hedef: "[]İdari İşler 1 kullanıcı", not: "Bu ayki harcama bütçeyle birlikte yazar" }] }),
  ek("departman-yeni", 2, "Yeni departmanın *adını* ve bütçesini yazın.", { bolge: B(1100, 220, 560, 200),
    yaz: { hedef: "örn. Satın Alma", metin: "Bakım Onarım" }, tikla: { hedef: "Kaydet", sonuc: "Departman eklendi" } }),
], ["Bütçe girerseniz harcama bu tutarla izlenir.", "Kullanıcıları bir departmana bağlayın.", "Bütçe durumunu Bütçe Panosu'nda izleyin."],
"Şimdi *Departman & Bütçe* sayfasını açın.");

E("butce-panosu", "Bütçe panosu", "wallet", "Bütçe ve limitleri anlık izleyin.", [
  ek("butce", 1, "*Bütçe Panosu* bu ayki toplam harcamayı gösterir.", { bolge: B(555, 320, 1095, 110),
    vurgu: [{ hedef: "[]BU AY TOPLAM HARCAMA", not: "Bu ayki toplam harcama ilk kartta yazar" }, { hedef: "[]KREDİ KULLANIMI", not: "Kredi kullanımı limitle birlikte yazar" }] }),
  ek("butce", 2, "Departmanların *kalan bütçesini* tabloda görün.", { bolge: B(555, 430, 1095, 270),
    vurgu: [{ hedef: "[]İdari İşler ₺45.000,00", not: "Kalan bütçe ve kullanım oranı satırda yazar", kaydir: true }] }),
  ek("butce-alt", 3, "*Kullanıcı onay limitlerini* de buradan izleyin.", { bolge: B(555, 300, 1095, 300),
    vurgu: [{ hedef: B(847, 350, 391, 142), not: "Kişinin limiti ve bu ayki siparişi yan yana yazar" }] }),   // Onay Limiti + Bu Ay Siparişi sütunları
], ["Aşımı Durum sütununda kontrol edin.", "Bütçeyi değiştirmek için Departmanları yönet'e tıklayın.", "Onay bekleyen siparişler de harcamaya eklenir."],
"Şimdi *Bütçe Panosu* sayfasını açın.");

// Yeni proje formunun yer tutucularında gerçek marka adı var ("Türkcell Ankara", "TRKL-ANK"): kutular kapatılır, yazı animasyonu üstüne gelir
E("projeler", "Projeler ve şantiyeler", "map", "Harcamayı projeye göre takip edin.", [
  ek("projeler", 1, "*Projeler / Şantiyeler* sayfası proje harcamalarını özetler.", { bolge: B(555, 320, 1095, 340),
    vurgu: [{ hedef: "[]Toplam Harcama ₺38.720,95", not: "Tüm projelerin harcaması burada toplanır" }, { hedef: B(583, 405, 1036, 52), not: "Her projenin harcaması bütçesiyle birlikte yazar", kaydir: true }] }),
  ek("proje-yeni", 2, "Yeni projenin *adını* ve adresini yazın.", { bolge: B(555, 540, 1095, 500), ortu: ["Türkcell Ankara", "TRKL-ANK"],
    yaz: { hedef: "Türkcell Ankara", metin: "Kadıköy Şube Açılışı" } }),
], ["Siparişi verirken projeyi seçin.", "Şantiye adresini teslimat adresi olarak yazın.", "Proje bütçesini özet tablosunda izleyin."],
"Şimdi *Projeler / Şantiyeler* sayfasını açın.");

E("adres-defteri", "Adres defteri", "pin", "Teslimat ve fatura adreslerinizi yönetin.", [
  ek("adresler", 1, "*Adres Ekle* formunda adres türünü seçin.", { bolge: B(555, 340, 1095, 300),
    vurgu: [{ hedef: "Teslim Fatura", not: "Teslimat ya da fatura adresini seçin" }], yaz: { hedef: "Merkez Ofis", metin: "Ankara Depo" } }),
  ek("adresler", 2, "Adres bilgilerini yazıp *kaydedin*.", { bolge: B(555, 460, 1095, 420), ortu: ["[]aasdasd"],
    yaz: { hedef: "Sokak, cadde, bina no", metin: "Ostim OSB 1234. Cadde No:5" }, tikla: { hedef: "Adres Ekle#2", sonuc: "Adres kaydedildi" } }),
], ["Her adres türü için bir varsayılan adres seçin.", "Varsayılan adresi Varsayılan yap ile değiştirin.", "Adresin türünü Teslim ya da Fatura olarak seçin."],
"Şimdi *Adres Defteri* sayfasını açın.");

// ── Finans
// Demo veride Açık Bakiye ile 0–30 gün tutarı birbirini tutmuyor: metin bakiyeyi vade kartlarıyla ilişkilendirmez
E("cari-ekstre", "Cari ekstre", "invoice", "Borç, alacak ve bakiyenizi takip edin.", [
  ek("ekstre", 1, "*Cari Ekstre* borçlarınızı vade aralığına göre gösterir.", { bolge: B(555, 300, 1095, 240), ortu: [BASLANGIC, BITIS],
    vurgu: [{ hedef: B(838, 380, 794, 58), not: "Borçlar vadesine göre gün aralıklarında toplanır", kaydir: true }] }),
  ek("ekstre", 2, "Tüm *hareketleri* tarih sırasıyla görün.", { bolge: B(555, 440, 1095, 500), ortu: [BASLANGIC, BITIS],
    vurgu: [{ hedef: B(1288, 456, 349, 160), not: "Her satırda borç, alacak ve bakiye yazar" }] }),   // Borç, Alacak, Bakiye sütunları
  ek("ekstre", 3, "Tarih aralığı seçip *Filtrele* butonuna basın.", { bolge: B(1100, 205, 560, 120), ortu: [BITIS],
    yaz: { hedef: BASLANGIC, metin: "01.09.2026" }, tikla: { hedef: "Filtrele", sonuc: "Seçilen dönem listelendi" } }),
], ["Ödemelerinizi Alacak sütununda görün.", "Vade tarihini her satırda kontrol edin.", "Dönem seçip Filtrele ile listeleyin."],
"Şimdi *Cari Ekstre* sayfasını açın.");

// Faturalarda PDF henüz yok ("PDF yakında yüklenecek"): yalnız Yazdır gösterilir
E("faturalar", "Faturalarım", "doc", "e-Faturalarınızı görün ve yazdırın.", [
  ek("faturalar", 1, "*Faturalarım* sayfası tüm e-faturalarınızı listeler.", { bolge: B(555, 205, 1095, 320),
    vurgu: [{ hedef: ["MTSD2026000003", "Onaylı"], not: "Her faturanın siparişi ve durumu satırda yazar", kaydir: true }] }),
  ek("faturalar", 2, "Faturayı *Yazdır* ile çıktı alın.", { bolge: B(555, 320, 1095, 200),
    tikla: { hedef: "Yazdır", sonuc: "Yazdırma görünümü açılır" } }),
], ["Faturalarınız panele otomatik gelir.", "Her faturanın sipariş numarasını satırda görün.", "Çıktı için Yazdır düğmesine basın."],
"Şimdi *Faturalarım* sayfasını açın.");

E("analitik", "Satın alma analitiği", "trend", "Harcamanızı rakamlarla analiz edin.", [
  ek("analitik", 1, "*Analitik* sayfası son 12 ayın özetini gösterir.", { bolge: B(555, 320, 1095, 100),
    vurgu: [{ hedef: "[]Toplam Harcama ₺51.320,08", not: "Son 12 ayın toplam harcaması burada yazar" }, { hedef: "[]Toplam İndirim ₺933,86", not: "Kazandığınız toplam indirim burada yazar" }] }),
  ek("analitik", 2, "*Aylık trend* ve kategori dağılımını inceleyin.", { bolge: B(555, 410, 1095, 540),
    vurgu: [{ hedef: "[]Aylık Harcama Trendi Son 6 ay", not: "Grafik son 6 ayın harcamasını gösterir" }, { hedef: "[]Kategori Dağılımı", not: "Harcama kategorilere yüzdeyle ayrılır" }] }),
  ek("analitik-alt", 3, "En çok aldığınız ürünleri *listede* görün.", { bolge: B(1000, 150, 660, 430),
    vurgu: [{ hedef: ["Bulaşık Süngeri Endüstriyel", "27 adet"], not: "Ürünler alınan adede göre sıralanır" }] }),
], ["Kazandığınız indirimi Toplam İndirim kartında görün.", "Gelecek ayın bütçesini trende bakarak planlayın.", "En çok aldığınız ürünleri listede görün."],
"Şimdi *Analitik* sayfasını açın.");

// ── İade, numune, asistan
E("iade-talebi", "İade talebi", "undo", "İade sürecini panelden başlatın ve takip edin.", [
  ek("iadeler", 1, "*İade Taleplerim* sayfası iadelerinizi listeler.", { bolge: B(555, 320, 1095, 180), ortu: TARIH_LISTE,
    vurgu: [{ hedef: ["Tümü", "Reddedildi"], not: "Talepleri duruma göre süzün" }, { hedef: ["MTS-2026-0017", "Talep Alındı#2"], not: "MTS ekibi talebinizi inceler" }] }),
  ek("iadeler", 2, "Yeni iade için *Sipariş seç ve iade aç* butonuna basın.", { bolge: B(555, 205, 1095, 300), ortu: TARIH_LISTE,
    tikla: { hedef: "Sipariş seç ve iade aç →", sonuc: "Sipariş seçim ekranı açılır" } }),
], ["Yeni iade için Sipariş seç ve iade aç'a basın.", "İade dört adımda tamamlanır.", "İade bitince cari ekstrenizi kontrol edin."],
"Şimdi *İade Taleplerim* sayfasını açın.");

E("numune-talebi", "Numune talebi", "sample", "Ürünü almadan önce ücretsiz deneyin.", [
  ek("numune", 1, "*Yeni Numune Talebi* butonuna basın.", { bolge: B(555, 205, 1095, 420), ortu: TARIH_LISTE,
    tikla: { hedef: "+ Yeni Numune Talebi", sonuc: "Numune formu açılır" } }),
  ek("numune-yeni", 2, "Formda istediğiniz *ürün kodlarını* yazın.", { bolge: B(620, 340, 690, 580),
    yaz: { hedef: "Virgülle ayırarak yazın. Örn: MTS-1001, MTS-2030", metin: "555204, ST00560" }, tikla: { hedef: "Numune Talep Et", sonuc: "Numune talebiniz iletildi" } }),
], ["Numuneyi ücretsiz isteyin.", "Birden çok ürünü virgülle ayırarak yazın.", "Onaydan sonra numune 2 iş günü içinde gönderilir."],
"Şimdi *Numune Taleplerim* sayfasını açın.");

E("ai-asistan", "AI ürün asistanı", "sparkle", "İhtiyacınızı yazın, uygun ürünü asistan önersin.", [
  ek("ai-oneri", 1, "*AI Ürün Asistanı* örnek sorularla başlar.", { bolge: B(555, 205, 1095, 360),
    vurgu: [{ hedef: B(578, 264, 352, 90), not: "Sorunuzu bu örneklere benzer yazın" }] }),   // "Örnek sorular" ve üç örneğin yazılı kısmı
  ek("ai-oneri", 2, "Sorunuzu yazıp *Gönder* butonuna basın.", { bolge: B(555, 380, 1095, 180),
    yaz: { hedef: "~Örn: Otelim için aylık ne kadar kağıt havlu lazım?", metin: "Ofisimiz için hangi el dezenfektanını önerirsiniz?" },
    tikla: { hedef: "Gönder", sonuc: "Asistan uygun ürünleri önerir" } }),
], ["Sorunuza kişi sayısını ve alanı yazın.", "En fazla 500 karakter yazın.", "Sorunuzu Gönder düğmesiyle iletin."],
"Şimdi asistana ilk *sorunuzu* sorun.");

// ── Sadakat ve kampanya
E("sadakat", "Sadakat programı", "star", "Her siparişte puan kazanın, kademe atlayın.", [
  ek("sadakat", 1, "*Sadakat Programı* puanınızı ve kademenizi gösterir.", { bolge: B(555, 290, 1095, 330),
    vurgu: [{ hedef: ["Toplam Bakiye", "4.980₺ kupon değeri"], not: "Puanınız ve kupon karşılığı burada yazar" }, { hedef: ["Sonraki", "167 puan kaldı, Stratejik ortak"], not: "Platin kademesine 167 puan kaldı" }] }),
  ek("sadakat-alt", 2, "*Kademeler* puanınız arttıkça açılır.", { bolge: B(555, 660, 1095, 400),
    vurgu: [{ hedef: B(578, 835, 930, 135), not: "Kademe Bronz'dan Platin'e yükselir", kaydir: true }] }),   // dört kademenin adı ve puan sınırı
], ["Puanlar sipariş teslim edilince bakiyenize eklenir.", "100 puanı 10 TL'lik kupona çevirin.", "Kademe yükseldikçe ayrıcalığınız artar."],
"Şimdi *Sadakat Programı* sayfasını açın.");

E("kuponlar", "Kuponlarım", "gift", "Size özel kuponları kullanın.", [
  ek("kuponlar", 1, "*Kuponlarım* sayfası kullanılabilir kuponları listeler.", { bolge: B(555, 320, 1095, 340),
    vurgu: [{ hedef: "SADAKAT10-MUWO14U7", not: "Bu kupon %10 indirim sağlar" }], tikla: { hedef: "Kopyala", sonuc: "Kupon kodu kopyalandı" } }),
  ek("kuponlar", 2, "Kodu sepette *Kupon Kodu* alanına yapıştırın.", { bolge: B(555, 560, 1095, 200),
    vurgu: [{ hedef: "[]Nasıl kullanılır?", not: "Her kupon tek siparişte bir kez kullanılır" }] }),
], ["Son kullanım tarihini kupon kartında kontrol edin.", "Kullanılan kuponlar ayrı listelenir.", "Sadakat puanınızı kupona dönüştürün."],
"Şimdi *Kuponlarım* sayfasını açın.");

E("arkadasini-davet-et", "Arkadaşını davet et", "mail", "Firma davet edin, ikiniz de kazanın.", [
  ek("davet", 1, "Davet *üç adımda* tamamlanır.", { bolge: B(555, 220, 1095, 180),
    vurgu: [{ hedef: ["[]1 E-posta ile davet gönderin", "[]2 Firma kayıt olsun"], not: "Davet ettiğiniz firma panele kayıt olur", kaydir: true }, { hedef: "[]3 İlk siparişte ikisi de %5 indirim!", not: "İlk siparişte iki firma da %5 indirim kuponu alır" }] }),
  ek("davet", 2, "Firmanın *e-postasını* yazıp gönderin.", { bolge: B(555, 410, 1095, 160),
    yaz: { hedef: "firma@ornek.com", metin: "satinalma@ornekfirma.com" }, tikla: { hedef: "Davet Gönder", sonuc: "Davet gönderildi" } }),
], ["Firmanın e-posta adresini yazıp Davet Gönder'e basın.", "İlk siparişte iki firma da indirim kuponu alır.", "Davetleri Gönderilen Davetler listesinde izleyin."],
"Şimdi bir *firmayı* davet edin.");

E("kampanyalar", "Kampanyalar", "percent", "Güncel indirimleri ve paketleri görün.", [
  ek("kampanyalar", 1, "*Sürekli avantajlar* koşul sağlanınca otomatik uygulanır.", { bolge: B(270, 340, 1380, 200), ortu: [SAAT],
    vurgu: [{ hedef: "[]Çok Al Az Öde Kademeli", not: "Adet arttıkça birim fiyat düşer" }, { hedef: "[]Peşin Ödeme %2 İndirim", not: "Havale/EFT ile ödemede %2 indirim alırsınız" }, { hedef: "[]Ücretsiz Kargo", not: "₺3.500 ve üzeri siparişte kargo ücretsizdir" }] }),
], ["Bu avantajlar için kupon kodu gerekmez.", "Havale/EFT ile ödeyip %2 indirim alın.", "₺3.500 ve üzeri siparişte kargo ödemezsiniz."],
"Şimdi *Kampanyalar* sayfasını açın.");

// ── İletişim ve ayarlar
E("bildirimler", "Bildirimler", "bell", "Sipariş ve onay hareketlerinden haberdar olun.", [
  ek("bildirimler", 1, "*Bildirimler* sayfası tüm hareketleri listeler.", { bolge: B(555, 205, 1095, 560),
    vurgu: [{ hedef: B(604, 494, 236, 54), not: "Durum değişince bildirim gelir" }] }),   // "MTS-2026-0018, Sevkiyatta" bildiriminin yazılı kısmı
  ek("bildirimler", 2, "Bildirimleri *türe göre* süzün.", { bolge: B(555, 205, 1095, 300),
    vurgu: [{ hedef: "~Tüm tipler", not: "Durum güncellemesi ya da yeni sipariş gibi türleri seçin" }], tikla: { hedef: "Tümünü okundu işaretle", sonuc: "Tüm bildirimler okundu olarak işaretlendi" } }),
], ["Yeni bildirimleri üstteki zil simgesinde görün.", "E-posta tercihlerinizi Ayarlar sayfasında seçin.", "Onay bildirimini Aç bağlantısıyla açın."],
"Şimdi *Bildirimler* sayfasını açın.");

E("destek-talebi", "Destek talebi", "chat", "Sorununuzu yazın, destek ekibi dönsün.", [
  ek("destek", 1, "*Destek Taleplerim* sayfasında yeni talep oluşturun.", { bolge: B(555, 205, 1095, 480),
    tikla: { hedef: "+ Yeni Destek Talebi", sonuc: "Talep formu açılır" } }),
  ek("destek-yeni", 2, "*Konuyu* yazın, önceliği seçin.", { bolge: B(555, 340, 1095, 420),
    yaz: { hedef: "Destek talebinizin konusunu girin", metin: "Fatura adresi değişikliği" }, vurgu: [{ hedef: "Düşük Normal Yüksek Acil", not: "Destek ekibi önceliğe göre dönüş yapar" }] }),
  ek("destek-yeni", 3, "Açıklamayı yazıp *Talebi Oluştur* butonuna basın.", { bolge: B(555, 340, 1095, 420),
    yaz: { hedef: "Sorununuzu veya talebinizi detaylı olarak açıklayın...", metin: "Fatura adresimizi güncellemek istiyoruz." },
    tikla: { hedef: "Talebi Oluştur", sonuc: "Destek talebiniz oluşturuldu" } }),
], ["Sorunu açıklamada ayrıntılı anlatın.", "Talebin durumunu Destek Taleplerim listesinde izleyin.", "Acil konularda kurumsal hattı arayın."],
"Şimdi *Destek Taleplerim* sayfasını açın.");

// Telefon kutusu kişisel veri olarak kapalı: profil adımı ad alanı ve Kaydet düğmesi üzerinden anlatılır
E("hesap-ayarlari", "Hesap ayarları", "gear", "Profilinizi, şifrenizi ve bildirimlerinizi yönetin.", [
  ek("ayarlar", 1, "*Profil* bölümünde bilgilerinizi güncelleyin.", { bolge: B(555, 300, 1095, 260),
    vurgu: [{ hedef: ["Ad Soyad", "Kaydet"], not: "Değişikliği Kaydet ile saklayın" }] }),
  ek("ayarlar-alt", 2, "*Şifrenizi* güvenlik bölümünden değiştirin.", { bolge: B(555, 200, 1095, 300),
    vurgu: [{ hedef: "En az 8 karakter, 1 harf ve 1 rakam içermeli.", not: "Şifrede en az 8 karakter, 1 harf ve 1 rakam kullanın" }], tikla: { hedef: "Şifreyi Güncelle", sonuc: "Şifre güncellendi" } }),
  ek("ayarlar-alt", 3, "Hangi *bildirimleri* alacağınızı seçin.", { bolge: B(555, 500, 1095, 300),
    vurgu: [{ hedef: B(583, 561, 620, 162), not: "İşaretli konular için e-posta gelir" }],   // dört tercih satırının yazılı kısmı
    tikla: { hedef: "Tercihleri Kaydet", sonuc: "Tercihleriniz kaydedildi" } }),
], ["Şifrenizi düzenli olarak değiştirin.", "İstemediğiniz bildirim e-postalarının işaretini kaldırın.", "KDV muafiyeti talebini bu sayfadan gönderin."],
"Şimdi *Ayarlar* sayfasını açın.");

// Çalışma saati iddiası yok: üst şeritteki ve yardım kutusundaki saatler kapatılır
E("yardim-merkezi", "Yardım merkezi", "help", "Sık sorulan soruların cevabını bulun.", [
  ek("yardim", 1, "*Yardım Merkezi* konuları başlıklara ayırır.", { bolge: B(500, 220, 920, 620), ortu: [SAAT, SAATLER_YARDIM],
    vurgu: [{ hedef: "[]Sipariş ve Fatura Siparişlerimi", not: "Sipariş ve fatura soruları bu başlıkta toplanır" }, { hedef: "[]Teslimat ve Kargo", not: "Kargo takibi ve teslimat süreleri burada anlatılır" }] }),
  ek("yardim", 2, "Aradığınız konuyu *arama kutusuna* yazın.", { bolge: B(500, 220, 920, 300), ortu: [SAAT, SAATLER_YARDIM],
    yaz: { hedef: "Konu veya anahtar kelime ara…", metin: "onay zinciri" } }),
], ["Sorunuzu önce arama kutusuna yazın.", "Cevap bulamazsanız destek talebi açın.", "Müşteri hizmetlerini 0543 683 57 65 numarasından arayın."],
"Şimdi *Yardım Merkezi* sayfasını açın.");

// ── Çıktı: numaralı eğitimler + sıradaki eğitim bağlantısı
export default LISTE.map((v, i) => {
  const no = String(i + 1).padStart(2, "0");
  return {
    id: `egitim-${no}-${v.ad}`, tur: "egitim", baslik: v.baslik, etiket: `Eğitim ${no} · ${v.baslik}`, tohum: i + 1,
    sahneler: [
      { tip: "kapak", ust: `Eğitim ${no}`, baslik: v.baslik, ikon: v.ikon, alt: v.alt, sure: "auto" },
      ...v.sahneler,
      { tip: "ipucu", baslik: "*Unutmayın*", maddeler: v.ipucu.map((m, j) => [["check", "bolt", "star", "shield"][j % 4], m]) },
      { tip: "son", metin: v.son, sonraki: LISTE[i + 1] ? LISTE[i + 1].baslik : null },
    ],
  };
});
