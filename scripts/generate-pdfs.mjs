import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { withBuiltSite, projectRoot } from './browser.mjs';
import { locales } from '../src/utils/locales.js';

// Export production HTML, then include the PDFs in the deployment.
await withBuiltSite(async (browser, baseUrl) => {
  const outputDirectory = path.join(projectRoot, 'public');
  await mkdir(outputDirectory, { recursive: true });
  for (const [locale, info] of Object.entries(locales)) {
    const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
    try {
      const response = await page.goto(`${baseUrl}${info.path}`, { waitUntil: 'networkidle' });
      if (!response?.ok()) throw new Error(`Could not load the ${locale} CV.`);
      await page.evaluate(() => document.fonts.ready);
      await page.emulateMedia({ media: 'print' });
      const outputPath = path.join(outputDirectory, info.pdf);
      await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        tagged: true,
        displayHeaderFooter: false,
      });
      await copyFile(outputPath, path.join(projectRoot, 'dist', info.pdf));
      console.log(`Generated public/${info.pdf}`);
    } finally {
      await page.close();
    }
  }
});
