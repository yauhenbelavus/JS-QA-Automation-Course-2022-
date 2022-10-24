import { Element } from "../support/elements";
import { BasePage } from "./basePage";
import { productsPageUrl } from "../support/constants";
import { Page } from "@playwright/test";
import { logger } from "../support/logger";

export class ProductPage extends BasePage {
   constructor(page: Page) {
    super(page)
    this.url = productsPageUrl;
  }

get productPageLink() {
    return new Element(this.page, 'xpath=//*[@id="shopify-section-template--14147332210825__main"]/div/div[2]/ul/li/div/a/div[2]/div/span[1]');
  }

public async clickOnProductPageLink() {
    logger.info("Clicking on product page link");
    await this.productPageLink.click();
  }
 
get addToCartButton() {
    return new Element(this.page, '#product-form-template--14148891377801__main > div > button');
  }

public async clickOnAddToCartButton() {
    logger.info("Clicking on add to cart button");
    await this.addToCartButton.click();
  }

get checkoutButton() {
    return new Element(this.page, '#cart > button');
  }

public async clickOnCheckoutButton() {
    logger.info("Clicking on checkout button");
    await this.checkoutButton.click();
  }
}