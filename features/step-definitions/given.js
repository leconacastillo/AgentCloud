const { Given } = require('@wdio/cucumber-framework');

Given(/^I am on the (\w+) page$/, async (page) => {
    browser.maximizeWindow();
    await browser.url(`https://qa.aq.elagy.com/`);
});

Given(/^I am on Create Lead modal$/, async () => {
    browser.maximizeWindow();
    await browser.url(`https://qa.aq.elagy.com/`);
});



