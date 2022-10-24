import { Element } from "../support/elements";
import { BasePage } from "./basePage";

export class CheckoutPage extends BasePage {
     constructor() {
     super()
 }   

get shippingDeliveryRadioButton() {
    return new Element('#delivery_strategies-SHIPPING');
 }

get pickUpDeliveryRadioButton() {
    return new Element('#delivery_strategies-PICK_UP');
 }

get deliveryOptionModule() {
    return new Element('//*[@id="Form1"]/div[1]/div/div/div[1]/div/section[2]');
 }

public async isShippingDeliveryRadioButtonSelected() {
    return await this.shippingDeliveryRadioButton.isElementSelected();
 }

public async clickOnPickUpDeliveryRadioButton() {
    await this.pickUpDeliveryRadioButton.click();
}

public async isPickUpDeliveryRadioButtonSelected() {
    return await this.pickUpDeliveryRadioButton.isElementSelected();
 } 

public async getShipDeliveryOptionText() {
   await this.deliveryOptionModule.waitForElementVisible(); 
   return this.deliveryOptionModule.getElementAttribute('aria-label');
 }
}   

export const checkoutPage = new CheckoutPage();