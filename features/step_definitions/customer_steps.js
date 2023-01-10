const {Then, When} = require("@cucumber/cucumber");
const customerPage = require("../../pages/customer_page");
const page = require("../../pages/page");

When(/^I navigate to google homepage$/, {timeout: 60 * 2000}, async function () {
    await customerPage.navigateToHomePage(this.driver);
    //await page.navigateToHomePage(this.driver);
});

Then(/^I should see google homepage$/, {timeout: 60 * 2000}, async function () {
    await customerPage.validateHomePage(this.driver);
});

Then(/^I search data using (\S+)$/, {timeout: 60 * 2000}, async function (json) {
    await customerPage.searchText(this.driver,json);
});

Then(/^I did search of this google$/, {timeout: 60 * 2000}, async function () {
 console.log("end of execution")
})
