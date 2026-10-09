// Video 3 · Kurumsal Kontrol: Onay, Bütçe, Yetki (hedef ≈ 75 sn)
const ORG = {
  root: { role: 'Cari Sahibi', name: 'Can Çatma', note: 'Onay limiti: sınırsız' },
  depts: [{ name: 'Satın Alma', budget: '₺150.000', used: 0.02, users: [['Ayşe Yılmaz', 'Genel Müdür'], ['Elif Arslan', 'Görüntüleyici']] },
          { name: 'Üretim', budget: '₺90.000', used: 0.15, users: [['Mehmet Demir', 'Satınalmacı']] },
          { name: 'İdari İşler', budget: '₺45.000', used: 0.23, users: [['Zeynep Kaya', 'Satınalmacı']] },
          { name: 'Depo ve Lojistik', budget: '₺60.000', used: 0.03, users: [['Burak Şahin', 'Genel Müdür']] }],
};
const VIDEO = {
  id: 'V3',
  music: 'egitim',
  tail: 1.7,
  pace: 1.25,
  scenes: [
    { type: 'org', d: 7, eyebrow: 'Kurumsal kontrol', title: 'Departman, bütçe, yetki.', ...ORG,
      vo: [{ id: 'v3-01', text: 'Birden fazla departman, onlarca kullanıcı… Harcamalar gerçekten kontrol altında mı?', at: 0.6 }] },

    { type: 'explain', d: 7, eyebrow: 'Kurumsal kontrolün', title: ['dört katmanı.'],
      items: [{ icon: 'key', t: 'Rol ve yetki', d: 'Kim ne yapabilir?' }, { icon: 'wallet', t: 'Departman bütçesi', d: 'Kim ne kadar harcar?' }, { icon: 'shield', t: 'Onay kuralları', d: 'Hangi sipariş kime düşer?' }, { icon: 'eye', t: 'Anlık izleme', d: 'Bütçe ve limit, canlı.' }],
      vo: [{ id: 'v3-x', text: 'Kurumsal kontrol dört katmandan oluşur: yetki, bütçe, onay kuralları ve anlık izleme.', at: 0.9 }] },
    { type: 'screen', shot: 'kullanicilar', d: 6.5, head: { eb: 'Kullanıcılar & Yetkiler', ttl: 'Rol, departman, onay limiti' },
      cam: [{ at: 0.8, rect: { x: 565, y: 260, w: 1072, h: 380 }, pad: 20 }],
      focus: [{ at: 1.5, end: 3.6, rect: { x: 990, y: 306, w: 236, h: 280 }, label: 'Rol ve departman', desc: 'Kişinin yetkisi ve bağlı olduğu departman.', pad: 4 },
              { at: 3.6, rect: { x: 1300, y: 306, w: 160, h: 280 }, label: 'Onay limiti', desc: 'Kişinin onaysız verebileceği en yüksek sipariş tutarı.', pad: 4 }],
      vo: [{ id: 'v3-02', text: 'Kullanıcılar ve Yetkiler ekranında her çalışana rol, departman ve onay limiti verin.', at: 1.0 }] },

    { type: 'screen', shot: 'departmanlar', d: 6, head: { eb: 'Departman & Bütçe', ttl: 'Her departmana aylık bütçe' },
      cam: [{ at: 0.8, rect: { x: 565, y: 270, w: 1072, h: 360 }, pad: 20 }],
      focus: [{ at: 1.5, rect: { x: 1112, y: 280, w: 524, h: 140 }, label: 'İdari İşler · ₺10.413 / ₺45.000', desc: 'Bu ay harcanan ve aylık bütçe.', pad: 4 }],
      vo: [{ id: 'v3-03', text: 'Departmanlara aylık bütçe tanımlayın; her sipariş bütçeye anında işlenir.', at: 1.0 }] },

    { type: 'screen', shot: 'onay-kurallari', d: 6, head: { eb: 'Onay Kuralları', ttl: 'Tutar eşiğine göre onay zinciri' },
      cam: [{ at: 0.8, rect: { x: 565, y: 320, w: 1072, h: 300 }, pad: 30 }],
      focus: [{ at: 1.4, rect: { x: 565, y: 322, w: 1072, h: 300 }, label: '10.000 · 50.000 · 100.000 TL üzeri', desc: 'Tutar arttıkça onay zinciri devreye girer.', pad: 4 }],
      vo: [{ id: 'v3-04', text: 'Tutar eşiklerine göre onay zincirini siz belirleyin.', at: 1.0 }] },

    { type: 'org', d: 7.5, eyebrow: 'Onay akışı', title: 'Sipariş, doğru kişiye.', ...ORG,
      flow: { from: 2, at: 2.4, order: 'MTS-2026-0026', amount: '₺1.779,56' },
      vo: [{ id: 'v3-05', text: 'İdari İşler’den gelen sipariş, kurala göre doğrudan onayınıza düşer.', at: 0.8 }] },

    { type: 'screen', shot: 'onaylarim', d: 6, head: { eb: 'Onaylarım', ttl: 'Tek tıkla onay ya da revize' },
      cam: [{ at: 0.8, rect: { x: 565, y: 298, w: 1072, h: 232 }, pad: 40 }],
      cursor: [{ at: 2.0, key: 'revize' }, { at: 3.2, key: 'onayla', click: true }], cursorHide: 5,
      focus: [{ at: 1.2, end: 3.0, rect: { x: 583, y: 476, w: 356, h: 36 }, label: 'Onayla · Revize · Reddet', desc: 'Onaylayın, düzeltme isteyin ya da reddedin.', pad: 6 }],
      stamp: [{ at: 3.35, rect: { x: 1150, y: 380, w: 300, h: 80 }, text: 'Onaylandı', size: 46 }],
      toast: [{ at: 3.6, title: 'Sipariş onaylandı', sub: 'MTS-2026-0026 · ₺1.779,56' }],
      vo: [{ id: 'v3-06', text: 'Tek tıkla onaylayın ya da revize için geri gönderin.', at: 1.0 }] },

    { type: 'screen', shot: 'ozet-alt', d: 5.5, head: { eb: 'Etkinlik akışı', ttl: 'Eşiğin altı: otomatik onay' },
      cam: [{ at: 0.8, rect: { x: 1284, y: 145, w: 353, h: 310 }, pad: 30 }],
      focus: [{ at: 1.4, rect: { x: 1296, y: 392, w: 330, h: 46 }, label: 'Otomatik onaylandı', desc: 'Eşiğin altındaki sipariş kimseyi beklemeden ilerledi.', pad: 4 }],
      vo: [{ id: 'v3-07', text: 'Eşiğin altındaki siparişler ise otomatik onaylanır; kimse beklemez.', at: 1.0 }] },

    { type: 'screen', shot: 'butce', d: 7, head: { eb: 'Bütçe Panosu', ttl: 'Bütçe ve limitler, anlık' },
      cam: [{ at: 0.8, rect: { x: 565, y: 290, w: 1072, h: 370 }, pad: 20 }],
      focus: [{ at: 1.4, end: 3.6, rect: { x: 565, y: 410, w: 1072, h: 245 }, label: 'Departman bütçe durumu', desc: 'Her departmanın aylık bütçesi, harcaması ve kalanı.', pad: 2 },
              { at: 3.6, rect: { x: 936, y: 300, w: 340, h: 76 }, label: 'Kredi: ₺15.405 / ₺250.000', desc: 'Kullanılan kredi ve toplam limit.', pad: 6 }],
      vo: [{ id: 'v3-08', text: 'Bütçe Panosu’nda departman bütçelerini, kullanıcı limitlerini ve kredi kullanımını anlık izleyin; sürpriz yok.', at: 1.0 }] },

    { type: 'delivery', d: 4.2, offset: 7.0, sub: 'Kontrol sizde, teslimat bizde.', title: 'Kontrol sizde.',
      vo: [{ id: 'v3-09', text: 'Kontrol sizde, teslimat bizde.', at: 1.2 }] },

    { type: 'end', d: 4, vo: [{ id: 'v3-10', text: 'MTS Hijyen B2B.' }] },
  ],
};
if (typeof module !== 'undefined') module.exports = VIDEO;
