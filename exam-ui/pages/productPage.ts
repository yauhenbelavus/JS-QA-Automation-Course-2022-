import { Element } from "../support/elements";
import { BasePage } from "./basePage";
import { productsPageUrl } from "../support/constans";
import { PRODUCTS_LOCATORS } from "exam-ui/support/types";
import { Header } from "./header";

export class ProductPage extends BasePage {
   public header: Header
   constructor() {
   super()
   this.url = productsPageUrl;
   this.header = new Header();
  }

get increaseQuantityButton() {
    return new Element('#ProductInfo-template--14148891377801__main > div.product-form__input.product-form__quantity > quantity-input > button:nth-child(3)');
  }

get productWasAddedNotificationElement() {
    return new Element('#cart-notification > div.cart-notification__header');
  }

get checkoutButton() {
  return new Element('#cart > button');
  }

get addToCartButton() {
    return new Element('#product-form-template--14148891377801__main > div > button');
  }

get viewMyCartButton() {
    return new Element('#cart-notification-button');
  } 

public getProductPageLink(productLocator: PRODUCTS_LOCATORS) {
    return new Element(productLocator);
  }

public getProductLink(productLink: string) {
    return new Element(productLink);
  }

public clickOnAddToCartButton() {
    this.addToCartButton.click();
  }

public clickOnProductPageLink(productLocator: PRODUCTS_LOCATORS) {
    this.getProductPageLink(productLocator).click();
  }

public clickOnCheckoutButton() {
    this.checkoutButton.click();
  }
  
public clickOnViewMyCartButton() {
    this.viewMyCartButton.click();
  }

public clickOnIncreaseQuantityButton () {
    this.increaseQuantityButton.click();
  }

public getClicksNumber(clicksNumber: number): number {
  let count = 0;
  for(let index = 1; index <= clicksNumber; index++) {
    this.clickOnIncreaseQuantityButton();
    count++
    }
  return count;
  }

public getAddedToCartUniqueProductsNumber(uniqueProducts: any): number {
  let count = 0;
  for(const products in uniqueProducts) {
    this.clickOnProductPageLink(uniqueProducts[products]);
    this.clickOnAddToCartButton();
    this.viewMyCartButton.waitForElementVisible();
    this.navigatePageBack();
    count++
    }
  return count;
  }

public checkForItemsNumberInCartPreview(itemsNumber: number) {
  this.viewMyCartButton.checkElementHasText(`View my cart (${itemsNumber})\n`);
  }
}