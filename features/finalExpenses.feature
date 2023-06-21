Feature: Convert a Lead
    
    Background: Login success
        Given I am on the login page
        When  I login with <username> and <password>
        And   I click on submit
    Examples:
      | username        | password             | message                                                                                         |
      | cesar@admin.com | 112233445566778899   | Make sure to check your tasks for the day! We are looking to have 100% on time call-back rate.  |    

  Scenario Outline: Create Lead

    When  I navigate to Create Lead modal 
    And   I fill the form entering <firstname>, <lastname>, <phone>, <email>, <campaign> and <producttype>
    And   I Click on Create button
    Then  Lead is created
    Examples:
      | firstname  | lastname  | phone       | email                          | campaign  | producttype   |
      | automation | user      | 3035551111  | automationuser@automation.com  | AAA Life  | Final Expense |