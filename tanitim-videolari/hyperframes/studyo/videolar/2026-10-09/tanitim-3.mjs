// 2026-10-09 serisi · Tanıtım 34–39: avantaj, hız, hesap açma (surum 2).
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakamlar ve etiketler 9 Ekim öğe haritalarından okundu:
//   kampanyalar "Sürekli Avantajlar" (Çok Al Az Öde, Peşin Ödeme %2 İndirim, Ücretsiz Kargo ₺3.500,00) + "Paket Fırsatları";
//   giris "14:00'a kadar verilen siparişler aynı gün kargoda", urun "Stok: 88 adet · 1 iş günü içinde kargo";
//   katalog 7 kategori (75 + 328 + 149 + 63 + 300 + 224 + 187 = 1326 ürün); kayit "Cari özel fiyatlar onay sonrası otomatik tanımlanır."
// Demo hesabın tutarları fayda gibi sunulmaz. Kayıt değiştiren tıklamalar (Onayla) panelde yapılmaz; motor yalnız canlandırır.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, metin, ayar) => ({ tip: "ekran", ekran, metin, ...ayar });
const tel = (ekran, metin, ayar) => ({ tip: "telefon", ekran, metin, ...ayar });
const kapanis = (slogan, cta = "Kurumsal hesap açın") => ({ tip: "kapanis", slogan, cta });
const T = (no, id, baslik, ton, sahneler) => ({ id, tur: "tanitim", baslik, tohum: no, ton, surum: 2, sahneler });

// Motor geçici çözümü (tanitim-1 ile aynı): tıklama halkası dokunuştan önce sahne boyunca 20 px'lik sarı nokta olarak görünüyor.
// Telefon onayında başlangıç kaydırması (basY), noktanın baştan Onayla düğmesinin üstünde durmasını sağlayacak şekilde seçildi.
// Dikeyde dokunuş kamerası "Açan: Zeynep Kaya" satırını üst çubuğun altında bırakıyor: dikey başlık bu yüzden isim vermez.
const onayla = (metin, metinD) => tel("m-onaylarim", metin, { basY: 215, tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" },
  dikey: { tip: "telefon", ekran: "m-onaylarim", metin: metinD, basY: 292, tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } } });
// Numune formunda kullanıcının adı iki alanda yazılı (İsim Soyisim, Firma Ünvanı): kamera yukarı kaydığında görünmesin
const NUMUNE_AD = [B(647, 345, 626, 38), B(647, 567, 626, 38)];

export default [
  // ── 34 · Kupon kodu gerektirmeyen 4 avantaj (kelime → Kampanyalar: Sürekli Avantajlar + Paket Fırsatları → kapanış)
  T(34, "tanitim-34-avantajlar", "Kupon kodu gerektirmeyen 4 avantaj", 2, [
    // Kural "₺3.500,00 ve üzeri": tam ₺3.500 de geçerli, bu yüzden "aşın" değil "ulaşın"
    { tip: "kelime", ust: "Kupon kodu gerektirmez", kelimeler: ["Çok alın.", "Peşin ödeyin.", "Paketi seçin.", "₺3.500'e ulaşın."],
      son: "Hepsi *kendiliğinden* uygulanır." },
    ek("kampanyalar", "Avantajları *Kampanyalar* sayfasında görün.", { bolge: B(270, 190, 1380, 610),
      // Üç kartın yazı alanı: kartların tamamı (1354 px) görünümün %94'ünden geniş olduğu için kamera sola yaslanıp sağı kesiyordu.
      // Not "sepete" demez: peşin %2 sepette değil, Havale/EFT ödemesinde düşülür. Sayfadaki ifade: "uygun koşulda otomatik uygulanır".
      vurgu: [{ hedef: ["Çok Al Az Öde", "~Kademeli iskontolu ürünlerde", "~₺3.500,00 ve üzeri"], not: "Koşul sağlanınca avantaj otomatik uygulanır." }],
      dikey: { tip: "telefon", ekran: "m-kampanyalar",
        vurgu: [{ hedef: ["Çok Al Az Öde", "~₺3.500,00 ve üzeri"], not: "Koşul sağlanınca avantaj otomatik uygulanır." }] } }),
    kapanis("İndirimleri *kod girmeden* kullanın.", "Panelde deneyin"),
  ]),

  // ── 35 · Saat 14:00, bugün kargoda (sayaç: saat 14:00 → ürün sayfasında stok satırı → kapanış)
  // "14:00'a kadar verilen siparişler aynı gün kargoda" giriş ve kayıt sayfalarında yazıyor. Masaüstü ürün sayfasındaki
  // "Pazartesi kargoda" rozeti (cuma akşamı çekim) kadraj dışında bırakıldı.
  T(35, "tanitim-35-saat-14", "Saat 14:00, bugün kargoda", -1, [
    { tip: "sayac", baslik: "Siparişi *14:00'a kadar* verin.", deger: 14, sonek: ":00", alt: "Sipariş aynı gün kargoya verilir." },
    // Ekran başlığı "aynı gün" demez: vurgulanan satır "1 iş günü içinde kargo" yazıyor, başlık ekranla çelişmesin.
    // Dikey: m-urun'daki stok satırı çekimin dibinde (y 1584 / 1800) kalıp telefonda güvenli alanın altına düşüyor; aynı bilgi
    // sayfanın üstündeki "Stoktaki ürünlerde 1 iş günü içinde kargo" şeridinde de yazıyor, dikeyde o vurgulanır (mobil çekim).
    ek("urun", "Stok ve kargo bilgisi *ürün sayfasında* yazar.", { saat: "13:45", bolge: B(815, 560, 830, 367),
      vurgu: [{ hedef: "Stok: 88 adet · 1 iş günü içinde kargo", not: "Stok adedi sepete eklemeden önce görünür." }],
      dikey: { tip: "telefon", ekran: "m-urun", saat: "13:45",
        vurgu: [{ hedef: "[]Stoktaki ürünlerde 1 iş günü içinde kargo", not: "Kargo süresi sepete eklemeden önce görünür." }] } }),
    kapanis("Acil ihtiyacı *beklemeden* karşılayın."),
  ]),

  // ── 36 · Aynı panel, iki rol (satın almacı → hızlı sipariş → yönetici → telefondan onay → kapanış)
  // Onay kartında "Açan: Zeynep Kaya" yazıyor: satın almacı karakteri bu yüzden Zeynep.
  T(36, "tanitim-36-iki-rol", "Aynı panel, iki rol", 1, [
    { tip: "karakter", avatar: { sac: "uzun", ten: "bugday", sacRenk: "#3B2416", giysi: "#1D5FA8", yaka: "gomlek", ruh: "mutlu" },
      ad: "Zeynep", rol: "Satın alma sorumlusu", ikon: "cart", metin: "Haftalık siparişi *ürün kodlarıyla* hazırlıyorum." },
    // Yazma kamerası sol menüye kayıyor: menüdeki hesap sahibinin adı da (e-postası gibi) gri bantla kapatılır
    ek("hizli", "Ürünleri *kodlarıyla* sepete ekleyin.", { bolge: B(555, 185, 1095, 485), ortu: ["Can Çatma"],
      yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" },
      dikey: { tip: "telefon", ekran: "m-hizli", yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" } } }),
    { tip: "karakter", avatar: { sac: "kisa", ten: "acik", sacRenk: "#2A1E17", giysi: "#16324F", yaka: "kravat", sakal: true, ruh: "notr" },
      ad: "Kerem", rol: "Birim yöneticisi", ikon: "approve", metin: "Onay bekleyen siparişleri *telefondan* görüyorum." },
    onayla("Zeynep'in siparişini *telefondan* onaylayın.", "Siparişi *telefondan* onaylayın."),
    kapanis("Siparişi hazırlayın, *yöneticiniz* onaylasın."),
  ]),

  // ── 37 · Yedi kategori, tek tedarikçi (kelime → katalogdaki kategori filtresi ve ürün sayıları → kapanış)
  T(37, "tanitim-37-yedi-kategori", "Yedi kategori, tek tedarikçi", -2, [
    { tip: "kelime", ust: "7 kategori · 1.326 ürün", kelimeler: ["Kağıt.", "Kimyasal.", "Mutfak.", "Ekipman."],
      son: "Hepsini *tek tedarikçiden* alın." },
    ek("katalog", "Yedi kategoriyi *tek katalogda* gezin.", { bolge: B(283, 180, 960, 425), bolgeD: B(283, 190, 480, 480),
      vurgu: [{ hedef: ["Kağıt Ürünleri 75", "Atık Yönetimi & Ortam Bakımı 187"], not: "Her kategorinin ürün sayısı yanında yazar." }] }),
    kapanis("Tüm ihtiyacı *tek siparişte* toplayın."),
  ]),

  // ── 38 · Doğru ürün, ilk seferde (soru → Teknik Özellikler: Dispenser Uyumu → ücretsiz numune formu → kapanış)
  T(38, "tanitim-38-dogru-urun", "Doğru ürün, ilk seferde", 3, [
    { tip: "soru", metin: "Havlu *dispensere* uyar mı?", alt: "Cevabı ürün sayfasında bulun.", sure: 4,
      cipler: [["search", "Teknik özellik"], ["box", "Dispenser"], ["sample", "Numune"]] },
    // Vurgu kamerası en fazla 2,3 kat büyütür (kadraj 740 px'ten darsa vurguda geri çekiliyor) ve hedefi ortalar.
    // Yatay: satırın tamamı vurgulanınca görünüm x 1047'den başlıyor, soldaki açıklama paragrafının kesik satır sonları
    // ("…lmak üzere", "…nluğundadır.") görünüyordu. Vurgu cevabın kendisinde: değer yazısının kutusu (ham kutu, x 1459–1615,
    // sağa yaslı); görünüm x 1166'dan başlar, paragraf 1158'de biter. Kadraj vurgu görünümüyle aynı, kamera yer değiştirmez.
    // "Dispenser Uyumu" etiketi aynı satırda solda okunur.
    // Dikeyde aynı tablo urun-alt çekiminde sayfanın ortasında: urun-teknik'te satır üstte kaldığı için kamera yapışkan kategori
    // çubuğunu da gösteriyordu.
    ek("urun-teknik", "Cevap *Teknik Özellikler* bölümünde yazar.", { bolge: B(1166, 114, 740, 327),
      vurgu: [{ hedef: B(1453, 268, 166, 24), not: "Satın almadan önce dispenser tipinizle karşılaştırın." }],
      dikey: { tip: "ekran", ekran: "urun-alt", yol: "Kağıt Ürünleri › Ürün", bolge: B(1180, 340, 476, 476),
        vurgu: [{ hedef: ["Dispenser Uyumu", "Fotoselli Havlu Dispenseri"], not: "Satın almadan önce dispenser tipinizle karşılaştırın." }] } }),
    // Yazma (yaz) yerine vurgu: yazma kamerası hedefin 260 px soluna da yer açıyor, dar kadrajda formun solundaki boş alana kayıyordu.
    // Dikeyde alanın tamamı görünüme sığmıyor: vurgu etiket ve örnek metnin olduğu sol kısımda (ham kutu).
    ek("numune-yeni", "Emin değilseniz *ücretsiz numune* isteyin.", { bolge: B(630, 610, 740, 330), ortu: NUMUNE_AD,
      vurgu: [{ hedef: ["Talep Ettiğiniz Ürünler", "Virgülle ayırarak yazın. Örn: MTS-1001, MTS-2030"], not: "Satış ekibi onaylayınca numune gönderilir." }],
      dikey: { tip: "ekran", ekran: "numune-yeni", bolge: B(640, 610, 520, 330), ortu: NUMUNE_AD,
        vurgu: [{ hedef: B(641, 615, 320, 64), not: "Satış ekibi onaylayınca numune gönderilir." }] } }),
    kapanis("Ürünü *önce deneyin,* sonra sipariş verin."),
  ]),

  // ── 39 · Kurumsal hesabınızı açın (kelime: sayfadaki faydalar → Kurumsal Üyelik formu → Üyeliği Tamamla → kapanış)
  // Kelimeler giriş ve kayıt sayfalarındaki fayda yazılarından ("Cari özel fiyat", "…özel fiyatlandırma + kademeli iskonto",
  // "Yetki zincirli onay"); panelde doğrulanabilen özellikler. Üç kelime: motor kelimeleri (son − 0,4) sn'de sildiği için iki kelimeyle
  // ikincisi yalnız ~0,1 sn tam görünüyordu; üç kelimeyle liste ~1,5 sn ekranda kalır.
  // "Atanmış temsilci" (danışman, WhatsApp desteği) ve sertifika satırı hizmet/şirket iddiası: kullanılmaz, kadraja girmez.
  // Kadraj formun başı (başlık, Kurumsal sekmesi, firma ve vergi alanları); x 842: soldaki mavi sütunun yazı sonu ("…aktif") kesik görünmesin.
  // Vurgu formu bitiren düğmede, not sayfadaki cümlenin aynısı.
  T(39, "tanitim-39-kurumsal-hesap", "Kurumsal hesabınızı açın", 0, [
    { tip: "kelime", ust: "Yeni Kurumsal Hesap", kelimeler: ["Cari özel fiyat.", "Yetki zincirli onay.", "Kademeli iskonto."], son: "Hepsi *tek formla* başlar." },
    ek("kayit", "*Kurumsal Üyelik* formunu doldurun.", { bolge: B(842, 130, 740, 327), bolgeD: B(925, 125, 535, 535),
      vurgu: [{ hedef: "Üyeliği Tamamla", kaydir: true, not: "Cari özel fiyatlar onay sonrası otomatik tanımlanır." }] }),
    kapanis("Firmanızı *bugün* panele taşıyın."),
  ]),
];
