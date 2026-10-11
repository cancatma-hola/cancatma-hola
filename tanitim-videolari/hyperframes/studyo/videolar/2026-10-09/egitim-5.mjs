// 2026-10-09 serisi · Eğitim 70–75: kazanç, ayarlar, mini testler (kurgu v3, surum 3).
// Kurgu: kapak yok; ilk sahne kanca (dertli karakter / soru / ilk test) ve başlık çipini (etiket) taşır. İlk panel ekranından önce
// en fazla bir anlatım sahnesi. Karakterle açılan videoda aynı kişi sonda mutlu ve rozetli döner. Kapanış tek `ozet` sahnesi.
// Mini testler: test → kısa cevap ekranı (tek vurgu, cevabın panelde nerede yazdığı) × 3 → özet.
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakam ve etiketler 9 Ekim öğe haritalarından okundu:
//   sadakat-puan: "1 birim = 100 puan = 10 TL indirim kuponu" · kampanyalar: "Peşin Ödeme %2 İndirim", "₺3.500,00 ve üzeri siparişlerde kargo ücreti uygulanmaz."
//   urun: kademe 5+ %5 / 30+ %8 / 40+ %10 · hizli: "En fazla 100 satır" · onay-kural-yeni: "(Seviye 1 → 2 → 3)", Seviye 1 / 2 / 3
//   sozlesme: "Otomatik Onay Eşiği ₺5.000,00 … onay zinciri atlanarak doğrudan onaylanır" · ayarlar-bildirim: "24 saat, 3 gün ve 7 gün sonra"
// Kayıt değiştiren tıklamalar (İndirim Kuponu Oluştur, Tercihleri Kaydet) panelde yapılmaz; motor yalnız canlandırır.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, adim, metin, ayar) => ({ tip: "ekran", ekran, adim, metin, ...ayar });
const tel = (ekran, ayar) => ({ tip: "telefon", ekran, ...ayar });
// Mini testte cevabı gösteren kısa ekran: adımsız (büyük başlık), tek vurgu → 5 sn
const cevap = (ekran, metin, ayar) => ({ tip: "ekran", ekran, metin, ...ayar });
const test = (no, soru, secenekler, dogru) => ({ tip: "test", ust: `Soru ${no} / 3`, soru, secenekler, dogru });
const ozet = (maddeler, sonraki) => ({ tip: "ozet", maddeler, ...(sonraki ? { sonraki } : {}) });
// Kurgusal kişi: açılışta dertli, sonda aynı kişi (aynı avatar, ad, rol, ikon) mutlu ve rozetli
const kisi = (k, ruh, metin, ek = {}) => ({ tip: "karakter", avatar: { ...k.avatar, ruh }, ad: k.ad, rol: k.rol, ikon: k.ikon, metin, ...ek });
// Başlık çipi (etiket) ilk sahneye eklenir; video etiketi filigranda kalır
const E = (no, id, baslik, ton, [ilk, ...sahneler]) => {
  const etiket = `Eğitim ${no} · ${baslik}`;
  return { id, tur: "egitim", baslik, etiket, tohum: no, ton, surum: 3, sahneler: [{ ...ilk, etiket }, ...sahneler] };
};

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
const AYAR = B(270, 120, 1380, 610);
// Puan Kullan formundaki birim kutusu ("1" yazılı giriş)
const BIRIM = B(583, 217, 346, 32);
// Hızlı Sipariş: "En fazla 100 satır" yazısı (öğe 1036 px'lik satırın tamamı; görünen yazı ~85 px)
const SATIR100 = B(578, 455, 96, 26);

// Kişiler
const MURAT = { avatar: { sac: "kisa", ten: "bugday", sacRenk: "#2A1A10", giysi: "#2E6B8F", yaka: "gomlek" }, ad: "Murat", rol: "Satın alma sorumlusu", ikon: "star" };
const DERYA = { avatar: { sac: "topuz", ten: "acik", sacRenk: "#5A3A22", giysi: "#7A3E9D", gozluk: true }, ad: "Derya", rol: "Muhasebe sorumlusu", ikon: "mail" };

export default [
  // ── 70 · Puanı kupona dönüştürme: dertli Murat → bakiye → kupon oluştur → kupon kodu → mutlu Murat → özet
  E(70, "egitim-70-puan-kupon", "Puanınızı kupona dönüştürün", 1, [
    kisi(MURAT, "dertli", "Puanım birikiyor, *nasıl kullanacağımı* bilmiyorum."),
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
    kisi(MURAT, "mutlu", "Artık biriken puanımı *kupona çeviriyorum.*", { rozet: true }),
    ozet(["Sadakat Programı sayfasında bakiyenizi kontrol edin.", "Birim sayısını yazıp İndirim Kuponu Oluştur düğmesine basın.", "Kuponlarım sayfasında kupon kodunu kopyalayın."],
      "Kupon kodu gerektirmeyen avantajlar"),
  ]),

  // ── 71 · Sürekli avantajlar: soru → Sürekli Avantajlar bölümü → peşin ödeme ve kargo → ürün sayfasında kademe tablosu → özet
  E(71, "egitim-71-avantajlar", "Kupon kodu gerektirmeyen avantajlar", -2, [
    { tip: "soru", metin: "İndirim için *kupon kodu* mu arıyorsunuz?", alt: "Bazı indirimler sepette kendiliğinden uygulanır.", sure: 4,
      cipler: [["wallet", "Peşin ödeme"], ["truck", "Ücretsiz kargo"], ["trend", "Kademeli indirim"]] },
    ek("kampanyalar", 1, "*Kampanyalar* sayfasında *Sürekli Avantajlar* bölümünü bulun.", { bolge: KAMP,
      vurgu: [{ hedef: B(283, 325, 380, 52), not: "Bu bölümde üç kalıcı avantaj listelenir" }],
      dikey: tel("m-kampanyalar", {
        vurgu: [{ hedef: ["Sürekli Avantajlar", "Kupon kodu gerektirmez, uygun koşulda otomatik uygulanır."], not: "Bu bölümde üç kalıcı avantaj listelenir" }] }) }),
    ek("kampanyalar", 2, "Ödeme ve kargo *avantajlarını* okuyun.", { bolge: KAMP,
      vurgu: [{ hedef: ["Peşin Ödeme %2 İndirim", "~Havale/EFT ile ödediğiniz"], not: "İndirim havale veya EFT ile ödemede geçerlidir" },
        { hedef: ["Ücretsiz Kargo", "₺3.500,00 ve üzeri siparişlerde kargo ücreti uygulanmaz."], not: "Sepet tutarı ₺3.500'e ulaşınca kargo ücretsiz olur" }],
      dikey: tel("m-kampanyalar", {
        vurgu: [{ hedef: ["Peşin Ödeme %2 İndirim", "~Havale/EFT ile ödediğiniz"], not: "İndirim havale veya EFT ile ödemede geçerlidir" },
          { hedef: ["Ücretsiz Kargo", "₺3.500,00 ve üzeri siparişlerde kargo ücreti uygulanmaz."], not: "Sepet tutarı ₺3.500'e ulaşınca kargo ücretsiz olur" }] }) }),
    ek("urun", 3, "Kademeli indirimi *ürün sayfasında* görün.", { bolge: URUN_ALT,
      vurgu: [{ hedef: ["[]5+ %5", "[]40+ %10"], not: "Adet arttıkça indirim %5, %8 ve %10 olur" }],
      dikey: tel("m-urun", { vurgu: [{ hedef: ["[]5+ %5", "[]40+ %10"], not: "Adet arttıkça indirim %5, %8 ve %10 olur" }] }) }),
    ozet(["Kampanyalar sayfasında Sürekli Avantajlar bölümünü bulun.", "Peşin ödeme ve ücretsiz kargo koşullarını okuyun.", "Ürün sayfasında kademe tablosunu kontrol edin."],
      "Bildirim tercihleri"),
  ]),

  // ── 72 · Bildirim tercihleri: dertli Derya → bölüm → işaret kaldırma → kaydet → mutlu Derya → özet
  E(72, "egitim-72-bildirim-tercihleri", "Bildirim tercihleri", 2, [
    kisi(DERYA, "dertli", "Gelen kutum *bildirim e-postalarıyla* doluyor."),
    ek("ayarlar-bildirim", 1, "*Ayarlar* sayfasında *Bildirim Tercihleri* bölümünü bulun.", { bolge: AYAR,
      vurgu: [{ hedef: BT_SIPARIS, not: "İşaretli seçenekler için e-posta gönderilir" }],
      dikey: tel("m-ayarlar", {
        vurgu: [{ hedef: ["Sipariş durumu güncellemeleri", "~Siparişiniz onaylandığında"], not: "İşaretli seçenekler için e-posta gönderilir" }] }) }),
    ek("ayarlar-bildirim", 2, "İstemediğiniz e-postanın *işaretini* kaldırın.", { bolge: AYAR,
      vurgu: [{ hedef: BT_KAMPANYA, not: "İşareti kaldırılan e-postalar size gönderilmez" }],
      dikey: tel("m-ayarlar", {
        vurgu: [{ hedef: ["Yeni kampanyalar", "~Özel teklifler ve kampanyalar"], not: "İşareti kaldırılan e-postalar size gönderilmez" }] }) }),
    ek("ayarlar-bildirim", 3, "Seçimlerinizi yapıp *Tercihleri Kaydet* düğmesine basın.", { bolge: AYAR,
      vurgu: [{ hedef: BT_SEPET, not: "Sepette kalan ürünler için 24 saat, 3 gün ve 7 gün sonra e-posta gelir" }],
      tikla: { hedef: "Tercihleri Kaydet", sonuc: "Tercihleriniz kaydedildi" },
      dikey: tel("m-ayarlar", {
        vurgu: [{ hedef: ["Sepet hatırlatmaları", "~Tamamlanmamış sepetiniz için"], not: "Sepette kalan ürünler için 24 saat, 3 gün ve 7 gün sonra e-posta gelir" }],
        tikla: { hedef: "Tercihleri Kaydet", sonuc: "Tercihleriniz kaydedildi" } }) }),
    kisi(DERYA, "mutlu", "Artık *istediğim e-postaları* alıyorum.", { rozet: true }),
    ozet(["Ayarlar sayfasında Bildirim Tercihleri bölümünü bulun.", "İstemediğiniz e-postaların işaretini kaldırın.", "Tercihleri Kaydet düğmesine basın."],
      "Mini test: sipariş"),
  ]),

  // ── 73 · Mini test: sipariş
  E(73, "egitim-73-test-siparis", "Mini test: sipariş", -1, [
    test(1, "Kargoya verilen sipariş hangi *durumda* görünür?", ["Hazırlanıyor", "Sevkiyatta", "Teslim Edildi"], 1),
    cevap("siparisler", "Kargodaki sipariş *Sevkiyatta* durumunda görünür.", { bolge: B(270, 290, 1380, 610),
      // sipariş no + durum (ilk "Sevkiyatta" hızlı filtre). Not yakınlaşan satırı anlatır; 3. sorunun cevabını önceden vermez.
      vurgu: [{ hedef: ["MTS-2026-0024", "Sevkiyatta#2"], not: "Durum etiketi siparişin aşamasını gösterir" }],
      dikey: tel("m-siparisler", { vurgu: [{ hedef: "~MTS-2026-0024 ₺8.634,37", not: "Durum etiketi siparişin aşamasını gösterir" }] }) }),
    test(2, "*Hızlı Sipariş* formuna en fazla kaç satır girersiniz?", ["50 satır", "100 satır", "500 satır"], 1),
    cevap("hizli", "Hızlı Sipariş formu *100 satır* alır.", { bolge: B(270, 180, 1380, 610),
      vurgu: [{ hedef: SATIR100, not: "Satır sınırı formun hemen altında yazar" }],
      dikey: tel("m-hizli", { vurgu: [{ hedef: "~En fazla 100 satır", not: "Satır sınırı formun hemen altında yazar" }] }) }),
    test(3, "Kargo *takip numarası* nerede yazar?", ["Sipariş detayındaki Sevkiyat kutusunda", "Faturalarım sayfasında", "Cari Ekstre sayfasında"], 0),
    // Yalnız Sevkiyat kutusu: yanındaki Geçmiş listesi ham durum kodları içerir, gri bantla kapatılır
    cevap("siparis-teslim-kargo", "Takip numarası *Sevkiyat* kutusunda yazar.", { bolge: B(1107, 20, 740, 327), ortu: [GECMIS_TESLIM],
      vurgu: [{ hedef: ["Aras Kargo", "1000855481"], not: "Takip et bağlantısıyla kargonuzu izleyebilirsiniz" }],
      dikey: tel("m-siparis-sevkiyat", { ortu: [GECMIS_SEVKIYAT_M],
        vurgu: [{ hedef: B(54, 1663, 348, 46), not: "Takip et bağlantısıyla kargonuzu izleyebilirsiniz" }] }) }),   // "Aras Kargo Yolda", takip no ve Takip et (yakınlaşsın diye dar kutu)
    ozet(["Kargodaki siparişi Sevkiyatta durumunda bulun.", "Hızlı Sipariş formuna en fazla 100 satır girin.", "Takip numarasını Sevkiyat kutusunda okuyun."],
      "Mini test: ödeme ve indirimler"),
  ]),

  // ── 74 · Mini test: ödeme ve indirimler
  E(74, "egitim-74-test-odeme", "Mini test: ödeme ve indirimler", 3, [
    test(1, "Havale/EFT ile *peşin ödemede* indirim yüzde kaçtır?", ["%2", "%5", "%10"], 0),
    cevap("kampanyalar", "Peşin ödemede net tutardan *%2* düşülür.", { bolge: KAMP,
      vurgu: [{ hedef: ["Peşin Ödeme %2 İndirim", "~Havale/EFT ile ödediğiniz"], not: "Bu indirim için kupon kodu gerekmez" }],
      dikey: tel("m-kampanyalar", { vurgu: [{ hedef: ["Peşin Ödeme %2 İndirim", "~Havale/EFT ile ödediğiniz"], not: "Bu indirim için kupon kodu gerekmez" }] }) }),
    test(2, "*Ücretsiz kargo* hangi tutardan başlar?", ["₺1.500", "₺3.500", "₺5.000"], 1),
    cevap("kampanyalar", "*₺3.500* ve üzerinde kargo ücreti alınmaz.", { bolge: KAMP,
      vurgu: [{ hedef: ["Ücretsiz Kargo", "₺3.500,00 ve üzeri siparişlerde kargo ücreti uygulanmaz."], not: "Sınır Sürekli Avantajlar bölümünde yazar" }],
      dikey: tel("m-kampanyalar", { vurgu: [{ hedef: ["Ücretsiz Kargo", "₺3.500,00 ve üzeri siparişlerde kargo ücreti uygulanmaz."], not: "Sınır Sürekli Avantajlar bölümünde yazar" }] }) }),
    test(3, "Ürün sayfasındaki *kademeli indirim* oranları hangileridir?", ["%5 / %8 / %10", "%2 / %4 / %6", "%10 / %15 / %20"], 0),
    cevap("urun", "Adet arttıkça *indirim oranı* artar.", { bolge: URUN_ALT,
      vurgu: [{ hedef: ["[]5+ %5", "[]40+ %10"], not: "İndirim sepette her satıra kendiliğinden yansır" }],
      dikey: tel("m-urun", { vurgu: [{ hedef: ["[]5+ %5", "[]40+ %10"], not: "İndirim sepette her satıra kendiliğinden yansır" }] }) }),
    ozet(["Havale/EFT ile ödeyip %2 indirim alın.", "₺3.500 ve üzeri siparişte ücretsiz kargodan yararlanın.", "Kademe tablosunda indirim oranını okuyun."],
      "Mini test: onay ve bütçe"),
  ]),

  // ── 75 · Mini test: onay ve bütçe
  E(75, "egitim-75-test-onay", "Mini test: onay ve bütçe", 0, [
    test(1, "Otomatik onay eşiğinin *altındaki* sipariş ne olur?", ["Doğrudan onaylanır", "Onay zincirine girer", "İptal edilir"], 0),
    cevap("sozlesme", "Eşiğin altındaki sipariş *onay zincirine* girmez.", { bolge: B(285, 330, 1360, 602),
      vurgu: [{ hedef: "[]Otomatik Onay Eşiği ₺5.000,00", not: "Eşik tutarı sözleşmenizde tanımlıdır" }],   // etiket, tutar ve açıklama satırı
      dikey: tel("m-sozlesme", { vurgu: [{ hedef: "[]Otomatik Onay Eşiği ₺5.000,00", not: "Eşik tutarı sözleşmenizde tanımlıdır" }] }) }),
    test(2, "Bir onay kuralına en fazla kaç *seviye* onaylayıcı eklersiniz?", ["2 seviye", "3 seviye", "5 seviye"], 1),
    // Yeni Onay Kuralı formu: Onaylayıcı Zinciri başlığı ve Seviye 1–3 seçimleri. Formun mobil çekimi yok (m-onay-kurallari liste
    // sayfası): dikeyde masaüstü dar kadraj, vurgu seviye etiketleri ve seçim kutularının başı (yakınlaşma ≥ 1,7 kat).
    cevap("onay-kural-yeni", "Bir kurala en fazla *üç seviye* eklenir.", { bolge: B(270, 190, 1380, 610),
      vurgu: [{ hedef: ["Onaylayıcı Zinciri", "Seviye 3"], not: "Siparişi en fazla üç kişi sırayla onaylar" }],
      dikey: { tip: "ekran", ekran: "onay-kural-yeni", bolgeD: B(570, 430, 640, 640),
        vurgu: [{ hedef: B(583, 528, 360, 216), not: "Siparişi en fazla üç kişi sırayla onaylar" }] } }),
    test(3, "Departmanın *kalan bütçesini* nerede görürsünüz?", ["Bütçe Panosu", "Kuponlarım", "Faturalarım"], 0),
    cevap("butce", "*Bütçe Panosu* kalan bütçeyi gösterir.", { bolge: B(270, 180, 1380, 610),
      vurgu: [{ hedef: ["Depo ve Lojistik", "₺58.144,32"], not: "Bütçe, harcanan ve kalan tutar aynı satırda yazar" }],
      // m-butce'de tablo yana kayıyor (Kalan sütunu kesik): dikeyde masaüstü dar kadraj. Dikey vurgu en az ~1,7 kat yakınlaştığı
      // için 730 px'lik satır sığmıyor: hedef Harcandı + Kalan sütunları. Kadraj y 30–775: başlık ve tüm tablo görünür,
      // altındaki Kullanıcı Onay Limitleri satırlarının ham rol kodu ("CUSTOMER MANAGER", y 792) kadraja girmez.
      dikey: { tip: "ekran", ekran: "butce", bolgeD: B(560, 30, 745, 745),
        vurgu: [{ hedef: ["Harcandı", "₺58.144,32"], not: "Harcanan ve kalan tutar yan yana yazar" }] } }),
    ozet(["Otomatik onay eşiğini Sözleşme & Fiyat sayfasında kontrol edin.", "Onay zincirine en fazla üç seviye ekleyin.", "Kalan bütçeyi Bütçe Panosu sayfasında izleyin."]),
  ]),
];
