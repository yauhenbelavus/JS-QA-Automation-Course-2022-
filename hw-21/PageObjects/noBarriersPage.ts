import { WebDriver } from "selenium-webdriver";
import { baseUrl } from "../helpers/constants";
import { SELECTOR_TYPES } from "../helpers/types";
import { Key, until} from "selenium-webdriver";
import { BasePage } from "./basePage";

export class NoBarriersPage extends BasePage {
    constructor( driver: WebDriver) {
        super(driver);
        this.url = `${baseUrl}bez-barier`;
    }

    public async acceptSearchErrorAlertAndGetItsText() {
        const searchInputArea = await this.driverFunctions.getElement(SELECTOR_TYPES.XPATH,`//*[@id="station"]`);
        await searchInputArea.clear();
        await this.driverFunctions.getElementByXPathAndClick(`//*[@id="content"]/div/div/div/div/div[3]/form/input[3]`);
        await this.driver.wait(until.alertIsPresent());
        let alert = await this.driver.switchTo().alert();
        let alertText = await alert.getText();
        await alert.accept();
        return alertText;
    }

    public async getSearchInputArea() {
        return await this.driverFunctions.getElement(SELECTOR_TYPES.XPATH, `//*[@id="station"]`);
    }

    public async searchFor(stationName: string) {
        await (await this.getSearchInputArea()).clear();
        await (await this.getSearchInputArea()).sendKeys(stationName, Key.ENTER);
    }

    public async getStationInformationElement() {
        return await this.driverFunctions.getElement(SELECTOR_TYPES.XPATH, `//div[text()=" Główny; ul. Pawia 5a, 30-150 Kraków"]`);
    }
}   