import { BasePage } from "./basePage";
import { Header } from "./header";
import { Page } from "@playwright/test";

export class HomePage extends BasePage {
    public header: Header
    constructor(page: Page) {
    super(page)

    this.header = new Header(page);
  }
}