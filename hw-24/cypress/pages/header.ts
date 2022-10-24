import { Element } from "../support/elements";

export class Header {
  constructor() {}
   
get shopButton() {
    return new Element('#shopify-section-header > sticky-header > header > nav > ul > li:nth-child(1) > a > span'); 
  }

get searchButton() {
    return new Element('#shopify-section-header > sticky-header > header > div > details-modal > details > summary');
  }

get searchInput() {
    return new Element('#Search-In-Modal');
  }

get coffeeButton() {
    return new Element('#shopify-section-header > sticky-header > header > nav > ul > li:nth-child(2) > details-disclosure > details > summary > span'); 
  }

public getDropDownElementByIndex(index: number) {
    return new Element(`#shopify-section-header > sticky-header > header > nav > ul > li:nth-child(2) > details-disclosure > details > ul > li:nth-child(${index}) > a`);
  }
  
public clickOnShopButton() {
    this.shopButton.click();
  }

public clickOnCoffeeButton() {
    this.coffeeButton.click();
  }

public clickOnSearchButton() {
    this.searchButton.click();
  }

public searchForProductName(productName: string) {
    this.searchInput.setValue(`${productName}{enter}`);
  }

public getVisibleElementsDropdownCount(elementsNumber: number) {
    this.clickOnCoffeeButton();
    let count = 0; 
      for (let index = 1; index <= elementsNumber; index++) { 
        this.getDropDownElementByIndex(index).waitForElementVisible();
        count++
      }
      return count;
    }
}