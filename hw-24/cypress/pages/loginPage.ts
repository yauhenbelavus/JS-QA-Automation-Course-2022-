import { Element } from "../support/elements";
import { BasePage } from "./basePage";
import { loginPageUrl, password } from "../support/constans";
import { email } from "../support/constans";

export class LoginPage extends BasePage {
    constructor() {
      super()
      this.url = loginPageUrl;
  }

get emailInput() {
    return new Element('#CustomerEmail');
  }
  
get passwordInput() { 
    return new Element('#CustomerPassword');
  }

get signInButton() {
    return new Element('#customer_login > button');
  }

public signInWithEmailValue() {
    this.emailInput.setValue(email);
    this.signInButton.click();
  }

public setLoginCredentials() {
    cy.setCredentials('#CustomerEmail', '#CustomerPassword', email, password);
    this.signInButton.click();
  }
}