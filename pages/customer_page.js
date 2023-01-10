const {getTestDataFile} =require( "../helpers/helper");
const page = require("../pages/page")
const {getSetting} = require("../settings");

const {By} = require("selenium-webdriver");
const assert =require("assert")

//Elements

const homePage= By.css("body > div.L3eUgb > div.o3j99.n1xJcf.Ne6nSd > a:nth-child(2)");
const acceptAll =By.css("#L2AGLb > div");
const textFieldSearch = By.css("input.gLFyf");

module.exports ={

    // navigateToHomePage: async function(driver){
    //     await driver.navigate().to("https://www.google.co.uk/");
    //     await driver.findElement(acceptAll).click();
    // },

    navigateToHomePage: async function(driver){
        switch (getSetting("uatExecution")){
            case true:
                env = getSetting("environments.uat.url");
                console.log("environment value is " + env)
                break;
            case false:
                env = getSetting("environments.qa.url"); 
                console.log("environment value is " + env)
            default:
                assert.fail("default url is not yet to decided")       
        }
        await driver.navigate().to(env);
        await page.waitForElementToBeDisplayed (driver,homePage)
        await driver.findElement(acceptAll).click();
    },

    validateHomePage: async function(driver){
        let element= await driver.findElement(homePage);
        let isElementDisplayed = await element.getText();
        assert(isElementDisplayed==="About","");
    },
    searchText: async function(driver,json){
        let data = getTestDataFile(json);
        console.log("search data is " + data.searchText)
        //await page.clickOn(driver,textFieldSearch,x.searchText);
        await page.setValue(driver, textFieldSearch, x.searchText)
        await page.enterkey(driver,textFieldSearch)    
       
    }
}