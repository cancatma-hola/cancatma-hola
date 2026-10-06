// Eğitim 10 · Sadakat, Kupon ve Davet (hedef ≈ 45 sn)
const VIDEO = {
  id: 'E10', music: 'egitim', tail: 1.6, pace: 1.25,
  scenes: [
    { type: 'title', d: 4.2, eyebrow: 'Eğitim 10 · 4 adım', size: 140, y: 330,
      lines: [{ t: 'Sadakat, kupon' }, { t: 've davet.', accent: true }],
      vo: [{ id: 'e10-01', text: 'Siparişleriniz size puan, kupon ve indirim olarak geri döner.' }] },
    { type: 'screen', shot: 'sadakat', d: 6.5, step: { n: 1, of: 4, ttl: 'Kademe ve puan' },
      cam: [{ at: 0.8, rect: { x: 566, y: 300, w: 1070, h: 320 }, pad: 20 }],
      focus: [{ at: 1.4, end: 3.6, rect: { x: 572, y: 380, w: 230, h: 90 }, label: 'Altın müşteri · 49.833 puan', pad: 6 },
              { at: 3.6, rect: { x: 572, y: 548, w: 1060, h: 60 }, label: 'Platin’e 167 puan', pad: 4 }],
      vo: [{ id: 'e10-02', text: 'Sadakat Programı’nda kademenizi, puan bakiyenizi ve bir üst kademeye kalan puanı görürsünüz.', at: 1.0 }] },
    { type: 'screen', shot: 'sadakat-alt', d: 6, step: { n: 2, of: 4, ttl: 'Bekleyen puanlar' },
      cam: [{ at: 0.8, rect: { x: 566, y: 230, w: 1070, h: 480 }, pad: 10 }],
      focus: [{ at: 1.4, rect: { x: 566, y: 240, w: 1070, h: 470 }, label: 'Teslimde hesaba geçer', pad: 2 }],
      vo: [{ id: 'e10-03', text: 'Her siparişin puanı teslim edildiğinde otomatik olarak bakiyenize eklenir.', at: 1.0 }] },
    { type: 'screen', shot: 'kuponlar', d: 6, step: { n: 3, of: 4, ttl: 'Kuponlarım' },
      cam: [{ at: 0.8, rect: { x: 566, y: 290, w: 1070, h: 420 }, pad: 10 }],
      focus: [{ at: 1.4, rect: { x: 566, y: 300, w: 1070, h: 220 }, label: '%10 indirim · 2 kupon', pad: 4 }],
      vo: [{ id: 'e10-04', text: 'Kuponlarınızı kopyalayıp sepette kullanın; indirim tutardan otomatik düşer.', at: 1.0 }] },
    { type: 'screen', shot: 'davet', d: 6, step: { n: 4, of: 4, ttl: 'Arkadaşını davet et' },
      cam: [{ at: 0.8, rect: { x: 566, y: 180, w: 1070, h: 320 }, pad: 10 }],
      focus: [{ at: 1.4, rect: { x: 566, y: 184, w: 1070, h: 176 }, label: 'İkisi de %5 kazanır', pad: 2 }],
      vo: [{ id: 'e10-05', text: 'Bir firmayı davet edin; ilk siparişinde iki firma da yüzde beş indirim kuponu kazanır.', at: 1.0 }] },
    { type: 'end', d: 4.5, vo: [{ id: 'e10-06', text: 'MTS Hijyen B2B. Eğitim serisinin sonuna geldiniz; iyi alışverişler!' }] },
  ],
};
if (typeof module !== 'undefined') module.exports = VIDEO;
