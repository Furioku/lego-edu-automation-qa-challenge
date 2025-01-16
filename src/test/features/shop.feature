Feature: Shopping Functionalities
    1.Shopping items are present on page
    2.Details Feature
    3.Filtering/sorting feature
    4.Add a product to the cart feature

    Background:
        Given User navigates to the products page
        And Assert user is on products page

    @smoke
    Scenario: Products inventory displayed correctly
        Then User is able to see 6 products on the page
        And All products have correct discription attached
        And All products have correct price assigned

    Scenario: User views product details
        When User clicks on a product
        Then User is on a specific product page
        And User should see detailed information about the product, including price, description, and image

    Scenario: User should be able to go back to main products inventory page
        When User clicks on a product
        Then User is on a specific product page
        When User press on the Back button
        Then Assert user is on products page

    @smoke
    Scenario: User adds a single product to the shopping cart from main products inventory page
        When User clicks the Add to Cart button
        Then The cart icon should show product count as 1
        When User clicks on Cart button
        Then User is on Cart page
        And The product should be added to the cart


