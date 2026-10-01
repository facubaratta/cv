import { preview } from 'astro';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import config from '../astro.config.mjs';
import { basePath } from '../src/utils/paths.js';

export const projectRoot = fileURLToPath(new URL('../', import.meta.url));

function launchOptions() {
  const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;
  if (executablePath) return { executablePath };
  const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  return process.platform === 'darwin' && existsSync(chrome)
    ? { executablePath: chrome }
    : {};
}

export async function withBuiltSite(run) {
  let server;
  let browser;
  try {
    server = await preview({ root: projectRoot, server: { host: '127.0.0.1', port: 0 } });
    browser = await chromium.launch({ headless: true, ...launchOptions() });
    await run(browser, `http://127.0.0.1:${server.port}${basePath(config.base ?? '/')}`);
  } finally {
    await browser?.close();
    await server?.stop();
  }
}
