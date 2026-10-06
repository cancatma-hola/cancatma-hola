// Zaman tabanlı motion çekirdeği.
// Her sahne window.render(t) fonksiyonunu tanımlar; t saniye cinsindendir ve
// kare tamamen t'den hesaplanır (durum tutulmaz) – böylece render deterministik olur.

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, p) => a + (b - a) * p;
// t'nin [a, b] penceresindeki ilerlemesi (0..1)
const seg = (t, a, b) => clamp((t - a) / (b - a));

// CSS cubic-bezier karşılığı
function bez(x1, y1, x2, y2) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sx = u => ((ax * u + bx) * u + cx) * u;
  const sy = u => ((ay * u + by) * u + cy) * u;
  const dx = u => (3 * ax * u + 2 * bx) * u + cx;
  return x => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let u = x;
    for (let i = 0; i < 8; i++) {
      const e = sx(u) - x, d = dx(u);
      if (Math.abs(e) < 1e-6 || Math.abs(d) < 1e-6) break;
      u -= e / d;
    }
    return sy(clamp(u));
  };
}

// Hareket token'ları: süre kademeleri + easing sözlüğü
const E = {
  outExpo: bez(0.16, 1, 0.3, 1),     // varsayılan giriş
  inExpo: bez(0.7, 0, 0.84, 0),      // yalnızca çıkış
  inOutQuart: bez(0.76, 0, 0.24, 1), // nesne taşıma
  outBack: bez(0.34, 1.56, 0.64, 1), // hafif taşma
  sharp: bez(0.65, 0, 0.45, 1),      // marka vuruşu / mühür
  editorial: bez(0.77, 0, 0.18, 1),  // satır maskesi
  outCirc: bez(0, 0.55, 0.45, 1),    // mekanik, net
  linear: x => clamp(x),
};

// Analitik yay (kütle-yay-sönüm). t: başlangıçtan beri geçen saniye.
const SPRING = {
  gentle: { k: 100, c: 15, m: 1 },
  normal: { k: 200, c: 22, m: 1 },
  snappy: { k: 350, c: 28, m: 1 },
  bouncy: { k: 200, c: 10, m: 1 },
  heavy: { k: 150, c: 35, m: 1.5 },
};
function spring(t, { k, c, m } = SPRING.normal) {
  if (t <= 0) return 0;
  const w = Math.sqrt(k / m), z = c / (2 * Math.sqrt(k * m));
  if (z < 1) {
    const wd = w * Math.sqrt(1 - z * z);
    return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + (z * w / wd) * Math.sin(wd * t));
  }
  return 1 - Math.exp(-w * t) * (1 + w * t);
}

// Kareye bağlı deterministik sözde rastgele
function rnd(seed) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function css(el, props) {
  if (typeof el === 'string') el = $(el);
  for (const k in props) el.style[k] = props[k];
}
