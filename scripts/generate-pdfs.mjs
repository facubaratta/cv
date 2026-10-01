import { spawn } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { chromium } from "playwright";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "public");
const host = "127.0.0.1";
const port = 4174;
const cvUrl = `http://${host}:${port}/cv/`;

function getLaunchOptions() {
  if (process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH) {
    return { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH };
  }

  const macChromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  return process.platform === "darwin" && existsSync(macChromePath)
    ? { executablePath: macChromePath }
    : {};
}

async function waitForServer(serverProcess) {
  const timeoutAt = Date.now() + 30_000;

  while (Date.now() < timeoutAt) {
    if (serverProcess.exitCode !== null) {
      throw new Error(`Vite exited before PDF generation (code ${serverProcess.exitCode}).`);
    }

    try {
      const response = await fetch(cvUrl);
      if (response.ok) return;
    } catch {
      // Vite is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  throw new Error("Timed out waiting for Vite to start.");
}

async function generatePdf(browser, language) {
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

const viteProcess = spawn(
  process.execPath,
  [
    path.join(projectRoot, "node_modules/vite/bin/vite.js"),
    "--host",
    host,
    "--port",
    String(port),
    "--strictPort",
  ],
  { cwd: projectRoot, stdio: "inherit" },
);

let browser;

try {
  await waitForServer(viteProcess);
  browser = await chromium.launch({ headless: true, ...getLaunchOptions() });

  for (const language of ["en", "es"]) {
    await generatePdf(browser, language);
  }
} finally {
  await browser?.close();
  viteProcess.kill("SIGTERM");
}
