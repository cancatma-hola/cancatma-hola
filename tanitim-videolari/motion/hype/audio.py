"""Hype promo sesi: 120 BPM müzik + görüntüdeki olaylara (hits.json) senkron efekt sesleri.
Kullanım: python3 hype/audio.py hype/hits.json hype/ses.wav [süre]
Tamamen sentez (telifsiz): kick, clap, hi-hat, sidechain bas, pluck arpej, pad, riser, darbe, whoosh, mühür, pop.
"""
import sys, json
import numpy as np
from scipy.signal import butter, sosfilt
from scipy.io import wavfile

SR = 48000
hits = json.load(open(sys.argv[1]))
out = sys.argv[2]
META = next((h for h in hits if h.get('type') == 'meta'), {})
DUR = float(sys.argv[3]) if len(sys.argv) > 3 else META.get('dur', 52.0)
D0, D1 = META.get('drop', 4.0), META.get('stop', 45.0)       # davul başlangıç/bitiş
ROLL, LOGO = META.get('roll', 36.0), META.get('logo', 47.0)   # snare rulosu, logo çanları
N = int(SR * DUR)
L = np.zeros(N); R = np.zeros(N)
rng = np.random.default_rng(11)
BEAT = 0.5; BAR = 2.0

def hz(m): return 440 * 2 ** ((m - 69) / 12)
def lp(x, f, o=2): return sosfilt(butter(o, f, 'low', fs=SR, output='sos'), x)
def hp(x, f, o=2): return sosfilt(butter(o, f, 'high', fs=SR, output='sos'), x)
def bp(x, lo, hi, o=2): return sosfilt(butter(o, [lo, hi], 'band', fs=SR, output='sos'), x)
def add(sig, t, g=1.0, pan=0.0):
    i = int(t * SR)
    if i >= N or i + len(sig) <= 0: return
    if i < 0: sig = sig[-i:]; i = 0
    sig = sig[:N - i] * g
    L[i:i + len(sig)] += sig * np.sqrt((1 - pan) / 2) * 1.414
    R[i:i + len(sig)] += sig * np.sqrt((1 + pan) / 2) * 1.414
def tt(d): return np.arange(int(d * SR)) / SR

# ── davul sesleri
def kick():
    t = tt(0.45); f = 48 + 110 * np.exp(-t * 28)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 7.5)
    click = rng.standard_normal(len(t)) * np.exp(-t * 300) * 0.25
    return np.tanh((s + click) * 1.6)
def clap():
    t = tt(0.3); n = rng.standard_normal(len(t))
    env = np.zeros(len(t))
    for k, o in enumerate([0, 0.011, 0.022]): env += (t >= o) * np.exp(-(t - o).clip(0) * (90 if k < 2 else 22))
    return bp(n, 900, 5000) * env * 0.9
def hat(open_=False):
    t = tt(0.35 if open_ else 0.05); n = hp(rng.standard_normal(len(t)), 7000)
    return n * np.exp(-t * (9 if open_ else 70)) * 0.5
def tick():
    t = tt(0.03); return np.sin(2 * np.pi * 2400 * t) * np.exp(-t * 200) * 0.5

K, C, HC, HO = kick(), clap(), hat(), hat(True)

# ── akorlar: Am – F – C – G (her biri 2 ölçü = 4 sn)
SAKIN = META.get('mod') == 'sakin'   # eğitim videoları: hafif ritim, davul rulosu yok
SHIFT = int(META.get('shift', 0))   # videoya göre ton kaydırma (yarım ses)
PROG = [[m + SHIFT for m in c] for c in [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]]]
def chord_at(t): return PROG[int(t // (BAR * 2)) % 4]

# sidechain zarfı (kick vuruşlarında pompalama)
side = np.ones(N)
for b in np.arange(D0, D1, BEAT * (2 if SAKIN else 1)):
    i = int(b * SR); n = int(0.42 * SR)
    seg = side[i:i + n]; seg *= 1 - (0.4 if SAKIN else 0.75) * np.exp(-np.arange(len(seg)) / SR * 9)

# ── davul dizisi
for b in np.arange(D0, D1, BEAT):
    beat_in_bar = int(round((b - D0) / BEAT)) % 4
    big = ROLL - 3 <= b < ROLL + 4
    if SAKIN:
        if beat_in_bar in (0, 2): add(K, b, 0.5)
        if beat_in_bar == 3: add(C, b, 0.16, 0.05)
        add(HO, b + BEAT / 2, 0.08, 0.3)
        continue
    add(K, b, 0.95)
    if beat_in_bar in (1, 3): add(C, b, 0.55 if not big else 0.7, 0.05)
    add(HO, b + BEAT / 2, 0.22 if not (ROLL + 4 <= b) else 0.12, 0.3)
    for s16 in range(4):
        if D0 + 6 <= b < ROLL + 4: add(HC, b + s16 * BEAT / 4, 0.12 + (0.06 if s16 == 2 else 0), -0.35)
# snare rulosu (yükselen)
for k, b in enumerate(np.arange(ROLL, ROLL + 2.0, BEAT / 4) if not SAKIN else []):
    add(C, b, 0.15 + 0.35 * k / 16, 0.0)

# ── bas (8'likler, sidechain)
bass = np.zeros(N)
for b in np.arange(D0, D1, BEAT / 2):
    root = chord_at(b)[0] - 24; t = tt(0.24)
    f = hz(root)
    s = (np.sign(np.sin(2 * np.pi * f * t)) * 0.35 + np.sin(2 * np.pi * f * t)) * np.exp(-t * 5)
    i = int(b * SR); j = min(N, i + len(s)); bass[i:j] += s[:j - i]
bass = lp(bass, 900) * side
BG = 0.28 if SAKIN else 0.42
L += bass * BG; R += bass * BG

# ── pad (tüm parça, yumuşak; sidechain)
pad = np.zeros(N)
for b in np.arange(0, DUR, BAR * 2):
    ch = chord_at(b); t = tt(BAR * 2 + 1.0)
    env = np.minimum(1, t / 0.8) * np.minimum(1, (BAR * 2 + 1.0 - t) / 1.0)
    s = sum(np.sin(2 * np.pi * hz(m) * t) + 0.4 * np.sin(2 * np.pi * hz(m) * 1.004 * t) for m in ch)
    i = int(b * SR); j = min(N, i + len(s)); pad[i:j] += (s * env)[:j - i]
pad = lp(pad, 2400) * (0.5 + 0.5 * side)
PG = 0.075 if SAKIN else 0.05
L += pad * PG; R += pad * PG

# ── pluck arpej (16'lık, 10 sn sonra; filtre açılır)
arp = np.zeros(N)
for k, b in enumerate(np.arange(D0 + 6, D1, BEAT / 2)):
    ch = chord_at(b); m = ch[[0, 1, 2, 1][k % 4]] + 12 + (12 if k % 8 >= 6 else 0)
    t = tt(0.3); s = (np.sin(2 * np.pi * hz(m) * t) + 0.5 * np.sign(np.sin(2 * np.pi * hz(m) * t))) * np.exp(-t * 14)
    i = int(b * SR); j = min(N, i + len(s)); arp[i:j] += s[:j - i]
arp = lp(arp, 3800) * side
L += arp * 0.07; R += np.roll(arp, int(0.012 * SR)) * 0.07   # hafif stereo

# ── outro: logo bölümü (çan + geniş pad)
for k, b in enumerate([LOGO + 0.75 * i for i in range(4)]):
    t = tt(3.0); m = [76, 79, 83, 84][k]
    s = (np.sin(2 * np.pi * hz(m) * t) + 0.3 * np.sin(2 * np.pi * hz(m) * 2.76 * t) * np.exp(-t * 4)) * np.exp(-t * 1.4)
    add(s, b, 0.12, [-0.4, 0.4, -0.2, 0.2][k])

# ── efekt sesleri (görüntü olaylarından)
def impact(g):
    t = tt(1.6); f = 32 + 60 * np.exp(-t * 6)
    sub = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 2.6)
    crack = lp(rng.standard_normal(len(t)), 3000) * np.exp(-t * 18) * 0.6
    tail = lp(rng.standard_normal(len(t)), 900) * np.exp(-t * 3) * 0.15
    return np.tanh((sub + crack + tail) * 1.4) * g
def whoosh(d=0.6):
    t = tt(d); n = rng.standard_normal(len(t))
    env = np.sin(np.pi * np.clip(t / d, 0, 1)) ** 2
    out = np.zeros(len(t)); step = 512
    for i in range(0, len(t), step):
        c = 300 + 5000 * np.sin(np.pi * min(1, i / len(t)))
        blk = n[max(0, i - 2048):i + step]
        out[i:i + step] = bp(blk, c * 0.6, min(c * 1.6, 20000))[-len(out[i:i + step]):]
    return out * env * 0.9
def riser(d):
    t = tt(d); n = rng.standard_normal(len(t))
    swp = np.zeros(len(t)); step = 1024
    for i in range(0, len(t), step):
        c = 200 + 7000 * (i / len(t)) ** 2
        blk = n[max(0, i - 2048):i + step]
        swp[i:i + step] = bp(blk, c * 0.7, min(c * 1.4, 20000))[-len(swp[i:i + step]):]
    tone = np.sin(2 * np.pi * np.cumsum(110 + 660 * (t / d) ** 2) / SR) * 0.25
    return (swp * 0.8 + tone) * (t / d) ** 1.6
def pop(g=0.6):
    t = tt(0.18); f = 500 + 1600 * (1 - np.exp(-t * 40))
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 26) * g
def stamp(g=1.0):
    t = tt(0.9); f = 45 + 120 * np.exp(-t * 30)
    thud = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 7)
    crunch = bp(rng.standard_normal(len(t)), 300, 2500) * np.exp(-t * 25) * 0.9
    return np.tanh((thud + crunch) * 1.8) * g

for h in hits:
    if 'type' not in h or 't' not in h: continue
    t0, ty, g = h['t'], h['type'], h.get('g', 1.0)
    if ty == 'impact': add(impact(g * 0.55), t0, 1.0)
    elif ty == 'whoosh':
        d = h.get('d', 0.6); add(whoosh(d), t0 - d * 0.55, g * 0.5, h.get('pan', 0) * 0.6)
    elif ty == 'riser': d = h.get('d', 2.0); add(riser(d), t0, 0.32)
    elif ty == 'pop': add(pop(), t0, 0.35 * g, (rng.random() - 0.5) * 0.6)
    elif ty == 'stamp': add(stamp(g), t0, 0.6)
    elif ty == 'tick': add(tick(), t0, 0.25, 0.5)

# ── master: hafif bus kompresyonu + limit + giriş/çıkış
mix = np.stack([L, R], 1)
mix = np.tanh(mix * 1.1)
fade = np.ones(N); fi = int(0.05 * SR); fo = int(2.5 * SR)
fade[:fi] = np.linspace(0, 1, fi); fade[-fo:] = np.linspace(1, 0, fo)
mix *= fade[:, None]
mix /= np.max(np.abs(mix)) + 1e-9
mix *= 0.89
wavfile.write(out, SR, (mix * 32767).astype(np.int16))
print(out)
