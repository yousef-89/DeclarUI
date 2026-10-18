const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function captureComponentScreenshot(componentName, outputPath, port = 3000) {
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

    await page.setViewport({
      width: 390,
      height: 844,
      deviceScaleFactor: 2
    });

    const targetUrl = `http://localhost:${port}?component=${componentName}`;
    await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 10000 });

    await page.waitForSelector('#render-root', { visible: true, timeout: 5000 });
    await page.waitForFunction(() => !document.querySelector('#render-loading'), { timeout: 5000 });

    await page.evaluate(async () => {
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
    return true;

  } catch (error) {
    console.error(`[Headless Renderer Error] Failed to render ${componentName}:`, error.message);
    return false;
  } finally {
    await browser.close();
  }
}

module.exports = { captureComponentScreenshot };

if (require.main === module) {
  const [,, compName, outPath] = process.argv;
  if (compName && outPath) {
    captureComponentScreenshot(compName, outPath);
  } else {
    console.log("Usage: node render_runner.js <ComponentName> <OutputPath>");
  }
}