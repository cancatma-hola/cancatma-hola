const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const contact = {
  phone: '+90 531 714 42 08',
  email: 'eceozcaan1@gmail.com',
};

const data = {
  tr: {
    file: 'Ece_Ozcan_Catma_CV_TR',
    lang: 'tr',
    title: 'Art Director & Kıdemli Motion Designer',
    caps: 'ART DIRECTOR & KIDEMLİ MOTION DESIGNER',
    h: {
      profile: 'Profil', experience: 'İş Deneyimi', projects: 'Öne Çıkan Projeler',
      contact: 'İletişim', education: 'Eğitim', languages: 'Diller', skills: 'Yetkinlikler',
      software: 'Yazılım', awards: 'Ödüller', reference: 'Referans',
    },
    location: 'İstanbul, Türkiye',
    profile:
      '8 yıllık deneyime sahip Art Director ve Kıdemli Motion Designer. 3D projeksiyon mapping, immersive deneyimler, lansman ve etkinlik tasarımı, görsel-işitsel şovlar ve mimari enstalasyonlar alanında uzmanlaşmıştır. Nike, Porsche, Hyundai, Dell ve MEY gibi markalar için projeler üretmiş; Kristal Elma ve Felis ödüllü işlerin ekibinde yer almıştır. Bugün 3İK\'da kreatif yönetim ve motion tasarım süreçlerini yönetmekte, projeleri fikir aşamasından sahadaki canlı şova kadar uçtan uca takip etmektedir. Güçlü hikâye anlatımını LED, çoklu ekran ve mapping prodüksiyonlarına dair teknik bilgiyle birleştirir.',
    jobs: [
      {
        date: 'Mart 2025 - Günümüz',
        role: 'Art Director / Motion Design Lead',
        company: '3İK', place: 'İstanbul',
        bullets: [
          'Marka lansmanları, kurumsal etkinlikler ve immersive deneyimler için kreatif yönü belirliyor; projeleri ilk fikirden canlı şova kadar yönetiyor.',
          'Motion tasarım ekibini yönetiyor, iş dağılımını planlıyor ve tüm projelerde görsel kalite ile marka tutarlılığını sağlıyor.',
          'Konsept, moodboard, storyboard ve müşteri sunumlarını hazırlıyor; yeni iş sunumlarında (pitch) aktif rol alıyor.',
          'Müşteri, prodüksiyon ve teknik ekiplerle doğrudan çalışarak LED, projeksiyon mapping ve çoklu ekran kurgularının içerik planlamasını yapıyor.',
          'Proje takvimlerini ve iş yükünü planlıyor; kurulum, prova ve canlı yayın süreçlerini sahada yönetiyor.',
          'Genç tasarımcılara mentorluk yapıyor; üretimi hızlandıran iş akışları ve şablonlar oluşturuyor.',
        ],
      },
      {
        date: 'Eylül 2024 - Şubat 2025',
        role: 'Kıdemli Motion Designer',
        company: 'Sth Team', place: 'İstanbul',
        bullets: [
          'Etkinlik tasarımı, video prodüksiyon ve kurgu, sosyal medya içerikleri, dijital kampanyalar ve immersive deneyim projelerinde görev aldı.',
          'Kreatif fikir geliştirme süreçlerinde aktif rol alarak projelerin genel prodüksiyon kalitesini yükseltti.',
        ],
        projects: [
          ['Dell Technologies Forum 2024', 'Kasım 2024\'te Rixos Tersane\'de düzenlenen etkinliğin tüm kreatif süreçlerinden sorumlu oldu: çoklu ekran gösterimleri, sahne şovları, lazer mapping, canlı yayın ve kurgu. Dünyadaki eş zamanlı etkinliklerle uyumlu şekilde her LED ekranın içerik üretiminden teknik kontrolüne kadar tüm aşamaları yönetti.'],
        ],
      },
      {
        date: 'Ekim 2018 - Mart 2024',
        role: 'Kıdemli Motion Designer',
        company: 'Awesome Bros.', place: 'İstanbul & Londra',
        bullets: [
          'Dijital sanat, immersive deneyim, 3D mapping, etkinlik tasarımı, video prodüksiyon, görsel-işitsel enstalasyon, veri görselleştirme ve dijital kampanya projelerinde görev aldı; prodüksiyon yönetimine katkı sağladı.',
        ],
        projects: [
          ['Galata Kulesi 3D Projeksiyon Mapping Şovu', 'Hikâye kurgusu aşamasında kompozisyon ve hareket tasarımcısı olarak başladı; 3D ve 2D animasyonlar dahil tüm proje detaylarının takibini üstlendi ve kapsamlı proje dokümantasyonunu hazırladı.'],
          ['Nike Air Max 720 Lansman Kampanyası', 'Refik Anadol iş birliğiyle hayata geçen lansmanın animasyon ve tasarım süreçlerinde yer aldı. Proje Kristal Elma ve Felis\'te toplam 6 ödül kazandı.'],
          ['Porsche Taycan Lansmanı, Zorlu Center', 'Kompozit, kreatif süreç, kurgu, ses ve müzik senkronizasyonundan sorumlu oldu; immersive alan için LED ekran içeriklerini üretti.'],
          ['Hyundai i20 Lansmanı', 'Film kompozisyonu, animasyon, film akışı ve hikâye kurgusu dahil tüm tasarım sürecinde görev aldı.'],
          ['MEXT Brick Wall', 'MEXT teknoloji merkezi için hazırlanan mapping çalışmasında mimari süreçleri yönetti, ardından animasyon üretimini mimari yapıyla uyumlu şekilde denetledi.'],
          ['MEY: "Discover the Art of Rakı"', 'Dijital enstalasyonun 2D ve 3D animasyonlarını üretti; projenin tüm aşamalarının takibinden sorumlu oldu.'],
        ],
      },
    ],
    awards: [
      ['Kristal Elma 2019', 'Dijital Büyük Ödülü', 'Nike x Refik Anadol x Awesome Bros, Nike Air Max 720'],
      ['Kristal Elma 2019', 'En İyi Enstalasyon', 'Nike x Refik Anadol x Awesome Bros, Nike Air Max 720'],
      ['Kristal Elma 2019', 'En İyi Veri Görselleştirme', 'Nike x Refik Anadol x Awesome Bros, Nike Air Max 720'],
      ['Felis 2019', 'Başarı Ödülü, Dijital', 'Creativity From Data, Creativity in Data Collection, Data Visualization'],
    ],
    education: { date: '2014 - 2018', dept: 'Görsel İletişim Tasarımı', school: 'Üsküdar Üniversitesi, Güzel Sanatlar Fakültesi', gpa: 'GNO: 3.11 / 4.00' },
    languages: [['Türkçe', 'Ana dil'], ['İngilizce', 'Orta seviye']],
    skillGroups: [
      ['Kreatif', ['Art direction', 'Konsept geliştirme', 'Hikâye kurgusu ve storyboard', '2D / 3D animasyon', 'Kompozit ve VFX', 'Projeksiyon mapping', 'LED ve çoklu ekran içerik', 'Kurgu, ses ve müzik senkronu']],
      ['Yönetim', ['Ekip yönetimi ve mentorluk', 'Müşteri ilişkileri ve sunum', 'Proje ve zaman yönetimi', 'Saha ve canlı şov yönetimi', 'Hızlı ve doğru karar alma']],
    ],
    software: ['After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator', 'InDesign', 'Microsoft Office'],
    ref: { name: 'Ahmet Öztürk', title: 'Art Director & Stüdyo Müdürü, Awesome Bros.', phone: '+90 531 704 30 35', email: 'ahmet@awesomebroduction.com' },
  },

  en: {
    file: 'Ece_Ozcan_Catma_CV_EN',
    lang: 'en',
    title: 'Art Director & Senior Motion Designer',
    caps: 'ART DIRECTOR & SENIOR MOTION DESIGNER',
    h: {
      profile: 'Profile', experience: 'Work Experience', projects: 'Selected Projects',
      contact: 'Contact', education: 'Education', languages: 'Languages', skills: 'Skills',
      software: 'Software', awards: 'Awards', reference: 'Reference',
    },
    location: 'Istanbul, Türkiye',
    profile:
      'Art Director and Senior Motion Designer with 8 years of experience in 3D projection mapping, immersive experiences, brand launches and live events, audiovisual shows and architectural installations. Has delivered work for brands such as Nike, Porsche, Hyundai, Dell and MEY, and was part of the team behind projects awarded at Crystal Apple and Felis. Currently leads creative direction and motion design at 3İK, taking projects from the first idea to the live show on site. Combines strong storytelling with hands-on technical knowledge of LED, multi-screen and mapping production.',
    jobs: [
      {
        date: 'March 2025 - Present',
        role: 'Art Director / Motion Design Lead',
        company: '3İK', place: 'Istanbul',
        bullets: [
          'Sets the creative direction for brand launches, corporate events and immersive experiences, and manages projects from the first idea to the live show.',
          'Leads the motion design team, plans the workload and keeps visual quality and brand consistency high across all projects.',
          'Prepares concepts, moodboards, storyboards and client presentations, and takes an active role in new business pitches.',
          'Works directly with clients, producers and technical teams to plan content for LED, projection mapping and multi-screen setups.',
          'Plans project timelines and resources, and runs installation, rehearsals and live shows on site.',
          'Mentors junior designers and builds workflows and templates that make production faster.',
        ],
      },
      {
        date: 'September 2024 - February 2025',
        role: 'Senior Motion Designer',
        company: 'Sth Team', place: 'Istanbul',
        bullets: [
          'Worked on event design, video production and editing, social media content, digital campaigns and immersive experiences.',
          'Took an active part in creative ideation and helped raise the overall production quality of projects.',
        ],
        projects: [
          ['Dell Technologies Forum 2024', 'Responsible for all creative processes of the event held at Rixos Tersane in November 2024, including multi-screen displays, stage shows, laser mapping, live broadcast and editing. Managed every stage from content production to technical control for each LED screen, in line with the same event held in other cities around the world.'],
        ],
      },
      {
        date: 'October 2018 - March 2024',
        role: 'Senior Motion Designer',
        company: 'Awesome Bros.', place: 'Istanbul & London',
        bullets: [
          'Worked across digital art, immersive experiences, 3D mapping, event design, video production, audiovisual installations, data visualization and digital campaigns, and contributed to overall production management.',
        ],
        projects: [
          ['Galata Tower 3D Projection Mapping Show', 'Started as composition artist and movement designer in the storytelling phase, then took ownership of all project details including 3D and 2D animation, and prepared the full project documentation.'],
          ['Nike Air Max 720 Launch Campaign', 'Took part in the animation and design process of the launch created in collaboration with Refik Anadol. The project won 6 awards in total at Crystal Apple and Felis.'],
          ['Porsche Taycan Launch, Zorlu Center', 'Responsible for compositing, creative process, editing, and sound and music synchronization, and produced the LED screen content for the immersive space.'],
          ['Hyundai i20 Launch Event', 'Worked on the full design process, including film composition, animation, film flow and storytelling.'],
          ['MEXT Brick Wall', 'Led the architectural design process of the mapping demonstration for the MEXT technology center, then supervised animation production to fit the architectural structure.'],
          ['MEY: "Discover the Art of Rakı"', 'Produced the 2D and 3D animations of the digital installation and was accountable for every stage of the project.'],
        ],
      },
    ],
    awards: [
      ['Crystal Apple 2019', 'Grand Award of Digital', 'Nike x Refik Anadol x Awesome Bros, Nike Air Max 720'],
      ['Crystal Apple 2019', 'Best Installation', 'Nike x Refik Anadol x Awesome Bros, Nike Air Max 720'],
      ['Crystal Apple 2019', 'Best Data Visualization', 'Nike x Refik Anadol x Awesome Bros, Nike Air Max 720'],
      ['Felis 2019', 'Success Award, Digital', 'Creativity From Data, Creativity in Data Collection, Data Visualization'],
    ],
    education: { date: '2014 - 2018', dept: 'Visual Communication Design', school: 'Üsküdar University, Faculty of Fine Arts', gpa: 'GPA: 3.11 / 4.00' },
    languages: [['Turkish', 'Native'], ['English', 'Intermediate']],
    skillGroups: [
      ['Creative', ['Art direction', 'Concept development', 'Storytelling and storyboarding', '2D / 3D animation', 'Compositing and VFX', 'Projection mapping', 'LED and multi-screen content', 'Editing, sound and music sync']],
      ['Leadership', ['Team management and mentoring', 'Client relations and presenting', 'Project and time management', 'On-site and live show management', 'Clear decision making']],
    ],
    software: ['After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator', 'InDesign', 'Microsoft Office'],
    ref: { name: 'Ahmet Öztürk', title: 'Art Director & Studio Manager, Awesome Bros.', phone: '+90 531 704 30 35', email: 'ahmet@awesomebroduction.com' },
  },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function render(d) {
  const jobsHtml = (list) => list.map((j) => `
    <div class="job">
      <div class="job-head">
        <div><div class="role">${esc(j.role)}</div><div class="company">${esc(j.company)} <span>· ${esc(j.place)}</span></div></div>
        <div class="date">${esc(j.date)}</div>
      </div>
      <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      ${j.projects ? `<div class="proj-label">${esc(d.h.projects)}</div>` + j.projects.map(([t, x]) => `
        <div class="proj"><div class="proj-t">${esc(t)}</div><p>${esc(x)}</p></div>`).join('') : ''}
    </div>`).join('');

  return `<!doctype html><html lang="${d.lang}"><head><meta charset="utf-8">
<title>Ece Özcan Çatma CV</title>
<link href="fonts/fonts.css" rel="stylesheet">
<style>
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
:root { --ink:#262a2e; --muted:#5d646b; --line:#d9dde1; --accent:#8a5a44; --side:#f3f1ee; }
body { font-family:'Source Sans 3', sans-serif; color:var(--ink); font-size:10.3pt; line-height:1.47; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
.page { display:grid; grid-template-columns: 62mm 1fr; height:297mm; overflow:hidden; page-break-after:always; }
.page:last-child { page-break-after:auto; }
.en-up { }
aside { background:var(--side); padding:14mm 7mm 12mm 10mm; }
main { padding:14mm 12mm 12mm 9mm; }
main h2.first { margin-top:0; }
.mini { margin-bottom:22px; }
.mini-n { font-family:'Raleway'; font-weight:700; font-size:12pt; }
.mini-t { font-size:8pt; color:var(--accent); letter-spacing:1px; font-weight:600; margin-top:2px; }
header.top { grid-column: 1 / -1; display:none; }
h1 { font-family:'Raleway'; font-weight:700; font-size:25pt; letter-spacing:.5px; line-height:1.05; color:var(--ink); }
.title { font-family:'Raleway'; font-weight:600; font-size:10.5pt; letter-spacing:2.2px; color:var(--accent); margin-top:6px; }
h2 { font-family:'Raleway'; font-weight:700; font-size:9.6pt; letter-spacing:2.4px; text-transform:uppercase; color:var(--ink); padding-bottom:4px; border-bottom:1.2px solid var(--accent); margin:19px 0 10px; break-after:avoid; }
aside h2:first-of-type { margin-top:0; }
.intro { margin-bottom:4px; }
.profile { color:#3b4146; }
.contact div { margin-bottom:7px; }
.lbl { font-size:7.8pt; letter-spacing:1.2px; text-transform:uppercase; color:var(--muted); font-weight:600; }
.val { font-size:9.2pt; word-break:break-word; }
.edu .d, .muted { color:var(--muted); font-size:8.6pt; }
.edu .dept { font-weight:700; margin-top:1px; }
.lang { display:flex; justify-content:space-between; margin-bottom:3px; }
.lang span { color:var(--muted); }
.sg { margin-bottom:9px; }
.sg-t { font-weight:700; font-size:8.6pt; color:var(--accent); text-transform:uppercase; letter-spacing:1px; margin-bottom:3px; }
.sg ul { list-style:none; }
.sg li { padding-left:9px; position:relative; margin-bottom:1.5px; }
.sg li::before { content:''; position:absolute; left:0; top:.62em; width:3.5px; height:3.5px; background:var(--accent); }
.tags { display:flex; flex-wrap:wrap; gap:4px; }
.tags span { background:#fff; border:1px solid var(--line); border-radius:3px; padding:1px 6px; font-size:8.4pt; }
.ref .n { font-weight:700; }
.ref .em { font-size:8.8pt; }
.job { margin-bottom:15px; }
.job-head { display:flex; justify-content:space-between; align-items:flex-start; gap:10px; break-after:avoid; }
.role { font-family:'Raleway'; font-weight:700; font-size:10.6pt; }
.company { font-weight:600; color:var(--accent); font-size:9.8pt; }
.company span { color:var(--muted); font-weight:400; }
.date { white-space:nowrap; font-size:8.6pt; color:var(--muted); font-weight:600; padding-top:2px; }
main ul { margin:5px 0 0 0; list-style:none; }
main li { padding-left:11px; position:relative; margin-bottom:3.5px; }
main li::before { content:''; position:absolute; left:1px; top:.6em; width:4px; height:4px; border-radius:50%; background:var(--accent); }
.proj-label { font-size:7.8pt; letter-spacing:1.4px; text-transform:uppercase; color:var(--muted); font-weight:700; margin:8px 0 4px; }
.proj { border-left:2px solid var(--line); padding-left:8px; margin-bottom:8px; break-inside:avoid; }
.proj-t { font-weight:700; font-size:9.5pt; }
.proj p { color:#41474d; }
.awards { display:grid; grid-template-columns:1fr 1fr; gap:7px 14px; }
.aw { break-inside:avoid; }
.aw .o { font-size:7.8pt; letter-spacing:1px; text-transform:uppercase; color:var(--accent); font-weight:700; }
.aw .t { font-weight:700; }
.aw .p { color:var(--muted); font-size:8.5pt; }
</style></head><body>
<div class="page">
<aside>
  <h2>${esc(d.h.contact)}</h2>
  <div class="contact">
    <div><div class="lbl">${d.lang === 'tr' ? 'Konum' : 'Location'}</div><div class="val">${esc(d.location)}</div></div>
    <div><div class="lbl">${d.lang === 'tr' ? 'Telefon' : 'Phone'}</div><div class="val">${contact.phone}</div></div>
    <div><div class="lbl">E-mail</div><div class="val">${contact.email}</div></div>
  </div>
  <h2>${esc(d.h.education)}</h2>
  <div class="edu"><div class="d">${d.education.date}</div><div class="dept">${esc(d.education.dept)}</div><div>${esc(d.education.school)}</div><div class="muted">${d.education.gpa}</div></div>
  <h2>${esc(d.h.languages)}</h2>
  ${d.languages.map(([l, v]) => `<div class="lang"><b>${l}</b><span>${v}</span></div>`).join('')}
  <h2>${esc(d.h.skills)}</h2>
  ${d.skillGroups.map(([t, items]) => `<div class="sg"><div class="sg-t">${t}</div><ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}
</aside>
<main>
  <div class="intro"><h1>Ece Özcan Çatma</h1><div class="title">${esc(d.caps)}</div></div>
  <h2>${esc(d.h.profile)}</h2>
  <p class="profile">${esc(d.profile)}</p>
  <h2>${esc(d.h.experience)}</h2>
  ${jobsHtml(d.jobs.slice(0, 2))}
</main>
</div>
<div class="page">
<aside>
  <div class="mini"><div class="mini-n">Ece Özcan Çatma</div><div class="mini-t">${esc(d.caps)}</div></div>
  <h2>${esc(d.h.software)}</h2>
  <div class="tags">${d.software.map((s) => `<span>${s}</span>`).join('')}</div>
  <h2>${esc(d.h.reference)}</h2>
  <div class="ref"><div class="n">${esc(d.ref.name)}</div><div class="muted">${esc(d.ref.title)}</div><div>${d.ref.phone}</div><div class="em">${d.ref.email}</div></div>
</aside>
<main>
  <h2 class="first">${esc(d.h.experience)}</h2>
  ${jobsHtml(d.jobs.slice(2))}
  <h2>${esc(d.h.awards)}</h2>
  <div class="awards">${d.awards.map(([o, t, p]) => `<div class="aw"><div class="o">${esc(o)}</div><div class="t">${esc(t)}</div><div class="p">${esc(p)}</div></div>`).join('')}</div>
</main>
</div></body></html>`;
}

(async () => {
  const out = __dirname;
  const browser = await chromium.launch();
  for (const d of Object.values(data)) {
    const html = render(d);
    const htmlPath = path.join(out, d.file + '.html');
    fs.writeFileSync(htmlPath, html);
    const page = await browser.newPage();
    await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: path.join(out, d.file + '.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true });
    await page.close();
  }
  await browser.close();
})();
