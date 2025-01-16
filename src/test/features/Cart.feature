Feature: Shopping Cart

    Background:
        Given User navigates to the products page
        And Assert user is on products page

    Scenario: User removes first item from the cart
        When User clicks the Add to Cart button
        Then The cart icon should show product count as 1
        When User clicks on Cart button
        Then User is on Cart page
        And The product should be added to the cart
        When User clicks "Remove" on a first product in the cart
        Then The product should be removed from the cart
        And The cart icon should show the updated product count




