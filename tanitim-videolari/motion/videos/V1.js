// Video 1 · Hijyen Tedariğiniz Tek Panelde (ana promo, hedef ≈ 60 sn)
const STAGES = ['Taslak', 'Onay Bekleniyor', 'MTS Onayı Bekleniyor', 'MTS İncelemede', 'MTS Onayladı', 'Hazırlanıyor', 'Sevkiyatta', 'Teslim Edildi', 'Faturalandı'];
const VIDEO = {
  id: 'V1',
  music: 'promo',
  musicVol: 0.4,
  scenes: [
    { type: 'chaos', d: 5.2, voLead: 0.4,
      vo: [{ id: 'v1-01', text: 'Telefon, mesaj, e-posta, Excel… Hijyen tedariği neden bu kadar dağınık olsun?' }] },

    { type: 'title', d: 3.2, eyebrow: 'MTS Hijyen B2B', size: 190, y: 330,
      lines: [{ t: 'Artık' }, { t: 'tek panel.', accent: true }],
      vo: [{ id: 'v1-02', text: 'Artık her şey tek panelde.' }] },

    { type: 'explain', d: 6.5, eyebrow: 'Neden MTS Hijyen B2B?', title: ['Dört sebep.'],
      items: [{ icon: 'search', t: 'Tek katalog', d: 'Kâğıttan kimyasala her şey.' }, { icon: 'tag', t: 'Size özel fiyat', d: 'Kademeli iskonto otomatik.' }, { icon: 'approve', t: 'Kurallı onay', d: 'Harcama kontrol altında.' }, { icon: 'truck', t: 'Aynı gün kargo', d: '14:00’a kadar verilen siparişte.' }],
      vo: [{ id: 'v1-x', text: 'Tek katalog, size özel fiyat, kurallı onay ve aynı gün kargo.', at: 0.9 }] },
    { type: 'screen', shot: 'kategori', full: true, d: 5,
      cam: [{ at: 1.2, rect: { x: 283, y: 40, w: 1360, h: 130 }, pad: 40 }],
      focus: [{ at: 1.9, rect: { x: 283, y: 120, w: 1360, h: 40 }, label: 'Tüm kategoriler', desc: 'Kâğıttan kimyasala tüm ürün grupları tek menüde.', pad: 6 }],
      vo: [{ id: 'v1-03', text: 'MTS Hijyen B2B ile tüm hijyen ihtiyaçlarınız tek adreste.', at: 0.9 }] },

    { type: 'screen', shot: 'kategori', d: 5, head: { eb: '89 ürün · 11 marka', ttl: 'Kâğıttan kimyasala, hepsi burada' },
      cam: [{ at: 1.0, rect: { x: 560, y: 280, w: 1100, h: 620 }, pad: 20 }],
      vo: [{ id: 'v1-04', text: 'Kâğıttan kimyasala, ekipmandan dispensere; yüzlerce ürün tek katalogda.', at: 0.9 }] },

    { type: 'screen', shot: 'urun', d: 5.5, head: { eb: 'Ürün kodu 555204', ttl: 'Fiyat, stok ve teslim süresi anında' },
      cam: [{ at: 0.8, rect: { x: 820, y: 290, w: 500, h: 420 }, pad: 40 }],
      focus: [{ at: 1.6, end: 3.4, key: 'fiyat', label: 'Size özel fiyat', desc: 'Firmanıza tanımlı fiyat, KDV hariç ve dahil.', pad: 10 },
              { at: 3.4, key: 'stok', label: '1 iş günü içinde kargo', desc: 'Stokta olan ürün ertesi iş günü kargoya verilir.', pad: 8 }],
      vo: [{ id: 'v1-05', text: 'Size özel fiyatı, stok durumunu ve teslim süresini anında görün.', at: 1.0 }] },

    { type: 'list', d: 6.5, eyebrow: 'Hızlı sipariş', title: ['Ürün koduyla,', 'saniyeler içinde.'],
      card: { ttl: 'Hızlı Sipariş', tag: 'SKU · miktar', at: 1.0, gap: 0.8,
        cols: [['SKU', 170], ['Ürün', 520], ['Adet', 90, 'right'], ['Tutar', 200, 'right']],
        rows: [['555204', 'Wanda Soft Sensörlü Havlu 4 kg', '6', '₺2.520,00'],
               ['ST00560', 'Bez Mikrofiber 40×40 Cam Bezi', '13', '₺1.287,00'],
               ['7906628', 'Selpak Prof. İçten Çekme 220 m', '2', '₺1.794,60']],
        total: { label: 'Ara toplam (KDV hariç)', values: [2520, 1287, 1794.6] },
        button: { text: 'Sepete Ekle', at: 4.6 }, toast: { at: 5.0, title: 'Sepete eklendi', sub: '3 ürün · ₺5.601,60' } },
      vo: [{ id: 'v1-06', text: 'Ürün koduyla ya da Excel’den, saniyeler içinde sipariş verin.', at: 0.9 }] },

    { type: 'screen', shot: 'onaylarim', d: 6, head: { eb: 'Onaylarım', ttl: 'Onay zinciri, sizin kurallarınızla' },
      cam: [{ at: 0.8, rect: { x: 565, y: 298, w: 1072, h: 232 }, pad: 40 }],
      focus: [{ at: 1.5, end: 3.2, rect: { x: 583, y: 316, w: 330, h: 56 }, label: 'Zeynep Kaya · İdari İşler', desc: 'Sipariş, kurala göre sizin onayınıza düştü.', pad: 8 }],
      cursor: [{ at: 3.6, key: 'onayla', click: true }], cursorHide: 5.2,
      stamp: [{ at: 3.75, rect: { x: 1150, y: 380, w: 300, h: 80 }, text: 'Onaylandı', size: 46 }],
      toast: [{ at: 4.0, title: 'Sipariş onaylandı', sub: 'MTS-2026-0026 · MTS’ye iletildi' }],
      vo: [{ id: 'v1-07', text: 'Ekibiniz sipariş versin; onay, sizin kurallarınızla işlesin.', at: 1.0 }] },

    { type: 'journey', d: 6.2, stages: STAGES, from: 4, at: [2.0, 3.9], eyebrow: 'Siparişiniz yolda',
      box: [{ at: 0.9, act: 'drop' }, { at: 1.5, act: 'label' }, { at: 2.6, act: 'tape' }, { at: 4.2, act: 'ship' }],
      vo: [{ id: 'v1-08', text: 'Siparişiniz depoda hazırlanır ve yola çıkar; her adımı anlık izlersiniz.', at: 0.9 }] },

    { type: 'delivery', d: 10.5, sub: 'Güler yüzlü ekibimizle, zamanında.',
      vo: [{ id: 'v1-09', text: 'Ve kapınızda. Güler yüzlü ekibimizle, zamanında.', at: 7.9 }] },

    { type: 'screen', shot: 'ozet', d: 5.5, head: { eb: 'Özet', ttl: 'Harcama, bakiye, bütçe: her an görünür' },
      cam: [{ at: 0.8, rect: { x: 565, y: 182, w: 1072, h: 166 }, pad: 60 }],
      focus: [{ at: 1.6, rect: { x: 565, y: 182, w: 1072, h: 166 }, pad: 8 }],
      vo: [{ id: 'v1-10', text: 'Harcamanız, bakiyeniz ve bütçeniz her an gözünüzün önünde.', at: 1.0 }] },

    { type: 'end', d: 4.5,
      vo: [{ id: 'v1-11', text: 'MTS Hijyen B2B. Hijyen tedariğiniz, tek panelde.' }] },
  ],
};
if (typeof module !== 'undefined') module.exports = VIDEO;
