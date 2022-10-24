import { Element } from "../support/elements";

export class Header {
 
get shopButton() {
    return new Element('=Shop'); 
  }

get searchButton() {
    return new Element('//*[@id="shopify-section-header"]/sticky-header/header/div/details-modal/details/summary');
  }

get searchInput() {
    return new Element("#Search-In-Modal");
  }

get coffeeButton() {
    return new Element('//*[@id="shopify-section-header"]/sticky-header/header/nav/ul/li[2]/details-disclosure/details/summary'); 
  }

public async getDropDownElementByIndex(index: number) {
  return new Element(`//*[@id="shopify-section-header"]/sticky-header/header/nav/ul/li[2]/details-disclosure/details/ul/li[${index}]/a`);
  } 

public async clickOnShopButton() {
    await this.shopButton.click();
  }

public async clickOnCoffeeButton() {
    await this.coffeeButton.click();
  }

public async clickOnSearchButton() {
    await this.searchButton.click()
  }

public async searchForProductName(productName: string) {
    await this.searchInput.waitForElementEnabled();
    await this.searchInput.setValue(productName);
    await browser.keys("\uE007");
  }

public async getVisibleElementsDropdownCount(elementsNumber: number) {
    await this.clickOnCoffeeButton();
    let count = 0; 
       for (let index = 1; index <= elementsNumber; index++) { 
         await (await this.getDropDownElementByIndex(index)).waitForElementVisible();
         count++
      }
      return count;
    }
}

export const header = new Header();