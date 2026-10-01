import assert from 'node:assert/strict';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

// Ignore line wrapping and list markers, but retain punctuation and accents.
function compact(text) {
  return text.normalize('NFKC').replace(/[\s•◦]/gu, '');
}

export async function checkPdf(bytes, expected, locale) {
  const loadingTask = getDocument({ data: new Uint8Array(bytes), useSystemFonts: true });
  try {
    const document = await loadingTask.promise;
    assert.equal(document.numPages, 1, `${locale}: the CV must fit on one page`);
    const page = await document.getPage(1);
    const [, , width, height] = page.view;
    assert(Math.abs(width - 595.28) < 1 && Math.abs(height - 841.89) < 1, `${locale}: expected A4`);
    assert(await page.getStructTree(), `${locale}: PDF document tags are missing`);

    // Use the PDF's emitted text order, without sorting by visual coordinates.
    const content = await page.getTextContent();
    const text = content.items.map((item) => item.str ?? '').join(' ');
    assert(!text.includes('\uFFFD'), `${locale}: corrupted text in the PDF`);
    const actual = compact(text);
    const starts = expected.sections.map(({ heading }) => actual.indexOf(compact(heading)));
    for (let index = 0; index < starts.length; index++) {
      assert(starts[index] >= 0, `${locale}: missing section ${expected.sections[index].heading}`);
      if (index > 0) assert(starts[index] > starts[index - 1], `${locale}: incorrect section order`);
    }
    assert.equal(actual.slice(0, starts[0]), compact(expected.header), `${locale}: header text differs from the website`);
    for (let index = 0; index < expected.sections.length; index++) {
      const section = expected.sections[index];
      assert.equal(
        actual.slice(starts[index], starts[index + 1] ?? actual.length),
        compact(section.text),
        `${locale}: missing, outdated, or reordered text in ${section.heading}`,
      );
    }
  } finally {
    await loadingTask.destroy();
  }
}
