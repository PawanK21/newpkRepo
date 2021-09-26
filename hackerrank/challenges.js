const { hasUncaughtExceptionCaptureCallback } = require("process");
const puppy = require("puppeteer");

async function openBrowser(url) {
  // it returns the objects of all controlling methods to controle broser

  const browserAddress = await puppy.launch({
    headless: false,
    defaultViewport: false,

    args: [
      "--start-maximized", // you can use '--start-fullscreen'
    ],
  });

  // let temp_tab = await browserAddress.newPage();
  // await temp_tab.screenshot({});

  let browserPages = await browserAddress.pages();
  const bp = browserPages[0]; // bp -> browser page
  const url2 = await bp.goto(url);

  let searchBar = await bp.$(".gLFyf.gsfi");
  let search = await bp.$(".FPdoLc.lJ9FBc .gNO89b");
  await searchBar.type("https://leetcode.com/");
  // bp.click('.FPdoLc.lJ9FBc .gNO89b');

  await search.click(); //
  await bp.waitForNavigation();
  await (
    await bp.$('.hdtb-mitem > a[data-hveid = "CAEQAw"]')
  ).click();

 
  await bp.waitForNavigation();
  await(await bp.$('[data-hveid="CAEQBA"]')).click();
  await bp.waitForTimeout();
  

  // console.log(browserAddress);

  // await browserAddress.newPage();
  // let tabs = await browserAddress.pages();// tabs: array of the tabs or pages
  // console.log(tabs.length);
  // let currentTab = tabs[0];
  // currentTab[i].goto("https://www.google.com");

  // **** To open 10 tabs simultanouly *****

  // browserAddress.pages().then(function (tabs) {
  //   tabs[0].goto('https://www.google.com');
  // })
  // for(let i = 0; i<9; i++) {
  //   browserAddress.newPage().then(async function (tab) {
  //     await tab.goto("https://www.google.com");
  //   });
  // }

  // const tabs = await browserAddress.pages();
  // const tab = tabs[0];
  // await tab.goto("https://www.hackerrank.com/auth/login");
  // let usernameInputTab = await tab.$("#input-1");
  // // console.log(usernameInputTab);
  // let passwordInputTab = await tab.$("#input-2");
  // let rememberChecbox = await tab.$('.checkbox-input');
  // let loginButton = await tab.$('[data-analytics="LoginPassword"]');
  // await usernameInputTab.type("me.pawan@gmail.com");
  // await passwordInputTab.type("me_pawan@12");
  // await rememberChecbox.click();
  // await loginButton.click();
}
openBrowser("https://www.google.com");
