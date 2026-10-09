// 2026-10-09 serisi · Tanıtım 20–26: kanca ve sektörler (surum 2).
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakamlar ve etiketler 9 Ekim element haritalarından okundu.
// Yalnızca paneldeki kurallar rakam olarak kullanılır (paket içi %8 / %10 indirim, paket tasarrufu). Demo hesabın tutarları vurgulanmaz.
// Kayıt değiştiren tıklamalar (Onayla, Sepete Ekle, Aboneliğe Çevir) panelde yapılmaz; motor yalnız canlandırır.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, metin, ayar) => ({ tip: "ekran", ekran, metin, ...ayar });
const tel = (ekran, metin, ayar) => ({ tip: "telefon", ekran, metin, ...ayar });
const kapanis = (slogan, cta = "Kurumsal hesap açın") => ({ tip: "kapanis", slogan, cta });
// Motor geçici çözümü: tıklama halkası (.ring) dokunuştan önce sahne boyunca 20 px'lik sarı nokta olarak görünüyor
// (ringAnim fromTo'su hemen işleniyor). Bu yüzden tıklamalı sahnelerde tıklamadan önce vurgu/yazı yok ve telefonun
// başlangıç kaydırması (basY), noktanın baştan düğmenin üstünde durmasını sağlayacak şekilde seçildi (yatay ≠ dikey ölçek).
const onayla = (metin) => tel("m-onaylarim", metin, { basY: 215, tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" },
  dikey: { tip: "telefon", ekran: "m-onaylarim", basY: 292, tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } } });
// Paket sayfaları: başlık, bant ve fiyat kutusu tek kadrajda (üstteki iletişim çubuğu kadraj dışında)
const PAKET = B(283, 200, 1360, 600);
// Hesap sayfaları: içerik alanı (sol menü dışarıda)
const HESAP = B(555, 185, 1095, 485);

export default [
  // ── 20 · Hepsi tek panelde (kelime kancası → masaüstü + telefon → kapanış)
  {
    id: "tanitim-20-tek-panel", tur: "tanitim", baslik: "Hepsi tek panelde", tohum: 20, ton: 1, surum: 2,
    sahneler: [
      { tip: "kelime", kelimeler: ["Telefon.", "E-posta.", "Excel."], ciz: true, son: "Hepsi artık *tek panelde.*" },
      { tip: "cihaz", metin: "Siparişi, onayı ve faturayı *tek ekrandan* izleyin.", alt: "Masaüstünde ve telefonda aynı hesap", ikon: "phone", sure: 4.5,
        masa: { ekran: "ozet", bolge: B(555, 180, 1095, 620) }, tel: { ekran: "m-ozet", basY: 60 } },
      kapanis("Satın almayı *tek yerden* yönetin."),
    ],
  },

  // ── 21 · Panel cebinizde (masaüstü + telefon → mobil özet → mobil onay)
  {
    id: "tanitim-21-panel-cebinizde", tur: "tanitim", baslik: "Panel cebinizde", tohum: 21, ton: -1, surum: 2,
    sahneler: [
      { tip: "cihaz", metin: "Bilgisayardaki panel *telefonda* da çalışır.", alt: "Masaüstünde ve telefonda aynı hesap", ikon: "phone", sure: 5,
        masa: { ekran: "siparisler", bolge: B(555, 180, 1095, 620) }, tel: { ekran: "m-siparisler", basY: 160 } },
      tel("m-ozet", "Hesabınızı *tek bakışta* görün.", {
        vurgu: [{ hedef: "[]ONAY BEKLEYEN 3", not: "Onayınızı bekleyen siparişler burada sayılır" }] }),
      onayla("Siparişi *tek dokunuşla* onaylayın."),
      kapanis("Siparişlerinizi *her yerden* izleyin.", "Panelde deneyin"),
    ],
  },

  // ── 22 · Otel (karakter → Otel Housekeeping paketi → periyodik sipariş)
  {
    id: "tanitim-22-otel", tur: "tanitim", baslik: "Otel: kat hizmetleri tek panelde", tohum: 22, ton: 2, surum: 2,
    sahneler: [
      { tip: "karakter", avatar: { sac: "topuz", ten: "bugday", sacRenk: "#3B2A20", giysi: "#0B5677", yaka: "gomlek", ruh: "dertli" },
        ad: "Sevgi", rol: "Kat hizmetleri şefi", ikon: "building", metin: "Her sabah kat arabasında bir ürünü *eksik buluyorum.*" },
      ek("paket-otel", "Kat ürünlerini *tek pakette* alın.", { bolge: B(283, 195, 1360, 680), bolgeD: B(283, 190, 800, 800),
        vurgu: [{ hedef: ["12 × Domestos Pro Tuvalet Temizleyici Asidik 750 ml", "~Kapalı ortamlarda hoş"], not: "Tuvalet, cam ve oda ürünleri aynı pakette gelir" },
          { hedef: ["₺7.913,52", "[]Paket içi %10 indirim otomatik uygulanır"], not: "Paket içi %10 indirimle ₺879,28 tasarruf edersiniz" }] }),
      ek("periyodik", "Siparişi her ay *otomatik* tekrarlayın.", { bolge: HESAP,
        vurgu: [{ hedef: ["Aylık Temizlik Sarf Aboneliği", "Aylık, her ayın 5. günü"], not: "Sipariş her ayın aynı günü kendiliğinden oluşur" }],
        dikey: { tip: "telefon", ekran: "m-periyodik",
          vurgu: [{ hedef: ["Aylık Temizlik Sarf Aboneliği", "Aylık, her ayın 5. günü"], not: "Sipariş her ayın aynı günü kendiliğinden oluşur" }] } }),
      kapanis("Kat arabasını *eksiksiz* hazırlayın."),
    ],
  },

  // ── 23 · Okul (kelime kancası → Okul paketi → departman bütçesi)
  {
    id: "tanitim-23-okul", tur: "tanitim", baslik: "Okul: dönem başlamadan hazır", tohum: 23, ton: 0, surum: 2,
    sahneler: [
      { tip: "kelime", ust: "Okullar ve eğitim kurumları", kelimeler: ["Tuvalet kağıdı.", "Kağıt havlu.", "El sabunu."], son: "Dönem başlamadan *hepsini* hazırlayın." },
      ek("paket-okul", "Okulun temel ihtiyacını *tek pakette* alın.", { bolge: PAKET,
        vurgu: [{ hedef: ["Eğitim", "En Avantajlı"], not: "Paket panelde En Avantajlı etiketiyle yer alır" },
          { hedef: ["₺8.387,55", "[]Paket içi %10 indirim otomatik uygulanır"], not: "Paket içi %10 indirimle ₺931,95 tasarruf edersiniz" }],
        dikey: { tip: "telefon", ekran: "m-paketler", yol: "Vitrin › Paketler",
          vurgu: [{ hedef: ["Okul & Eğitim Kurumu Paketi", "En Avantajlı"], not: "Paket panelde En Avantajlı etiketiyle yer alır" },
            { hedef: "₺931,95 tasarruf · %10", not: "Paket içi %10 indirimle ₺931,95 tasarruf edersiniz" }] } }),
      ek("departmanlar", "Her birimin *bütçesini* ayrı izleyin.", { bolge: HESAP,
        vurgu: [{ hedef: ["İdari İşler", "/ ₺45.000,00"], not: "Bu ayki harcama, aylık bütçenin yanında görünür" }],
        dikey: { tip: "telefon", ekran: "m-departmanlar",
          vurgu: [{ hedef: ["İdari İşler", "/ ₺45.000,00"], not: "Bu ayki harcama, aylık bütçenin yanında görünür" }] } }),
      kapanis("Yeni döneme *hazır* başlayın."),
    ],
  },

  // ── 24 · Restoran (kelime kancası → Restoran paketi → hızlı sipariş)
  {
    id: "tanitim-24-restoran", tur: "tanitim", baslik: "Restoran: mutfak hijyeni tek pakette", tohum: 24, ton: -2, surum: 2,
    sahneler: [
      { tip: "kelime", ust: "Restoran ve kafe mutfakları", kelimeler: ["Deterjan.", "Eldiven.", "Yağ sökücü."], son: "Hepsini *tek siparişte* alın." },
      ek("paket-restoran", "Mutfak hijyenini *tek pakette* toplayın.", { bolge: PAKET, bolgeD: B(283, 190, 800, 800),
        vurgu: [{ hedef: ["~4 × Ritm Sıvı Bulaşık", "~Mavi Nitril Eldiven sağlık"], not: "Deterjan, tablet, yağ sökücü ve eldiven aynı pakette gelir" },
          { hedef: ["₺15.914,61", "[]Paket içi %10 indirim otomatik uygulanır"], not: "Paket fiyatına %10 indirim kendiliğinden yansır" }] }),
      ek("hizli", "Eksilen ürünü *koduyla* ekleyin.", { bolge: HESAP,
        yaz: { hedef: "Ürün ara (ad veya kod)", metin: "MNM01" },
        dikey: { tip: "telefon", ekran: "m-hizli", yaz: { hedef: "Ürün ara (ad veya kod)", metin: "MNM01" } } }),
      kapanis("Mutfağı servise *hazır* tutun."),
    ],
  },

  // ── 25 · Ofis (karakter → Ofis paketi → telefonda aboneliğe çevir → mutfak seti)
  {
    id: "tanitim-25-ofis", tur: "tanitim", baslik: "Ofis: bir aylık ihtiyaç tek pakette", tohum: 25, ton: 3, surum: 2,
    sahneler: [
      { tip: "karakter", avatar: { sac: "kisa", ten: "acik", sacRenk: "#2A1E17", giysi: "#2F4858", yaka: "kravat", gozluk: true, ruh: "dertli" },
        ad: "Murat", rol: "Ofis yöneticisi", ikon: "list", metin: "Her ay *aynı listeyi* yazıyorum." },
      ek("paket-ofis", "Bir aylık ihtiyacı *tek pakette* alın.", { bolge: PAKET,
        vurgu: [{ hedef: ["₺4.472,86", "[]Paket içi %8 indirim otomatik uygulanır"], not: "Paket içi %8 indirimle ₺388,94 tasarruf edersiniz" }],
        dikey: { tip: "telefon", ekran: "m-paket-ofis",
          vurgu: [{ hedef: ["₺4.472,86", "Paket içi % 8 indirim otomatik uygulanır"], not: "Paket içi %8 indirimle ₺388,94 tasarruf edersiniz" }] } }),
      tel("m-paket-ofis", "Paketi *aylık aboneliğe* çevirin.", { basY: 1061,
        tikla: { hedef: "Aboneliğe Çevir (aylık)", sonuc: "Aylık abonelik oluşturuldu" },
        dikey: { tip: "telefon", ekran: "m-paket-ofis", basY: 1138, tikla: { hedef: "Aboneliğe Çevir (aylık)", sonuc: "Aylık abonelik oluşturuldu" } } }),
      ek("paket-mutfak", "Mutfak için *bulaşık setini* ekleyin.", { bolge: PAKET,
        vurgu: [{ hedef: ["Finish Calgonıt Quantum Tablet 100 lü", "~Bulaşık makinesi için 750 ml"], not: "Tablet, tuz ve parlatıcı aynı sette gelir" }],
        dikey: { tip: "telefon", ekran: "m-paketler", yol: "Vitrin › Paketler",
          vurgu: [{ hedef: ["Finish Calgonıt Quantum Tablet 100 lü", "ASPEROX BULAŞIK MAKİNE PARLATICI 750 ML"], not: "Tablet, tuz ve parlatıcı aynı sette gelir" }] } }),
      kapanis("Aylık siparişi *bir kez* ayarlayın."),
    ],
  },

  // ── 26 · Sağlık (soru → onay kuralı → departman bütçesi → telefondan onay)
  {
    id: "tanitim-26-saglik", tur: "tanitim", baslik: "Sağlık kuruluşları: kontrol sizde", tohum: 26, ton: -3, surum: 2,
    sahneler: [
      { tip: "soru", metin: "Hangi sipariş *kimin onayından* geçiyor?", alt: "Her departman için kuralı siz belirleyin.",
        cipler: [["building", "Departman"], ["wallet", "Tutar"], ["approve", "Onaylayan"]] },
      ek("onay-kural-yeni", "Onay kurallarını *siz* belirleyin.", { bolge: B(565, 190, 1080, 478),
        vurgu: [{ hedef: ["Alt Tutar (₺) (opsiyonel)", "~Tüm departmanlar"], not: "Kural tutara ve departmana göre çalışır" }],
        dikey: { tip: "telefon", ekran: "m-onay-kurallari",
          vurgu: [{ hedef: ["10.000 TL Üzeri Siparişler", "Tutar: ₺10.000,00 – ∞"], not: "Bu tutarı aşan sipariş onay bekler" }] } }),
      ek("butce", "Departman *bütçelerini* izleyin.", { bolge: B(565, 290, 1072, 474),
        vurgu: [{ hedef: "[]Satın Alma ₺150.000,00", not: "Bütçe, harcama ve kalan tutar aynı satırda görünür" }],
        dikey: { tip: "telefon", ekran: "m-departmanlar", yol: "Hesabım › Departman & Bütçe",
          vurgu: [{ hedef: ["Satın Alma", "/ ₺150.000,00"], not: "Harcama ve aylık bütçe kartta yan yana görünür" }] } }),
      onayla("Bekleyen siparişi *telefondan* onaylayın."),
      kapanis("Her siparişi *kendi kurallarınızla* onaylayın."),
    ],
  },
];
