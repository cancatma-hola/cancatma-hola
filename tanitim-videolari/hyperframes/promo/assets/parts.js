// Hype promo için ikon ve illüstrasyon parçaları (motion/kit/kit.js ve kit/illus.js'ten).
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
