import { Element } from "../support/elements";
import { BasePage } from "./basePage";
import { loginPageUrl } from "../support/constants";
import { email } from "../support/constants";

export class LoginPage extends BasePage {
    constructor() {
     super()
     this.url = loginPageUrl;
  }

get emailInput() {
    return new Element('#CustomerEmail');
  }

get signInButton() {
    return new Element('#customer_login > button');
  }

public async signInWithEmailValue() {
    await this.emailInput.waitForElementEnabled();
    await this.emailInput.setValue(email);
    await this.signInButton.click();
 }
}

export const loginPage = new LoginPage();