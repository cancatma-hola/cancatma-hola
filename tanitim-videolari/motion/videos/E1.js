// Eğitim 01 · Panele Giriş ve Özet Ekranı (hedef ≈ 60 sn)
const VIDEO = {
  id: 'E1',
  music: 'egitim',
  tail: 1.3,
  pace: 1.1,
  scenes: [
    { type: 'title', d: 4.5, eyebrow: 'Eğitim 01 · 5 adım', size: 150, y: 330,
      lines: [{ t: 'Panele giriş' }, { t: 've özet ekranı.', accent: true }],
      vo: [{ id: 'e1-01', text: 'Bu eğitimde panele nasıl giriş yapacağınızı ve özet ekranını tanıyacaksınız.' }] },

    { type: 'explain', d: 7, eyebrow: 'Bu eğitimde', title: ['4 temel konu.'],
      items: [{ icon: 'key', t: 'Giriş', d: 'Kurumsal hesabınızla güvenli giriş.' }, { icon: 'chart', t: 'Özet kartları', d: 'Harcama, bakiye ve limit tek bakışta.' }, { icon: 'bolt', t: 'Hızlı eylemler', d: 'Yeni sipariş ve listeler tek tıkla.' }, { icon: 'bell', t: 'Bildirimler', d: 'Bekleyen işleri kaçırmayın.' }],
      vo: [{ id: 'e1-x', text: 'Dört temel konuya bakacağız: giriş, özet kartları, hızlı eylemler ve bildirimler.', at: 0.9 }] },
    { type: 'screen', shot: 'giris', d: 10, step: { n: 1, of: 5, ttl: 'Kurumsal hesabınızla giriş' },
      cam: [{ at: 1.0, rect: { x: 980, y: 300, w: 460, h: 420 }, pad: 60 }],
      typing: [{ at: 2.0, rect: { x: 1062, y: 416, w: 318, h: 30 }, text: 'satinalma@firmaniz.com.tr', size: 15, dur: 1.4 },
             { at: 3.7, rect: { x: 1062, y: 492, w: 280, h: 28 }, text: '••••••••••', size: 15, dur: 0.7 }],
      focus: [{ at: 1.6, end: 4.6, rect: { x: 1032, y: 390, w: 353, h: 136 }, label: 'E-posta ve şifre', desc: 'Kurumsal hesabınıza tanımlı e-posta ve şifre.' },
              { at: 6.4, rect: { x: 1032, y: 662, w: 353, h: 38 }, label: 'veya Google ile', desc: 'Şifre yazmadan Google hesabınızla giriş.' }],
      cursor: [{ at: 1.9, pt: { x: 1200, y: 431 }, click: true }, { at: 3.6, pt: { x: 1200, y: 506 }, click: true },
               { at: 5.2, pt: { x: 1208, y: 591 }, click: true }],
      vo: [{ id: 'e1-02', text: 'Kurumsal e-posta adresiniz ve şifrenizle giriş yapın.', at: 1.6 },
           { id: 'e1-03', text: 'Dilerseniz Google hesabınızla da tek tıkla devam edebilirsiniz.' }] },

    { type: 'screen', shot: 'ozet', d: 9, step: { n: 2, of: 5, ttl: 'Özet kartları' },
      cam: [{ at: 0.9, rect: { x: 565, y: 182, w: 1072, h: 166 }, pad: 60 }],
      focus: [{ at: 1.8, end: 3.4, rect: { x: 565, y: 182, w: 260, h: 166 }, label: 'Bu ay harcama', desc: 'Bu ayki toplam harcamanız ve geçen aya göre değişim.', pad: 6 },
              { at: 3.4, end: 5.0, rect: { x: 835, y: 182, w: 260, h: 166 }, label: 'Açık bakiye · vade', desc: 'Ödemeniz gereken tutar ve vade süresi.', pad: 6 },
              { at: 5.0, end: 6.6, rect: { x: 1106, y: 182, w: 260, h: 166 }, label: 'Kredi limiti', desc: 'Kullandığınız ve kalan kredi limitiniz.', pad: 6 },
              { at: 6.6, rect: { x: 1377, y: 182, w: 260, h: 166 }, label: 'Onay bekleyen', desc: 'Sizin onayınızı bekleyen sipariş sayısı.', pad: 6 }],
      vo: [{ id: 'e1-04', text: 'Özet ekranında bu ayki harcamanızı, açık bakiyenizi, kredi limiti kullanımınızı ve onay bekleyen siparişlerinizi bir bakışta görürsünüz.', at: 1.6 }] },

    { type: 'screen', shot: 'ozet', d: 7, step: { n: 3, of: 5, ttl: 'Hızlı eylemler' },
      cam: [{ at: 0.6, rect: { x: 565, y: 366, w: 1072, h: 97 }, pad: 90 }],
      focus: [{ at: 1.5, rect: { x: 1287, y: 397, w: 328, h: 34 }, label: 'Yeni sipariş · Şablonlar · Sık listeler', desc: 'En sık kullanılan işlemler tek tıkla.', pad: 8 }],
      cursor: [{ at: 2.6, pt: { x: 1341, y: 414 } }, { at: 3.6, pt: { x: 1457, y: 414 } }, { at: 4.5, pt: { x: 1566, y: 414 } }],
      vo: [{ id: 'e1-05', text: 'Yeni sipariş, şablonlar ve sık kullandığınız listelere buradan tek tıkla ulaşırsınız.', at: 1.4 }] },

    { type: 'screen', shot: 'ozet', d: 7, step: { n: 4, of: 5, ttl: 'Harcama trendi ve kırılım' },
      cam: [{ at: 0.6, rect: { x: 565, y: 481, w: 1072, h: 206 }, pad: 50 }],
      focus: [{ at: 1.5, end: 3.6, rect: { x: 565, y: 481, w: 710, h: 206 }, label: 'Son 12 ay', desc: 'Aylık harcamanızın son bir yıllık seyri.', pad: 4 },
              { at: 3.6, rect: { x: 1289, y: 481, w: 348, h: 206 }, label: 'Kategori kırılımı', desc: 'Harcamanın ürün grubuna göre dağılımı.', pad: 4 }],
      vo: [{ id: 'e1-06', text: 'Aylık harcama trendiniz ve hangi kategoriye ne kadar harcadığınız grafiklerle hazır.', at: 1.4 }] },

    { type: 'screen', shot: 'ozet-alt', d: 7, step: { n: 5, of: 5, ttl: 'Son siparişler ve etkinlik akışı' },
      cam: [{ at: 0.6, rect: { x: 565, y: 145, w: 1072, h: 310 }, pad: 30 }],
      focus: [{ at: 1.5, end: 3.8, rect: { x: 565, y: 145, w: 706, h: 310 }, label: 'Son siparişler', desc: 'En son açılan siparişler ve durumları.', pad: 4 },
              { at: 3.8, rect: { x: 1284, y: 145, w: 353, h: 310 }, label: 'Etkinlik akışı', desc: 'Durum değişiklikleri ve onay istekleri anında burada.', pad: 4 }],
      vo: [{ id: 'e1-07', text: 'Son siparişleriniz ve tüm durum değişiklikleri, etkinlik akışında anlık olarak listelenir.', at: 1.4 }] },

    { type: 'screen', shot: 'ozet', d: 6, head: { eb: 'İpucu', ttl: 'Zil, sizi bekleyen işleri gösterir' },
      cam: [{ at: 0.6, rect: { x: 1380, y: 40, w: 160, h: 60 }, pad: 160 }],
      focus: [{ at: 1.4, rect: { x: 1431, y: 52, w: 36, h: 36 }, label: 'Bildirimler', desc: 'Kırmızı sayı, okunmamış bildirim sayısıdır.', pad: 6 }],
      vo: [{ id: 'e1-08', text: 'İpucu: üst menüdeki zilde görünen kırmızı sayı, sizi bekleyen bildirimleri gösterir.', at: 1.2 }] },

    { type: 'end', d: 4, next: 'Katalogdan sipariş verme',
      vo: [{ id: 'e1-09', text: 'Sıradaki eğitimde katalogdan sipariş vermeyi göreceğiz.' }] },
  ],
};
if (typeof module !== 'undefined') module.exports = VIDEO;
