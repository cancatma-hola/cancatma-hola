// Sahne süreleri ve olay zamanları. Hem tarayıcı (motor.js) hem Node (uret.mjs → müzik/efekt) aynı hesabı kullanır.
// Tüm kesmeler 0,5 sn ızgarasındadır (120 BPM vuruş).
(function (root) {
  const R = (x) => Math.ceil(x * 2 - 1e-9) / 2;
  const n = (a) => (a || []).length;
  // Okuma süresi: kelime başına ~0,32 sn, en az 2 sn (ses yok; izleyici metni okur)
  const oku = (t) => Math.max(2, String(t || "").replace(/\*/g, "").split(/\s+/).filter(Boolean).length * 0.32 + 0.8);

  // Her sahne tipi: süre + iç olay zamanları (sahne başına göre saniye)
  const TIP = {
    // Sürüm 2 (2026-10-09 serisi): kısa kapak ve kapanış; ekran payı artar
    kapak: (s) => (s._v2 ? { dur: 3.5, ikon: 0.1, baslik: 0.4, alt: 1.1 } : { dur: 4.5, ikon: 0.3, baslik: 0.8, alt: 1.6 }),
    ekran: (s) => {
      const t = { giris: 0, metin: 0.3, vurgu: [], dur: 0 };
      let c = 1.4;
      (s.vurgu || []).forEach(() => { t.vurgu.push(c); c += 2.8; });
      if (s.yaz) { const L = Math.min(1.8, s.yaz.metin.length * 0.07); t.yaz = { bas: c, yazi: c + 1.0, bit: c + 1.0 + L }; c += 1.0 + L + 1.0; }
      if (s.tikla) { t.tikla = { bas: c, imlec: c + 0.6, tik: c + 1.55, sonuc: c + 1.75 }; c += 3.0; }
      t.dur = Math.max(4.5, R(c + 0.4));
      return t;
    },
    telefon: (s) => TIP.ekran(s),
    cihaz: (s) => ({ giris: 0, metin: 0.3, masa: 0.5, tel: 1.2, dur: s.sure || 5.5 }),
    ipucu: (s) => { const t = { baslik: 0.3, madde: [] }; s.maddeler.forEach((_, i) => t.madde.push(1.2 + i * 1.3)); t.dur = R(1.2 + n(s.maddeler) * 1.3 + 1.6); return t; },
    soru: (s) => { const t = { cip: [], metin: 0.6, vurgu: 1.8 }; (s.cipler || []).forEach((_, i) => t.cip.push(0.3 + i * 0.2)); t.dur = s.sure || 4.5; return t; },
    sayac: (s) => ({ baslik: 0.3, sayi: 0.9, ini: 2.7, alt: 2.9, cip: (s.cipler || []).map((_, i) => 3.2 + i * 0.35), dur: s.sure || R(4.5 + n(s.cipler) * 0.35) }),
    cubuk: (s) => { const t = { baslik: 0.3, satir: [] }; s.satirlar.forEach((_, i) => t.satir.push(1.0 + i * 0.3)); t.vurgu = 1.0 + n(s.satirlar) * 0.3 + 1.8; t.dur = R(t.vurgu + 2.2); return t; },
    akis: (s) => { const t = { baslik: 0.3, adim: [] }; s.adimlar.forEach((_, i) => t.adim.push(1.1 + i * 0.75)); t.dur = R(1.1 + n(s.adimlar) * 0.75 + 2.2); return t; },
    karsilastir: (s) => ({ baslik: 0.3, sol: 1.0, sag: 2.4, dur: s.sure || 6.5 }),
    // Kinetik kelimeler: her kelime bir vuruşta gelir, sonra ana cümle
    kelime: (s) => { const t = { kelime: s.kelimeler.map((_, i) => 0.1 + i * 0.5) }; t.ciz = 0.1 + n(s.kelimeler) * 0.5 + 0.2; t.son = t.ciz + (s.ciz ? 1.2 : 0.5); t.dur = s.sure || R(t.son + oku(s.son) + 0.6); return t; },
    // Karakter: avatar, ad/rol, konuşma balonu
    karakter: (s) => ({ avatar: 0.2, ad: 0.6, balon: 1.0, dur: s.sure || R(1.0 + oku(s.metin) + 0.8) }),
    // Gündem: "Bu videoda" + numaralı maddeler
    gundem: (s) => { const t = { baslik: 0.3, madde: s.maddeler.map((_, i) => 0.9 + i * 0.45) }; t.dur = R(0.9 + n(s.maddeler) * 0.45 + 2.0); return t; },
    // Kontrol listesi: maddeler sırayla işaretlenir
    kontrol: (s) => { const t = { baslik: 0.3, madde: s.maddeler.map((_, i) => 1.0 + i * 1.0) }; t.dur = R(1.0 + n(s.maddeler) * 1.0 + 1.6); return t; },
    // Mini test: soru, seçenekler, geri sayım, doğru cevap
    test: (s) => { const t = { soru: 0.3, secenek: s.secenekler.map((_, i) => 1.0 + i * 0.35) }; t.sayac = 1.0 + n(s.secenekler) * 0.35 + 0.4; t.cevap = t.sayac + 3; t.aciklama = t.cevap + 0.6; t.dur = R(t.aciklama + (s.aciklama ? oku(s.aciklama) : 1.5) + 0.4); return t; },
    // Rakamlar: 2–4 sayaç kartı
    rakamlar: (s) => { const t = { baslik: 0.3, kart: s.kartlar.map((_, i) => 0.9 + i * 0.3) }; t.dur = s.sure || R(0.9 + n(s.kartlar) * 0.3 + 3.4); return t; },
    kapanis: () => ({ logo: 0.2, halka: 0.4, slogan: 0.7, marka: 1.5, url: 1.9, dur: 6 }),
    son: (s) => (s._v2 ? { ikon: 0.1, baslik: 0.3, sonraki: 1.2, marka: 1.6, dur: Math.max(4, R(0.3 + oku(s.metin) + 1.2)) } : { ikon: 0.2, baslik: 0.6, sonraki: 1.6, marka: 2.2, dur: 5.5 }),
  };

  // Geçiş seçimi: eğitimde ekran→ekran yumuşak geçiş, diğerleri shader; tanıtımda sırayla shader
  const PROMO_SHADER = ['cinematic-zoom', 'whip-pan', 'chromatic-split', 'whip-pan', 'cinematic-zoom', 'whip-pan'];
  function gecis(video, i, a, b) {
    if (b.tip === 'kapanis' || b.tip === 'son') return ['cross-warp-morph', 0.8];
    if (video.tur === 'egitim') {
      if (a.tip === 'kapak') return ['cinematic-zoom', 0.6];
      if ((a.tip === 'ekran' || a.tip === 'telefon') && a.tikla && (b.tip === 'ekran' || b.tip === 'telefon')) return ['cinematic-zoom', 0.6];   // tıklanan yere dalış
      return [null, 0.5];   // yumuşak geçiş (CSS)
    }
    return [PROMO_SHADER[i % PROMO_SHADER.length], i === 0 ? 0.6 : 0.5];
  }

  function zamanla(video) {
    const sah = [], hits = [], egitim = video.tur === 'egitim';
    let t0 = 0;
    const v2 = (video.surum || 1) >= 2;
    video.sahneler.forEach((s, i) => {
      const z = TIP[s.tip](v2 ? { ...s, _v2: true } : s);
      sah.push({ ...z, bas: t0, tip: s.tip });
      t0 += z.dur;
    });
    const total = t0, cuts = [];
    for (let i = 1; i < sah.length; i++) { const [sh, d] = gecis(video, i - 1, video.sahneler[i - 1], video.sahneler[i]); cuts.push([sah[i].bas, sh, d]); }
    // ses olayları
    const H = (t, type, ex = {}) => hits.push({ t: +t.toFixed(3), type, ...ex });
    const G = egitim ? 0.55 : 1;
    cuts.forEach(([t, sh]) => { if (sh) H(t - 0.25, 'whoosh', { pan: 0, g: egitim ? 0.5 : 1 }); H(t, 'impact', { g: (sh ? 0.8 : 0.35) * G }); });
    sah.forEach((z, i) => {
      const b = z.bas, s = video.sahneler[i];
      if (z.tip === 'kapak') { H(b + z.ikon, 'pop'); H(b + z.baslik, 'impact', { g: 0.5 * G }); H(b + z.alt, 'pop', { g: 0.6 }); }
      if (z.tip === 'ekran' || z.tip === 'telefon') {
        z.vurgu.forEach((v) => H(b + v + 0.7, 'pop', { g: 0.7 }));
        if (z.yaz) for (let k = z.yaz.yazi; k < z.yaz.bit; k += 0.14) H(b + k, 'tick', { g: 0.5 });
        if (z.tikla) { H(b + z.tikla.tik, 'tick'); H(b + z.tikla.sonuc, 'pop', { g: 0.9 }); }
      }
      if (z.tip === 'ipucu') z.madde.forEach((m) => H(b + m, 'pop', { g: 0.7 }));
      if (z.tip === 'soru') { z.cip.forEach((c) => H(b + c, 'pop', { g: 0.7 })); H(b + z.metin, 'impact', { g: 0.4 * G }); H(b + z.vurgu, 'impact', { g: 0.5 * G }); }
      if (z.tip === 'sayac') { H(b + z.ini, 'impact', { g: 0.6 * G }); z.cip.forEach((c) => H(b + c, 'pop', { g: 0.7 })); }
      if (z.tip === 'cubuk') { z.satir.forEach((c) => H(b + c, 'pop', { g: 0.6 })); H(b + z.vurgu, 'impact', { g: 0.4 * G }); }
      if (z.tip === 'akis') z.adim.forEach((c) => H(b + c, 'pop', { g: 0.8 }));
      if (z.tip === 'karsilastir') { H(b + z.sol, 'impact', { g: 0.4 * G }); H(b + z.sag, 'stamp', { g: 0.6 }); }
      if (z.tip === 'kelime') { z.kelime.forEach((c) => H(b + c, 'impact', { g: 0.45 * G })); if (s.ciz) H(b + z.ciz, 'whoosh', { pan: 0, g: 0.4 }); H(b + z.son, 'stamp', { g: 0.6 }); }
      if (z.tip === 'cihaz') { H(b + z.masa, 'whoosh', { pan: -0.4, g: 0.5 }); H(b + z.tel, 'pop'); }
      if (z.tip === 'karakter') { H(b + z.avatar, 'pop'); H(b + z.balon, 'pop', { g: 0.7 }); }
      if (z.tip === 'gundem') z.madde.forEach((m) => H(b + m, 'pop', { g: 0.6 }));
      if (z.tip === 'kontrol') z.madde.forEach((m) => { H(b + m, 'pop', { g: 0.5 }); H(b + m + 0.45, 'tick'); });
      if (z.tip === 'test') { z.secenek.forEach((c) => H(b + c, 'pop', { g: 0.6 })); for (let k = 0; k < 3; k++) H(b + z.sayac + k, 'tick'); H(b + z.cevap, 'stamp', { g: 0.7 }); }
      if (z.tip === 'rakamlar') { z.kart.forEach((c) => H(b + c, 'pop', { g: 0.7 })); H(b + z.kart[z.kart.length - 1] + 1.6, 'impact', { g: 0.5 * G }); }
      if (z.tip === 'kapanis' || z.tip === 'son') { H(b + 0.4, 'impact', { g: 1.1 * G }); H(b + 0.5, 'pop'); }
    });
    H(0, 'riser', { d: Math.min(4, sah[0].dur) });
    const drop = cuts.length ? cuts[0][0] : 2, stop = cuts.length ? cuts[cuts.length - 1][0] : total - 2;
    hits.unshift({ t: 0, type: 'meta', drop, stop, roll: Math.max(drop + 1, stop - 2.5), logo: stop + 0.4, dur: total, mod: egitim ? 'sakin' : 'enerjik', shift: video.ton || 0 });
    return { sahneler: sah, total, cuts, hits };
  }

  const api = { zamanla, TIP, oku };
  if (typeof module !== 'undefined') module.exports = api; else root.ZAMAN = api;
})(typeof window !== 'undefined' ? window : globalThis);
