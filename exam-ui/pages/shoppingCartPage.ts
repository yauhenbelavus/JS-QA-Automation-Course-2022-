import { shoppingCartUrl } from "../support/constans";
import { BasePage } from "./basePage";
import { Element } from "../support/elements";

export class ShoppingCartPage extends BasePage {
    constructor() {
        super()
        this.url = shoppingCartUrl;
  }

get сartRemoveButton() {
    return new Element('#Remove-1');
  }
  
get increaseQuantityButton() {
    return new Element('#CartItem-1 > td.cart-item__quantity > quantity-input > button:nth-child(3)');
  }

get quantityElement() {
    return new Element('#Quantity-1');
  }

get subtotalElement() {
    return new Element('#main-cart-footer > div > div > div > div.js-contents > div.totals > p');
  }

public getshoppingCartItem(index: number) {
    return new Element(`#CartItem-${index} > td.cart-item__details > a`)
}

public checkForCartRemoveButtonIsVisible() {
    this.сartRemoveButton.waitForElementVisible();
  }

public getCartUniqueProductsCount(itemsCount: number): number {
    let count = 0;
    for(let index = 1; index <= itemsCount; index++) {
       this.getshoppingCartItem(index).waitForElementVisible();
       count++
    }
    return count;
}

public getClicksNumber(clicksNumber: number): number {
   let count = 0;
   for(let index = 1; index <= clicksNumber; index++) {
     this.increaseQuantityButton.click();
     count++
    }
    return count;
  }

public checkForQuantityElementValue(attributeValue: number | string, attributeName: string) {
     this.quantityElement.waitForElementVisible();
     this.quantityElement.checkForElementAttributeValue(attributeValue, attributeName);
  }

public checkForSubtotalValue(subtotalValue: string) {
     this.subtotalElement.checkElementHasText(subtotalValue);
  }
}