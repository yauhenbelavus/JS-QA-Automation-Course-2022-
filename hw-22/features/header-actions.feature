@headerActions
Feature: Rum Baba Header Actions

   Background: 
      Given the user opens "Homepage" 
    
   @redirection
   Scenario: Redirect to "Shop" page
      When the user clicks "Shop" button in header
      Then the user sees opened "Shop" page
   
   @productSearch
   Scenario: To dispaly product search result
      When the user clicks "Search" button in header
      Then the user inserts product name in search input and press "Enter" button
      Then the user clicks on Product page link
      Then the user sees opened Product page
   
   @dropDown   
   Scenario: To display dropdown
      When the user clicks "Coffee" button in header
      Then the user sees dropdown list of 4 elements