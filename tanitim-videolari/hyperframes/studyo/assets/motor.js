// MTS Hijyen video stüdyosu · sahne motoru (HyperFrames + GSAP + HyperShader)
// Tek tanımdan 1920×1080 (yatay) ve 1080×1920 (dikey) video kurar. Zamanlar assets/zaman.js'ten gelir.
(function () {
  const AMBER = "#F5B019", CYAN = "#5FD3FF", BLUE = "#2F7FE0", NAVY = "#0B1F33";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const rnd = (s) => { const x = Math.sin(s * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const fmt = (v, d = 2) => "₺" + v.toLocaleString("tr-TR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const icon = (n, size, color = CYAN, w = 2.2) => ICON(n, size, color, w);
  let W = 1920, H = 1080, DIKEY = false, VID = null, PLAN = null;

  // *yıldızlı* kelimeler sarı; her kelime ayrı span (giriş animasyonu için)
  function yazi(str) {
    let on = false;
    return str.split(" ").map((w) => {
      if (w.startsWith("*")) on = true;
      const html = `<span class="w${on ? " amber" : ""}">${w.replace(/\*/g, "")}</span>`;
      if (/\*[.,!?:;…]*$/.test(w)) on = false;
      return html;
    }).join(" ");
  }
  function ortam(seed) {
    let s = `<div data-layout-allow-overflow class="glow amb-a" style="left:${-300 + rnd(seed) * W * 0.3}px;top:${-400 + rnd(seed + 1) * H * 0.3}px;width:1300px;height:1300px;
      background:radial-gradient(closest-side, rgba(29,95,168,0.5), rgba(29,95,168,0))"></div>
      <div data-layout-allow-overflow class="glow amb-b" style="left:${W * 0.5 + rnd(seed + 2) * W * 0.2}px;top:${H * 0.3 + rnd(seed + 3) * H * 0.3}px;width:1100px;height:1100px;
      background:radial-gradient(closest-side, rgba(11,86,119,0.55), rgba(11,86,119,0))"></div>`;
    for (let i = 0; i < 40; i++) s += `<i class="star" style="left:${rnd(seed * 97 + i) * W}px;top:${rnd(seed * 31 + i * 7) * H}px;opacity:${0.15 + rnd(i + seed) * 0.45}"></i>`;
    return `<div class="full amb">${s}</div>`;
  }
  function burstHTML(id, n) {
    let s = "";
    for (let i = 0; i < n; i++) s += `<i style="position:absolute;left:0;top:0;width:${10 + rnd(i * 3.1) * 12}px;height:${6 + rnd(i * 5.7) * 8}px;background:${[AMBER, CYAN, "#FFFFFF", BLUE][i % 4]};border-radius:2px;opacity:0"></i>`;
    return `<div class="full" id="${id}">${s}</div>`;
  }
  function burst(tl, id, t0, cx, cy, power = 1, dur = 1.5) {
    const ps = $$(`#${id} i`), st = { t: 0 };
    tl.fromTo(st, { t: 0 }, { t: dur, duration: dur, ease: "none", onUpdate: () => {
      const t = st.t;
      ps.forEach((p, i) => {
        const a = rnd(i * 7.3) * Math.PI * 2, v = (450 + rnd(i * 2.9) * 800) * power;
        p.style.transform = `translate(${cx + Math.cos(a) * v * t * (1 - t / (dur * 2.2))}px,${cy + Math.sin(a) * v * 0.8 * t + 900 * t * t}px) rotate(${(rnd(i) - 0.5) * 1440 * t}deg)`;
        p.style.opacity = t <= 0.001 ? 0 : Math.max(0, 1 - t / dur);
      });
    } }, t0);
  }
  const rise = (tl, els, t, stagger = 0.1, y = 60) => els.length && tl.fromTo(els, { y, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger, ease: "expo.out" }, t);
  const popIn = (tl, el, t, d = 0.6) => tl.fromTo(el, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: d, ease: "back.out(2.2)" }, t);
  const draw = (tl, svg, t) => svg && tl.fromTo($$("path,circle,rect,line,polyline", svg), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" }, t);
  const ringAnim = (tl, el, t, size = 900, d = 0.9) => tl.fromTo(el, { width: 20, height: 20, marginLeft: -10, marginTop: -10, opacity: 1 },
    { width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2, opacity: 0, duration: d, ease: "expo.out" }, t);
  const flash = (tl, el, t, peak = 0.35) => tl.fromTo(el, { opacity: 0 }, { keyframes: [{ opacity: peak, duration: 0.04 }, { opacity: 0, duration: 0.3 }] }, t);
  const countTo = (tl, el, t, to, d, f) => { const o = { v: 0 }; tl.fromTo(o, { v: 0 }, { v: to, duration: d, ease: "expo.out", onUpdate: () => { el.textContent = f(o.v); } }, t); };
  const marka = () => `<span>MTS Hijyen</span> <span class="amber">B2B</span>`;

  // ── Dikey güvenli alan: Reels/TikTok/Shorts arayüzü üstte ~200 px, altta ~400 px yer kaplar; önemli metin bu aralıkta kalır
  const SAFE = { top: 210, bottom: 1510 };
  // ── Yerleşim ölçüleri (yön bazlı)
  function olcu() {
    return DIKEY
      ? { pad: 60, hdrY: SAFE.top, hdrFs: 58, promoFs: 74, box: { x: 60, y: 470, w: 960, h: 1040 }, noteY: null, noteFs: 44, wmY: 1846 }
      : { pad: 110, hdrY: 58, hdrFs: 56, promoFs: 68, box: { x: 110, y: 222, w: 1700, h: 806 }, noteY: null, noteFs: 40, wmY: 1046 };
  }
  // Bölgeyi görünüm oranına genişlet (ekran sınırları içinde)
  function oranla(r, ar) {
    let { x, y, w, h } = r;
    if (w / h > ar) { const nh = Math.min(1080, w / ar); y = clamp(y + h / 2 - nh / 2, 0, 1080 - nh); h = nh; }
    else { const nw = Math.min(1920, h * ar); x = clamp(x + w / 2 - nw / 2, 0, 1920 - nw); w = nw; }
    return { x, y, w, h };
  }

  // ═══ Sahne kurucular: html(s, z, id) → içerik, anim(tl, s, z, id) → zaman çizelgesi
  const SAHNE = {};

  SAHNE.kapak = {
    html: (s, z, id) => `<div class="full center" style="gap:${DIKEY ? 44 : 30}px;padding:0 ${DIKEY ? 70 : 160}px">
        <div class="tile" id="${id}-i" style="width:${DIKEY ? 220 : 180}px;height:${DIKEY ? 220 : 180}px;border-radius:44px">${icon(s.ikon || "list", DIKEY ? 120 : 100, AMBER, 2)}</div>
        <div class="mono cyan" id="${id}-u" style="font-size:${DIKEY ? 34 : 30}px">${s.ust || ""}</div>
        <div class="h1" id="${id}-b" style="font-size:${DIKEY ? 118 : 112}px">${yazi(s.baslik)}</div>
        <div class="soft" id="${id}-a" style="font-size:${DIKEY ? 50 : 46}px;font-weight:600;max-width:${DIKEY ? 940 : 1400}px">${s.alt || ""}</div>
        ${s.sure ? `<div class="chip" id="${id}-c" style="font-size:${DIKEY ? 38 : 34}px">${icon("clock", DIKEY ? 38 : 34)}${s.sure}</div>` : ""}</div>`,
    anim: (tl, s, z, id, b) => {
      tl.fromTo(`#${id}-i`, { scale: 0, rotation: -40 }, { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.8)" }, b + z.ikon);
      draw(tl, $(`#${id}-i svg`), b + z.ikon + 0.1);
      tl.fromTo(`#${id}-u`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, b + z.ikon + 0.2);
      rise(tl, $$(`#${id}-b .w`), b + z.baslik, 0.1, 70);
      tl.fromTo(`#${id}-a`, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }, b + z.alt);
      if ($(`#${id}-c`)) popIn(tl, `#${id}-c`, b + z.alt + 0.4);
    },
  };

  SAHNE.ekran = {
    html: (s, z, id) => {
      const O = olcu(), box = O.box, vh0 = box.h - 54;
      const r = s.bolgeOranli = oranla(s.r, box.w / vh0);
      const k = Math.min(box.w / r.w, vh0 / r.h), vw = Math.round(r.w * k), vh = Math.round(r.h * k);
      const dl = box.x + (box.w - vw) / 2, dt = box.y + (vh0 - vh) / 2;
      Object.assign(s, { _k: k, _vw: vw, _vh: vh, _dl: dl, _dt: dt });
      const ic = (p) => ({ x: (p.x - r.x) * k, y: (p.y - r.y) * k, w: p.w * k, h: p.h * k });
      // kameralar: her vurgu / yaz / tıkla hedefi için ölçek ve kaydırma
      const camFor = (t, kaydir = true) => {
        const p = { x: t.x - 18, y: t.y - 14, w: t.w + 36, h: t.h + 28 }, q = ic(p);
        const sFit = Math.min((vw * 0.88) / q.w, (vh * (DIKEY ? 0.7 : 0.62)) / q.h);
        const sMin = Math.min((DIKEY ? 1.7 : 1.1) / k, (vh * 0.72) / q.h);
        const sc = clamp(Math.max(sFit, sMin), 1, 2.3 / k);
        const cx = (x) => clamp(x, vw - (1920 - r.x) * k * sc, r.x * k * sc);
        let tx = cx(vw / 2 - (q.x + q.w / 2) * sc), ty = vh / 2 - (q.y + q.h / 2) * sc;
        ty = clamp(ty, vh - (1080 - r.y) * k * sc, r.y * k * sc);
        let pan = null;
        if (q.w * sc > vw * 0.94) { const x0 = cx(vw * 0.04 - q.x * sc), x1 = cx(vw * 0.96 - (q.x + q.w) * sc); tx = x0; if (kaydir) pan = x1; }
        return { s: sc, x: tx, y: ty, q, pan };
      };
      s._cams = (s.vurgu || []).map((v) => camFor(v.r, !!v.kaydir));
      if (s.yaz) s._camYaz = camFor(s.yaz.r, false);
      if (s.tikla) s._camTik = camFor(s.tikla.r, false);
      const etiket = s.adim && s._toplam > 1 ? `<div class="mono cyan" id="${id}-e" style="font-size:${DIKEY ? 28 : 24}px;margin-bottom:${DIKEY ? 10 : 4}px">Adım ${s.adim} / ${s._toplam}</div>` : "";
      const hdr = s.adim
        ? `<div class="abs" style="left:${O.pad}px;top:${O.hdrY}px;right:${O.pad}px;display:flex;gap:${DIKEY ? 28 : 30}px;align-items:flex-start">
            <div class="badge" id="${id}-n" style="width:${DIKEY ? 96 : 88}px;height:${DIKEY ? 96 : 88}px;font-size:${DIKEY ? 52 : 48}px">${s.adim}</div>
            <div style="flex:1;padding-top:${etiket ? 0 : DIKEY ? 8 : 6}px">${etiket}<div class="h2" id="${id}-m" style="font-size:${O.hdrFs}px">${yazi(s.metin)}</div></div></div>`
        : `<div class="abs" style="left:${O.pad}px;right:${O.pad}px;top:${DIKEY ? SAFE.top : 48}px;text-align:center"><div class="h1" id="${id}-m" style="font-size:${O.promoFs}px">${yazi(s.metin)}</div></div>`;
      const rings = (s.vurgu || []).map((v, i) => { const q = ic(v.r), cm = s._cams[i], bw = 5 / cm.s;
        return `<div class="spot" id="${id}-r${i}" style="left:${q.x - 10 / k}px;top:${q.y - 8 / k}px;width:${q.w + 20 / k}px;height:${q.h + 16 / k}px;border-width:${bw}px;border-radius:${12 / cm.s}px;opacity:0"></div>`; }).join("");
      const gz = (s.gizle || []).map((g) => { const q = ic(g); return `<div class="abs" style="left:${q.x}px;top:${q.y}px;width:${q.w}px;height:${q.h}px;background:#E3E9F0;border-radius:${4 * k}px"></div>`; }).join("");
      let yaz = "";
      if (s.yaz) { const q = ic(s.yaz.r);
        yaz = `<div class="abs" id="${id}-y" style="left:${q.x}px;top:${q.y}px;width:${q.w}px;height:${q.h}px;background:#fff;border:${2 * k}px solid ${BLUE};border-radius:${6 * k}px;
          display:flex;align-items:center;padding:0 ${10 * k}px;font-size:${Math.min(q.h * 0.5, 15 * k)}px;color:#0B1F33;font-family:'Inter Tight';opacity:0;overflow:hidden;white-space:nowrap">
          ${[...s.yaz.metin].map((c) => `<span class="yc" style="opacity:0">${c === " " ? "&nbsp;" : c}</span>`).join("")}<span class="caret" style="width:${2 * k}px;height:${q.h * 0.5}px;background:${BLUE};margin-left:2px"></span></div>`; }
      const altKutu = (ic2) => `<div class="abs" style="left:${dl}px;width:${vw}px;top:${dt + 54 + vh - 326}px;height:300px">${ic2}</div>`;
      const yer = `left:0;right:0;bottom:0;margin:0 auto;width:fit-content;max-width:${Math.min(vw - 60, 1500)}px`;
      const notes = altKutu((s.vurgu || []).map((v, i) => v.not ? `<div class="note" id="${id}-o${i}" style="${yer};font-size:${O.noteFs}px;opacity:0">
          <span class="nb">${i + 1}</span><span>${v.not}</span></div>` : "").join(""));
      const toast = s.tikla && s.tikla.sonuc ? altKutu(`<div class="abs toast" id="${id}-t" style="${yer};justify-content:center;font-size:${DIKEY ? 44 : 38}px;opacity:0">${icon("check", DIKEY ? 46 : 40, "#1E9E5A", 2.6)}${s.tikla.sonuc}</div>`) : "";
      return `${hdr}
        <div class="full" style="perspective:1800px"><div class="device" id="${id}-d" style="left:${dl}px;top:${dt}px;width:${vw}px">
          <div class="bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><div class="url">panel.mtshijyen.com${s.url || ""}</div>${s.yol ? `<div class="yolcip" id="${id}-yl" style="font-size:${DIKEY ? 24 : 22}px">${icon("pin", DIKEY ? 26 : 24, "#2B1E00", 2.4)}<span>${s.yol}</span></div>` : ""}</div>
          <div class="view" style="width:${vw}px;height:${vh}px"><div class="cam" id="${id}-c">
            <img data-layout-allow-overflow decoding="sync" loading="eager" src="${s.dosya}" style="left:${-r.x * k}px;top:${-r.y * k}px;width:${1920 * k}px">${gz}${rings}${yaz}</div>
            <svg class="cursor" id="${id}-k" viewBox="0 0 24 24" style="opacity:0"><path d="M4 2 L4 19 L8.5 15 L11.5 21.5 L14 20.4 L11 14 L17 14 Z" fill="#fff" stroke="#0B1F33" stroke-width="1.4" stroke-linejoin="round"/></svg>
            <div class="ring" id="${id}-p"></div></div></div></div>
        ${notes}${toast}`;
    },
    anim: (tl, s, z, id, b) => {
      tl.fromTo(`#${id}-d`, { y: 70, opacity: 0, rotationX: 14 }, { y: 0, opacity: 1, rotationX: 0, duration: 0.9, ease: "expo.out" }, b + z.giris);
      if ($(`#${id}-n`)) popIn(tl, `#${id}-n`, b + 0.15);
      if ($(`#${id}-e`)) tl.fromTo(`#${id}-e`, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4 }, b + 0.2);
      if ($(`#${id}-yl`)) popIn(tl, `#${id}-yl`, b + 0.7, 0.5);
      rise(tl, $$(`#${id}-m .w`), b + z.metin, 0.05, 40);
      const cam = `#${id}-c`, go = (c, t, d = 0.75) => tl.to(cam, { x: c.x, y: c.y, scale: c.s, duration: d, ease: "power3.inOut" }, t);
      tl.set(cam, { x: 0, y: 0, scale: 1, transformOrigin: "0 0" }, b);
      (s.vurgu || []).forEach((v, i) => {
        const t = b + z.vurgu[i];
        go(s._cams[i], t);
        if (s._cams[i].pan != null) tl.to(cam, { x: s._cams[i].pan, duration: 1.5, ease: "sine.inOut" }, t + 0.95);
        tl.fromTo(`#${id}-r${i}`, { opacity: 0, scale: 1.15 }, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)" }, t + 0.7);
        if ($(`#${id}-o${i}`)) tl.fromTo(`#${id}-o${i}`, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.45, ease: "expo.out" }, t + 0.8);
        const end = t + 2.8 - 0.25;
        tl.to(`#${id}-r${i}`, { opacity: 0, duration: 0.25 }, end);
        if ($(`#${id}-o${i}`)) tl.to(`#${id}-o${i}`, { opacity: 0, duration: 0.25 }, end);
      });
      const cur = `#${id}-k`, viewPt = (c, rr) => { const q = c.q, k = s._k, r = s.bolgeOranli;
        const cx = ((rr.x + rr.w / 2) - r.x) * k, cy = ((rr.y + rr.h / 2) - r.y) * k; return { x: cx * c.s + c.x, y: cy * c.s + c.y }; };
      if (s.yaz) {
        const t = b + z.yaz.bas, c = s._camYaz; go(c, t);
        const p = viewPt(c, s.yaz.r);
        tl.fromTo(cur, { x: s._vw * 0.9, y: s._vh * 0.95, opacity: 0 }, { x: p.x - 30, y: p.y - 6, opacity: 1, duration: 0.8, ease: "power3.inOut" }, t + 0.1);
        tl.fromTo(`#${id}-y`, { opacity: 0 }, { opacity: 1, duration: 0.2 }, b + z.yaz.yazi - 0.15);
        const cs = $$(`#${id}-y .yc`), step = (z.yaz.bit - z.yaz.yazi) / Math.max(1, cs.length);
        cs.forEach((ch, i) => tl.set(ch, { opacity: 1 }, b + z.yaz.yazi + i * step));
        tl.to(cur, { opacity: 0, duration: 0.3 }, b + z.yaz.bit + 0.4);
      }
      if (s.tikla) {
        const t = b + z.tikla.bas, c = s._camTik; go(c, t);
        const p = viewPt(c, s.tikla.r);
        tl.fromTo(cur, { x: s._vw * 0.85, y: s._vh * 1.0, opacity: 0 }, { x: p.x - 6, y: p.y - 4, opacity: 1, duration: 0.9, ease: "power3.inOut" }, b + z.tikla.imlec);
        tl.to(cur, { keyframes: [{ scale: 0.8, duration: 0.08 }, { scale: 1, duration: 0.15 }] }, b + z.tikla.tik);
        tl.set(`#${id}-p`, { left: p.x, top: p.y }, b);
        ringAnim(tl, `#${id}-p`, b + z.tikla.tik + 0.05, 260, 0.7);
        if ($(`#${id}-t`)) tl.fromTo(`#${id}-t`, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: "back.out(2)" }, b + z.tikla.sonuc);
      }
    },
  };

  // ── Telefon: panelin gerçek mobil ekranı (430 px genişlikte çekim) telefon çerçevesinde.
  // Dikeyde telefon büyük ve alttan taşar; yatayda sağda durur, başlık ve notlar solda.
  SAHNE.telefon = {
    html: (s, z, id) => {
      const PW = s._pw || 430, PH = s._ph || 932;
      const ph = DIKEY ? { x: 90, y: 470, w: 900, bez: 22 } : { x: 1090, y: 96, w: 700, bez: 18 };
      const sw = ph.w - 2 * ph.bez, k = sw / PW, sb = DIKEY ? 46 : 32;   // sb: durum çubuğu
      const ust = s.ustSabit ?? 65;   // panelin yapışkan üst çubuğu (CSS px): kaydırırken ekranın üstünde sabit kalır
      const vTop = ph.y + ph.bez + sb, visH = (DIKEY ? 1920 : 1080) - vTop + 20;
      const useH = (DIKEY ? SAFE.bottom - 150 : 1080 - 60) - vTop;      // hedefin ortalanacağı görünür yükseklik
      const camFor = (t, zoom) => {
        const sc = clamp(Math.min((sw * 0.9) / (t.w * k), (useH * 0.55) / (t.h * k)), 1, zoom || s.zoom || 1.35);
        const cx = (t.x + t.w / 2) * k * sc, cy = (t.y + t.h / 2) * k * sc;
        return { s: sc, x: clamp(sw / 2 - cx, sw - PW * k * sc, 0), y: clamp(ust * k + (useH - ust * k) * 0.46 - cy, Math.min(0, visH - PH * k * sc), 0) };
      };
      Object.assign(s, { _k: k, _sw: sw, _vTop: vTop, _ph: ph });
      s._cams = (s.vurgu || []).map((v) => camFor(v.r, v.zoom));
      if (s.yaz) s._camYaz = camFor(s.yaz.r, 1.3);
      if (s.tikla) s._camTik = camFor(s.tikla.r, 1.3);
      s._cam0 = { s: 1, x: 0, y: -(s.basY || 0) * k };
      const ic = (p) => ({ x: p.x * k, y: p.y * k, w: p.w * k, h: p.h * k });
      const etiket = s.adim && s._toplam > 1 ? `<div class="mono cyan" id="${id}-e" style="font-size:${DIKEY ? 28 : 26}px;margin-bottom:${DIKEY ? 10 : 8}px">Adım ${s.adim} / ${s._toplam}</div>` : "";
      const baslik = s.adim
        ? `<div style="display:flex;gap:${DIKEY ? 28 : 30}px;align-items:flex-start"><div class="badge" id="${id}-n" style="width:${DIKEY ? 96 : 92}px;height:${DIKEY ? 96 : 92}px;font-size:${DIKEY ? 52 : 50}px">${s.adim}</div>
            <div style="flex:1">${etiket}<div class="h2" id="${id}-m" style="font-size:${DIKEY ? 58 : 62}px">${yazi(s.metin)}</div></div></div>`
        : `<div class="h1" id="${id}-m" style="font-size:${DIKEY ? 74 : 76}px;${DIKEY ? "text-align:center" : ""}">${yazi(s.metin)}</div>`;
      const hdr = DIKEY
        ? `<div class="abs" style="left:60px;right:60px;top:${SAFE.top}px">${baslik}</div>`
        : `<div class="abs" style="left:120px;width:880px;top:150px">${baslik}${s.yol ? `<div class="chip" id="${id}-yl" style="margin-top:30px;font-size:30px;padding:12px 26px;border-color:rgba(245,176,25,0.85)">${icon("pin", 32, AMBER)}${s.yol}</div>` : ""}</div>`;
      const rings = (s.vurgu || []).map((v, i) => { const q = ic(v.r), cm = s._cams[i];
        return `<div class="spot" id="${id}-r${i}" style="left:${q.x - 6}px;top:${q.y - 5}px;width:${q.w + 12}px;height:${q.h + 10}px;border-width:${5 / cm.s}px;border-radius:${14 / cm.s}px;opacity:0"></div>`; }).join("");
      const gz = (s.gizle || []).map((g) => { const q = ic(g); return `<div class="abs" style="left:${q.x}px;top:${q.y}px;width:${q.w}px;height:${q.h}px;background:#E3E9F0;border-radius:${3 * k}px"></div>`; }).join("");
      let yaz = "";
      if (s.yaz) { const q = ic(s.yaz.r);
        yaz = `<div class="abs" id="${id}-y" style="left:${q.x}px;top:${q.y}px;width:${q.w}px;height:${q.h}px;background:#fff;border:${1.5 * k}px solid ${BLUE};border-radius:${6 * k}px;
          display:flex;align-items:center;padding:0 ${8 * k}px;font-size:${Math.min(q.h * 0.5, 15 * k)}px;color:#0B1F33;font-family:'Inter Tight';opacity:0;overflow:hidden;white-space:nowrap">
          ${[...s.yaz.metin].map((c) => `<span class="yc" style="opacity:0">${c === " " ? "&nbsp;" : c}</span>`).join("")}<span class="caret" style="width:${1.5 * k}px;height:${q.h * 0.5}px;background:${BLUE};margin-left:2px"></span></div>`; }
      // notlar: dikeyde telefonun üstünde güvenli alanın altında, yatayda sol sütunda
      const notYer = DIKEY ? `left:0;right:0;margin:0 auto;width:fit-content;max-width:900px;top:${SAFE.bottom - 140}px` : `left:120px;max-width:880px;top:640px`;
      const notes = (s.vurgu || []).map((v, i) => v.not ? `<div class="note" id="${id}-o${i}" style="${notYer};font-size:${DIKEY ? 44 : 42}px;opacity:0"><span class="nb">${i + 1}</span><span>${v.not}</span></div>` : "").join("");
      const toast = s.tikla && s.tikla.sonuc ? `<div class="abs toast" id="${id}-t" style="${notYer};font-size:${DIKEY ? 44 : 40}px;opacity:0">${icon("check", DIKEY ? 46 : 42, "#1E9E5A", 2.6)}${s.tikla.sonuc}</div>` : "";
      const saat = `<div class="abs" style="left:0;right:0;top:0;height:${sb}px;background:#ffffff;display:flex;align-items:center;justify-content:space-between;padding:0 ${DIKEY ? 44 : 30}px;font-size:${DIKEY ? 24 : 17}px;font-weight:700;color:#0B1F33;z-index:2">
          <span>09:41</span><span style="display:flex;gap:${DIKEY ? 10 : 7}px;align-items:center">
          <svg width="${DIKEY ? 30 : 21}" height="${DIKEY ? 20 : 14}" viewBox="0 0 30 20"><rect x="0" y="13" width="5" height="7" rx="1" fill="#0B1F33"/><rect x="8" y="9" width="5" height="11" rx="1" fill="#0B1F33"/><rect x="16" y="5" width="5" height="15" rx="1" fill="#0B1F33"/><rect x="24" y="0" width="5" height="20" rx="1" fill="#0B1F33"/></svg>
          <svg width="${DIKEY ? 44 : 31}" height="${DIKEY ? 22 : 15}" viewBox="0 0 44 22"><rect x="1" y="1" width="38" height="20" rx="6" fill="none" stroke="#0B1F33" stroke-width="2"/><rect x="4" y="4" width="28" height="14" rx="3" fill="#0B1F33"/><rect x="40" y="7" width="3" height="8" rx="1.5" fill="#0B1F33"/></svg></span></div>
          <div class="abs" style="left:50%;top:${DIKEY ? 10 : 7}px;width:${DIKEY ? 190 : 124}px;margin-left:-${DIKEY ? 95 : 62}px;height:${DIKEY ? 34 : 24}px;border-radius:20px;background:#05080d;z-index:3"></div>`;
      return `${hdr}
        <div class="abs telefon" id="${id}-d" style="left:${ph.x}px;top:${ph.y}px;width:${ph.w}px;height:${(DIKEY ? 1920 : 1080) - ph.y + 120}px;padding:${ph.bez}px;border-radius:${DIKEY ? 96 : 66}px">
          <div class="ekr" style="width:${sw}px;height:100%;border-radius:${DIKEY ? 76 : 52}px">
            ${saat}
            <div class="abs" style="left:0;top:${sb}px;width:${sw}px;bottom:0;overflow:hidden">
              <div class="cam" id="${id}-c"><img data-layout-allow-overflow decoding="sync" loading="eager" src="${s.dosya}" style="position:absolute;left:0;top:0;width:${PW * k}px">${gz}${rings}${yaz}</div>
              ${ust ? `<div class="abs" style="left:0;top:0;width:${sw}px;height:${ust * k}px;overflow:hidden;box-shadow:0 4px 14px rgba(11,31,51,0.12)"><img decoding="sync" loading="eager" src="${s.dosya}" style="position:absolute;left:0;top:0;width:${PW * k}px"></div>` : ""}
              <div class="dokun" id="${id}-k" style="width:${DIKEY ? 84 : 60}px;height:${DIKEY ? 84 : 60}px;opacity:0"></div>
              <div class="ring" id="${id}-p"></div></div></div></div>
        ${notes}${toast}`;
    },
    anim: (tl, s, z, id, b) => {
      tl.fromTo(`#${id}-d`, { y: DIKEY ? 260 : 160, opacity: 0, rotation: DIKEY ? 0 : 3 }, { y: 0, opacity: 1, rotation: 0, duration: 0.9, ease: "expo.out" }, b + z.giris);
      if ($(`#${id}-n`)) popIn(tl, `#${id}-n`, b + 0.15);
      if ($(`#${id}-e`)) tl.fromTo(`#${id}-e`, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4 }, b + 0.2);
      if ($(`#${id}-yl`)) popIn(tl, `#${id}-yl`, b + 0.7, 0.5);
      rise(tl, $$(`#${id}-m .w`), b + z.metin, 0.05, 40);
      const cam = `#${id}-c`, go = (c, t, d = 0.8) => tl.to(cam, { x: c.x, y: c.y, scale: c.s, duration: d, ease: "power3.inOut" }, t);
      tl.set(cam, { x: s._cam0.x, y: s._cam0.y, scale: 1, transformOrigin: "0 0" }, b);
      (s.vurgu || []).forEach((v, i) => {
        const t = b + z.vurgu[i];
        go(s._cams[i], t);
        tl.fromTo(`#${id}-r${i}`, { opacity: 0, scale: 1.12 }, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)" }, t + 0.75);
        if ($(`#${id}-o${i}`)) tl.fromTo(`#${id}-o${i}`, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.45, ease: "expo.out" }, t + 0.85);
        const end = t + 2.8 - 0.25;
        tl.to(`#${id}-r${i}`, { opacity: 0, duration: 0.25 }, end);
        if ($(`#${id}-o${i}`)) tl.to(`#${id}-o${i}`, { opacity: 0, duration: 0.25 }, end);
      });
      const nokta = (c, rr) => ({ x: (rr.x + rr.w / 2) * s._k * c.s + c.x, y: (rr.y + rr.h / 2) * s._k * c.s + c.y });
      const dokun = `#${id}-k`;
      if (s.yaz) {
        const t = b + z.yaz.bas, c = s._camYaz; go(c, t);
        const p = nokta(c, s.yaz.r);
        tl.set(dokun, { left: p.x, top: p.y }, b);
        tl.fromTo(dokun, { scale: 1.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: "power2.out" }, t + 0.6);
        tl.to(dokun, { opacity: 0, duration: 0.3 }, t + 1.1);
        tl.fromTo(`#${id}-y`, { opacity: 0 }, { opacity: 1, duration: 0.2 }, b + z.yaz.yazi - 0.15);
        const cs = $$(`#${id}-y .yc`), step = (z.yaz.bit - z.yaz.yazi) / Math.max(1, cs.length);
        cs.forEach((ch, i) => tl.set(ch, { opacity: 1 }, b + z.yaz.yazi + i * step));
      }
      if (s.tikla) {
        const t = b + z.tikla.bas, c = s._camTik; go(c, t);
        const p = nokta(c, s.tikla.r);
        tl.set(dokun, { left: p.x, top: p.y }, b + z.tikla.imlec - 0.01);
        tl.fromTo(dokun, { scale: 1.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }, b + z.tikla.imlec + 0.5);
        tl.to(dokun, { keyframes: [{ scale: 0.75, duration: 0.1 }, { scale: 1, duration: 0.18 }] }, b + z.tikla.tik);
        tl.to(dokun, { opacity: 0, duration: 0.35 }, b + z.tikla.tik + 0.6);
        tl.set(`#${id}-p`, { left: p.x, top: p.y }, b);
        ringAnim(tl, `#${id}-p`, b + z.tikla.tik + 0.05, DIKEY ? 300 : 220, 0.7);
        if ($(`#${id}-t`)) tl.fromTo(`#${id}-t`, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: "back.out(2)" }, b + z.tikla.sonuc);
      }
    },
  };

  // ── Cihazlar: aynı panel masaüstü tarayıcıda ve telefonda (tanıtım: "Panel cebinizde")
  SAHNE.cihaz = {
    html: (s, z, id) => {
      const m = s.masa, t = s.tel;
      const mw = DIKEY ? 900 : 1180, mk = mw / m.r.w, mh = Math.round(m.r.h * mk);
      const pw = DIKEY ? 470 : 470, bez = 14, psw = pw - 2 * bez, pk = psw / (t._pw || 430), phh = DIKEY ? 900 : 760;
      const mx = DIKEY ? 90 : 170, my = DIKEY ? 560 : 300, px = DIKEY ? 560 : 1300, py = DIKEY ? 860 : 230;
      return `<div class="abs" style="left:${DIKEY ? 60 : 150}px;right:${DIKEY ? 60 : 150}px;top:${DIKEY ? SAFE.top : 70}px;text-align:center"><div class="h1" id="${id}-m" style="font-size:${DIKEY ? 88 : 80}px">${yazi(s.metin)}</div></div>
        <div class="device" id="${id}-d" style="left:${mx}px;top:${my}px;width:${mw}px">
          <div class="bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><div class="url">panel.mtshijyen.com${m.url || ""}</div></div>
          <div class="view" style="width:${mw}px;height:${mh}px"><img decoding="sync" loading="eager" src="${m.dosya}" style="left:${-m.r.x * mk}px;top:${-m.r.y * mk}px;width:${1920 * mk}px">
          ${(m.gizle || []).map((g) => `<div class="abs" style="left:${(g.x - m.r.x) * mk}px;top:${(g.y - m.r.y) * mk}px;width:${g.w * mk}px;height:${g.h * mk}px;background:#E3E9F0"></div>`).join("")}</div></div>
        <div class="abs telefon" id="${id}-p" style="left:${px}px;top:${py}px;width:${pw}px;height:${phh}px;padding:${bez}px;border-radius:58px">
          <div class="ekr" style="width:${psw}px;height:100%;border-radius:46px">
            <div class="abs" style="left:50%;top:8px;width:110px;margin-left:-55px;height:22px;border-radius:12px;background:#05080d;z-index:3"></div>
            <img decoding="sync" loading="eager" src="${t.dosya}" style="position:absolute;left:0;top:${-(t.basY || 0) * pk + 30}px;width:${(t._pw || 430) * pk}px">
            ${(t.gizle || []).map((g) => `<div class="abs" style="left:${g.x * pk}px;top:${(g.y - (t.basY || 0)) * pk + 30}px;width:${g.w * pk}px;height:${g.h * pk}px;background:#E3E9F0"></div>`).join("")}
            <div class="abs" style="left:0;right:0;top:0;height:30px;background:#fff"></div></div></div>
        ${s.alt ? `<div class="abs" style="left:0;right:0;top:${DIKEY ? SAFE.bottom - 110 : 960}px;text-align:center"><div class="chip" id="${id}-a" style="font-size:${DIKEY ? 40 : 36}px">${icon(s.ikon || "phone", DIKEY ? 40 : 36, AMBER)}${s.alt}</div></div>` : ""}`;
    },
    anim: (tl, s, z, id, b) => {
      rise(tl, $$(`#${id}-m .w`), b + z.metin, 0.06, 50);
      tl.fromTo(`#${id}-d`, { x: -140, opacity: 0, rotationY: 10 }, { x: 0, opacity: 1, rotationY: 0, duration: 0.9, ease: "expo.out" }, b + z.masa);
      tl.fromTo(`#${id}-p`, { y: 260, opacity: 0, rotation: 8 }, { y: 0, opacity: 1, rotation: -4, duration: 0.9, ease: "back.out(1.4)" }, b + z.tel);
      tl.to(`#${id}-d`, { y: -12, duration: z.dur - z.masa, ease: "sine.inOut" }, b + z.masa + 0.9);
      tl.to(`#${id}-p`, { y: -26, rotation: -2, duration: z.dur - z.tel, ease: "sine.inOut" }, b + z.tel + 0.9);
      if ($(`#${id}-a`)) popIn(tl, `#${id}-a`, b + z.tel + 0.8);
    },
  };

  SAHNE.ipucu = {
    html: (s, z, id) => `<div class="full center" style="gap:${DIKEY ? 34 : 26}px;padding:0 ${DIKEY ? 60 : 200}px">
        <div class="h1" id="${id}-b" style="font-size:${DIKEY ? 92 : 80}px;margin-bottom:${DIKEY ? 30 : 16}px">${yazi(s.baslik)}</div>
        ${s.maddeler.map(([ic, t], i) => `<div class="card mad" id="${id}-m${i}" style="width:100%;max-width:1400px;display:flex;align-items:center;gap:30px;padding:${DIKEY ? "30px 34px" : "24px 34px"};text-align:left">
          <div class="tile" style="width:${DIKEY ? 96 : 84}px;height:${DIKEY ? 96 : 84}px;border-radius:22px;flex:none">${icon(ic, DIKEY ? 54 : 48)}</div>
          <div style="font-size:${DIKEY ? 46 : 44}px;font-weight:600">${t}</div></div>`).join("")}</div>`,
    anim: (tl, s, z, id, b) => {
      rise(tl, $$(`#${id}-b .w`), b + z.baslik, 0.08);
      s.maddeler.forEach((_, i) => { const el = $(`#${id}-m${i}`), t = b + z.madde[i];
        tl.fromTo(el, { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "expo.out" }, t); draw(tl, $("svg", el), t + 0.1); });
    },
  };

  SAHNE.soru = {
    html: (s, z, id) => {
      const POS = DIKEY ? [[80, 260], [560, 300], [120, 420], [600, 440], [80, 1460], [560, 1500], [140, 1620]]
        : [[150, 150], [1350, 170], [170, 850], [1330, 860], [760, 110], [760, 900]];
      return (s.cipler || []).map(([ic, t], i) => `<div class="abs chip sc" id="${id}-c${i}" style="left:${POS[i % POS.length][0]}px;top:${POS[i % POS.length][1]}px;font-size:${DIKEY ? 40 : 36}px">${icon(ic, DIKEY ? 40 : 36)}${t}</div>`).join("")
        + `<div class="full center" style="padding:0 ${DIKEY ? 70 : 220}px"><div class="h1" id="${id}-m" style="font-size:${DIKEY ? 112 : 116}px">${yazi(s.metin)}</div>
          ${s.alt ? `<div class="soft" id="${id}-a" style="font-size:${DIKEY ? 50 : 46}px;font-weight:600;margin-top:34px">${s.alt}</div>` : ""}</div>`;
    },
    anim: (tl, s, z, id, b) => {
      (s.cipler || []).forEach((_, i) => { popIn(tl, `#${id}-c${i}`, b + z.cip[i]); tl.to(`#${id}-c${i}`, { y: -18, duration: 2.5, ease: "sine.inOut" }, b + z.cip[i] + 0.6); });
      rise(tl, $$(`#${id}-m .w`), b + z.metin, 0.1, 70);
      if ($(`#${id}-a`)) tl.fromTo(`#${id}-a`, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, b + z.vurgu);
    },
  };

  SAHNE.sayac = {
    html: (s, z, id) => `<div class="full center" style="gap:${DIKEY ? 36 : 22}px;padding:0 ${DIKEY ? 60 : 160}px">
        <div class="h1" id="${id}-b" style="font-size:${DIKEY ? 88 : 80}px">${yazi(s.baslik)}</div>
        <div style="display:flex;align-items:baseline;gap:22px;justify-content:center;margin-top:${DIKEY ? 40 : 10}px">
          <div id="${id}-s" style="font-size:${DIKEY ? 200 : 220}px;font-weight:800;letter-spacing:-0.05em;line-height:1">0</div>
          ${s.sonek ? `<div class="soft" style="font-size:${DIKEY ? 70 : 76}px;font-weight:700">${s.sonek}</div>` : ""}</div>
        ${s.alt ? `<div class="cyan" id="${id}-a" style="font-size:${DIKEY ? 50 : 48}px;font-weight:600">${s.alt}</div>` : ""}
        <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin-top:${DIKEY ? 40 : 20}px">${(s.cipler || []).map(([ic, t], i) => `<div class="chip" id="${id}-c${i}" style="font-size:${DIKEY ? 40 : 36}px">${icon(ic, DIKEY ? 40 : 36)}${t}</div>`).join("")}</div></div>`,
    anim: (tl, s, z, id, b) => {
      rise(tl, $$(`#${id}-b .w`), b + z.baslik, 0.08);
      const d = s.ondalik || 0, f = (v) => (s.para ? fmt(v, d) : (s.onek || "") + v.toLocaleString("tr-TR", { minimumFractionDigits: d, maximumFractionDigits: d }));
      countTo(tl, $(`#${id}-s`), b + z.sayi, s.deger, z.ini - z.sayi, f);
      tl.fromTo(`#${id}-s`, { scale: 0.7 }, { scale: 1, duration: z.ini - z.sayi, ease: "expo.out" }, b + z.sayi);
      if ($(`#${id}-a`)) tl.fromTo(`#${id}-a`, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, b + z.alt);
      (s.cipler || []).forEach((_, i) => popIn(tl, `#${id}-c${i}`, b + z.cip[i]));
    },
  };

  SAHNE.cubuk = {
    html: (s, z, id) => `<div class="abs" style="left:${DIKEY ? 60 : 150}px;right:${DIKEY ? 60 : 150}px;top:${DIKEY ? SAFE.top : 90}px">
        <div class="h1" id="${id}-b" style="font-size:${DIKEY ? 92 : 84}px">${yazi(s.baslik)}</div>
        <div style="margin-top:${DIKEY ? 80 : 60}px;display:flex;flex-direction:column;gap:${DIKEY ? 34 : 34}px">
        ${s.satirlar.map(([n, u, m], i) => DIKEY
          ? `<div class="card cr" id="${id}-r${i}" style="padding:32px 38px"><div style="display:flex;justify-content:space-between;align-items:baseline"><div style="font-size:46px;font-weight:700">${n}</div>
              <div class="soft" style="font-size:34px;font-weight:600">${s.para ? fmt(m, 0) : m}</div></div><div class="bar-bg" style="margin-top:22px"><div class="bar-fg"></div></div>
              <div class="cyan cu" style="margin-top:16px;font-size:40px;font-weight:700">0</div></div>`
          : `<div class="card cr" id="${id}-r${i}" style="padding:30px 44px;display:grid;grid-template-columns:400px 1fr 480px;align-items:center;gap:40px">
              <div style="font-size:44px;font-weight:700">${n}</div><div class="bar-bg"><div class="bar-fg"></div></div>
              <div style="text-align:right;font-size:40px;font-weight:600"><span class="cu">0</span><span class="soft"> / ${s.para ? fmt(m, 0) : m}</span></div></div>`).join("")}</div></div>`,
    anim: (tl, s, z, id, b) => {
      rise(tl, $$(`#${id}-b .w`), b + z.baslik, 0.08);
      s.satirlar.forEach(([, u, m], i) => { const r = $(`#${id}-r${i}`), t = b + z.satir[i];
        tl.fromTo(r, { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "expo.out" }, t);
        tl.fromTo($(".bar-fg", r), { scaleX: 0 }, { scaleX: Math.max(0.02, u / m), duration: 1.4, ease: "expo.out" }, t + 0.5);
        countTo(tl, $(".cu", r), t + 0.5, u, 1.4, (v) => (s.para ? fmt(v) : Math.round(v).toLocaleString("tr-TR")) + (DIKEY && s.ek ? " " + s.ek : "")); });
      if (s.vurgu != null) tl.fromTo(`#${id}-r${s.vurgu}`, { boxShadow: "0 0 0 0 rgba(245,176,25,0)" }, { boxShadow: "0 0 0 6px rgba(245,176,25,0.9)", duration: 0.4 }, b + z.vurgu);
    },
  };

  SAHNE.akis = {
    html: (s, z, id) => {
      const n = s.adimlar.length;
      if (DIKEY) {
        const y0 = 560, gap = Math.min(230, (SAFE.bottom - 130 - y0) / Math.max(1, n - 1));
        return `<div class="abs" style="left:60px;right:60px;top:${SAFE.top}px"><div class="h1" id="${id}-b" style="font-size:92px">${yazi(s.baslik)}</div></div>
          <div class="abs" style="left:124px;top:${y0 + 60}px;width:10px;height:${(n - 1) * gap}px;background:#12304f;border-radius:5px"><div id="${id}-l" style="width:100%;height:100%;background:${AMBER};border-radius:5px;transform-origin:50% 0"></div></div>
          ${s.adimlar.map(([ic, t, a], i) => `<div class="abs ak" id="${id}-a${i}" style="left:70px;top:${y0 + i * gap}px;right:60px;display:flex;align-items:center;gap:36px">
            <div class="tile at" style="width:120px;height:120px;border-radius:30px;flex:none">${icon(ic, 64)}</div>
            <div><div style="font-size:50px;font-weight:700">${t}</div>${a ? `<div class="soft" style="font-size:36px;font-weight:500;margin-top:6px">${a}</div>` : ""}</div></div>`).join("")}`;
      }
      const span = 1600 / n, x0 = 160 + span / 2;
      return `<div class="abs" style="left:150px;right:150px;top:110px;text-align:center"><div class="h1" id="${id}-b" style="font-size:88px">${yazi(s.baslik)}</div></div>
        <div class="abs" style="left:${x0}px;top:${470}px;width:${(n - 1) * span}px;height:10px;background:#12304f;border-radius:5px"><div id="${id}-l" style="width:100%;height:100%;background:${AMBER};border-radius:5px;transform-origin:0 50%"></div></div>
        ${s.adimlar.map(([ic, t, a], i) => `<div class="abs ak center" id="${id}-a${i}" style="left:${x0 + i * span - span / 2}px;top:400px;width:${span}px;gap:22px">
          <div class="tile at" style="width:150px;height:150px;border-radius:36px">${icon(ic, 80)}</div>
          <div style="font-size:${n > 5 ? 34 : 40}px;font-weight:700;padding:0 10px">${t}</div>${a ? `<div class="soft" style="font-size:${n > 5 ? 26 : 30}px;font-weight:500;padding:0 14px">${a}</div>` : ""}</div>`).join("")}`;
    },
    anim: (tl, s, z, id, b) => {
      rise(tl, $$(`#${id}-b .w`), b + z.baslik, 0.08);
      const n = s.adimlar.length;
      tl.fromTo(`#${id}-l`, DIKEY ? { scaleY: 0 } : { scaleX: 0 }, { ...(DIKEY ? { scaleY: 1 } : { scaleX: 1 }), duration: (n - 1) * 0.75, ease: "none" }, b + z.adim[0] + 0.3);
      s.adimlar.forEach((_, i) => { const el = $(`#${id}-a${i}`), t = b + z.adim[i];
        tl.fromTo(el, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.55, ease: "back.out(2)" }, t);
        tl.fromTo($(".at", el), { backgroundColor: "#164069" }, { backgroundColor: "#2F5E8F", duration: 0.3 }, t + 0.2);
        draw(tl, $("svg", el), t + 0.1); });
    },
  };

  SAHNE.karsilastir = {
    html: (s, z, id) => {
      const kart = (cls, baslik, ic, renk, maddeler, n) => `<div class="card ${cls}" id="${id}-${n}" style="${DIKEY ? "width:100%" : "flex:1"};padding:${DIKEY ? "36px 40px" : "40px 46px"};${n === "y" ? `border-color:${AMBER}` : "border-color:rgba(255,120,120,0.45)"}">
          <div style="font-size:${DIKEY ? 50 : 48}px;font-weight:800;color:${renk};margin-bottom:24px">${baslik}</div>
          ${maddeler.map((m) => `<div style="display:flex;gap:18px;align-items:center;font-size:${DIKEY ? 42 : 40}px;font-weight:600;margin-top:18px">${icon(ic, DIKEY ? 44 : 40, renk, 2.6)}<span>${m}</span></div>`).join("")}</div>`;
      return `<div class="abs" style="left:${DIKEY ? 60 : 150}px;right:${DIKEY ? 60 : 150}px;top:${DIKEY ? SAFE.top : 80}px;${DIKEY ? "" : "text-align:center"}"><div class="h1" id="${id}-b" style="font-size:${DIKEY ? 92 : 84}px">${yazi(s.baslik)}</div></div>
        <div class="abs" style="left:${DIKEY ? 60 : 150}px;right:${DIKEY ? 60 : 150}px;top:${DIKEY ? 560 : 300}px;display:flex;${DIKEY ? "flex-direction:column;gap:40px" : "gap:50px"}">
          ${kart("ks", s.once || "Eskiden", "x", "#FF8A8A", s.sol, "x")}${kart("ks", s.sonra || "MTS Hijyen B2B ile", "check", AMBER, s.sag, "y")}</div>`;
    },
    anim: (tl, s, z, id, b) => {
      rise(tl, $$(`#${id}-b .w`), b + z.baslik, 0.08);
      tl.fromTo(`#${id}-x`, { x: DIKEY ? 0 : -100, y: DIKEY ? 60 : 0, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.7, ease: "expo.out" }, b + z.sol);
      tl.fromTo(`#${id}-y`, { scale: 1.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: "power4.in" }, b + z.sag - 0.3);
    },
  };

  // ── Kinetik kelimeler: her kelime bir vuruşta çarpar, istenirse üstü çizilir, sonra ana cümle gelir
  SAHNE.kelime = {
    html: (s, z, id) => `<div class="full center" style="padding:0 ${DIKEY ? 70 : 160}px">
        ${s.ust ? `<div class="mono cyan" id="${id}-u" style="font-size:${DIKEY ? 34 : 30}px;margin-bottom:${DIKEY ? 44 : 34}px">${s.ust}</div>` : ""}
        <div id="${id}-k" style="display:flex;flex-wrap:wrap;${DIKEY ? "flex-direction:column;" : ""}justify-content:center;align-items:center;gap:${DIKEY ? "22px 0" : "26px 56px"}">
          ${s.kelimeler.map((k, i) => `<div class="kw" id="${id}-k${i}" style="position:relative;font-size:${DIKEY ? 112 : 120}px;font-weight:800;letter-spacing:-0.04em;line-height:1.08;white-space:nowrap">${k}<i class="cizgi" style="position:absolute;left:-3%;right:-3%;top:50%;height:12px;margin-top:-6px;background:#FF6B6B;border-radius:6px;transform:scaleX(0);transform-origin:0 50%"></i></div>`).join("")}</div>
        <div class="abs" style="left:${DIKEY ? 70 : 160}px;right:${DIKEY ? 70 : 160}px;top:0;bottom:0;display:flex;align-items:center;justify-content:center">
          <div class="h1" id="${id}-s" style="font-size:${DIKEY ? 116 : 128}px">${yazi(s.son)}</div></div></div>`,
    anim: (tl, s, z, id, b) => {
      if ($(`#${id}-u`)) tl.fromTo(`#${id}-u`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, b + 0.05);
      s.kelimeler.forEach((_, i) => tl.fromTo(`#${id}-k${i}`, { scale: 1.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "power4.out" }, b + z.kelime[i]));
      if (s.ciz) {
        tl.fromTo($$(`#${id} .cizgi`), { scaleX: 0 }, { scaleX: 1, duration: 0.3, stagger: 0.07, ease: "power2.out" }, b + z.ciz);
        tl.to($$(`#${id} .kw`), { opacity: 0.4, duration: 0.3, stagger: 0.07 }, b + z.ciz + 0.1);
      }
      tl.to(`#${id}-k`, { y: DIKEY ? -90 : -70, opacity: 0, duration: 0.4, ease: "power2.in" }, b + z.son - 0.4);
      if ($(`#${id}-u`)) tl.to(`#${id}-u`, { opacity: 0, duration: 0.3 }, b + z.son - 0.4);
      rise(tl, $$(`#${id}-s .w`), b + z.son, 0.1, 70);
    },
  };

  // ── Karakter: sade avatar, ad, rol ve konuşma balonu (sorun ya da sonuç cümlesi)
  SAHNE.karakter = {
    html: (s, z, id) => {
      const av = AVATAR(s.avatar || {}, DIKEY ? 380 : 400), dertli = (s.avatar || {}).ruh === "dertli";
      const ad = `<div id="${id}-n" style="display:flex;flex-direction:column;align-items:center;margin-top:24px;gap:14px">
          ${s.ad ? `<div style="font-size:${DIKEY ? 52 : 48}px;font-weight:800">${s.ad}</div>` : ""}
          ${s.rol ? `<div class="chip" style="font-size:${DIKEY ? 32 : 30}px;padding:12px 26px">${icon(s.ikon || "user", DIKEY ? 32 : 30)}${s.rol}</div>` : ""}</div>`;
      const balon = (yon) => `<div class="card balon" id="${id}-b" style="padding:${DIKEY ? "42px 48px" : "50px 60px"};border-color:${dertli ? "rgba(255,138,138,0.8)" : "rgba(245,176,25,0.9)"}">
          <i class="kuyruk ${yon}"></i><div class="h2" id="${id}-m" style="font-size:${DIKEY ? 60 : 64}px">${yazi(s.metin)}</div></div>`;
      return DIKEY
        ? `<div class="abs" style="left:60px;right:60px;top:${SAFE.top}px;bottom:${1920 - SAFE.bottom}px;display:flex;flex-direction:column;align-items:center;justify-content:center">
            <div id="${id}-a">${av}</div>${ad}<div style="margin-top:56px;width:100%">${balon("ust")}</div></div>`
        : `<div class="abs" style="left:150px;right:150px;top:0;bottom:0;display:flex;align-items:center;gap:90px">
            <div style="flex:none;display:flex;flex-direction:column;align-items:center"><div id="${id}-a">${av}</div>${ad}</div>
            <div style="flex:1">${balon("sol")}</div></div>`;
    },
    anim: (tl, s, z, id, b) => {
      tl.fromTo(`#${id}-a`, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.8)" }, b + z.avatar);
      const n = Math.max(1, Math.floor((z.dur - 1) / 1.6));
      tl.fromTo(`#${id}-a`, { y: 0 }, { y: -10, duration: 1.6, ease: "sine.inOut", yoyo: true, repeat: n - 1 }, b + z.avatar + 0.7);
      tl.fromTo(`#${id}-n`, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5, ease: "expo.out" }, b + z.ad);
      tl.fromTo(`#${id}-b`, { scale: 0.6, opacity: 0, transformOrigin: DIKEY ? "50% 0%" : "0% 50%" }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" }, b + z.balon);
      rise(tl, $$(`#${id}-m .w`), b + z.balon + 0.2, 0.05, 30);
    },
  };

  // ── Gündem: videoda neler anlatılacak
  SAHNE.gundem = {
    html: (s, z, id) => `${!DIKEY && s.ikon ? `<div class="abs" id="${id}-i" style="right:220px;top:50%;margin-top:-190px;width:380px;height:380px;border-radius:90px;display:grid;place-items:center;background:#164069;border:2px solid rgba(95,211,255,0.35);box-shadow:0 0 140px rgba(47,127,224,0.45)">${icon(s.ikon, 200, AMBER, 1.8)}</div>` : ""}
      <div class="abs" style="left:${DIKEY ? 70 : 260}px;right:${DIKEY ? 70 : 760}px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;gap:${DIKEY ? 30 : 24}px">
        ${DIKEY && s.ikon ? `<div id="${id}-i" style="width:200px;height:200px;border-radius:52px;display:grid;place-items:center;background:#164069;border:2px solid rgba(95,211,255,0.35);box-shadow:0 0 120px rgba(47,127,224,0.45);margin-bottom:30px">${icon(s.ikon, 110, AMBER, 1.8)}</div>` : ""}
        ${s.ust ? `<div class="mono cyan" id="${id}-u" style="font-size:${DIKEY ? 34 : 30}px">${s.ust}</div>` : ""}
        <div class="h1" id="${id}-b" style="font-size:${DIKEY ? 108 : 88}px;margin-bottom:${DIKEY ? 34 : 18}px">${yazi(s.baslik || "Bu videoda")}</div>
        ${s.maddeler.map((m, i) => `<div id="${id}-m${i}" style="display:flex;align-items:center;gap:30px">
          <div class="badge" style="width:${DIKEY ? 92 : 76}px;height:${DIKEY ? 92 : 76}px;font-size:${DIKEY ? 48 : 40}px">${i + 1}</div>
          <div style="font-size:${DIKEY ? 58 : 50}px;font-weight:700;line-height:1.15">${m}</div></div>`).join("")}</div>`,
    anim: (tl, s, z, id, b) => {
      if ($(`#${id}-u`)) tl.fromTo(`#${id}-u`, { opacity: 0 }, { opacity: 1, duration: 0.4 }, b + 0.1);
      if ($(`#${id}-i`)) { tl.fromTo(`#${id}-i`, { scale: 0.6, opacity: 0, rotation: -12 }, { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }, b + 0.2); draw(tl, $(`#${id}-i svg`), b + 0.35); }
      rise(tl, $$(`#${id}-b .w`), b + z.baslik, 0.08);
      s.maddeler.forEach((_, i) => tl.fromTo(`#${id}-m${i}`, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" }, b + z.madde[i]));
    },
  };

  // ── Kontrol listesi: maddeler sırayla işaretlenir (özet ve tekrar için)
  SAHNE.kontrol = {
    html: (s, z, id) => `<div class="abs" style="left:${DIKEY ? 60 : 260}px;right:${DIKEY ? 60 : 260}px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;gap:${DIKEY ? 28 : 24}px">
        <div class="h1" id="${id}-b" style="font-size:${DIKEY ? 92 : 84}px;margin-bottom:${DIKEY ? 34 : 22}px">${yazi(s.baslik)}</div>
        ${s.maddeler.map((m, i) => `<div class="card" id="${id}-m${i}" style="display:flex;align-items:center;gap:30px;padding:${DIKEY ? "28px 34px" : "22px 34px"}">
          <div class="kutu" style="width:${DIKEY ? 70 : 64}px;height:${DIKEY ? 70 : 64}px;border-radius:16px;border:4px solid #5FD3FF;flex:none;display:grid;place-items:center">${icon("check", DIKEY ? 50 : 46, "#2B1E00", 3.2)}</div>
          <div style="font-size:${DIKEY ? 46 : 44}px;font-weight:600;line-height:1.2">${m}</div></div>`).join("")}</div>`,
    anim: (tl, s, z, id, b) => {
      rise(tl, $$(`#${id}-b .w`), b + z.baslik, 0.08);
      s.maddeler.forEach((_, i) => { const el = $(`#${id}-m${i}`), t = b + z.madde[i];
        tl.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" }, t);
        tl.fromTo($(".kutu", el), { backgroundColor: "rgba(245,176,25,0)", borderColor: "#5FD3FF" }, { backgroundColor: "rgba(245,176,25,1)", borderColor: "#F5B019", duration: 0.2 }, t + 0.45);
        draw(tl, $(".kutu svg", el), t + 0.5);
        tl.fromTo(el, { borderColor: "rgba(95,211,255,0.5)" }, { borderColor: "rgba(245,176,25,0.9)", duration: 0.3 }, t + 0.45); });
    },
  };

  // ── Mini test: soru, seçenekler, 3 sn geri sayım, doğru cevap ve kısa açıklama
  SAHNE.test = {
    html: (s, z, id) => `<div class="abs" style="left:${DIKEY ? 60 : 200}px;right:${DIKEY ? 60 : 200}px;top:${DIKEY ? SAFE.top : 0}px;bottom:${DIKEY ? 1920 - SAFE.bottom : 0}px;display:flex;flex-direction:column;justify-content:center;gap:${DIKEY ? 24 : 20}px">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div class="chip" id="${id}-u" style="font-size:${DIKEY ? 34 : 30}px;padding:12px 28px">${icon("help", DIKEY ? 36 : 32, AMBER)}${s.ust || "Mini test"}</div>
          <div id="${id}-z" style="position:relative;width:${DIKEY ? 124 : 116}px;height:${DIKEY ? 124 : 116}px">
            <svg width="100%" height="100%" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="none" stroke="#12304f" stroke-width="10"/><circle class="zr" cx="60" cy="60" r="50" fill="none" stroke="${AMBER}" stroke-width="10" stroke-linecap="round" pathLength="1" stroke-dasharray="1" transform="rotate(-90 60 60)"/></svg>
            <div class="zn" style="position:absolute;inset:0;display:grid;place-items:center;font-size:${DIKEY ? 56 : 52}px;font-weight:800">3</div></div></div>
        <div class="h1" id="${id}-q" style="font-size:${DIKEY ? 78 : 72}px;margin:${DIKEY ? "16px 0 22px" : "6px 0 14px"}">${yazi(s.soru)}</div>
        ${s.secenekler.map((o, i) => `<div class="card" id="${id}-o${i}" style="display:flex;align-items:center;gap:28px;padding:${DIKEY ? "24px 30px" : "20px 32px"}">
          <div class="badge tb" style="width:${DIKEY ? 70 : 62}px;height:${DIKEY ? 70 : 62}px;font-size:${DIKEY ? 38 : 34}px;background:#164069;color:#fff;border:2px solid rgba(95,211,255,0.5)">${"ABCD"[i]}</div>
          <div style="font-size:${DIKEY ? 44 : 42}px;font-weight:600;flex:1;line-height:1.2">${o}</div>
          ${i === s.dogru ? `<div class="tk" style="flex:none">${icon("check", DIKEY ? 56 : 52, "#3BD483", 3)}</div>` : ""}</div>`).join("")}
        ${s.aciklama ? `<div class="soft" id="${id}-a" style="font-size:${DIKEY ? 42 : 40}px;font-weight:600;margin-top:${DIKEY ? 16 : 10}px;line-height:1.25">${yazi(s.aciklama)}</div>` : ""}</div>`,
    anim: (tl, s, z, id, b) => {
      popIn(tl, `#${id}-u`, b + 0.1);
      rise(tl, $$(`#${id}-q .w`), b + z.soru, 0.06, 50);
      s.secenekler.forEach((_, i) => tl.fromTo(`#${id}-o${i}`, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" }, b + z.secenek[i]));
      popIn(tl, `#${id}-z`, b + z.sayac - 0.3, 0.4);
      tl.fromTo(`#${id}-z .zr`, { strokeDashoffset: 0 }, { strokeDashoffset: 1, duration: 3, ease: "none" }, b + z.sayac);
      const zn = $(`#${id}-z .zn`), o = { v: 3 };
      tl.fromTo(o, { v: 3 }, { v: 0.001, duration: 3, ease: "none", onUpdate: () => { zn.textContent = Math.ceil(o.v); } }, b + z.sayac);
      tl.to(`#${id}-z`, { scale: 0, opacity: 0, duration: 0.3, ease: "power2.in" }, b + z.cevap - 0.05);
      s.secenekler.forEach((_, i) => {
        const el = $(`#${id}-o${i}`);
        if (i === s.dogru) {
          tl.to(el, { borderColor: "#3BD483", backgroundColor: "#0f3b2a", scale: 1.03, duration: 0.3, ease: "back.out(2)" }, b + z.cevap);
          tl.to($(".tb", el), { backgroundColor: "#3BD483", color: "#06210f", duration: 0.3 }, b + z.cevap);
          tl.fromTo($(".tk", el), { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2.4)" }, b + z.cevap + 0.1);
          draw(tl, $(".tk svg", el), b + z.cevap + 0.1);
        } else tl.to(el, { opacity: 0.35, duration: 0.3 }, b + z.cevap);
      });
      if ($(`#${id}-a`)) tl.fromTo(`#${id}-a`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, b + z.aciklama);
    },
  };

  // ── Rakamlar: 2–4 sayaç kartı (gerçek panel değerleri)
  SAHNE.rakamlar = {
    html: (s, z, id) => {
      const n = s.kartlar.length, kolon = DIKEY ? (n === 4 ? 2 : 1) : n, yan = DIKEY && kolon === 1;
      const fs = DIKEY ? (yan ? 92 : 70) : [0, 120, 100, 76, 62][n];
      return `<div class="abs" style="left:${DIKEY ? 60 : 130}px;right:${DIKEY ? 60 : 130}px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;gap:50px">
        <div class="h1" id="${id}-b" style="font-size:${DIKEY ? 90 : 84}px;text-align:center">${yazi(s.baslik)}</div>
        <div style="display:grid;grid-template-columns:repeat(${kolon},1fr);gap:${DIKEY ? 30 : 36}px">
        ${s.kartlar.map((c, i) => `<div class="card" id="${id}-k${i}" style="padding:${yan ? "30px 40px" : "38px 30px"};display:flex;${yan ? "align-items:center;gap:34px" : "flex-direction:column;align-items:center;text-align:center;gap:18px"}">
          <div class="tile" style="width:110px;height:110px;border-radius:28px;flex:none">${icon(c.ikon || "chart", 60, AMBER)}</div>
          <div><div class="rs" style="font-size:${fs}px;font-weight:800;letter-spacing:-0.04em;line-height:1.05;white-space:nowrap">0</div>
          <div class="soft" style="font-size:${DIKEY ? 38 : 34}px;font-weight:600;margin-top:10px;line-height:1.2">${c.etiket}</div></div></div>`).join("")}</div></div>`;
    },
    anim: (tl, s, z, id, b) => {
      rise(tl, $$(`#${id}-b .w`), b + z.baslik, 0.08);
      s.kartlar.forEach((c, i) => { const el = $(`#${id}-k${i}`), t = b + z.kart[i], d = c.ondalik || 0;
        tl.fromTo(el, { y: 60, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.6)" }, t);
        draw(tl, $(".tile svg", el), t + 0.1);
        countTo(tl, $(".rs", el), t + 0.2, c.deger, 1.6, (v) => (c.para ? fmt(v, d) : (c.onek || "") + v.toLocaleString("tr-TR", { minimumFractionDigits: d, maximumFractionDigits: d })) + (c.sonek ? " " + c.sonek : "")); });
    },
  };

  SAHNE.kapanis = {
    html: (s, z, id) => `<div class="full center" style="gap:${DIKEY ? 40 : 30}px;padding:0 70px">
        <div id="${id}-l" style="width:${DIKEY ? 260 : 210}px;height:${DIKEY ? 260 : 210}px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 0 0 12px rgba(95,211,255,0.22),0 0 120px rgba(47,127,224,0.85)"><img src="assets/logo.png" style="width:${DIKEY ? 190 : 156}px"></div>
        <div class="h1" id="${id}-s" style="font-size:${DIKEY ? 112 : 124}px">${yazi(s.slogan)}</div>
        <div id="${id}-m" style="font-size:${DIKEY ? 56 : 54}px;font-weight:700">${marka()}</div>
        <div class="cyan" id="${id}-u" style="font-size:40px;font-weight:600">panel.mtshijyen.com${DIKEY ? "<br>" : " · "}+90 543 683 57 65</div></div>
      <div class="ring" id="${id}-r" style="left:${W / 2}px;top:${DIKEY ? 700 : 300}px;border-color:${CYAN}"></div><div class="flash" id="${id}-f"></div>`,
    anim: (tl, s, z, id, b) => {
      tl.fromTo(`#${id}-l`, { scale: 0, rotation: -90 }, { scale: 1, rotation: 0, duration: 0.9, ease: "elastic.out(1, 0.5)" }, b + z.logo);
      ringAnim(tl, `#${id}-r`, b + z.halka, 1200, 1.1); flash(tl, `#${id}-f`, b + z.halka);
      rise(tl, $$(`#${id}-s .w`), b + z.slogan, 0.12);
      tl.fromTo(`#${id}-m`, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, b + z.marka);
      tl.fromTo(`#${id}-u`, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, b + z.url);
    },
  };

  SAHNE.son = {
    html: (s, z, id) => `<div class="full center" style="gap:${DIKEY ? 40 : 28}px;padding:0 70px">
        <div class="tile" id="${id}-i" style="width:${DIKEY ? 200 : 170}px;height:${DIKEY ? 200 : 170}px;border-radius:50%;background:#1E9E5A">${icon("check", DIKEY ? 120 : 100, "#fff", 2.6)}</div>
        <div class="h1" id="${id}-b" style="font-size:${DIKEY ? 100 : 104}px">${yazi(s.metin || "Eğitim *tamamlandı.*")}</div>
        ${s.sonraki ? `<div class="chip" id="${id}-n" style="font-size:${DIKEY ? 42 : 40}px;padding:22px 40px">${icon("back", DIKEY ? 42 : 40, AMBER)}<span>Sıradaki: ${s.sonraki}</span></div>` : ""}
        <div id="${id}-m" style="margin-top:${DIKEY ? 40 : 20}px;display:flex;flex-direction:column;align-items:center;gap:12px">
          <img src="assets/logo.png" style="width:${DIKEY ? 210 : 180}px;background:#fff;border-radius:16px;padding:10px 16px">
          <div class="cyan" style="font-size:${DIKEY ? 38 : 36}px;font-weight:600">panel.mtshijyen.com</div></div></div>
      <div class="ring" id="${id}-r" style="left:${W / 2}px;top:${DIKEY ? 640 : 300}px;border-color:#1E9E5A"></div>`,
    anim: (tl, s, z, id, b) => {
      tl.fromTo(`#${id}-i`, { scale: 0 }, { scale: 1, duration: 0.7, ease: "back.out(2.2)" }, b + z.ikon);
      draw(tl, $(`#${id}-i svg`), b + z.ikon + 0.2); ringAnim(tl, `#${id}-r`, b + 0.4, 900, 1);
      rise(tl, $$(`#${id}-b .w`), b + z.baslik, 0.1);
      if ($(`#${id}-n`)) popIn(tl, `#${id}-n`, b + z.sonraki);
      tl.fromTo(`#${id}-m`, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, b + z.marka);
    },
  };

  // ═══ Kurulum
  function kur(video) {
    VID = video; DIKEY = video.yon === "dikey"; W = DIKEY ? 1080 : 1920; H = DIKEY ? 1920 : 1080;
    const plan = ZAMAN.zamanla(video), O = olcu();
    const toplam = video.sahneler.filter((s) => (s.tip === "ekran" || s.tip === "telefon") && s.adim).length;
    video.sahneler.forEach((s) => { s._toplam = toplam; });
    video.sahneler.forEach((s, i) => {
      const id = `s${i + 1}`, z = plan.sahneler[i], el = $(`#${id}`);
      const egitim = video.tur === "egitim";
      const wm = egitim && s.tip !== "kapak" && s.tip !== "son"
        ? `<div class="abs wm" style="${DIKEY ? `left:0;right:0;top:${O.wmY}px;text-align:center` : `left:${O.pad}px;top:${O.wmY}px`}">${marka()} · ${video.etiket || "Eğitim"}</div>` : "";
      const pr = egitim ? `<div class="abs prog" style="left:0;bottom:0;width:${W}px;height:8px;background:#0e2a4c"><div id="${id}-pg" style="width:100%;height:100%;background:${AMBER};transform-origin:0 50%"></div></div>` : "";
      const son = i === video.sahneler.length - 1 ? `<div class="full karart"></div>` : "";
      el.innerHTML = ortam(i + 1 + (video.tohum || 0)) + SAHNE[s.tip].html(s, z, id) + wm + pr + son;
    });
    PLAN = plan;
    return { scenes: video.sahneler.map((_, i) => `s${i + 1}`),
      transitions: plan.cuts.map(([t, sh, d]) => (sh ? { time: t - d / 2, shader: sh, duration: d } : { time: t - d / 2, duration: d })) };
  }
  // HyperShader.init çağrısı index.html içinde satır içi kalmalı (render motoru shader geçişlerini oradan tanır); sonra animasyonlar eklenir
  function canlandir(tl) {
    const video = VID, plan = PLAN;
    video.sahneler.forEach((s, i) => {
      const id = `s${i + 1}`, z = plan.sahneler[i], b = z.bas;
      tl.fromTo(`#${id} .amb-a`, { x: 0, y: 0 }, { x: 160, y: 60, duration: z.dur + 1, ease: "none" }, Math.max(0, b - 0.5));
      tl.fromTo(`#${id} .amb-b`, { x: 0, y: 0 }, { x: -140, y: -50, duration: z.dur + 1, ease: "none" }, Math.max(0, b - 0.5));
      if ($(`#${id}-pg`)) tl.fromTo(`#${id}-pg`, { scaleX: b / plan.total }, { scaleX: (b + z.dur) / plan.total, duration: z.dur, ease: "none" }, b);
      SAHNE[s.tip].anim(tl, s, z, id, b);
    });
    const last = `#s${video.sahneler.length}`;
    tl.fromTo(`${last} .karart`, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power1.in" }, plan.total - 0.6);
    return tl;
  }
  window.MOTOR = { kur, canlandir };
})();
