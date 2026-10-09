// 2026-10-09 serisi · Eğitim 64–69: onay yolculuğu ve rol rehberleri (surum 2).
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakamlar ve etiketler 9 Ekim öğe haritalarından okundu.
// Kayıt değiştiren düğmeler (Onayla, Sepete Ekle, Yeni Proje, Filtrele) panelde basılmaz; motor yalnızca canlandırır.
// Veri notu: Özet kartı "Onay bekleyen 3", Onaylarım "2 sipariş" der; sipariş detayı "Seviye 2", Onaylarım "Seviye 1" der.
// Bu yüzden notlarda onay sayısı ve seviye numarası söylenmez.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, adim, metin, ayar) => ({ tip: "ekran", ekran, adim, metin, ...ayar });
const tel = (ekran, ayar) => ({ tip: "telefon", ekran, ...ayar });
const kapak = (no, baslik, alt, ikon) => ({ tip: "kapak", ust: `Eğitim ${no}`, baslik, alt, ikon, sure: "auto" });
const gundem = (no, ikon, maddeler) => ({ tip: "gundem", ust: `Eğitim ${no}`, baslik: "Bu videoda", ikon, maddeler });
const kontrol = (maddeler) => ({ tip: "kontrol", baslik: "*Özet*", maddeler });
const E = (no, id, baslik, ton, sahneler) => ({ id, tur: "egitim", baslik, etiket: `Eğitim ${no} · ${baslik}`, tohum: no, ton, surum: 2, sahneler });

// Ortak kadrajlar (CSS px, 1920×1080 masaüstü çekim)
const HESAP_UST = B(555, 180, 1095, 484);        // hesap sayfasının başlığı ve ilk kartlar
// Mobil sipariş detayındaki "Geçmiş" listesi ham durum kodları içerir: her zaman kapatılır
const GECMIS_SEVKIYAT_M = B(8, 1757, 414, 208);
// Cari Ekstre: tarih kutularında tarayıcının "mm/dd/yyyy" yer tutucusu görünür; Bitiş kutusu boş gri kutuyla kapatılır
const BITIS = B(1434, 205, 133, 22), BITIS_M = B(259, 268, 152, 26), BASLANGIC = B(1266, 205, 133, 22), BASLANGIC_M = B(68, 268, 152, 26);
// Siparişlerim: tarih filtrelerinde aynı yer tutucu var; kutular boş gri kutuyla kapatılır
const TARIH = [B(1466, 313, 156, 30), B(601, 353, 131, 30)], TARIH_M = [B(25, 493, 177, 34), B(232, 493, 153, 34)];
// Mobil ekstrede Sadakat Birikim bandındaki yazılar üst üste biniyor: bant tümüyle kapatılır
const SADAKAT_BANT_M = B(8, 371, 414, 95);
// Adres Defteri: "asd" test kaydının kartı (telefon ve ad otomatik maskelenmiyor)
const ASD_ADRES = "[]aasdasd";

export default [
  // ── 64 · Onay yolculuğu
  E(64, "egitim-64-onay-yolculugu", "Bir siparişin onay yolculuğu", -1, [
    kapak(64, "Bir siparişin onay yolculuğu", "Siparişin onaydan faturaya hangi adımlardan geçtiğini görün.", "approve"),
    gundem(64, "approve", ["Onay kuralını görün", "Siparişi Onaylarım'da onaylayın", "Siparişin 9 durumunu öğrenin"]),
    ek("onay-kurallari", 1, "*Onay kuralı* siparişin kime gideceğini belirler.", { bolge: HESAP_UST,
      vurgu: [{ hedef: ["10.000 TL Üzeri Siparişler", "Onay zinciri: 1. Can Çatma"], not: "Kural tutar sınırını ve onaylayacak kişiyi gösterir." }],
      dikey: tel("m-onay-kurallari", {
        vurgu: [{ hedef: ["10.000 TL Üzeri Siparişler", "Onay zinciri: 1. Can Çatma"], not: "Kural tutar sınırını ve onaylayacak kişiyi gösterir." }] }) }),
    ek("siparis-onay", 2, "Onaya düşen sipariş *Onay Bekleniyor* durumuna geçer.", { bolge: B(555, 290, 1095, 690), bolgeD: B(565, 300, 700, 680),
      vurgu: [{ hedef: "Onay Bekleniyor", not: "Sıradaki adım şirket içi onaydır." },
        { hedef: B(605, 908, 180, 46), not: "Onay zinciri siparişin kimde beklediğini gösterir." }] }),
    ek("onaylarim", 3, "Onaylayıcı siparişi *Onaylarım* sayfasında karara bağlar.", { bolge: HESAP_UST,
      vurgu: [{ hedef: ["Onayla", "Revize için Geri Yolla", "Reddet"], not: "Siparişi onaylayabilir, revizeye yollayabilir ya da reddedebilirsiniz." }],
      tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" },
      dikey: tel("m-onaylarim", {
        vurgu: [{ hedef: ["Onayla", "Revize için Geri Yolla", "Reddet"], not: "Siparişi onaylayabilir, revizeye yollayabilir ya da reddedebilirsiniz." }],
        tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } }) }),
    ek("bildirim-panel", 4, "Yeni onay talebi *bildirim* olarak gelir.", { bolge: B(760, 50, 882, 390),
      vurgu: [{ hedef: "[]Onayınızı bekleyen sipariş var", not: "Zil simgesi bekleyen onayı size haber verir." }],
      dikey: tel("m-bildirimler", {
        // Bildirimin tamamı (başlık, açıklama, tarih satırı): açıklama satırı başlıktan geniş
        vurgu: [{ hedef: B(52, 390, 312, 68), not: "Zil simgesi bekleyen onayı size haber verir." }] }) }),
    // 9 durum 6 kutuda: üç MTS durumu tek kutuda, Faturalandı son kutunun alt satırında
    { tip: "akis", baslik: "Sipariş *9 durumdan* geçer.",
      adimlar: [["edit", "Taslak", "Sipariş oluşur"], ["approve", "Onay Bekleniyor", "Şirketiniz onaylar"],
        ["shield", "MTS Onayı", "Bekleniyor · İncelemede · Onayladı"], ["box", "Hazırlanıyor", "Depoda paketlenir"],
        ["truck", "Sevkiyatta", "Kargoya verilir"], ["invoice", "Teslim Edildi", "Son adım: Faturalandı"]] },
    kontrol(["Onay zincirini Onay Kuralları sayfasında kontrol edin.", "Siparişin durumunu detay sayfasında izleyin.", "Bekleyen siparişi Onaylarım sayfasında onaylayın."]),
    { tip: "son", metin: "Şimdi *Onaylarım* sayfasını açın.", sonraki: "Telefondan onay verin" },
  ]),

  // ── 65 · Telefondan onay
  E(65, "egitim-65-telefondan-onay", "Telefondan onay verin", 1, [
    kapak(65, "Telefondan onay verin", "Bekleyen siparişi telefondan tek dokunuşla onaylayın.", "phone"),
    { tip: "karakter", avatar: { sac: "kisa", ten: "bugday", sacRenk: "#2A1A10", giysi: "#1D4F7A", yaka: "kravat", gozluk: true, ruh: "mutlu" },
      ad: "Kerem", rol: "Operasyon müdürü", ikon: "phone", metin: "Onayları *toplantı arasında* veriyorum." },
    tel("m-ozet", { adim: 1, metin: "*Özet* ekranında Onay bekleyen kartına dokunun.",
      vurgu: [{ hedef: ["Onay bekleyen", "Şimdi incele →"], not: "Kart bekleyen onayları sayar." }],
      tikla: { hedef: "Şimdi incele →", sonuc: "Onaylarım sayfası açılır" } }),
    tel("m-onaylarim", { adim: 2, metin: "Kartı okuyup *Onayla* düğmesine dokunun.",
      vurgu: [{ hedef: ["Sipariş tutarı: ₺1.779,56", "₺409,50"], not: "Kartta tutar, açan kişi ve ürünler yazar." }],
      tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } }),
    kontrol(["Özet ekranında Onay bekleyen kartına dokunun.", "Kartta tutarı ve ürünleri kontrol edin.", "Onayla düğmesine dokunun."]),
    { tip: "son", metin: "Şimdi telefonunuzda *Onaylarım* sayfasını açın.", sonraki: "Rol rehberi: satın alma sorumlusu" },
  ]),

  // ── 66 · Rol rehberi: satın alma
  E(66, "egitim-66-rol-satin-alma", "Rol rehberi: satın alma sorumlusu", -2, [
    kapak(66, "Rol rehberi: satın alma sorumlusu", "Günlük satın alma işlerini panelde hızla yapın.", "cart"),
    { tip: "karakter", avatar: { sac: "uzun", ten: "acik", sacRenk: "#4A2E1A", giysi: "#0B5677", ruh: "dertli" },
      ad: "Elif", rol: "Satın alma sorumlusu", ikon: "cart", metin: "Her hafta aynı ürünleri *tek tek* sipariş ediyorum." },
    gundem(66, "cart", ["Özet ekranını açın", "Ürün kodunu yazın", "Kayıtlı listeyi ekleyin", "Siparişi takip edin"]),
    ek("ozet", 1, "Güne *Özet* ekranıyla başlayın.", { bolge: HESAP_UST,
      vurgu: [{ hedef: ["+ Yeni Sipariş", "Sık Listeler"], not: "Yeni sipariş, şablonlar ve sık listeler buradan açılır." }],
      dikey: tel("m-ozet", { vurgu: [{ hedef: ["+ Yeni Sipariş", "Sık Listeler"], not: "Yeni sipariş, şablonlar ve sık listeler buradan açılır." }] }) }),
    ek("hizli", 2, "*Hızlı Sipariş* sayfasına ürün kodunu yazın.", { bolge: HESAP_UST,
      vurgu: [{ hedef: B(580, 459, 92, 19), not: "Tek seferde 100 satıra kadar ürün girebilirsiniz." }],
      yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" },
      tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" },
      dikey: tel("m-hizli", {
        vurgu: [{ hedef: B(18, 512, 100, 18), not: "Tek seferde 100 satıra kadar ürün girebilirsiniz.", zoom: 1.8 }],
        yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" },
        tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" } }) }),
    ek("listeler", 3, "Kayıtlı listeyi *tek tıkla* sepete ekleyin.", { bolge: HESAP_UST,
      vurgu: [{ hedef: "6 ürün · Oluşturulma 07.08.2026", not: "Listedeki 6 ürün birlikte eklenir." }],
      tikla: { hedef: "Sepete Ekle#3", sonuc: "6 ürün sepete eklendi" },
      dikey: tel("m-listeler", { metin: "Kayıtlı listeyi *tek dokunuşla* sepete ekleyin.",
        vurgu: [{ hedef: B(18, 728, 240, 26), not: "Listedeki 6 ürün birlikte eklenir.", zoom: 1.6 }],
        tikla: { hedef: "Sepete Ekle#3", sonuc: "6 ürün sepete eklendi" } }) }),
    ek("siparisler", 4, "Siparişleri *durumuna göre* izleyin.", { bolge: B(555, 180, 1095, 600), ortu: TARIH,
      vurgu: [{ hedef: ["Hızlı:", "Teslim"], not: "Hızlı filtreler listeyi tek tıkla süzer." }],
      tikla: { hedef: "Sevkiyatta", sonuc: "Kargodaki siparişler listelenir" },
      dikey: tel("m-siparisler", { ortu: TARIH_M,
        vurgu: [{ hedef: ["Hızlı:", "Teslim"], not: "Hızlı filtreler listeyi tek dokunuşla süzer." }],
        tikla: { hedef: "Sevkiyatta", sonuc: "Kargodaki siparişler listelenir" } }) }),
    kontrol(["Hızlı Sipariş sayfasına ürün kodunu yazın.", "Kayıtlı listede Sepete Ekle düğmesine basın.", "Siparişleri Sevkiyatta filtresiyle izleyin."]),
    { tip: "son", metin: "Şimdi *Hızlı Sipariş* sayfasını açın.", sonraki: "Rol rehberi: yönetici" },
  ]),

  // ── 67 · Rol rehberi: yönetici
  E(67, "egitim-67-rol-yonetici", "Rol rehberi: yönetici", 2, [
    kapak(67, "Rol rehberi: yönetici", "Onayları, bütçeyi ve harcamayı tek panelden izleyin.", "chart"),
    { tip: "karakter", avatar: { sac: "kel", ten: "acik", sacRenk: "#3A2A1E", giysi: "#16324F", yaka: "kravat", sakal: true, ruh: "dertli" },
      ad: "Murat", rol: "Genel müdür", ikon: "chart", metin: "Bütçe ve onaylar için *her gün* rapor istiyorum." },
    gundem(67, "chart", ["Özet kartlarını okuyun", "Siparişi onaylayın", "Bütçeyi izleyin", "Harcamayı inceleyin"]),
    ek("ozet", 1, "*Özet* kartlarında onayları ve krediyi görün.", { bolge: HESAP_UST,
      vurgu: [{ hedef: ["Onay bekleyen", "Şimdi incele →"], not: "Bekleyen onaylara bu karttan geçersiniz." },
        { hedef: ["Kredi limiti kullanımı", "₺234.594,45 kullanılabilir"], not: "Kalan kredi limitiniz bu kartta yazar." }],
      dikey: tel("m-ozet", {
        vurgu: [{ hedef: ["Onay bekleyen", "Şimdi incele →"], not: "Bekleyen onaylara bu karttan geçersiniz." },
          { hedef: ["Kredi limiti kullanımı", "₺234.594,45 kullanılabilir"], not: "Kalan kredi limitiniz bu kartta yazar." }] }) }),
    ek("onaylarim", 2, "*Onaylarım* sayfasında siparişi onaylayın.", { bolge: HESAP_UST,
      vurgu: [{ hedef: ["Sipariş tutarı: ₺1.779,56", "~Açan: Zeynep Kaya"], not: "Kartta tutar, açan kişi ve departman yazar." }],
      tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" },
      dikey: tel("m-onaylarim", {
        vurgu: [{ hedef: ["Sipariş tutarı: ₺1.779,56", "~Açan: Zeynep Kaya"], not: "Kartta tutar, açan kişi ve departman yazar." }],
        tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } }) }),
    ek("butce", 3, "*Bütçe Panosu* ile harcamayı izleyin.", { bolge: B(555, 290, 1095, 372),
      vurgu: [{ hedef: ["Kredi Kullanımı", "/ ₺250.000,00"], not: "Kredi kullanımı limitle birlikte yazar." },
        { hedef: ["Kalan", "₺76.648,37"], not: "Her departmanın kalan bütçesi bu sütunda yazar." }],
      // Mobilde departman tablosu yana taşıyor: dikeyde yalnız üstteki kartlar
      dikey: tel("m-butce", {
        vurgu: [{ hedef: ["Kredi Kullanımı", "/ ₺250.000,00"], not: "Kredi kullanımı limitle birlikte yazar." },
          { hedef: ["Bu Ay Toplam Harcama", "₺29.348,56"], not: "Bu ayki toplam harcama ilk kartta yazar." }] }) }),
    ek("analitik", 4, "*Analitik* sayfasında harcamanın dağılımını görün.", { bolge: B(555, 290, 1095, 620),
      vurgu: [{ hedef: ["Toplam Harcama", "₺51.320,08"], not: "Son 12 ayın toplam harcaması kartta yazar." },
        { hedef: ["Bez & Sünger (Mikrofiber)", "35 % · ₺14.836,26"], not: "Harcama kategorilere yüzdeyle ayrılır." }],
      dikey: tel("m-analitik", {
        vurgu: [{ hedef: ["Toplam Harcama", "₺51.320,08"], not: "Son 12 ayın toplam harcaması kartta yazar." },
          { hedef: ["Bez & Sünger (Mikrofiber)", "35 % · ₺14.836,26"], not: "Harcama kategorilere yüzdeyle ayrılır." }] }) }),
    kontrol(["Özet kartlarında bekleyen onayları görün.", "Onaylarım sayfasında Onayla düğmesine basın.", "Bütçe Panosu sayfasında harcamayı izleyin."]),
    { tip: "son", metin: "Şimdi *Bütçe Panosu* sayfasını açın.", sonraki: "Rol rehberi: muhasebe" },
  ]),

  // ── 68 · Rol rehberi: muhasebe
  E(68, "egitim-68-rol-muhasebe", "Rol rehberi: muhasebe", 0, [
    kapak(68, "Rol rehberi: muhasebe", "Ekstreyi, faturaları ve sipariş belgelerini panelden alın.", "invoice"),
    { tip: "karakter", avatar: { sac: "topuz", ten: "bugday", sacRenk: "#2B1B12", giysi: "#4B2E6B", gozluk: true, ruh: "dertli" },
      ad: "Seda", rol: "Muhasebe uzmanı", ikon: "invoice", metin: "Ay sonunda faturaları *tek tek* topluyorum." },
    gundem(68, "invoice", ["Ekstreyi filtreleyin", "Faturayı yazdırın", "Listeyi Excel'e aktarın", "PO numarasını bulun"]),
    ek("ekstre", 1, "*Cari Ekstre* sayfasında tarih aralığı seçin.", { bolge: B(1000, 180, 650, 290), ortu: [BITIS],
      yaz: { hedef: BASLANGIC, metin: "01.09.2026" },
      tikla: { hedef: "Filtrele", sonuc: "Bu aralıktaki hareketler listelenir" },
      dikey: tel("m-ekstre", { ortu: [BITIS_M, SADAKAT_BANT_M],
        yaz: { hedef: BASLANGIC_M, metin: "01.09.2026" },
        tikla: { hedef: "Filtrele", sonuc: "Bu aralıktaki hareketler listelenir" } }) }),
    // Demo veride Açık Bakiye ile 0–30 gün tutarı farklı: metin "bakiye" demez, Açık Bakiye kartı vurgulanmaz
    ek("ekstre", 2, "Borçları *vade aralığına* göre okuyun.", { bolge: B(270, 180, 1380, 610), ortu: [BASLANGIC, BITIS],
      vurgu: [{ hedef: B(838, 380, 794, 58), not: "Borçlar vadesine göre gün aralıklarında toplanır." }],
      // Mobilde kartlar 2×2: üç vade kartını tek kutu kapsamaz; borcun olduğu 0–30 gün kartı vurgulanır, zoom 1 ile diğer kartlar da görünür
      dikey: tel("m-ekstre", { ortu: [BASLANGIC_M, BITIS_M, SADAKAT_BANT_M],
        vurgu: [{ hedef: B(222, 481, 199, 70), not: "Borçlar vadesine göre gün aralıklarında toplanır.", zoom: 1 }] }) }),
    ek("faturalar", 3, "*Faturalarım* sayfasında faturayı yazdırın.", { bolge: HESAP_UST,
      vurgu: [{ hedef: ["MTSD2026000003", "Onaylı"], not: "Faturalarınız panele otomatik gelir." }],
      tikla: { hedef: "Yazdır", sonuc: "Yazdırma görünümü açılır" },
      dikey: tel("m-faturalar", {
        vurgu: [{ hedef: ["MTSD2026000003", "MTS-2026-0016"], not: "Faturalarınız panele otomatik gelir." }],
        tikla: { hedef: "Yazdır", sonuc: "Yazdırma görünümü açılır" } }) }),
    ek("siparisler", 4, "Sipariş listesini *Excel'e* aktarın.", { bolge: B(900, 170, 750, 332), ortu: TARIH,
      tikla: { hedef: "Excel'e Aktar", sonuc: "Liste Excel dosyasına aktarılır" },
      dikey: tel("m-siparisler", { ortu: TARIH_M, tikla: { hedef: "Excel'e Aktar", sonuc: "Liste Excel dosyasına aktarılır" } }) }),
    ek("siparis-yazdir", 5, "Sipariş belgesinde *PO numarasını* bulun.", { bolge: B(770, 200, 750, 340), bolgeD: B(770, 300, 420, 420), ortu: ["~VKN"],
      vurgu: [{ hedef: ["Sipariş veren : Ayşe Yılmaz", "PO No : SAS-2026-0644"], not: "Belgede siparişi veren kişi ve PO numarası yazar." }] }),
    kontrol(["Cari Ekstre'yi tarih aralığıyla filtreleyin.", "Faturayı Yazdır düğmesiyle yazdırın.", "Sipariş listesini Excel'e aktarın."]),
    { tip: "son", metin: "Şimdi *Cari Ekstre* sayfasını açın.", sonraki: "Rol rehberi: şube ve depo sorumlusu" },
  ]),

  // ── 69 · Rol rehberi: şube ve depo
  E(69, "egitim-69-rol-sube", "Rol rehberi: şube ve depo sorumlusu", -3, [
    kapak(69, "Rol rehberi: şube ve depo sorumlusu", "Şube siparişini doğru listeden doğru adrese verin.", "building"),
    { tip: "karakter", avatar: { sac: "kisa", ten: "esmer", sacRenk: "#1A1410", giysi: "#2F5E3A", yaka: "yelek", ruh: "dertli" },
      ad: "Hakan", rol: "Şube ve depo sorumlusu", ikon: "box", metin: "Her şubenin siparişi *farklı adrese* gidiyor." },
    gundem(69, "building", ["Firma listesini ekleyin", "Proje kaydı açın", "Varsayılan adresi kontrol edin", "Siparişin adresini görün"]),
    // "Firma" ile "Kişisel" listeler ayrı sekmelerde: not yalnız bu ayrımı söyler
    ek("listeler-firma", 1, "*Firma* listesini tek tıkla sepete ekleyin.", { bolge: HESAP_UST,
      vurgu: [{ hedef: "Firma", not: "Firma listesi şirketin ortak listesidir." }],
      tikla: { hedef: "Sepete Ekle#2", sonuc: "Listedeki 5 ürün sepete eklendi" },
      // Mobil çekimde "Tümü" sekmesi seçili: sekme yerine eklenecek listenin adı ve Firma etiketi vurgulanır
      dikey: tel("m-listeler", { metin: "*Firma* listesini tek dokunuşla sepete ekleyin.",
        vurgu: [{ hedef: ["Üretim Hattı Standart Set", "Firma#3"], not: "Firma listesi şirketin ortak listesidir.", zoom: 1 }],
        tikla: { hedef: "Sepete Ekle#2", sonuc: "Listedeki 5 ürün sepete eklendi" } }) }),
    ek("projeler", 2, "Her şube için *proje* kaydı açın.", { bolge: B(555, 290, 1095, 440),
      vurgu: [{ hedef: B(588, 534, 310, 58), not: "Projenin kodu, adresi ve sipariş sayısı burada yazar." }],
      tikla: { hedef: "Yeni Proje", sonuc: "Yeni proje formu açılır" },
      dikey: tel("m-projeler", {
        vurgu: [{ hedef: ["Yeni Şube Açılış Donanımı#2", "3 sipariş"], not: "Projenin kodu, adresi ve sipariş sayısı burada yazar." }],
        tikla: { hedef: "Yeni Proje", sonuc: "Yeni proje formu açılır" } }) }),
    ek("adresler", 3, "*Varsayılan* teslimat adresini kontrol edin.", { bolge: B(270, 640, 840, 340), bolgeD: B(560, 700, 560, 380), ortu: [ASD_ADRES],
      vurgu: [{ hedef: ["Merkez Depo", "Varsayılan"], not: "Varsayılan etiketi ana teslimat adresinizi gösterir." }] }),
    ek("siparis-sevkiyat", 4, "Sipariş detayında *teslimat adresini* görün.", { bolge: B(555, 470, 1095, 610),
      vurgu: [{ hedef: "Sipariş kargoda. Takip için kargo bölümüne bakın.", not: "Sıradaki adım kutusu siparişin nerede olduğunu söyler." },
        { hedef: "Teslimat: Merkez Depo", not: "Ürünler Merkez Depo adresine teslim edilir." }],
      dikey: tel("m-siparis-sevkiyat", { ortu: [GECMIS_SEVKIYAT_M],
        vurgu: [{ hedef: "Sipariş kargoda. Takip için kargo bölümüne bakın.", not: "Sıradaki adım kutusu siparişin nerede olduğunu söyler." },
          { hedef: "Teslimat: Merkez Depo", not: "Ürünler Merkez Depo adresine teslim edilir." }] }) }),
    kontrol(["Firma listesinde Sepete Ekle düğmesine basın.", "Yeni Proje düğmesiyle şube projesi açın.", "Varsayılan teslimat adresini kontrol edin."]),
    { tip: "son", metin: "Şimdi *Adres Defteri* sayfasını açın." },
  ]),
];
