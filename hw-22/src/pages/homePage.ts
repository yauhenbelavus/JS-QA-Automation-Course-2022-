import { BasePage } from "./basePage";
import { header, Header } from "./header";

export class HomePage extends BasePage {
   public header: Header
    constructor() {
    super()

    this.header = header;
  }
}

export const homePage = new HomePage();