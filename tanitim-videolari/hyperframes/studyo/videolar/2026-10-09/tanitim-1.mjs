// 2026-10-09 serisi · Tanıtım 20–26: kanca ve sektörler (kurgu v3, surum 3).
// Kurgu: kanca (≤ 3 sn; kelime / soru / dertli karakter) → panel anları → kanıt → kapanış (4,5 sn).
//   15 sn'lik tanıtımda tek panel anı; kanıt onun notunda. 20–30 sn'likte iki panel anı ve kanıt sahnesi (rakamlar / sayaç)
//   ya da kişi hikâyesinde aynı kişinin mutlu ve rozetli dönüşü. Kancalar partide sırayla değişir: kelime, soru, karakter.
// Kelime kancalarında ana cümle (son) boş: kelimeler 3 sn içinde gelip çıkar, mesajı ilk panel ekranının başlığı söyler.
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakamlar ve etiketler 9 Ekim element haritalarından okundu.
// Yalnızca paneldeki kurallar rakam olarak kullanılır: paket içi %8 / %10 indirim ve paket tasarrufu (paket-otel ₺879,28,
// paket-okul ₺931,95, paket-restoran ₺1.768,29, paket-ofis ₺388,94), peşin ödemede %2, ₺3.500 üzeri ücretsiz kargo,
// hızlı siparişte en fazla 100 satır, sadakat "1 birim = 100 puan = 10 TL", onay zinciri "Seviye 1 → 2 → 3". Demo hesabın tutarları vurgulanmaz.
// Kayıt değiştiren tıklamalar (Onayla, Aboneliğe Çevir) panelde yapılmaz; motor yalnız canlandırır.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, metin, ayar) => ({ tip: "ekran", ekran, metin, ...ayar });
const tel = (ekran, metin, ayar) => ({ tip: "telefon", ekran, metin, ...ayar });
const kapanis = (slogan, cta = "Kurumsal hesap açın") => ({ tip: "kapanis", slogan, cta });
const T = (id, baslik, tohum, ton, sahneler) => ({ id, tur: "tanitim", baslik, tohum, ton, surum: 3, sahneler });
// Kurgusal kişi: açılışta dertli, sonda aynı kişi (aynı avatar, ad, rol, ikon) mutlu ve rozetli
const kisi = (k, ruh, metin, ek = {}) => ({ tip: "karakter", avatar: { ...k.avatar, ruh }, ad: k.ad, rol: k.rol, ikon: k.ikon, metin, ...ek });
// Telefonda bekleyen onay: önce kartta bir bilgi, sonra Onayla (tıklama halkası artık yalnız dokunuş anında görünür)
const onayla = (metin, vurgu) => tel("m-onaylarim", metin, { vurgu: [vurgu], tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } });
// Paket sayfaları: başlık, bant ve fiyat kutusu tek kadrajda (üstteki iletişim çubuğu kadraj dışında)
const PAKET = B(283, 200, 1360, 600);
// Hesap sayfaları: içerik alanı (sol menü dışarıda)
const HESAP = B(555, 185, 1095, 485);
// Hızlı Sipariş: "En fazla 100 satır" yazısı (öğe 1036 px'lik satırın tamamı; görünen yazı ~85 px)
const SATIR100 = B(578, 455, 86, 26), SATIR100_M = B(17, 510, 100, 22);   // mobilde ilk satırın başı

// Kişiler
const SEVGI = { avatar: { sac: "topuz", ten: "bugday", sacRenk: "#3B2A20", giysi: "#0B5677", yaka: "gomlek" }, ad: "Sevgi", rol: "Kat hizmetleri şefi", ikon: "building" };
const MURAT = { avatar: { sac: "kisa", ten: "acik", sacRenk: "#2A1E17", giysi: "#2F4858", yaka: "kravat", gozluk: true }, ad: "Murat", rol: "Ofis yöneticisi", ikon: "list" };

export default [
  // ── 20 · Hepsi tek panelde (15 sn): kelime kancası → panel menüsü (kanıt notta) → kapanış
  T("tanitim-20-tek-panel", "Hepsi tek panelde", 20, 1, [
    { tip: "kelime", kelimeler: ["Telefon.", "E-posta.", "Excel."], ciz: true, son: "", sure: 3 },
    // Sol menü: sipariş, onay ve fatura aynı listede; sadakat kuralı kanıt notu. Üstteki demo tutarları vurgulanmaz.
    ek("ozet", "Hepsini *tek panelde* bulun.", { bolge: B(283, 185, 1360, 835),
      vurgu: [{ hedef: ["Siparişlerim", "Faturalarım"], not: "Sipariş, onay ve fatura aynı menüde durur" },
        { hedef: "Sadakat Programı", not: "Her 100 puan 10 TL'lik kupona dönüşür" }],
      dikey: { tip: "telefon", ekran: "m-menu-hesap",
        vurgu: [{ hedef: ["Siparişlerim", "Faturalarım"], not: "Sipariş, onay ve fatura aynı menüde durur" },
          { hedef: "Sadakat", not: "Her 100 puan 10 TL'lik kupona dönüşür" }] } }),
    kapanis("Satın almayı *tek yerden* yönetin."),
  ]),

  // ── 21 · Panel cebinizde: soru → masaüstü + telefon → telefondan onay → kanıt (mobilde de aynı kurallar) → kapanış
  T("tanitim-21-panel-cebinizde", "Panel cebinizde", 21, -1, [
    { tip: "soru", metin: "Onay için *masaya* mı dönüyorsunuz?", sure: 3,
      cipler: [["clock", "Toplantıda"], ["truck", "Yolda"], ["building", "Şubede"]] },
    { tip: "cihaz", metin: "Bilgisayardaki panel *telefonda* da çalışır.", alt: "Siparişleriniz iki ekranda da aynı görünür", ikon: "phone", sure: 5.5,
      masa: { ekran: "siparisler", bolge: B(555, 180, 1095, 620) }, tel: { ekran: "m-siparisler", basY: 160 } },
    onayla("Siparişi *tek dokunuşla* onaylayın.", { hedef: "Sipariş tutarı: ₺1.779,56", not: "Tutar ve ürünler tek kartta görünür" }),
    // Mobil haritalarda da aynı: m-hizli "En fazla 100 satır", m-kampanyalar "Peşin Ödeme %2", "₺3.500,00 ve üzeri"
    { tip: "rakamlar", baslik: "Avantajlar *telefonda da* aynı kalır.", sure: 5,
      kartlar: [{ ikon: "list", deger: 100, sonek: "satır", etiket: "Hızlı siparişte tek form" },
        { ikon: "wallet", onek: "%", deger: 2, etiket: "Peşin ödeme indirimi" },
        { ikon: "truck", deger: 3500, para: true, ondalik: 0, etiket: "Ücretsiz kargo sınırı" }] },
    kapanis("Siparişleri *her yerden* onaylayın.", "Panelde deneyin"),
  ]),

  // ── 22 · Otel (kişi hikâyesi): dertli Sevgi → Otel Housekeeping paketi → periyodik sipariş → mutlu Sevgi → kapanış
  T("tanitim-22-otel", "Otel: kat hizmetleri tek panelde", 22, 2, [
    kisi(SEVGI, "dertli", "Kat arabası hep *eksik çıkıyor.*", { sure: 3 }),
    ek("paket-otel", "Kat ürünlerini *tek pakette* alın.", { bolge: B(283, 195, 1360, 680), bolgeD: B(283, 190, 800, 800),
      vurgu: [{ hedef: ["12 × Domestos Pro Tuvalet Temizleyici Asidik 750 ml", "~Kapalı ortamlarda hoş"], not: "Tuvalet, cam ve oda ürünleri aynı pakette gelir" },
        { hedef: ["₺7.913,52", "[]Paket içi %10 indirim otomatik uygulanır"], not: "Paket içi %10 indirimle ₺879,28 tasarruf edersiniz" }] }),
    ek("periyodik", "Siparişi her ay *otomatik* tekrarlayın.", { bolge: HESAP,
      vurgu: [{ hedef: ["Aylık periyodik sipariş", "Aylık, her ayın 1. günü"], not: "Sipariş her ayın aynı günü kendiliğinden oluşur" }],
      dikey: { tip: "telefon", ekran: "m-periyodik",
        vurgu: [{ hedef: ["Aylık periyodik sipariş", "Aylık, her ayın 1. günü"], not: "Sipariş her ayın aynı günü kendiliğinden oluşur" }] } }),
    kisi(SEVGI, "mutlu", "Artık siparişim her ay *kendiliğinden* oluşuyor.", { rozet: true, sure: 4 }),
    kapanis("Kat arabasını *eksiksiz* hazırlayın."),
  ]),

  // ── 23 · Okul: kelime kancası → Okul paketi → departman bütçesi → kanıt (paket kuralları) → kapanış
  T("tanitim-23-okul", "Okul: dönem başlamadan hazır", 23, 0, [
    { tip: "kelime", ust: "Okullar ve eğitim kurumları", kelimeler: ["Tuvalet kağıdı.", "Kağıt havlu.", "El sabunu."], son: "", sure: 2.5 },
    ek("paket-okul", "Dönem başlamadan hepsini *tek pakette* alın.", { bolge: PAKET,
      vurgu: [{ hedef: ["Eğitim", "~Okul tuvaletleri ve sınıflar için"], not: "Tuvalet kağıdı, kağıt havlu ve el sabunu aynı pakette gelir" },
        { hedef: ["₺8.387,55", "[]Paket içi %10 indirim otomatik uygulanır"], not: "İndirim sepette kendiliğinden uygulanır" }],
      dikey: { tip: "telefon", ekran: "m-paketler", yol: "Vitrin › Paketler",
        vurgu: [{ hedef: ["Okul & Eğitim Kurumu Paketi", "En Avantajlı"], not: "Tuvalet kağıdı, kağıt havlu ve el sabunu aynı pakette gelir" },
          { hedef: "₺931,95 tasarruf · %10", not: "İndirim sepette kendiliğinden uygulanır" }] } }),
    ek("departmanlar", "Her birimin *bütçesini* ayrı izleyin.", { bolge: HESAP,
      vurgu: [{ hedef: ["İdari İşler", "/ ₺45.000,00"], not: "Bu ayki harcama, aylık bütçenin yanında görünür" }],
      dikey: { tip: "telefon", ekran: "m-departmanlar",
        vurgu: [{ hedef: ["İdari İşler", "/ ₺45.000,00"], not: "Bu ayki harcama, aylık bütçenin yanında görünür" }] } }),
    { tip: "rakamlar", baslik: "İndirim ve ücretsiz kargo *kendiliğinden* uygulanır.", sure: 5,
      kartlar: [{ ikon: "percent", onek: "%", deger: 10, etiket: "Paket içi indirim" },
        { ikon: "wallet", deger: 931.95, para: true, ondalik: 2, etiket: "Okul paketinde tasarruf" },
        { ikon: "truck", deger: 3500, para: true, ondalik: 0, etiket: "Üzerinde kargo ücretsiz" }] },
    kapanis("Okulun siparişlerini *önceden* planlayın."),
  ]),

  // ── 24 · Restoran: soru → Restoran paketi → hızlı siparişte ürün kodu → kanıt (paket ve ödeme kuralları) → kapanış
  T("tanitim-24-restoran", "Restoran: mutfak hijyeni tek pakette", 24, -2, [
    { tip: "soru", metin: "*Eldiven* yine mi bitti?", sure: 3,
      cipler: [["flask", "Deterjan"], ["shield", "Eldiven"], ["bolt", "Yağ sökücü"]] },
    ek("paket-restoran", "Mutfak hijyenini *tek pakette* toplayın.", { bolge: PAKET, bolgeD: B(283, 190, 800, 800),
      vurgu: [{ hedef: ["~4 × Ritm Sıvı Bulaşık", "~Mavi Nitril Eldiven sağlık"], not: "Deterjan, tablet, yağ sökücü ve eldiven aynı pakette gelir" },
        { hedef: ["₺15.914,61", "[]Paket içi %10 indirim otomatik uygulanır"], not: "İndirim sepette kendiliğinden uygulanır" }] }),
    // MNM01: paketteki nitril eldivenin ürün kodu (paket-restoran haritası)
    ek("hizli", "Eksilen ürünü *koduyla* ekleyin.", { bolge: HESAP,
      vurgu: [{ hedef: SATIR100, not: "Tek formda 100 satıra kadar ürün girilir" }],
      yaz: { hedef: "Ürün ara (ad veya kod)", metin: "MNM01" },
      dikey: { tip: "telefon", ekran: "m-hizli",
        vurgu: [{ hedef: SATIR100_M, not: "Tek formda 100 satıra kadar ürün girilir" }],
        yaz: { hedef: "Ürün ara (ad veya kod)", metin: "MNM01" } } }),
    { tip: "rakamlar", baslik: "Mutfak paketi *indirimle* gelir.", sure: 5,
      kartlar: [{ ikon: "percent", onek: "%", deger: 10, etiket: "Paket içi indirim" },
        { ikon: "wallet", deger: 1768.29, para: true, ondalik: 2, etiket: "Restoran paketinde tasarruf" },
        { ikon: "invoice", onek: "%", deger: 2, etiket: "Peşin ödeme indirimi" }] },
    kapanis("Mutfağı servise *hazır* tutun."),
  ]),

  // ── 25 · Ofis (kişi hikâyesi): dertli Murat → Ofis paketi → telefonda aboneliğe çevir → mutlu Murat → kapanış
  T("tanitim-25-ofis", "Ofis: bir aylık ihtiyaç tek pakette", 25, 3, [
    kisi(MURAT, "dertli", "Her ay *aynı listeyi* yazıyorum.", { sure: 3 }),
    ek("paket-ofis", "Bir aylık ihtiyacı *tek pakette* alın.", { bolge: PAKET,
      vurgu: [{ hedef: ["~5 × Z Katlama", "~5 × Mini Cimri"], not: "Dört temel ürün aynı pakette gelir" },
        { hedef: ["₺4.472,86", "[]Paket içi %8 indirim otomatik uygulanır"], not: "Paket içi %8 indirimle ₺388,94 tasarruf edersiniz" }],
      dikey: { tip: "telefon", ekran: "m-paket-ofis",
        // mobilde dört ürünün listesi ekrana sığmıyor: "Paket İçeriği (4 ürün)" başlığı ve ilk ürün
        vurgu: [{ hedef: ["Paket İçeriği ( 4 ürün)", "~5 × Z Katlama"], not: "Dört temel ürün aynı pakette gelir" },
          { hedef: ["₺4.472,86", "Paket içi % 8 indirim otomatik uygulanır"], not: "Paket içi %8 indirimle ₺388,94 tasarruf edersiniz" }] } }),
    // basY: telefon sahne başında düğmenin bulunduğu fiyat kutusunda açılır (yatay ve dikey ölçek farklı)
    tel("m-paket-ofis", "Paketi *aylık aboneliğe* çevirin.", { basY: 1061,
      tikla: { hedef: "Aboneliğe Çevir (aylık)", sonuc: "Aylık abonelik oluşturuldu" },
      dikey: { tip: "telefon", ekran: "m-paket-ofis", basY: 1138, tikla: { hedef: "Aboneliğe Çevir (aylık)", sonuc: "Aylık abonelik oluşturuldu" } } }),
    kisi(MURAT, "mutlu", "Artık paketi her ay *abonelikle* alıyorum.", { rozet: true, sure: 4 }),
    kapanis("Aylık siparişi *bir kez* ayarlayın."),
  ]),

  // ── 26 · Sağlık: soru → onay kuralı → telefondan onay → kanıt (üç seviyeli onay zinciri) → kapanış
  T("tanitim-26-saglik", "Sağlık kuruluşları: kontrol sizde", 26, -3, [
    { tip: "soru", metin: "Hangi sipariş *kimin onayından* geçiyor?", sure: 3,
      cipler: [["building", "Departman"], ["wallet", "Tutar"], ["approve", "Onaylayan"]] },
    ek("onay-kural-yeni", "Onay kurallarını *siz* belirleyin.", { bolge: B(565, 190, 1080, 478),
      vurgu: [{ hedef: ["Alt Tutar (₺) (opsiyonel)", "~Tüm departmanlar"], not: "Kural tutara ve departmana göre çalışır" }],
      dikey: { tip: "telefon", ekran: "m-onay-kurallari",
        vurgu: [{ hedef: "~Belirli tutar/departman koşullarına", not: "Kural tutara ve departmana göre çalışır" }] } }),
    onayla("Bekleyen siparişi *telefondan* onaylayın.", { hedef: "~Açan: Zeynep Kaya", not: "Siparişi açan kişi ve departmanı kartta yazar" }),
    // onay-kural-yeni: "Koşula uyan siparişler bu kişilerin onayını sırayla bekler (Seviye 1 → 2 → 3)"
    { tip: "sayac", baslik: "Onay zinciri *üç seviyeye* kadar uzar.", deger: 3, sonek: "seviye", alt: "Her seviye sırayla onay verir" },
    kapanis("Her siparişi *kendi kurallarınızla* onaylayın."),
  ]),
];
