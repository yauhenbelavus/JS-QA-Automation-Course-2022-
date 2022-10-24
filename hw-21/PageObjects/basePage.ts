import { until, WebDriver } from "selenium-webdriver";
import { baseUrl } from "../helpers/constants";
import { DriverFunctions } from "../helpers/driverFunctions";

export class BasePage {
  protected driverFunctions: DriverFunctions;   
  protected url: string;

  constructor(protected readonly driver: WebDriver) {
       this.driverFunctions = new DriverFunctions(driver);
       this.url = baseUrl;
  }
  
  public async visitPage() {
    await this.driver.get(this.url);
  }
  public async maximizeWindow() {
    await this.driver.manage().window().maximize();
  }

  public async waitForTitleToContain(title: string) {
    await this.driver.wait(until.titleContains(title)); 
  }
 
  public async getPageTitle() {
    return await this.driver.getTitle();
  }

  public async quitBrowser() {
    await this.driver.quit(); 
  }
  
  public async refreshPage() {
    await this.driver.navigate().refresh();
  }

  public async navigatePageBack() {
    await this.driver.navigate().back();
  }
}