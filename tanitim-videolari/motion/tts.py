"""Türkçe dış ses üretimi (Microsoft Edge nöral sesleri, edge-tts).
Kullanım: python3 tts.py <metin_dosyası.json> <çıktı_klasörü>
JSON: [{"id": "s01", "text": "..."}, ...]  → <çıktı>/<id>.mp3 + <id>.json (kelime zamanları)
"""
import asyncio, json, os, ssl, sys
import edge_tts
from edge_tts import communicate

# Ortam proxy'si arkasında: doğrulama açık, ortamın CA paketi kullanılır.
CA = os.environ.get('SSL_CERT_FILE', '/root/.ccr/ca-bundle.crt')
if os.path.exists(CA):
    communicate._SSL_CTX = ssl.create_default_context(cafile=CA)

VOICE = os.environ.get('VOICE', 'tr-TR-AhmetNeural')
RATE = os.environ.get('RATE', '-4%')

async def one(item, out):
    mp3 = os.path.join(out, item['id'] + '.mp3')
    if os.path.exists(mp3) and os.path.getsize(mp3) > 0 and not os.environ.get('FORCE'):
        return
    c = edge_tts.Communicate(item['text'], VOICE, rate=RATE, proxy=os.environ.get('HTTPS_PROXY'))
    with open(mp3, 'wb') as f:
        async for chunk in c.stream():
            if chunk['type'] == 'audio':
                f.write(chunk['data'])

async def main(src, out):
    os.makedirs(out, exist_ok=True)
    for item in json.load(open(src, encoding='utf-8')):
        await one(item, out)
        print(item['id'], 'tamam')

asyncio.run(main(sys.argv[1], sys.argv[2]))
