// 2026-10-09 serisi · Tanıtım 27–33: rol, rakam, günlük akış (surum 3 kurgusu).
// Kurgu v3: kanca (≤ 3 sn; kelime / soru / dertli karakter) → 2 gerçek panel anı → kanıt (kural rakamı ya da aynı kişinin
// mutlu dönüşü, rozetli) → kısa kapanış (4,5 sn). Kancalar dosya içinde değişir: karakter 27, 29, 32 · kelime 28, 30 · soru 31, 33.
// Metin kuralları: kısa, düz cümle, fiil sonda; *yıldızlı* kelimeler sarı. Rakamlar ve etiketler bugünkü element haritalarından okundu:
//   katalog: "1326 ürün", 7 kategori (75+328+149+63+300+224+187 = 1326), marka filtresi 6 + "+ 99 marka daha" ("Genel Markalar" dahil; videoda "100+")
//   kampanyalar: "Peşin Ödeme %2 İndirim" (Havale/EFT, net tutardan), "₺3.500,00 ve üzeri siparişlerde kargo ücreti uygulanmaz."
//   urun-alt: "Cari hesap", "Kredi kartı (3D Secure)", "Havale/EFT (peşin %2 iskonto)" · siparis-odeme özetinde "Havale İndirimi" satırı
//   ekstre: vade aralıkları "0–30 gün", "31–60 gün", "60+ gün"
// Demo hesabın tutarları (harcama, bakiye, limit) fayda gibi sunulmaz. Kayıt değiştiren tıklamalar (Onayla, Sepete Ekle, Excel'e Aktar, Kopyala) yalnız canlandırılır.
const B = (x, y, w, h) => ({ x, y, w, h });
const ek = (ekran, metin, ayar) => ({ tip: "ekran", ekran, metin, ...ayar });
const tel = (ekran, metin, ayar) => ({ tip: "telefon", ekran, metin, ...ayar });
const kapanis = (slogan, cta = "Kurumsal hesap açın") => ({ tip: "kapanis", slogan, cta });
// Kişi hikâyesi: aynı kişi başta dertli (kanca, 3 sn), sonda mutlu ve rozetli döner (aynı avatar, ad, rol, ikon)
const kisi = (k) => ({
  dertli: (metin) => ({ tip: "karakter", avatar: { ...k.avatar, ruh: "dertli" }, ad: k.ad, rol: k.rol, ikon: k.ikon, metin, sure: 3 }),
  mutlu: (metin, sure) => ({ tip: "karakter", avatar: { ...k.avatar, ruh: "mutlu" }, ad: k.ad, rol: k.rol, ikon: k.ikon, metin, rozet: true, ...(sure ? { sure } : {}) }),
});
// Hesap sayfaları: içerik alanı (sol menü dışarıda)
const HESAP = B(555, 185, 1095, 485);

const SERKAN = kisi({ avatar: { sac: "kisa", ten: "esmer", sacRenk: "#1F1712", giysi: "#3D4F5C", yaka: "yelek", sakal: true }, ad: "Serkan", rol: "Fabrika satın alma sorumlusu", ikon: "box" });
const DERYA = kisi({ avatar: { sac: "uzun", ten: "bugday", sacRenk: "#4A2E1F", giysi: "#0B5677", yaka: "gomlek" }, ad: "Derya", rol: "Satın alma sorumlusu", ikon: "calendar" });
const SELIN = kisi({ avatar: { sac: "kivircik", ten: "acik", sacRenk: "#2B1B12", giysi: "#7A3E5C", yaka: "gomlek", gozluk: true }, ad: "Selin", rol: "Satın alma uzmanı", ikon: "table" });

export default [
  // ── 27 · Fabrika (dertli Serkan → firma listesi sepete → telefondan onay → Serkan mutlu → kapanış)
  {
    id: "tanitim-27-fabrika", tur: "tanitim", baslik: "Fabrika: üretim hattı durmasın", tohum: 27, ton: 1, surum: 3,
    sahneler: [
      SERKAN.dertli("Sünger bitti, *hat bekliyor.*"),
      ek("listeler-firma", "Hattın listesini *tek tıkla* sepete ekleyin.", { bolge: HESAP, ortu: ["Can Çatma"],
        vurgu: [{ hedef: ["Üretim Hattı Standart Set", "5 ürün · Oluşturulma 22.08.2026"], not: "Firma listesi şirket genelinde görünür." }],
        tikla: { hedef: "Sepete Ekle#2", sonuc: "Liste sepete eklendi" },
        dikey: { tip: "telefon", ekran: "m-listeler",
          vurgu: [{ hedef: ["Üretim Hattı Standart Set", "5 ürün · Oluşturulma 22.08.2026"], not: "Firma listesi şirket genelinde görünür." }],
          tikla: { hedef: "Sepete Ekle#2", sonuc: "Liste sepete eklendi" } } }),
      tel("m-onaylarim", "Üretimden gelen siparişi *telefondan* onaylayın.", {
        vurgu: [{ hedef: "~Departman: Üretim", not: "Siparişi açan departman kartta yazar." }],
        tikla: { hedef: "Onayla#2", sonuc: "Sipariş onaylandı" } }),
      SERKAN.mutlu("Hattın listesini artık *tek tıkla* ekliyorum.", 4.5),
      kapanis("Hattın ihtiyacını *tek listeden* karşılayın."),
    ],
  },

  // ── 28 · Rakamlarla (kelime: 1.326 ürün → katalog filtreleri → Kampanyalar kuralları → rakam kartları → kapanış)
  {
    id: "tanitim-28-rakamlarla", tur: "tanitim", baslik: "Rakamlarla MTS Hijyen B2B", tohum: 28, ton: -1, surum: 3,
    sahneler: [
      { tip: "kelime", ust: "Rakamlarla", kelimeler: ["1.326 ürün."], son: "*Tek katalogda* durur.", sure: 3 },
      ek("katalog", "Ürünleri *kategori ve markayla* süzün.", { bolge: B(283, 190, 1360, 700), bolgeD: B(283, 300, 560, 620),
        vurgu: [{ hedef: ["Kağıt Ürünleri 75", "Atık Yönetimi & Ortam Bakımı 187"], not: "Her kategorinin ürün sayısı yanında yazar." },
          { hedef: ["Koleston 104", "+ 99 marka daha"], not: "Marka filtresi aramayı daraltır." }] }),
      // Kurallar kartlarda yazar; not etiketi tekrarlamaz, kuralın nasıl işlediğini söyler ("₺3.500,00 ve üzeri": "ulaşınca")
      ek("kampanyalar", "Kurallar *Kampanyalar* sayfasında yazar.", { bolge: B(270, 190, 1380, 610),
        vurgu: [{ hedef: ["Peşin Ödeme %2 İndirim", "~Havale/EFT ile ödediğiniz"], not: "İndirim net tutardan otomatik düşülür." },
          { hedef: ["Ücretsiz Kargo", "~₺3.500,00 ve üzeri"], not: "Sipariş bu tutara ulaşınca kargo ücretsizdir." }],
        dikey: { tip: "telefon", ekran: "m-kampanyalar",
          vurgu: [{ hedef: ["Peşin Ödeme %2 İndirim", "~Havale/EFT ile ödediğiniz"], not: "İndirim net tutardan otomatik düşülür." },
            { hedef: ["Ücretsiz Kargo", "~₺3.500,00 ve üzeri"], not: "Sipariş bu tutara ulaşınca kargo ücretsizdir." }] } }),
      { tip: "rakamlar", baslik: "Her rakam *panelde* yazar.",
        kartlar: [{ ikon: "list", deger: 7, etiket: "ana kategori" }, { ikon: "tag", deger: 100, sonek: "+", etiket: "marka" },
          { ikon: "percent", deger: 2, onek: "%", etiket: "peşin ödemede indirim" },
          { ikon: "truck", deger: 3500, para: true, ondalik: 0, etiket: "ve üzeri siparişte kargo ücretsiz" }] },
      kapanis("Hijyen ihtiyacınızı *tek panelden* alın."),
    ],
  },

  // ── 29 · Bir satın almacının günü (dertli Derya → 09:00 özet, 10:00 hızlı sipariş, 12:30 onay, 15:00 kargo → Derya mutlu → kapanış)
  {
    id: "tanitim-29-bir-gun", tur: "tanitim", baslik: "Bir satın almacının günü", tohum: 29, ton: 2, surum: 3,
    sahneler: [
      DERYA.dertli("İşler çok, *zaman az.*"),
      ek("ozet", "Sabah *onay bekleyenlere* bakın.", { saat: "09:00", bolge: HESAP,
        vurgu: [{ hedef: ["Onay bekleyen", "Şimdi incele →"], not: "Bekleyen siparişlerin sayısı özette görünür." }],
        dikey: { tip: "telefon", ekran: "m-ozet", saat: "09:00",
          vurgu: [{ hedef: ["Onay bekleyen", "Şimdi incele →"], not: "Bekleyen siparişlerin sayısı özette görünür." }] } }),
      // Yazma kamerası sol menüye kayabilir: menüdeki hesap sahibinin adı gri bantla kapatılır (tanitim-36 ile aynı)
      ek("hizli", "Ürün kodunu yazıp *sepete* ekleyin.", { saat: "10:00", bolge: HESAP, ortu: ["Can Çatma"],
        yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" },
        tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" },
        dikey: { tip: "telefon", ekran: "m-hizli", saat: "10:00",
          yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" },
          tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" } } }),
      tel("m-onaylarim", "Öğle arasında *telefondan* onaylayın.", { saat: "12:30",
        tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } }),
      ek("siparis-sevkiyat", "Öğleden sonra *kargoyu* izleyin.", { saat: "15:00", bolge: HESAP,
        vurgu: [{ hedef: "Sevkiyatta", not: "Siparişin durumu sayfanın başında yazar." }],
        dikey: { tip: "telefon", ekran: "m-siparis-sevkiyat", saat: "15:00",
          vurgu: [{ hedef: "Sevkiyatta", not: "Siparişin durumu sayfanın başında yazar." }] } }),
      DERYA.mutlu("Dört işi de *tek panelde* bitirdim.", 4),
      kapanis("Günün işini *tek panelde* bitirin."),
    ],
  },

  // ── 30 · Toplantıdan çıkmadan onaylayın (15 sn: kelime → telefonda onay kartı, kanıt notta → kapanış)
  {
    id: "tanitim-30-toplantidan-onay", tur: "tanitim", baslik: "Toplantıdan çıkmadan onaylayın", tohum: 30, ton: -2, surum: 3,
    sahneler: [
      { tip: "kelime", ust: "Saat 11:20", kelimeler: ["Toplantı."], son: "Sipariş *onay* bekliyor.", sure: 3 },
      // Kanıt notta: kartta tutar ("Sipariş tutarı"), açan kişi ve "Onay seviyesi · Seviye 1" yazar
      tel("m-onaylarim", "Siparişi *masaya dönmeden* onaylayın.", { saat: "11:20",
        vurgu: [{ hedef: ["MTS-2026-0026", "~Açan: Zeynep Kaya", "Seviye 1"], not: "Tutar, açan kişi ve onay seviyesi kartta yazar." }],
        tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" } }),
      kapanis("Satın almayı *bekletmeden* yürütün.", "Panelde deneyin"),
    ],
  },

  // ── 31 · Muhasebe için 3 neden (soru → faturalar → cari ekstre → kural rakamları → kapanış)
  {
    id: "tanitim-31-muhasebe", tur: "tanitim", baslik: "Muhasebe için 3 neden", tohum: 31, ton: 0, surum: 3,
    sahneler: [
      { tip: "soru", metin: "Bu fatura *hangi siparişe* ait?", sure: 3,
        cipler: [["invoice", "Fatura"], ["list", "Sipariş"], ["calendar", "Vade"]] },
      // Yatayda vurgular son satırda: kamera yukarı kayıp sayfanın "Logo ERP üzerinden…" alt başlığını göstermesin; PDF sütunu kırpım dışında
      ek("faturalar", "Her fatura *siparişiyle* eşleşir.", { bolge: B(560, 290, 880, 390),
        vurgu: [{ hedef: ["MTSD2026000001", "01.06.2026"], not: "e-Faturalar bu listeye otomatik düşer." },
          { hedef: ["MTSD2026000001", "MTS-2026-0008"], not: "Faturanın yanında sipariş numarası yazar." }],
        dikey: { tip: "telefon", ekran: "m-faturalar",
          // Kısa sayfa: kamera alt başlığı kadraj dışına itemez; yakın çekim ise "PDF yakında yüklenecek" satırını büyütür, bu yüzden normal yakınlık
          vurgu: [{ hedef: "e-Fatura", not: "e-Faturalar bu listeye otomatik düşer." },
            { hedef: ["MTSD2026000003", "MTS-2026-0016"], not: "Faturanın yanında sipariş numarası yazar." }] } }),
      // Panel verisi: "Açık Bakiye ₺15.405,55" ile "0–30 gün ₺22.739,84" birbirini tutmuyor. Kamera Açık Bakiye tutarını dışarıda bırakır, not "açık bakiye bölünür" demez.
      // Dikey m-ekstre: Sadakat Birikim şeridinin yazıları üst üste biniyor; basY ve yakın çekim şeridi kadraj dışında tutar.
      ek("ekstre", "Bakiyeyi *vadesine göre* görün.", { bolge: B(700, 290, 950, 420),
        vurgu: [{ hedef: ["[]0–30 gün (Vade 30 gün)", "[]60+ gün"], not: "Borçlar vade aralıklarına göre ayrılır." },
          { hedef: ["04.11.2026", "₺1.855,68"], not: "Her siparişin vade tarihi satırında yazar." }],
        dikey: { tip: "telefon", ekran: "m-ekstre", basY: 480,
          vurgu: [{ hedef: ["0–30 gün (Vade 30 gün)", "₺22.739,84"], not: "Borçlar vade aralıklarına göre ayrılır.", zoom: 2.3 },
            { hedef: B(14, 682, 115, 88), not: "Her siparişin vade tarihi kartında yazar.", zoom: 1.6 }] } }),
      // Kanıt: panelin kuralları (ekstredeki 3 vade aralığı, kampanyalardaki Havale/EFT peşin %2); demo tutarı yok
      { tip: "rakamlar", baslik: "Kurallar *panelde* yazar.",
        kartlar: [{ ikon: "calendar", deger: 3, etiket: "vade aralığında bakiye" },
          { ikon: "percent", deger: 2, onek: "%", etiket: "Havale/EFT ile peşin ödemede indirim" }] },
      kapanis("Faturayı ve bakiyeyi *tek yerde* izleyin."),
    ],
  },

  // ── 32 · Ay sonu: önce / sonra (dertli Selin → sipariş listesi Excel'e → aylık harcama grafiği → Selin mutlu → kapanış)
  {
    id: "tanitim-32-ay-sonu", tur: "tanitim", baslik: "Ay sonu: önce / sonra", tohum: 32, ton: 3, surum: 3,
    sahneler: [
      SELIN.dertli("Ay sonu tabloyu *elle dolduruyorum.*"),
      ek("siparisler", "Sipariş listesini *Excel'e* aktarın.", { bolge: HESAP,
        vurgu: [{ hedef: ["Hızlı:", "Teslim"], not: "Hızlı filtre listeyi duruma göre daraltır." }],
        tikla: { hedef: "Excel'e Aktar", sonuc: "Liste Excel'e aktarıldı" },
        dikey: { tip: "telefon", ekran: "m-siparisler",
          vurgu: [{ hedef: ["Hızlı:", "Teslim"], not: "Hızlı filtre listeyi duruma göre daraltır." }],
          tikla: { hedef: "Excel'e Aktar", sonuc: "Liste Excel'e aktarıldı" } } }),
      // Grafikte tutar yazmaz (sütunlar ve ay adları); kadraj özet kartlarının tutarlarını dışarıda bırakır
      ek("analitik", "Aylık harcamayı *grafikte* görün.", { bolge: B(560, 375, 1082, 478),
        vurgu: [{ hedef: B(583, 400, 1036, 170), not: "Son 6 ayın harcaması aylara göre ayrılır." }],
        dikey: { tip: "telefon", ekran: "m-analitik",
          vurgu: [{ hedef: ["Aylık Harcama Trendi", "Eki"], not: "Son 6 ayın harcaması aylara göre ayrılır." }] } }),
      SELIN.mutlu("Ay sonu listesini *Excel'e aktarıyorum.*"),
      kapanis("Raporunuzu *panelden* alın.", "Panelde deneyin"),
    ],
  },

  // ── 33 · Ödemeyi siz seçin (soru → ürün sayfasındaki ödeme kutusu → sipariş özetinde Havale İndirimi → %2 sayacı → kapanış)
  {
    id: "tanitim-33-odeme", tur: "tanitim", baslik: "Ödemeyi siz seçin", tohum: 33, ton: -3, surum: 3,
    sahneler: [
      { tip: "soru", metin: "Siparişi *nasıl* ödersiniz?", sure: 3,
        cipler: [["wallet", "Cari hesap"], ["shield", "Kredi kartı"], ["percent", "Havale/EFT"]] },
      ek("urun-alt", "Ödeme yolları *ürün sayfasında* yazar.", { bolge: B(820, 110, 830, 240), bolgeD: B(1300, 195, 345, 150),
        vurgu: [{ hedef: ["Cari hesap", "Havale/EFT (peşin %2 iskonto)"], not: "Ödeme yolunu siparişe göre siz seçersiniz." }] }),
      // Kırpım: sipariş kalemlerinin sayı sütunları + özet kutusu (x 918: ürün adları kesik görünmesin; üstteki kullanıcı adı ve
      // "Kart doğrulamasında sorun" satırı dışarıda). Kopyala: havale açıklamasına yazılacak sipariş numarası.
      // Dikey: telefonda sayfa başındaki "06.10.2026 · Can Çatma" satırı gri bantla kapatılır; banka hesapları Kopyala'nın altında kalır.
      ek("siparis-odeme", "Havale indirimi *sipariş özetinde* düşer.", { bolge: B(918, 640, 732, 324),
        vurgu: [{ hedef: ["Havale İndirimi", "-₺45,81"], not: "Peşin indirim özette ayrı satırda yazar." }],
        tikla: { hedef: "Kopyala", sonuc: "Sipariş numarası kopyalandı" },
        dikey: { tip: "telefon", ekran: "m-siparis-odeme", ortu: ["~06.10.2026 · Can Çatma"],
          vurgu: [{ hedef: ["Havale İndirimi", "-₺45,81"], not: "Peşin indirim özette ayrı satırda yazar." }],
          tikla: { hedef: "Kopyala", sonuc: "Sipariş numarası kopyalandı", zoom: 1.6 } } }),
      { tip: "sayac", baslik: "Havale/EFT ile *peşin* ödeyin.", deger: 2, onek: "%", alt: "Net tutardan indirim düşülür." },
      kapanis("Her siparişte *size uyanı* kullanın."),
    ],
  },
];
