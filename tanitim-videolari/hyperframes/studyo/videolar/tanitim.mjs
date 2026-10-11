// Tanıtım videoları. Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı vurgulanır.
// Rakamlar kurala bağlı panel bilgileridir (kademeli indirim, peşin ödeme, satır sınırı); demo hesabın tutarları fayda gibi sunulmaz.
// Ekranlar 9 Ekim 2026 çekimine göre kırpıldı.
const T = (no, ad, baslik, sahneler, ton = 0) => ({ id: `tanitim-${String(no).padStart(2, "0")}-${ad}`, tur: "tanitim", baslik, ton, tohum: 20 + no, sahneler });
const B = (x, y, w, h) => ({ x, y, w, h });

export default [
  T(5, "siparis-takibi", "Siparişiniz nerede?", [
    { tip: "soru", metin: "Siparişiniz *şu an nerede?*", cipler: [["truck", "Kargoda mı?"], ["approve", "Onaylandı mı?"], ["box", "Hazırlandı mı?"], ["clock", "Ne zaman gelir?"]] },
    { tip: "akis", baslik: "Her sipariş *adım adım* ilerler.", adimlar: [["edit", "Taslak"], ["approve", "Şirket onayı"], ["shield", "MTS onayı"], ["box", "Hazırlanıyor"], ["truck", "Sevkiyatta"], ["check", "Teslim edildi"]] },
    { tip: "ekran", ekran: "siparis-sevkiyat", metin: "Siparişin durumunu *anlık* görün.", bolge: B(555, 195, 1095, 400),
      vurgu: [{ hedef: B(1372, 388, 98, 32), not: "Koyu adım siparişin yerini gösterir" }, { hedef: "[]Sıradaki adım", not: "Sıradaki adım burada yazar" }] },
    { tip: "ekran", ekran: "bildirimler", metin: "Her değişiklikte *bildirim* alın.", bolge: B(555, 205, 1095, 560),
      vurgu: [{ hedef: ["MTS-2026-0018, Sevkiyatta", "Durum güncellendi: Hazırlanıyor → Sevkiyatta"], not: "Durum değişince bildirim gelir" }] },
    { tip: "kapanis", slogan: "Siparişinizi *her an* izleyin." },
  ], 1),

  T(6, "hizli-siparis", "Ürün koduyla hızlı sipariş", [
    { tip: "soru", metin: "Onlarca ürünü *tek tek* mi arıyorsunuz?", cipler: [["search", "Tek tek arama"], ["list", "Sayfa sayfa katalog"], ["clock", "Kayıp zaman"]] },
    { tip: "ekran", ekran: "hizli", metin: "Ürün kodlarını yazın, *tek tıkla* ekleyin.", bolge: B(555, 190, 1095, 310),
      yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" }, tikla: { hedef: "Sepete Ekle", sonuc: "Tüm satırlar sepete eklendi" } },
    { tip: "akis", baslik: "Siparişi *üç adımda* hazırlayın.", adimlar: [["edit", "Kodu yazın", "Ürün kodu ve miktar"], ["check", "Doğrulayın", "Ürün ve fiyat kontrolü"], ["cart", "Sepete ekleyin", "Tüm satırlar birden"]] },
    { tip: "sayac", baslik: "Uzun listeyi *tek seferde* ekleyin.", deger: 100, sonek: "satır", alt: "Listenizi CSV olarak yapıştırın.", cipler: [["doc", "CSV Yapıştır"], ["check", "Doğrula"]] },
    { tip: "kapanis", slogan: "Kodu yazın, *zaman* kazanın." },
  ], 2),

  T(7, "toplu-alim-teklifi", "Toplu alımda özel fiyat", [
    { tip: "soru", metin: "Büyük alımda *özel fiyat* mı istiyorsunuz?", cipler: [["package", "Toplu alım"], ["calendar", "Yıllık sözleşme"], ["truck", "Çok depoya teslimat"]] },
    { tip: "ekran", ekran: "teklif-yeni", metin: "Ürün ve miktarı yazın, *teklif* isteyin.", bolge: B(555, 195, 1095, 480),
      yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" }, tikla: { hedef: "Teklif Oluştur", sonuc: "Teklif talebiniz iletildi" } },
    { tip: "ekran", ekran: "teklifler", metin: "Teklif hazır olunca *panelde* görün.", bolge: B(555, 195, 1095, 320),
      vurgu: [{ hedef: "[]TKF-2026-0003", not: "Teklif Hazır yazınca teklifi açın" }] },
    { tip: "kapanis", slogan: "Büyük alımda *teklif* isteyin." },
  ], -1),

  T(8, "analitik", "Harcamanızı rakamlarla görün", [
    { tip: "sayac", baslik: "Satın almanızın *yıllık özetini* görün.", deger: 12, sonek: "ay", cipler: [["wallet", "Toplam harcama"], ["percent", "Toplam indirim"]] },
    { tip: "ekran", ekran: "analitik", metin: "Aylık harcamanızı *grafikte* izleyin.", bolge: B(555, 190, 1095, 500),
      vurgu: [{ hedef: "[]Aylık Harcama Trendi Son 6 ay", not: "Grafik son 6 ayı gösterir", kaydir: true }] },
    { tip: "ekran", ekran: "analitik", metin: "Hangi kategoriye *ne harcadığınızı* görün.", bolge: B(555, 595, 1095, 420),
      vurgu: [{ hedef: "[]Kategori Dağılımı", not: "Kategoriler harcamaya göre sıralanır" }] },
    { tip: "kapanis", slogan: "Satın almayı *veriyle* planlayın." },
  ], 4),

  T(9, "ai-asistan", "AI ürün asistanı", [
    { tip: "soru", metin: "Hangi ürünü *seçeceğinizi* bilmiyor musunuz?", cipler: [["building", "Otel"], ["shield", "Hastane"], ["cart", "Restoran"], ["users", "Ofis"]] },
    { tip: "ekran", ekran: "ai-oneri", metin: "İhtiyacınızı yazın, *asistan* önersin.", bolge: B(555, 280, 1095, 280),
      yaz: { hedef: "~Örn: Otelim için aylık ne kadar kağıt havlu lazım?", metin: "50 kişilik ofis için hangi ürünler gerekir?" },
      tikla: { hedef: "Gönder", sonuc: "Asistan ürün önerilerini hazırlar" } },
    { tip: "akis", baslik: "Sorudan sepete *üç adımda* geçin.", adimlar: [["chat", "Sorun", "İhtiyacınızı yazın"], ["sparkle", "Öneri alın", "Size uygun ürünler"], ["cart", "Sepete ekleyin"]] },
    { tip: "kapanis", slogan: "Doğru ürünü *ilk seferde* seçin." },
  ], 5),

  T(10, "projeler", "Projeler ve şantiyeler", [
    { tip: "soru", metin: "Hangi proje *ne kadar* harcadı?", cipler: [["map", "Şantiye"], ["building", "Yeni şube"], ["calendar", "Yıllık tedarik"]] },
    { tip: "ekran", ekran: "projeler", metin: "Her projenin *bütçe kullanımını* görün.", bolge: B(555, 320, 1095, 340),
      vurgu: [{ hedef: B(578, 405, 1046, 52), not: "Her satır harcamayı ve bütçeyi gösterir", kaydir: true }] },
    { tip: "ekran", ekran: "siparisler", metin: "Siparişleri *projeye göre* süzün.", bolge: B(555, 290, 1095, 420),
      vurgu: [{ hedef: "~Tüm Projeler", not: "Listeden bir proje seçin" }, { hedef: ["MTS-2026-0021", "2026 Yıllık Hijyen Tedariki (PRJ-2026-01)"], not: "Proje adı numaranın altında yazar" }] },
    { tip: "kapanis", slogan: "Her projeyi *ayrı* izleyin." },
  ], -2),

  T(11, "ekip-ve-yetkiler", "Ekip ve yetkiler", [
    { tip: "soru", metin: "Ekibinizde *kim, neyi* sipariş edebilir?", cipler: [["user", "Genel Müdür"], ["user", "Satınalmacı"], ["eye", "Görüntüleyici"]] },
    { tip: "ekran", ekran: "kullanicilar", metin: "Her kişiye *rol* ve onay limiti verin.", bolge: B(555, 190, 1095, 410),
      vurgu: [{ hedef: ["Rol", "Departman", "Görüntüleyici"], not: "Rol, kişinin yetkilerini belirler" }, { hedef: ["Onay Limiti", "Yetki", "19 yetki"], not: "Limit boş kalırsa sınırsız olur" }] },
    { tip: "ekran", ekran: "kullanici-davet", metin: "Yeni kullanıcıyı *tek formla* davet edin.", bolge: B(555, 195, 1095, 500),
      yaz: { hedef: "Ahmet Yılmaz", metin: "Selin Aydın" }, tikla: { hedef: "Kullanıcıyı Davet Et", sonuc: "Kullanıcı davet edildi" } },
    { tip: "kapanis", slogan: "Yetkiyi *ekibinize göre* ayarlayın." },
  ], 3),

  T(12, "kademeli-iskonto", "Çok alın, az ödeyin", [
    { tip: "cubuk", baslik: "Adet arttıkça *birim fiyat* düşer.", para: true, ek: "koli başı", vurgu: 3,
      satirlar: [["1 koli", 420, 420], ["5+ koli", 399, 420], ["30+ koli", 386.4, 420], ["40+ koli", 378, 420]] },
    { tip: "ekran", ekran: "urun", metin: "*FIRSAT* tablosu indirimi gösterir.", bolge: B(810, 600, 840, 300),
      vurgu: [{ hedef: "[]FIRSAT Kademeli iskonto", not: "İndirim 5 koliden itibaren başlar" }] },
    { tip: "ekran", ekran: "kampanyalar", metin: "Kupon gerekmez, indirim *otomatik* uygulanır.", bolge: B(270, 340, 1380, 200),
      vurgu: [{ hedef: "[]Çok Al Az Öde Kademeli", not: "Her kademeli üründe geçerlidir" }] },
    { tip: "kapanis", slogan: "Miktarı artırın, *birim fiyatı* düşürün." },
  ], 1),

  T(13, "numune-ve-iade", "Numune ve iade", [
    { tip: "soru", metin: "Ürünü almadan önce *denemek* ister misiniz?", cipler: [["sample", "Ücretsiz numune"], ["undo", "Kolay iade"]] },
    { tip: "ekran", ekran: "numune-yeni", metin: "Numune talebini *formla* gönderin.", bolge: B(620, 600, 690, 420),
      yaz: { hedef: "Virgülle ayırarak yazın. Örn: MTS-1001, MTS-2030", metin: "555204, ST00560" }, tikla: { hedef: "Numune Talep Et", sonuc: "Talebiniz alındı" },
      ortu: [B(655, 352, 95, 24), B(655, 574, 95, 24)] },   // ad ve firma alanındaki hesap sahibinin adı
    { tip: "akis", baslik: "İade *adım adım* ilerler.", adimlar: [["undo", "Talep alındı"], ["approve", "Onaylandı"], ["box", "Depoya ulaştı"], ["check", "İade tamamlandı"]] },
    { tip: "kapanis", slogan: "Deneyin, *gönül rahatlığıyla* alın." },
  ], -3),

  T(14, "listeler-favoriler", "Sık aldıklarınız bir tık uzakta", [
    { tip: "soru", metin: "Her ay *aynı ürünleri* mi arıyorsunuz?", cipler: [["heart", "Favoriler"], ["list", "Listeler"], ["repeat", "Şablonlar"]] },
    { tip: "ekran", ekran: "favoriler", metin: "Favorilerden *tek tıkla* sepete ekleyin.", bolge: B(555, 290, 1095, 500),
      tikla: { hedef: "Ekle", sonuc: "Ürün sepete eklendi" } },
    { tip: "ekran", ekran: "listeler", metin: "Tüm listeyi *bir kerede* sepete ekleyin.", bolge: B(555, 340, 1095, 220),
      tikla: { hedef: "Sepete Ekle#2", sonuc: "5 ürün sepete eklendi" } },
    { tip: "kapanis", slogan: "Aynı ürünleri *tekrar* aramayın." },
  ], 2),

  T(15, "arkadasini-davet-et", "Davet edin, birlikte kazanın", [
    { tip: "soru", metin: "İş ortağınızı *davet edin.*", alt: "İlk siparişte iki firma da %5 indirim kazanır.", cipler: [["mail", "Davet"], ["gift", "%5 indirim"]] },
    { tip: "akis", baslik: "*Üç adımda* kazanın.", adimlar: [["mail", "Davet gönderin"], ["userplus", "Firma kayıt olsun"], ["gift", "İkiniz de kazanın", "İlk siparişte %5"]] },
    { tip: "ekran", ekran: "davet", metin: "E-postayı yazın, *daveti gönderin.*", bolge: B(555, 210, 1095, 484),
      yaz: { hedef: "firma@ornek.com", metin: "satinalma@ornekfirma.com" }, tikla: { hedef: "Davet Gönder", sonuc: "Davet gönderildi" } },
    { tip: "kapanis", slogan: "Davet gönderin, *indirimi* paylaşın." },
  ], 4),

  T(16, "once-sonra", "Satın almayı panele taşıyın", [
    { tip: "soru", metin: "Siparişi hâlâ *telefonla* mı veriyorsunuz?", cipler: [["phone", "Telefon"], ["mail", "E-posta"], ["doc", "Excel"], ["clock", "Bekleme"]] },
    { tip: "karsilastir", baslik: "Panelle satın alma *kolaylaşır.*", once: "Eskiden", sonra: "MTS Hijyen B2B ile",
      sol: ["Telefonla sipariş", "Kaybolan e-postalar", "Belirsiz teslimat", "Elle onay"], sag: ["Panelden sipariş", "Her şey kayıtlı", "Anlık durum takibi", "Kurala bağlı onay zinciri"] },
    { tip: "akis", baslik: "Her adımı *tek panelde* izleyin.", adimlar: [["edit", "Sipariş"], ["approve", "Onay"], ["truck", "Teslimat"], ["invoice", "Fatura"]] },
    { tip: "kapanis", slogan: "İlk siparişinizi *panelden* verin." },
  ], 0),

  T(17, "neden-mts-hijyen", "Neden MTS Hijyen B2B?", [
    { tip: "sayac", baslik: "Bizi tercih eden *kurumlar*", deger: 12000, sonek: "+", alt: "Temizlik ve kâğıdı tek yerden alın." },
    { tip: "ipucu", baslik: "Neden *MTS Hijyen B2B?*", maddeler: [["tag", "Firmanıza özel fiyat ve kademeli indirim alın"], ["shield", "Çok kademeli onay akışı kurun"], ["truck", "14:00'a kadar verilen sipariş aynı gün kargolanır"], ["repeat", "Düzenli siparişleri otomatik oluşturun"]] },
    { tip: "ekran", ekran: "ozet", metin: "Hesabınızı *tek ekranda* izleyin.", bolge: B(555, 172, 1095, 520),
      vurgu: [{ hedef: ["[]BU AY HARCAMA", "[]KREDİ LİMİTİ KULLANIMI"], not: "Harcamayı, bakiyeyi ve limiti görün", kaydir: true }, { hedef: "[]ONAY BEKLEYEN", not: "Bekleyen onayları buradan açın" }] },
    { tip: "kapanis", slogan: "Tedariğinizi *tek panelden* yönetin." },
  ], -1),

  T(18, "sozlesme-ve-vade", "Net koşullar, şeffaf fiyat", [
    { tip: "sayac", baslik: "Peşin ödeyin, *ek indirim* kazanın.", deger: 2, onek: "%", alt: "Havale/EFT ile ödenen siparişlerde geçerlidir.", cipler: [["wallet", "Cari hesap"], ["lock", "Kredi kartı"], ["bolt", "Havale/EFT"]] },
    { tip: "ekran", ekran: "sozlesme", metin: "Anlaşma koşullarınızı *her an* görün.", bolge: B(555, 285, 1095, 420),
      vurgu: [{ hedef: B(1120, 420, 505, 54), not: "Kalan limitinizi buradan izleyin" }, { hedef: "[]Ödeme Koşulları", not: "Vade ve onay eşiği burada yazar" }] },
    { tip: "kapanis", slogan: "Koşullarınızı *panelden* izleyin." },
  ], 3),

  T(19, "destek", "Destek ekibimiz yanınızda", [
    { tip: "soru", metin: "*Sorunuz* mu var?", cipler: [["help", "Sipariş"], ["help", "Fatura"], ["help", "Teslimat"]] },
    { tip: "ekran", ekran: "yardim", metin: "Cevabı önce *Yardım Merkezinde* arayın.", bolge: B(500, 220, 920, 620),
      vurgu: [{ hedef: "[]Sipariş ve Fatura Siparişlerimi", not: "Sorular konulara göre ayrılır" }] },
    { tip: "ekran", ekran: "destek-yeni", metin: "Bulamazsanız *destek talebi* açın.", bolge: B(555, 340, 1095, 420),
      yaz: { hedef: "Destek talebinizin konusunu girin", metin: "Teslimat adresi değişikliği" }, tikla: { hedef: "Talebi Oluştur", sonuc: "Destek talebiniz oluşturuldu" } },
    { tip: "kapanis", slogan: "Sorunuzu *destek ekibine* iletin." },
  ], -2),
];
