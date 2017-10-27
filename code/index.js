const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://vsupalov.com');
  await page.screenshot({path: '/app/output/example.png'});

  await browser.close();
})();
