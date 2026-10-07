// MTS Hijyen tanıtım serisi · ortak yardımcılar (HyperFrames + GSAP + HyperShader).
// Kullanım: sahne HTML'lerini kur → const tl = seriBaslat(cuts) → animasyonları tl.ye ekle → window.__timelines["main"] = tl.
const AMBER = "#F5B019", CYAN = "#5FD3FF", BLUE = "#2F7FE0", NAVY = "#0B1F33";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rnd = (s) => { const x = Math.sin(s * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };
const chars = (str) => [...str].map((c) => `<span class="ch">${c}</span>`).join("");
const words = (str, amberFrom = 99) => str.split(" ").map((w, i) => `<span class="w${i >= amberFrom ? " amber" : ""}">${w}</span>`).join(" ");
const tl_ = (v, d = 2) => v.toLocaleString("tr-TR", { minimumFractionDigits: d, maximumFractionDigits: d });
const fmt = (v) => "₺" + tl_(v);
const W = () => Number($("#main").dataset.width), H = () => Number($("#main").dataset.height);

// Ortam: yumuşak ışık kümeleri + yıldız tozu (sabit tohumlu)
function ambient(seed) {
  const w = W(), h = H();
  let s = `<div data-layout-allow-overflow class="glow amb-a" style="left:${-300 + rnd(seed) * w * 0.3}px;top:${-400 + rnd(seed + 1) * h * 0.3}px;width:1300px;height:1300px;
    background:radial-gradient(closest-side, rgba(29,95,168,0.55), rgba(29,95,168,0))"></div>
    <div data-layout-allow-overflow class="glow amb-b" style="left:${w * 0.5 + rnd(seed + 2) * w * 0.2}px;top:${h * 0.3 + rnd(seed + 3) * h * 0.3}px;width:1100px;height:1100px;
    background:radial-gradient(closest-side, rgba(11,86,119,0.6), rgba(11,86,119,0))"></div>`;
  for (let i = 0; i < 46; i++) s += `<i class="star" style="left:${rnd(seed * 97 + i) * w}px;top:${rnd(seed * 31 + i * 7) * h}px;opacity:${0.15 + rnd(i + seed) * 0.5}"></i>`;
  return `<div class="full amb">${s}</div>`;
}
// Panel ekranından bölge kırp, k kat büyüt, tarayıcı çerçevesine koy
function device(id, shot, r, k, left, top) {
  const w = Math.round(r.w * k), h = Math.round(r.h * k);
  return `<div class="device" id="${id}" style="left:${left}px;top:${top}px;width:${w}px">
    <div class="bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><div class="url">panel.mtshijyen.com</div></div>
    <div class="view" style="width:${w}px;height:${h}px"><img data-layout-allow-overflow src="assets/shots/${shot}.png" style="left:${-r.x * k}px;top:${-r.y * k}px;width:${1920 * k}px"></div></div>`;
}
// Kırpılmış ekrandaki bir noktanın sahnedeki konumu (device üst çubuğu 54 px)
const onDevice = (r, k, left, top, x, y) => ({ x: left + (x - r.x) * k, y: top + 54 + (y - r.y) * k });
const cursorSVG = (id) => `<svg class="cursor" id="${id}" viewBox="0 0 24 24"><path d="M4 2 L4 19 L8.5 15 L11.5 21.5 L14 20.4 L11 14 L17 14 Z" fill="#fff" stroke="#0B1F33" stroke-width="1.4" stroke-linejoin="round"/></svg>`;
const icon = (n, size, color = CYAN, w = 2.2) => ICON(n, size, color, w);

// Parçacık patlaması: konum zamanın saf fonksiyonu
function burstHTML(id, n) {
  let s = "";
  for (let i = 0; i < n; i++) s += `<i style="position:absolute;left:0;top:0;width:${10 + rnd(i * 3.1) * 12}px;height:${6 + rnd(i * 5.7) * 8}px;background:${[AMBER, CYAN, "#FFFFFF", BLUE][i % 4]};border-radius:2px;opacity:0"></i>`;
  return `<div class="full" id="${id}">${s}</div>`;
}
function burst(tl, id, t0, cx, cy, power = 1, dur = 1.6) {
  const ps = $$(`#${id} i`), st = { t: 0 };
  tl.fromTo(st, { t: 0 }, { t: dur, duration: dur, ease: "none", onUpdate: () => {
    const t = st.t;
    ps.forEach((p, i) => {
      const a = rnd(i * 7.3) * Math.PI * 2, v = (500 + rnd(i * 2.9) * 900) * power;
      p.style.transform = `translate(${cx + Math.cos(a) * v * t * (1 - t / (dur * 2.2))}px,${cy + Math.sin(a) * v * 0.8 * t + 900 * t * t}px) rotate(${(rnd(i) - 0.5) * 1440 * t}deg)`;
      p.style.opacity = t <= 0.001 ? 0 : Math.max(0, 1 - t / dur);
    });
  } }, t0);
}
const shake = (tl, el, t, a = 14) => tl.to(el, { keyframes: [{ x: -a, y: a * 0.4 }, { x: a * 0.8, y: -a * 0.5 }, { x: -a * 0.4, y: a * 0.2 }, { x: 0, y: 0 }], duration: 0.26, ease: "none" }, t);
const flash = (tl, el, t, peak = 0.5) => tl.fromTo(el, { opacity: 0 }, { keyframes: [{ opacity: peak, duration: 0.04 }, { opacity: 0, duration: 0.3 }] }, t);
const draw = (tl, svg, t) => tl.fromTo($$("path,circle,rect,line,polyline", svg), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" }, t);
const sweep = (tl, el, t, from = -400, to = 2400, d = 0.9) => tl.fromTo(el, { x: from, skewX: -20 }, { x: to, skewX: -20, duration: d, ease: "power2.inOut" }, t);
const ring = (tl, el, t, size = 900, d = 0.9) => tl.fromTo(el, { width: 20, height: 20, marginLeft: -10, marginTop: -10, opacity: 1 },
  { width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2, opacity: 0, duration: d, ease: "expo.out" }, t);
const rise = (tl, els, t, stagger = 0.14, y = 70) => tl.fromTo(els, { y, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger, ease: "expo.out" }, t);
const popIn = (tl, el, t, d = 0.6) => tl.fromTo(el, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: d, ease: "back.out(2.2)" }, t);
const countTo = (tl, el, t, to, d = 1.4, f = (v) => Math.round(v).toLocaleString("tr-TR"), from = 0) => {
  const o = { v: from }; tl.fromTo(o, { v: from }, { v: to, duration: d, ease: "expo.out", onUpdate: () => { el.textContent = f(o.v); } }, t);
};
// İmleç: (x,y) noktasına git ve tıkla
function clickAt(tl, cur, t, x, y, from = { x: 1700, y: 1000 }) {
  tl.fromTo(cur, { x: from.x, y: from.y, opacity: 0 }, { x: x - 4, y: y - 2, opacity: 1, duration: 0.9, ease: "power3.inOut" }, t);
  tl.to(cur, { keyframes: [{ scale: 0.8, duration: 0.08 }, { scale: 1, duration: 0.15 }] }, t + 0.95);
  return t + 0.95;
}

// Kapanış sahnesi (logo + slogan + iletişim)
function endHTML(slogan, sub = "MTS Hijyen B2B") {
  const v = H() > W();
  return ambient(9) + `<div class="full center" id="end-wrap" style="gap:${v ? 40 : 30}px;padding:0 60px">
    <div id="end-badge" style="width:${v ? 260 : 210}px;height:${v ? 260 : 210}px;border-radius:50%;background:#fff;display:grid;place-items:center;
      box-shadow:0 0 0 12px rgba(95,211,255,0.22),0 0 120px rgba(47,127,224,0.85)"><img src="assets/logo.png" style="width:${v ? 190 : 156}px"></div>
    <div id="end-slogan" class="h1" style="font-size:${v ? 112 : 128}px">${slogan}</div>
    <div id="end-brand" style="font-size:${v ? 56 : 54}px;font-weight:700">${sub.replace("B2B", '<span class="amber">B2B</span>')}</div>
    <div id="end-url" class="cyan" style="font-size:${v ? 40 : 40}px;font-weight:600">panel.mtshijyen.com${v ? "<br>" : " · "}+90 543 683 57 65</div>
  </div><div class="ring" id="end-ring" style="left:${W() / 2}px;top:${v ? 700 : 300}px;border-color:${CYAN}"></div>
  <div class="sweep" data-layout-allow-overflow id="end-sw"></div><div class="flash" id="end-fl"></div><div class="full" id="end-black" style="background:#000;opacity:0"></div>`;
}
function endAnim(tl, t0, total) {
  tl.fromTo("#end-badge", { scale: 0, rotation: -90 }, { scale: 1, rotation: 0, duration: 0.9, ease: "elastic.out(1, 0.5)" }, t0 + 0.2);
  ring(tl, "#end-ring", t0 + 0.4, 1200, 1.1); flash(tl, "#end-fl", t0 + 0.4, 0.35);
  rise(tl, $$("#end-slogan .w"), t0 + 0.7, 0.12, 60);
  tl.fromTo("#end-brand", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }, t0 + 1.5);
  tl.fromTo("#end-url", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }, t0 + 1.9);
  sweep(tl, "#end-sw", t0 + 1.6, -400, W() + 400, 1.0);
  tl.fromTo("#end-black", { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power1.in" }, total - 0.6);
}

// Zaman çizelgesi + shader geçişleri. cuts: [[zaman, shader, süre], ...] (geçiş kesmenin etrafında ortalanır)
function seriBaslat(cuts) {
  const scenes = $$("#main > .scene").map((s) => s.id);
  const tl = gsap.timeline({ paused: true });
  HyperShader.init({ bgColor: "#050d18", accentColor: CYAN, compositionId: "main", timeline: tl, scenes,
    transitions: cuts.map(([t, shader, d]) => ({ time: t - d / 2, shader, duration: d })) });
  // ortam ışıkları her sahnede yavaşça süzülür
  const total = Number($("#main").dataset.duration);
  const bounds = [0, ...cuts.map((c) => c[0]), total];
  scenes.forEach((id, i) => {
    const a = bounds[i], b = bounds[i + 1];
    tl.fromTo(`#${id} .amb-a`, { x: 0, y: 0 }, { x: 160, y: 60, duration: b - a + 1, ease: "none" }, Math.max(0, a - 0.5));
    tl.fromTo(`#${id} .amb-b`, { x: 0, y: 0 }, { x: -140, y: -50, duration: b - a + 1, ease: "none" }, Math.max(0, a - 0.5));
  });
  return tl;
}
