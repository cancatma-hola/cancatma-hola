// 2026-10-09 serisi · Eğitim 50–56: ürün kartı ve sipariş sonrası.
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakamlar 9 Ekim çekimlerinin öğe haritalarından okundu.
// Kayıt değiştiren düğmeler (Haber Ver, Gönder, Yeniden Sipariş Ver) panelde basılmaz; motor yalnızca canlandırır.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, adim, metin, ayar) => ({ tip: "ekran", ekran, adim, metin, ...ayar });
const tel = (ekran, ayar) => ({ tip: "telefon", ekran, ...ayar });
const kapak = (no, baslik, alt, ikon) => ({ tip: "kapak", ust: `Eğitim ${no}`, baslik, alt, ikon, sure: "auto" });
const E = (no, id, baslik, ton, sahneler) => ({ id, tur: "egitim", baslik, etiket: `Eğitim ${no} · ${baslik}`, tohum: no, ton, surum: 2, sahneler });

// Ortak kadrajlar
const URUN_UST = B(815, 195, 830, 367);          // ürün adı, liste fiyatı, puan
const URUN_ALT = B(815, 560, 830, 367);          // kademe tablosu, sepet düğmesi
const SIPARIS_UST = B(555, 190, 1095, 485);      // sipariş başlığı ve düğmeler, durum kartı
// Sipariş geçmişindeki ham durum kodları (masaüstü ve mobil): her zaman kapatılır
const GECMIS_TESLIM = B(1317, 265, 320, 317);
const GECMIS_SEVKIYAT_M = B(8, 1757, 414, 208);
const GECMIS_RED = B(1317, 943, 320, 144);

export default [
  // ── 50 · Ürün kartı
  E(50, "egitim-50-urun-karti", "Ürün kartını doğru okuyun", 1, [
    kapak(50, "Ürün kartını doğru okuyun", "Fiyatı, birimi ve indirimi tek bakışta anlayın.", "tag"),
    { tip: "soru", metin: "Bu fiyata *KDV* dahil mi?", alt: "Ürün kartı bu sorunun cevabını verir.", sure: 4,
      cipler: [["wallet", "Fiyat"], ["box", "Koli"], ["star", "Puan"], ["percent", "İndirim"]] },
    ek("urun", 1, "Liste fiyatı *KDV hariç* yazılır.", { bolge: URUN_UST,
      vurgu: [{ hedef: ["Liste Fiyatı (KDV Hariç)", "KDV dahil ₺504,00"], not: "KDV dahil fiyat hemen altında yazar." }],
      dikey: tel("m-urun", { vurgu: [{ hedef: ["Liste Fiyatı (KDV Hariç)", "KDV dahil ₺504,00"], not: "KDV dahil fiyat hemen altında yazar." }] }) }),
    ek("urun", 2, "Fiyat *bir koli* içindir.", { bolge: URUN_UST,
      vurgu: [{ hedef: "~/ koli", not: "Bir kolide 6 rulo bulunur." },
        { hedef: "Bu üründen 1 adet alırsan +4 puan kazanırsın", not: "Her koli 4 sadakat puanı kazandırır." }],
      dikey: tel("m-urun", { vurgu: [{ hedef: "~/ koli", not: "Bir kolide 6 rulo bulunur.", zoom: 1.5 },
        { hedef: "Bu üründen 1 adet alırsan +4 puan kazanırsın", not: "Her koli 4 sadakat puanı kazandırır." }] }) }),
    ek("urun", 3, "Çok alırsanız *birim fiyat* düşer.", { bolge: URUN_ALT,
      vurgu: [{ hedef: ["[]5+ %5", "[]40+ %10"], not: "İndirim 5 koliden %5, 30 koliden %8, 40 koliden %10 olur." }],
      dikey: tel("m-urun", { vurgu: [{ hedef: ["[]5+ %5", "[]40+ %10"], not: "İndirim 5 koliden %5, 30 koliden %8, 40 koliden %10 olur." }] }) }),
    { tip: "test", soru: "₺420,00 liste fiyatı neyi gösterir?", secenekler: ["Bir koli, KDV hariç", "Bir koli, KDV dahil", "Bir rulo, KDV dahil"], dogru: 0,
      aciklama: "Koli fiyatı *KDV hariçtir.*" },
    { tip: "kontrol", baslik: "*Özet*", maddeler: ["KDV dahil fiyatı liste fiyatının altında okuyun.", "Fiyatın yanındaki satış birimine bakın.", "Kademe tablosunda indirim oranını kontrol edin."] },
    { tip: "son", metin: "Şimdi bir *ürün sayfası* açın.", sonraki: "Stokta olmayan ürün için haber alın" },
  ]),

  // ── 51 · Stok bildirimi
  E(51, "egitim-51-stok-bildirimi", "Stokta olmayan ürün için haber alın", -1, [
    kapak(51, "Stokta olmayan ürün için haber alın", "Ürün stoğa girince haberiniz olsun.", "bell"),
    { tip: "karakter", avatar: { sac: "kisa", ten: "acik", sacRenk: "#3B2A1A", giysi: "#2F6F4E", yaka: "gomlek", gozluk: true, ruh: "dertli" },
      ad: "Murat", rol: "Satın alma sorumlusu", ikon: "cart", metin: "Tuvalet kağıdı yine *stokta yok.*" },
    ek("urun-tukendi", 1, "Ürün adının üstünde *Stokta yok* yazar.", { bolge: B(810, 190, 840, 372),
      vurgu: [{ hedef: "Stokta yok", not: "Bu ürün şu an sepete eklenemez." }],
      // dikey: yalnız rozete yakınlaşınca kamera sayfanın en üstüne çıkıyor ve üst çubuktaki çalışma saati görünüyordu;
      // rozet + marka adı birlikte vurgulanınca kamera biraz aşağıda kalır
      dikey: ek("urun-tukendi", 1, "Ürün adının üstünde *Stokta yok* yazar.", { bolge: B(815, 190, 500, 500),
        vurgu: [{ hedef: ["Stokta yok", "Wanda Soft"], not: "Bu ürün şu an sepete eklenemez." }] }) }),
    ek("urun-tukendi", 2, "*Stok Gelince Haber Ver* düğmesine basın.", { bolge: B(810, 600, 840, 372), bolgeD: B(815, 600, 500, 500),
      tikla: { hedef: B(824, 856, 200, 38), sonuc: "Ürün gelince size haber verilir" } }),   // düğmenin yazılı kısmı: dikey kadrajda imleç görünsün
    ek("urun-tukendi", 3, "Ürünü *listenize* de ekleyin.", { bolge: B(810, 600, 840, 372), bolgeD: B(815, 600, 500, 500),
      tikla: { hedef: "Listeye Ekle", sonuc: "Ürün listenize eklenir" } }),
    { tip: "kontrol", baslik: "*Özet*", maddeler: ["Ürün adının üstünde Stokta yok etiketine bakın.", "Stok Gelince Haber Ver düğmesine basın.", "Ürünü Listeye Ekle ile kaydedin."] },
    { tip: "son", metin: "Şimdi aradığınız *ürünün sayfasını* açın.", sonraki: "Doğru ürünü seçin: teknik özellikler" },
  ]),

  // ── 52 · Teknik özellikler ve numune
  E(52, "egitim-52-teknik-ozellikler", "Doğru ürünü seçin: teknik özellikler", 2, [
    kapak(52, "Doğru ürünü seçin: teknik özellikler", "Satın almadan önce ürünün size uyduğunu kontrol edin.", "search"),
    { tip: "karakter", avatar: { sac: "uzun", ten: "acik", sacRenk: "#5A3B22", giysi: "#0B5677", ruh: "dertli" },
      ad: "Selin", rol: "İdari işler sorumlusu", ikon: "building", metin: "Aldığım havlu *dispensere* uymadı." },
    ek("urun-teknik", 1, "*Teknik Özellikler* bölümünü okuyun.", { bolge: B(900, 110, 745, 330), bolgeD: B(1198, 110, 440, 440),
      vurgu: [{ hedef: ["Dispenser Uyumu", "Fotoselli Havlu Dispenseri"], not: "Havlunun uyduğu dispenser burada yazar." },
        { hedef: ["Gramaj", "2 Katlı"], not: "Gramajı ve kat sayısını karşılaştırın." }] }),
    // Numune formuna giden yol: Hesabım › Numune Taleplerim › + Yeni Numune Talebi
    ek("numune", 2, "*Yeni Numune Talebi* düğmesine basın.", { bolge: B(280, 180, 1360, 602),
      tikla: { hedef: "+ Yeni Numune Talebi", sonuc: "Numune formu açılır" },
      dikey: tel("m-numune", { tikla: { hedef: "+ Yeni Numune Talebi", sonuc: "Numune formu açılır" } }) }),
    ek("numune-yeni", 3, "Ürün kodunu yazıp *ücretsiz numune* isteyin.", { bolge: B(630, 600, 740, 360), bolgeD: B(640, 600, 640, 400),
      yaz: { hedef: "Virgülle ayırarak yazın. Örn: MTS-1001, MTS-2030", metin: "555204, 555206" },
      tikla: { hedef: "Numune Talep Et", sonuc: "Numune talebiniz iletildi" } }),
    { tip: "kontrol", baslik: "*Özet*", maddeler: ["Dispenser uyumunu Teknik Özellikler bölümünde kontrol edin.", "Gramajı ve kat sayısını karşılaştırın.", "Emin değilseniz ücretsiz numune isteyin."] },
    { tip: "son", metin: "Şimdi *Numune Taleplerim* sayfasını açın.", sonraki: "Kargonuz nerede?" },
  ]),

  // ── 53 · Kargo takibi
  E(53, "egitim-53-kargo-takibi", "Kargonuz nerede?", 0, [
    kapak(53, "Kargonuz nerede?", "Kargo takip numaranızı siparişte bulun.", "truck"),
    { tip: "soru", metin: "Kargom *nerede?*", alt: "Cevap sipariş detayında yazar.", sure: 4,
      cipler: [["truck", "Sevkiyatta"], ["search", "Takip no"]] },
    ek("siparisler", 1, "*Sevkiyatta* filtresini seçin.", { bolge: B(280, 180, 1360, 600),
      tikla: { hedef: "Sevkiyatta", sonuc: "Kargodaki siparişler listelenir" },
      dikey: tel("m-siparisler", { tikla: { hedef: "Sevkiyatta", sonuc: "Kargodaki siparişler listelenir" } }) }),
    ek("siparis-sevkiyat", 2, "Siparişi açıp *sıradaki adımı* okuyun.", { bolge: SIPARIS_UST,
      vurgu: [{ hedef: "Sipariş kargoda. Takip için kargo bölümüne bakın.", not: "Siparişiniz kargoya verildi." }],
      dikey: tel("m-siparis-sevkiyat", { ortu: [GECMIS_SEVKIYAT_M],
        vurgu: [{ hedef: "Sipariş kargoda. Takip için kargo bölümüne bakın.", not: "Siparişiniz kargoya verildi." }] }) }),
    ek("siparis-teslim-kargo", 3, "*Takip et* ile kargonuzu izleyin.", { bolge: B(1107, 20, 740, 327), ortu: [GECMIS_TESLIM],
      vurgu: [{ hedef: ["Aras Kargo", "1000855481"], not: "Kargo firması ve takip numarası burada yazar." }],
      tikla: { hedef: "Takip et", sonuc: "Kargo firmasının takip sayfası açılır" },
      dikey: tel("m-siparis-sevkiyat", { ortu: [GECMIS_SEVKIYAT_M],
        vurgu: [{ hedef: "[]Aras Kargo Yolda 1000933252", not: "Kargo firması ve takip numarası burada yazar." }],
        // "Takip et" (338,1668,60x16) ortada kalan 388 px genişlikte ham kutu: telefon kamerası yakınlaşmaz,
        // kargo kartı soldan kesilmez; imleç yine "Takip et" üstüne gelir
        tikla: { hedef: B(174, 1668, 388, 16), sonuc: "Kargo firmasının takip sayfası açılır" } }) }),
    { tip: "kontrol", baslik: "*Özet*", maddeler: ["Siparişlerim sayfasında Sevkiyatta filtresini seçin.", "Siparişi açıp sıradaki adımı okuyun.", "Kargo bölümünde Takip et bağlantısına basın."] },
    { tip: "son", metin: "Şimdi *Siparişlerim* sayfasını açın.", sonraki: "Ürünleri değerlendirin, puan kazanın" },
  ]),

  // ── 54 · Ürün değerlendirme
  E(54, "egitim-54-urun-degerlendirme", "Ürünleri değerlendirin, puan kazanın", 3, [
    kapak(54, "Ürünleri değerlendirin, puan kazanın", "Teslim edilen ürünlere yorum yazın.", "star"),
    { tip: "gundem", baslik: "Bu videoda", ikon: "star", maddeler: ["Puan kuralını görün", "Yıldız verip yorum yazın", "Yorumu gönderin"] },
    // yatay kadraj en az 739 px: daha dar kadrajda ölçek 2,3'ü aşıyor ve vurguda kamera uzaklaşıyordu
    ek("sadakat-puan", 1, "Her ürün yorumu *5 puan* kazandırır.", { bolge: B(700, 600, 740, 327), bolgeD: B(800, 640, 440, 250),
      vurgu: [{ hedef: ["Ürün yorumu yaz, 5 puan kazan", "+5 puan"], not: "Kural teslim edilen her ürün için geçerlidir." }] }),
    ek("siparis-degerlendir", 2, "Yıldız verip *kısa bir yorum* yazın.", { bolge: B(575, 140, 760, 336), bolgeD: B(575, 190, 540, 300),
      vurgu: [{ hedef: B(592, 240, 175, 26), not: "Ürüne 1 ile 5 arasında yıldız verin." }],
      yaz: { hedef: "Deneyiminizi paylaşın (opsiyonel)", metin: "Dayanıklı, iyi temizliyor." } }),
    ek("siparis-degerlendir", 3, "*Yorumu Gönder* düğmesine basın.", { bolge: B(575, 140, 760, 336), bolgeD: B(575, 190, 540, 300),
      tikla: { hedef: "Yorumu Gönder", sonuc: "Yorumunuz gönderildi" } }),
    { tip: "kontrol", baslik: "*Özet*", maddeler: ["Ürüne yıldız verin.", "Kısa bir yorum yazın.", "Yorumu Gönder düğmesine basın."] },
    { tip: "son", metin: "Şimdi *Siparişlerim* sayfasını açın.", sonraki: "Hasarlı ürün için iade" },
  ]),

  // ── 55 · İade talebi
  E(55, "egitim-55-iade-talebi", "Hasarlı ürün için iade", -2, [
    kapak(55, "Hasarlı ürün için iade", "İade talebini panelden birkaç adımda açın.", "undo"),
    { tip: "karakter", avatar: { sac: "kisa", ten: "bugday", sacRenk: "#1F1A17", giysi: "#1D4F7A", yaka: "yelek", sakal: true, ruh: "dertli" },
      ad: "Kemal", rol: "Depo sorumlusu", ikon: "box", metin: "İki koli *hasarlı* geldi." },
    ek("siparis-teslim", 1, "Siparişte *İade Talebi Aç* düğmesine basın.", { bolge: B(280, 180, 1360, 602),
      tikla: { hedef: "İade Talebi Aç", sonuc: "İade formu açılır" },
      dikey: tel("m-siparis-teslim", { tikla: { hedef: "İade Talebi Aç", sonuc: "İade formu açılır" } }) }),
    ek("iade-yeni", 2, "Hasarlı ürünün *iade adedini* yazın.", { bolge: SIPARIS_UST,
      vurgu: [{ hedef: "Selpak Prof. Kutu Mendil 50Li (18X21)", not: "Siparişteki her ürün ayrı satırda yazar." }],
      yaz: { hedef: B(1547, 430, 72, 24), metin: "2" },
      dikey: tel("m-iade-yeni", { vurgu: [{ hedef: "Selpak Prof. Kutu Mendil 50Li (18X21)", not: "Siparişteki her ürün ayrı satırda yazar." }],
        yaz: { hedef: B(330, 464, 80, 28), metin: "2" } }) }),
    ek("iade-yeni", 3, "Sebebi yazıp talebi *gönderin.*", { bolge: SIPARIS_UST,
      yaz: { hedef: "~Örn: Yanlış ürün", metin: "2 koli hasarlı geldi." },
      tikla: { hedef: "İade Talebini Gönder", sonuc: "İade talebiniz alındı" },
      dikey: tel("m-iade-yeni", { yaz: { hedef: "~Örn: Yanlış ürün", metin: "2 koli hasarlı geldi." },
        tikla: { hedef: "İade Talebini Gönder", sonuc: "İade talebiniz alındı" } }) }),
    ek("iadeler", 4, "Talebi *İade Taleplerim* sayfasında izleyin.", { bolge: SIPARIS_UST,
      vurgu: [{ hedef: "Talep Alındı#2", not: "MTS ekibi talebinizi inceler." }, { hedef: ["Talep Alındı", "İade Tamamlandı"], not: "Talepleri duruma göre filtreleyin." }],
      dikey: tel("m-iadeler", { vurgu: [{ hedef: "Talep Alındı#2", not: "MTS ekibi talebinizi inceler." },
        { hedef: ["Talep Alındı", "İade Tamamlandı"], not: "Talepleri duruma göre filtreleyin." }] }) }),
    { tip: "kontrol", baslik: "*Özet*", maddeler: ["Siparişte İade Talebi Aç düğmesine basın.", "İade adedini ve sebebi yazın.", "Durumu İade Taleplerim sayfasında izleyin."] },
    { tip: "son", metin: "Şimdi *İade Taleplerim* sayfasını açın.", sonraki: "Siparişiniz reddedildiyse" },
  ]),

  // ── 56 · Reddedilen sipariş
  E(56, "egitim-56-reddedilen-siparis", "Siparişiniz reddedildiyse", 1, [
    kapak(56, "Siparişiniz reddedildiyse", "Ret nedenini okuyun, siparişi yeniden verin.", "repeat"),
    { tip: "soru", metin: "Siparişiniz neden *reddedildi?*", alt: "Gerekçe sipariş detayında yazar.", sure: 4,
      cipler: [["x", "Reddedildi"], ["approve", "Onay zinciri"]] },
    ek("siparis-reddedildi", 1, "Sipariş durumunda *Reddedildi* yazar.", { bolge: SIPARIS_UST, bolgeD: B(565, 290, 500, 500), ortu: [GECMIS_RED],
      vurgu: [{ hedef: "Reddedildi", not: "Sipariş onay zincirinde durdu." }] }),
    ek("siparis-reddedildi", 2, "*Onay Zinciri* bölümünde gerekçeyi okuyun.", { bolge: B(555, 600, 750, 336), bolgeD: B(565, 680, 440, 400), ortu: [GECMIS_RED],
      vurgu: [{ hedef: B(580, 826, 162, 38), not: "Siparişi kimin reddettiğini görürsünüz." },
        { hedef: B(612, 864, 290, 22), not: "Ret gerekçesi onay notunda yazar." }] }),
    ek("siparis-reddedildi", 3, "Gerekirse *Yeniden Sipariş Ver* düğmesine basın.", { bolge: SIPARIS_UST, bolgeD: B(1000, 180, 640, 500), ortu: [GECMIS_RED],
      // düğme 1217,205,154x31; tıklama kutusu düğmenin sağ kısmı: kamera biraz sağa kayar ve
      // üst çubuktaki çalışma saatinin ucu ("…:00") kadraja girmez
      tikla: { hedef: B(1250, 207, 110, 27), sonuc: "Aynı ürünlerle yeni sipariş hazırlanır" } }),
    { tip: "kontrol", baslik: "*Özet*", maddeler: ["Sipariş durumunda Reddedildi etiketine bakın.", "Onay Zinciri bölümünde gerekçeyi okuyun.", "Yeniden Sipariş Ver düğmesine basın."] },
    { tip: "son", metin: "Şimdi *Siparişlerim* sayfasını açın." },
  ]),
];
