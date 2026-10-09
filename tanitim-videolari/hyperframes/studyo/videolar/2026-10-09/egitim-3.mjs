// 2026-10-09 serisi · Eğitim 57–63: sipariş belgesi, SSS (havale, iptal), teklifler ve hesap kurulumu (surum 2).
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakamlar ve etiketler 9 Ekim öğe haritalarından okundu.
// Kayıt değiştiren tıklamalar (İptal Et, Kabul Et, Kaydet, Davet Et, Oluştur) panelde yapılmaz; motor yalnızca canlandırır.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, adim, metin, ayar) => ({ tip: "ekran", ekran, adim, metin, ...ayar });
const tel = (ekran, ayar) => ({ tip: "telefon", ekran, ...ayar });
const kapak = (no, baslik, alt, ikon) => ({ tip: "kapak", ust: `Eğitim ${no}`, baslik, alt, ikon, sure: "auto" });
const kontrol = (maddeler) => ({ tip: "kontrol", baslik: "*Özet*", maddeler });
const E = (no, id, baslik, ton, sahneler) => ({ id, tur: "egitim", baslik, etiket: `Eğitim ${no} · ${baslik}`, tohum: no, ton, surum: 2, sahneler });

// Sipariş belgesindeki adres satırlarında kişi adı + telefon var: kadraja girdiğinde gri bantla kapatılır
const BELGE_TEL = ["Burak Şahin · +90 216 000 00 01", "Ayşe Yılmaz · +90 216 000 00 03"];

export default [
  // ── 57 · Sipariş belgesi
  E(57, "egitim-57-siparis-belgesi", "Sipariş belgesini yazdırın", 1, [
    kapak(57, "Sipariş belgesini yazdırın", "Siparişin belgesini tek tıkla açıp yazdırın.", "doc"),
    { tip: "karakter", avatar: { sac: "topuz", ten: "acik", sacRenk: "#4A2E1A", giysi: "#2C6E8F", gozluk: true, ruh: "dertli" },
      ad: "Derya", rol: "Muhasebe sorumlusu", ikon: "doc", metin: "Her siparişin *çıktısını* dosyaya eklemem gerekiyor." },
    ek("siparis-hazirlaniyor", 1, "Sipariş detayında *Yazdır / PDF* düğmesine basın.", { bolge: B(560, 180, 1090, 482), bolgeD: B(1130, 185, 520, 520),
      tikla: { hedef: "Yazdır / PDF", sonuc: "Sipariş belgesi açılır" } }),
    ek("siparis-yazdir", 2, "Belgede *PO numarasını* ve toplamı kontrol edin.", { bolge: B(383, 345, 1435, 635), bolgeD: B(760, 340, 680, 680), ortu: BELGE_TEL,
      vurgu: [{ hedef: "PO No : SAS-2026-0644", not: "Satın alma numaranız müşteri bilgisinin altında yazar." },
        { hedef: "[]Genel Toplam ₺2.925,48", not: "İndirim, kargo ve KDV toplamın üstünde ayrı satırlarda yazar." }] }),
    ek("siparis-yazdir", 3, "*Yazdır / PDF olarak Kaydet* düğmesine basın.", { bolge: B(760, 195, 690, 305), bolgeD: B(900, 190, 560, 560), ortu: BELGE_TEL,
      tikla: { hedef: "Yazdır / PDF olarak Kaydet", sonuc: "Yazdırma penceresi açılır" } }),
    kontrol(["Sipariş detayında Yazdır / PDF düğmesine basın.", "Belgede PO numarasını ve toplamı kontrol edin.", "Yazdır / PDF olarak Kaydet ile çıktı alın."]),
    { tip: "son", metin: "Şimdi bir *siparişin belgesini* yazdırın.", sonraki: "Havale yaptım, sipariş neden ilerlemiyor?" },
  ]),

  // ── 58 · Havale ödemesi (SSS)
  E(58, "egitim-58-havale-odeme", "Havale yaptım, sipariş neden ilerlemiyor?", -2, [
    kapak(58, "Havale yaptım, sipariş neden ilerlemiyor?", "Havale ödemesinin siparişle nasıl eşleştiğini öğrenin.", "wallet"),
    { tip: "soru", metin: "Havale yaptınız ama sipariş *ilerlemiyor* mu?", alt: "Cevap sipariş detayında yazar.", sure: 4,
      cipler: [["wallet", "Havale / EFT"], ["clock", "Ödeme Bekleniyor"]] },
    ek("siparis-odeme", 1, "Sipariş *Ödeme Bekleniyor* durumunda bekler.", { bolge: B(560, 190, 1090, 482),
      vurgu: [{ hedef: "Ödeme Bekleniyor", not: "Ödeme hesaba geçince sipariş hazırlığa alınır." }],
      dikey: tel("m-siparis-odeme", { vurgu: [{ hedef: "Ödeme Bekleniyor", not: "Ödeme hesaba geçince sipariş hazırlığa alınır." }] }) }),
    // Kamera vurguya yaklaşınca ekranın altındaki kesik "Havale açıklamasına yazınız" satırı görünüyor: gri bantla kapatılır
    ek("siparis-odeme", 2, "Havale açıklamasına *sipariş numarasını* yazın.", { bolge: B(1000, 640, 920, 410), ortu: [B(1330, 1050, 310, 30)],
      vurgu: [{ hedef: "Açıklama alanına sipariş numaranızı yazmazsanız ödemenizin eşleştirilmesi gecikir.", not: "Ödemeniz bu numarayla siparişe bağlanır." }],
      dikey: tel("m-siparis-odeme", { vurgu: [{ hedef: "[]Açıklama alanına sipariş numaranızı", not: "Ödemeniz bu numarayla siparişe bağlanır." }] }) }),
    // Masaüstü çekimde numara kutusu ekranın altında kesik: bu adım iki yönde de mobil çekimle gösterilir
    tel("m-siparis-odeme", { adim: 3, metin: "Numarayı *Kopyala* düğmesiyle alın.", basY: 1300,
      vurgu: [{ hedef: "[]Havale açıklamasına yazınız MTS-2026-0027", not: "Bu numarayı havale açıklamasına yapıştırın." }],
      // Dokunuş Kopyala düğmesinin ortasına (x 354) düşer; geniş kutu yakınlaşmayı 1x'te tutar, numara kadrajda kalır
      tikla: { hedef: B(160, 1557, 388, 26), sonuc: "Sipariş numarası kopyalandı" } }),
    kontrol(["Sipariş detayında Ödeme Bekleniyor durumuna bakın.", "Havale açıklamasına sipariş numarasını yazın.", "Numarayı Kopyala düğmesiyle alın."]),
    { tip: "son", metin: "Şimdi *Siparişlerim* sayfasını açın.", sonraki: "Siparişimi iptal edebilir miyim?" },
  ]),

  // ── 59 · Sipariş iptali (SSS)
  E(59, "egitim-59-siparis-iptal", "Siparişimi iptal edebilir miyim?", 2, [
    kapak(59, "Siparişimi iptal edebilir miyim?", "İptal kuralını öğrenin, doğru yolu seçin.", "x"),
    // Panel kuralı: "Sipariş henüz işleme alınmadan iptal edilebilir. MTS hazırlığa başladıktan sonra iptal için destek ekibine ulaşın."
    // Motor sol kartı kırmızı ✕ ile, sağ kartı onay işaretiyle çizer: kısıtlar solda, yapılabilen sağda.
    { tip: "karsilastir", baslik: "İptal *ne zaman* mümkün?", sure: 6,
      once: "Hazırlık başladıysa", sol: ["İptal düğmesi görünmez", "İptal için destek talebi gerekir"],
      sonra: "İşleme alınmadan önce", sag: ["Siparişi İptal Et düğmesi görünür", "Siparişi kendiniz iptal edersiniz"] },
    ek("siparis-mts-bekleniyor", 1, "İşleme alınmamış siparişte *Siparişi İptal Et* düğmesine basın.", { bolge: B(560, 290, 800, 354),
      vurgu: [{ hedef: "MTS Onayı Bekleniyor", not: "Bu durumda sipariş henüz işleme alınmadı." }],
      tikla: { hedef: "Siparişi İptal Et", sonuc: "Sipariş iptal edilir" },
      dikey: tel("m-siparis-odeme", { vurgu: [{ hedef: "Ödeme Bekleniyor", not: "Bu durumda sipariş henüz işleme alınmadı." }],
        tikla: { hedef: "Siparişi İptal Et", sonuc: "Sipariş iptal edilir" } }) }),
    ek("destek-yeni", 2, "Hazırlık başladıysa *destek talebi* açın.", { bolge: B(570, 362, 680, 376), bolgeD: B(575, 360, 640, 640),
      yaz: { hedef: "Destek talebinizin konusunu girin", metin: "MTS-2026-0020 iptal talebi" },
      tikla: { hedef: "Talebi Oluştur", sonuc: "Destek talebiniz oluşturuldu" } }),
    kontrol(["Sipariş detayında durumu kontrol edin.", "İşleme alınmadan Siparişi İptal Et düğmesine basın.", "Hazırlık başladıysa destek talebi açın."]),
    { tip: "son", metin: "Şimdi *Siparişlerim* sayfasını açın.", sonraki: "Teklifiniz hazır: detayı okuyun" },
  ]),

  // ── 60 · Teklif detayı
  E(60, "egitim-60-teklif-detayi", "Teklifiniz hazır: detayı okuyun", -1, [
    kapak(60, "Teklifiniz hazır: detayı okuyun", "Teklifin fiyatını, notunu ve son tarihini okuyun.", "tag"),
    { tip: "soru", metin: "Teklifiniz hazır. *Neye* bakmalısınız?", alt: "Kabul etmeden önce detayı okuyun.", sure: 4,
      cipler: [["tag", "Birim fiyat"], ["chat", "Admin notu"], ["calendar", "Son tarih"]] },
    // TKF-2026-0002 (test kaydı) satırı ekranlar.js `ortu` ile her sahnede kapalı.
    // m-teklifler kullanılmadı: ekranlar.js `ortu` ("[]TKF-2026-0002") orada tüm tabloyu kapatıyor; ayrıca Durum sütunu yana taşıyor.
    ek("teklifler", 1, "*Teklif Hazır* yazan teklifi açın.", { bolge: B(290, 180, 1360, 602), bolgeD: B(560, 280, 640, 640),
      vurgu: [{ hedef: ["TKF-2026-0003", "Teklif Hazır#2"], not: "Fiyatı hazırlanan teklifler bu durumla görünür.", kaydir: true }],
      tikla: { hedef: "TKF-2026-0003", sonuc: "Teklif detayı açılır" } }),
    // m-teklif-hazir tablosu yana taşıyor (Toplam sütunu kesik): dikeyde tek satır vurgulanır, kamera kesik sütunu dışarıda bırakır
    ek("teklif-hazir", 2, "Admin notunu ve *birim fiyatları* okuyun.", { bolge: B(560, 400, 1090, 482),
      vurgu: [{ hedef: B(597, 415, 380, 40), not: "İndirimin nedeni admin notunda yazar." },   // not satırı tam genişlik: yalnız yazılı kısım
        { hedef: ["Birim Fiyat", "92,07 ₺"], not: "Her kalemin birim fiyatı ayrı satırda yazar." }],
      dikey: tel("m-teklif-hazir", {
        vurgu: [{ hedef: ["Admin Notu", "Sözleşmeli müşteri — liste fiyatından %7 iskonto uygulandı."], not: "İndirimin nedeni admin notunda yazar." },
          { hedef: ["7906666", "28,27 ₺"], not: "Her kalemin birim fiyatı ayrı satırda yazar." }] }) }),
    ek("teklif-hazir", 3, "Son tarihten önce *Teklifi Kabul Et* düğmesine basın.", { bolge: B(560, 180, 1090, 482),
      vurgu: [{ hedef: ["Teklif Hazır", "Son: 14 Ekim 2026"], not: "Teklif bu tarihe kadar geçerlidir." }],
      tikla: { hedef: "Teklifi Kabul Et", sonuc: "Teklif siparişe çevrilir" },
      dikey: tel("m-teklif-hazir", { vurgu: [{ hedef: ["Teklif Hazır", "Son: 14 Ekim 2026"], not: "Teklif bu tarihe kadar geçerlidir." }],
        tikla: { hedef: "Teklifi Kabul Et", sonuc: "Teklif siparişe çevrilir" } }) }),
    kontrol(["Teklif Hazır durumundaki teklifi açın.", "Admin notunu ve birim fiyatları okuyun.", "Son tarihten önce Teklifi Kabul Et düğmesine basın."]),
    { tip: "son", metin: "Şimdi *Fiyat Tekliflerim* sayfasını açın.", sonraki: "Fiyat teklifi mi, toplu alım mı?" },
  ]),

  // ── 61 · Fiyat teklifi mi, toplu alım mı?
  E(61, "egitim-61-teklif-turleri", "Fiyat teklifi mi, toplu alım mı?", 3, [
    kapak(61, "Fiyat teklifi mi, toplu alım mı?", "İhtiyacınıza uygun teklif formunu seçin.", "help"),
    // İki seçenek de olumlu: karsilastir sol kartı ✕ ile çizdiği için tarafsız ikonlu ipucu kartı kullanıldı.
    // Metinler formların kendi açıklamalarından: "Fiyat teklifi almak istediğiniz ürünleri ve miktarları girin." / "500+ adet veya yıllık sözleşme talepleri için satış ekibimizden hızlı teklif alın."
    { tip: "ipucu", baslik: "İki form, *iki ihtiyaç*",
      maddeler: [["tag", "Fiyat teklifi: ürün ve miktarı panelde girin"], ["building", "Toplu alım: 500+ adet için satış ekibinden teklif alın"]] },
    ek("teklif-yeni", 1, "*Yeni Fiyat Teklifi* formuna ürünü ve miktarı yazın.", { bolge: B(570, 300, 680, 380), bolgeD: B(575, 300, 670, 670),
      yaz: { hedef: "Ürün ara (ad veya kod)", metin: "kağıt havlu" },
      tikla: { hedef: "Teklif Oluştur", sonuc: "Fiyatı admin ekibi hazırlar" } }),
    ek("teklif-iste", 2, "500+ adet için *Teklif İste* formunu doldurun.", { bolge: B(610, 180, 700, 640), bolgeD: B(625, 190, 670, 670),
      vurgu: [{ hedef: "~500+ adet veya yıllık sözleşme", not: "Toplu alım talebi satış ekibine gider." }],
      tikla: { hedef: "Teklif Talep Et", sonuc: "Talebiniz satış ekibine iletilir" } }),
    { tip: "test", ust: "Mini test", soru: "500+ adetlik alım için hangi formu doldurursunuz?",
      secenekler: ["Toplu Alım Teklifi", "Hızlı Sipariş", "Numune Talebi"], dogru: 0, aciklama: "*Toplu Alım Teklifi* 500+ adet içindir." },
    kontrol(["Ürün ve miktarı Yeni Fiyat Teklifi formuna yazın.", "500+ adet için Teklif İste formunu kullanın.", "Teklif Talep Et düğmesiyle talebi gönderin."]),
    { tip: "son", metin: "Şimdi *Teklif İste* sayfasını açın.", sonraki: "Hesabı 4 adımda kurun" },
  ]),

  // ── 62 · Hesap kurulumu (hesap sahibi)
  E(62, "egitim-62-hesap-kurulumu", "Hesabı 4 adımda kurun", 0, [
    kapak(62, "Hesabı 4 adımda kurun", "Departman, kullanıcı ve onay kuralını sırayla kurun.", "gear"),
    { tip: "gundem", ust: "Eğitim 62", baslik: "Bu videoda", ikon: "list",
      maddeler: ["Departman ekleyin", "Kullanıcı davet edin", "Onay kuralı kurun", "Onay eşiğini kontrol edin"] },
    ek("departman-yeni", 1, "*Departman & Bütçe* sayfasında yeni departman ekleyin.", { bolge: B(560, 180, 1090, 482),
      vurgu: [{ hedef: ["Bu ay harcama", "/ ₺60.000,00"], not: "Her departmanın harcaması bütçesiyle birlikte görünür." }],
      yaz: { hedef: "örn. Satın Alma", metin: "Kat Hizmetleri" },
      tikla: { hedef: "Kaydet", sonuc: "Departman eklendi" },
      dikey: tel("m-departmanlar", { vurgu: [{ hedef: ["Bu ay harcama", "/ ₺60.000,00"], not: "Her departmanın harcaması bütçesiyle birlikte görünür." }],
        // Dokunuş düğmenin ortasına düşer; geniş kutu yakınlaşmayı 1x'te tutar, sayfa başlığı kesilmez
        tikla: { hedef: B(155, 171, 387, 40), sonuc: "Yeni departman formu açılır" } }) }),
    ek("kullanici-davet", 2, "*Kullanıcı Davet Et* formunda rolü seçin.", { bolge: B(560, 200, 1090, 482), bolgeD: B(570, 300, 600, 600),
      vurgu: [{ hedef: "[]Rol seçin...", not: "Rol seçimi varsayılan yetkileri belirler." },
        { hedef: B(583, 452, 310, 56), not: "Onay limitini boş bırakırsanız limit sınırsız olur." }],   // etiket + kutunun sol kısmı
      tikla: { hedef: "Kullanıcıyı Davet Et", sonuc: "Kullanıcı davet edildi" } }),
    ek("onay-kural-yeni", 3, "*Yeni Onay Kuralı* ile tutar sınırını belirleyin.", { bolge: B(200, 285, 1440, 640), bolgeD: B(570, 280, 680, 680),
      vurgu: [{ hedef: B(583, 581, 310, 61), not: "Koşula uyan siparişler bu kişinin onayını bekler." }],   // "Seviye 1" etiketi + seçim kutusunun sol kısmı
      yaz: { hedef: "örn: 10000", metin: "25000" },
      tikla: { hedef: "Kuralı Oluştur", sonuc: "Onay kuralı oluşturuldu" } }),
    ek("sozlesme", 4, "*Sözleşme & Fiyat* sayfasında otomatik onay eşiğini kontrol edin.", { bolge: B(285, 330, 1360, 602),
      vurgu: [{ hedef: B(583, 605, 180, 44), not: "₺5.000 altındaki siparişler onay beklemeden onaylanır." }],
      dikey: tel("m-sozlesme", { vurgu: [{ hedef: ["Otomatik Onay Eşiği", "₺5.000,00"], not: "₺5.000 altındaki siparişler onay beklemeden onaylanır." }] }) }),
    kontrol(["Departman ekleyip kullanıcıları davet edin.", "Tutar sınırıyla onay kuralı oluşturun.", "Otomatik onay eşiğini kontrol edin."]),
    { tip: "son", metin: "Şimdi *Departman & Bütçe* sayfasını açın.", sonraki: "Roller ve yetkiler" },
  ]),

  // ── 63 · Roller ve yetkiler
  E(63, "egitim-63-roller-yetkiler", "Roller ve yetkiler", -3, [
    kapak(63, "Roller ve yetkiler", "Kimin ne yapabileceğini rol ve yetkilerle belirleyin.", "key"),
    { tip: "soru", metin: "Ekipte *kim ne yapabilir?*", alt: "Bunu rol ve yetkiler belirler.", sure: 4,
      cipler: [["user", "Genel Müdür"], ["cart", "Satınalmacı"], ["eye", "Görüntüleyici"]] },
    ek("kullanicilar", 1, "*Kullanıcılar & Yetkiler* sayfasında rolleri görün.", { bolge: B(560, 190, 1090, 482),
      vurgu: [{ hedef: ["Rol", "Görüntüleyici"], not: "Cari Sahibi dışında üç rol var: Genel Müdür, Satınalmacı, Görüntüleyici." }],
      tikla: { hedef: "Düzenle#3", sonuc: "Kullanıcının yetki sayfası açılır" },
      dikey: tel("m-kullanicilar", { vurgu: [{ hedef: ["Genel Müdür", "· 45 yetki"], not: "Kartta rol, departman, onay limiti ve yetki sayısı yazar." }],
        tikla: { hedef: "Düzenle#3", sonuc: "Kullanıcının yetki sayfası açılır" } }) }),
    ek("kullanici-yetki", 2, "Kullanıcının *rolünü* ve onay limitini belirleyin.", { bolge: B(560, 290, 1090, 482), bolgeD: B(940, 300, 690, 690),
      vurgu: [{ hedef: "[]Genel Müdür Satınalmacı Görüntüleyici", not: "Rol seçimi varsayılan yetkileri belirler." },
        { hedef: B(947, 385, 340, 54), not: "Boş bırakırsanız onay limiti sınırsız olur." }] }),   // etiket + kutunun sol kısmı
    ek("kullanici-yetki", 3, "*Hazır şablon* ile yetkileri tek seferde seçin.", { bolge: B(830, 440, 1090, 482), bolgeD: B(940, 440, 690, 640),
      vurgu: [{ hedef: ["Hazır şablon:", "uygulayıp ince ayar yapabilirsiniz"], not: "Örneğin Onaycı ya da Tam Yetki şablonunu seçin." }] }),
    ek("kullanici-yetki-alt", 4, "*Detaylı Yetkiler* listesinde ekstra yetki açın.", { bolge: B(830, 590, 1090, 482), bolgeD: B(945, 420, 660, 660),
      vurgu: [{ hedef: "Onay ver / reddet (iç onay) Varsayılan", not: "Varsayılan etiketi yetkinin rolden geldiğini gösterir." }],
      // Dokunuş "Onay kurallarını yönet" yazısının üstüne düşer; dar kutu dikeyde kamerayı boş sol sütundan uzak tutar
      tikla: { hedef: B(1060, 808, 120, 29), sonuc: "Ekstra yetki açılır" } }),
    kontrol(["Kullanıcı listesinde rolleri kontrol edin.", "Düzenle sayfasında rolü ve onay limitini belirleyin.", "Detaylı Yetkiler listesinde ekstra yetki açın."]),
    { tip: "son", metin: "Şimdi *Kullanıcılar & Yetkiler* sayfasını açın." },
  ]),
];
