export class Element {
    private readonly element;

    constructor (locator: string) {
        this.element = $(locator);
    }

    public async click() {
        await this.waitForElementVisible();
        await this.element.waitForClickable();
        await (await this.element).click();
    }

    public async waitForElementEnabled() {
        await this.waitForElementVisible();
        await this.element.waitForEnabled();
    }

    public async setValue(searchName: string) {
        await (await this.element).setValue(searchName);
    }

    public async waitForElementVisible() {
        await this.element.waitForDisplayed();
    }

    public async isElementSelected() {
        return await this.element.isSelected();
    }

    public async isElementDisplayed() {
        return await this.element.isDisplayed();
    }

    public async getElementAttribute(attribute: string) {
        return await this.element.getAttribute(attribute);
    }
}   