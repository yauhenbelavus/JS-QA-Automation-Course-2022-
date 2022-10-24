import { Element } from "../support/elements";
import { BasePage } from "./basePage";
import { Page } from "@playwright/test";
import { logger } from "../support/logger";

export class CheckoutPage extends BasePage {
     constructor(page: Page) {
     super(page)
 }   

get shippingDeliveryRadioButton() {
    return new Element(this.page, '#delivery_strategies-SHIPPING');
 }

get pickUpDeliveryRadioButton() {
    return new Element(this.page, '#delivery_strategies-PICK_UP');
 }

get deliveryOptionModule() {
    return new Element(this.page, 'xpath=//*[@id="Form1"]/div[1]/div/div/div[1]/div/section[2]');
 }

public async isShippingDeliveryRadioButtonSelected() {
    logger.info("Checking for shipping delivery radio button is selected");
    return await this.shippingDeliveryRadioButton.isElementSelected();
 }

public async clickOnPickUpDeliveryRadioButton() {
    logger.info("Clicking on pick up delivery radio button");
    await this.pickUpDeliveryRadioButton.click();
 }

public async isPickUpDeliveryRadioButtonSelected() {
    logger.info("Checking for pick up delivery radio button is selected");
    return await this.pickUpDeliveryRadioButton.isElementSelected();
 } 

public async getShipDeliveryOptionText() {
    logger.info("Getting ship delivery option text");
    await this.deliveryOptionModule.waitForElementVisible(); 
    return this.deliveryOptionModule.getElementAttribute('aria-label');
 }
}   