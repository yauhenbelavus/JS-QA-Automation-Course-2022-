import { Element } from "../support/elements";
import { BasePage } from "./basePage";
import { productsPageUrl } from "../support/constants";

export class ProductPage extends BasePage {
   constructor() {
    super()
    this.url = productsPageUrl;
 }

get productPageLink() {
    return new Element('//*[@id="shopify-section-template--14147332210825__main"]/div/div[2]/ul/li/div/a/div[2]/div/span[1]');
 }

public async clickOnProductPageLink() {
    await this.productPageLink.click();
 }
 
get addToCartButton() {
    return new Element('#product-form-template--14148891377801__main > div > button');
 }

public async clickOnAddToCartButton() {
    await this.addToCartButton.click();
 }

get checkoutButton() {
    return new Element('#cart > button');
 }

public async clickOnCheckoutButton() {
    await this.checkoutButton.click();
 }
}

export const productPage = new ProductPage();