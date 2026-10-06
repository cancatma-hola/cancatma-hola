// Eğitim 02 · Katalogdan Sipariş Verme (hedef ≈ 90 sn)
const STAGES = ['Taslak', 'Onay Bekleniyor', 'MTS Onayı Bekleniyor', 'MTS İncelemede', 'MTS Onayladı', 'Hazırlanıyor', 'Sevkiyatta', 'Teslim Edildi', 'Faturalandı'];
const VIDEO = {
  id: 'E2',
  music: 'egitim',
  tail: 1.8,
  pace: 1.2,
  scenes: [
    { type: 'title', d: 4.5, eyebrow: 'Eğitim 02 · 6 adım', size: 150, y: 330,
      lines: [{ t: 'Katalogdan' }, { t: 'sipariş verme.', accent: true }],
      vo: [{ id: 'e2-01', text: 'Bu eğitimde katalogdan ürün bulup siparişinizi göndermeyi öğreneceksiniz.' }] },

    { type: 'screen', shot: 'anasayfa', d: 4.2, step: { n: 1, of: 6, ttl: 'Ürünü bulun' },
      cam: [{ at: 0.6, rect: { x: 400, y: 40, w: 720, h: 500 }, pad: 0 }],
      typing: [{ at: 1.6, rect: { x: 446, y: 60, w: 560, h: 30 }, text: 'kağıt havlu', size: 15, dur: 1.0 }],
      cursor: [{ at: 1.3, pt: { x: 700, y: 76 }, click: true }],
      vo: [{ id: 'e2-02', text: 'Arama kutusuna ürün adını, ürün kodunu ya da barkodu yazın.', at: 1.0 }] },

    { type: 'screen', shot: 'anasayfa-arama', d: 4.5, tr: 'cut', noEnter: true, step: { n: 1, of: 6, ttl: 'Ürünü bulun' },
      cam: [{ at: 0, rect: { x: 400, y: 40, w: 720, h: 500 }, pad: 0, d: 0.01 }],
      focus: [{ at: 0.5, rect: { x: 407, y: 98, w: 695, h: 440 }, label: 'Anlık öneriler', pad: 2 }],
      vo: [{ id: 'e2-03', text: 'Öneriler siz yazarken anında listelenir.', at: 0.4 }] },

    { type: 'screen', shot: 'kategori', d: 7, step: { n: 2, of: 6, ttl: 'Kategoride filtreleyin' },
      cam: [{ at: 0.8, rect: { x: 283, y: 170, w: 1360, h: 760 }, pad: 0 }],
      focus: [{ at: 1.5, end: 3.8, rect: { x: 283, y: 290, w: 258, h: 640 }, label: 'Marka · birim · fiyat · stok', pad: 4 },
              { at: 3.8, rect: { x: 1300, y: 286, w: 340, h: 46 }, label: 'Sıralama', pad: 4 }],
      vo: [{ id: 'e2-04', text: 'Ya da kategoriden ilerleyin; marka, satış birimi, fiyat ve stok durumuna göre filtreleyin.', at: 1.0 }] },

    { type: 'screen', shot: 'urun', d: 9, step: { n: 3, of: 6, ttl: 'Ürün sayfasını okuyun' },
      cam: [{ at: 0.8, rect: { x: 820, y: 290, w: 500, h: 440 }, pad: 40 }],
      focus: [{ at: 1.6, end: 3.6, rect: { x: 836, y: 420, w: 300, h: 84 }, label: 'KDV hariç ve dahil fiyat', pad: 6 },
              { at: 3.6, end: 5.6, key: 'puan', label: 'Kazanacağınız puan', pad: 8 },
              { at: 5.6, key: 'stok', label: 'Stok ve teslim süresi', pad: 8 }],
      vo: [{ id: 'e2-05', text: 'Ürün sayfasında KDV hariç ve dahil fiyatı, kazanacağınız puanı, stok durumunu ve teslim süresini görürsünüz.', at: 1.0 }] },

    { type: 'screen', shot: 'urun', d: 8, step: { n: 4, of: 6, ttl: 'Toplu alım ve abonelik' },
      cam: [{ at: 0.6, rect: { x: 820, y: 560, w: 500, h: 190 }, pad: 60 }],
      focus: [{ at: 1.4, end: 3.6, key: 'toplu', label: 'Özel fiyat iste', pad: 8 },
              { at: 3.6, end: 5.6, key: 'liste', label: 'Listeye ekle', pad: 8 },
              { at: 5.6, key: 'abonelik', label: 'Aboneliğe çevir', pad: 6 }],
      vo: [{ id: 'e2-06', text: 'Büyük miktarlar için özel fiyat isteyin. Sık aldığınız ürünü listeye ekleyin ya da aboneliğe çevirin.', at: 1.0 }] },

    { type: 'list', d: 9, eyebrow: 'Adım 5 / 6 · Sepet', title: ['Sepeti', 'gözden geçirin.'],
      sub: 'Adet, teslimat adresi ve proje seçimi.',
      card: { ttl: 'Sepet', tag: '2 ürün', at: 1.0, gap: 0.9,
        cols: [['SKU', 170], ['Ürün', 520], ['Adet', 90, 'right'], ['Tutar', 200, 'right']],
        rows: [['555204', 'Wanda Soft Sensörlü Havlu 4 kg', '6 koli', '₺2.520,00'],
               ['ST00560', 'Bez Mikrofiber 40×40 Cam Bezi', '13', '₺1.287,00']],
        fields: [['Teslimat adresi', 'Merkez Depo · İstanbul'], ['Proje', 'PRJ-2026-01 · Yıllık Tedarik']],
        total: { label: 'Ara toplam (KDV hariç)', values: [2520, 1287] },
        button: { text: 'Siparişi Gönder', at: 6.4 }, toast: { at: 6.8, title: 'Sipariş gönderildi', sub: 'Onay kuralınıza göre yönlendirildi' } },
      vo: [{ id: 'e2-07', text: 'Sepette adetleri kontrol edin, teslimat adresini ve projeyi seçin, ardından siparişi gönderin.', at: 1.0 }] },

    { type: 'journey', d: 6, stages: STAGES, from: 0, at: [1.6], eyebrow: 'Adım 6 / 6 · Gönderildi', sub: 'Kurala göre onaya ya da doğrudan MTS’ye.',
      vo: [{ id: 'e2-08', text: 'Siparişiniz onay kurallarınıza göre ya onaya düşer ya da doğrudan MTS Hijyen’e iletilir.', at: 0.9 }] },

    { type: 'screen', shot: 'siparisler', d: 6, step: { n: 6, of: 6, ttl: 'Siparişlerim’den izleyin' },
      cam: [{ at: 0.8, rect: { x: 565, y: 300, w: 1072, h: 420 }, pad: 20 }],
      focus: [{ at: 1.4, rect: { x: 870, y: 440, w: 220, h: 280 }, label: 'Durum', pad: 4 }],
      vo: [{ id: 'e2-09', text: 'Durumunu Siparişlerim ekranından anlık takip edin.', at: 1.0 }] },

    { type: 'title', d: 5.5, tip: true, eyebrow: 'İpucu', size: 104, y: 380,
      lines: [{ t: '14:00’a kadar verilen' }, { t: 'sipariş, aynı gün kargoda.', accent: true }],
      vo: [{ id: 'e2-10', text: 'İpucu: saat on dörde kadar verilen siparişler aynı gün kargoya verilir.' }] },

    { type: 'end', d: 4, next: 'Onaylarım ve onay kuralları',
      vo: [{ id: 'e2-11', text: 'Sıradaki eğitimde onay ekranını ve onay kurallarını göreceğiz.' }] },
  ],
};
if (typeof module !== 'undefined') module.exports = VIDEO;
