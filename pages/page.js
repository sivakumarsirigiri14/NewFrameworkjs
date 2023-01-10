const {By, Key, until} = require("selenium-webdriver");
const{Actions} = require("selenium-webdriver/lib/input")
const assert = require("assert");
const { setMaxIdleHTTPParsers } = require("http");

module.exports = {
    clickOn: async function (driver, locator) {
       await driver.findElement(locator).click();
    },
    setValue: async function (driver, locator,value) {
        let element = await driver.findElement(locator);
        await element.sendKeys(Key.chord((Key.CONTROL,"a",Key.BACK_SPACE)));
        await element.sendKeys(value);
    },
    enterkey: async function (driver, locator) {
        let element = await driver.findElement(locator);
        await element.sendKeys(Key.ENTER);
    },
    waitForElementToBeDisplayed: async function(driver, locator, timeOut = 450000){
        await driver.wait(until.elementLocated(locator), timeOut, `Unable to locate element after time our of ${timeOut / 1000} seconds :${locator}`,500);
    },
    pressTab: async function (driver) {
        await new Actions(driver).sendKeys(Key.TAB).perform();
    },
    clickOnWithJS: async function(driver, locator, timeOut = 4000){
        try{
            await driver.executeScript("document.querySelector('" + locator.value + "').click()");
        }catch(exception){

        }
    },
    setValueWithJS: async function(driver, locator, value, timeOut = 4000){
        try{
            await driver.executeScript("document.querySelector('" + locator.value + "').value='" + value + "'")
        }catch(exception){
            console.log("locator " + locator + "not found")    
        }
    },
    getValueWithJS: async function(driver, locator, timeOut = 4000){
        try{
            await driver.executeScript("return document.querySelector('" + locator + "').innerText")
        }catch(exception){
            console.log("locator " + locator + "not found")    
        }
    },
    scrollToElement: async function(driver, locator, timeOut = 4000){
        try{
            await (driver.executeScript("argument[0].scrollIntoView()", await driver.findElement(locator)))
        }catch(exception){
            console.log(false, "failed for locator " + locator)    
        }
    },
    getElementText: async function (driver, locator,) {
        return await driver.findElement(locator).getText();
    },
    getElementAttribute: async function (driver, locator,attributeName) {
        return await driver.findElement(locator).getAttribute(attributeName);
    },
    getValue: async function (driver, locator) {
        return await this.getElementAttribute(driver, locator,"value")
    },
    setValueWithWait: async function (driver, locator, value, timeOut) {
        return await this.waitForElementToBeDisplayed(driver, locator,timeOut)
        await this.setValue(driver, locator, value)
    },
}