Feature: Create SI Term Journey
    
  Background: As a user, I can login successfully.

    Given I am on the login page
    When  I login with cesar@aqadmin.com and 112233445566778899
    And   I click on submit
    And   I navigate to Create Lead modal
    And   I fill the form entering automation, user, 3035551111, automationuser@automation.com, AAA Life and Simplified Issue Term
    And   I click on Create and Convert button

  Scenario Outline: Create new contact
    
    When  I click on Next button
    And   I enter an <contactname> and <lastname>
    And   I click on Create button
    Then  New Contact <contact> is created

    Examples:
      | contactname | lastname | contact       |
      | Agent       | AQ Test  | Agent QA Test |