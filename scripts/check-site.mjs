import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { withBuiltSite } from './browser.mjs';
import { locales } from '../src/utils/locales.js';
import { checkPdf } from './check-pdf.mjs';

// Check user-visible behavior against the production pages.
await withBuiltSite(async (browser, baseUrl) => {
  await fs.mkdir('/tmp/cv-review', { recursive: true });
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const [locale, info] of Object.entries(locales)) {
    const response = await page.goto(`${baseUrl}${info.path}`);
    assert(response?.ok());
    assert.equal(await page.locator('html').getAttribute('lang'), locale);
    await page.setViewportSize({ width: 1200, height: 1600 });
    assert.equal(await page.locator('h2').count(), 4);
    assert.equal(await page.locator('.entry').count(), 6);
    assert.deepEqual(await page.locator('.entry-period').allTextContents(), locale === 'en' ? [
      'March 2018 ‒ December 2025', '2024',
      'October 2024 ‒ September 2026', 'February 2025 ‒ Present',
      'March 2022 ‒ December 2024', '2025 ‒ 2026',
    ] : [
      'Marzo 2018 ‒ Diciembre 2025', '2024',
      'Octubre 2024 ‒ Septiembre 2026', 'Febrero 2025 ‒ Presente',
      'Marzo 2022 ‒ Diciembre 2024', '2025 ‒ 2026',
    ]);
    assert.equal(await page.locator('.experience-bullets li').count(), 10);
    assert.equal(await page.locator('.project-list li').count(), 3);
    assert.equal(await page.locator('.course-list li').count(), 2);
    assert.equal(await page.locator('.languages li').count(), 2);
    assert.equal(await page.locator('[class*="lang-en"], [class*="lang-es"]').count(), 0);
    assert((await page.locator('main').innerText()).includes(locale === 'en' ? 'Implemented Drools rules' : 'Implementé reglas Drools'));
    const download = page.locator('a[download]');
    assert.equal(await download.getAttribute('download'), info.pdf);
    const pdfResponse = await context.request.get(new URL(await download.getAttribute('href'), baseUrl).href);
    assert(pdfResponse.ok());
    const pdfBytes = await pdfResponse.body();
    assert(pdfBytes.subarray(0, 5).toString() === '%PDF-');
    const expectedPdf = await page.locator('.cv-content').evaluate((root) => ({
      header: root.querySelector('header').innerText,
      sections: Array.from(root.querySelectorAll(':scope > section'), (section) => ({
        heading: section.querySelector('h2').innerText,
        text: section.innerText,
      })),
    }));
    await checkPdf(pdfBytes, expectedPdf, locale);
    for (const width of [1200, 390, 320]) {
      await page.setViewportSize({ width, height: 1600 });
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${locale}: overflow at ${width}px`);
      await page.screenshot({ path: `/tmp/cv-review/${locale}-${width}.png`, fullPage: true });
    }
    await page.locator('.lang-toggle').click();
    assert.equal(await page.locator('html').getAttribute('lang'), locale === 'en' ? 'es' : 'en');
    await page.goBack();
    assert.equal(await page.locator('html').getAttribute('lang'), locale);
  }
  await context.close();
  const legacy = await browser.newPage();
  await legacy.goto(`${baseUrl}?lang=es&source=test#languages`);
  await legacy.waitForURL(`${baseUrl}es/?source=test#languages`);
  assert.equal(await legacy.locator('html').getAttribute('lang'), 'es');
  await legacy.close();
  console.log('Passed: language routes, no-JS navigation, back navigation, legacy links, complete content, PDF downloads, A4 page count, PDF tags and text order, and desktop/mobile layout.');
});
