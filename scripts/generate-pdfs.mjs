import { dev } from "astro";
import { existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { chromium } from "playwright";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "public");
const host = "127.0.0.1";

function getLaunchOptions() {
  if (process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH) {
    return { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH };
  }

  const macChromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  return process.platform === "darwin" && existsSync(macChromePath)
    ? { executablePath: macChromePath }
    : {};
}

async function generatePdf(browser, language, cvUrl) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });

  try {
    await page.goto(`${cvUrl}?lang=${language}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);

    const fileName = await page.locator("a[download]").getAttribute("download");
    if (!fileName || path.basename(fileName) !== fileName || !fileName.endsWith(".pdf")) {
      throw new Error(`Invalid PDF download filename for language ${language}.`);
    }
    const outputPath = path.join(outputDirectory, fileName);

    await page.emulateMedia({ media: "print" });

    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      tagged: true,
      displayHeaderFooter: false,
      scale: 1,
    });

    console.log(`Generated ${path.relative(projectRoot, outputPath)}`);
  } finally {
    await page.close();
  }
}

mkdirSync(outputDirectory, { recursive: true });

let server;
let browser;

try {
  server = await dev({ root: projectRoot, server: { host, port: 0 } });
  const cvUrl = `http://${host}:${server.address.port}/cv/`;
  browser = await chromium.launch({ headless: true, ...getLaunchOptions() });

  for (const language of ["en", "es"]) {
    await generatePdf(browser, language, cvUrl);
  }
} finally {
  await browser?.close();
  await server?.stop();
}
