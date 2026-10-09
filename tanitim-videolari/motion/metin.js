// Video tanımlarından dış ses metni belgesi üretir → ../05-dis-ses-metinleri.md
const fs = require('fs');
const path = require('path');
const LIST = [['V1', 'Hijyen Tedariğiniz Tek Panelde (ana promo)'], ['V2', 'Bir Siparişin Yolculuğu'], ['V3', 'Kurumsal Kontrol: Onay, Bütçe, Yetki'],
  ['E1', 'Eğitim 01 · Panele Giriş ve Özet Ekranı'], ['E2', 'Eğitim 02 · Katalogdan Sipariş Verme'], ['E6', 'Eğitim 06 · Onaylarım ve Onay Kuralları'],
  ['V4', 'Cari ve Finans Şeffaflığı'], ['E3', 'Eğitim 03 · Hızlı Sipariş: SKU ve Excel/CSV'], ['E4', 'Eğitim 04 · Periyodik Siparişler ve Listeler'],
  ['E5', 'Eğitim 05 · Siparişlerimi Takip Etmek'], ['E7', 'Eğitim 07 · Kullanıcılar, Yetkiler, Departman Bütçeleri'], ['E8', 'Eğitim 08 · Cari Ekstre ve Faturalar'],
  ['E9', 'Eğitim 09 · Teklif, Numune ve İade'], ['E10', 'Eğitim 10 · Sadakat, Kupon ve Davet']];
const NAME = { title: 'Başlık', screen: 'Panel ekranı', list: 'Animasyonlu panel işlemi', form: 'Animasyonlu form', journey: 'Sipariş rayı + koli', delivery: 'Teslim sahnesi (illüstrasyon)',
  chaos: 'Açılış: dağınıklık', org: 'Departman şeması', end: 'Kapanış kartı' };
let md = '# Dış Ses Metinleri (14 video)\n\n> Bu belge `motion/videos/*.js` tanımlarından otomatik üretilir (`node motion/metin.js`). Ses: Microsoft nöral Türkçe ses (tr-TR-AhmetNeural), hız −4%.\n';
for (const [id, ttl] of LIST) {
  const V = require(path.join(__dirname, 'videos', id + '.js'));
  md += `\n## ${id} — ${ttl}\n\n| # | Sahne | Görsel | Dış ses |\n|---|---|---|---|\n`;
  V.scenes.forEach((s, i) => {
    const vis = s.shot ? `\`${s.shot}\`${s.head ? ' · ' + s.head.ttl : ''}${s.step ? ' · Adım ' + s.step.n + ': ' + s.step.ttl : ''}` :
      (s.lines ? s.lines.map(l => l.t).join(' ') : s.title ? [].concat(s.title).join(' ') : s.sub || '');
    md += `| ${i + 1} | ${NAME[s.type] || s.type} | ${vis} | ${(s.vo || []).map(v => v.text).join(' ')} |\n`;
  });
}
fs.writeFileSync(path.join(__dirname, '..', '05-dis-ses-metinleri.md'), md);
console.log('yazıldı');
