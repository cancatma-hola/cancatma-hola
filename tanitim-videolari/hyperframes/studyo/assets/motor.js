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

  // ── Yerleşim ölçüleri (yön bazlı)
  function olcu() {
    return DIKEY
      ? { pad: 60, hdrY: 130, hdrFs: 58, promoFs: 74, box: { x: 60, y: 440, w: 960, h: 1090 }, noteY: 1575, noteFs: 46, wmY: 1846 }
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
      const hdr = s.adim
        ? `<div class="abs" style="left:${O.pad}px;top:${O.hdrY}px;right:${O.pad}px;display:flex;gap:${DIKEY ? 28 : 30}px;align-items:flex-start">
            <div class="badge" id="${id}-n" style="width:${DIKEY ? 96 : 88}px;height:${DIKEY ? 96 : 88}px;font-size:${DIKEY ? 52 : 48}px">${s.adim}</div>
            <div class="h2" id="${id}-m" style="font-size:${O.hdrFs}px;flex:1;padding-top:${DIKEY ? 8 : 6}px">${yazi(s.metin)}</div></div>`
        : `<div class="abs" style="left:${O.pad}px;right:${O.pad}px;top:${DIKEY ? 150 : 48}px;text-align:center"><div class="h1" id="${id}-m" style="font-size:${O.promoFs}px">${yazi(s.metin)}</div></div>`;
      const rings = (s.vurgu || []).map((v, i) => { const q = ic(v.r), cm = s._cams[i], bw = 5 / cm.s;
        return `<div class="spot" id="${id}-r${i}" style="left:${q.x - 10 / k}px;top:${q.y - 8 / k}px;width:${q.w + 20 / k}px;height:${q.h + 16 / k}px;border-width:${bw}px;border-radius:${12 / cm.s}px;opacity:0"></div>`; }).join("");
      const gz = (s.gizle || []).map((g) => { const q = ic(g); return `<div class="abs" style="left:${q.x}px;top:${q.y}px;width:${q.w}px;height:${q.h}px;background:#E3E9F0;border-radius:${4 * k}px"></div>`; }).join("");
      let yaz = "";
      if (s.yaz) { const q = ic(s.yaz.r);
        yaz = `<div class="abs" id="${id}-y" style="left:${q.x}px;top:${q.y}px;width:${q.w}px;height:${q.h}px;background:#fff;border:${2 * k}px solid ${BLUE};border-radius:${6 * k}px;
          display:flex;align-items:center;padding:0 ${10 * k}px;font-size:${Math.min(q.h * 0.5, 15 * k)}px;color:#0B1F33;font-family:'Inter Tight';opacity:0;overflow:hidden;white-space:nowrap">
          ${[...s.yaz.metin].map((c) => `<span class="yc" style="opacity:0">${c === " " ? "&nbsp;" : c}</span>`).join("")}<span class="caret" style="width:${2 * k}px;height:${q.h * 0.5}px;background:${BLUE};margin-left:2px"></span></div>`; }
      const altKutu = (ic2) => DIKEY ? ic2 : `<div class="abs" style="left:${dl}px;width:${vw}px;top:${dt + 54 + vh - 326}px;height:300px">${ic2}</div>`;
      const yer = DIKEY ? `left:${O.pad}px;right:${O.pad}px;top:${O.noteY}px` : `left:0;right:0;bottom:0;margin:0 auto;width:fit-content;max-width:${Math.min(vw - 60, 1500)}px`;
      const notes = altKutu((s.vurgu || []).map((v, i) => v.not ? `<div class="note" id="${id}-o${i}" style="${yer};font-size:${O.noteFs}px;opacity:0">
          <span class="nb">${i + 1}</span><span>${v.not}</span></div>` : "").join(""));
      const toast = s.tikla && s.tikla.sonuc ? altKutu(`<div class="abs toast" id="${id}-t" style="${yer};justify-content:center;font-size:${DIKEY ? 44 : 38}px;opacity:0">${icon("check", DIKEY ? 46 : 40, "#1E9E5A", 2.6)}${s.tikla.sonuc}</div>`) : "";
      return `${hdr}
        <div class="full" style="perspective:1800px"><div class="device" id="${id}-d" style="left:${dl}px;top:${dt}px;width:${vw}px">
          <div class="bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><div class="url">panel.mtshijyen.com${s.url || ""}</div></div>
          <div class="view" style="width:${vw}px;height:${vh}px"><div class="cam" id="${id}-c">
            <img data-layout-allow-overflow decoding="sync" loading="eager" src="${s.dosya}" style="left:${-r.x * k}px;top:${-r.y * k}px;width:${1920 * k}px">${gz}${rings}${yaz}</div>
            <svg class="cursor" id="${id}-k" viewBox="0 0 24 24" style="opacity:0"><path d="M4 2 L4 19 L8.5 15 L11.5 21.5 L14 20.4 L11 14 L17 14 Z" fill="#fff" stroke="#0B1F33" stroke-width="1.4" stroke-linejoin="round"/></svg>
            <div class="ring" id="${id}-p"></div></div></div></div>
        ${notes}${toast}`;
    },
    anim: (tl, s, z, id, b) => {
      tl.fromTo(`#${id}-d`, { y: 70, opacity: 0, rotationX: 14 }, { y: 0, opacity: 1, rotationX: 0, duration: 0.9, ease: "expo.out" }, b + z.giris);
      if ($(`#${id}-n`)) popIn(tl, `#${id}-n`, b + 0.15);
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
    html: (s, z, id) => `<div class="abs" style="left:${DIKEY ? 60 : 150}px;right:${DIKEY ? 60 : 150}px;top:${DIKEY ? 170 : 90}px">
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
        const gap = Math.min(230, 1150 / n), y0 = 520;
        return `<div class="abs" style="left:60px;right:60px;top:170px"><div class="h1" id="${id}-b" style="font-size:92px">${yazi(s.baslik)}</div></div>
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
      return `<div class="abs" style="left:${DIKEY ? 60 : 150}px;right:${DIKEY ? 60 : 150}px;top:${DIKEY ? 160 : 80}px;${DIKEY ? "" : "text-align:center"}"><div class="h1" id="${id}-b" style="font-size:${DIKEY ? 92 : 84}px">${yazi(s.baslik)}</div></div>
        <div class="abs" style="left:${DIKEY ? 60 : 150}px;right:${DIKEY ? 60 : 150}px;top:${DIKEY ? 520 : 300}px;display:flex;${DIKEY ? "flex-direction:column;gap:40px" : "gap:50px"}">
          ${kart("ks", s.once || "Eskiden", "x", "#FF8A8A", s.sol, "x")}${kart("ks", s.sonra || "MTS Hijyen B2B ile", "check", AMBER, s.sag, "y")}</div>`;
    },
    anim: (tl, s, z, id, b) => {
      rise(tl, $$(`#${id}-b .w`), b + z.baslik, 0.08);
      tl.fromTo(`#${id}-x`, { x: DIKEY ? 0 : -100, y: DIKEY ? 60 : 0, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.7, ease: "expo.out" }, b + z.sol);
      tl.fromTo(`#${id}-y`, { scale: 1.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: "power4.in" }, b + z.sag - 0.3);
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
    const main = $("#main");
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
