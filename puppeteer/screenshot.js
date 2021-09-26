const puppy = require("puppeteer");

(async () => {
  const browser = await puppy.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://github.com/KaminiJha/hackerrankAutomationTask1/blob/master/challenges.js"
  );
  await page.viewport({ width: 1920, height: 1980 });
  await page.screenshot({ path: "example.png", fullPage: true });

  await browser.close();
})();
