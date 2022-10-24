import { baseUrl } from "../support/constants";

export class BasePage {
  protected url: string;
   
  constructor() {
    this.url = baseUrl;
  } 

  public async visitPage() {
    await browser.url(this.url);
    await browser.setWindowSize(1920, 1080);
  }
   
  get pageUrl() {
    return browser.getUrl();
  }
  
  public async waitForPageLoad(partOfUrl: string) {
     await browser.waitUntil(async () => { 
      return (await browser.getUrl()).includes(partOfUrl)
     })
  }
}