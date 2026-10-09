// 2026-10-09 serisi · Eğitim 43–49: gezinme ve sipariş (surum 2).
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakamlar ve etiketler 9 Ekim element haritalarından okundu.
// Kayıt değiştiren tıklamalar (Sepete Ekle, Yeniden Sipariş Ver, Aboneliğe Çevir) panelde yapılmaz; motor yalnız canlandırır.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, adim, metin, ayar) => ({ tip: "ekran", ekran, adim, metin, ...ayar });
const tel = (ekran, ayar) => ({ tip: "telefon", ekran, ...ayar });
const kapak = (no, baslik, alt, ikon) => ({ tip: "kapak", ust: `Eğitim ${no}`, baslik, alt, ikon, sure: "auto" });
const kontrol = (maddeler) => ({ tip: "kontrol", baslik: "*Özet*", maddeler });
// Mobil sipariş detayında "Geçmiş" listesi ham durum kodları içerir: kadraja girmese de ayrıca kapatılır
const GECMIS_SEVK = ["[]Geçmiş 20.09.2026"], GECMIS_TESLIM = ["[]Geçmiş 12.09.2026"];
// "Önceden aldıklarım" listesinde bir ürünün görseli yüklenmiyor (alt metin görünüyor): görsel alanı gri bantla kapatılır
const KIRIK_GORSEL = [B(1395, 463, 226, 226)], KIRIK_GORSEL_M = [B(236, 815, 169, 169)];

export default [
  // ── 43 · Menü haritası
  {
    id: "egitim-43-menu-haritasi", tur: "egitim", baslik: "Panelde her şey nerede?", etiket: "Eğitim 43 · Panelde her şey nerede?",
    tohum: 43, ton: -1, surum: 2,
    sahneler: [
      kapak(43, "Panelde her şey nerede?", "Menüleri tanıyın, aradığınız sayfayı hızla bulun.", "map"),
      { tip: "gundem", ust: "Eğitim 43", baslik: "Bu videoda", ikon: "map", maddeler: ["Sol menüyü tanıyın", "Hesap menüsünü açın", "Kategori ve filtreleri kullanın"] },
      ek("ozet", 1, "Sol menüde *sipariş* ve *finans* sayfalarını bulun.", { bolge: B(270, 180, 1180, 520),
        vurgu: [{ hedef: ["Siparişlerim", "Periyodik Siparişler"], not: "Sipariş verme ve takip sayfaları menünün başında durur" },
          { hedef: ["Cari Ekstre", "Faturalarım"], not: "Hesap hareketlerini ve faturaları buradan açın" }],
        dikey: { tip: "telefon", ekran: "m-menu-bolum", metin: "Telefonda bu liste *Özet* düğmesinin altında açılır.",
          vurgu: [{ hedef: ["Siparişlerim", "Periyodik Siparişler"], not: "Sipariş verme ve takip sayfaları menünün başında durur" },
            { hedef: ["Cari Ekstre", "Faturalarım"], not: "Hesap hareketlerini ve faturaları buradan açın" }] } }),
      ek("ozet", 2, "*Onay* ve *ekip* sayfalarını da aynı menüde bulun.", { bolge: B(270, 470, 1180, 520),
        vurgu: [{ hedef: "Onaylarım 2", not: "Onay bekleyen siparişleri buradan açın" },
          { hedef: ["Kullanıcılar & Yetkiler", "Departman & Bütçe"], not: "Kullanıcıları ve bütçeleri buradan yönetin" }],
        dikey: { tip: "telefon", ekran: "m-menu-bolum",
          vurgu: [{ hedef: "Onaylarım 2", not: "Onay bekleyen siparişleri buradan açın" },
            { hedef: ["Kullanıcılar & Yetkiler", "Departman & Bütçe"], not: "Kullanıcıları ve bütçeleri buradan yönetin" }] } }),
      ek("hesap-menu", 3, "Sağ üstteki adınıza basıp *hesap menüsünü* açın.", { bolge: B(1000, 30, 680, 520),
        vurgu: [{ hedef: "CÇ Can", not: "Menü bu düğmeyle açılır" },
          { hedef: ["Hesap Özeti", "Faturalarım"], not: "Sık kullanılan sayfalara tek tıkla gidin" }],
        dikey: { tip: "telefon", ekran: "m-menu-hesap", ustSabit: 0, metin: "Telefonda sağ üstteki *yuvarlak düğmeye* dokunun.",
          vurgu: [{ hedef: "CÇ", not: "Menü bu düğmeyle açılır" },
            { hedef: ["Hesap Özeti", "Faturalarım"], not: "Sık kullanılan sayfalara tek dokunuşla gidin" }] } }),
      ek("katalog", 4, "Ürünleri *kategori menüsü* ve filtrelerle bulun.", { bolge: B(270, 105, 1380, 560),
        vurgu: [{ hedef: ["Kağıt Ürünleri", "Dispenser & Aparat Sistemleri"], not: "Yedi ana kategori her sayfada üstte durur", kaydir: true },
          { hedef: ["Filtreler", "Tüm Kategoriler", "Atık Yönetimi & Ortam Bakımı 187"], not: "Soldan kategori seçip listeyi daraltın" }],
        dikey: { tip: "telefon", ekran: "m-kategori", metin: "Telefonda kategori sayfasında *Filtrele* düğmesini kullanın.",
          vurgu: [{ hedef: ["75", "Fiyat aralığı"], not: "Ürün ve marka sayısı en üstte yazar" },
            { hedef: "Filtrele", not: "Filtreler bu düğmeyle açılır" }] } }),
      kontrol(["Sipariş ve fatura sayfalarını menüde bulun.", "Hesap menüsünü sağ üstten açın.", "Ürünleri kategori ve filtrelerle daraltın."]),
      { tip: "son", metin: "Şimdi panelde *menüleri* gezin.", sonraki: "Paneli telefondan kullanın" },
    ],
  },

  // ── 44 · Telefondan panel
  {
    id: "egitim-44-telefondan-panel", tur: "egitim", baslik: "Paneli telefondan kullanın", etiket: "Eğitim 44 · Paneli telefondan kullanın",
    tohum: 44, ton: 1, surum: 2,
    sahneler: [
      kapak(44, "Paneli telefondan kullanın", "Siparişlerinizi telefondan da izleyin.", "phone"),
      { tip: "soru", metin: "Bilgisayardan *uzakta* mısınız?", alt: "Panel telefonda da aynı çalışır.",
        cipler: [["clock", "Toplantıda"], ["truck", "Depoda"], ["pin", "Yolda"]] },
      { tip: "cihaz", metin: "Aynı panel *telefonunuzda* da açılır.", alt: "İki cihazda da aynı hesapla girin", ikon: "phone", sure: 5,
        masa: { ekran: "ozet", bolge: B(555, 180, 1095, 620) }, tel: { ekran: "m-ozet", basY: 60 } },
      tel("m-ozet", { adim: 1, metin: "*Özet* ekranında hesabınızı tek bakışta görün.",
        vurgu: [{ hedef: ["Bu ay harcama", "Vade: 30 gün"], not: "Bu ayki harcama ve açık bakiye en üstte yazar" },
          { hedef: "+ Yeni Sipariş", not: "Yeni siparişe buradan başlayın" }] }),
      tel("m-menu-bolum", { adim: 2, metin: "*Özet* düğmesine dokunup başka sayfaya geçin.",
        vurgu: [{ hedef: "Özet", not: "Bu düğme tüm bölümlerin listesini açar" }],
        tikla: { hedef: "Siparişlerim", sonuc: "Siparişlerim sayfası açılır" } }),
      tel("m-siparisler", { adim: 3, metin: "Siparişlerinizi *durumlarıyla* izleyin.",
        vurgu: [{ hedef: "~MTS-2026-0028 ₺3.161,19", not: "Her kartta durum, tutar ve tarih yazar" }],
        tikla: { hedef: "Sevkiyatta", sonuc: "Sevkiyattaki siparişler listelenir" } }),
      kontrol(["Özet ekranında hesabınızı kontrol edin.", "Özet düğmesiyle bölüm listesini açın.", "Siparişleri hızlı filtreyle süzün."]),
      { tip: "son", metin: "Şimdi telefonunuzdan *paneli* açın.", sonraki: "İlk siparişinizi verin" },
    ],
  },

  // ── 45 · İlk sipariş
  {
    id: "egitim-45-ilk-siparis", tur: "egitim", baslik: "İlk siparişinizi verin", etiket: "Eğitim 45 · İlk siparişinizi verin",
    tohum: 45, ton: 0, surum: 2,
    sahneler: [
      kapak(45, "İlk siparişinizi verin", "Ürünü bulun, sepete ekleyin ve siparişi izleyin.", "cart"),
      { tip: "gundem", ust: "Eğitim 45", baslik: "Bu videoda", ikon: "cart", maddeler: ["Ürünü arayın", "Fiyatı ve indirimi okuyun", "Sepete ekleyin", "Siparişi izleyin"] },
      ek("arama", 1, "Arama kutusuna yazıp *ürünü* listeden seçin.", { bolge: B(420, 40, 1175, 520), bolgeD: B(407, 40, 680, 680),
        ortu: [B(283, 176, 124, 518)],   // arkadaki banner'ın soldan kesik yazısı
        yaz: { hedef: "kağıt havlu", metin: "kağıt havlu" },
        tikla: { hedef: "Fotoselli/Sensörlü Kağıt Havlu 4 kg 555204 ÜRÜN", sonuc: "Ürün sayfası açılır" } }),
      ek("urun", 2, "Fiyatı ve *kademeli indirimi* okuyun.", { bolge: B(810, 380, 850, 400),
        vurgu: [{ hedef: ["Liste Fiyatı (KDV Hariç)", "KDV dahil ₺504,00"], not: "Fiyat KDV hariçtir; KDV dahil tutar altında yazar" },
          { hedef: ["[]5+ %5", "[]40+ %10"], not: "5 koliden %5, 30 koliden %8, 40 koliden %10 indirim alırsınız" }],
        dikey: { tip: "telefon", ekran: "m-urun",
          vurgu: [{ hedef: ["Liste Fiyatı (KDV Hariç)", "KDV dahil ₺504,00"], not: "Fiyat KDV hariçtir; KDV dahil tutar altında yazar" },
            { hedef: ["[]5+ %5", "[]40+ %10"], not: "5 koliden %5, 30 koliden %8, 40 koliden %10 indirim alırsınız" }] } }),
      ek("urun", 3, "Stoğu kontrol edip *Sepete Ekle* düğmesine basın.", { bolge: B(810, 560, 850, 420),
        vurgu: [{ hedef: "Stok: 88 adet · 1 iş günü içinde kargo", not: "Stok ve kargo süresi düğmenin altında yazar" }],
        tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" },
        // m-urun'da stok satırı (y 1584) çekimin dibinde, notun altında kalıyor: dikeyde adet kutusu gösterilir
        dikey: { tip: "telefon", ekran: "m-urun", metin: "Adedi yazıp *Sepete Ekle* düğmesine basın.",
          vurgu: [{ hedef: B(41, 1530, 64, 40), not: "Koli adedini bu kutuya yazın" }],
          tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" } } }),
      ek("siparisler", 4, "Siparişten sonra *Siparişlerim* sayfasını açın.", { bolge: B(270, 300, 1380, 520),
        vurgu: [{ hedef: ["MTS-2026-0020", "Hazırlanıyor#2"], not: "Her satırda siparişin durumu yazar" }],
        tikla: { hedef: "Detay →#5", sonuc: "Sipariş detayı açılır" },
        dikey: { tip: "telefon", ekran: "m-siparisler",
          vurgu: [{ hedef: ["Hızlı:", "Teslim"], not: "Siparişleri durumuna göre tek dokunuşla süzün" }],
          tikla: { hedef: "~MTS-2026-0018 ₺2.428,14", sonuc: "Sipariş detayı açılır" } } }),
      ek("siparis-hazirlaniyor", 5, "Detayda siparişin *hangi adımda* olduğunu görün.", { bolge: B(555, 180, 1095, 400),
        // Durum çubuğunun tamamı ~1000 px (yakınlaşma olmuyor): yalnız şu anki adım ve iki komşusu
        vurgu: [{ hedef: B(1138, 386, 330, 36), not: "Koyu mavi işaret siparişin şu anki adımıdır" },
          { hedef: ["Sıradaki adım", "Depo personeli ürünleri toplayıp paketliyor."], not: "Sıradaki işi bu kutuda okuyun" }],
        dikey: { tip: "telefon", ekran: "m-siparis-sevkiyat", ortu: GECMIS_SEVK,
          vurgu: [{ hedef: B(30, 494, 384, 76), not: "Koyu mavi işaret siparişin şu anki adımıdır" },
            { hedef: ["Sıradaki adım", "Sipariş kargoda. Takip için kargo bölümüne bakın."], not: "Sıradaki işi bu kutuda okuyun" }] } }),
      kontrol(["Ürünü arama kutusundan bulun.", "Kademeli indirimi kontrol edip sepete ekleyin.", "Siparişin durumunu detayda izleyin."]),
      { tip: "son", metin: "Şimdi ilk ürününüzü *sepete* ekleyin.", sonraki: "Önceden aldıklarınızı hızlı bulun" },
    ],
  },

  // ── 46 · Önceden aldıklarım
  {
    id: "egitim-46-onceden-aldiklarim", tur: "egitim", baslik: "Önceden aldıklarınızı hızlı bulun", etiket: "Eğitim 46 · Önceden aldıklarınızı hızlı bulun",
    tohum: 46, ton: 2, surum: 2,
    sahneler: [
      kapak(46, "Önceden aldıklarınızı hızlı bulun", "Daha önce aldığınız ürünleri tek filtreyle listeleyin.", "filter"),
      { tip: "karakter", avatar: { sac: "uzun", ten: "bugday", sacRenk: "#3B2416", giysi: "#0B5677", ruh: "dertli" },
        ad: "Selin", rol: "Satın alma sorumlusu", ikon: "cart", metin: "Geçen ay aldığım ürünü her seferinde *baştan* arıyorum." },
      ek("katalog-tekrar", 1, "Katalogda *Sadece önceden aldıklarım* filtresini açın.", { bolge: B(270, 170, 1380, 620), ortu: KIRIK_GORSEL,
        vurgu: [{ hedef: "SADECE ALDIKLARIM evet", not: "Bu filtre açıkken yalnız aldığınız ürünler görünür" },
          { hedef: "ürün bulundu", not: "Aldığınız ürünlerin sayısı burada yazar" }],
        dikey: { tip: "telefon", ekran: "m-katalog-tekrar", ortu: KIRIK_GORSEL_M,
          vurgu: [{ hedef: "SADECE ALDIKLARIM evet", not: "Bu filtre açıkken yalnız aldığınız ürünler görünür" },
            { hedef: "ürün bulundu", not: "Aldığınız ürünlerin sayısı burada yazar" }] } }),
      ek("katalog-tekrar", 2, "Ürünü listeden doğrudan *sepete* ekleyin.", { bolge: B(270, 170, 1380, 620), ortu: KIRIK_GORSEL,
        tikla: { hedef: "Ekle", sonuc: "Ürün sepete eklendi" },
        dikey: { tip: "telefon", ekran: "m-katalog-tekrar", ortu: KIRIK_GORSEL_M, tikla: { hedef: "Ekle", sonuc: "Ürün sepete eklendi" } } }),
      ek("siparis-teslim", 3, "Eski siparişi açıp *Yeniden Sipariş Ver* düğmesine basın.", { bolge: B(555, 180, 1095, 560),
        vurgu: [{ hedef: "[]Bez Mikrofiber 40*40 Yeşil 60 Gr ST00325", not: "Siparişteki ürünler ve adetler burada yazar" }],
        tikla: { hedef: "Yeniden Sipariş Ver", sonuc: "Siparişin ürünleri sepete eklendi" },
        dikey: { tip: "telefon", ekran: "m-siparis-teslim", ortu: GECMIS_TESLIM,
          vurgu: [{ hedef: "[]Bez Mikrofiber 40*40 Yeşil 60 Gr ST00325#2", not: "Siparişteki ürünler ve adetler burada yazar" }],
          tikla: { hedef: "Yeniden Sipariş Ver", sonuc: "Siparişin ürünleri sepete eklendi" } } }),
      kontrol(["Sadece önceden aldıklarım filtresini açın.", "Ürünü listeden sepete ekleyin.", "Eski siparişte Yeniden Sipariş Ver düğmesine basın."]),
      { tip: "son", metin: "Şimdi katalogda bu *filtreyi* açın.", sonraki: "Aynı siparişi tekrar vermenin 3 yolu" },
    ],
  },

  // ── 47 · Tekrar sipariş: 3 yol
  {
    id: "egitim-47-tekrar-siparis", tur: "egitim", baslik: "Aynı siparişi tekrar vermenin 3 yolu", etiket: "Eğitim 47 · Aynı siparişi tekrar vermenin 3 yolu",
    tohum: 47, ton: -2, surum: 2,
    sahneler: [
      kapak(47, "Aynı siparişi tekrar vermenin 3 yolu", "Sık aldığınız ürünleri baştan girmeden sipariş edin.", "repeat"),
      { tip: "akis", baslik: "Tekrar sipariş için *3 yol*",
        adimlar: [["repeat", "Yeniden Sipariş Ver", "Eski siparişten"], ["list", "Sipariş listesi", "Kayıtlı listeden"], ["calendar", "Aboneliğe Çevir", "Ürün sayfasından"]] },
      ek("siparis-teslim", 1, "Eski siparişte *Yeniden Sipariş Ver* düğmesine basın.", { bolge: B(555, 180, 1095, 420),
        vurgu: [{ hedef: "Şablona Kaydet", not: "Siparişi şablon olarak da saklayabilirsiniz" }],
        tikla: { hedef: "Yeniden Sipariş Ver", sonuc: "Siparişin ürünleri sepete eklendi" },
        dikey: { tip: "telefon", ekran: "m-siparis-teslim", ortu: GECMIS_TESLIM,
          vurgu: [{ hedef: "Şablona Kaydet", not: "Siparişi şablon olarak da saklayabilirsiniz" }],
          tikla: { hedef: "Yeniden Sipariş Ver", sonuc: "Siparişin ürünleri sepete eklendi" } } }),
      ek("listeler", 2, "Kayıtlı listeyi *Sepete Ekle* ile tek seferde ekleyin.", { bolge: B(555, 180, 1095, 360),
        vurgu: [{ hedef: ["Üretim Hattı Standart Set", "5 ürün · Oluşturulma 22.08.2026"], not: "Listedeki 5 ürün birlikte eklenir" }],
        tikla: { hedef: "Sepete Ekle#2", sonuc: "5 ürün sepete eklendi" },
        dikey: { tip: "telefon", ekran: "m-listeler",
          vurgu: [{ hedef: ["Üretim Hattı Standart Set", "5 ürün · Oluşturulma 22.08.2026"], not: "Listedeki 5 ürün birlikte eklenir" }],
          tikla: { hedef: "Sepete Ekle#2", sonuc: "5 ürün sepete eklendi" } } }),
      ek("urun", 3, "Düzenli aldığınız ürünü *aboneliğe* çevirin.", { bolge: B(810, 560, 850, 420),
        vurgu: [{ hedef: "Aboneliğe Çevir", not: "Ürün belirli aralıkla otomatik sipariş edilir" }],
        tikla: { hedef: "Aboneliğe Çevir", sonuc: "Ürün aboneliğe çevrildi" },
        // m-urun'da düğme sayfanın dibinde kalıyor: dikeyde masaüstü dar kadraj; tıklama kadrajı düğmenin ortasına göre
        dikey: { tip: "ekran", ekran: "urun", bolgeD: B(800, 640, 520, 520),
          vurgu: [{ hedef: "Aboneliğe Çevir", not: "Ürün belirli aralıkla otomatik sipariş edilir" }],
          tikla: { hedef: B(1000, 880, 120, 38), sonuc: "Ürün aboneliğe çevrildi" } } }),
      kontrol(["Eski siparişte Yeniden Sipariş Ver düğmesine basın.", "Kayıtlı listeyi Sepete Ekle ile ekleyin.", "Düzenli aldığınız ürünü aboneliğe çevirin."]),
      { tip: "son", metin: "Şimdi *Siparişlerim* sayfasını açın.", sonraki: "Hazır paketlerle tasarruf edin" },
    ],
  },

  // ── 48 · Paketler
  {
    id: "egitim-48-paketler", tur: "egitim", baslik: "Hazır paketlerle tasarruf edin", etiket: "Eğitim 48 · Hazır paketlerle tasarruf edin",
    tohum: 48, ton: 1, surum: 2,
    sahneler: [
      kapak(48, "Hazır paketlerle tasarruf edin", "Sektörünüze uygun paketi tek tıkla sepete ekleyin.", "package"),
      { tip: "soru", metin: "Her ay aynı ürünleri *tek tek* mi ekliyorsunuz?", alt: "Hazır paketler bu işi kısaltır.",
        cipler: [["package", "Hazır paket"], ["percent", "%8–%10 indirim"], ["repeat", "Aylık abonelik"]] },
      ek("paketler", 1, "*Paketler* sayfasında işletmenize uygun paketi seçin.", { bolge: B(270, 170, 1380, 560),
        vurgu: [{ hedef: ["Ofis Başlangıç Paketi", "5-15 Kişilik Ofisler İçin 1 Aylık Temel İhtiyaçlar"], not: "Paketin kime uygun olduğu adının altında yazar" },
          { hedef: ["₺4.472,86", "₺388,94 tasarruf · %8"], not: "Paket fiyatı, eski fiyat ve tasarruf altta yazar" }],
        dikey: { tip: "telefon", ekran: "m-paketler",
          vurgu: [{ hedef: ["Ofis Başlangıç Paketi", "5-15 Kişilik Ofisler İçin 1 Aylık Temel İhtiyaçlar"], not: "Paketin kime uygun olduğu adının altında yazar" },
            { hedef: ["₺4.472,86", "₺388,94 tasarruf · %8"], not: "Paket fiyatı, eski fiyat ve tasarruf altta yazar" }] } }),
      ek("paket-ofis", 2, "Paket sayfasında *içeriği* ve fiyatı kontrol edin.", { bolge: B(270, 180, 1380, 640),
        vurgu: [{ hedef: ["~5 × Z Katlama", "~2 × Köpük El Sabunu"], not: "Her satırın başında ürünün adedi yazar" },
          { hedef: ["Paket Fiyatı", "₺388,94 tasarruf"], not: "₺4.861,80 yerine ₺4.472,86 ödersiniz" }],
        dikey: { tip: "telefon", ekran: "m-paket-ofis",
          vurgu: [{ hedef: ["~5 × Z Katlama", "~2 × Köpük El Sabunu"], not: "Her satırın başında ürünün adedi yazar" },
            { hedef: ["Paket Fiyatı", "₺388,94 tasarruf"], not: "₺4.861,80 yerine ₺4.472,86 ödersiniz" }] } }),
      ek("paket-ofis", 3, "Paketi *tek tıkla* sepete ekleyin.", { bolge: B(900, 260, 760, 380),
        vurgu: [{ hedef: "Aboneliğe Çevir (aylık)", not: "Aynı paket her ay otomatik sipariş edilir" }],
        tikla: { hedef: "Tüm Paketi Sepete Ekle", sonuc: "Paketteki 4 ürün sepete eklendi" },
        dikey: { tip: "telefon", ekran: "m-paket-ofis",
          vurgu: [{ hedef: "Aboneliğe Çevir (aylık)", not: "Aynı paket her ay otomatik sipariş edilir" }],
          tikla: { hedef: "Tüm Paketi Sepete Ekle", sonuc: "Paketteki 4 ürün sepete eklendi" } } }),
      { tip: "rakamlar", baslik: "Paketlerde *tasarruf*",
        kartlar: [{ ikon: "building", deger: 388.94, para: true, ondalik: 2, etiket: "Ofis Başlangıç · %8" },
          { ikon: "star", deger: 931.95, para: true, ondalik: 2, etiket: "Okul & Eğitim · %10" },
          { ikon: "package", deger: 1768.29, para: true, ondalik: 2, etiket: "Restoran & Mutfak · %10" }] },
      kontrol(["Paketler sayfasında tasarrufu karşılaştırın.", "Tüm Paketi Sepete Ekle düğmesine basın.", "Aylık alım için aboneliği seçin."]),
      { tip: "son", metin: "Şimdi *Paketler* sayfasını açın.", sonraki: "Ürünleri karşılaştırın" },
    ],
  },

  // ── 49 · Ürün karşılaştırma
  {
    id: "egitim-49-urun-karsilastirma", tur: "egitim", baslik: "Ürünleri karşılaştırın", etiket: "Eğitim 49 · Ürünleri karşılaştırın",
    tohum: 49, ton: -1, surum: 2,
    sahneler: [
      kapak(49, "Ürünleri karşılaştırın", "Benzer ürünleri fiyat ve özellikleriyle yan yana görün.", "table"),
      { tip: "karakter", avatar: { sac: "kisa", ten: "acik", sacRenk: "#2A1A10", giysi: "#1D5FA8", yaka: "gomlek", sakal: true, ruh: "dertli" },
        ad: "Emre", rol: "Depo sorumlusu", ikon: "box", metin: "İki havluyu kıyaslamak için sekmeler arasında *gidip geliyorum*." },
      // Karşılaştır simgesi masaüstünde yalnız fareyle üzerine gelince çıkıyor (haritada yok); mobil kartlarda görünür:
      // m-kategori'de 555213 kartının sağ üstü (kalp simgesinin altı), ham kutu çekimden ölçüldü
      tel("m-kategori", { adim: 1, metin: "Ürün kartındaki *karşılaştır* simgesine dokunun.",
        vurgu: [{ hedef: B(369, 496, 28, 28), not: "Bu simge ürünü karşılaştırma listesine ekler" }],
        tikla: { hedef: B(369, 496, 28, 28), sonuc: "Ürün karşılaştırmaya eklendi" } }),
      ek("karsilastir", 2, "Fiyatı ve stoğu *aynı satırda* karşılaştırın.", { bolge: B(270, 250, 1380, 640), bolgeD: B(283, 330, 900, 750),
        vurgu: [{ hedef: ["₺420,00", "₺525,00"], not: "KDV hariç fiyatlar aynı satırda yazar", kaydir: true },
          { hedef: ["Sınırlı", "Sınırlı#2"], not: "Stok durumu da yan yana görünür", kaydir: true }] }),
      // Dispenser Uyumu: iki ürünün tek farklı satırı. Ham kutu iki hücredeki yazıları kapsar (hücreler 489 px, yazı ortada)
      // Tıklama: 467 px'lik düğmenin ortasına dar kutu (geniş hedefte kamera sola yaslanıp düğmeyi kesiyor)
      ek("karsilastir", 3, "Farkı görüp seçtiğiniz ürünü *sepete* ekleyin.", { bolge: B(270, 340, 1380, 620), bolgeD: B(283, 250, 830, 830),
        vurgu: [{ hedef: B(545, 899, 720, 41), not: "Ürünler farklı dispenserlere uyar", kaydir: true }],
        tikla: { hedef: B(611, 409, 120, 25), sonuc: "Ürün sepete eklendi" } }),
      kontrol(["Kartta karşılaştır simgesine basın.", "Fiyatı ve stoğu yan yana kıyaslayın.", "Seçtiğiniz ürünü Sepete Ekle ile ekleyin."]),
      { tip: "son", metin: "Şimdi *Kağıt Ürünleri* kategorisini açın." },
    ],
  },
];
