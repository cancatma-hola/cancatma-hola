// 2026-10-09 serisi · Eğitim 57–63: sipariş belgesi, SSS (havale, iptal), teklifler ve hesap kurulumu (kurgu v3, surum 3).
// Kurgu v3: kapak yok; ilk sahne kanca (dertli karakter ya da SSS sorusu) ve başlık çipini (etiket) taşır.
// Karakterle açılan videoda aynı kişi sonda gülümseyerek (rozet) döner; video tek `ozet` sahnesiyle biter.
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakamlar ve etiketler 9 Ekim öğe haritalarından okundu.
// Kayıt değiştiren tıklamalar (İptal Et, Kabul Et, Kaydet, Davet Et, Oluştur) panelde yapılmaz; motor yalnızca canlandırır.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, adim, metin, ayar) => ({ tip: "ekran", ekran, adim, metin, ...ayar });
const tel = (ekran, ayar) => ({ tip: "telefon", ekran, ...ayar });
const ozet = (maddeler, sonraki) => ({ tip: "ozet", maddeler, ...(sonraki ? { sonraki } : {}) });
// İlk sahne (kanca) videonun başlık çipini taşır (dikey yerine geçen tanım da)
const E = (no, id, baslik, ton, [kanca, ...sahneler]) => {
  const etiket = `Eğitim ${no} · ${baslik}`;
  const ilk = { ...kanca, etiket, ...(kanca.dikey ? { dikey: { ...kanca.dikey, etiket } } : {}) };
  return { id, tur: "egitim", baslik, etiket, tohum: no, ton, surum: 3, sahneler: [ilk, ...sahneler] };
};
// SSS sorusu: dikeyde iki satırlık başlık çipi üstteki soru çiplerinin (y 400–440) üstüne biniyor; dikeyde çipsiz gösterilir
const soru = (metin, alt, cipler) => ({ tip: "soru", metin, alt, cipler, dikey: { tip: "soru", alt } });
// Kurgusal kişi: açılışta dertli (sorun), sonda aynı kişi mutlu ve rozetli (yeni rutin)
const kisi = (avatar, ad, rol, ikon) => ({
  sorun: (metin) => ({ tip: "karakter", avatar: { ...avatar, ruh: "dertli" }, ad, rol, ikon, metin }),
  sonuc: (metin) => ({ tip: "karakter", avatar: { ...avatar, ruh: "mutlu" }, ad, rol, ikon, rozet: true, metin }),
});

const DERYA = kisi({ sac: "topuz", ten: "acik", sacRenk: "#4A2E1A", giysi: "#2C6E8F", gozluk: true }, "Derya", "Muhasebe sorumlusu", "doc");
const OZAN = kisi({ sac: "kisa", ten: "bugday", sacRenk: "#3A2615", giysi: "#5B3A8E", sakal: true }, "Ozan", "Satın alma uzmanı", "tag");
const NIHAN = kisi({ sac: "uzun", ten: "bugday", sacRenk: "#2B1B12", giysi: "#7A2E3A", yaka: "gomlek" }, "Nihan", "İdari işler müdürü", "gear");
const OKAN = kisi({ sac: "kisa", ten: "acik", sacRenk: "#5A4632", giysi: "#24476B", yaka: "kravat", gozluk: true }, "Okan", "İşletme müdürü", "key");

// Sipariş belgesindeki adres satırlarında kişi adı + telefon, müşteri bloğunda vergi numarası var: kadraja girdiğinde gri bantla kapatılır (Eğitim 68 ile aynı)
const BELGE_TEL = ["Burak Şahin · +90 216 000 00 01", "Ayşe Yılmaz · +90 216 000 00 03", "~VKN"];
// Siparişlerim: tarih filtrelerinde tarayıcının "mm/dd/yyyy" yer tutucusu var; kutular boş gri kutuyla kapatılır
const TARIH = [B(1466, 313, 156, 30), B(601, 353, 131, 30)], TARIH_M = [B(25, 493, 177, 34), B(232, 493, 153, 34)];

export default [
  // ── 57 · Sipariş belgesi
  E(57, "egitim-57-siparis-belgesi", "Sipariş belgesini yazdırın", 1, [
    DERYA.sorun("Her siparişin *çıktısını* dosyaya eklemem gerekiyor."),
    // MTS-2026-0020 listede beşinci satır; sonraki adımlar aynı siparişin detayı ve belgesi
    ek("siparisler", 1, "*Siparişlerim* sayfasında siparişin detayını açın.", { bolge: B(555, 180, 1095, 600), ortu: TARIH,
      tikla: { hedef: "Detay →#5", sonuc: "Sipariş detayı açılır" },
      dikey: tel("m-siparisler", { ortu: TARIH_M, tikla: { hedef: "MTS-2026-0020", sonuc: "Sipariş detayı açılır" } }) }),
    ek("siparis-hazirlaniyor", 2, "Sipariş detayında *Yazdır / PDF* düğmesine basın.", { bolge: B(560, 180, 1090, 482), bolgeD: B(1130, 185, 520, 520),
      tikla: { hedef: "Yazdır / PDF", sonuc: "Sipariş belgesi açılır" } }),
    ek("siparis-yazdir", 3, "Belgede *PO numarasını* ve toplamı kontrol edin.", { bolge: B(383, 345, 1435, 635), bolgeD: B(760, 340, 680, 680), ortu: BELGE_TEL,
      vurgu: [{ hedef: "PO No : SAS-2026-0644", not: "Satın alma numaranız müşteri bilgisinin altında yazar." },
        { hedef: "[]Genel Toplam ₺2.925,48", not: "İndirim, kargo ve KDV toplamın üstünde ayrı satırlarda yazar." }] }),
    ek("siparis-yazdir", 4, "*Yazdır / PDF olarak Kaydet* düğmesine basın.", { bolge: B(760, 195, 690, 305), bolgeD: B(900, 190, 560, 560), ortu: BELGE_TEL,
      tikla: { hedef: "Yazdır / PDF olarak Kaydet", sonuc: "Yazdırma penceresi açılır" } }),
    DERYA.sonuc("Artık belgeyi sipariş detayından *yazdırıyorum*."),
    ozet(["Sipariş detayında Yazdır / PDF düğmesine basın.", "Belgede PO numarasını ve toplamı kontrol edin.", "Yazdır / PDF olarak Kaydet ile çıktı alın."],
      "Havale yaptım, sipariş neden ilerlemiyor?"),
  ]),

  // ── 58 · Havale ödemesi (SSS)
  E(58, "egitim-58-havale-odeme", "Havale yaptım, sipariş neden ilerlemiyor?", -2, [
    soru("Havale yaptınız, sipariş hâlâ *Ödeme Bekleniyor* mu?", "Cevap sipariş detayında yazar.",
      [["wallet", "Havale / EFT"], ["doc", "Sipariş numarası"]]),
    ek("siparis-odeme", 1, "Sipariş detayında *Ödeme Bekleniyor* durumuna bakın.", { bolge: B(560, 172, 1090, 482),
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
    ozet(["Sipariş detayında Ödeme Bekleniyor durumuna bakın.", "Sipariş numarasını Kopyala düğmesiyle alın.", "Numarayı havale açıklamasına yazın."],
      "Siparişimi iptal edebilir miyim?"),
  ]),

  // ── 59 · Sipariş iptali (SSS)
  // Panel kuralı: "Sipariş henüz işleme alınmadan iptal edilebilir. MTS hazırlığa başladıktan sonra iptal için destek ekibine ulaşın."
  // Kural artık panelde gösterilir: işleme alınmamış siparişte düğme var (adım 1), hazırlanan siparişte yok (adım 2).
  E(59, "egitim-59-siparis-iptal", "Siparişimi iptal edebilir miyim?", 2, [
    soru("Sipariş *ne zaman* iptal edilebilir?", "Cevap siparişin durumuna bağlıdır.",
      [["clock", "MTS Onayı Bekleniyor"], ["box", "Hazırlanıyor"]]),
    ek("siparis-mts-bekleniyor", 1, "İşleme alınmamış siparişte *Siparişi İptal Et* düğmesine basın.", { bolge: B(560, 290, 800, 354),
      vurgu: [{ hedef: "MTS Onayı Bekleniyor", not: "Bu durumda sipariş henüz işleme alınmadı." }],
      tikla: { hedef: "Siparişi İptal Et", sonuc: "Sipariş iptal edilir" },
      dikey: tel("m-siparis-odeme", { vurgu: [{ hedef: "Ödeme Bekleniyor", not: "Bu durumda sipariş henüz işleme alınmadı." }],
        tikla: { hedef: "Siparişi İptal Et", sonuc: "Sipariş iptal edilir" } }) }),
    // Hazırlanan siparişte (MTS-2026-0020) "Sıradaki adım" kutusunun altında iptal düğmesi yok: kadraj bu boşluğu da gösterir
    ek("siparis-hazirlaniyor", 2, "Hazırlanan siparişte *iptal düğmesi* görünmez.", { bolge: B(560, 290, 800, 354), bolgeD: B(565, 290, 560, 560),
      // Durum rozeti + "Sıradaki adım" yazısı birlikte: kamera kutunun altını da gösterir, orada iptal düğmesi yok
      vurgu: [{ hedef: ["Hazırlanıyor", "Depo personeli ürünleri toplayıp paketliyor."], not: "Bu aşamada iptal için destek talebi gerekir." }] }),
    // Dikeyde masaüstü form okunmuyor: mobil Destek sayfasında "+ Yeni Destek Talebi" dokunuşu gösterilir
    ek("destek-yeni", 3, "Hazırlık başladıysa *destek talebi* açın.", { bolge: B(570, 362, 680, 376),
      yaz: { hedef: "Destek talebinizin konusunu girin", metin: "MTS-2026-0020 iptal talebi" },
      tikla: { hedef: "Talebi Oluştur", sonuc: "Destek talebiniz oluşturuldu" },
      dikey: tel("m-destek", { tikla: { hedef: "+ Yeni Destek Talebi", sonuc: "Destek talebi formu açılır" } }) }),
    ozet(["Sipariş detayında durumu kontrol edin.", "İşleme alınmamış siparişte Siparişi İptal Et düğmesine basın.", "Hazırlık başladıysa destek talebi açın."],
      "Teklifiniz hazır: detayı okuyun"),
  ]),

  // ── 60 · Teklif detayı
  E(60, "egitim-60-teklif-detayi", "Teklifiniz hazır: detayı okuyun", -1, [
    OZAN.sorun("Teklif geldi ama *neye bakacağımı* bilmiyorum."),
    // TKF-2026-0002 (test kaydı) satırı ekranlar.js `ortu` ile her sahnede kapalı.
    // m-teklifler kullanılmadı: ekranlar.js `ortu` ("[]TKF-2026-0002") orada tüm tabloyu kapatıyor; ayrıca Durum sütunu yana taşıyor.
    // Dikeyde satır vurgusu dar kadraja sığmıyor (kaydırmada durum rozeti çok kısa görünüyor): yalnız durum rozeti vurgulanır, sonra aynı satırdaki numaraya tıklanır
    ek("teklifler", 1, "*Teklif Hazır* yazan teklifi açın.", { bolge: B(290, 180, 1360, 602),
      vurgu: [{ hedef: ["TKF-2026-0003", "Teklif Hazır#2"], not: "Fiyatı hazırlanan teklifler bu durumla görünür." }],
      tikla: { hedef: "TKF-2026-0003", sonuc: "Teklif detayı açılır" },
      dikey: { tip: "ekran", ekran: "teklifler", bolge: B(560, 190, 640, 640),
        vurgu: [{ hedef: "Teklif Hazır#2", not: "Fiyatı hazırlanan teklifler bu durumla görünür." }],
        tikla: { hedef: "TKF-2026-0003", sonuc: "Teklif detayı açılır" } } }),
    // m-teklif-hazir tablosu yana taşıyor (Toplam sütunu kesik): dikeyde tek satır vurgulanır, kamera kesik sütunu dışarıda bırakır
    ek("teklif-hazir", 2, "Admin notunu ve *birim fiyatları* okuyun.", { bolge: B(560, 400, 1090, 482),
      vurgu: [{ hedef: B(597, 415, 380, 40), not: "Fiyatla ilgili açıklama bu notta yazar." },   // not satırı tam genişlik: yalnız yazılı kısım
        { hedef: ["SELPAK PROF. BUTİK KUTU MENDİL (18X21)", "28,27 ₺"], not: "Her kalemin birim fiyatı kendi satırında yazar." }],
      dikey: tel("m-teklif-hazir", {
        vurgu: [{ hedef: ["Admin Notu", "Sözleşmeli müşteri — liste fiyatından %7 iskonto uygulandı."], not: "Fiyatla ilgili açıklama bu notta yazar." },
          { hedef: ["7906666", "28,27 ₺"], not: "Her kalemin birim fiyatı kendi satırında yazar." }] }) }),
    // Dar kadraj: tıklama kamerası düğmeye yaklaşır, site başlığı ve boş kenar daha az görünür
    ek("teklif-hazir", 3, "Son tarihten önce *Teklifi Kabul Et* düğmesine basın.", { bolge: B(560, 180, 800, 355),
      vurgu: [{ hedef: ["Teklif Hazır", "Son: 14 Ekim 2026"], not: "Teklif bu tarihe kadar geçerlidir." }],
      tikla: { hedef: "Teklifi Kabul Et", sonuc: "Teklif siparişe çevrilir" },
      dikey: tel("m-teklif-hazir", { vurgu: [{ hedef: ["Teklif Hazır", "Son: 14 Ekim 2026"], not: "Teklif bu tarihe kadar geçerlidir." }],
        tikla: { hedef: "Teklifi Kabul Et", sonuc: "Teklif siparişe çevrilir" } }) }),
    OZAN.sonuc("Artık kabul etmeden önce *notu ve son tarihi* okuyorum."),
    ozet(["Teklif Hazır yazan teklifi açın.", "Admin notunu ve birim fiyatları okuyun.", "Son tarihten önce Teklifi Kabul Et düğmesine basın."],
      "Fiyat teklifi mi, toplu alım mı?"),
  ]),

  // ── 61 · Fiyat teklifi mi, toplu alım mı? (soru videosu)
  // Metinler formların kendi açıklamalarından: "Fiyat teklifi almak istediğiniz ürünleri ve miktarları girin." / "500+ adet veya yıllık sözleşme talepleri için satış ekibimizden hızlı teklif alın."
  E(61, "egitim-61-teklif-turleri", "Fiyat teklifi mi, toplu alım mı?", 3, [
    soru("Özel fiyat için *hangi formu* doldurmalısınız?", "Seçim adede ve ihtiyaca bağlıdır.",
      [["tag", "Fiyat teklifi"], ["building", "500+ adet"], ["calendar", "Yıllık sözleşme"]]),
    // Gönderilen talep (TKF-2026-0004) listede "Fiyat bekleniyor / Gönderildi" görünür; TKF-2026-0002 satırı ekranlar.js `ortu` ile kapalı
    // m-teklifler kullanılmadı (ortu tüm tabloyu kapatıyor): dikeyde masaüstü çekimin sağ kısmı (düğme + Toplam/Durum sütunları)
    ek("teklifler", 1, "*Fiyat Tekliflerim* sayfasında Yeni Teklif Talebi düğmesine basın.", { bolge: B(290, 180, 1360, 602), bolgeD: B(1190, 180, 460, 460),
      vurgu: [{ hedef: ["Fiyat bekleniyor", "Gönderildi"], not: "Gönderdiğiniz talep fiyatlanana kadar böyle görünür." }],
      tikla: { hedef: "Yeni Teklif Talebi", sonuc: "Yeni Fiyat Teklifi formu açılır" } }),
    ek("teklif-yeni", 2, "*Yeni Fiyat Teklifi* formuna ürünü yazın.", { bolge: B(570, 300, 680, 380), bolgeD: B(575, 300, 670, 670),
      yaz: { hedef: "Ürün ara (ad veya kod)", metin: "kağıt havlu" },
      tikla: { hedef: "Teklif Oluştur", sonuc: "Fiyatı admin ekibi hazırlar" } }),
    // Dar kadraj: tıklama kamerası formun altındaki İngilizce "Choose File No file chosen" yazısını dışarıda bırakır
    ek("teklif-iste", 3, "500+ adet için *Teklif İste* formunu doldurun.", { bolge: B(600, 190, 820, 363),
      vurgu: [{ hedef: "~500+ adet veya yıllık sözleşme", not: "Talep Detayı alanına ürünü, adedi ve periyodu yazın." }],
      tikla: { hedef: "Teklif Talep Et", sonuc: "Talebiniz satış ekibine iletilir" },
      // Dikeyde uzun açıklama satırı küçük kalıyordu: yalnız "500+ adet veya yıllık sözleşme" kısmı vurgulanır
      dikey: { tip: "ekran", ekran: "teklif-iste", bolge: B(610, 180, 640, 640),
        vurgu: [{ hedef: B(626, 247, 206, 22), not: "Talep Detayı alanına ürünü, adedi ve periyodu yazın." }],
        tikla: { hedef: "Teklif Talep Et", sonuc: "Talebiniz satış ekibine iletilir" } } }),
    ozet(["Fiyat Tekliflerim'de Yeni Teklif Talebi düğmesine basın.", "Formda ürünü yazıp Teklif Oluştur düğmesine basın.", "500+ adet için Teklif İste formunu doldurun."],
      "Hesabı 4 adımda kurun"),
  ]),

  // ── 62 · Hesap kurulumu (hesap sahibi)
  E(62, "egitim-62-hesap-kurulumu", "Hesabı 4 adımda kurun", 0, [
    NIHAN.sorun("Ekip büyüdü, siparişlerde *onay sırası* karıştı."),
    // Yatayda formun kendi bütçe alanı vurgulanır (mevcut bir departmanın harcama satırı yerine)
    ek("departman-yeni", 1, "*Departman & Bütçe* sayfasında yeni departman ekleyin.", { bolge: B(560, 180, 1090, 482),
      vurgu: [{ hedef: ["Aylık Bütçe (₺) isteğe bağlı", "0.00"], not: "Bütçe girerseniz harcama bu tutarla izlenir." }],
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
      vurgu: [{ hedef: B(583, 581, 310, 61), not: "Siparişi ilk onaylayacak kişiyi burada seçersiniz." }],   // "Seviye 1" etiketi + seçim kutusunun sol kısmı (kutu boş: "yok")
      yaz: { hedef: "örn: 10000", metin: "25000" },
      tikla: { hedef: "Kuralı Oluştur", sonuc: "Onay kuralı oluşturuldu" } }),
    // Kısa başlık: dikeyde üç satıra taşan metin telefonun arkasında kalıyordu (konum çipte yazar)
    ek("sozlesme", 4, "*Otomatik onay eşiğini* kontrol edin.", { bolge: B(285, 330, 1360, 602),
      vurgu: [{ hedef: B(583, 605, 180, 44), not: "₺5.000 altındaki siparişler doğrudan onaylanır." }],
      dikey: tel("m-sozlesme", { vurgu: [{ hedef: ["Otomatik Onay Eşiği", "₺5.000,00"], not: "₺5.000 altındaki siparişler doğrudan onaylanır." }] }) }),
    NIHAN.sonuc("Artık büyük siparişleri *onay kuralıyla* yönetiyorum."),
    ozet(["Departman ekleyip kullanıcıları davet edin.", "Tutar sınırıyla onay kuralı oluşturun.", "Otomatik onay eşiğini kontrol edin."], "Roller ve yetkiler"),
  ]),

  // ── 63 · Roller ve yetkiler
  E(63, "egitim-63-roller-yetkiler", "Roller ve yetkiler", -3, [
    OKAN.sorun("Ekipte kimin ne yapacağını *ayarlayamıyorum*."),
    ek("kullanicilar", 1, "*Kullanıcılar & Yetkiler* sayfasında rolleri görün.", { bolge: B(560, 190, 1090, 482),
      vurgu: [{ hedef: ["Rol", "Görüntüleyici"], not: "Kullanıcıya Genel Müdür, Satınalmacı ya da Görüntüleyici rolü verilir." }],
      tikla: { hedef: "Düzenle#3", sonuc: "Kullanıcının yetki sayfası açılır" },
      dikey: tel("m-kullanicilar", { vurgu: [{ hedef: ["Genel Müdür", "· 45 yetki"], not: "Kartta rol, departman, onay limiti ve yetki sayısı yazar." }],
        tikla: { hedef: "Düzenle#3", sonuc: "Kullanıcının yetki sayfası açılır" } }) }),
    ek("kullanici-yetki", 2, "Kullanıcının *rolünü* ve onay limitini belirleyin.", { bolge: B(560, 290, 1090, 482), bolgeD: B(940, 300, 690, 690),
      vurgu: [{ hedef: "[]Genel Müdür Satınalmacı Görüntüleyici", not: "Rol seçimi varsayılan yetkileri belirler." },
        { hedef: B(947, 385, 340, 54), not: "Boş bırakırsanız onay limiti sınırsız olur." }] }),   // etiket + kutunun sol kısmı
    ek("kullanici-yetki", 3, "*Hazır şablon* ile yetkileri tek seferde seçin.", { bolge: B(830, 440, 1090, 482), bolgeD: B(940, 440, 690, 640),
      // Şablon listesi: Görüntüleyici (salt-okur), Standart Satınalmacı, Onaycı, Departman Yöneticisi, Tam Yetki ("uygulayıp ince ayar yapabilirsiniz")
      tikla: { hedef: "~Standart Satınalmacı Onaycı", sonuc: "Şablondaki yetkiler işaretlenir" } }),
    ek("kullanici-yetki-alt", 4, "*Detaylı Yetkiler* listesinde ekstra yetki açın.", { bolge: B(830, 590, 1090, 482), bolgeD: B(945, 420, 660, 660),
      vurgu: [{ hedef: "Onay ver / reddet (iç onay) Varsayılan", not: "Varsayılan etiketi yetkinin rolden geldiğini gösterir." }],
      // Dokunuş "Onay kurallarını yönet" yazısının üstüne düşer; dar kutu dikeyde kamerayı boş sol sütundan uzak tutar
      tikla: { hedef: B(1060, 808, 120, 29), sonuc: "Ekstra yetki açılır" } }),
    OKAN.sonuc("Artık herkese *rolüne göre* yetki veriyorum."),
    ozet(["Düzenle sayfasında rolü ve onay limitini belirleyin.", "Hazır şablonla yetkileri tek seferde seçin.", "Detaylı Yetkiler listesinde ekstra yetki açın."],
      "Bir siparişin onay yolculuğu"),
  ]),
];
