Feature: ecommerce test

Scenario: Placing order
    Given navigate to the URL and login the application with "standard_user" and "secret_sauce"
    When select the "Sauce Labs Fleece Jacket" and add to the cart
    Then validate the "Sauce Labs Fleece Jacket" and displayed in the cart
    When enter the valid details "ajith" and "p" and "679325"
    Then place the order
