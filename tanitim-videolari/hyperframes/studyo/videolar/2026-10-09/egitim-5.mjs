// 2026-10-09 serisi · Eğitim 70–75: kazanç, ayarlar, mini testler (surum 2).
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakam ve etiketler 9 Ekim öğe haritalarından okundu:
//   sadakat-puan: "1 birim = 100 puan = 10 TL indirim kuponu" · kampanyalar: "Peşin Ödeme %2 İndirim", "₺3.500,00 ve üzeri siparişlerde kargo ücreti uygulanmaz."
//   urun: kademe 5+ %5 / 30+ %8 / 40+ %10 · paketler: %8 ve %10 · hizli: "En fazla 100 satır" · onay-kural-yeni: Seviye 1 → 2 → 3
//   sozlesme: "Otomatik Onay Eşiği ₺5.000,00 … onay zinciri atlanarak doğrudan onaylanır" · ayarlar-bildirim: "24 saat, 3 gün ve 7 gün sonra"
// Kayıt değiştiren tıklamalar (İndirim Kuponu Oluştur, Tercihleri Kaydet) panelde yapılmaz; motor yalnız canlandırır.
// Mini testlerde cevabı gösteren kısa ekranlar adımsızdır (büyük başlık); test açıklaması yalnız cevap ekranı gelmeyen soruda var.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, adim, metin, ayar) => ({ tip: "ekran", ekran, adim, metin, ...ayar });
const tel = (ekran, ayar) => ({ tip: "telefon", ekran, ...ayar });
const kapak = (no, baslik, alt, ikon) => ({ tip: "kapak", ust: `Eğitim ${no}`, baslik, alt, ikon, sure: "auto" });
const kontrol = (maddeler) => ({ tip: "kontrol", baslik: "*Özet*", maddeler });
const test = (no, soru, secenekler, dogru, aciklama) => ({ tip: "test", ust: `Soru ${no} / 3`, soru, secenekler, dogru, ...(aciklama ? { aciklama } : {}) });
const E = (no, id, baslik, ton, sahneler) => ({ id, tur: "egitim", baslik, etiket: `Eğitim ${no} · ${baslik}`, tohum: no, ton, surum: 2, sahneler });

// Ortak kadrajlar (hesap sayfalarında sol menü görünür)
const HESAP = B(270, 200, 1380, 610);
const KAMP = B(270, 190, 1380, 610);           // üstteki çalışma saatleri çubuğu kadraj dışında
const URUN_ALT = B(815, 560, 830, 367);        // kademe tablosu
// Sipariş geçmişindeki ham durum kodları: her zaman kapatılır
const GECMIS_TESLIM = B(1317, 265, 320, 317);
const GECMIS_SEVKIYAT_M = B(8, 1757, 414, 208);
// Bildirim Tercihleri satırları (onay kutusu + başlık + açıklama, görünen yazı genişliğinde). Açıklamayla eşleşen öğe
// satırın 1036 px'lik etiket denetimi olduğundan kamera yakınlaşamıyordu.
const BT_SIPARIS = B(580, 300, 440, 40), BT_KAMPANYA = B(580, 386, 390, 40), BT_SEPET = B(580, 429, 615, 40);
// Puan Kullan formundaki birim kutusu ("1" yazılı giriş)
const BIRIM = B(583, 217, 346, 32);

export default [
  // ── 70 · Puanı kupona dönüştürme
  E(70, "egitim-70-puan-kupon", "Puanınızı kupona dönüştürün", 1, [
    kapak(70, "Puanınızı kupona dönüştürün", "Biriken puanınızı indirim kuponuna çevirin.", "gift"),
    { tip: "karakter", avatar: { sac: "kisa", ten: "bugday", sacRenk: "#2A1A10", giysi: "#2E6B8F", yaka: "gomlek", ruh: "dertli" },
      ad: "Murat", rol: "Satın alma sorumlusu", ikon: "star", metin: "Puanım birikiyor, *nasıl kullanacağımı* bilmiyorum." },
    ek("sadakat", 1, "*Sadakat Programı* sayfasında bakiyenizi görün.", { bolge: HESAP,
      vurgu: [{ hedef: ["Toplam Bakiye", "4.980₺ kupon değeri"], not: "Puanınızın kupon karşılığı rakamın altında yazar" }],
      tikla: { hedef: "Kuponuna dönüştür", sonuc: "Puan Kullan bölümü açılır" },
      dikey: tel("m-sadakat", {
        vurgu: [{ hedef: ["Toplam Bakiye", "4.980₺ kupon değeri"], not: "Puanınızın kupon karşılığı rakamın altında yazar" }],
        tikla: { hedef: "Kuponuna dönüştür", sonuc: "Puan Kullan bölümü açılır" } }) }),
    // Puan Kullan bölümünün mobil çekimi yok: dikeyde masaüstü dar kadraj. Defterdeki kayıtlar (y ≥ 936) kadraja girmez.
    // Dikeyde yazma/tıklama kadrajı hedefin ~300 px soluna hizalanır ve en fazla ~565 px gösterir. bolgeD 565 px genişlikte:
    // yazma kadrajı bu en geniş görünümü alır (420 px'te giriş kutusunun yarısı kesiliyordu). Tıklama hedefi düğmenin sağındaki
    // küçük kutu (774 = 756 + 300 − 282): kadraj düğmeyi ortalar, imleç düğmenin üstüne düşer.
    ek("sadakat-puan", 2, "Birim sayısını yazıp *İndirim Kuponu Oluştur* düğmesine basın.", { bolge: B(420, 118, 1000, 300),
      vurgu: [{ hedef: "1 birim = 100 puan = 10 TL indirim kuponu", not: "Örneğin 10 birim 100 TL'lik kupon olur" }],
      yaz: { hedef: BIRIM, metin: "10" },
      tikla: { hedef: "İndirim Kuponu Oluştur", sonuc: "100 TL indirim kuponu oluşturuldu" },
      dikey: { tip: "ekran", ekran: "sadakat-puan", bolgeD: B(540, 118, 565, 560),
        vurgu: [{ hedef: "1 birim = 100 puan = 10 TL indirim kuponu", not: "Örneğin 10 birim 100 TL'lik kupon olur" }],
        yaz: { hedef: BIRIM, metin: "10" },
        tikla: { hedef: B(774, 290, 16, 16), sonuc: "100 TL indirim kuponu oluşturuldu" } } }),
    ek("kuponlar", 3, "*Kuponlarım* sayfasında kodu kopyalayıp sepette kullanın.", { bolge: HESAP,
      vurgu: [{ hedef: "~Sepet sayfasında 'Kupon Kodu'", not: "Her kupon tek siparişte bir kez kullanılır" }],
      tikla: { hedef: "Kopyala", sonuc: "Kupon kodu kopyalandı" },
      dikey: tel("m-kuponlar", {
        vurgu: [{ hedef: "~Sepet sayfasında 'Kupon Kodu'", not: "Her kupon tek siparişte bir kez kullanılır" }],
        // Satır genişliğinde kutu: yakınlaşma kupon kodunu kesmez, imleç (kutunun ortası) Kopyala simgesine düşer
        tikla: { hedef: B(24, 378, 412, 26), sonuc: "Kupon kodu kopyalandı" } }) }),
    kontrol(["Sadakat Programı sayfasında bakiyenizi kontrol edin.", "Birim sayısını yazıp İndirim Kuponu Oluştur düğmesine basın.", "Kuponlarım sayfasında kupon kodunu kopyalayın."]),
    { tip: "son", metin: "Şimdi *Sadakat Programı* sayfasını açın.", sonraki: "Kupon kodu gerektirmeyen avantajlar" },
  ]),

  // ── 71 · Sürekli avantajlar
  E(71, "egitim-71-avantajlar", "Kupon kodu gerektirmeyen avantajlar", -2, [
    kapak(71, "Kupon kodu gerektirmeyen avantajlar", "Sepette kendiliğinden uygulanan indirimleri tanıyın.", "percent"),
    { tip: "soru", metin: "İndirim için *kupon kodu* mu arıyorsunuz?", alt: "Bazı indirimler sepette kendiliğinden uygulanır.", sure: 4,
      cipler: [["trend", "Kademeli indirim"], ["wallet", "Peşin ödeme"], ["truck", "Ücretsiz kargo"]] },
    ek("kampanyalar", 1, "*Kampanyalar* sayfasında *Sürekli Avantajlar* bölümünü bulun.", { bolge: KAMP,
      vurgu: [{ hedef: B(283, 325, 380, 52), not: "Bu bölümde üç kalıcı avantaj listelenir" },
        { hedef: ["Çok Al Az Öde", "~Kademeli iskontolu ürünlerde"], not: "Adet arttıkça indirim %5, %8 ve %10 olur" }],
      dikey: tel("m-kampanyalar", {
        vurgu: [{ hedef: ["Sürekli Avantajlar", "Kupon kodu gerektirmez, uygun koşulda otomatik uygulanır."], not: "Bu bölümde üç kalıcı avantaj listelenir" },
          { hedef: ["Çok Al Az Öde", "~Kademeli iskontolu ürünlerde"], not: "Adet arttıkça indirim %5, %8 ve %10 olur" }] }) }),
    ek("kampanyalar", 2, "Ödeme ve kargo *avantajlarını* okuyun.", { bolge: KAMP,
      vurgu: [{ hedef: ["Peşin Ödeme %2 İndirim", "~Havale/EFT ile ödediğiniz"], not: "İndirim havale veya EFT ile ödemede geçerlidir" },
        { hedef: ["Ücretsiz Kargo", "₺3.500,00 ve üzeri siparişlerde kargo ücreti uygulanmaz."], not: "Sepet tutarı ₺3.500'e ulaşınca kargo ücretsiz olur" }],
      dikey: tel("m-kampanyalar", {
        vurgu: [{ hedef: ["Peşin Ödeme %2 İndirim", "~Havale/EFT ile ödediğiniz"], not: "İndirim havale veya EFT ile ödemede geçerlidir" },
          { hedef: ["Ücretsiz Kargo", "₺3.500,00 ve üzeri siparişlerde kargo ücreti uygulanmaz."], not: "Sepet tutarı ₺3.500'e ulaşınca kargo ücretsiz olur" }] }) }),
    { tip: "rakamlar", baslik: "Bu avantajlar için *kod gerekmez.*",
      kartlar: [{ ikon: "trend", onek: "%", deger: 10, etiket: "Kademeli indirimde en yüksek oran" },
        { ikon: "wallet", onek: "%", deger: 2, etiket: "Peşin ödeme indirimi" },
        { ikon: "truck", deger: 3500, para: true, ondalik: 0, etiket: "Ücretsiz kargo sınırı" },
        { ikon: "package", onek: "%8–%", deger: 10, etiket: "Paket indirimi" }] },
    kontrol(["Kampanyalar sayfasında Sürekli Avantajlar bölümünü bulun.", "Peşin ödeme indirimini kartta okuyun.", "Ücretsiz kargo sınırını kontrol edin."]),
    { tip: "son", metin: "Şimdi *Kampanyalar* sayfasını açın.", sonraki: "Bildirim tercihleri" },
  ]),

  // ── 72 · Bildirim tercihleri
  E(72, "egitim-72-bildirim-tercihleri", "Bildirim tercihleri", 2, [
    kapak(72, "Bildirim tercihleri", "Hangi e-postaları alacağınızı kendiniz seçin.", "bell"),
    { tip: "karakter", avatar: { sac: "topuz", ten: "acik", sacRenk: "#5A3A22", giysi: "#7A3E9D", gozluk: true, ruh: "dertli" },
      ad: "Derya", rol: "Muhasebe sorumlusu", ikon: "mail", metin: "Gelen kutum *bildirim e-postalarıyla* doluyor." },
    ek("ayarlar-bildirim", 1, "*Ayarlar* sayfasında *Bildirim Tercihleri* bölümünü bulun.", { bolge: B(270, 120, 1380, 610),
      vurgu: [{ hedef: BT_SIPARIS, not: "İşaretli seçenekler için e-posta gönderilir" }],
      dikey: tel("m-ayarlar", {
        vurgu: [{ hedef: ["Sipariş durumu güncellemeleri", "~Siparişiniz onaylandığında"], not: "İşaretli seçenekler için e-posta gönderilir" }] }) }),
    ek("ayarlar-bildirim", 2, "Seçimlerinizi yapıp *Tercihleri Kaydet* düğmesine basın.", { bolge: B(270, 120, 1380, 610),
      vurgu: [{ hedef: BT_KAMPANYA, not: "İşareti kaldırılan e-postalar size gönderilmez" },
        { hedef: BT_SEPET, not: "Sepette kalan ürünler için 24 saat, 3 gün ve 7 gün sonra e-posta gelir" }],
      tikla: { hedef: "Tercihleri Kaydet", sonuc: "Tercihleriniz kaydedildi" },
      dikey: tel("m-ayarlar", {
        vurgu: [{ hedef: ["Yeni kampanyalar", "~Özel teklifler ve kampanyalar"], not: "İşareti kaldırılan e-postalar size gönderilmez" },
          { hedef: ["Sepet hatırlatmaları", "~Tamamlanmamış sepetiniz için"], not: "Sepette kalan ürünler için 24 saat, 3 gün ve 7 gün sonra e-posta gelir" }],
        tikla: { hedef: "Tercihleri Kaydet", sonuc: "Tercihleriniz kaydedildi" } }) }),
    // Eylem + görünür sonuç: yalnız tıklama (vurgu eklenirse süre planın +10 sn sınırını aşar). Panel metni: "verilerin bir kopyasını
    // ZIP formatında indirebilirsiniz"; tıklama yalnız canlandırılır.
    ek("ayarlar-bildirim", 3, "*Verilerimi İndir (ZIP)* ile verilerinizin kopyasını alın.", { bolge: B(270, 120, 1380, 610),
      tikla: { hedef: "Verilerimi İndir (ZIP)", sonuc: "Verileriniz ZIP dosyası olarak iner" },
      dikey: tel("m-ayarlar", {
        tikla: { hedef: "Verilerimi İndir (ZIP)", sonuc: "Verileriniz ZIP dosyası olarak iner" } }) }),
    kontrol(["Ayarlar sayfasında Bildirim Tercihleri bölümünü bulun.", "İstemediğiniz e-postaların işaretini kaldırıp kaydedin.", "Verilerimi İndir (ZIP) düğmesine basın."]),
    { tip: "son", metin: "Şimdi *Ayarlar* sayfasını açın.", sonraki: "Mini test: sipariş" },
  ]),

  // ── 73 · Mini test: sipariş
  E(73, "egitim-73-test-siparis", "Mini test: sipariş", -1, [
    kapak(73, "Mini test: sipariş", "Sipariş bilginizi üç soruyla pekiştirin.", "help"),
    test(1, "Kargoya verilen sipariş hangi *durumda* görünür?", ["Hazırlanıyor", "Sevkiyatta", "Teslim Edildi"], 1),
    { tip: "ekran", ekran: "siparisler", metin: "Kargodaki sipariş *Sevkiyatta* durumunda görünür.", bolge: B(270, 290, 1380, 610),
      // sipariş no + durum (ilk "Sevkiyatta" hızlı filtre). Not yakınlaşan satırı anlatır; 3. sorunun cevabını önceden vermez.
      vurgu: [{ hedef: ["MTS-2026-0024", "Sevkiyatta#2"], not: "Durum etiketi siparişin aşamasını gösterir" }],
      dikey: tel("m-siparisler", { vurgu: [{ hedef: "~MTS-2026-0024 ₺8.634,37", not: "Durum etiketi siparişin aşamasını gösterir" }] }) },
    test(2, "*Hızlı Sipariş* formuna en fazla kaç satır girersiniz?", ["50 satır", "100 satır", "500 satır"], 1, "Sınır *100 satırdır.*"),
    test(3, "Kargo *takip numarası* nerede yazar?", ["Sipariş detayındaki Sevkiyat kutusunda", "Faturalarım sayfasında", "Cari Ekstre sayfasında"], 0),
    // Yalnız Sevkiyat kutusu: yanındaki Geçmiş listesi ham durum kodları içerir, gri bantla kapatılır
    { tip: "ekran", ekran: "siparis-teslim-kargo", metin: "Takip numarası *Sevkiyat* kutusunda yazar.", bolge: B(1107, 20, 740, 327), ortu: [GECMIS_TESLIM],
      vurgu: [{ hedef: ["Aras Kargo", "1000855481"], not: "Takip et bağlantısıyla kargonuzu izleyebilirsiniz" }],
      dikey: tel("m-siparis-sevkiyat", { ortu: [GECMIS_SEVKIYAT_M],
        vurgu: [{ hedef: B(54, 1663, 348, 46), not: "Takip et bağlantısıyla kargonuzu izleyebilirsiniz" }] }) },   // "Aras Kargo Yolda", takip no ve Takip et (yakınlaşsın diye dar kutu)
    kontrol(["Kargodaki siparişi Sevkiyatta durumunda bulun.", "Hızlı Sipariş formuna en fazla 100 satır girin.", "Takip numarasını Sevkiyat kutusunda okuyun."]),
    { tip: "son", metin: "Şimdi *Siparişlerim* sayfasını açın.", sonraki: "Mini test: ödeme ve indirimler" },
  ]),

  // ── 74 · Mini test: ödeme ve indirimler
  E(74, "egitim-74-test-odeme", "Mini test: ödeme ve indirimler", 3, [
    kapak(74, "Mini test: ödeme ve indirimler", "İndirim kurallarını üç soruyla pekiştirin.", "percent"),
    test(1, "Havale/EFT ile *peşin ödemede* indirim yüzde kaçtır?", ["%2", "%5", "%10"], 0),
    { tip: "ekran", ekran: "kampanyalar", metin: "Peşin ödemede net tutardan *%2* düşülür.", bolge: KAMP,
      vurgu: [{ hedef: ["Peşin Ödeme %2 İndirim", "~Havale/EFT ile ödediğiniz"], not: "Bu indirim için kupon kodu gerekmez" }],
      dikey: tel("m-kampanyalar", { vurgu: [{ hedef: ["Peşin Ödeme %2 İndirim", "~Havale/EFT ile ödediğiniz"], not: "Bu indirim için kupon kodu gerekmez" }] }) },
    test(2, "*Ücretsiz kargo* hangi tutardan başlar?", ["₺1.500", "₺3.500", "₺5.000"], 1, "*₺3.500* ve üzerinde kargo ücretsizdir."),
    test(3, "Ürün sayfasındaki *kademeli indirim* oranları hangileridir?", ["%5 / %8 / %10", "%2 / %4 / %6", "%10 / %15 / %20"], 0),
    { tip: "ekran", ekran: "urun", metin: "Adet arttıkça *indirim oranı* artar.", bolge: URUN_ALT,
      vurgu: [{ hedef: ["[]5+ %5", "[]40+ %10"], not: "İndirim sepette her satıra kendiliğinden yansır" }],
      dikey: tel("m-urun", { vurgu: [{ hedef: ["[]5+ %5", "[]40+ %10"], not: "İndirim sepette her satıra kendiliğinden yansır" }] }) },
    kontrol(["Havale/EFT ile ödeyip %2 indirim alın.", "₺3.500 ve üzeri siparişte ücretsiz kargodan yararlanın.", "Kademe tablosunda indirim oranını okuyun."]),
    { tip: "son", metin: "Şimdi *Kampanyalar* sayfasını açın.", sonraki: "Mini test: onay ve bütçe" },
  ]),

  // ── 75 · Mini test: onay ve bütçe
  E(75, "egitim-75-test-onay", "Mini test: onay ve bütçe", 0, [
    kapak(75, "Mini test: onay ve bütçe", "Onay ve bütçe kurallarını üç soruyla pekiştirin.", "approve"),
    test(1, "Otomatik onay eşiğinin *altındaki* sipariş ne olur?", ["Doğrudan onaylanır", "Onay zincirine girer", "İptal edilir"], 0),
    { tip: "ekran", ekran: "sozlesme", metin: "Eşiğin altındaki sipariş *onay zincirine* girmez.", bolge: B(285, 330, 1360, 602),
      vurgu: [{ hedef: "[]Otomatik Onay Eşiği ₺5.000,00", not: "Eşik tutarı sözleşmenizde tanımlıdır" }],   // etiket, tutar ve açıklama satırı
      dikey: tel("m-sozlesme", { vurgu: [{ hedef: "[]Otomatik Onay Eşiği ₺5.000,00", not: "Eşik tutarı sözleşmenizde tanımlıdır" }] }) },
    test(2, "Bir onay kuralına en fazla kaç *seviye* onaylayıcı eklersiniz?", ["2 seviye", "3 seviye", "5 seviye"], 1, "*Üç seviye* seçilebilir."),
    test(3, "Departmanın *kalan bütçesini* nerede görürsünüz?", ["Bütçe Panosu", "Kuponlarım", "Faturalarım"], 0),
    { tip: "ekran", ekran: "butce", metin: "*Bütçe Panosu* kalan bütçeyi gösterir.", bolge: B(270, 180, 1380, 610),
      vurgu: [{ hedef: ["Depo ve Lojistik", "₺58.144,32"], not: "Bütçe, harcanan ve kalan tutar aynı satırda yazar" }],
      // m-butce'de tablo yana kayıyor (Kalan sütunu kesik): dikeyde masaüstü dar kadraj. Dikey vurgu en az ~1,7 kat yakınlaştığı
      // için 730 px'lik satır sığmıyor: hedef Harcandı + Kalan sütunları. Kadraj y 30–775: başlık ve tüm tablo görünür,
      // altındaki Kullanıcı Onay Limitleri satırlarının ham rol kodu ("CUSTOMER MANAGER", y 792) kadraja girmez.
      dikey: { tip: "ekran", ekran: "butce", bolgeD: B(560, 30, 745, 745),
        vurgu: [{ hedef: ["Harcandı", "₺58.144,32"], not: "Harcanan ve kalan tutar yan yana yazar" }] } },
    kontrol(["Otomatik onay eşiğini Sözleşme & Fiyat sayfasında kontrol edin.", "Onay zincirine en fazla üç seviye ekleyin.", "Kalan bütçeyi Bütçe Panosu sayfasında izleyin."]),
    { tip: "son", metin: "Şimdi *Bütçe Panosu* sayfasını açın." },
  ]),
];
