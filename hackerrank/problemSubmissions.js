const puppy = require("puppeteer"); // puppeteer
// import fullPageScreenshot from 'puppeteer-full-page-screenshot'; // it cannot be import from module!!

// opening browser

async function openBrowser() {
  const browser_address = await puppy.launch({
    headless: false,
    defaultViewport: false,
    args: ["--start-maximized"],
  });

  //Login on hackerrank
  const page = await browser_address.pages();
  const tab = await page[0];
  await tab.goto("https://www.hackerrank.com/auth/login");

  const username = await tab.$('[id="input-1"]');
  const password = await tab.$('[id="input-2"]');
  const checkbox = await tab.$(".checkbox-input");
  const login = await tab.$('[data-analytics="LoginPassword"]');
  await username.type("me.pawan@gmail.com");
  await checkbox.click();
  await password.type("me_pawan@12");
  await login.click();

  // scroll from top to bottom
  await tab.waitForSelector('[data-analytics="ViewPrepKit"]');
  await tab.evaluate(() => {
    window.scrollBy(0, window.innerHeight);
  });

  // preparation button
  let preparationKitButton = await tab.$$('[data-analytics="ViewPrepKit"]');
  await (await preparationKitButton[0]).click();

  // getting anchors tags
  await tab.waitForSelector('[data-analytics="SolvePrepKitChallenge"]');
  let solveChallengeButtons = await tab.$$(
    '[data-analytics="SolvePrepKitChallenge"]'
  );

  let solveChallengesUrls = [];

  for (let i = 0; i < solveChallengeButtons.length; i++) {
    if (i == 1) continue;
    solveChallengesUrls.push(
      await tab.evaluate((ele) => {
        return "https://www.hackerrank.com" + ele.getAttribute("href");
      }, solveChallengeButtons[i])
    );
  }
  // console.log(solveChallengesUrls.length);
  // console.log(solveChallengesUrls);
  

  for (let i = 0; i < solveChallengesUrls.length; i++) {
    solveChallenge(solveChallengesUrls[i], tab);
  }
}

async function solveChallenge(url, tab) {
  // console.log(url);
  let problemUrl = url.replace("?", "/problem?");
  let editorialUrl = url.replace("?", "/editorial?");
  await tab.goto(editorialUrl);
  // await tab.waitForSelector(".hackdown-content h3");
  let h3Tags = await tab.$$(".hackdown-content h3");
  let languagesH3Tags = [];
  for (let h3Tag of h3Tags) {
    languagesH3Tags.push(
      await tab.evaluate(function (ele) {
        return ele.innerText;
      },h3Tag)
    );
  }
  //  console.log(languagesH3Tags.length);
  console.log(languagesH3Tags);
}
openBrowser("https://www.google.com");
