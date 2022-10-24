import { Locator, until, WebDriver, By} from "selenium-webdriver";
import { defaultWaitingTime } from "./constants";
import { SELECTOR_TYPES } from "./types";

export class DriverFunctions {
    constructor(public driver: WebDriver) {};

    async getElement(selectorType: SELECTOR_TYPES, locatorString: string) {
        const locator: Locator = By[selectorType](locatorString);
        await this.driver.wait(until.elementLocated(locator), defaultWaitingTime);
        return await this.driver.findElement(locator);
    }

    async moveToElement(selectorType: SELECTOR_TYPES, locatorString: string) {
        let hoverable = await this.getElement(selectorType, locatorString);
        return await this.driver.actions({ async: true }).move({ origin: hoverable, duration: 3000 }).perform();
    }

    async isElementDisplayed(selectorType: SELECTOR_TYPES, locatorString: string) {
        return await (await this.getElement(selectorType, locatorString)).isDisplayed();
    }

    async getElementByXPathAndClick(stringLocator: string) {
        return await (await this.getElement(SELECTOR_TYPES.XPATH, stringLocator)).click();
    }
}