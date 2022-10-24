import { Element } from "../support/elements";
import { BasePage } from "./basePage";
import { productsPageUrl } from "../support/constans";

export class ProductPage extends BasePage {
   constructor() {
   super()
   this.url = productsPageUrl;
  }

get productPageLink() {
    return new Element('#shopify-section-template--14147332210825__main > div > div.template-search__results.page-width > ul > li > div > a > div.card-information > div > span.card-information__text.h5');
  }

public clickOnProductPageLink() {
    this.productPageLink.click();
  }
 
get addToCartButton() {
    return new Element('#product-form-template--14148891377801__main > div > button');
  }

get viewMyCartButton() {
    return new Element('#cart-notification-button');
  }

public clickOnAddToCartButton() {
    this.addToCartButton.click();
  }

get checkoutButton() {
    return new Element('#cart > button');
  }

public clickOnCheckoutButton() {
    this.checkoutButton.click();
  }
  
public clickOnViewMyCartButton() {
    this.viewMyCartButton.click();
  }
}