Feature: Create SI Term Journey
    
  Background: As a user, I can login successfully.

    Given I am on the login page
    When  I login with cesar@aqadmin.com and 112233445566778899
    And   I click on submit
    And   I navigate to Create Lead modal
    And   I fill the form entering automation, user, 3035551111, automationuser@automation.com, AAA Life and Simplified Issue Term
    And   I click on Create and Convert button
    And   I click on Create New button
    And   I enter an Agent and AQ Test
    And   I click on Create button
    Then  New Contact Agent AQ Test is created

  Scenario Outline: Create new contact
    
    When  I click on Next button
    And   I select a Self plan
    And   I select who is the owner of the policy
    And   I select payor of the policy
    And   I select <state> where owner lives in
    And   I confirm <email> and <phonenumber>
    And   I confirm I am a US citizen
    And   I enter my birthday with <month>, <day> and <year>
    And   I select my gender 
    And   I enter my height and weight with <feet>, <inches> and <pounds>
    And   I answer if have used tobacco or nicotine-based products
    And   I replacing my current policy
    And   I answer an application or reinstatement request
    

    Examples:
      | state      | email                         | phonenumber | month | day | year | feet | inches | pounds |
      | California | automationuser@automation.com | 3035551111  | 12    | 23  | 1985 | 9    | 11     | 11     |