// Çekim listesi. targets: { anahtar: [metin, kaçıncı, birebir] } → shots/<ad>.json içinde kutular
const scroll = y => async p => { await p.evaluate(y => window.scrollTo(0, y), y); await p.waitForTimeout(600); };

module.exports = [
  // ── Giriş ve vitrin
  { name: 'giris', url: '/tr/giris', guest: true,
    targets: { email: ['E-posta', 0, false], girisBtn: ['Giriş Yap'], google: ['Google ile devam et'] } },
  { name: 'anasayfa', url: '/tr',
    targets: { arama: ['Ara'], kagit: ['Kağıt Ürünleri'], kimya: ['Temizlik Kimyasalları'], ekipman: ['Temizlik Ekipmanları & Makineler'],
      dispenser: ['Dispenser & Aparat Sistemleri'], puan: ['ALTIN'], sepet: ['Sepet'] } },
  { name: 'anasayfa-arama', url: '/tr',
    before: async p => { await p.click('input[placeholder*="SKU"]'); await p.keyboard.type('kağıt havlu', { delay: 60 }); await p.waitForTimeout(2500); },
    targets: { arama: ['Ara'] } },
  { name: 'kategori', url: '/tr/c/kagit-urunleri',
    targets: { baslik: ['Kağıt Ürünleri', 1], filtre: ['Filtreler'], marka: ['Marka'], stok: ['Stok Durumu'], siralama: ['Önerilen'] } },
  { name: 'urun', url: '/tr/p/wanda-soft-extra-automotion-kagit-havlu-4-kg',
    targets: { fiyat: ['₺420,00'], kdv: ['KDV dahil ₺504,00', 0, false], stok: ['Stok: 37 adet', 0, false], sepeteEkle: ['Sepete Ekle'],
      liste: ['Listeye Ekle'], abonelik: ['Aboneliğe Çevir'], toplu: ['Toplu alım için özel fiyat iste →'], puan: ['+4 puan kazanırsın', 0, false],
      kod: ['Ürün Kodu: 555204', 0, false] } },

  // ── Hesap: özet
  { name: 'ozet', url: '/tr/hesap/ozet',
    targets: { harcama: ['BU AY HARCAMA', 0, false], bakiye: ['AÇIK BAKİYE', 0, false], kredi: ['KREDİ LİMİTİ KULLANIMI', 0, false],
      onay: ['ONAY BEKLEYEN', 0, false], hosgeldin: ['Hoş geldiniz, Can', 0, false], yeniSiparis: ['+ Yeni Sipariş'], sablon: ['Şablonlar'],
      sik: ['Sık Listeler'], trend: ['Aylık Harcama Trendi'], kirilim: ['Kategori Kırılımı'], zil: ['2', 0] } },
  { name: 'ozet-alt', url: '/tr/hesap/ozet', before: scroll(560),
    targets: { trend: ['Aylık Harcama Trendi'], kirilim: ['Kategori Kırılımı'], sonSiparis: ['Son Siparişler'], akis: ['Etkinlik Akışı'] } },

  // ── Siparişler
  { name: 'siparisler', url: '/tr/hesap/siparisler',
    targets: { excel: ["Excel'e Aktar"], yeni: ['+ Yeni Sipariş'], durum: ['Tüm Durumlar', 0, false], proje: ['Tüm Projeler', 0, false],
      sayi: ['27 sipariş bulundu', 0, false], r20: ['MTS-2026-0020'] } },
  { name: 'siparis-detay', url: '/tr/hesap/siparisler/cmuwo1euv004b60vgufnvgnaz',
    targets: { no: ['Sipariş MTS-2026-0020'], durum: ['Sipariş Durumu'], sirada: ['Depo personeli ürünleri toplayıp paketliyor.', 0, false],
      kalemler: ['Sipariş Kalemleri'], pdf: ['Yazdır / PDF'], sablon: ['Şablona Kaydet'] } },
  { name: 'siparis-detay-alt', url: '/tr/hesap/siparisler/cmuwo1euv004b60vgufnvgnaz', before: scroll(420),
    targets: { kalemler: ['Sipariş Kalemleri'] } },

  // ── Onay ve kontrol
  { name: 'onaylarim', url: '/tr/hesap/onaylarim',
    targets: { baslik: ['Onayımı Bekleyenler', 1], kart: ['MTS-2026-0026'], acan: ['Açan: Zeynep Kaya', 0, false], seviye: ['Seviye 1'],
      onayla: ['Onayla'], revize: ['Revize için Geri Yolla'] } },
  { name: 'onay-kurallari', url: '/tr/hesap/onay-kurallari',
    targets: { yeni: ['+ Yeni Kural'], k1: ['10.000 TL Üzeri Siparişler'], k2: ['50.000 Tl Üzeri Siparişler'], k3: ['100.000 TL Üzeri Siparişler'] } },
  { name: 'onay-kural-yeni', url: '/tr/hesap/onay-kurallari',
    before: async p => { await p.click('text=+ Yeni Kural'); await p.waitForTimeout(1500); },
    targets: {} },
  { name: 'butce', url: '/tr/hesap/butce',
    targets: { toplam: ['BU AY TOPLAM HARCAMA', 0, false], kredi: ['KREDİ KULLANIMI', 0, false], dept: ['Departman Bütçe Durumu'],
      uretim: ['Üretim'], idari: ['İdari İşler'], limit: ['Kullanıcı Onay Limitleri'] } },
  { name: 'butce-alt', url: '/tr/hesap/butce', before: scroll(380), targets: { limit: ['Kullanıcı Onay Limitleri'] } },
  { name: 'kullanicilar', url: '/tr/hesap/kullanicilar',
    targets: { davet: ['+ Kullanıcı Davet Et'], ayse: ['Ayşe Yılmaz'], zeynep: ['Zeynep Kaya'], elif: ['Elif Arslan'], rol: ['Rol'] } },
  { name: 'departmanlar', url: '/tr/hesap/departmanlar',
    targets: { yeni: ['+ Yeni Departman'], idari: ['İdari İşler'], uretim: ['Üretim'] } },

  // ── Finans ve bildirim
  { name: 'ekstre', url: '/tr/hesap/ekstre',
    targets: { bakiye: ['Açık Bakiye'], sadakat: ['SADAKAT BİRİKİM', 0, false] } },
  { name: 'faturalar', url: '/tr/hesap/faturalar',
    targets: { logo: ['e-Fatura / e-Arşiv kayıtlarınız Logo ERP üzerinden otomatik düzenlenir.'], f1: ['MTSD2026000003'] } },
  { name: 'bildirimler', url: '/tr/hesap/bildirimler',
    targets: { b1: ['Onayınızı bekleyen sipariş var'], b2: ['MTS-2026-0018, Sevkiyatta'] } },
  { name: 'hizli', url: '/tr/hesap/hizli-siparis',
    targets: { satir: ['Satır Ekle'], csv: ['CSV Yapıştır'], dogrula: ['Doğrula'], sepete: ['Sepete Ekle'] } },
];
