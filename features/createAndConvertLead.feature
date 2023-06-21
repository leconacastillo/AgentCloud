Feature: Create and Convert a Lead
    
  Background: As a user, I can login successfully.

    Given I am on the login page
    When  I login with cesar@aqadmin.com and 112233445566778899
    And   I click on submit


  Scenario Outline: Create and Convert a Lead

    When  I navigate to Create Lead modal 
    And   I fill the form entering <firstname>, <lastname>, <phone>, <email>, <campaign> and <producttype>
    And   I click on Create and Convert button
    Then  Lead <leadname> is converted and created with message <welcomemessage>
    Examples:
      | firstname  | lastname  | phone       | email                          | campaign  | producttype   | leadname              | welcomemessage                          |
      | automation | user      | 3035551111  | automationuser@automation.com  | AAA Life  | Final Expense | Lead: automation user | Welcome to the Final Expense journey!!! |
