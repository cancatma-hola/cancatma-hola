const fs = require('fs');
const path = require('path');

// Titles stay in English in both versions.
const TITLE = 'Sr. Motion Designer';
const ROLE = 'Senior Motion Designer';

const contact = {
  phone: '+90 531 714 42 08',
  email: 'eceozcaan1@gmail.com',
};

const projects = {
  sth: [
    ['Dell Technologies Forum 2024', 'Rixos Tersane, İstanbul'],
  ],
  awesome: [
    ['Galata Tower 3D Projection Mapping Show', '10 November'],
    ['Nike Air Max 720 Launch Campaign', 'Nike x Refik Anadol x Awesome Bros'],
    ['Porsche Taycan Launch Event', 'Zorlu Center, İstanbul'],
    ['Hyundai i20 Launch Event', 'Launch film & event content'],
    ['MEXT Brick Wall', 'Architectural mapping, MEXT'],
    ['MEY "Discover the Art of Rakı"', 'Digital installation'],
  ],
};

const data = {
  tr: {
    file: 'Ece_Ozcan_Catma_CV_TR',
    lang: 'tr',
    h: {
      profile: 'Profil', experience: 'İş Deneyimi', projects: 'Projeler',
      contact: 'İletişim', education: 'Eğitim', languages: 'Diller', skills: 'Yetkinlikler',
      software: 'Yazılım', awards: 'Ödüller', reference: 'Referans',
      location: 'Konum', phone: 'Telefon',
    },
    location: 'İstanbul, Türkiye',
    profile:
      '8 yıllık deneyime sahip Senior Motion Designer. 3D projeksiyon mapping, immersive deneyimler, lansman ve etkinlik tasarımı, görsel-işitsel şovlar ve mimari enstalasyonlar alanında uzmanlaşmıştır. Nike, Porsche, Hyundai, Dell ve MEY gibi markalar için projeler üretmiş; Kristal Elma ve Felis ödüllü işlerin ekibinde yer almıştır. Bugün 3İK\'da motion tasarım süreçlerini yönetmekte, projeleri fikir aşamasından sahadaki canlı şova kadar takip etmektedir. Güçlü hikâye anlatımını LED, çoklu ekran ve mapping prodüksiyonlarına dair teknik bilgiyle birleştirir.',
    jobs: [
      {
        date: 'Mart 2025 - Günümüz', company: '3İK', place: 'İstanbul',
        bullets: [
          'Marka lansmanları, kurumsal etkinlikler ve immersive deneyimler için motion tasarım süreçlerini fikirden canlı şova kadar yönetiyor.',
          'Motion ekibinin iş dağılımını planlıyor; tüm projelerde görsel kalite ve marka tutarlılığını sağlıyor.',
          'Konsept, storyboard ve müşteri sunumlarını hazırlıyor; yeni iş sunumlarında aktif rol alıyor.',
          'Müşteri, prodüksiyon ve teknik ekiplerle LED, projeksiyon mapping ve çoklu ekran içeriklerini planlıyor; kurulum ve canlı şov süreçlerini sahada takip ediyor.',
          'Genç tasarımcılara mentorluk yapıyor ve üretimi hızlandıran iş akışları kuruyor.',
        ],
      },
      {
        date: 'Eylül 2024 - Şubat 2025', company: 'Sth Team', place: 'İstanbul',
        bullets: [
          'Etkinlik tasarımı, video prodüksiyon ve kurgu, sosyal medya içerikleri, dijital kampanyalar ve immersive deneyim projelerinde görev aldı.',
          'Çoklu ekran, sahne şovu, lazer mapping ve canlı yayın içeriklerinin kreatif süreçlerinden sorumlu oldu.',
        ],
        projects: projects.sth,
      },
      {
        date: 'Ekim 2018 - Mart 2024', company: 'Awesome Bros.', place: 'İstanbul & Londra',
        bullets: [
          'Dijital sanat, 3D mapping, immersive deneyim, etkinlik tasarımı, video prodüksiyon, görsel-işitsel enstalasyon ve veri görselleştirme projelerinde 2D / 3D animasyon, kompozit ve kurgu süreçlerini yürüttü.',
          'Projelerin hikâye kurgusundan teslim dokümantasyonuna kadar tüm aşamalarında yer aldı; prodüksiyon yönetimine katkı sağladı.',
        ],
        projects: projects.awesome,
      },
    ],
    awards: [
      ['Kristal Elma 2019', 'Grand Award of Digital · Best Installation · Best Data Visualization'],
      ['Felis 2019', 'Başarı Ödülü, Dijital: Creativity From Data · Creativity in Data Collection · Data Visualization'],
    ],
    awardNote: 'Nike Air Max 720 Launch Campaign, Nike x Refik Anadol x Awesome Bros',
    education: { date: '2014 - 2018', dept: 'Görsel İletişim Tasarımı', school: 'Üsküdar Üniversitesi, Güzel Sanatlar Fakültesi', gpa: 'GNO: 3.11 / 4.00' },
    languages: [['Türkçe', 'Ana dil'], ['İngilizce', 'Orta seviye']],
    skills: ['Motion design', '2D / 3D animasyon', 'Projeksiyon mapping', 'Kompozit ve VFX', 'LED ve çoklu ekran içerik', 'Kurgu, ses ve müzik senkronu', 'Konsept ve storyboard', 'Ekip ve proje yönetimi', 'Müşteri iletişimi'],
    software: ['After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator', 'InDesign', 'Microsoft Office'],
    ref: { name: 'Ahmet Öztürk', title: 'Art Director & Studio Manager, Awesome Bros.', phone: '+90 531 704 30 35', email: 'ahmet@awesomebroduction.com' },
  },

  en: {
    file: 'Ece_Ozcan_Catma_CV_EN',
    lang: 'en',
    h: {
      profile: 'Profile', experience: 'Work Experience', projects: 'Projects',
      contact: 'Contact', education: 'Education', languages: 'Languages', skills: 'Skills',
      software: 'Software', awards: 'Awards', reference: 'Reference',
      location: 'Location', phone: 'Phone',
    },
    location: 'Istanbul, Türkiye',
    profile:
      'Senior Motion Designer with 8 years of experience in 3D projection mapping, immersive experiences, brand launches and live events, audiovisual shows and architectural installations. Has delivered work for brands such as Nike, Porsche, Hyundai, Dell and MEY, and was part of the team behind projects awarded at Crystal Apple and Felis. Currently leads motion design processes at 3İK, taking projects from the first idea to the live show on site. Combines strong storytelling with hands-on technical knowledge of LED, multi-screen and mapping production.',
    jobs: [
      {
        date: 'March 2025 - Present', company: '3İK', place: 'Istanbul',
        bullets: [
          'Leads motion design for brand launches, corporate events and immersive experiences, from the first idea to the live show.',
          'Plans the motion team\'s workload and keeps visual quality and brand consistency high across all projects.',
          'Prepares concepts, storyboards and client presentations, and takes an active role in new business pitches.',
          'Works with clients, producers and technical teams to plan LED, projection mapping and multi-screen content, and follows installation and live shows on site.',
          'Mentors junior designers and builds workflows that make production faster.',
        ],
      },
      {
        date: 'September 2024 - February 2025', company: 'Sth Team', place: 'Istanbul',
        bullets: [
          'Worked on event design, video production and editing, social media content, digital campaigns and immersive experiences.',
          'Responsible for the creative process of multi-screen displays, stage shows, laser mapping and live broadcast content.',
        ],
        projects: projects.sth,
      },
      {
        date: 'October 2018 - March 2024', company: 'Awesome Bros.', place: 'Istanbul & London',
        bullets: [
          'Handled 2D / 3D animation, compositing and editing across digital art, 3D mapping, immersive experiences, event design, video production, audiovisual installations and data visualization.',
          'Took part in every stage of projects, from storytelling to final documentation, and contributed to overall production management.',
        ],
        projects: projects.awesome,
      },
    ],
    awards: [
      ['Crystal Apple 2019', 'Grand Award of Digital · Best Installation · Best Data Visualization'],
      ['Felis 2019', 'Success Award, Digital: Creativity From Data · Creativity in Data Collection · Data Visualization'],
    ],
    awardNote: 'Nike Air Max 720 Launch Campaign, Nike x Refik Anadol x Awesome Bros',
    education: { date: '2014 - 2018', dept: 'Visual Communication Design', school: 'Üsküdar University, Faculty of Fine Arts', gpa: 'GPA: 3.11 / 4.00' },
    languages: [['Turkish', 'Native'], ['English', 'Intermediate']],
    skills: ['Motion design', '2D / 3D animation', 'Projection mapping', 'Compositing and VFX', 'LED and multi-screen content', 'Editing, sound and music sync', 'Concept and storyboarding', 'Team and project management', 'Client communication'],
    software: ['After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator', 'InDesign', 'Microsoft Office'],
    ref: { name: 'Ahmet Öztürk', title: 'Art Director & Studio Manager, Awesome Bros.', phone: '+90 531 704 30 35', email: 'ahmet@awesomebroduction.com' },
  },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function render(d) {
  const jobs = d.jobs.map((j) => `
    <div class="job">
      <div class="job-head">
        <div><div class="role">${ROLE}</div><div class="company">${esc(j.company)} <span>· ${esc(j.place)}</span></div></div>
        <div class="date">${esc(j.date)}</div>
      </div>
      <ul class="bul">${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      ${j.projects ? `<div class="proj-label">${esc(d.h.projects)}</div><ul class="projs">${j.projects.map(([t, s]) => `<li><b>${esc(t)}</b><span>${esc(s)}</span></li>`).join('')}</ul>` : ''}
    </div>`).join('');

  return `<!doctype html><html lang="${d.lang}"><head><meta charset="utf-8">
<title>Ece Özcan Çatma CV</title>
<link href="font/fonts.css" rel="stylesheet">
<style>
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
:root { --ink:#22262a; --muted:#61686f; --line:#dcdfe2; --accent:#8a5a44; --side:#f3f1ee; }
body { font-family:'Open Sans', sans-serif; color:var(--ink); font-size:9pt; line-height:1.42; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
.page { display:grid; grid-template-columns: 60mm 1fr; height:297mm; overflow:hidden; }
aside { background:var(--side); padding:12mm 7mm 9mm 10mm; }
main { padding:12mm 11mm 9mm 9mm; }
h1 { font-family:'Montserrat'; font-weight:700; font-size:24pt; letter-spacing:.2px; line-height:1.1; }
.title { font-family:'Montserrat'; font-weight:600; font-size:10.5pt; letter-spacing:2.5px; text-transform:uppercase; color:var(--accent); margin-top:5px; }
h2 { font-family:'Montserrat'; font-weight:700; font-size:9pt; letter-spacing:2px; text-transform:uppercase; padding-bottom:4px; border-bottom:1.2px solid var(--accent); margin:12px 0 7px; }
aside h2:first-of-type { margin-top:2px; }
.profile { color:#383d42; }
.contact div { margin-bottom:6px; }
.lbl { font-size:7.6pt; letter-spacing:1.2px; text-transform:uppercase; color:var(--muted); font-weight:700; }
.val { font-size:9.2pt; }
.muted { color:var(--muted); font-size:8.6pt; }
.edu .dept { font-weight:700; }
.lang { display:flex; justify-content:space-between; margin-bottom:2px; }
.lang span { color:var(--muted); }
aside ul { list-style:none; }
aside li { padding-left:9px; position:relative; margin-bottom:2px; }
aside li::before { content:''; position:absolute; left:0; top:.62em; width:3.5px; height:3.5px; background:var(--accent); }
.tags { display:flex; flex-wrap:wrap; gap:4px; }
.tags span { background:#fff; border:1px solid var(--line); border-radius:3px; padding:1px 6px; font-size:8.4pt; }
.ref .n { font-weight:700; }
.ref .em { font-size:8.6pt; }
.job { margin-bottom:9px; }
.job-head { display:flex; justify-content:space-between; align-items:flex-start; gap:10px; }
.role { font-family:'Montserrat'; font-weight:700; font-size:10.4pt; }
.company { font-weight:700; color:var(--accent); font-size:9.8pt; }
.company span { color:var(--muted); font-weight:400; }
.date { white-space:nowrap; font-size:8.6pt; color:var(--muted); font-weight:700; padding-top:2px; }
ul.bul { margin-top:4px; list-style:none; }
ul.bul li { padding-left:11px; position:relative; margin-bottom:1.5px; }
ul.bul li::before { content:''; position:absolute; left:1px; top:.6em; width:4px; height:4px; border-radius:50%; background:var(--accent); }
.proj-label { font-size:7.6pt; letter-spacing:1.4px; text-transform:uppercase; color:var(--muted); font-weight:700; margin:6px 0 4px; }
ul.projs { list-style:none; display:grid; grid-template-columns:1fr 1fr; gap:4px 12px; }
ul.projs li { border-left:2px solid var(--accent); padding-left:7px; line-height:1.3; }
ul.projs b { display:block; font-size:9.2pt; }
ul.projs span { font-size:8.3pt; color:var(--muted); }
.awards { display:grid; gap:3px; }
.aw { display:grid; grid-template-columns:36mm 1fr; align-items:baseline; }
.aw .o { font-size:7.8pt; letter-spacing:.8px; text-transform:uppercase; color:var(--accent); font-weight:700; }
.aw .t { font-weight:600; }
.aw-note { margin-top:3px; padding-left:36mm; color:var(--muted); font-size:8.6pt; font-style:italic; }
</style></head><body>
<div class="page">
<aside>
  <h2>${esc(d.h.contact)}</h2>
  <div class="contact">
    <div><div class="lbl">${d.h.location}</div><div class="val">${esc(d.location)}</div></div>
    <div><div class="lbl">${d.h.phone}</div><div class="val">${contact.phone}</div></div>
    <div><div class="lbl">E-mail</div><div class="val">${contact.email}</div></div>
  </div>
  <h2>${esc(d.h.education)}</h2>
  <div class="edu"><div class="muted">${d.education.date}</div><div class="dept">${esc(d.education.dept)}</div><div>${esc(d.education.school)}</div><div class="muted">${d.education.gpa}</div></div>
  <h2>${esc(d.h.languages)}</h2>
  ${d.languages.map(([l, v]) => `<div class="lang"><b>${l}</b><span>${v}</span></div>`).join('')}
  <h2>${esc(d.h.skills)}</h2>
  <ul>${d.skills.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
  <h2>${esc(d.h.software)}</h2>
  <div class="tags">${d.software.map((s) => `<span>${s}</span>`).join('')}</div>
  <h2>${esc(d.h.reference)}</h2>
  <div class="ref"><div class="n">${esc(d.ref.name)}</div><div class="muted">${esc(d.ref.title)}</div><div>${d.ref.phone}</div><div class="em">${d.ref.email}</div></div>
</aside>
<main>
  <h1>Ece Özcan Çatma</h1><div class="title" lang="en">${TITLE}</div>
  <h2>${esc(d.h.profile)}</h2>
  <p class="profile">${esc(d.profile)}</p>
  <h2>${esc(d.h.experience)}</h2>
  ${jobs}
  <h2>${esc(d.h.awards)}</h2>
  <div class="awards">${d.awards.map(([o, t]) => `<div class="aw"><span class="o">${esc(o)}</span><span class="t">${esc(t)}</span></div>`).join('')}</div>
  <div class="aw-note">${esc(d.awardNote)}</div>
</main>
</div></body></html>`;
}

module.exports = { TITLE, ROLE, contact, data };

if (require.main === module) (async () => {
  const { chromium } = require('playwright');
  const out = __dirname;
  const browser = await chromium.launch();
  for (const d of Object.values(data)) {
    const htmlPath = path.join(out, d.file + '.html');
    fs.writeFileSync(htmlPath, render(d));
    const page = await browser.newPage();
    await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: path.join(out, d.file + '.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true });
    await page.close();
  }
  await browser.close();
})();
