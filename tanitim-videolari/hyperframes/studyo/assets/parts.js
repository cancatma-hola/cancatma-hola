// İkonlar ve illüstrasyon parçaları (motion/kit kaynaklı, stüdyo için genişletildi).
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
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  heart: '<path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7"/><path d="M12 17h.01"/>',
  download: '<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 20h16"/>',
  upload: '<path d="M12 21V9"/><path d="M7 14l5-5 5 5"/><path d="M4 4h16"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  lock: '<path d="M5 11h14v10H5z"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  trend: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
  package: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M7.5 5l9 4"/><path d="M3 7l9 4 9-4"/><path d="M12 11v10"/>',
  undo: '<path d="M9 14L4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>',
  sample: '<path d="M9 3h6v4l3 3v11H6V10l3-3z"/><path d="M6 14h12"/>',
  invoice: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  map: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
};
const ICON = (n, size = 44, color = '#1D5FA8', w = 2) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${(ICONS[n] || ICONS.check).replace(/<(path|circle)/g, '<$1 pathLength="1" stroke-dasharray="1"')}</svg>`;
const NS = 'http://www.w3.org/2000/svg';
const SKIN = ['#E8B796', '#C98E6B', '#F1CBAE'];
const at = (el, tr) => el && el.setAttribute('transform', tr);
const wob = (u, f = 18, k = 8) => (u <= 0 ? 0 : Math.exp(-k * u) * Math.cos(f * u));
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
      <image href="assets/logo.png" x="292" y="-306" width="248" height="140"/>
      <text x="415" y="-142" text-anchor="middle" font-family="JetBrains Mono" font-size="15" letter-spacing="2" fill="#0B1F33" opacity=".6">PANEL.MTSHIJYEN.COM</text>
      <rect id="vanDark" x="610" y="-300" width="44" height="236" fill="#22303F" opacity="0"/>
      <rect id="vanDoor" x="660" y="-306" width="70" height="246" rx="6" fill="#F2F5F8" stroke="#D3DCE6" stroke-width="3" transform="scale(0 1)"/>
    </g>
    ${wheel(92)}${wheel(498)}</g>`;
}

// Portre avatar (karakter sahnesi). o: {ten, sac: kisa|uzun|topuz|kivircik|kel, sacRenk, giysi, yaka, sakal, gozluk, ruh: mutlu|dertli|notr, bg}
// Gerçek bir kişiyi temsil etmez; sade, düz renkli illüstrasyon.
const TEN = { acik: '#F1CBAE', bugday: '#E0A97E', esmer: '#C68B5E', koyu: '#8D5A3B' };
function AVATAR(o = {}, size = 400) {
  const ten = TEN[o.ten] || o.ten || TEN.bugday, sacR = o.sacRenk || '#2A1E17', giysi = o.giysi || '#2F7FE0';
  const ruh = o.ruh || 'mutlu';
  const agiz = ruh === 'mutlu' ? 'M88 104 Q100 116 112 104' : ruh === 'dertli' ? 'M89 110 Q100 101 111 110' : 'M90 107 L110 107';
  const kas = ruh === 'dertli' ? '<path d="M80 78 L94 72" /><path d="M120 78 L106 72" />' : '<path d="M80 76 Q87 72 94 75" /><path d="M106 75 Q113 72 120 76" />';
  const arka = o.sac === 'uzun' ? `<path d="M60 84 Q56 38 100 37 Q144 38 140 84 L146 158 Q124 146 100 146 Q76 146 54 158 Z" fill="${sacR}"/>` : '';
  const ust = {
    kisa: `<path d="M64 86 Q60 42 100 41 Q141 42 136 86 Q131 63 100 61 Q72 62 64 86 Z" fill="${sacR}"/>`,
    uzun: `<path d="M65 82 Q66 47 100 47 Q134 47 135 82 Q122 60 100 62 Q78 60 65 82 Z" fill="${sacR}"/>`,
    topuz: `<circle cx="100" cy="36" r="17" fill="${sacR}"/><path d="M65 84 Q63 48 100 47 Q137 48 135 84 Q126 62 100 62 Q74 62 65 84 Z" fill="${sacR}"/>`,
    kivircik: [[70, 66], [80, 52], [94, 46], [108, 46], [122, 52], [132, 66], [66, 80], [134, 80]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="${sacR}"/>`).join(''),
    kel: '',
  }[o.sac || 'kisa'];
  const sakal = o.sakal ? `<path d="M67 92 Q69 132 100 132 Q131 132 133 92 Q126 118 100 120 Q74 118 67 92 Z" fill="${sacR}"/><path class="agiz" d="${agiz}" stroke="#F4E6DA" stroke-width="4" fill="none" stroke-linecap="round"/>` : '';
  const gozluk = o.gozluk ? `<g fill="none" stroke="#0B1F33" stroke-width="3.2"><rect x="76" y="78" width="21" height="16" rx="6"/><rect x="103" y="78" width="21" height="16" rx="6"/><path d="M97 85 L103 85"/></g>` : '';
  const yaka = o.yaka === 'gomlek' ? `<path d="M84 140 L100 162 L94 168 L78 146 Z M116 140 L100 162 L106 168 L122 146 Z" fill="#FFFFFF"/>`
    : o.yaka === 'kravat' ? `<path d="M84 140 L100 160 L116 140 Z" fill="#FFFFFF"/><path d="M100 158 L94 170 L100 198 L106 170 Z" fill="${o.kravatRenk || '#F5B019'}"/>`
    : o.yaka === 'yelek' ? `<path d="M40 200 Q42 158 78 144 L96 200 Z M160 200 Q158 158 122 144 L104 200 Z" fill="${o.yelekRenk || '#F5B019'}"/>`
    : `<path d="M86 139 L100 156 L114 139 Z" fill="${ten}"/>`;
  return `<svg class="avatar" width="${size}" height="${size}" viewBox="0 0 200 200">
    <defs><clipPath id="avk${size}"><circle cx="100" cy="100" r="96"/></clipPath></defs>
    <circle cx="100" cy="100" r="96" fill="${o.bg || '#164069'}"/>
    <g clip-path="url(#avk${size})">
      ${arka}
      <path d="M28 204 Q30 146 100 138 Q170 146 172 204 Z" fill="${giysi}"/>
      <rect x="89" y="112" width="22" height="30" rx="8" fill="${ten}"/>
      ${yaka}
      <circle cx="65" cy="90" r="7" fill="${ten}"/><circle cx="135" cy="90" r="7" fill="${ten}"/>
      <ellipse cx="100" cy="86" rx="35" ry="39" fill="${ten}"/>
      ${ust}${sakal}
      <circle cx="88" cy="88" r="3.6" fill="#1A2330"/><circle cx="112" cy="88" r="3.6" fill="#1A2330"/>
      <g fill="none" stroke="${sacR}" stroke-width="3.4" stroke-linecap="round">${kas}</g>
      ${gozluk}
      ${o.sakal ? '' : `<path class="agiz" d="${agiz}" stroke="#7A3B2E" stroke-width="4" fill="none" stroke-linecap="round"/>`}
    </g>
    <circle cx="100" cy="100" r="96" fill="none" stroke="rgba(95,211,255,0.55)" stroke-width="3"/>
  </svg>`;
}
