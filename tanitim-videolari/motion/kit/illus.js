// İllüstrasyonlu sahneler: kaos (açılış), yolculuk rayı + koli (C anları), teslimat, organizasyon.
const NS = 'http://www.w3.org/2000/svg';
const SKIN = ['#E8B796', '#C98E6B', '#F1CBAE'];
const at = (el, tr) => el && el.setAttribute('transform', tr);
const wob = (u, f = 18, k = 8) => (u <= 0 ? 0 : Math.exp(-k * u) * Math.cos(f * u));

// ── Ortak çizimler ───────────────────────────────────────────────
function boxSVG(w = 96, h = 76, label = true) {
  return `<g><rect x="${-w / 2}" y="${-h}" width="${w}" height="${h}" rx="3" fill="#C99866"/>
    <rect x="${-w / 2}" y="${-h}" width="${w}" height="${h * 0.22}" fill="#B98653"/>
    <rect x="-7" y="${-h}" width="14" height="${h * 0.5}" fill="#E9D6B4"/>
    ${label ? `<rect x="${w / 2 - 40}" y="${-h * 0.55}" width="30" height="22" fill="#FBF8F2"/><rect x="${w / 2 - 36}" y="${-h * 0.55 + 14}" width="22" height="3" fill="#0B1F33"/>` : ''}</g>`;
}

// Kişi: ayak tabanı (0,0). opts: {shirt, pants, skin, cap, hair, logo, tie}
function personSVG(id, o) {
  const skin = o.skin || SKIN[0];
  return `<g id="${id}">
    <g class="legL"><rect x="-26" y="-150" width="26" height="150" rx="12" fill="${o.pants}"/><rect x="-32" y="-12" width="36" height="14" rx="7" fill="#1A2330"/></g>
    <g class="legR"><rect x="2" y="-150" width="26" height="150" rx="12" fill="${o.pants}"/><rect x="0" y="-12" width="36" height="14" rx="7" fill="#1A2330"/></g>
    <g class="armB" transform="translate(-40,-286)"><rect x="-12" y="0" width="24" height="124" rx="12" fill="${o.sleeve || o.shirt}"/><circle cx="0" cy="126" r="13" fill="${skin}"/></g>
    <rect x="-50" y="-300" width="100" height="160" rx="30" fill="${o.shirt}"/>
    ${o.vest ? `<path d="M-50 -250 Q-50 -300 -20 -300 L-8 -300 L-8 -140 L-50 -140 Z M50 -250 Q50 -300 20 -300 L8 -300 L8 -140 L50 -140 Z" fill="${o.vest}"/>` : ''}
    ${o.logo ? `<circle cx="-27" cy="-252" r="13" fill="#fff"/><path d="M-34 -252 l5 5 l10 -11" stroke="#1D5FA8" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
    ${o.tie ? `<path d="M0 -296 L-9 -268 L0 -200 L9 -268 Z" fill="${o.tie}"/>` : ''}
    <rect x="-12" y="-322" width="24" height="26" fill="${skin}"/>
    <g class="head">
      <circle cx="0" cy="-352" r="40" fill="${skin}"/>
      ${o.hair ? `<path d="${o.hair}" fill="${o.hairC || '#2A1E17'}"/>` : ''}
      ${o.cap ? `<path d="M-41 -360 Q-40 -398 0 -398 Q40 -398 41 -360 Z" fill="${o.cap}"/><rect x="-6" y="-366" width="62" height="10" rx="5" fill="${o.cap}"/>` : ''}
      <circle class="eyeL" cx="-1" cy="-352" r="4" fill="#1A2330"/><circle class="eyeR" cx="21" cy="-352" r="4" fill="#1A2330"/>
      <path class="mouth" d="M-2 -334 Q10 -326 22 -334" stroke="#7A3B2E" stroke-width="4" fill="none" stroke-linecap="round"/>
    </g>
    <g class="armF" transform="translate(40,-286)"><rect x="-12" y="0" width="24" height="124" rx="12" fill="${o.sleeve || o.shirt}"/><circle cx="0" cy="126" r="13" fill="${skin}"/></g>
  </g>`;
}
function smile(g, k) { // k: 0 nötr → 1 kocaman
  const m = g.querySelector('.mouth');
  m.setAttribute('d', `M-4 ${-336 + k * -1} Q10 ${-328 + k * 8} 24 ${-336 + k * -1}`);
}
function walk(g, phase, amp = 1) {
  const a = Math.sin(phase) * 20 * amp;
  at(g.querySelector('.legL'), `rotate(${a} -13 -150)`);
  at(g.querySelector('.legR'), `rotate(${-a} 15 -150)`);
}

function vanSVG() {
  // yerel koordinat: x 0 (ön) … 660 (arka), y 0 = zemin
  const wheel = cx => `<g class="wheel" data-cx="${cx}"><circle cx="${cx}" cy="-46" r="48" fill="#1B2531"/><circle cx="${cx}" cy="-46" r="22" fill="#C9D3DD"/>
    <g class="spk"><rect x="${cx - 2}" y="-66" width="4" height="40" fill="#8796A6"/><rect x="${cx - 20}" y="-48" width="40" height="4" fill="#8796A6"/></g></g>`;
  return `<g id="van"><ellipse cx="330" cy="4" rx="330" ry="14" fill="#0B1F33" opacity=".12"/>
    <g id="vanBody">
      <path d="M30 -96 A62 62 0 0 1 154 -96 Z M436 -96 A62 62 0 0 1 560 -96 Z" fill="#C7D2DE"/>
      <rect id="vanCargo" x="170" y="-318" width="490" height="262" rx="20" fill="#FFFFFF" stroke="#D3DCE6" stroke-width="3"/>
      <path d="M175 -56 L175 -270 Q175 -292 152 -292 L96 -292 Q72 -292 60 -270 L22 -178 Q12 -158 12 -136 L12 -78 Q12 -56 34 -56 Z" fill="#FFFFFF" stroke="#D3DCE6" stroke-width="3"/>
      <path d="M156 -272 L102 -272 Q88 -272 80 -258 L50 -186 L156 -186 Z" fill="#BFD6EA"/>
      <rect x="12" y="-124" width="648" height="30" fill="#1D5FA8"/>
      <rect x="12" y="-94" width="648" height="10" fill="#0B1F33"/>
      <circle cx="30" cy="-150" r="9" fill="#F5B019"/>
      <rect x="4" y="-80" width="48" height="22" rx="6" fill="#8796A6"/>
      <image href="kit/img/logo.png" x="292" y="-306" width="248" height="140"/>
      <text x="415" y="-142" text-anchor="middle" font-family="JetBrains Mono" font-size="15" letter-spacing="2" fill="#0B1F33" opacity=".6">PANEL.MTSHIJYEN.COM</text>
      <rect id="vanDark" x="610" y="-300" width="44" height="236" fill="#22303F" opacity="0"/>
      <rect id="vanDoor" x="660" y="-306" width="70" height="246" rx="6" fill="#F2F5F8" stroke="#D3DCE6" stroke-width="3" transform="scale(0 1)"/>
    </g>
    ${wheel(92)}${wheel(498)}</g>`;
}

function hotelSVG() {
  let win = '';
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) win += `<rect x="${170 + c * 110}" y="${150 + r * 120}" width="70" height="80" rx="6" fill="#CFE0EF"/>`;
  return `<g id="hotel">
    <rect x="130" y="110" width="480" height="750" fill="#E3E9EF"/>
    <rect x="130" y="100" width="480" height="22" fill="#C9D4DF"/>
    ${win}
    <rect x="300" y="650" width="140" height="210" fill="#0B1F33"/><rect x="306" y="656" width="62" height="204" fill="#2D4258"/><rect x="372" y="656" width="62" height="204" fill="#2D4258"/>
    <path d="M270 640 L470 640 L450 606 L290 606 Z" fill="#0B5677"/>
    <text x="370" y="632" text-anchor="middle" font-family="JetBrains Mono" font-weight="500" font-size="20" letter-spacing="4" fill="#fff">OTEL</text>
    <rect x="232" y="800" width="44" height="60" rx="6" fill="#8AA39A"/><circle cx="254" cy="786" r="30" fill="#5E8A72"/>
    <rect x="464" y="800" width="44" height="60" rx="6" fill="#8AA39A"/><circle cx="486" cy="786" r="30" fill="#5E8A72"/>
  </g>`;
}

// ── Sahne: teslimat ──────────────────────────────────────────────
// { title: 'Teslim edildi.', eyebrow, order: 'MTS-2026-0020' }
SCENES.delivery = {
  build(el, s) {
    const staff = { shirt: '#1D5FA8', sleeve: '#1D5FA8', vest: '#0B1F33', pants: '#24364A', cap: '#0B1F33', logo: true };
    el.innerHTML = `
      <svg class="abs" width="1920" height="1080" viewBox="0 0 1920 1080">
        <rect x="0" y="860" width="1920" height="220" fill="#E9EEF3"/>
        <line x1="0" x2="1920" y1="860" y2="860" stroke="#0B1F33" stroke-width="2"/>
        ${hotelSVG()}
        <g id="staff2" transform="translate(1700,860)">${personSVG('p2', { ...staff, skin: SKIN[1] })}</g>
        <g id="vanPos">${vanSVG()}</g>
        <g id="truck"><rect x="-6" y="-250" width="10" height="250" rx="5" fill="#5A6B7D"/><rect x="-6" y="-12" width="90" height="10" fill="#5A6B7D"/>
          <circle cx="0" cy="-8" r="16" fill="#1B2531"/>
          <g class="b b0" transform="translate(44,-12)">${boxSVG(84, 70)}</g>
          <g class="b b1" transform="translate(44,-82)">${boxSVG(84, 70)}</g>
          <g class="b b2" transform="translate(44,-152)">${boxSVG(84, 70)}</g></g>
        <g id="customer" transform="translate(560,860) scale(-1,1)">${personSVG('cu', { shirt: '#2E3B4E', pants: '#2E3B4E', skin: SKIN[2], tie: '#F5B019',
          hair: 'M-42 -356 Q-44 -400 0 -402 Q44 -400 42 -352 Q34 -380 0 -382 Q-30 -380 -42 -356 Z', hairC: '#3B2A20' })}
          <g id="tablet" transform="translate(64,-200)"><rect x="-6" y="-60" width="70" height="92" rx="8" fill="#0B1F33"/><rect x="0" y="-54" width="58" height="80" rx="4" fill="#DCE8F4"/></g></g>
        <g id="staff1" transform="translate(1500,860)">${personSVG('p1', staff)}</g>
        <g id="badge" transform="translate(700,420)"><circle r="44" fill="#1D5FA8"/><path d="M-18 1 l12 12 l26 -28" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g id="bubble" transform="translate(860,330)">
          <circle r="190" fill="#fff" stroke="#0B1F33" stroke-width="3"/>
          <rect x="-120" y="-150" width="240" height="300" rx="18" fill="#0B1F33"/><rect x="-108" y="-138" width="216" height="276" rx="10" fill="#fff"/>
          <text x="-90" y="-102" font-family="JetBrains Mono" font-size="15" letter-spacing="1.5" fill="#0B1F33" opacity=".6">${s.order || 'MTS-2026-0020'}</text>
          <text x="-90" y="-70" font-family="Inter Tight" font-weight="600" font-size="26" fill="#0B1F33">Teslim alındı</text>
          <line x1="-90" x2="90" y1="40" y2="40" stroke="#0B1F33" stroke-opacity=".25" stroke-width="2"/>
          <path id="sig" d="M-82 22 C-70 -30 -56 -26 -50 10 C-46 34 -36 -40 -20 -4 C-10 20 0 -24 14 6 C24 26 36 -14 50 2 C58 10 70 0 84 -8" stroke="#1D5FA8" stroke-width="5" fill="none" stroke-linecap="round" pathLength="1" stroke-dasharray="1"/>
          <rect x="-90" y="66" width="180" height="48" rx="10" fill="#1D5FA8"/><text x="0" y="98" text-anchor="middle" font-family="Inter Tight" font-weight="600" font-size="20" fill="#fff">Onayla</text>
        </g>
      </svg>
      <div class="stamp" id="dstamp" style="font-size:64px">Teslim edildi</div>
      <div class="abs" style="left:1000px;top:120px">
        ${s.eyebrow ? `<div class="mono t-eyebrow"><span class="mask"><span>${s.eyebrow}</span></span></div>` : ''}
        <div class="t-line t-accent" style="font-size:120px;margin-top:14px"><span class="mask"><span>${s.title || 'Teslim edildi.'}</span></span></div>
        ${s.sub ? `<div class="t-sub" style="font-size:34px;margin-top:20px;width:820px"><span class="mask"><span>${s.sub}</span></span></div>` : ''}
      </div>`;
  },
  render(el, s, lt) {
    lt += s.offset || 0;
    const q = id => el.querySelector('#' + id);
    // araç: sağdan gelir, yavaşlayarak durur, süspansiyon yaylanır
    const VX = 900;
    const pIn = E.outCirc(seg(lt, 0, 2.3));
    const vx = lerp(2000, VX, pIn);
    const moving = lt < 2.3;
    const pitch = moving ? Math.sin(lt * 18) * 0.25 : wob(lt - 2.3, 14, 5) * -2.2;
    at(q('vanPos'), `translate(${vx},860)`);
    at(q('vanBody'), `rotate(${pitch} 92 -46) translate(0 ${moving ? Math.sin(lt * 22) * 1.5 : 0})`);
    const dist = 2000 - vx;
    el.querySelectorAll('.wheel').forEach(w => at(w.querySelector('.spk'), `rotate(${(-dist / 48) * 57.3} ${w.dataset.cx} -46)`));
    // arka kapı
    const dp = E.outBack(seg(lt, 2.7, 3.2));
    at(q('vanDoor'), `translate(${660 * (1 - dp)} 0) scale(${dp} 1)`);
    q('vanDark').setAttribute('opacity', dp);
    // personel 1: aracın arkasından çıkar, el arabasıyla müşteriye yürür
    const p1 = q('staff1');
    let sx = 1640, walking = 0, ph = 0;
    if (lt < 2.6) sx = 1640;
    const walk1 = seg(lt, 4.3, 6.4);
    if (lt >= 4.3) { sx = lerp(1640, 820, E.inOutQuart(walk1)); walking = walk1 > 0 && walk1 < 1 ? 1 : 0; ph = (1640 - sx) / 26; }
    at(p1, `translate(${sx},860) scale(-1,1)`);
    p1.style.opacity = lt > 2.4 ? 1 : 0;
    walk(p1, ph, walking);
    // koliler el arabasına yığılır
    const tx = sx - 110;
    at(q('truck'), `translate(${tx},860)`);
    q('truck').style.opacity = lt > 3.1 ? 1 : 0;
    el.querySelectorAll('.b').forEach((b, i) => {
      const t0 = 3.3 + i * 0.32;
      const d = lt < t0 ? 0 : spring(lt - t0, SPRING.bouncy);
      at(b, `translate(${44 + (1 - d) * 120},${-12 - i * 70 - (1 - d) * 60})`);
      b.style.opacity = lt >= t0 ? 1 : 0;
    });
    // kollar: el arabasını iter / tokalaşma
    const shake = E.outBack(seg(lt, 8.0, 8.5));
    const hs = lt > 8.5 ? Math.sin((lt - 8.5) * 12) * 6 * Math.exp(-(lt - 8.5) * 1.5) : 0;
    at(p1.querySelector('.armF'), `translate(40,-286) rotate(${lt < 4.2 ? 0 : lt < 7.9 ? -50 : lerp(-50, -78, shake) + hs})`);
    at(p1.querySelector('.armB'), `translate(-40,-286) rotate(${lt < 4.2 || lt > 7.6 ? 0 : -40})`);
    // müşteri: tableti uzatır, sonra tokalaşır
    const cu = q('customer');
    const tab = E.outExpo(seg(lt, 6.2, 6.8)) * (1 - E.inOutQuart(seg(lt, 7.7, 8.0)));
    at(cu.querySelector('.armF'), `translate(40,-286) rotate(${lt < 7.9 ? -70 * tab : lerp(0, -78, shake) - hs})`);
    q('tablet').style.opacity = tab;
    // imza baloncuğu
    const bp = spring(lt - 6.4, SPRING.snappy) * (1 - E.inExpo(seg(lt, 7.6, 7.9)));
    at(q('bubble'), `translate(860,330) scale(${lt < 6.4 ? 0 : Math.max(0, bp)})`);
    q('sig').style.strokeDashoffset = 1 - E.inOutQuart(seg(lt, 6.7, 7.4));
    // mühür (C anı)
    const st = q('dstamp');
    const sp = E.sharp(seg(lt, 7.75, 7.98));
    css(st, { left: '1290px', top: '440px', opacity: lt > 7.75 ? Math.min(1, sp * 2) : 0,
      transform: `translate(-50%,-50%) rotate(-9deg) scale(${lerp(1.8, 1, sp)})` });
    // gülümsemeler + rozet
    const joy = E.outExpo(seg(lt, 8.1, 8.8));
    smile(p1, joy); smile(cu, joy); smile(q('staff2'), joy);
    at(q('badge'), `translate(${(sx + 560) / 2},400) scale(${lt < 8.4 ? 0 : spring(lt - 8.4, SPRING.bouncy)})`);
    // personel 2 el sallar
    const p2 = q('staff2');
    p2.style.opacity = E.outExpo(seg(lt, 3.0, 3.6));
    at(p2, `translate(1720,860) scale(-1,1)`);
    at(p2.querySelector('.armF'), `translate(40,-286) rotate(${lt > 8.3 ? -150 + Math.sin((lt - 8.3) * 9) * 18 : 0})`);
    // başlık
    el.querySelectorAll('.mask > span').forEach((m, i) => {
      const a = 8.1 + i * 0.12;
      m.style.transform = `translateY(${(1 - E.editorial(seg(lt, a, a + 0.8))) * 106}%)`;
    });
  },
};

// ── Sahne: kaos (promo açılışı) ─────────────────────────────────
SCENES.chaos = {
  build(el, s) {
    const items = [
      { x: 260, y: 300, r: -6, h: `<div style="width:300px;height:560px;border-radius:44px;background:#0B1F33;padding:18px"><div style="height:100%;border-radius:30px;background:#1D2B3B;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;font-size:26px"><div class="mono" style="font-size:16px;opacity:.6">Gelen arama</div><b>Tedarikçi</b><div style="display:flex;gap:40px;margin-top:40px"><span style="width:70px;height:70px;border-radius:50%;background:#D64545"></span><span style="width:70px;height:70px;border-radius:50%;background:#2FA36B"></span></div></div></div>` },
      { x: 700, y: 170, r: 4, h: bubble('20 koli kağıt havlu lazım, acil!') },
      { x: 1180, y: 250, r: -3, h: sheet() },
      { x: 760, y: 470, r: -2, h: bubble('Fiyat listesi güncel mi?', true) },
      { x: 1460, y: 140, r: 6, h: note('Çarşamba tedarikçiyi ara!') },
      { x: 560, y: 690, r: 3, h: mail('RE: RE: RE: Sipariş hk.') },
      { x: 1250, y: 660, r: -5, h: bubble('Fatura hâlâ gelmedi…') },
      { x: 1520, y: 520, r: 5, h: note('Onayı kim verecek?') },
      { x: 920, y: 790, r: -4, h: bubble('Sipariş ne zaman çıkar?', true) },
      { x: 120, y: 140, r: -8, h: note('Kağıt havlu 6 koli + çöp poşeti') },
    ];
    s._n = items.length;
    el.innerHTML = gridHTML() + items.map((it, i) => `<div class="abs ch" data-r="${it.r}" style="left:${it.x}px;top:${it.y}px">${it.h}</div>`).join('');
    function bubble(t, me) { return `<div style="max-width:520px;padding:22px 28px;border-radius:${me ? '26px 26px 6px 26px' : '26px 26px 26px 6px'};background:${me ? '#DCEFE3' : '#fff'};box-shadow:0 16px 40px -14px rgba(11,31,51,.35);font-size:32px;font-weight:500;letter-spacing:-.01em;color:#0B1F33">${t}<div class="mono" style="font-size:13px;opacity:.45;margin-top:8px;text-align:right">09:4${Math.floor(rnd(t.length) * 9)}</div></div>`; }
    function note(t) { return `<div style="width:270px;height:230px;padding:26px;background:#F5B019;box-shadow:0 18px 30px -16px rgba(11,31,51,.5);font-size:30px;font-weight:600;line-height:1.2;color:#3A2A05">${t}</div>`; }
    function mail(t) { return `<div style="width:520px;padding:24px 28px;background:#fff;border-radius:14px;box-shadow:0 16px 40px -14px rgba(11,31,51,.35)"><div class="mono" style="font-size:14px;opacity:.5">Gelen kutusu · 14 okunmamış</div><div style="font-size:30px;font-weight:600;margin-top:10px">${t}</div><div style="height:10px;background:#E5EAF0;border-radius:5px;margin-top:16px;width:90%"></div><div style="height:10px;background:#E5EAF0;border-radius:5px;margin-top:10px;width:70%"></div></div>`; }
    function sheet() {
      let c = ''; for (let r = 0; r < 7; r++) for (let k = 0; k < 5; k++) c += `<div style="height:42px;border:1px solid #D8E0E8;background:${(r * 5 + k) % 7 === 3 ? '#F8D7D7' : r === 0 ? '#E8EEF4' : '#fff'};font-size:15px;padding:10px 8px;font-family:JetBrains Mono">${r === 0 ? ['Ürün', 'Adet', 'Fiyat', 'Tarih', 'Durum'][k] : (r * 7 + k * 3) % 5 === 0 ? '#REF!' : ''}</div>`;
      return `<div style="width:560px;background:#fff;border-radius:12px;box-shadow:0 20px 50px -18px rgba(11,31,51,.4);overflow:hidden"><div class="mono" style="font-size:14px;padding:12px 16px;background:#0B1F33;color:#fff">siparis_son_v3_SON(2).xlsx</div><div style="display:grid;grid-template-columns:repeat(5,1fr)">${c}</div></div>`;
    }
  },
  render(el, s, lt) {
    gridIn(el, lt, 0);
    el.querySelectorAll('.ch').forEach((c, i) => {
      const t0 = 0.15 + i * 0.32;
      const p = lt < t0 ? 0 : spring(lt - t0, SPRING.bouncy);
      const r = Number(c.dataset.r) + Math.sin(lt * 7 + i) * (i === 0 ? 2.5 : 0.6);
      c.style.opacity = lt >= t0 ? 1 : 0;
      c.style.transform = `scale(${p}) rotate(${r}deg)`;
    });
  },
};

// ── Sahne: sipariş yolculuğu rayı + koli (C anları) ──────────────
// { stages: [...], from, to, at: [sn...] (her geçiş anı), title, sub, box: [{at, act}] }
SCENES.journey = {
  build(el, s) {
    const N = s.stages.length, X0 = 160, X1 = 1760, step = (X1 - X0) / (N - 1);
    s._x = i => X0 + i * step;
    let h = gridHTML();
    h += `<div class="abs" style="left:116px;top:150px">
      <div class="mono t-eyebrow"><span class="mask"><span>${s.eyebrow || 'Sipariş durumu'}</span></span></div>
      <div class="t-line" style="font-size:118px;margin-top:16px;height:132px;overflow:hidden;position:relative">
        <div class="col jt">${s.stages.map(t => `<div style="height:132px">${t}</div>`).join('')}</div></div>
      ${s.sub ? `<div class="t-sub" style="font-size:36px;margin-top:22px;width:900px"><span class="mask"><span>${s.sub}</span></span></div>` : ''}</div>
      <div class="abs" style="right:120px;top:110px;text-align:right">
        <div class="t-big" style="font-size:260px;height:260px;overflow:hidden;padding-right:12px"><div class="col jn">${s.stages.map((_, i) => `<div style="height:260px">${String(i + 1).padStart(2, '0')}</div>`).join('')}</div></div>
        <div class="mono t-eyebrow">Adım / ${String(N).padStart(2, '0')}</div></div>
      <div class="abs jrail" style="left:${X0}px;top:900px;width:${X1 - X0}px;height:2px;background:var(--ink3)"></div>
      <div class="abs jfill" style="left:${X0}px;top:899px;height:4px;background:var(--blue)"></div>`;
    s.stages.forEach((t, i) => {
      const up = i % 2 === 1;
      h += `<div class="abs jstop" style="left:${s._x(i) - 8}px;top:893px;width:16px;height:16px;border-radius:50%;border:2px solid var(--ink);background:var(--bg)"></div>
        <div class="abs jlbl" style="left:${s._x(i)}px;top:${up ? 846 : 930}px;transform:translateX(-50%);font-size:21px;font-weight:500;white-space:nowrap">${t}</div>`;
    });
    h += `<div class="abs jdot" style="top:887px;width:28px;height:28px;margin-left:-14px;border-radius:50%;background:var(--blue);box-shadow:0 0 0 10px rgba(29,95,168,.15)"></div>`;
    if (s.box) h += `<svg class="abs" width="1920" height="1080" style="left:0;top:0;pointer-events:none"><g class="jbox">
      <ellipse class="jsh" cx="0" cy="4" rx="150" ry="12" fill="#0B1F33" opacity=".12"/>
      <g class="jb">${boxSVG(260, 200, false)}
        <rect class="jtape" x="-130" y="-200" width="260" height="22" fill="#E9D6B4" transform="scale(0 1)"/>
        <g class="jlabel"><rect x="-120" y="-150" width="130" height="86" fill="#FBF8F2"/>
          <text x="-110" y="-124" font-family="JetBrains Mono" font-size="12" letter-spacing="1" fill="#0B1F33">MTS HİJYEN · B2B</text>
          <text x="-110" y="-96" font-family="Inter Tight" font-weight="700" font-size="20" fill="#0B1F33">${s.order || 'MTS-2026-0020'}</text>
          ${Array.from({ length: 22 }, (_, i) => `<rect x="${-110 + i * 5}" y="-86" width="${1 + (i * 7) % 3}" height="16" fill="#0B1F33"/>`).join('')}</g>
      </g></g></svg><div class="stamp jstamp" style="font-size:52px">Onaylandı</div>`;
    el.innerHTML = h;
  },
  render(el, s, lt, dur) {
    gridIn(el, lt, 0);
    el.querySelectorAll('.mask > span').forEach((m, i) => {
      const a = 0.25 + i * 0.1;
      m.style.transform = `translateY(${(1 - E.editorial(seg(lt, a, a + 0.8))) * 106}%)`;
    });
    // aktif adım (sürekli)
    let k = s.from;
    (s.at || []).forEach((a, j) => { k += E.outExpo(seg(lt, a, a + 0.6)); });
    const kd = (s.at || []).reduce((acc, a, j) => acc + (lt >= a ? spring(lt - a, SPRING.snappy) : 0), s.from);
    el.querySelector('.jt').style.transform = `translateY(${-k * 132}px)`;
    el.querySelector('.jn').style.transform = `translateY(${-k * 260}px)`;
    const N = s.stages.length;
    const x = s._x(0) + (s._x(N - 1) - s._x(0)) * (kd / (N - 1));
    el.querySelector('.jdot').style.left = x + 'px';
    el.querySelector('.jfill').style.width = (x - s._x(0)) + 'px';
    const cur = Math.round(k);
    el.querySelectorAll('.jstop').forEach((d, i) => d.style.background = i < cur ? 'var(--ink)' : 'var(--bg)');
    el.querySelectorAll('.jlbl').forEach((l, i) => {
      l.style.color = i === cur ? 'var(--blue)' : 'var(--ink)';
      l.style.opacity = i === cur ? 1 : i < cur ? 0.55 : 0.28;
    });
    // koli eylemleri
    if (s.box) {
      const acts = {}; s.box.forEach(b => acts[b.act] = b.at);
      const BX = s.boxX || 1300, FL = 760;
      let y = acts.drop !== undefined ? -900 * (1 - E.inExpo(seg(lt, acts.drop, acts.drop + 0.42))) : 0;
      const sq = acts.drop !== undefined ? wob(lt - acts.drop - 0.42) : 0;
      let x = 0;
      if (acts.ship !== undefined) x = 1100 * E.inExpo(seg(lt, acts.ship, acts.ship + 0.8));
      const hit = acts.stamp !== undefined ? wob(lt - acts.stamp, 40, 14) : 0;
      at(el.querySelector('.jbox'), `translate(${BX + x},${FL + y + hit * 4})`);
      at(el.querySelector('.jb'), `scale(${1.35 * (1 + 0.05 * sq)},${1.35 * (1 - 0.09 * sq)})`);
      el.querySelector('.jsh').setAttribute('opacity', 0.12 * clamp(1 + y / 900));
      const lp = acts.label !== undefined ? spring(lt - acts.label, SPRING.snappy) : 1;
      at(el.querySelector('.jlabel'), `translate(${-40 * (1 - lp)},${-40 * (1 - lp)}) rotate(${lerp(-12, -2, lp)})`);
      el.querySelector('.jlabel').style.opacity = acts.label !== undefined && lt < acts.label ? 0 : 1;
      const tp = acts.tape !== undefined ? E.outExpo(seg(lt, acts.tape, acts.tape + 0.5)) : (s.taped ? 1 : 0);
      at(el.querySelector('.jtape'), `translate(-130 0) scale(${tp} 1) translate(130 0)`);
      const st = el.querySelector('.jstamp');
      if (acts.stamp !== undefined || s.stamped) {
        const sp = acts.stamp !== undefined ? E.sharp(seg(lt, acts.stamp - 0.22, acts.stamp)) : 1;
        css(st, { left: (BX + x + 50) + 'px', top: (FL + y - 80) + 'px', opacity: (acts.stamp === undefined || lt > acts.stamp - 0.22) ? Math.min(1, sp * 2) : 0,
          transform: `translate(-50%,-50%) rotate(-8deg) scale(${lerp(1.7, 1, sp)})` });
      } else st.style.opacity = 0;
      el.querySelector('.jbox').style.opacity = acts.drop !== undefined && lt < acts.drop ? 0 : 1;
    }
  },
};

// ── Sahne: organizasyon (departman, kullanıcı, bütçe) ────────────
// { root, depts: [{name, budget, users:[...]}], flow: {from: deptIndex, at, amount, order} }
SCENES.org = {
  build(el, s) {
    const n = s.depts.length, colW = 380, x0 = (W - n * colW) / 2 + colW / 2;
    s._dx = i => x0 + i * colW;
    let h = gridHTML() + `<svg class="abs" width="1920" height="1080" style="left:0;top:0">${s.depts.map((d, i) =>
      `<path class="oline" d="M960 330 L960 400 L${s._dx(i)} 400 L${s._dx(i)} 470" stroke="#0B1F33" stroke-opacity=".35" stroke-width="2" fill="none" pathLength="1" stroke-dasharray="1"/>`).join('')}</svg>`;
    h += `<div class="abs onode oroot" style="left:${960 - 230}px;top:200px;width:460px;height:130px;background:var(--ink);color:#fff;border-radius:16px;padding:24px 28px">
      <div class="mono" style="font-size:14px;opacity:.6">${s.root.role}</div><div style="font-size:36px;font-weight:600;margin-top:8px">${s.root.name}</div>
      <div class="mono" style="font-size:14px;margin-top:6px;color:var(--amber)">${s.root.note}</div></div>`;
    s.depts.forEach((d, i) => {
      h += `<div class="abs onode" style="left:${s._dx(i) - 170}px;top:470px;width:340px;background:#fff;border-radius:16px;padding:22px 24px;box-shadow:0 18px 40px -20px rgba(11,31,51,.35),0 0 0 1px rgba(11,31,51,.06)">
        <div style="font-size:30px;font-weight:600;letter-spacing:-.02em">${d.name}</div>
        <div class="mono" style="font-size:14px;color:var(--ink2);margin-top:8px">Aylık bütçe</div>
        <div style="font-size:34px;font-weight:300;letter-spacing:-.03em;color:var(--blue)">${d.budget}</div>
        <div style="height:8px;background:#E6ECF2;border-radius:4px;margin-top:12px;overflow:hidden"><i class="obar" data-p="${d.used}" style="display:block;height:100%;background:var(--blue);transform-origin:left;transform:scaleX(0)"></i></div>
        <div class="mono" style="font-size:13px;color:var(--ink2);margin-top:6px">%${Math.round(d.used * 100)} kullanıldı</div>
        <div style="margin-top:16px;border-top:1px solid var(--line);padding-top:12px">${d.users.map(u => `<div style="display:flex;justify-content:space-between;font-size:20px;margin-top:6px"><span>${u[0]}</span><span class="mono" style="font-size:13px;color:var(--ink2);align-self:center">${u[1]}</span></div>`).join('')}</div></div>`;
    });
    if (s.flow) h += `<div class="abs otoken" style="background:var(--amber);color:#3A2A05;border-radius:12px;padding:14px 20px;font-size:22px;font-weight:600;white-space:nowrap;box-shadow:0 14px 30px -12px rgba(11,31,51,.45)">
      <div class="mono" style="font-size:13px;opacity:.7">${s.flow.order}</div>${s.flow.amount}</div><div class="stamp ostamp" style="font-size:40px">Onaylandı</div>`;
    if (s.title) h += `<div class="abs" style="left:116px;top:60px"><div class="mono t-eyebrow"><span class="mask"><span>${s.eyebrow || ''}</span></span></div>
      <div class="t-line" style="font-size:72px;margin-top:10px"><span class="mask"><span>${s.title}</span></span></div></div>`;
    el.innerHTML = h;
  },
  render(el, s, lt) {
    gridIn(el, lt, 0);
    el.querySelectorAll('.mask > span').forEach((m, i) => { const a = 0.2 + i * 0.1; m.style.transform = `translateY(${(1 - E.editorial(seg(lt, a, a + 0.8))) * 106}%)`; });
    const nodes = el.querySelectorAll('.onode');
    nodes.forEach((nd, i) => {
      const t0 = i === 0 ? 0.4 : 1.2 + (i - 1) * 0.15;
      const p = lt < t0 ? 0 : spring(lt - t0, SPRING.snappy);
      nd.style.opacity = lt >= t0 ? 1 : 0;
      nd.style.transform = `translateY(${(1 - p) * 30}px) scale(${0.94 + 0.06 * p})`;
    });
    el.querySelectorAll('.oline').forEach((l, i) => l.style.strokeDashoffset = 1 - E.outExpo(seg(lt, 0.8 + i * 0.08, 1.6 + i * 0.08)));
    el.querySelectorAll('.obar').forEach((b, i) => b.style.transform = `scaleX(${Number(b.dataset.p) * E.outExpo(seg(lt, 2.0 + i * 0.1, 3.0 + i * 0.1))})`);
    if (s.flow) {
      const f = s.flow, tk = el.querySelector('.otoken');
      const p = E.inOutQuart(seg(lt, f.at, f.at + 1.4));
      const x0 = s._dx(f.from) - 90, y0 = 760, x1 = 1220, y1 = 230;
      const x = lerp(x0, x1, p), y = lerp(y0, y1, p) - Math.sin(Math.PI * p) * 80;
      css(tk, { left: x + 'px', top: y + 'px', opacity: lt >= f.at - 0.2 ? 1 - seg(lt, f.at + 2.6, f.at + 3.0) : 0, transform: `scale(${lt < f.at ? spring(lt - f.at + 0.2, SPRING.bouncy) : 1})` });
      const sa = f.at + 1.75, sp = E.sharp(seg(lt, sa - 0.22, sa));
      css(el.querySelector('.ostamp'), { left: (x1 + 330) + 'px', top: '275px', opacity: lt > sa - 0.22 ? Math.min(1, sp * 2) : 0,
        transform: `translate(-50%,-50%) rotate(-8deg) scale(${lerp(1.7, 1, sp)})` });
    }
  },
};
