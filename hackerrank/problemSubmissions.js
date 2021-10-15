// const puppy = require("puppeteer"); // puppeteer
// // import fullPageScreenshot from 'puppeteer-full-page-screenshot'; // it cannot be import from module!!

// // opening browser

// async function openBrowser() {
//   const browser_address = await puppy.launch({
//     headless: false,
//     defaultViewport: false,
//     args: ["--start-maximized"],
//   });

//   //Login on hackerrank
//   await browser_address.newPage();
//   let page = await browser_address.pages();
//   let tab = page[1];
//   await tab.goto("https://www.hackerrank.com/auth/login");

//   const username = await tab.$('[id="input-1"]');
//   const password = await tab.$('[id="input-2"]');
//   const checkbox = await tab.$(".checkbox-input");
//   const login = await tab.$('[data-analytics="LoginPassword"]');
//   await username.type("me.pawan@gmail.com");
//   await checkbox.click();
//   await password.type("me_pawan@12");
//   await login.click();

//   // scroll from top to bottom
//   await tab.waitForSelector('[data-analytics="ViewPrepKit"]');
//   await tab.evaluate(() => {
//     window.scrollBy(0, window.innerHeight);
//   });

//   // preparation button
//   let preparationKitButton = await tab.$$('[data-analytics="ViewPrepKit"]');
//   await (await preparationKitButton[0]).click();

//   await tab.waitForSelector(
//     ".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled"
//   );
//   await tab.click(
//     ".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled"
//   );

//   // getting anchors tags
//   await tab.waitForSelector('[data-attr2="one-week-preparation-kit"]');
//   let solveChallengeButtons = await tab.$$(
//     '[data-attr2="one-week-preparation-kit"]'
//   );

//   let solveChallengesUrls = [];

//   for (let i = 0; i < solveChallengeButtons.length; i++) {
//     if (i == 1) continue;
//     solveChallengesUrls.push(
//       await tab.evaluate(function (ele) {
//         return "https://www.hackerrank.com" + ele.getAttribute("href");
//       }, solveChallengeButtons[i])
//     );
//   }
//   // console.log(solveChallengesUrls.length);
//   // console.log(solveChallengesUrls);

//   for (let i = 0; i < solveChallengesUrls.length; i++) {
//     solveChallenge(solveChallengesUrls[i], tab[i]);
//   }
// }

// async function solveChallenge(url, tab) {
//   // console.log(url);
//   let problemUrl = url.replace("?", "/problem?");
//   let editorialUrl = url.replace("?", "/editorial?");
//   await tab.goto(editorialUrl);
//   // await tab.waitForSelector(".hackdown-content h3");
//   let h3Tags = await tab.$$(".hackdown-content h3");
//   let languagesH3Tags = [];
//   for (let h3Tag of h3Tags) {
//     languagesH3Tags.push(
//       await tab.evaluate(function (ele) {
//         return ele.innerText;
//       }, h3Tag)
//     );
//   }
//   console.log(languagesH3Tags);
//   //  console.log(languagesH3Tags.length);
//   let solutionsPreTags = await tab.$$(".highlight pre");
//   let solution;
//   for (let i = 0; i < languagesH3Tags.length; i++) {
//     if (languagesH3Tags[i] == "C++") {
//       solution = await tab.evaluate(function (ele) {
//         return ele.innerText;
//       }, solutionsPreTags[i]);
//       break;
//     }
//   }
//   await tab.goto(problemUrl);
//   await tab.waitForSelector(".view-lines");
//   await tab.click('[type="checkbox"]');
//   await tab.type("#input-1", solution);
//   await tab.keyboard.down("Control");
//   await tab.keyboard.press("A");
//   await tab.keyboard.press("X");
//   await tab.keyboard.up("Control");
//   await tab.click(".view-lines");
//   await tab.keyboard.down("Control");
//   await tab.keyboard.press("A");
//   await tab.keyboard.press("V");
//   await tab.keyboard.up("Control");
//   await tab.click(".hr-monaco-submit");
//   await tab.waitForSelector(".congrats-wrapper");
// }
// openBrowser();
  


const puppy = require("puppeteer");
const id = "me.pawan@gmail.com";//"fesefig641@u461.com";
const password = "me_pawan@12";//"temp@123";
async function main() {
  let browser = await puppy.launch({
    headless: false,
    defaultViewport: false,
  });
  await browser.newPage();
  let tabs = await browser.pages();
  let tab = tabs[1];
  await tab.goto("https://www.hackerrank.com/auth/login");
  await tab.type("#input-1", id);
  await tab.type("#input-2", password);
  await tab.click('[data-analytics="LoginPassword"]');
  await tab.waitForSelector(
    ".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled"
  );
  await tab.click(
    ".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled"
  );
  await tab.waitForSelector('[data-attr2="one-week-preparation-kit"]');
  let solveChallengeButtons = await tab.$$(
    '[data-attr2="one-week-preparation-kit"]'
  );
  let solveChallengeUrls = [];
  solveChallengeUrls.push(
    await tab.evaluate(function (ele) {
      return "https://www.hackerrank.com" + ele.getAttribute("href");
    }, solveChallengeButtons[0])
  );
  solveChallengeUrls.push(
    await tab.evaluate(function (ele) {
      return "https://www.hackerrank.com" + ele.getAttribute("href");
    }, solveChallengeButtons[2])
  );

  for (let i = 0; i < solveChallengeUrls.length; i++) {

    solveChallenge(solveChallengeUrls[i], tabs[i]);
  }
    // await browser.close();
}

async function solveChallenge(url, tab) {
  let problemUrl = url.replace("?", "/problem?");
  let editorialUrl = url.replace("?", "/editorial?");
  await tab.goto(editorialUrl);
  let solutionsH3Tags = await tab.$$(".hackdown-content h3");
  let solutionLanguages = [];
  for (let solutionsH3Tag of solutionsH3Tags) {
    solutionLanguages.push(
      await tab.evaluate(function (ele) {
        return ele.innerText;
      }, solutionsH3Tag)
    );
  }
  let solutionsPreTags = await tab.$$(".highlight pre");
  let solution;
  for (let i = 0; i < solutionLanguages.length; i++) {
    if (solutionLanguages[i] == "C++") {
      solution = await tab.evaluate(function (ele) {
        return ele.innerText;
      }, solutionsPreTags[i]);
      break;
    }
  }
  await tab.goto(problemUrl);
  await tab.waitForSelector(".view-lines");
  await tab.click('[type="checkbox"]');
  await tab.type('#input-1',solution);
  await tab.keyboard.down("Control");
  await tab.keyboard.press("A");
  await tab.keyboard.press("X");
  await tab.keyboard.up("Control");
  await tab.click(".view-lines");
  await tab.keyboard.down("Control");
  await tab.keyboard.press("A");
  await tab.keyboard.press("V");
  await tab.keyboard.up("Control");
  await tab.click(".hr-monaco-submit");
  await tab.waitForSelector(".congrats-wrapper");
}
main();
