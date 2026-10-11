// 2026-10-09 serisi · Tanıtım 34–39: avantaj, hız, hesap açma (surum 3 kurgusu).
// Kurgu v3: 15 sn'lik videolar kanca (≤ 3 sn) → tek panel anı (kanıt notta) → kısa kapanış (4,5 sn); 25 sn'lik kişi hikâyeleri
// dertli kanca → 2 panel anı → aynı kişinin mutlu, rozetli dönüşü → kapanış. Kancalar: soru 34, 39 · kelime 35, 37 · karakter 36, 38.
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakamlar ve etiketler bugünkü öğe haritalarından okundu:
//   kampanyalar "Sürekli Avantajlar" (Çok Al Az Öde, Peşin Ödeme %2 İndirim, Ücretsiz Kargo ₺3.500,00) + "Paket Fırsatları" (rozetler %8 ve %10);
//   giris "14:00'a kadar verilen siparişler aynı gün kargoda", urun "Stok: 88 adet · 1 iş günü içinde kargo";
//   katalog 7 kategori (75 + 328 + 149 + 63 + 300 + 224 + 187 = 1326 ürün); kayit "Cari özel fiyatlar onay sonrası otomatik tanımlanır."
// Demo hesabın tutarları fayda gibi sunulmaz. Kayıt değiştiren tıklamalar (Onayla, Sepete Ekle, Numune Talep Et) panelde yapılmaz; motor yalnız canlandırır.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, metin, ayar) => ({ tip: "ekran", ekran, metin, ...ayar });
const tel = (ekran, metin, ayar) => ({ tip: "telefon", ekran, metin, ...ayar });
const kapanis = (slogan, cta = "Kurumsal hesap açın") => ({ tip: "kapanis", slogan, cta });
const T = (no, id, baslik, ton, sahneler) => ({ id, tur: "tanitim", baslik, tohum: no, ton, surum: 3, sahneler });
// Kişi hikâyesi: aynı kişi başta dertli (kanca, 3 sn), sonda mutlu ve rozetli döner (aynı avatar, ad, rol, ikon)
const kisi = (k) => ({
  dertli: (metin) => ({ tip: "karakter", avatar: { ...k.avatar, ruh: "dertli" }, ad: k.ad, rol: k.rol, ikon: k.ikon, metin, sure: 3 }),
  mutlu: (metin, sure) => ({ tip: "karakter", avatar: { ...k.avatar, ruh: "mutlu" }, ad: k.ad, rol: k.rol, ikon: k.ikon, metin, rozet: true, ...(sure ? { sure } : {}) }),
});

// Motor geçici çözümü (tanitim-1 ile aynı): tıklama halkası dokunuştan önce sahne boyunca 20 px'lik sarı nokta olarak görünüyor.
// Telefon onayında başlangıç kaydırması (basY), noktanın baştan Onayla düğmesinin üstünde durmasını sağlayacak şekilde seçildi.
// Dikeyde dokunuş kamerası "Açan: Zeynep Kaya" satırını üst çubuğun altında bırakıyor: başlık isim vermez.
const onayla = (metin, metinD) => tel("m-onaylarim", metin, { basY: 215, tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" },
  dikey: { tip: "telefon", ekran: "m-onaylarim", metin: metinD, basY: 292, tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } } });
// Numune formunda kullanıcının adı iki alanda yazılı (İsim Soyisim, Firma Ünvanı): kamera yukarı kaydığında görünmesin
const NUMUNE_AD = [B(647, 345, 626, 38), B(647, 567, 626, 38)];

// Onay kartında "Açan: Zeynep Kaya" yazıyor: satın almacı karakteri bu yüzden Zeynep.
const ZEYNEP = kisi({ avatar: { sac: "uzun", ten: "bugday", sacRenk: "#3B2416", giysi: "#1D5FA8", yaka: "gomlek" }, ad: "Zeynep", rol: "Satın alma sorumlusu", ikon: "cart" });
const ECE = kisi({ avatar: { sac: "topuz", ten: "acik", sacRenk: "#5A3A22", giysi: "#2E6B4F", yaka: "gomlek", gozluk: true }, ad: "Ece", rol: "Tesis sorumlusu", ikon: "box" });

export default [
  // ── 34 · Kupon kodu gerektirmeyen 4 avantaj (15 sn: soru + 4 çip → Kampanyalar: Sürekli Avantajlar + paket rozetleri → kapanış)
  T(34, "tanitim-34-avantajlar", "Kupon kodu gerektirmeyen 4 avantaj", 2, [
    { tip: "soru", metin: "İndirim için *kupon kodu* gerekir mi?", sure: 3,
      cipler: [["percent", "Çok Al Az Öde"], ["wallet", "Peşin ödeme"], ["truck", "Ücretsiz kargo"], ["package", "Paket"]] },
    ek("kampanyalar", "Avantajları *Kampanyalar* sayfasında görün.", { bolge: B(270, 190, 1380, 610),
      // Üç kartın yazı alanı: kartların tamamı (1354 px) görünümün %94'ünden geniş olduğu için kamera sola yaslanıp sağı kesiyordu.
      // Not "sepete" demez: peşin %2 sepette değil, Havale/EFT ödemesinde düşülür. Sayfadaki ifade: "uygun koşulda otomatik uygulanır".
      // Kanıt ikinci notta: paket kartlarındaki rozetler "%8" ve "%10" (Ofis Mutfağı %8, Okul & Eğitim %10 yan yana).
      vurgu: [{ hedef: ["Çok Al Az Öde", "~Kademeli iskontolu ürünlerde", "~₺3.500,00 ve üzeri"], not: "Koşul sağlanınca avantaj otomatik uygulanır." },
        { hedef: ["₺93,22 tasarruf · %8", "₺931,95 tasarruf · %10"], not: "Paketlerde %8–%10 indirim sepette düşer." }],
      dikey: { tip: "telefon", ekran: "m-kampanyalar",
        vurgu: [{ hedef: ["Çok Al Az Öde", "~₺3.500,00 ve üzeri"], not: "Koşul sağlanınca avantaj otomatik uygulanır." },
          { hedef: ["Paket Fırsatları", "~Belirli ürünleri birlikte alın"], not: "Paketlerde %8–%10 indirim sepette düşer." }] } }),
    kapanis("İndirimleri *kod girmeden* kullanın.", "Panelde deneyin"),
  ]),

  // ── 35 · Saat 14:00, bugün kargoda (15 sn: kelime → ürün sayfasında stok satırı + Sepete Ekle, kanıt notta → kapanış)
  // "14:00'a kadar verilen siparişler aynı gün kargoda" giriş ve kayıt sayfalarında yazıyor (kancada). Ekran başlığı ve not "aynı gün" demez:
  // vurgulanan satır "1 iş günü içinde kargo" yazıyor, ekranla çelişmesin. Masaüstü ürün sayfasındaki "Pazartesi kargoda" rozeti
  // (cuma akşamı çekim) kadraj dışında bırakıldı.
  T(35, "tanitim-35-saat-14", "Saat 14:00, bugün kargoda", -1, [
    { tip: "kelime", kelimeler: ["14:00'a kadar."], son: "Sipariş *aynı gün* kargoda.", sure: 3 },
    // Dikey: m-urun'daki stok satırı çekimin dibinde (y 1584 / 1800) kalıp telefonda güvenli alanın altına düşüyor; aynı bilgi
    // sayfanın üstündeki "Stoktaki ürünlerde 1 iş günü içinde kargo" şeridinde de yazıyor, dikeyde o vurgulanır (mobil çekim).
    ek("urun", "Stoğu görün, *hemen* sepete ekleyin.", { saat: "13:45", bolge: B(815, 560, 830, 367),
      vurgu: [{ hedef: "Stok: 88 adet · 1 iş günü içinde kargo", not: "Stoktaki ürün 1 iş günü içinde kargoya verilir." }],
      tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" },
      dikey: { tip: "telefon", ekran: "m-urun", saat: "13:45",
        vurgu: [{ hedef: "[]Stoktaki ürünlerde 1 iş günü içinde kargo", not: "Stoktaki ürün 1 iş günü içinde kargoya verilir." }],
        tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" } } }),
    kapanis("Acil ihtiyacı *beklemeden* karşılayın."),
  ]),

  // ── 36 · Aynı panel, iki rol (dertli Zeynep → satın almacı: hızlı sipariş → yönetici: telefondan onay → Zeynep mutlu → kapanış)
  T(36, "tanitim-36-iki-rol", "Aynı panel, iki rol", 1, [
    ZEYNEP.dertli("Onay için *yöneticimi* bekliyorum."),
    // Yazma kamerası sol menüye kayıyor: menüdeki hesap sahibinin adı da (e-postası gibi) gri bantla kapatılır
    ek("hizli", "Satın almacı ürünleri *kodlarıyla* ekler.", { bolge: B(555, 185, 1095, 485), ortu: ["Can Çatma"],
      yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" },
      tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" },
      dikey: { tip: "telefon", ekran: "m-hizli", yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" },
        tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" } } }),
    onayla("Yönetici siparişi *telefondan* onaylar.", "Yönetici siparişi *telefondan* onaylar."),
    ZEYNEP.mutlu("Siparişimi yöneticim *tek dokunuşla* onayladı."),
    kapanis("Siparişi hazırlayın, *yöneticiniz* onaylasın."),
  ]),

  // ── 37 · Yedi kategori, tek tedarikçi (15 sn: kelime → katalogdaki kategori filtresi ve ürün sayıları, kanıt notta → kapanış)
  T(37, "tanitim-37-yedi-kategori", "Yedi kategori, tek tedarikçi", -2, [
    { tip: "kelime", ust: "Kağıt · Kimyasal · Mutfak · Ekipman", kelimeler: ["7 kategori."], son: "*Tek sepette* birleşir.", sure: 3 },
    ek("katalog", "Yedi kategoriyi *tek katalogda* gezin.", { bolge: B(283, 180, 960, 425), bolgeD: B(283, 190, 480, 480),
      vurgu: [{ hedef: ["Kağıt Ürünleri 75", "Atık Yönetimi & Ortam Bakımı 187"], not: "7 kategoride toplam 1.326 ürün listelenir." }],
      tikla: { hedef: "Kağıt Ürünleri 75", sonuc: "Kağıt ürünleri listelendi" } }),
    kapanis("Tüm ihtiyacı *tek siparişte* toplayın."),
  ]),

  // ── 38 · Doğru ürün, ilk seferde (dertli Ece → Teknik Özellikler: Dispenser Uyumu → ücretsiz numune formu → Ece mutlu → kapanış)
  T(38, "tanitim-38-dogru-urun", "Doğru ürün, ilk seferde", 3, [
    ECE.dertli("Aldığım havlu *dispensere* uymadı."),
    // Vurgu kamerası en fazla 2,3 kat büyütür (kadraj 740 px'ten darsa vurguda geri çekiliyor) ve hedefi ortalar.
    // Yatay: satırın tamamı vurgulanınca görünüm x 1047'den başlıyor, soldaki açıklama paragrafının kesik satır sonları
    // ("…lmak üzere", "…nluğundadır.") görünüyordu. Vurgu cevabın kendisinde: değer yazısının kutusu (ham kutu, x 1459–1615,
    // sağa yaslı); görünüm x 1166'dan başlar, paragraf 1158'de biter. Kadraj vurgu görünümüyle aynı, kamera yer değiştirmez.
    // "Dispenser Uyumu" etiketi aynı satırda solda okunur.
    // Dikeyde aynı tablo urun-alt çekiminde sayfanın ortasında: urun-teknik'te satır üstte kaldığı için kamera yapışkan kategori
    // çubuğunu da gösteriyordu.
    ek("urun-teknik", "Uyumu *Teknik Özellikler* bölümünde görün.", { bolge: B(1166, 114, 740, 327),
      vurgu: [{ hedef: B(1453, 268, 166, 24), not: "Satın almadan önce dispenser tipinizle karşılaştırın." }],
      dikey: { tip: "ekran", ekran: "urun-alt", yol: "Kağıt Ürünleri › Ürün", bolge: B(1180, 340, 476, 476),
        vurgu: [{ hedef: ["Dispenser Uyumu", "Fotoselli Havlu Dispenseri"], not: "Satın almadan önce dispenser tipinizle karşılaştırın." }] } }),
    // Yazma (yaz) yerine vurgu: yazma kamerası hedefin 260 px soluna da yer açıyor, dar kadrajda formun solundaki boş alana kayıyordu.
    // Dikeyde alanın tamamı görünüme sığmıyor: vurgu etiket ve örnek metnin olduğu sol kısımda (ham kutu).
    ek("numune-yeni", "Emin değilseniz *ücretsiz numune* isteyin.", { bolge: B(630, 610, 740, 330), ortu: NUMUNE_AD,
      vurgu: [{ hedef: ["Talep Ettiğiniz Ürünler", "Virgülle ayırarak yazın. Örn: MTS-1001, MTS-2030"], not: "Satış ekibi onaylayınca numune gönderilir." }],
      tikla: { hedef: "Numune Talep Et", sonuc: "Numune talebi gönderildi" },
      dikey: { tip: "ekran", ekran: "numune-yeni", bolge: B(640, 610, 520, 330), ortu: NUMUNE_AD,
        vurgu: [{ hedef: B(641, 615, 320, 64), not: "Satış ekibi onaylayınca numune gönderilir." }],
        tikla: { hedef: "Numune Talep Et", sonuc: "Numune talebi gönderildi" } } }),
    ECE.mutlu("Artık önce *dispenser uyumuna* bakıyorum."),
    kapanis("Ürünü *önce deneyin,* sonra sipariş verin."),
  ]),

  // ── 39 · Kurumsal hesabınızı açın (15 sn: soru → Kurumsal Üyelik formu: Kurumsal sekmesi + Üyeliği Tamamla, kanıt notta → kapanış)
  // Notlar sayfadaki cümlelerden: "Firma bilgilerinizi gönderin, hemen liste fiyatları ile alışveriş yapın." ve
  // "Cari özel fiyatlar onay sonrası otomatik tanımlanır." "Atanmış temsilci" (danışman, WhatsApp desteği), "5 dakikada" ve
  // sertifika satırı hizmet/şirket iddiası: kullanılmaz, kadraja girmez.
  // Kadraj formun başı (başlık, Kurumsal sekmesi, firma ve vergi alanları); x 842: soldaki mavi sütunun yazı sonu ("…aktif") kesik görünmesin.
  T(39, "tanitim-39-kurumsal-hesap", "Kurumsal hesabınızı açın", 0, [
    { tip: "soru", metin: "Cari özel fiyat *nasıl* alınır?", sure: 3,
      cipler: [["building", "Firma bilgisi"], ["doc", "Vergi no"], ["approve", "Onay"]] },
    ek("kayit", "*Kurumsal Üyelik* formunu doldurun.", { bolge: B(842, 130, 740, 327), bolgeD: B(925, 125, 535, 535),
      vurgu: [{ hedef: "Kurumsal", not: "Liste fiyatlarıyla hemen alışverişe başlarsınız." },
        { hedef: "Üyeliği Tamamla", kaydir: true, not: "Cari özel fiyatlar onay sonrası otomatik tanımlanır." }] }),
    kapanis("Firmanızı *bugün* panele taşıyın."),
  ]),
];
