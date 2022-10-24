import { WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage"; 
import { baseUrl } from "../helpers/constants"; 
import { SELECTOR_TYPES } from "../helpers/types";

export class HomePage extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
        this.url = `${baseUrl}home`;
    }

    public async openNewPageClickingNavigationButton(buttonsNumber: number) {
        let visitedPagesNumber = 0;
        for (let index = 1; index <= buttonsNumber; index++) {
          await (await this.driverFunctions.getElement(SELECTOR_TYPES.XPATH,`//*[@id="main-menu"]/ul/li[${index}]/a`)).click();
          await this.driver.navigate().back();
          visitedPagesNumber++
        }
        return visitedPagesNumber;
    }
    
    public async getStationsDropdownCountAndVisibility(elementsNumber: number) {
        await this.driverFunctions.moveToElement(SELECTOR_TYPES.XPATH, `//*[@id="main-menu"]/ul/li[5]/a`);
        let dropDownVisibility;
        let count = 0; 
        for (let index = 1; index <= elementsNumber; index++) { 
            dropDownVisibility = await this.driverFunctions.isElementDisplayed(SELECTOR_TYPES.XPATH, `//*[@id="main-menu"]/ul/li[5]/ul/li[${elementsNumber}]/a`);
              if (elementsNumber) {
                 count++
            }
        }
        return [dropDownVisibility, count];
    }

    public async acceptCookies() {
        await this.driverFunctions.getElementByXPathAndClick(`//*[@id="cookiehintsubmit"]`);
    }
    
    public async getKupBiletPageByClickingHeaderButton() {
        await this.driverFunctions.getElementByXPathAndClick(`//*[@id="main-menu"]/ul/li[3]/a`); 
    }

    public async getKupBiletPageByClickingBodyButton() {
        await this.driverFunctions.getElementByXPathAndClick(`//*[@id="content"]/div[2]/div/div/div[2]/div/a`);
    }
}