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

public clickOnRemoveButton() {
    this.сartRemoveButton.click();
  }

get emptyCartMessageElement() {
    return new Element('#shopify-section-template--14147332178057__cart-items > cart-items > div.cart__warnings > h1');
  }

public checkEmptyCartMessageElementHasText(text: string) {
    this.emptyCartMessageElement.checkElementHasText(text);
  }
}