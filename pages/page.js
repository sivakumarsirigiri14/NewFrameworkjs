
const {By,Key} = require("selenium-webdriver");
const assert = require("assert")


module.exports = {
    clickOn: async function (driver, locator) {
       await driver.findElement(locator).click();
    },
    setValue: async function (driver, locator,value) {
        let element = await driver.findElement(locator);
        await element.sendKeys(Key.chord((Key.CONTROL,"a",Key.BACK_SPACE)));
        await element.sendKeys(value);
    }
}