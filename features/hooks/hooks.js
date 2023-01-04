require("chromedriver");

const {Before,After,BeforeAll,AfterAll, Status}=require("@cucumber/cucumber");
const chrome = require("selenium-webdriver/chrome");
const {Builder,FileDetector,By,Browser}=require("selenium-webdriver");
let options;

BeforeAll(async function(){
  await startBrowser();
})

Before(async function(scenario){
    if(global.driver){
        this.driver=global.driver
    }
    else {
        this.driver=startBrowser();
    }
})
async function startBrowser(){
    global.driver= await startChrome();
    await global.driver.setFileDetector(new FileDetector());
    return global.driver;
}

async function startChrome(){
    options = new chrome.Options();
    options.addArguments("window-size=1920,1080");
    return new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
}

AfterAll(async function(){
    await this.driver.quit();
})

After(async function(scenario){
    //if(scenario.result.status===Status.FAILED){
        let screenShot = await this.driver.takeScreenshot();
        let image = Buffer.alloc(screenShot.length,screenShot,'base64');
        this.attach(image,'image/png');
    //}
})