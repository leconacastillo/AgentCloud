const { Given, When, Then } = require('@wdio/cucumber-framework');

When(/^I login with ([^"]*) and ([^"]*)$/, async (username, password) => {
    await $('#email').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
    await browser.pause(15000);
});

When(/^I click on submit$/, async () => {
    await $('button[type="submit"]').click();
    await browser.pause(15000);
});
