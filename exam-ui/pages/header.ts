import { Element } from "../support/elements";

export class Header {
  constructor() {}
   
get coffeeButton() {
    return new Element('#shopify-section-header > sticky-header > header > nav > ul > li:nth-child(2) > details-disclosure > details > summary'); 
  }

get cartButton() {
    return new Element('#cart-icon-bubble');
}

get loginButton() {
    return new Element('#shopify-section-header > sticky-header > header > div > a.header__icon.header__icon--account.link.link--text.focus-inset.small-hide');
  }

get allCoffeeButton() {
    return new Element('#shopify-section-header > sticky-header > header > nav > ul > li:nth-child(2) > details-disclosure > details > ul > li:nth-child(1) > a');
  }

public clickOnCartButton() {
    this.cartButton.click();
}

public clickOnAllCoffeeButton() {
    this.allCoffeeButton.click();
  }

public clickOnCoffeeButton() {
    this.coffeeButton.click();
  }

public clickOnloginButton() {
    this.loginButton.click();
  }
}