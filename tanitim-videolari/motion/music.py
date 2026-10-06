"""Telifsiz müzik yatağı sentezi (stereo 48 kHz WAV).
Kullanım: python3 music.py promo|egitim <süre_sn> <çıktı.wav>
promo : 108 BPM, sıcak pad + yumuşak arpej + hafif nabız (umut veren)
egitim: 84 BPM, sakin pad + seyrek çan tonları (odak, dikkat dağıtmaz)
"""
import sys
import numpy as np
from scipy.signal import butter, sosfilt
from scipy.io import wavfile

SR = 48000
kind, dur, out = sys.argv[1], float(sys.argv[2]), sys.argv[3]
N = int(SR * dur)
t = np.arange(N) / SR
rng = np.random.default_rng(7)

def hz(m): return 440 * 2 ** ((m - 69) / 12)

# akor dizisi (MIDI): Cmaj9 – Am9 – Fmaj9 – Gsus
CH = [[48, 55, 64, 67, 71, 74], [45, 52, 60, 64, 67, 71], [41, 48, 57, 60, 64, 67], [43, 50, 57, 62, 65, 67]]
bpm = 108 if kind == 'promo' else 84
beat = 60 / bpm
bar = beat * 4
L = np.zeros(N); R = np.zeros(N)

def env(n, a, r):
    e = np.ones(n)
    ai, ri = int(a * SR), int(r * SR)
    if ai: e[:ai] = np.linspace(0, 1, ai)
    if ri: e[-ri:] *= np.linspace(1, 0, ri)
    return e

def add(sig, start, pan=0.0, gain=1.0):
    i = int(start * SR)
    if i >= N: return
    sig = sig[:N - i] * gain
    L[i:i + len(sig)] += sig * (1 - pan) * 0.5
    R[i:i + len(sig)] += sig * (1 + pan) * 0.5

# pad: her ölçü bir akor, yumuşak atak, hafif detune
nbars = int(np.ceil(dur / bar)) + 1
for b in range(nbars):
    ch = CH[b % 4]
    n = int(bar * 1.35 * SR)
    tt = np.arange(n) / SR
    e = env(n, bar * 0.45, bar * 0.6)
    for k, m in enumerate(ch[:4]):
        f = hz(m)
        s = np.sin(2 * np.pi * f * tt) + 0.5 * np.sin(2 * np.pi * f * 1.003 * tt) + 0.18 * np.sin(2 * np.pi * 2 * f * tt)
        add(s * e, b * bar, pan=(-0.4 + 0.27 * k), gain=0.05)
    # bas
    f = hz(ch[0] - 12)
    add(np.sin(2 * np.pi * f * tt) * env(n, 0.05, bar * 0.8), b * bar, gain=0.09)

if kind == 'promo':
    # arpej (8'lik), pluck zarfı
    step = beat / 2
    for i in range(int(dur / step) + 1):
        ch = CH[int(i * step / bar) % 4]
        m = ch[2:][[0, 1, 2, 3, 2, 1, 3, 2][i % 8]] + 12
        n = int(0.6 * SR); tt = np.arange(n) / SR
        s = (np.sin(2 * np.pi * hz(m) * tt) + 0.3 * np.sin(2 * np.pi * 2 * hz(m) * tt)) * np.exp(-tt * 7)
        add(s, i * step, pan=0.35 * np.sin(i * 0.7), gain=0.045 if i * step > bar * 2 else 0.0)
    # yumuşak nabız (kick yerine boğuk tom) + shaker
    for i in range(int(dur / beat) + 1):
        if i * beat < bar * 4: continue
        n = int(0.35 * SR); tt = np.arange(n) / SR
        f = 70 * np.exp(-tt * 9) + 45
        add(np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 10), i * beat, gain=0.16)
        hh = rng.standard_normal(int(0.06 * SR)) * np.exp(-np.arange(int(0.06 * SR)) / SR * 70)
        add(hh, i * beat + beat / 2, pan=0.3, gain=0.018)
else:
    # seyrek çan tonları
    for i in range(int(dur / (beat * 3)) + 1):
        ch = CH[int(i * beat * 3 / bar) % 4]
        m = ch[3 + i % 3] + 12
        n = int(2.5 * SR); tt = np.arange(n) / SR
        s = (np.sin(2 * np.pi * hz(m) * tt) + 0.25 * np.sin(2 * np.pi * 2.76 * hz(m) * tt) * np.exp(-tt * 3)) * np.exp(-tt * 1.6)
        add(s, i * beat * 3 + beat, pan=0.5 * np.sin(i), gain=0.03)

# basit yankı (iki geri besleme gecikmesi) + yumuşak alçak geçiren
for d, g in [(0.23, 0.28), (0.37, 0.22)]:
    k = int(d * SR)
    for _ in range(3):
        L[k:] += L[:-k] * g * 0.6; R[k:] += R[:-k] * g * 0.6
sos = butter(2, 5200, 'low', fs=SR, output='sos')
L = sosfilt(sos, L); R = sosfilt(sos, R)
mix = np.stack([L, R], 1)
mix *= env(N, 1.5, 3.0)[:, None]
mix /= np.max(np.abs(mix)) + 1e-9
mix *= 0.7
wavfile.write(out, SR, (mix * 32767).astype(np.int16))
print(out, f'{dur:.1f} sn')
