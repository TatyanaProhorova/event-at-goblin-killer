import puppeteer from "puppeteer";

describe('Page start', () => {
  let browser;
  let page;

  beforeEach (async () => {
    browser = await puppeteer.launch({
      headless: false,  //Чтобы показывать реальный браузер
      slowMo: 100,   
      devtools: true,  //чтоб видеть  инструменты разработчика
    });

    page = await browser.newPage();
  });

  test('test', async () => {
    await page.goto('http://localhost:9000');
  });

  afterAll(async () => {
    await  browser.close();
  });
});
