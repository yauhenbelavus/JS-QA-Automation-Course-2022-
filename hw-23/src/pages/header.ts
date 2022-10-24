import { Element } from "../support/elements";
import { Page } from "@playwright/test";
import { logger } from "../support/logger";

export class Header {
  constructor(protected page: Page) {}
   
get shopButton() {
    return new Element(this.page, 'xpath=//*[@id="shopify-section-header"]/sticky-header/header/nav/ul/li[1]/a/span'); 
  }

get searchButton() {
    return new Element(this.page, 'xpath=//*[@id="shopify-section-header"]/sticky-header/header/div/details-modal/details/summary');
  }

get searchInput() {
    return new Element(this.page, "#Search-In-Modal");
  }

get coffeeButton() {
    return new Element(this.page, 'xpath=//*[@id="shopify-section-header"]/sticky-header/header/nav/ul/li[2]/details-disclosure/details/summary'); 
  }

public async getDropDownElementByIndex(index: number) {
    logger.info(`Getting drop down element by index ${index}`);
    return new Element(this.page, `xpath=//*[@id="shopify-section-header"]/sticky-header/header/nav/ul/li[2]/details-disclosure/details/ul/li[${index}]/a`);
  } 

public async clickOnShopButton() {
    logger.info("Clicking on shop button");
    await this.shopButton.click();
    
  }

public async clickOnCoffeeButton() {
    logger.info("Clicking on coffee button");
    await this.coffeeButton.click();
  }

public async clickOnSearchButton() {
    logger.info("Clicking on search button");
    await this.searchButton.click();
  }

public async searchForProductName(productName: string) {
    logger.info(`Searching for product name ${productName}`);
    await this.searchInput.setValue(productName);
    await this.page.keyboard.press('Enter');
    
  }

public async getVisibleElementsDropdownCount(elementsNumber: number) {
    logger.info(`Getting ${elementsNumber} dropdown visible elements`);
    await this.clickOnCoffeeButton();
    let count = 0; 
       for (let index = 1; index <= elementsNumber; index++) { 
        await (await this.getDropDownElementByIndex(index)).waitForElementDisplayed();
        count++
      }
    return count;
  }
}