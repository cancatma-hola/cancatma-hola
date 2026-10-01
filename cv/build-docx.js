const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType,
  BorderStyle, AlignmentType, LevelFormat, TabStopType, HeightRule, VerticalAlign,
} = require('docx');
const { TITLE, ROLE, contact, data } = require('./build');

const FONT = 'Calibri';
const INK = '22262A';
const MUTED = '61686F';
const ACCENT = '8A5A44';
const SIDE = 'F3F1EE';

const PAGE_W = 11906;
const PAGE_H = 16838;
const MARGIN = 0;
const SIDE_W = 3400;
const MAIN_W = PAGE_W - SIDE_W;
const PAD = 520; // inner cell padding
const MAIN_INNER = MAIN_W - PAD - 560;

const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };

const run = (text, o = {}) => new TextRun({ text, font: o.font || FONT, size: o.size || 18, bold: o.bold, italics: o.italics, color: o.color || INK, characterSpacing: o.spacing, allCaps: o.caps });

const p = (children, o = {}) => new Paragraph({
  children: Array.isArray(children) ? children : [children],
  spacing: { before: o.before || 0, after: o.after ?? 40, line: o.line || 264 },
  alignment: o.align,
  tabStops: o.tabStops,
  border: o.border,
  numbering: o.bullet ? { reference: o.bullet, level: 0 } : undefined,
  keepNext: o.keepNext,
  indent: o.indent,
});

const heading = (text, first) => p(run(text, { bold: true, size: 18, spacing: 30, caps: true }), {
  before: first ? 0 : 220, after: 110, keepNext: true,
  border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: ACCENT, space: 3 } },
});
const label = (text) => p(run(text, { size: 14, bold: true, color: MUTED, spacing: 20, caps: true }), { after: 10 });

function cell(children, width, o = {}) {
  return new TableCell({
    children,
    width: { size: width, type: WidthType.DXA },
    shading: o.fill ? { type: ShadingType.CLEAR, color: 'auto', fill: o.fill } : undefined,
    margins: o.margins || { top: 0, bottom: 0, left: 0, right: 0 },
    borders: o.borders || noBorders,
    verticalAlign: VerticalAlign.TOP,
  });
}

function grid(items, width, render) {
  const half = Math.floor(width / 2);
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(new TableRow({
      children: [0, 1].map((k) => cell(items[i + k] ? render(items[i + k]) : [p(run(''))], half, {
        margins: { top: 0, bottom: 60, left: 0, right: 120 },
      })),
    }));
  }
  return new Table({ rows, width: { size: half * 2, type: WidthType.DXA }, columnWidths: [half, half], borders: noBorders });
}

function sidebar(d) {
  const out = [];
  out.push(heading(d.h.contact, true));
  out.push(label(d.h.location), p(run(d.location), { after: 90 }));
  out.push(label(d.h.phone), p(run(contact.phone), { after: 90 }));
  out.push(label('E-mail'), p(run(contact.email), { after: 40 }));

  out.push(heading(d.h.education));
  out.push(p(run(d.education.date, { size: 16, color: MUTED }), { after: 10 }));
  out.push(p(run(d.education.dept, { bold: true }), { after: 10 }));
  out.push(p(run(d.education.school), { after: 10 }));
  out.push(p(run(d.education.gpa, { size: 16, color: MUTED })));

  out.push(heading(d.h.languages));
  d.languages.forEach(([l, v]) => out.push(p([run(l, { bold: true }), run('\t' + v, { color: MUTED })], {
    tabStops: [{ type: TabStopType.RIGHT, position: SIDE_W - PAD - 300 }],
  })));

  out.push(heading(d.h.skills));
  d.skills.forEach((s) => out.push(p(run(s), { bullet: 'side', after: 20 })));

  out.push(heading(d.h.software));
  out.push(p(run(d.software.join('  ·  '), { size: 17 }), { line: 300 }));

  out.push(heading(d.h.reference));
  out.push(p(run(d.ref.name, { bold: true }), { after: 10 }));
  out.push(p(run(d.ref.title, { size: 16, color: MUTED }), { after: 10 }));
  out.push(p(run(d.ref.phone), { after: 10 }));
  out.push(p(run(d.ref.email, { size: 16 })));
  return out;
}

function main(d) {
  const out = [];
  out.push(p(run('Ece Özcan Çatma', { size: 50, bold: true }), { after: 30, line: 240 }));
  out.push(p(run(TITLE, { size: 21, bold: true, color: ACCENT, spacing: 50, caps: true }), { after: 40 }));

  out.push(heading(d.h.profile));
  out.push(p(run(d.profile, { color: '383D42' }), { after: 0, line: 276 }));

  out.push(heading(d.h.experience));
  d.jobs.forEach((j, idx) => {
    out.push(p([run(ROLE, { bold: true, size: 21 }), run('\t' + j.date, { size: 17, bold: true, color: MUTED })], {
      before: idx ? 140 : 0, after: 10, keepNext: true,
      tabStops: [{ type: TabStopType.RIGHT, position: MAIN_INNER }],
    }));
    out.push(p([run(j.company, { bold: true, color: ACCENT, size: 19 }), run('  ·  ' + j.place, { color: MUTED, size: 19 })], { after: 60, keepNext: true }));
    j.bullets.forEach((b) => out.push(p(run(b), { bullet: 'main', after: 30 })));
    if (j.projects) {
      out.push(p(run(d.h.projects, { size: 14, bold: true, color: MUTED, spacing: 20, caps: true }), { before: 80, after: 50, keepNext: true }));
      out.push(grid(j.projects, MAIN_INNER, ([t, s]) => [
        new Paragraph({
          children: [run(t, { bold: true, size: 18 })],
          spacing: { after: 0, line: 252 },
          border: { left: { style: BorderStyle.SINGLE, size: 12, color: ACCENT, space: 6 } },
          indent: { left: 140 },
        }),
        new Paragraph({
          children: [run(s, { size: 16, color: MUTED })],
          spacing: { after: 0, line: 252 },
          border: { left: { style: BorderStyle.SINGLE, size: 12, color: ACCENT, space: 6 } },
          indent: { left: 140 },
        }),
      ]));
    }
  });

  out.push(heading(d.h.awards));
  d.awards.forEach(([o, t]) => out.push(p([run(o, { size: 15, bold: true, color: ACCENT, spacing: 15, caps: true }), run('\t' + t, { bold: true, size: 18 })], {
    after: 40, tabStops: [{ type: TabStopType.LEFT, position: 2100 }], indent: { left: 2100, hanging: 2100 },
  })));
  out.push(p(run('\t' + d.awardNote, { italics: true, color: MUTED, size: 16 }), { tabStops: [{ type: TabStopType.LEFT, position: 2100 }] }));
  return out;
}

function build(d) {
  const layout = new Table({
    width: { size: PAGE_W, type: WidthType.DXA },
    columnWidths: [SIDE_W, MAIN_W],
    borders: noBorders,
    rows: [new TableRow({
      height: { value: PAGE_H - 20, rule: HeightRule.ATLEAST },
      cantSplit: false,
      children: [
        cell(sidebar(d), SIDE_W, { fill: SIDE, margins: { top: 640, bottom: 400, left: 560, right: 380 } }),
        cell(main(d), MAIN_W, { margins: { top: 640, bottom: 400, left: PAD, right: 560 } }),
      ],
    })],
  });

  const bullet = (ref, char, color) => ({
    reference: ref,
    levels: [{
      level: 0, format: LevelFormat.BULLET, text: char, alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 200, hanging: 200 } }, run: { color, font: FONT } },
    }],
  });

  return new Document({
    creator: 'Ece Özcan Çatma',
    title: 'Ece Özcan Çatma CV',
    styles: { default: { document: { run: { font: FONT, size: 18, color: INK } } } },
    numbering: { config: [bullet('main', '•', ACCENT), bullet('side', '▪', ACCENT)] },
    sections: [{
      properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN, header: 0, footer: 0 } } },
      children: [layout, new Paragraph({ children: [], spacing: { before: 0, after: 0, line: 20, lineRule: 'exact' } })],
    }],
  });
}

(async () => {
  for (const d of Object.values(data)) {
    const buf = await Packer.toBuffer(build(d));
    fs.writeFileSync(path.join(__dirname, d.file + '.docx'), buf);
  }
})();
