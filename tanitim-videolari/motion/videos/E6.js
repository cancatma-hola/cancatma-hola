// Eğitim 06 · Onaylarım ve Onay Kuralları (hedef ≈ 90 sn)
const VIDEO = {
  id: 'E6',
  music: 'egitim',
  tail: 1.9,
  pace: 1.25,
  scenes: [
    { type: 'title', d: 4.5, eyebrow: 'Eğitim 06 · 5 adım', size: 150, y: 330,
      lines: [{ t: 'Onaylarım ve' }, { t: 'onay kuralları.', accent: true }],
      vo: [{ id: 'e6-01', text: 'Bu eğitimde ekibinizden gelen siparişleri onaylamayı ve onay kurallarını kurmayı öğreneceksiniz.' }] },

    { type: 'screen', shot: 'onaylarim', d: 7, step: { n: 1, of: 5, ttl: 'Onayınızı bekleyenler' },
      cam: [{ at: 0.8, rect: { x: 565, y: 190, w: 1072, h: 690 }, pad: 0 }],
      focus: [{ at: 1.5, rect: { x: 565, y: 298, w: 1072, h: 232 }, label: '2 sipariş bekliyor', pad: 2 }],
      vo: [{ id: 'e6-02', text: 'Ekibinizin açtığı ve onayınızı bekleyen siparişler Onaylarım ekranında listelenir.', at: 1.0 }] },

    { type: 'screen', shot: 'onaylarim', d: 7.5, step: { n: 2, of: 5, ttl: 'Kartı inceleyin' },
      cam: [{ at: 0.6, rect: { x: 565, y: 298, w: 1072, h: 232 }, pad: 30 }],
      focus: [{ at: 1.3, end: 3.3, rect: { x: 583, y: 316, w: 330, h: 56 }, label: 'Açan · tarih · departman', pad: 6 },
              { at: 3.3, end: 5.0, rect: { x: 1540, y: 316, w: 82, h: 32 }, label: 'Onay seviyesi', pad: 6 },
              { at: 5.0, rect: { x: 583, y: 382, w: 1036, h: 76 }, label: 'Kalemler', pad: 4 }],
      vo: [{ id: 'e6-03', text: 'Kartta siparişi kimin açtığını, departmanı, onay seviyesini ve tüm kalemleri görürsünüz.', at: 1.0 }] },

    { type: 'screen', shot: 'onaylarim', d: 9, step: { n: 3, of: 5, ttl: 'Onaylayın ya da revizeye gönderin' },
      cam: [{ at: 0.6, rect: { x: 565, y: 298, w: 1072, h: 232 }, pad: 30 }],
      focus: [{ at: 4.6, rect: { x: 673, y: 476, w: 175, h: 36 }, label: 'Revize için geri yolla', pad: 6 }],
      cursor: [{ at: 2.0, key: 'onayla', click: true }, { at: 4.4, key: 'revize' }], cursorHide: 6.5,
      stamp: [{ at: 2.15, rect: { x: 1150, y: 380, w: 300, h: 80 }, text: 'Onaylandı', size: 46 }],
      toast: [{ at: 2.4, end: 4.3, title: 'Sipariş onaylandı', sub: 'MTS-2026-0026 · MTS’ye iletildi' }],
      vo: [{ id: 'e6-04', text: 'Uygunsa Onayla’ya basın; sipariş MTS Hijyen’e iletilir.', at: 1.0 },
           { id: 'e6-05', text: 'Değişiklik gerekiyorsa, Revize için Geri Yolla ile siparişi açan kişiye geri gönderin.' }] },

    { type: 'screen', shot: 'onay-kurallari', d: 7, step: { n: 4, of: 5, ttl: 'Onay kuralları' },
      cam: [{ at: 0.8, rect: { x: 565, y: 190, w: 1072, h: 440 }, pad: 10 }],
      focus: [{ at: 1.5, end: 4.2, rect: { x: 565, y: 322, w: 1072, h: 300 }, label: 'Tutar eşikleri ve onay zinciri', pad: 4 },
              { at: 4.2, key: 'yeni', label: 'Yeni kural', pad: 6 }],
      vo: [{ id: 'e6-06', text: 'Onay Kuralları ekranında, hangi siparişin kimin onayına düşeceğini siz belirlersiniz.', at: 1.0 }] },

    { type: 'screen', shot: 'onay-kural-yeni', d: 12, step: { n: 5, of: 5, ttl: 'Yeni kural oluşturun' },
      cam: [{ at: 0.6, rect: { x: 570, y: 280, w: 640, h: 670 }, pad: 20 }],
      typing: [{ at: 1.4, rect: { x: 592, y: 316, w: 580, h: 30 }, text: '20.000 TL üzeri · Üretim', size: 14, dur: 1.2 },
               { at: 2.9, rect: { x: 592, y: 392, w: 270, h: 30 }, text: '20000', size: 14, dur: 0.5 },
               { at: 3.8, rect: { x: 592, y: 466, w: 560, h: 30 }, text: 'Üretim', size: 14, dur: 0.4 },
               { at: 4.8, rect: { x: 592, y: 608, w: 560, h: 30 }, text: 'Ayşe Yılmaz · Genel Müdür', size: 14, dur: 0.9 },
               { at: 6.0, rect: { x: 592, y: 678, w: 560, h: 30 }, text: 'Can Çatma · Cari Sahibi', size: 14, dur: 0.9 }],
      focus: [{ at: 1.2, end: 4.6, rect: { x: 578, y: 290, w: 614, h: 212 }, label: 'Ad · tutar · departman', pad: 6 },
              { at: 4.6, end: 7.6, rect: { x: 578, y: 556, w: 614, h: 160 }, label: 'Onaylayıcı zinciri (3 seviyeye kadar)', pad: 6 }],
      cursor: [{ at: 1.3, pt: { x: 760, y: 331 }, click: true }, { at: 4.7, pt: { x: 800, y: 623 }, click: true }, { at: 8.4, pt: { x: 650, y: 918 }, click: true }],
      toast: [{ at: 8.7, title: 'Kural oluşturuldu', sub: '20.000 TL üzeri · Üretim · 2 seviye' }],
      vo: [{ id: 'e6-07', text: 'Yeni kural için ad verin, tutar aralığını ve departmanı seçin.', at: 1.0 },
           { id: 'e6-08', text: 'Ardından onaylayıcı zincirini belirleyin; üç seviyeye kadar onaylayıcı tanımlayabilirsiniz.' }] },

    { type: 'screen', shot: 'ozet-alt', d: 6, head: { eb: 'Otomatik onay', ttl: 'Eşiğin altı beklemez' },
      cam: [{ at: 0.8, rect: { x: 1284, y: 145, w: 353, h: 310 }, pad: 30 }],
      focus: [{ at: 1.4, rect: { x: 1296, y: 392, w: 330, h: 46 }, label: 'Otomatik onaylandı', pad: 4 }],
      vo: [{ id: 'e6-09', text: 'Kural eşiğinin altında kalan siparişler otomatik onaylanır; kimse beklemez.', at: 1.0 }] },

    { type: 'title', d: 5.5, tip: true, eyebrow: 'İpucu', size: 104, y: 380,
      lines: [{ t: 'Kademeli kurallarla' }, { t: 'büyük tutara ek onay.', accent: true }],
      vo: [{ id: 'e6-10', text: 'İpucu: kademeli kurallar kurarak büyük tutarlı siparişlere ek onaylayıcı ekleyin.' }] },

    { type: 'end', d: 4, next: 'Kullanıcılar, yetkiler ve bütçeler',
      vo: [{ id: 'e6-11', text: 'Sıradaki eğitimde kullanıcıları, yetkileri ve departman bütçelerini göreceğiz.' }] },
  ],
};
if (typeof module !== 'undefined') module.exports = VIDEO;
