import { Page } from "@playwright/test";
import { baseUrl } from "../support/constants";
import { logger } from "../support/logger";

export class BasePage {
  
  protected url: string;
   
  constructor(protected readonly page: Page) {
    this.url = baseUrl;
  } 

  public async visitPage() {
    logger.info("Visiting page");
    await this.page.goto(this.url);
    await this.page.setViewportSize({
      width: 1920,
      height: 1080,
    });
  }
   
  get pageUrl() {
    return this.page.url();
  }
  
  public async waitForPageLoad(pageUrl: string) {
    logger.info("Waiting for page load"); 
    await this.page.waitForURL(`${pageUrl}**`);
  }
}