import { Element } from "../support/elements";
import { BasePage } from "./basePage";
import { loginPageUrl } from "../support/constants";
import { email } from "../support/constants";
import { Page } from "@playwright/test";
import { logger } from "../support/logger";

export class LoginPage extends BasePage {
    constructor(page: Page) {
     super(page)
     this.url = loginPageUrl;
  }

get emailInput() {
    return new Element(this.page, '#CustomerEmail');
  }

get signInButton() {
    return new Element(this.page, '#customer_login > button');
  }

public async signInWithEmailValue() {
    logger.info("Signing in with email value");
    await this.emailInput.setValue(email);
    await this.signInButton.click();
  }
}