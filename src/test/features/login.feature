Feature: Login Functionality

    Background:
        Given User navigates to the application
        Then User is on login page

    @login @smoke
    Scenario: Positive login
        Given User enter correct username and password
        When User click on login button
        Then Assert user logged in successfully

    @login
    Scenario: User attempts login with invalid password
        Given User enters correct username and invalid password
        When User click on login button
        Then User should see Incorrect password error message
        And User should remain on the login page

    @login
    Scenario: User attempts login with locked out credentials
        Given User enters locked out username and correct password
        When User click on login button
        Then User should see Locked out user error message
        And User should remain on the login page

    @smoke
    Scenario: User logs out successfully
        Given User enter correct username and password
        When User click on login button
        Then Assert user logged in successfully
        When User clicks the navigation menu button
        And User clicks Logout button
        Then User is on login page