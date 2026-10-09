// 2026-10-09 serisi · Tanıtım 27–33: rol, rakam, günlük akış (surum 2).
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakamlar ve etiketler 9 Ekim element haritalarından okundu:
//   katalog: "1326 ürün", 7 kategori (75+328+149+63+300+224+187), marka filtresi 6 + "+ 99 marka daha" ("Genel Markalar" dahil; videoda "100+")
//   kampanyalar: "Peşin Ödeme %2 İndirim", "₺3.500,00 ve üzeri siparişlerde kargo ücreti uygulanmaz." · hizli: "En fazla 100 satır"
//   urun-alt: "Cari hesap", "Kredi kartı (3D Secure)", "Havale/EFT (peşin %2 iskonto)"
// Demo hesabın tutarları (harcama, bakiye, limit) fayda gibi sunulmaz. Kayıt değiştiren tıklamalar (Onayla, Sepete Ekle, Excel'e Aktar) yalnız canlandırılır.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, metin, ayar) => ({ tip: "ekran", ekran, metin, ...ayar });
const tel = (ekran, metin, ayar) => ({ tip: "telefon", ekran, metin, ...ayar });
const kapanis = (slogan, cta = "Kurumsal hesap açın") => ({ tip: "kapanis", slogan, cta });
// Hesap sayfaları: içerik alanı (sol menü dışarıda)
const HESAP = B(555, 185, 1095, 485);

export default [
  // ── 27 · Fabrika (karakter → firma listesi → telefondan onay)
  {
    id: "tanitim-27-fabrika", tur: "tanitim", baslik: "Fabrika: üretim hattı durmasın", tohum: 27, ton: 1, surum: 2,
    sahneler: [
      { tip: "karakter", avatar: { sac: "kisa", ten: "esmer", sacRenk: "#1F1712", giysi: "#3D4F5C", yaka: "yelek", sakal: true, ruh: "dertli" },
        ad: "Serkan", rol: "Fabrika satın alma sorumlusu", ikon: "box", metin: "Sünger bitti, *hat bekliyor.*" },
      ek("listeler-firma", "Hattın listesini *tek tıkla* sepete ekleyin.", { bolge: HESAP,
        vurgu: [{ hedef: ["Üretim Hattı Standart Set", "5 ürün · Oluşturulma 22.08.2026"], not: "Firma listesi şirketteki herkese açıktır" }],
        tikla: { hedef: "Sepete Ekle#2", sonuc: "Liste sepete eklendi" },
        dikey: { tip: "telefon", ekran: "m-listeler",
          vurgu: [{ hedef: ["Üretim Hattı Standart Set", "5 ürün · Oluşturulma 22.08.2026"], not: "Firma listesi şirketteki herkese açıktır" }],
          tikla: { hedef: "Sepete Ekle#2", sonuc: "Liste sepete eklendi" } } }),
      tel("m-onaylarim", "Üretimden gelen siparişi *telefondan* onaylayın.", {
        vurgu: [{ hedef: "~Departman: Üretim", not: "Siparişi açan departman kartta yazar" }],
        tikla: { hedef: "Onayla#2", sonuc: "Sipariş onaylandı" } }),
      kapanis("Hattın ihtiyacını *tek listeden* karşılayın."),
    ],
  },

  // ── 28 · Rakamlarla (katalog rakamları → panel kuralları → katalog ekranı)
  {
    id: "tanitim-28-rakamlarla", tur: "tanitim", baslik: "Rakamlarla MTS Hijyen B2B", tohum: 28, ton: -1, surum: 2,
    sahneler: [
      { tip: "rakamlar", baslik: "Katalog *tek panelde*",
        kartlar: [{ ikon: "box", deger: 1326, etiket: "ürün" }, { ikon: "list", deger: 7, etiket: "ana kategori" }, { ikon: "tag", deger: 100, sonek: "+", etiket: "marka" }] },
      { tip: "rakamlar", baslik: "Kurallar *panelde yazılı*",
        kartlar: [{ ikon: "percent", deger: 2, onek: "%", etiket: "Havale/EFT ile peşin ödemede indirim" },
          { ikon: "truck", deger: 3500, para: true, ondalik: 0, etiket: "ve üzeri siparişte kargo ücretsiz" },
          { ikon: "bolt", deger: 100, sonek: "satır", etiket: "hızlı siparişte tek seferde" }] },
      ek("katalog", "Tüm ürünleri *tek katalogda* süzün.", { bolge: B(283, 190, 1360, 700), bolgeD: B(283, 300, 560, 620),
        vurgu: [{ hedef: ["Kağıt Ürünleri 75", "Atık Yönetimi & Ortam Bakımı 187"], not: "Her kategorinin ürün sayısı yanında yazar" },
          { hedef: ["Koleston 104", "+ 99 marka daha"], not: "Marka filtresi aramayı daraltır" }] }),
      kapanis("Hijyen ihtiyacınızı *tek panelden* alın."),
    ],
  },

  // ── 29 · Bir satın almacının günü (saat damgalı sahneler: 09:00 özet, 10:00 hızlı sipariş, 12:30 onay, 15:00 kargo)
  {
    id: "tanitim-29-bir-gun", tur: "tanitim", baslik: "Bir satın almacının günü", tohum: 29, ton: 2, surum: 2,
    sahneler: [
      { tip: "karakter", avatar: { sac: "uzun", ten: "bugday", sacRenk: "#4A2E1F", giysi: "#0B5677", yaka: "gomlek", ruh: "notr" },
        ad: "Derya", rol: "Satın alma sorumlusu", ikon: "calendar", metin: "Bugün *dört işim* var.", sure: 3.5 },
      ek("ozet", "Sabah *onay bekleyenlere* bakın.", { saat: "09:00", bolge: HESAP,
        vurgu: [{ hedef: ["Onay bekleyen", "Şimdi incele →"], not: "Onayınızı bekleyen siparişler özette sayılır" }],
        dikey: { tip: "telefon", ekran: "m-ozet", saat: "09:00",
          vurgu: [{ hedef: ["Onay bekleyen", "Şimdi incele →"], not: "Onayınızı bekleyen siparişler özette sayılır" }] } }),
      ek("hizli", "Ürün kodunu yazıp *sepete* ekleyin.", { saat: "10:00", bolge: HESAP,
        yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" },
        tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" },
        dikey: { tip: "telefon", ekran: "m-hizli", saat: "10:00",
          yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" },
          tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" } } }),
      tel("m-onaylarim", "Öğle arasında *telefondan* onaylayın.", { saat: "12:30",
        tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } }),
      ek("siparis-sevkiyat", "Öğleden sonra *kargoyu* izleyin.", { saat: "15:00", bolge: HESAP,
        vurgu: [{ hedef: "Sevkiyatta", not: "Siparişin durumu sayfanın başında yazar" },
          { hedef: "[]Sıradaki adım", not: "Takip bilgisi kargo bölümünde yer alır" }],
        dikey: { tip: "telefon", ekran: "m-siparis-sevkiyat", saat: "15:00",
          vurgu: [{ hedef: "Sevkiyatta", not: "Siparişin durumu sayfanın başında yazar" },
            { hedef: ["Sıradaki adım", "Sipariş kargoda. Takip için kargo bölümüne bakın."], not: "Takip bilgisi kargo bölümünde yer alır" }] } }),
      kapanis("Günün işini *tek panelde* bitirin."),
    ],
  },

  // ── 30 · Toplantıdan çıkmadan onaylayın (telefonda onay kartı → tek dokunuş)
  {
    id: "tanitim-30-toplantidan-onay", tur: "tanitim", baslik: "Toplantıdan çıkmadan onaylayın", tohum: 30, ton: -2, surum: 2,
    sahneler: [
      tel("m-onaylarim", "Siparişi *masaya dönmeden* onaylayın.", { saat: "11:20",
        vurgu: [{ hedef: "~Açan: Zeynep Kaya", not: "Siparişi açan kişi ve departmanı kartta yazar" }],
        tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } }),
      kapanis("Satın almayı *bekletmeden* yürütün.", "Panelde deneyin"),
    ],
  },

  // ── 31 · Muhasebe için 3 neden (gündem → faturalar → cari ekstre)
  {
    id: "tanitim-31-muhasebe", tur: "tanitim", baslik: "Muhasebe için 3 neden", tohum: 31, ton: 0, surum: 2,
    sahneler: [
      { tip: "gundem", ust: "Muhasebe ekibi için", baslik: "*3 neden*", ikon: "invoice",
        maddeler: ["Faturalar panele otomatik gelir", "Fatura ve sipariş eşleşir", "Bakiye vadeye göre ayrılır"] },
      ek("faturalar", "Her fatura *siparişiyle* eşleşir.", { bolge: B(560, 290, 880, 390),
        vurgu: [{ hedef: ["Fatura No", "MTSD2026000001"], not: "e-Faturalar bu listeye otomatik düşer" },
          { hedef: ["MTSD2026000003", "MTS-2026-0016"], not: "Faturanın yanında sipariş numarası yazar" }],
        dikey: { tip: "telefon", ekran: "m-faturalar",
          vurgu: [{ hedef: ["MTSD2026000003", "10.09.2026"], not: "e-Faturalar bu listeye otomatik düşer" },
            { hedef: ["MTSD2026000003", "MTS-2026-0016"], not: "Faturanın yanında sipariş numarası yazar" }] } }),
      // Dikeyde m-ekstre yerine masaüstü dar kırpım: mobil çekimde Sadakat Birikim şeridinin yazıları üst üste biniyor (panel hatası)
      ek("ekstre", "Bakiyeyi *vadesine göre* görün.", { bolge: B(555, 290, 1095, 485), bolgeD: B(700, 372, 460, 460),
        vurgu: [{ hedef: "[]0–30 gün (Vade 30 gün)", not: "Açık bakiye vade aralıklarına bölünür" },
          { hedef: ["Vade Tarihi", "05.11.2026"], not: "Her siparişin vade tarihi satırında yazar" }] }),
      kapanis("Faturayı ve bakiyeyi *tek yerde* izleyin."),
    ],
  },

  // ── 32 · Ay sonu: önce / sonra (karşılaştırma → Excel'e Aktar)
  {
    id: "tanitim-32-ay-sonu", tur: "tanitim", baslik: "Ay sonu: önce / sonra", tohum: 32, ton: 3, surum: 2,
    sahneler: [
      { tip: "karsilastir", baslik: "Sipariş raporu *nasıl hazırlanır?*", once: "Elle", sonra: "Panelde",
        sol: ["Siparişler e-postalardan toplanır", "Tablo elle doldurulur", "Toplamlar tek tek kontrol edilir"],
        sag: ["Tüm siparişler tek listede durur", "Durum ve tarihe göre süzülür", "Liste Excel'e aktarılır"] },
      ek("siparisler", "Sipariş listesini *Excel'e* aktarın.", { bolge: HESAP,
        vurgu: [{ hedef: ["Hızlı:", "Teslim"], not: "Hızlı filtre listeyi duruma göre daraltır" }],
        tikla: { hedef: "Excel'e Aktar", sonuc: "Liste Excel'e aktarıldı" },
        dikey: { tip: "telefon", ekran: "m-siparisler",
          vurgu: [{ hedef: ["Hızlı:", "Teslim"], not: "Hızlı filtre listeyi duruma göre daraltır" }],
          tikla: { hedef: "Excel'e Aktar", sonuc: "Liste Excel'e aktarıldı" } } }),
      kapanis("Raporunuzu *panelden* alın.", "Panelde deneyin"),
    ],
  },

  // ── 33 · Ödemeyi siz seçin (üç yol → ürün sayfasındaki ödeme kutusu)
  {
    id: "tanitim-33-odeme", tur: "tanitim", baslik: "Ödemeyi siz seçin", tohum: 33, ton: -3, surum: 2,
    sahneler: [
      { tip: "akis", baslik: "Siparişi *üç yoldan* ödeyin.",
        adimlar: [["wallet", "Cari hesap", "Vadeli ödeme"], ["shield", "Kredi kartı", "3D Secure ile"], ["percent", "Havale/EFT", "Peşin ödemede %2 iskonto"]] },
      ek("urun-alt", "Ödeme yolları *ürün sayfasında* yazar.", { bolge: B(820, 110, 830, 240), bolgeD: B(1300, 195, 345, 150),
        vurgu: [{ hedef: ["Cari hesap", "Havale/EFT (peşin %2 iskonto)"], not: "Ödeme yolunu siparişe göre siz seçersiniz" },
          { hedef: "Havale/EFT (peşin %2 iskonto)", not: "Peşin ödemede net tutardan %2 düşülür" }] }),
      kapanis("Her siparişte *size uyanı* kullanın."),
    ],
  },
];
