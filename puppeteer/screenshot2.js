const puppy = require("puppeteer");

(async () => {
    const brwoser = puppy.launch();
    const page = await brwoser.newPage();
    await page.goto(" https://github.com/KaminiJha/scrapingCricinfo/blob/master/index.js");
    await page.viewport({width: 2000, height: 2100}); 
    await page.screenshot({path:'gitScreenshot.jpg', fullpage: true});
})();