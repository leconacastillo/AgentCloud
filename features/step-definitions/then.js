const { Then } = require('@wdio/cucumber-framework');

Then(/^I should see a message saying ([^"]*)$/, async (message) => {
    let homeMsg = await $('.task-notification-message').getText();
    expect(homeMsg).toHaveText(message);
});

Then(/^Lead ([^"]*) is converted and created with message ([^"]*)$/, async (leadname, welcomemessage) => {
    let lead = await $('h3').getText();
    let message = await $('#root div:nth-child(4) div:nth-child(2) div div:nth-child(1)').getText();
    expect(lead).toHaveText(leadname);
    expect(message).toHaveText(welcomemessage);
    await browser.pause(3000);
});

Then(/^New Contact ([^"]*) is created$/, async (contact) => {
    let contactName = await $('//h3[text()="Agent AQ Test"]').getText();
    expect(contactName).toHaveText(contact);
    await browser.pause(3000);
});

