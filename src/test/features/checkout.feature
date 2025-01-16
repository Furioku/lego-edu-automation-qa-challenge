Feature: Checkout

    Background:
        Given User navigates to the products page
        And Assert user is on products page

    @smoke @checkout
    Scenario: User proceeds to checkout from the cart
        When User clicks the Add to Cart button
        Then The cart icon should show product count as 1
        When User clicks on Cart button
        Then User is on Cart page
        And The product should be added to the cart
        When User clicks Checkout
        Then User should be redirected to the checkout page
        When User enters a valid shipping address
        And Clicks Continue button
        Then User should be redirected to the payment page
        And User should be able to see correct item, item price, tax amount, and total price to payment
        When User press finish button
        Then User is able to see order confirmation


    


