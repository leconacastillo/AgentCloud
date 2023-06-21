const { When } = require('@wdio/cucumber-framework');

When(/^I login with ([^"]*) and ([^"]*)$/, async (username, password) => {
    await $('#email').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
    await browser.pause(12000);
});

When(/^I click on submit$/, async () => {
    await $('button[type="submit"]').click();
});

When(/^I navigate to Create Lead modal$/, async () => {
    await $('a[href="/app/leads"]').click();
    await $('//button[text()="Create Lead"]').click();
});

When(/^I fill the form entering ([^"]*), ([^"]*), ([^"]*), ([^"]*), ([^"]*) and ([^"]*)$/, async (firstname, lastname, phone, email, campaign, producttype) => {
    await $('//form[1]/div/div/div[2]/div[1]/div/div[1]/div/div[1]/div/div[1]/div/input').setValue(firstname);
    await $('//form[1]/div/div/div[2]/div[1]/div/div[2]/div/div[1]/div/div[1]/div/input').setValue(lastname);
    await $('//form[1]/div/div/div[2]/div[1]/div/div[3]/div/div[1]/div/div[1]/div/input').setValue(phone);
    await $('//form[1]/div/div/div[2]/div[1]/div/div[4]/div/div[1]/div/div[1]/div/input').setValue(email);
    await $('div:nth-child(5) div div:nth-child(1) div div:nth-child(1) select').selectByVisibleText(campaign)
    await $('//div[3]/div/div/div[2]/div[2]/div[1]/select').selectByVisibleText(producttype)
});

When(/^I click on Create and Convert button$/, async () => {
    await $('//button[text()="Create and Convert"]').click();
    await browser.pause(10000);
});

When(/^I click on Create New button$/, async () => {
    await $('.contacts-create-anchor').click();
});

When(/^I enter an ([^"]*) and ([^"]*)$/, async (contactname, lastname) => {
    await $('input[placeholder="Enter First Name"]').setValue(contactname);
    await $('div.modal.show div.modal-body div:nth-child(2) input').setValue(lastname);
    await browser.pause(3000);
});

When(/^I click on Create button$/, async () => {
    await $('div.modal.show div.modal-footer button.btn.btn-primary.modal-save-btn').click();
    await browser.pause(3000);
});

When(/^I click on Next button$/, async () => {
    await $('.button-group-widget button').click();
});

When(/^I select a Self plan$/, async () => {
    await $('.question-widgets div div div:nth-child(1) .radio-option').click();
    //await $('.question-widgets div div div:nth-child(2) .radio-option').click();
    await $('.journey-node-buttons .btn.btn-primary').click();
    await browser.pause(3000);
});

When(/^I select who is the owner of the policy$/, async () => {
    await $('.radio-icons-container div:nth-child(1) .radio-option').click(); //Caller
    //await $('.radio-icons-container div:nth-child(2) .radio-option').click(); //Insured
    //await $('.radio-icons-container div:nth-child(3) .radio-option').click(); //Other
    await $('.journey-node-buttons .btn.btn-primary').click();
    await browser.pause(3000);
});

When(/^I select who is the owner of the policy$/, async () => {
    //await $('.radio-icons-container div:nth-child(1) .radio-option').click(); //Caller
    //await $('.radio-icons-container div:nth-child(2) .radio-option').click(); //Insured
    await $('.radio-icons-container div:nth-child(3) .radio-option').click(); //Owner
    //await $('.radio-icons-container div:nth-child(4) .radio-option').click(); //Other
    await $('.journey-node-buttons .btn.btn-primary').click();
});

When(/^I select ([^"]*) where owner lives in$/, async (state) => {
    await $('select.custom-select-btn').selectByVisibleText(state);
    await $('.journey-node-buttons .btn.btn-primary').click();
});

When(/^I confirm ([^"]*) and ([^"]*)$/, async (email, phone) => {
    await $('input[placeholder="Enter Email"]').setValue(email);
    await $('input[placeholder="Enter Phone"]').setValue(state);
    await $('//*[@id="root"]/div/div/div/div[1]/div[2]/div[2]/div[3]/div[1]/div/div[1]/div[1]/div[1]/form/div[2]/div[1]/div/div[1]/div/div[1]/div/div[1]/form/div[2]/div[1]/select').selectByVisibleText('No');
    await $('//*[@id="root"]/div/div/div/div[1]/div[2]/div[2]/div[3]/div[1]/div/div[1]/div[1]/div[1]/form/div[2]/div[1]/div/div[1]/div/div[1]/div/div[1]/form/div[3]/div[1]/select').selectByVisibleText('Cell');
});

When(/^I select ([^"]*) where owner lives in$/, async (state) => {
    await $('//*[@id="root"]/div/div/div/div[1]/div[2]/div[2]/div[3]/div[1]/div/div[1]/div/div[1]/form/div/div/div[1]/div').click();
    await $('.journey-node-buttons .btn.btn-primary').click();
});

When(/^I select ([^"]*) where owner lives in$/, async (state) => {
    await $('//*[@id="root"]/div/div/div/div[1]/div[2]/div[2]/div[3]/div[1]/div/div[1]/div/div[1]/form/div/div/div[1]/div').click();
    await $('.journey-node-buttons .btn.btn-primary').click();
});

When(/^I enter my birthday with ([^"]*), ([^"]*) and ([^"]*)$/, async (month, day, year) => {
    await $('input[name="month"]').setValue(month);
    await $('input[name="day"]').setValue(day);
    await $('input[name="year"]').setValue(year);
    await $('.journey-node-buttons .btn.btn-primary').click();
});

When(/^I select my gender$/, async () => {
    await $('//*[@id="root"]/div/div/div/div[1]/div[2]/div[2]/div[3]/div[1]/div/div[1]/div/div[1]/form/div/div/div[1]/div').click(); //Male
    await $('.journey-node-buttons .btn.btn-primary').click();
});

When(/^I enter my height and weight with ([^"]*), ([^"]*) and ([^"]*)$/, async (feet, inches, pounds) => {
    await $('input[name="height-feet"]').setValue(feet);
    await $('input[name="height-inches"]').setValue(inches);
    await $('input[name="weight-pounds"]').setValue(pounds);
    await $('.journey-node-buttons .btn.btn-primary').click();
});

When(/^I answer if have used tobacco or nicotine-based products$/, async () => {
    await $('//*[@id="root"]/div/div/div/div[1]/div[2]/div[2]/div[3]/div[1]/div/div[1]/div/div[1]/form/div/div/div[2]/div').click(); //Not consumed
    await $('.journey-node-buttons .btn.btn-primary').click();
});

When(/^I replacing my current policy$/, async () => {
    await $('.radio-icons-container div:nth-child(1)').click(); //Currently replacing
    await $('.journey-node-buttons .btn.btn-primary').click();
});

When(/^I answer an application or reinstatement request$/, async () => {
    await $('//*[@id="root"]/div/div/div/div[1]/div[2]/div[2]/div[3]/div[1]/div/div[1]/div/div[1]/form/div/div/div[2]/di').click(); //Currently replacing
    await $('.journey-node-buttons .btn.btn-primary').click();
});


























