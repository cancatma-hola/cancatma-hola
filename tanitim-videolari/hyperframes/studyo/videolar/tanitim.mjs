// Tanıtım videoları. Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı vurgulanır.
// Rakamlar paneldeki gerçek verilerdir.
const T = (no, ad, baslik, sahneler, ton = 0) => ({ id: `tanitim-${String(no).padStart(2, "0")}-${ad}`, tur: "tanitim", baslik, ton, tohum: 20 + no, sahneler });
const B = (x, y, w, h) => ({ x, y, w, h });

export default [
  T(5, "siparis-takibi", "Siparişiniz nerede?", [
    { tip: "soru", metin: "Siparişiniz *şu an nerede?*", cipler: [["truck", "MTS-2026-0018"], ["box", "MTS-2026-0020"], ["doc", "MTS-2026-0027"], ["clock", "MTS-2026-0026"]] },
    { tip: "akis", baslik: "Her sipariş *adım adım* ilerler.", adimlar: [["edit", "Taslak"], ["approve", "Onay"], ["shield", "MTS inceleme"], ["box", "Hazırlanıyor"], ["truck", "Sevkiyatta"], ["check", "Teslim edildi"]] },
    { tip: "ekran", ekran: "siparis-sevkiyat", metin: "Siparişin durumunu *anlık* görün.", bolge: B(555, 225, 1095, 380),
      vurgu: [{ hedef: "[]Taslak → Onay Bekleniyor", not: "Sipariş şu an sevkiyatta", kaydir: true }, { hedef: "[]Sıradaki adım", not: "Sıradaki adım her zaman yazılı" }] },
    { tip: "ekran", ekran: "bildirimler", metin: "Her değişiklikte *bildirim* alın.", bolge: B(555, 205, 1095, 560),
      vurgu: [{ hedef: ["MTS-2026-0018, Sevkiyatta", "Durum güncellendi: Hazırlanıyor → Sevkiyatta"], not: "Durum değişince bildirim gelir" }] },
    { tip: "kapanis", slogan: "Siparişiniz *her an* gözünüzün önünde." },
  ], 1),

  T(6, "hizli-siparis", "Ürün koduyla hızlı sipariş", [
    { tip: "soru", metin: "Onlarca ürünü *tek tek* mi arıyorsunuz?", cipler: [["search", "555204"], ["search", "ST00560"], ["search", "7906628"], ["search", "MTSG610"]] },
    { tip: "ekran", ekran: "hizli", metin: "Ürün kodlarını yazın, *tek seferde* ekleyin.", bolge: B(555, 300, 1095, 250),
      yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" }, tikla: { hedef: "Sepete Ekle", sonuc: "Tüm satırlar sepete eklendi" } },
    { tip: "akis", baslik: "*Üç adımda* sipariş hazır.", adimlar: [["edit", "Kodu yazın", "Ürün kodu ve miktar"], ["check", "Doğrulayın", "Stok ve fiyat kontrolü"], ["cart", "Sepete ekleyin", "Tüm satırlar tek tıkla"]] },
    { tip: "sayac", baslik: "Tek seferde *en fazla*", deger: 100, sonek: "satır", alt: "Excel listenizi kopyalayıp yapıştırın.", cipler: [["doc", "CSV Yapıştır"], ["check", "Doğrula"]] },
    { tip: "kapanis", slogan: "Kodu yazın, *sipariş hazır.*" },
  ], 2),

  T(7, "toplu-alim-teklifi", "Toplu alımda özel fiyat", [
    { tip: "soru", metin: "Büyük alımda *özel fiyat* mı istiyorsunuz?", cipler: [["package", "Toplu alım"], ["calendar", "Uzun dönem"], ["truck", "Çok depo"]] },
    { tip: "ekran", ekran: "teklif-yeni", metin: "Ürün ve miktarı yazın, *teklif* isteyin.", bolge: B(555, 320, 1095, 400),
      yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" }, tikla: { hedef: "Teklif Oluştur", sonuc: "Teklif talebiniz iletildi" } },
    { tip: "ekran", ekran: "teklifler", metin: "Teklif hazır olunca *panelde* görün.", bolge: B(555, 205, 1095, 320),
      vurgu: [{ hedef: "[]TKF-2026-0003", not: "Teklif hazır: 19.055,50 ₺" }], ortu: ["[]TKF-2026-0002"] },
    { tip: "kapanis", slogan: "Toplu alımda *size özel* fiyat." },
  ], -1),

  T(8, "analitik", "Harcamanızı rakamlarla görün", [
    { tip: "sayac", baslik: "Son 12 ayda *toplam harcama*", deger: 51320.08, para: true, ondalik: 2, cipler: [["check", "10 sipariş tamamlandı"], ["percent", "₺933 indirim kazanıldı"]] },
    { tip: "ekran", ekran: "analitik", metin: "Aylık harcamanızı *grafikte* izleyin.", bolge: B(555, 320, 1095, 320),
      vurgu: [{ hedef: "[]Aylık Harcama Trendi Son 6 ay", not: "Son 6 ayın harcama grafiği" }] },
    { tip: "ekran", ekran: "analitik", metin: "Hangi kategoriye *ne harcadığınızı* görün.", bolge: B(555, 620, 1095, 420),
      vurgu: [{ hedef: "[]Kategori Dağılımı", not: "Kategorilere göre harcama dağılımı" }] },
    { tip: "kapanis", slogan: "Veriyle *doğru* satın alma." },
  ], 4),

  T(9, "ai-asistan", "AI ürün asistanı", [
    { tip: "soru", metin: "Hangi ürünü *seçeceğinizi* bilmiyor musunuz?", cipler: [["building", "Otel"], ["shield", "Hastane"], ["cart", "Restoran"], ["users", "Ofis"]] },
    { tip: "ekran", ekran: "ai-oneri", metin: "İhtiyacınızı yazın, *asistan* önersin.", bolge: B(555, 280, 1095, 280),
      yaz: { hedef: "~Örn: Otelim için aylık ne kadar kağıt havlu lazım?", metin: "50 kişilik ofis için hangi ürünler gerekir?" },
      tikla: { hedef: "Gönder", sonuc: "Asistan ürün önerilerini hazırlar" } },
    { tip: "akis", baslik: "Sorudan sepete *üç adım.*", adimlar: [["chat", "Sorun", "İhtiyacınızı yazın"], ["sparkle", "Öneri alın", "Uygun ürün ve miktar"], ["cart", "Sepete ekleyin", "Tek tıkla sipariş"]] },
    { tip: "kapanis", slogan: "Doğru ürün, *ilk seferde.*" },
  ], 5),

  T(10, "projeler", "Projeler ve şantiyeler", [
    { tip: "soru", metin: "Hangi proje *ne kadar* harcadı?", cipler: [["map", "PRJ-2026-01"], ["map", "PRJ-2026-02"]] },
    { tip: "sayac", baslik: "Projelerin *toplam harcaması*", deger: 38720.95, para: true, ondalik: 2, cipler: [["map", "2 aktif proje"], ["list", "10 sipariş"]] },
    { tip: "ekran", ekran: "projeler", metin: "Her projenin *bütçe kullanımını* görün.", bolge: B(555, 320, 1095, 340),
      vurgu: [{ hedef: "[]PROJE HARCAMA ÖZETİ", not: "Proje bütçesi ve harcama" }] },
    { tip: "kapanis", slogan: "Her proje *kontrol altında.*" },
  ], -2),

  T(11, "ekip-ve-yetkiler", "Ekip ve yetkiler", [
    { tip: "soru", metin: "Ekibinizde *kim, neyi* sipariş edebilir?", cipler: [["user", "Genel Müdür"], ["user", "Satınalmacı"], ["eye", "Görüntüleyici"]] },
    { tip: "ekran", ekran: "kullanicilar", metin: "Her kişiye *rol* ve onay limiti verin.", bolge: B(555, 300, 1095, 340),
      vurgu: [{ hedef: ["Rol", "Departman", "Görüntüleyici", "Satın Alma#2"], not: "Rol ve departman" }, { hedef: ["Onay Limiti", "Yetki", "19 yetki"], not: "Kişiye özel onay limiti" }] },
    { tip: "ekran", ekran: "kullanici-davet", metin: "Yeni kullanıcıyı *dakikalar içinde* davet edin.", bolge: B(555, 320, 1095, 420),
      yaz: { hedef: "Ahmet Yılmaz", metin: "Selin Aydın" }, tikla: { hedef: "Kullanıcıyı Davet Et", sonuc: "Davet e-postası gönderildi" } },
    { tip: "kapanis", slogan: "Doğru kişi, *doğru yetki.*" },
  ], 3),

  T(12, "kademeli-iskonto", "Çok alın, az ödeyin", [
    { tip: "cubuk", baslik: "Adet arttıkça *birim fiyat* düşer.", para: true, ek: "koli başı", vurgu: 3,
      satirlar: [["1 koli", 420, 420], ["5+ koli", 399, 420], ["30+ koli", 386.4, 420], ["40+ koli", 378, 420]] },
    { tip: "ekran", ekran: "urun", metin: "*FIRSAT* tablosu indirimi gösterir.", bolge: B(810, 600, 840, 300),
      vurgu: [{ hedef: "[]FIRSAT Kademeli iskonto", not: "40 koliden itibaren %10 indirim" }] },
    { tip: "ekran", ekran: "kampanyalar", metin: "Kupon gerekmez, indirim *otomatik* uygulanır.", bolge: B(270, 340, 1380, 200),
      vurgu: [{ hedef: "[]Çok Al Az Öde Kademeli", not: "Uygun adette otomatik uygulanır" }] },
    { tip: "kapanis", slogan: "Çok alın, *az ödeyin.*" },
  ], 1),

  T(13, "numune-ve-iade", "Numune ve iade", [
    { tip: "soru", metin: "Ürünü almadan önce *denemek* ister misiniz?", cipler: [["sample", "Ücretsiz numune"], ["undo", "Kolay iade"]] },
    { tip: "ekran", ekran: "numune-yeni", metin: "Numune talebini *formla* gönderin.", bolge: B(620, 600, 690, 420),
      yaz: { hedef: "Virgülle ayırarak yazın. Örn: MTS-1001, MTS-2030", metin: "555204, ST00560" }, tikla: { hedef: "Numune Talep Et", sonuc: "Talebiniz alındı" } },
    { tip: "akis", baslik: "İade *adım adım* ilerler.", adimlar: [["undo", "Talep alındı"], ["approve", "Onaylandı"], ["box", "Depoya ulaştı"], ["check", "İade tamamlandı"]] },
    { tip: "kapanis", slogan: "Deneyin, *gönül rahatlığıyla* alın." },
  ], -3),

  T(14, "listeler-favoriler", "Sık aldıklarınız bir tık uzakta", [
    { tip: "soru", metin: "Her ay *aynı ürünleri* mi arıyorsunuz?", cipler: [["heart", "Favoriler"], ["list", "Listeler"], ["repeat", "Şablonlar"]] },
    { tip: "ekran", ekran: "favoriler", metin: "Sık aldıklarınızı *favorilere* ekleyin.", bolge: B(555, 340, 1095, 500),
      tikla: { hedef: "Ekle", sonuc: "Ürün sepete eklendi" } },
    { tip: "ekran", ekran: "listeler", metin: "Listeyi *tek tıkla* sepete ekleyin.", bolge: B(555, 340, 1095, 220),
      tikla: { hedef: "Sepete Ekle#2", sonuc: "5 ürün sepete eklendi" } },
    { tip: "kapanis", slogan: "Sık aldıklarınız *bir tık* uzakta." },
  ], 2),

  T(15, "arkadasini-davet-et", "Davet edin, birlikte kazanın", [
    { tip: "soru", metin: "İş ortağınızı *davet edin.*", alt: "İlk siparişte iki firma da %5 indirim kazanır.", cipler: [["mail", "Davet"], ["gift", "%5 indirim"]] },
    { tip: "akis", baslik: "*Üç adımda* kazanın.", adimlar: [["mail", "Davet gönderin"], ["userplus", "Firma kayıt olsun"], ["gift", "İkiniz de kazanın", "İlk siparişte %5"]] },
    { tip: "ekran", ekran: "davet", metin: "E-postayı yazın, *daveti gönderin.*", bolge: B(555, 410, 1095, 160),
      yaz: { hedef: "firma@ornek.com", metin: "satinalma@ornekfirma.com" }, tikla: { hedef: "Davet Gönder", sonuc: "Davet gönderildi" } },
    { tip: "kapanis", slogan: "Birlikte alın, *birlikte kazanın.*" },
  ], 4),

  T(16, "once-sonra", "Satın almayı panele taşıyın", [
    { tip: "soru", metin: "Siparişi hâlâ *telefonla* mı veriyorsunuz?", cipler: [["phone", "Telefon"], ["mail", "E-posta"], ["doc", "Excel"], ["clock", "Bekleme"]] },
    { tip: "karsilastir", baslik: "Fark *açık.*", once: "Eskiden", sonra: "MTS Hijyen B2B ile",
      sol: ["Telefonla sipariş", "Kaybolan e-postalar", "Belirsiz teslimat", "Elle onay"], sag: ["Panelden sipariş", "Her şey kayıtlı", "Anlık durum takibi", "Otomatik onay zinciri"] },
    { tip: "akis", baslik: "Siparişten faturaya *tek panel.*", adimlar: [["edit", "Sipariş"], ["approve", "Onay"], ["truck", "Teslimat"], ["invoice", "Fatura"]] },
    { tip: "kapanis", slogan: "Satın almayı *panele* taşıyın." },
  ], 0),

  T(17, "neden-mts-hijyen", "Neden MTS Hijyen B2B?", [
    { tip: "sayac", baslik: "Bizi tercih eden *kurumlar*", deger: 12000, sonek: "+", alt: "Kurumlar hijyen tedariğinde bizi tercih ediyor." },
    { tip: "ipucu", baslik: "Neden *MTS Hijyen B2B?*", maddeler: [["tag", "Firmanıza özel fiyat"], ["shield", "Çok kademeli onay akışı"], ["truck", "14:00'a kadar aynı gün kargo"], ["repeat", "Periyodik sipariş"]] },
    { tip: "ekran", ekran: "ozet", metin: "Tüm hesabınız *tek ekranda.*", bolge: B(555, 205, 1095, 520),
      vurgu: [{ hedef: "[]BU AY HARCAMA", not: "Harcama, bakiye ve limit" }, { hedef: "[]ONAY BEKLEYEN", not: "Onay bekleyen siparişler" }] },
    { tip: "kapanis", slogan: "Hijyen tedariğiniz *tek panelde.*" },
  ], -1),

  T(18, "sozlesme-ve-vade", "Net koşullar, şeffaf fiyat", [
    { tip: "sayac", baslik: "Firmanıza tanımlı *kredi limiti*", deger: 250000, para: true, ondalik: 0, cipler: [["calendar", "30 gün vade"], ["bolt", "₺5.000 altı otomatik onay"]] },
    { tip: "ekran", ekran: "sozlesme", metin: "Anlaşma koşullarınız *her an* panelde.", bolge: B(555, 320, 1095, 420),
      vurgu: [{ hedef: "[]Kredi Limiti Limit", not: "Limit, kullanılan ve kalan" }, { hedef: "[]Ödeme Koşulları", not: "30 gün vadeli ödeme" }] },
    { tip: "kapanis", slogan: "Net koşullar, *şeffaf fiyat.*" },
  ], 3),

  T(19, "destek", "Destek ekibimiz yanınızda", [
    { tip: "soru", metin: "Bir sorunuz mu *var?*", cipler: [["help", "Sipariş"], ["help", "Fatura"], ["help", "Teslimat"]] },
    { tip: "ekran", ekran: "yardim", metin: "Cevabı önce *Yardım Merkezinde* arayın.", bolge: B(500, 220, 920, 620),
      vurgu: [{ hedef: "[]Sipariş ve Fatura Siparişlerimi", not: "Sık sorulan sorular konulara ayrılmış" }] },
    { tip: "ekran", ekran: "destek-yeni", metin: "Bulamazsanız *destek talebi* açın.", bolge: B(555, 340, 1095, 420),
      yaz: { hedef: "Destek talebinizin konusunu girin", metin: "Teslimat adresi değişikliği" }, tikla: { hedef: "Talebi Oluştur", sonuc: "Destek talebiniz oluşturuldu" } },
    { tip: "kapanis", slogan: "Destek ekibimiz *yanınızda.*" },
  ], -2),
];
