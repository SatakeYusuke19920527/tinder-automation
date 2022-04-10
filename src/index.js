const puppeteer = require('puppeteer');
const headless = false;
const slowMo = 10;
const width = 1280, height = 800;

(async () => {
 const browser = await puppeteer.launch({ headless, slowMo });
  const page = (await browser.pages())[0];
  await page.setViewport({ width, height });
  await page.goto('https://tinder.com/');
  await Promise.all([
    page.waitForNavigation(),
    page.click('a[data-testid="appLoginBtn"]')
  ]);
  await Promise.all([
    page.waitForNavigation(),
    page.click('button[data-testid="login"]')
  ]);
})();
