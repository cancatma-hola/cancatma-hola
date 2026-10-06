// Video 2 · Bir Siparişin Yolculuğu (süreç, hedef ≈ 80 sn) · kahraman sipariş MTS-2026-0020
const STAGES = ['Taslak', 'Onay Bekleniyor', 'MTS Onayı Bekleniyor', 'MTS İncelemede', 'MTS Onayladı', 'Hazırlanıyor', 'Sevkiyatta', 'Teslim Edildi', 'Faturalandı'];
const VIDEO = {
  id: 'V2',
  music: 'egitim',
  tail: 0.9,
  pace: 1.05,
  scenes: [
    { type: 'title', d: 4.5, eyebrow: 'Sipariş MTS-2026-0020', size: 170, y: 320,
      lines: [{ t: 'Bir sipariş.' }, { t: 'Dokuz adım.', accent: true }],
      vo: [{ id: 'v2-01', text: 'Bir siparişin panelde izlediği yolu birlikte görelim.' }] },

    { type: 'journey', d: 7, stages: STAGES, from: 0, at: [4.0], sub: 'Sepetteki ürünler taslak siparişe dönüşür.',
      vo: [{ id: 'v2-02', text: 'Siparişiniz önce taslak olarak oluşur; dilediğiniz kadar düzenleyebilirsiniz.', at: 0.9 },
           { id: 'v2-03', text: 'Kurallarınıza uyuyorsa, yetkili kişinin onayına düşer.' }] },

    { type: 'screen', shot: 'onay-kurallari', d: 5, head: { eb: 'Onay Kuralları', ttl: '10.000 TL üzeri → Can Çatma' },
      cam: [{ at: 0.8, rect: { x: 565, y: 320, w: 1072, h: 280 }, pad: 30 }],
      focus: [{ at: 1.4, rect: { x: 565, y: 322, w: 1072, h: 92 }, label: 'Tutar eşiği · onay zinciri', pad: 4 }],
      vo: [{ id: 'v2-04', text: 'Tutar ya da departman eşiğini siz belirlersiniz.', at: 1.0 }] },

    { type: 'journey', d: 6, stages: STAGES, from: 1, at: [1.2, 3.2], sub: 'Onaylanan sipariş MTS Hijyen ekibine ulaşır.',
      vo: [{ id: 'v2-05', text: 'Onaylanan sipariş MTS Hijyen ekibine ulaşır ve incelenir.', at: 0.9 }] },

    { type: 'journey', d: 5.5, stages: STAGES, from: 3, at: [1.0], sub: 'Stok ve fiyat teyit edilir.',
      box: [{ at: 0.4, act: 'drop' }, { at: 1.0, act: 'label' }, { at: 2.0, act: 'stamp' }],
      vo: [{ id: 'v2-06', text: 'Stok ve fiyat teyit edilir; siparişiniz onaylanır.', at: 0.9 }] },

    { type: 'journey', d: 5, stages: STAGES, from: 4, at: [0.9], sub: 'Depo ekibi ürünleri toplar ve paketler.', stamped: true,
      box: [{ at: 1.4, act: 'tape' }],
      vo: [{ id: 'v2-07', text: 'Depo ekibimiz ürünlerinizi toplar ve özenle paketler.', at: 0.9 }] },

    { type: 'screen', shot: 'siparis-detay', d: 6, head: { eb: 'Sipariş detayı', ttl: 'Sıradaki adımı her an görün' },
      cam: [{ at: 0.8, rect: { x: 565, y: 298, w: 1072, h: 260 }, pad: 20 }],
      focus: [{ at: 1.4, end: 3.4, rect: { x: 583, y: 382, w: 1036, h: 80 }, label: '9 adımlı durum', pad: 4 },
              { at: 3.4, rect: { x: 583, y: 478, w: 1036, h: 60 }, label: 'Sıradaki adım', pad: 4 }],
      vo: [{ id: 'v2-08', text: 'Sipariş detayında hangi adımda olduğunuzu ve sıradaki işlemi her an görürsünüz.', at: 1.0 }] },

    { type: 'journey', d: 5, stages: STAGES, from: 5, at: [0.9], sub: 'Siparişiniz yola çıktı.', stamped: true, taped: true,
      box: [{ at: 1.6, act: 'ship' }],
      vo: [{ id: 'v2-09', text: 'Siparişiniz yola çıkar.', at: 0.9 }] },

    { type: 'screen', shot: 'bildirimler', d: 5, head: { eb: 'Bildirimler', ttl: 'Her durum değişikliği anında' },
      cam: [{ at: 0.8, rect: { x: 565, y: 360, w: 1072, h: 160 }, pad: 60 }],
      focus: [{ at: 1.4, rect: { x: 590, y: 446, w: 1030, h: 64 }, label: 'Hazırlanıyor → Sevkiyatta', pad: 4 }],
      vo: [{ id: 'v2-10', text: 'Her durum değişikliği size anında bildirim olarak düşer.', at: 1.0 }] },

    { type: 'delivery', d: 10.5, eyebrow: 'Adım 08 / 09', sub: 'Elden teslim, anında güncelleme.',
      vo: [{ id: 'v2-11', text: 'Ve teslim! Ekibimiz siparişinizi elden teslim eder; panel anında güncellenir.', at: 7.9 }] },

    { type: 'screen', shot: 'siparis-detay', d: 5.5, head: { eb: 'MTS-2026-0020', ttl: 'Teslim edildi, puanınız yüklendi' },
      cam: [{ at: 0.6, rect: { x: 1318, y: 572, w: 320, h: 360 }, pad: 60 }],
      focus: [{ at: 1.4, rect: { x: 1318, y: 812, w: 320, h: 112 }, label: 'Bekleyen puan', pad: 4 }],
      toast: [{ at: 0.9, title: 'Teslim edildi', sub: 'MTS-2026-0020 · Merkez Depo' }],
      vo: [{ id: 'v2-12', text: 'Teslimatla birlikte kazandığınız puanlar da hesabınıza eklenir.', at: 1.0 }] },

    { type: 'screen', shot: 'faturalar', d: 6, head: { eb: 'Faturalarım', ttl: 'Fatura otomatik, cari anında' },
      cam: [{ at: 0.8, rect: { x: 565, y: 220, w: 1072, h: 220 }, pad: 40 }],
      focus: [{ at: 1.4, key: 'logo', label: 'Logo ERP · e-Fatura', pad: 8 }],
      vo: [{ id: 'v2-13', text: 'Son adımda faturanız Logo ERP üzerinden otomatik düzenlenir ve cari ekstrenize işlenir.', at: 1.0 }] },

    { type: 'journey', d: 5, stages: STAGES, from: 7, at: [0.8], eyebrow: 'Tamamlandı', sub: 'Dokuz adım. Tek ekran. Sıfır telefon.',
      vo: [{ id: 'v2-14', text: 'Dokuz adım, tek ekran, sıfır telefon.', at: 1.0 }] },

    { type: 'end', d: 4, vo: [{ id: 'v2-15', text: 'MTS Hijyen B2B.' }] },
  ],
};
if (typeof module !== 'undefined') module.exports = VIDEO;
