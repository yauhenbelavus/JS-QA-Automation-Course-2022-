import { Locator, Page } from "@playwright/test";
import { options } from "superagent";

export class Element {
    private readonly element: Locator;
   
    constructor (page: Page, locator: string) {
        this.element = page.locator(locator);
    }

    public async click() {
        await this.element.click( { delay: 1000 } );
    }

    public async isElementEnabled() {
        await this.waitForElementVisible();
        return await this.element.isEnabled();
    }

    public async setValue(searchName: string) {
        await this.element.fill(searchName);
    }

    public async waitForElementVisible() {
        await this.element.waitFor();
    }

    public async waitForElementDisplayed() {
        await this.element.waitFor( {state: 'attached'} );
    }

    public async isElementSelected() {
        return await this.element.isChecked();
    }

    public async isElementDisplayed() {
        return await this.element.isVisible();
    }

    public async getElementAttribute(attribute: string) {
        return await this.element.getAttribute(attribute);
    }
}   