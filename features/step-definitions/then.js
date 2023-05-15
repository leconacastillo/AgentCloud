const { Then } = require('@wdio/cucumber-framework');

Then(/^I should see a message saying ([^"]*)$/, async (message) => {
    let homeMsg = await $('.task-notification-message').getText();
    expect(homeMsg).toHaveText(message);
});