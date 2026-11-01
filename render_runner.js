const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const DEFAULT_VIEWPORT = { width: 390, height: 844 };
const FRESHNESS_TIMEOUT_MS = 30000;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function loadFreshPage(page, targetUrl, expectedStamp, pageErrors) {
  // The dev server may still serve the previous bundle right after a source
  // file changes; reload until the bundle carries the stamp written for this
  // render and the component module can be resolved.
  const deadline = Date.now() + FRESHNESS_TIMEOUT_MS;
  let lastProblem = 'page did not load';

  while (Date.now() < deadline) {
    pageErrors.length = 0;
    try {
      await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 15000 });
      await page.waitForSelector('#render-root', { visible: true, timeout: 5000 });
      await page.waitForFunction(() => !document.querySelector('#render-loading'), { timeout: 10000 });

      const state = await page.evaluate(() => {
        const errorNode = document.querySelector('#render-error');
        return {
          stamp: window.__RENDER_STAMP__,
          error: errorNode ? errorNode.dataset.message : null
        };
      });

      // Stamps start with a timestamp. A newer stamp (written by a concurrent
      // run) also proves the bundle includes this run's source changes.
      if (expectedStamp && !(parseInt(state.stamp, 10) >= parseInt(expectedStamp, 10))) {
        lastProblem = `stale bundle (stamp ${state.stamp})`;
      } else if (state.error && /Cannot find module/.test(state.error)) {
        lastProblem = state.error;
      } else {
        return state;
      }
    } catch (error) {
      lastProblem = error.message;
    }
    await sleep(1000);
  }
  throw new Error(`Dev server did not serve the current build: ${lastProblem}`);
}

async function captureComponentScreenshot(
  componentName,
  outputPath,
  port = 3000,
  appName = 'default',
  viewport = DEFAULT_VIEWPORT,
  expectedStamp = null
) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--force-device-scale-factor=2'
    ]
  });

  try {
    const page = await browser.newPage();
    const pageErrors = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));
    // Renders must not depend on the network: generated code is not allowed to
    // load remote images, and blocking them keeps screenshots deterministic.
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      const { hostname, protocol } = new URL(request.url());
      const local = ['127.0.0.1', 'localhost'].includes(hostname);
      if (local || protocol === 'data:' || protocol === 'blob:') {
        request.continue();
      } else {
        request.abort();
      }
    });
    // The dev server draws compile-error overlays (for any file in the bundle)
    // as iframes on top of the page; they must never appear in screenshots.
    await page.evaluateOnNewDocument(() => {
      const style = document.createElement('style');
      style.textContent = 'iframe { display: none !important; }';
      document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));
    });

    await page.setViewport({
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 2
    });

    const query = new URLSearchParams({
      app: appName,
      component: componentName,
      width: String(viewport.width),
      height: String(viewport.height)
    });
    const targetUrl = `http://127.0.0.1:${port}?${query.toString()}`;
    const state = await loadFreshPage(page, targetUrl, expectedStamp, pageErrors);

    if (state.error) {
      throw new Error(state.error);
    }
    if (pageErrors.length > 0) {
      throw new Error(`Runtime error: ${pageErrors[0]}`);
    }

    await page.evaluate(async () => {
      document.querySelectorAll('iframe').forEach((node) => node.remove());
      if (document.fonts) {
        await document.fonts.ready;
      }
    });

    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const element = await page.$('#render-root');
    await element.screenshot({
      path: outputPath,
      type: 'png',
      omitBackground: false
    });

    console.log(`[Headless Renderer] Successfully captured: ${outputPath}`);
    return { success: true, error: null };

  } catch (error) {
    console.error(`[Headless Renderer Error] Failed to render ${componentName}:`, error.message);
    return { success: false, error: error.message };
  } finally {
    await browser.close();
  }
}

module.exports = { captureComponentScreenshot };

if (require.main === module) {
  const [, , first, second, third] = process.argv;
  if (third) {
    captureComponentScreenshot(second, third, 3000, first);
  } else if (first && second) {
    captureComponentScreenshot(first, second);
  } else {
    console.log("Usage: node render_runner.js <AppName> <ComponentName> <OutputPath>");
  }
}
