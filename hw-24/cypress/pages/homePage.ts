import { BasePage } from "./basePage";
import { Header } from "./header";

export class HomePage extends BasePage {
    public header: Header
    constructor() {
    super()

    this.header = new Header();
  }
}