// MTS Hijyen B2B video kiti: zaman çizelgesi, geçişler ve temel sahne tipleri.
// Bağımlılık: lib.js (clamp, seg, lerp, E, spring, rnd, $, $$, css)
const W = 1920, H = 1080;
const SCENES = {};

// ── Zaman çizelgesi ──────────────────────────────────────────────
// Sahne: { type, d (en az süre), tr: 'wipe'|'cut'|'fade', vo: [{id, text, at?}] }
// Dış ses süresine göre sahne uzar; dış ses sahne başlangıcı + lead anında başlar.
const estimate = txt => txt.trim().split(/\s+/).length / 2.35;
function buildTimeline(video, voDur = {}) {
  const out = [];
  let end = 0;
  video.scenes.forEach((s, i) => {
    const tr = i === 0 ? 'cut' : (s.tr || 'wipe');
    const trDur = tr === 'cut' ? 0 : (s.trDur || 0.8);
    const start = i === 0 ? 0 : end - trDur;
    let cur = s.voLead ?? (trDur + 0.25);
    const cues = (s.vo || []).map(v => {
      const dur = voDur[v.id] ?? estimate(v.text);
      const at = Math.max(v.at ?? 0, cur);
      cur = at + dur + (v.gap ?? 0.3);
      return { ...v, at: start + at, dur };
    });
    const dur = Math.max((s.d || 3) * (video.pace || 1), cues.length ? cur + (s.tail ?? video.tail ?? 0.5) : 0);
    out.push({ ...s, i, tr, trDur, start, dur, cues });
    end = start + dur;
  });
  return { scenes: out, total: end };
}

// ── Oynatıcı ─────────────────────────────────────────────────────
let TL = null;
function mount(video, voDur) {
  TL = buildTimeline(video, voDur);
  const root = document.body;
  root.insertAdjacentHTML('beforeend', `<svg width="0" height="0" style="position:absolute"><defs>
    <filter id="ink" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="9" result="n"/>
      <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.4 1.85" result="m"/>
      <feComposite in="SourceGraphic" in2="m" operator="in"/></filter></defs></svg>`);
  TL.scenes.forEach(s => {
    const el = document.createElement('div');
    el.className = 'layer ' + (s.theme || '');
    root.appendChild(el);
    s.el = el;
    SCENES[s.type].build(el, s);
  });
  root.insertAdjacentHTML('beforeend', '<div id="squeegee"></div><div id="cap"><span></span></div>');
  window.CAPTIONS = video.captions !== false;
  window.TOTAL = TL.total;
  window.CUES = TL.scenes.flatMap(s => s.cues);
}

window.render = function (t) {
  let sq = null;
  TL.scenes.forEach((s, i) => {
    const next = TL.scenes[i + 1];
    const on = t >= s.start && t < s.start + s.dur || (i === TL.scenes.length - 1 && t >= s.start);
    s.el.style.display = on ? 'block' : 'none';
    if (!on) return;
    s.el.style.clipPath = 'none';
    s.el.style.opacity = 1;
    s.el.style.zIndex = i;
    // giriş geçişi
    if (s.tr !== 'cut' && t < s.start + s.trDur) {
      const p = E.inOutQuart(seg(t, s.start, s.start + s.trDur));
      if (s.tr === 'wipe') {
        const x = -30 + p * (W + 60);
        s.el.style.clipPath = `inset(0 ${Math.max(0, W - x)}px 0 0)`;
        sq = x;
      } else if (s.tr === 'fade') s.el.style.opacity = p;
    }
    SCENES[s.type].render(s.el, s, t - s.start, s.dur);
  });
  // altyazı: o an konuşulan satır
  const cap = $('#cap'), cs = cap.querySelector('span');
  const cue = window.CAPTIONS && CUES.find(c => t >= c.at - 0.1 && t < c.at + c.dur + 0.35);
  if (cue) {
    const p = E.outExpo(seg(t, cue.at - 0.1, cue.at + 0.25)) * (1 - seg(t, cue.at + cue.dur + 0.1, cue.at + cue.dur + 0.35));
    if (cs.textContent !== cue.text) cs.textContent = cue.text;
    css(cap, { opacity: p, transform: `translateY(${(1 - p) * 12}px)` });
  } else cap.style.opacity = 0;
  const q = $('#squeegee');
  if (sq !== null && sq > -20 && sq < W + 20) css(q, { display: 'block', left: sq + 'px' });
  else q.style.display = 'none';
};

// ── Yardımcılar ──────────────────────────────────────────────────
const lineIn = (el, lt, a, d = 0.8) => { el.style.transform = `translateY(${(1 - E.editorial(seg(lt, a, a + d))) * 106}%)`; };
const lineOut = (lt, a, d = 0.5) => E.inExpo(seg(lt, a, a + d)) * -106;
const gridHTML = () => '<div class="grid">' + Array.from({ length: 13 }, (_, i) => `<i style="left:${120 + i * 140}px"></i>`).join('') + '</div>';
const gridIn = (el, lt, a = 0) => el.querySelectorAll('.grid i').forEach((l, i) => l.style.transform = `scaleY(${E.outExpo(seg(lt, a + i * 0.035, a + 0.9 + i * 0.035))})`);
const CHECK = (c = '#fff', s = 26) => `<svg width="${s}" height="${s}" viewBox="0 0 26 26" fill="none"><path d="M6 13.5l4.5 4.5L20 8" stroke="${c}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// ── Sahne: başlık ────────────────────────────────────────────────
// { lines: [{t, accent, size}], eyebrow, sub, big: '02', bigOf: '/ 06', tip: true, x, y }
SCENES.title = {
  build(el, s) {
    const x = s.x ?? 116, y = s.y ?? 300;
    let h = (s.grid !== false ? gridHTML() : '');
    if (s.eyebrow) h += `<div class="abs t-eyebrow mono" style="left:${x + 4}px;top:${y - 60}px"><span class="mask"><span>${s.eyebrow}</span></span></div>`;
    if (s.tip) h += `<div class="abs t-tipbar" style="left:${x - 40}px;top:${y - 64}px;height:0"></div>`;
    let yy = y;
    h += (s.lines || []).map(l => {
      const size = l.size || s.size || 150;
      const r = `<div class="abs t-line ${l.accent ? 't-accent' : ''}" style="left:${x}px;top:${yy}px;font-size:${size}px"><span class="mask"><span>${l.t}</span></span></div>`;
      yy += size * 1.0;
      return r;
    }).join('');
    if (s.sub) h += `<div class="abs t-sub" style="left:${x + 4}px;top:${yy + 34}px;width:${s.subW || 1300}px"><span class="mask"><span>${s.sub}</span></span></div>`;
    if (s.big) h += `<div class="abs" style="right:120px;top:${y - 70}px;text-align:right"><div class="t-big ${s.bigAccent ? 't-accent' : ''}" style="font-size:300px"><span class="mask"><span>${s.big}</span></span></div>
      <div class="mono t-eyebrow" style="margin-top:8px"><span class="mask"><span>${s.bigOf || ''}</span></span></div></div>`;
    if (s.foot) h += `<div class="abs mono t-eyebrow" style="left:${x + 4}px;top:960px"><span class="mask"><span>${s.foot}</span></span></div>`;
    el.innerHTML = h;
  },
  render(el, s, lt, dur) {
    gridIn(el, lt, 0);
    const out = s.out ? lineOut(lt, dur - 0.55) : 0;
    el.querySelectorAll('.mask > span').forEach((m, i) => {
      const a = (s.at || 0.15) + i * 0.11;
      m.style.transform = `translateY(${(1 - E.editorial(seg(lt, a, a + 0.85))) * 106 + out}%)`;
    });
    const bar = el.querySelector('.t-tipbar');
    if (bar) bar.style.height = (E.outExpo(seg(lt, 0.1, 0.8)) * (60 + (s.lines.length * (s.size || 150)) + (s.sub ? 140 : 0))) + 'px';
  },
};

// ── Sahne: ekran (gerçek panel görüntüsü) ────────────────────────
// { shot, full, head:{eb, ttl}, step:{n, of, ttl}, cam:[{at, key|rect, pad}], focus:[{at, end, key, label, pad}],
//   cursor:[{at, key|pt, click}], typing:[{at, key, text, dur, size}], toast:[{at, end, title, sub}], stamp:[{at, key, text, rot}] }
const CARD = { x: 249, y: 146, w: 1422, h: 800 };
const FULL = { x: 0, y: 0, w: W, h: H };
function rectFor(s, q) {
  if (!q) return { x: 0, y: 0, w: W, h: H };
  if (typeof q === 'string') {
    const r = (SHOTS[s.shot] || {})[q];
    if (!r) { console.warn('rect yok', s.shot, q); return { x: 0, y: 0, w: W, h: H }; }
    return r;
  }
  return q;
}
function camRect(r, pad = 120, minW = 620) {
  let w = Math.max(r.w + pad * 2, (r.h + pad * 2) * 16 / 9, minW);
  w = Math.min(w, W);
  const h = w * 9 / 16;
  let x = r.x + r.w / 2 - w / 2, y = r.y + r.h / 2 - h / 2;
  x = clamp(x, 0, W - w); y = clamp(y, 0, H - h);
  return { x, y, w, h };
}
SCENES.screen = {
  build(el, s) {
    const V = s.full ? FULL : CARD;
    s._V = V;
    let h = '';
    if (s.step) h += `<div class="abs stephead"><div class="num"><span class="mask"><span>${String(s.step.n).padStart(2, '0')}</span></span></div>
      <div><div class="of mono"><span class="mask"><span>Adım ${s.step.n} / ${s.step.of}</span></span></div><div class="ttl"><span class="mask"><span>${s.step.ttl}</span></span></div></div></div>`;
    if (s.head) h += `<div class="abs head">${s.head.eb ? `<div class="eb mono"><span class="mask"><span>${s.head.eb}</span></span></div>` : ''}
      <div class="ttl"><span class="mask"><span>${s.head.ttl}</span></span></div></div>`;
    h += `<div class="card ${s.full ? 'full' : ''}" style="left:${V.x}px;top:${V.y}px;width:${V.w}px;height:${V.h}px">
      <div class="shot"><img src="shots/${s.shot}.png">`;
    (s.focus || []).forEach((f, i) => h += `<div class="focus" data-i="${i}"><div class="dim"></div><div class="bd"></div></div>`);
    (s.typing || []).forEach((f, i) => h += `<div class="typed" data-i="${i}"><span class="tx"></span><span class="caret"></span></div>`);
    (s.stamp || []).forEach((f, i) => h += `<div class="stamp" data-i="${i}">${f.text}</div>`);
    (s.overlay || []).forEach((f, i) => h += `<div class="ovl abs" data-i="${i}">${f.html}</div>`);
    h += `</div></div>`;
    (s.focus || []).forEach((f, i) => f.label && (h += f.desc
      ? `<div class="cline" data-i="${i}"></div><div class="flabel callout" data-i="${i}"><b>${f.label}</b><span>${f.desc}</span></div>`
      : `<div class="flabel" data-i="${i}">${f.label}</div>`));
    (s.toast || []).forEach((f, i) => h += `<div class="toast" data-i="${i}"><div class="ic">${CHECK('#fff', 26)}</div><div><b>${f.title}</b>${f.sub ? `<span>${f.sub}</span>` : ''}</div></div>`);
    if (s.cursor) h += `<div class="ring"></div><svg class="cursor" viewBox="0 0 34 34"><path d="M6 3 L6 27 L12.5 21 L17 31 L21.5 29 L17 19.5 L26 19.5 Z" fill="#fff" stroke="#0B1F33" stroke-width="2.2" stroke-linejoin="round"/></svg>`;
    el.innerHTML = h;
  },
  render(el, s, lt, dur) {
    const V = s._V;
    // başlıklar
    el.querySelectorAll('.stephead .mask > span, .head .mask > span').forEach((m, i) => {
      const a = s.noEnter ? -9 : 0.25 + i * 0.1;
      m.style.transform = `translateY(${(1 - E.editorial(seg(lt, a, a + 0.8))) * 106}%)`;
    });
    // kart girişi
    const card = el.querySelector('.card');
    if (!s.full && !s.noEnter) {
      const p = E.outExpo(seg(lt, 0.05, 1.0));
      card.style.transform = `translateY(${(1 - p) * 60}px) scale(${0.975 + 0.025 * p})`;
    }
    // kamera
    let C = { x: 0, y: 0, w: W, h: H };
    const cams = s.cam || [];
    for (const k of cams) {
      const target = k.key === 'full' || (!k.key && !k.rect) ? { x: 0, y: 0, w: W, h: H } : camRect(rectFor(s, k.key || k.rect), k.pad, k.minW);
      const p = E.inOutQuart(seg(lt, k.at, k.at + (k.d || 1.0)));
      if (p <= 0) break;
      C = { x: lerp(C.x, target.x, p), y: lerp(C.y, target.y, p), w: lerp(C.w, target.w, p), h: lerp(C.h, target.h, p) };
    }
    // sürekli yavaş itme (canlılık)
    const drift = 1 - 0.025 * seg(lt, 0, dur);
    const cx = C.x + C.w / 2, cy = C.y + C.h / 2;
    C = { x: cx - C.w * drift / 2, y: cy - C.h * drift / 2, w: C.w * drift, h: C.h * drift };
    const sc = V.w / C.w;
    el.querySelector('.shot').style.transform = `scale(${sc}) translate(${-C.x}px, ${-C.y}px)`;
    const map = (x, y) => ({ x: V.x + (x - C.x) * sc, y: V.y + (y - C.y) * sc });

    // odak çerçeveleri
    (s.focus || []).forEach((f, i) => {
      const r = rectFor(s, f.key || f.rect), pad = f.pad ?? 10;
      const fe = el.querySelector(`.focus[data-i="${i}"]`);
      const pin = E.outExpo(seg(lt, f.at, f.at + 0.55));
      const pout = f.end ? E.inOutQuart(seg(lt, f.end, f.end + 0.35)) : 0;
      const a = pin * (1 - pout);
      css(fe, { left: (r.x - pad) + 'px', top: (r.y - pad) + 'px', width: (r.w + pad * 2) + 'px', height: (r.h + pad * 2) + 'px',
        opacity: a > 0.001 ? 1 : 0 });
      fe.querySelector('.dim').style.boxShadow = `0 0 0 9999px rgba(11,31,51,${0.42 * a})`;
      css(fe.querySelector('.bd'), { borderWidth: (3 / sc) + 'px', clipPath: `inset(-20px ${(1 - pin) * 100}% -20px -20px)`, opacity: 1 - pout });
      const lb = el.querySelector(`.flabel[data-i="${i}"]`);
      if (lb && f.desc) {
        // kartı odak alanının yanına yerleştir: sağ → sol → alt → üst
        const p1 = map(r.x - pad, r.y - pad), p2 = map(r.x + r.w + pad, r.y + r.h + pad);
        const la = E.outExpo(seg(lt, f.at + 0.35, f.at + 0.9)) * (1 - pout);
        const cw = 430, ch = lb.offsetHeight || 120, g = 34;
        let x, y, side;
        const cy = (p1.y + p2.y) / 2;
        if (p2.x + g + cw < W - 24) { side = 'r'; x = p2.x + g; y = clamp(cy - ch / 2, 40, 960 - ch); }
        else if (p1.x - g - cw > 24) { side = 'l'; x = p1.x - g - cw; y = clamp(cy - ch / 2, 40, 960 - ch); }
        else if (p2.y + g + ch < 960) { side = 'b'; x = clamp((p1.x + p2.x) / 2 - cw / 2, 24, W - cw - 24); y = p2.y + g; }
        else { side = 't'; x = clamp((p1.x + p2.x) / 2 - cw / 2, 24, W - cw - 24); y = p1.y - g - ch; }
        const dx = side === 'r' ? -18 : side === 'l' ? 18 : 0, dy = side === 'b' ? -18 : side === 't' ? 18 : 0;
        css(lb, { left: x + 'px', top: y + 'px', width: cw + 'px', opacity: la, transform: `translate(${(1 - la) * dx}px, ${(1 - la) * dy}px)` });
        const ln = el.querySelector(`.cline[data-i="${i}"]`);
        const ly = clamp(cy, y + 24, y + ch - 24), lx = (side === 'r' ? p2.x : x + cw);
        if (side === 'r' || side === 'l') css(ln, { left: Math.min(lx, side === 'r' ? x : p1.x) + 'px', top: ly + 'px', width: g + 'px', height: '3px', opacity: la });
        else { const lxx = clamp((p1.x + p2.x) / 2, x + 30, x + cw - 30); css(ln, { left: lxx + 'px', top: (side === 'b' ? p2.y : y + ch) + 'px', width: '3px', height: g + 'px', opacity: la }); }
      } else if (lb) {
        const p = map(r.x - pad, r.y - pad);
        const la = E.outExpo(seg(lt, f.at + 0.3, f.at + 0.8)) * (1 - pout);
        const below = p.y - 52 < V.y + 10;
        css(lb, { left: p.x + 'px', top: (below ? map(0, r.y + r.h + pad).y + 12 : p.y - 50) + 'px', opacity: la,
          fontSize: '17px', padding: '8px 14px', transform: `translateY(${(1 - la) * 8}px)` });
      }
    });
    // yazma
    (s.typing || []).forEach((f, i) => {
      const r = rectFor(s, f.key || f.rect);
      const te = el.querySelector(`.typed[data-i="${i}"]`);
      const p = seg(lt, f.at, f.at + (f.dur || f.text.length * 0.06));
      const n = Math.floor(p * f.text.length);
      css(te, { left: (r.x + (f.dx || 0)) + 'px', top: r.y + 'px', width: (f.w || r.w) + 'px', height: r.h + 'px', fontSize: (f.size || 15) + 'px',
        paddingLeft: (f.padL ?? 8) + 'px', opacity: lt >= f.at ? 1 : 0, background: f.bg || '#fff' });
      te.querySelector('.tx').textContent = f.text.slice(0, n);
      const c = te.querySelector('.caret');
      c.style.height = (f.size || 15) * 1.3 + 'px';
      c.style.opacity = p < 1 ? (Math.floor(lt * 3) % 2 ? 1 : 0.2) : 0;
    });
    // imleç
    if (s.cursor) {
      const pts = s.cursor.map(c => {
        let pt = c.pt;
        if (!pt) { const r = rectFor(s, c.key); pt = { x: r.x + r.w * (c.fx ?? 0.5), y: r.y + r.h * (c.fy ?? 0.55) }; }
        return { ...c, pt };
      });
      let P = { x: 1500, y: 1250 }, prevAt = -1;
      let pos = map(P.x, P.y), press = 0, ringP = -1, ringAt = null;
      for (const c of pts) {
        const move = c.move || 0.75;
        const p = E.inOutQuart(seg(lt, c.at - move, c.at));
        const from = map(P.x, P.y), to = map(c.pt.x, c.pt.y);
        if (lt >= c.at - move) {
          const arc = Math.sin(Math.PI * p) * 40;
          pos = { x: lerp(from.x, to.x, p), y: lerp(from.y, to.y, p) - arc };
        }
        if (c.click && lt >= c.at) { press = 1 - seg(lt, c.at, c.at + 0.18); ringP = seg(lt, c.at, c.at + 0.55); ringAt = to; }
        P = c.pt; prevAt = c.at;
      }
      const cur = el.querySelector('.cursor');
      const vis = lt >= (pts[0].at - (pts[0].move || 0.75)) && !(s.cursorHide && lt > s.cursorHide);
      css(cur, { left: (pos.x - 6) + 'px', top: (pos.y - 3) + 'px', opacity: vis ? 1 : 0, transform: `scale(${1 - 0.15 * press})` });
      const ring = el.querySelector('.ring');
      if (ringAt && ringP >= 0 && ringP < 1) {
        const rr = 14 + 46 * E.outExpo(ringP);
        css(ring, { display: 'block', left: (ringAt.x - rr) + 'px', top: (ringAt.y - rr) + 'px', width: rr * 2 + 'px', height: rr * 2 + 'px', opacity: 1 - ringP });
      } else ring.style.display = 'none';
    }
    // bildirim
    (s.toast || []).forEach((f, i) => {
      const te = el.querySelector(`.toast[data-i="${i}"]`);
      const pin = spring(lt - f.at, SPRING.snappy);
      const pout = f.end ? E.inExpo(seg(lt, f.end, f.end + 0.4)) : 0;
      css(te, { right: (W - V.x - V.w + 36) + 'px', top: (V.y + 36) + 'px', opacity: lt >= f.at ? 1 - pout : 0,
        transform: `translateX(${(1 - pin) * 140 + pout * 60}px)` });
    });
    // mühür
    (s.stamp || []).forEach((f, i) => {
      const r = rectFor(s, f.key || f.rect);
      const st = el.querySelector(`.stamp[data-i="${i}"]`);
      const p = E.sharp(seg(lt, f.at - 0.22, f.at));
      css(st, { left: (r.x + r.w / 2) + 'px', top: (r.y + r.h / 2) + 'px', fontSize: (f.size || 44) + 'px', opacity: lt >= f.at - 0.22 ? Math.min(1, p * 2) : 0,
        transform: `translate(-50%,-50%) rotate(${f.rot ?? -8}deg) scale(${lerp(1.7, 1, p)})` });
    });
    // mühür sarsıntısı
    let shake = 0;
    (s.stamp || []).forEach(f => { const u = lt - f.at; if (u > 0) shake += Math.exp(-14 * u) * Math.sin(40 * u) * 6; });
    if (shake) card.style.transform += ` translateY(${shake}px)`;
    // serbest katmanlar
    (s.overlay || []).forEach((f, i) => {
      const oe = el.querySelector(`.ovl[data-i="${i}"]`);
      const p = E.outExpo(seg(lt, f.at, f.at + 0.5)) * (f.end ? 1 - seg(lt, f.end, f.end + 0.3) : 1);
      css(oe, { left: f.x + 'px', top: f.y + 'px', opacity: p, transform: `translateY(${(1 - p) * 10}px)` });
    });
  },
};

// ── Sahne: kapanış kartı ─────────────────────────────────────────
SCENES.end = {
  build(el, s) {
    el.innerHTML = gridHTML() + `
      <div class="abs" style="left:120px;top:150px">${LOGO(2.1)}</div>
      <div class="abs t-line" style="left:116px;top:470px;font-size:96px"><span class="mask"><span>Hijyen tedariğiniz</span></span></div>
      <div class="abs t-line t-accent" style="left:116px;top:566px;font-size:96px"><span class="mask"><span>tek panelde.</span></span></div>
      ${s.next ? `<div class="abs mono t-eyebrow" style="left:120px;top:400px"><span class="mask"><span>Sıradaki eğitim · ${s.next}</span></span></div>` : ''}
      <div class="abs rule" style="left:120px;top:880px;width:1680px;height:1px;background:var(--ink);transform-origin:left"></div>
      <div class="abs mono" style="left:120px;top:910px;font-size:20px;text-transform:none;letter-spacing:.04em"><span class="mask"><span>panel.mtshijyen.com</span></span></div>
      <div class="abs mono" style="right:120px;top:910px;font-size:20px;color:var(--blue);text-transform:none;letter-spacing:.04em"><span class="mask"><span>+90 543 683 57 65 · kurumsal@mtshijyen.com</span></span></div>`;
  },
  render(el, s, lt) {
    gridIn(el, lt, 0);
    const lg = el.querySelector('.logo');
    const p = E.outExpo(seg(lt, 0.2, 1.0));
    lg.style.opacity = p; lg.style.transform = `translateY(${(1 - p) * 20}px)`;
    el.querySelectorAll('.mask > span').forEach((m, i) => {
      const a = 0.35 + i * 0.1;
      m.style.transform = `translateY(${(1 - E.editorial(seg(lt, a, a + 0.85))) * 106}%)`;
    });
    el.querySelector('.rule').style.transform = `scaleX(${E.outExpo(seg(lt, 0.5, 1.5))})`;
  },
};

// Logo: MTS Hijyen orijinal logo dosyası (panel.mtshijyen.com/logo.png)
function LOGO(k = 1) {
  return `<div class="logo endlogo" style="transform-origin:left"><img src="kit/img/logo.png" style="height:${92 * k}px;width:auto"></div>`;
}

// ── Sahne: liste kartı (animasyonla canlandırılan panel işlemi) ──
// { eyebrow, title:[...], sub, card:{ttl, cols:[[ad, genişlik, hiza]], rows:[[...]], at, gap, total:{label, values}, fields:[[ad, değer]],
//   button:{text, at}, toast:{at, title, sub}, stamp:{at, text} } }
SCENES.list = {
  build(el, s) {
    const c = s.card;
    const head = c.cols.map(([n, w, a]) => `<div class="mono" style="width:${w}px;text-align:${a || 'left'};font-size:14px;color:var(--ink2)">${n}</div>`).join('');
    const rows = c.rows.map(r => `<div class="lrow" style="display:flex;align-items:center;height:64px;border-top:1px solid var(--line)">${r.map((v, j) =>
      `<div class="lc ${j === 0 ? 'mono' : ''}" style="width:${c.cols[j][1]}px;text-align:${c.cols[j][2] || 'left'};font-size:${j === 0 ? 20 : 22}px;${j === 0 ? 'text-transform:none;letter-spacing:.04em;color:var(--blue)' : ''};white-space:nowrap;overflow:hidden">${j === 0 ? '<span class="tx"></span>' : v}</div>`).join('')}</div>`).join('');
    const fields = (c.fields || []).map(([k, v]) => `<div class="lf" style="flex:1"><div class="mono" style="font-size:13px;color:var(--ink2)">${k}</div>
      <div style="margin-top:8px;border:1.5px solid var(--line);border-radius:10px;padding:12px 16px;font-size:22px">${v}</div></div>`).join('');
    el.innerHTML = gridHTML() + `
      <div class="abs" style="left:116px;top:250px;width:560px">
        <div class="mono t-eyebrow"><span class="mask"><span>${s.eyebrow || ''}</span></span></div>
        ${(s.title || []).map((t, i) => `<div class="t-line ${i === s.title.length - 1 ? 't-accent' : ''}" style="font-size:${s.titleSize || 78}px;margin-top:${i ? 0 : 18}px"><span class="mask"><span>${t}</span></span></div>`).join('')}
        ${s.sub ? `<div class="t-sub" style="font-size:30px;margin-top:28px"><span class="mask"><span>${s.sub}</span></span></div>` : ''}</div>
      <div class="abs lcard" style="left:720px;top:190px;width:1080px;background:#fff;border-radius:20px;padding:34px 40px;box-shadow:0 30px 80px -24px rgba(11,31,51,.35),0 0 0 1px rgba(11,31,51,.06)">
        <div style="display:flex;justify-content:space-between;align-items:center"><div style="font-size:32px;font-weight:600;letter-spacing:-.02em">${c.ttl}</div>
          <div class="mono" style="font-size:13px;color:var(--ink2)">${c.tag || ''}</div></div>
        <div style="display:flex;margin-top:26px;padding-bottom:10px">${head}</div>${rows}
        ${fields ? `<div class="lfields" style="display:flex;gap:20px;margin-top:22px">${fields}</div>` : ''}
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:26px;border-top:2px solid var(--ink);padding-top:22px">
          <div><div class="mono" style="font-size:14px;color:var(--ink2)">${c.total ? c.total.label : ''}</div><div class="ltot" style="font-size:52px;font-weight:300;letter-spacing:-.03em;color:var(--blue)"></div></div>
          ${c.button ? `<div class="lbtn" style="background:var(--amber);color:#2B1E00;font-weight:600;font-size:24px;padding:18px 34px;border-radius:12px">${c.button.text}</div>` : ''}</div></div>
      ${c.toast ? `<div class="toast" style="right:120px;top:90px"><div class="ic">${CHECK('#fff', 26)}</div><div><b>${c.toast.title}</b><span>${c.toast.sub || ''}</span></div></div>` : ''}
      ${c.stamp ? `<div class="stamp lstamp" style="font-size:52px">${c.stamp.text}</div>` : ''}
      <div class="ring"></div><svg class="cursor" viewBox="0 0 34 34"><path d="M6 3 L6 27 L12.5 21 L17 31 L21.5 29 L17 19.5 L26 19.5 Z" fill="#fff" stroke="#0B1F33" stroke-width="2.2" stroke-linejoin="round"/></svg>`;
  },
  render(el, s, lt) {
    const c = s.card;
    gridIn(el, lt, 0);
    el.querySelectorAll('.mask > span').forEach((m, i) => { const a = 0.2 + i * 0.1; m.style.transform = `translateY(${(1 - E.editorial(seg(lt, a, a + 0.8))) * 106}%)`; });
    const cp = E.outExpo(seg(lt, 0.2, 1.1));
    el.querySelector('.lcard').style.transform = `translateY(${(1 - cp) * 60}px)`;
    el.querySelector('.lcard').style.opacity = cp;
    const t0 = c.at ?? 1.3, gap = c.gap ?? 1.1;
    let sum = 0;
    el.querySelectorAll('.lrow').forEach((r, i) => {
      const a = t0 + i * gap, sku = c.rows[i][0];
      const p = seg(lt, a, a + sku.length * 0.07);
      r.querySelector('.tx').textContent = sku.slice(0, Math.floor(p * sku.length)) + (p > 0 && p < 1 ? '▍' : '');
      const rest = E.outExpo(seg(lt, a + sku.length * 0.07 + 0.1, a + sku.length * 0.07 + 0.6));
      r.querySelectorAll('.lc').forEach((cell, j) => { if (j) { cell.style.opacity = rest; cell.style.transform = `translateY(${(1 - rest) * 10}px)`; } });
      r.style.opacity = lt >= a - 0.2 ? 1 : 0.0;
      if (c.total && c.total.values) sum += c.total.values[i] * rest;
    });
    const lf = el.querySelector('.lfields');
    if (lf) lf.style.opacity = E.outExpo(seg(lt, t0 + c.rows.length * gap, t0 + c.rows.length * gap + 0.5));
    if (c.total) el.querySelector('.ltot').textContent = '₺' + sum.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const btn = el.querySelector('.lbtn'), cur = el.querySelector('.cursor'), ring = el.querySelector('.ring');
    if (btn && c.button.at) {
      const b = btn.getBoundingClientRect();
      const tx = b.x + b.width / 2, ty = b.y + b.height / 2 + 4;
      const mv = E.inOutQuart(seg(lt, c.button.at - 0.8, c.button.at));
      css(cur, { left: lerp(1700, tx, mv) + 'px', top: lerp(1150, ty, mv) + 'px', opacity: lt > c.button.at - 0.8 ? 1 : 0,
        transform: `scale(${1 - 0.15 * (lt > c.button.at ? 1 - seg(lt, c.button.at, c.button.at + 0.18) : 0)})` });
      btn.style.transform = `scale(${lt > c.button.at ? 1 - 0.05 * (1 - seg(lt, c.button.at, c.button.at + 0.2)) : 1})`;
      const rp = seg(lt, c.button.at, c.button.at + 0.55);
      if (rp > 0 && rp < 1) { const rr = 14 + 50 * E.outExpo(rp); css(ring, { display: 'block', left: (tx - rr) + 'px', top: (ty - rr) + 'px', width: rr * 2 + 'px', height: rr * 2 + 'px', opacity: 1 - rp }); }
      else ring.style.display = 'none';
    } else { cur.style.opacity = 0; ring.style.display = 'none'; }
    if (c.toast) {
      const te = el.querySelector('.toast');
      const p = spring(lt - c.toast.at, SPRING.snappy);
      css(te, { opacity: lt >= c.toast.at ? 1 : 0, transform: `translateX(${(1 - p) * 140}px)` });
    }
    if (c.stamp) {
      const sp = E.sharp(seg(lt, c.stamp.at - 0.22, c.stamp.at));
      css(el.querySelector('.lstamp'), { left: '1420px', top: '520px', opacity: lt > c.stamp.at - 0.22 ? Math.min(1, sp * 2) : 0,
        transform: `translate(-50%,-50%) rotate(-8deg) scale(${lerp(1.7, 1, sp)})` });
      const u = lt - c.stamp.at;
      if (u > 0) el.querySelector('.lcard').style.transform += ` translateY(${Math.exp(-14 * u) * Math.sin(40 * u) * 6}px)`;
    }
  },
};

// ── Sahne: form kartı (animasyonla doldurulan panel formu) ──────
// { eyebrow, title:[...], sub, form:{ ttl, tag, fields:[[etiket, değer, genişlik%]], at, gap, button:{text, at}, toast:{at,title,sub}, stamp:{at,text} } }
SCENES.form = {
  build(el, s) {
    const f = s.form;
    el.innerHTML = gridHTML() + `
      <div class="abs" style="left:116px;top:250px;width:560px">
        <div class="mono t-eyebrow"><span class="mask"><span>${s.eyebrow || ''}</span></span></div>
        ${(s.title || []).map((t, i) => `<div class="t-line ${i === s.title.length - 1 ? 't-accent' : ''}" style="font-size:${s.titleSize || 78}px;margin-top:${i ? 0 : 18}px"><span class="mask"><span>${t}</span></span></div>`).join('')}
        ${s.sub ? `<div class="t-sub" style="font-size:30px;margin-top:28px"><span class="mask"><span>${s.sub}</span></span></div>` : ''}</div>
      <div class="abs fcard" style="left:720px;top:180px;width:1080px;background:#fff;border-radius:20px;padding:36px 40px;box-shadow:0 30px 80px -24px rgba(11,31,51,.35),0 0 0 1px rgba(11,31,51,.06)">
        <div style="display:flex;justify-content:space-between;align-items:center"><div style="font-size:32px;font-weight:600;letter-spacing:-.02em">${f.ttl}</div>
          <div class="mono" style="font-size:13px;color:var(--ink2)">${f.tag || ''}</div></div>
        <div style="display:flex;flex-wrap:wrap;gap:20px 20px;margin-top:26px">${f.fields.map(([k, v, w]) => `<div class="ff" style="width:calc(${w || 100}% - ${w && w < 100 ? 10 : 0}px)">
          <div class="mono" style="font-size:13px;color:var(--ink2)">${k}</div>
          <div class="fbox" style="margin-top:8px;border:1.5px solid var(--line);border-radius:10px;padding:13px 16px;font-size:23px;height:56px;white-space:nowrap;overflow:hidden"><span class="tx"></span></div></div>`).join('')}</div>
        ${f.button ? `<div style="display:flex;justify-content:flex-end;margin-top:30px;border-top:1px solid var(--line);padding-top:24px"><div class="lbtn" style="background:var(--blue);color:#fff;font-weight:600;font-size:24px;padding:18px 34px;border-radius:12px">${f.button.text}</div></div>` : ''}</div>
      ${f.toast ? `<div class="toast" style="right:120px;top:70px"><div class="ic">${CHECK('#fff', 26)}</div><div><b>${f.toast.title}</b><span>${f.toast.sub || ''}</span></div></div>` : ''}
      ${f.stamp ? `<div class="stamp lstamp" style="font-size:52px">${f.stamp.text}</div>` : ''}
      <div class="ring"></div><svg class="cursor" viewBox="0 0 34 34"><path d="M6 3 L6 27 L12.5 21 L17 31 L21.5 29 L17 19.5 L26 19.5 Z" fill="#fff" stroke="#0B1F33" stroke-width="2.2" stroke-linejoin="round"/></svg>`;
  },
  render(el, s, lt) {
    const f = s.form;
    gridIn(el, lt, 0);
    el.querySelectorAll('.mask > span').forEach((m, i) => { const a = 0.2 + i * 0.1; m.style.transform = `translateY(${(1 - E.editorial(seg(lt, a, a + 0.8))) * 106}%)`; });
    const cp = E.outExpo(seg(lt, 0.2, 1.1));
    const card = el.querySelector('.fcard');
    card.style.transform = `translateY(${(1 - cp) * 60}px)`; card.style.opacity = cp;
    const t0 = f.at ?? 1.3, gap = f.gap ?? 0.9;
    el.querySelectorAll('.ff').forEach((ff, i) => {
      const v = f.fields[i][1], a = t0 + i * gap;
      const p = seg(lt, a, a + Math.min(0.8, v.length * 0.045));
      ff.querySelector('.tx').textContent = v.slice(0, Math.floor(p * v.length)) + (p > 0 && p < 1 ? '▍' : '');
      ff.querySelector('.fbox').style.borderColor = p > 0 && p < 1 ? 'var(--blue)' : '';
    });
    const btn = el.querySelector('.lbtn'), cur = el.querySelector('.cursor'), ring = el.querySelector('.ring');
    if (btn && f.button.at) {
      const b = btn.getBoundingClientRect();
      const tx = b.x + b.width / 2, ty = b.y + b.height / 2 + 4;
      const mv = E.inOutQuart(seg(lt, f.button.at - 0.8, f.button.at));
      css(cur, { left: lerp(1700, tx, mv) + 'px', top: lerp(1150, ty, mv) + 'px', opacity: lt > f.button.at - 0.8 ? 1 : 0 });
      btn.style.transform = `scale(${lt > f.button.at ? 1 - 0.05 * (1 - seg(lt, f.button.at, f.button.at + 0.2)) : 1})`;
      const rp = seg(lt, f.button.at, f.button.at + 0.55);
      if (rp > 0 && rp < 1) { const rr = 14 + 50 * E.outExpo(rp); css(ring, { display: 'block', left: (tx - rr) + 'px', top: (ty - rr) + 'px', width: rr * 2 + 'px', height: rr * 2 + 'px', opacity: 1 - rp }); }
      else ring.style.display = 'none';
    } else { cur.style.opacity = 0; ring.style.display = 'none'; }
    if (f.toast) { const te = el.querySelector('.toast'); const p = spring(lt - f.toast.at, SPRING.snappy); css(te, { opacity: lt >= f.toast.at ? 1 : 0, transform: `translateX(${(1 - p) * 140}px)` }); }
    if (f.stamp) {
      const sp = E.sharp(seg(lt, f.stamp.at - 0.22, f.stamp.at));
      css(el.querySelector('.lstamp'), { left: '1420px', top: '540px', opacity: lt > f.stamp.at - 0.22 ? Math.min(1, sp * 2) : 0,
        transform: `translate(-50%,-50%) rotate(-8deg) scale(${lerp(1.7, 1, sp)})` });
    }
  },
};

// ── İkon seti (24×24, çizgi) ─────────────────────────────────────
const ICONS = {
  cart: '<path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L20 8H6.2"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chart: '<path d="M3 21h18"/><path d="M6 17v-5"/><path d="M11 17V7"/><path d="M16 17v-8"/><path d="M21 17V4"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8"/><path d="M18 14.6a6 6 0 0 1 3.5 5.4"/>',
  wallet: '<path d="M3 7h15a3 3 0 0 1 3 3v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 7l12-3v3"/><path d="M16 14h2"/>',
  doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h6"/><path d="M10 17h6"/>',
  repeat: '<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12"/><path d="M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/>',
  bell: '<path d="M6 16v-5a6 6 0 1 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
  gift: '<path d="M4 11h16v10H4z"/><path d="M2.5 7h19v4h-19z"/><path d="M12 7v14"/><path d="M12 7C10.5 3 6.5 3.5 7.5 7"/><path d="M12 7c1.5-4 5.5-3.5 4.5 0"/>',
  truck: '<path d="M2 6h12v10H2z"/><path d="M14 9h4l4 4v3h-8"/><circle cx="6" cy="18.5" r="1.8"/><circle cx="18" cy="18.5" r="1.8"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-4.5"/>',
  box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4"/><path d="M12 11v10"/>',
  percent: '<path d="M19 5L5 19"/><circle cx="7" cy="7" r="2.2"/><circle cx="17" cy="17" r="2.2"/>',
  mail: '<path d="M3 5h18v14H3z"/><path d="M3 6l9 7 9-7"/>',
  building: '<path d="M4 21V5l8-3v19"/><path d="M12 8h8v13"/><path d="M7 9h2M7 13h2M7 17h2M15 12h2M15 16h2"/><path d="M2 21h20"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  back: '<path d="M9 14L4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>',
  flask: '<path d="M9 3h6"/><path d="M10 3v6L5 19a1.5 1.5 0 0 0 1.3 2h11.4a1.5 1.5 0 0 0 1.3-2l-5-10V3"/><path d="M7.5 15h9"/>',
  calendar: '<path d="M4 5h16v16H4z"/><path d="M4 10h16"/><path d="M8 3v4M16 3v4"/>',
  table: '<path d="M3 4h18v16H3z"/><path d="M3 9h18M3 14h18M9 4v16"/>',
  userplus: '<circle cx="10" cy="8" r="3.5"/><path d="M3.5 20a6.5 6.5 0 0 1 13 0"/><path d="M19 8v6M16 11h6"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8z"/><path d="M7.5 7.5h.01"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3"/>',
  phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  approve: '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11"/>',
  map: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
};
const ICON = (n, size = 44, color = '#1D5FA8', w = 2) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${(ICONS[n] || ICONS.check).replace(/<(path|circle)/g, '<$1 pathLength="1" stroke-dasharray="1"')}</svg>`;
const drawIcon = (svg, p) => svg && svg.querySelectorAll('path,circle').forEach(e => e.style.strokeDashoffset = 1 - p);

// ── Sahne: açıklama kartları ─────────────────────────────────────
// { eyebrow, title:[satır, vurgulu satır], items:[{icon, t, d}] }
SCENES.explain = {
  build(el, s) {
    const n = s.items.length, gap = 28, X0 = 116, TW = 1688, cw = (TW - gap * (n - 1)) / n;
    el.innerHTML = gridHTML() + `<div class="abs" style="left:116px;top:120px">
        <div class="mono t-eyebrow"><span class="mask"><span>${s.eyebrow || ''}</span></span></div>
        ${(s.title || []).map((t, i) => `<div class="t-line ${i === s.title.length - 1 && s.title.length > 1 ? 't-accent' : ''}" style="font-size:${s.size || 88}px;margin-top:${i ? 0 : 16}px"><span class="mask"><span>${t}</span></span></div>`).join('')}</div>` +
      s.items.map((it, i) => `<div class="xcard" style="left:${X0 + i * (cw + gap)}px;top:${s.top || 440}px;width:${cw}px;min-height:${s.h || 320}px">
        <div class="mono xn">${String(i + 1).padStart(2, '0')}</div><div class="xic">${ICON(it.icon, 50)}</div>
        <div class="xt">${it.t}</div><div class="xd">${it.d || ''}</div></div>`).join('');
  },
  render(el, s, lt) {
    gridIn(el, lt, 0);
    el.querySelectorAll('.mask > span').forEach((m, i) => { const a = 0.2 + i * 0.1; m.style.transform = `translateY(${(1 - E.editorial(seg(lt, a, a + 0.8))) * 106}%)`; });
    const gap = s.gap ?? Math.min(1.1, 3.6 / s.items.length);
    el.querySelectorAll('.xcard').forEach((c, i) => {
      const t0 = (s.at ?? 1.0) + i * gap;
      const p = lt < t0 ? 0 : spring(lt - t0, SPRING.snappy);
      c.style.opacity = lt >= t0 ? Math.min(1, (lt - t0) * 4) : 0;
      c.style.transform = `translateY(${(1 - p) * 70}px)`;
      drawIcon(c.querySelector('svg'), E.inOutQuart(seg(lt, t0 + 0.2, t0 + 1.0)));
    });
  },
};

// ── Sahne: akış şeması ───────────────────────────────────────────
// { eyebrow, title:[...], steps:[{icon, t, d}], at:[her adımın etkinleşme anı] }
SCENES.flow = {
  build(el, s) {
    const n = s.steps.length, X0 = 260, X1 = 1660, dx = n > 1 ? (X1 - X0) / (n - 1) : 0, Y = s.y || 560;
    s._x = i => X0 + i * dx;
    let h = gridHTML() + `<div class="abs" style="left:116px;top:120px">
        <div class="mono t-eyebrow"><span class="mask"><span>${s.eyebrow || ''}</span></span></div>
        ${(s.title || []).map((t, i) => `<div class="t-line ${i === s.title.length - 1 && s.title.length > 1 ? 't-accent' : ''}" style="font-size:${s.size || 88}px;margin-top:${i ? 0 : 16}px"><span class="mask"><span>${t}</span></span></div>`).join('')}</div>`;
    h += `<svg class="abs" width="1920" height="1080" style="left:0;top:0">${s.steps.slice(1).map((_, i) =>
      `<g class="farr"><line x1="${s._x(i) + 80}" x2="${s._x(i + 1) - 92}" y1="${Y}" y2="${Y}" stroke="#0B1F33" stroke-opacity=".35" stroke-width="3" pathLength="1" stroke-dasharray="1"/>
       <path d="M${s._x(i + 1) - 104} ${Y - 10} L${s._x(i + 1) - 90} ${Y} L${s._x(i + 1) - 104} ${Y + 10}" stroke="#0B1F33" stroke-opacity=".35" stroke-width="3" fill="none" stroke-linecap="round"/></g>`).join('')}</svg>`;
    s.steps.forEach((st, i) => {
      h += `<div class="fnode" style="left:${s._x(i) - 66}px;top:${Y - 66}px">${ICON(st.icon, 56, '#1D5FA8', 2)}</div>
        <div class="abs mono" style="left:${s._x(i) - 30}px;top:${Y - 120}px;width:60px;text-align:center;font-size:16px;color:var(--ink3)">${String(i + 1).padStart(2, '0')}</div>
        <div class="flbl" style="left:${s._x(i) - 160}px;top:${Y + 96}px"><b>${st.t}</b><span>${st.d || ''}</span></div>`;
    });
    el.innerHTML = h;
  },
  render(el, s, lt) {
    gridIn(el, lt, 0);
    el.querySelectorAll('.mask > span').forEach((m, i) => { const a = 0.2 + i * 0.1; m.style.transform = `translateY(${(1 - E.editorial(seg(lt, a, a + 0.8))) * 106}%)`; });
    const ats = s.at || s.steps.map((_, i) => 1.2 + i * 1.2);
    const nodes = el.querySelectorAll('.fnode'), lbls = el.querySelectorAll('.flbl'), arrs = el.querySelectorAll('.farr');
    s.steps.forEach((_, i) => {
      const a = ats[i];
      const pin = lt < a - 0.5 ? 0 : spring(lt - (a - 0.5), SPRING.snappy);
      const on = lt >= a;
      const nd = nodes[i];
      nd.style.opacity = lt >= a - 0.5 ? 1 : 0;
      nd.style.transform = `scale(${0.6 + 0.4 * pin})`;
      const act = on && (i === s.steps.length - 1 || lt < ats[i + 1]);
      nd.style.background = on ? (act ? 'var(--blue)' : 'var(--ink)') : '#fff';
      nd.style.borderColor = on ? 'transparent' : 'var(--ink3)';
      nd.querySelector('svg').setAttribute('stroke', on ? '#fff' : '#1D5FA8');
      drawIcon(nd.querySelector('svg'), E.inOutQuart(seg(lt, a - 0.4, a + 0.3)));
      const lp = E.outExpo(seg(lt, a - 0.3, a + 0.4));
      lbls[i].style.opacity = lp; lbls[i].style.transform = `translateY(${(1 - lp) * 16}px)`;
      if (i > 0) arrs[i - 1].querySelector('line').style.strokeDashoffset = 1 - E.inOutQuart(seg(lt, a - 0.9, a - 0.4));
      if (i > 0) arrs[i - 1].querySelector('path').style.opacity = lt > a - 0.45 ? 1 : 0;
    });
  },
};
