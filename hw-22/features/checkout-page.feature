@deliveryOptions
Feature: Rum Baba Delivery Options Accessibility 

   Background: 
     Given the user is on "Home" page
    
   @switchDeliveryOptions
     Scenario: To display two delivery options
     When the user clicks "Search" button
     Then the user inputs product name for search
     Then the user clicks on "Product" page link
     Then the user clicks "Add To Cart" button
     Then the user clicks "Checkout" button
     Then the user sees "Checkout" page
     Then the user sees "Ship" radiobutton is on by default
     Then the user sees "Shipping" address field
     Then the user click "Pick Up" radiobutton
     Then the user sees "Pick Up" address field