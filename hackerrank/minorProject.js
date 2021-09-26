
const puppy = require("puppeteer"); // puppeteer
// import fullPageScreenshot from 'puppeteer-full-page-screenshot'; // it cannot be import from module!!

// opening browser

const moderators = [
  "manishapawar8459",
  "Kajal",
  "ericsund",
  "Sunda",
  "marad",
  "mathursathya",
  "prafulbarange11",
  "bhaveshbansal08",
  "kajgies",
  "suvinay_pawa_au6",
];
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

  // //opening navBar
  // await tab.waitForNavigation();
  // await tab.waitForTimeout(3000);
  // await tab.click('.username.text-ellipsis');

  // // click on adminestration
  // await tab.waitForTimeout(2000);
  // await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');

  // // choose firt contest
  // await tab.waitForTimeout(2000);
  // await tab.click('.span3.alignL .mmT');

  // // choose moderator
  // await tab.waitForTimeout(2000);
  // await tab.click('[data-tab="moderators"]');

  await tab.waitForNavigation({ waitUntil: "networkidle2" });
  await tab.waitForSelector('[data-analytics="NavBarProfileDropDown"]', {
    visible: true,
  });

  let myprofile = await tab.$('[data-analytics="NavBarProfileDropDown"]');
  await myprofile.click();
  let adminestrationButton = await tab.$(
    'a[data-analytics="NavBarProfileDropDownAdministration"]'
  );
  await adminestrationButton.click();

  await tab.waitForSelector(".admin-tabbed-nav a");
  let adminestrationTab = await tab.$$(".admin-tabbed-nav a");
  await adminestrationTab[1].click();

  // await tab.waitForSelector(".btn.btn-green.backbone.pull-right");
  // let createContestButton = await tab.$(".btn.btn-green.backbone.pull-right");
  // createContestButton.click();

  // await tab.waitForSelector(".CodeMirror-line");
  // let inputName = await tab.$("#name");
  // await inputName.type("asdfjfasdfad");


  // let inputDescription = await tab.$("#preview");
  // inputDescription.type("awejaisd");

  // await tab.waitForSelector(".CodeMirror-line");
  // let codeTextArea = await tab.$$(".CodeMirror-line");
  // await tab.evaluate(() => {
  //   window.scrollBy(0, window.innerHeight);
  // });

  // for (let i = 0; i < 4; i++) {
  //   await codeTextArea[i].click();
  //   await codeTextArea[i].type("first constest");
  // }

  // let inputTag = await tab.$("#tags_tagsinput");
  // await inputTag.click();
  // await inputTag.type("asflajsdkf");
  // await tab.keyboard.press("Enter");

  // let saveChange = await tab.$(".save-challenge.btn.btn-green");
  // await saveChange.click();

  // await tab.waitForSelector(".cursor.change-tab.cep");
  // let moderator = await tab.$$(".cursor.change-tab.cep");
  // await moderator[1].click();

  // await tab.waitForSelector("#moderator");
  // let addModerators = await tab.$("#moderator");
  // for (let mod of moderators) {
  //   await addModerators.type(mod);
  //   await tab.keyboard.press("Enter");
  // }


  

  let cnt = 0;

  for (let i = 0; i < 10; i++) {
    cnt++;
    await tab.waitForSelector(".btn.btn-green.backbone.pull-right");
    let createContestButton = await tab.$(".btn.btn-green.backbone.pull-right");
    createContestButton.click();

    // name of the contest
    await tab.waitForSelector(".CodeMirror-line");
    let inputName = await tab.$("#name");
    await inputName.type(`${"challenge-" + cnt}`);

    //contest description
    await tab.waitForSelector("#preview");
    let inputDescription = await tab.$("#preview");
    inputDescription.type("awejaisd");

    //contest content
    await tab.waitForSelector(".CodeMirror-line");
    let codeTextArea = await tab.$$(".CodeMirror-line");
    await tab.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });

    await tab.waitForSelector(".CodeMirror-line");
    for (let i = 0; i < 4; i++) {
      await codeTextArea[i].click();
      await codeTextArea[i].type(moderators[cnt - 1]);
    }

    // Tags input
    await tab.waitForSelector('[style="width: 98%; min-height: 100px; height: 100px;"]');
    let inputTag = await tab.$('[style="width: 98%; min-height: 100px; height: 100px;"]');
    await inputTag.click();
    await inputTag.type("asflajsdkf");
    await tab.keyboard.press("Enter");

    // save change button
    await tab.waitForSelector(".save-challenge.btn.btn-green");
    let saveChange = await tab.$(".save-challenge.btn.btn-green");
    await saveChange.click();

    //moderators
    await tab.waitForSelector(".cursor.change-tab.cep");
    let moderator = await tab.$$(".cursor.change-tab.cep");
    await moderator[1].click();

    await tab.waitForSelector("#moderator");
    let addModerators = await tab.$("#moderator");
    for (let mod of moderators) {
      await addModerators.type(mod);
      await tab.keyboard.press("Enter");
    }

    await tab.waitForSelector('[itemprop="name"]');
    let newChallenges = await tab.$('[itemprop="name"]');
    newChallenges.click();
  }
}

openBrowser("https://www.google.com");
