Feature: Test Login success

  Scenario Outline: As a user, I can login successfully.

    Given I am on the login page
    When  I login with <username> and <password>
    And   I click on submit
    Then  I should see a message saying <message>

    Examples:
      | username          | password           | message                                                                                         |
      | cesar@aqadmin.com | 112233445566778899 | Make sure to check your tasks for the day! We are looking to have 100% on time call-back rate.  |
