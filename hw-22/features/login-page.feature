@loginPage
Feature: Rum Baba login Actions

   Background: 
   Given the user opens "Login" page
    
   @invalidLoginRedirection
   Scenario: Redirect to "I'am not a robot" page
   When the user inputs only email and clicks "Sign in" button
   Then the user sees opened "I'am not a robot" page