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
    return new Element('#Form1 > div:nth-child(1) > div > div > div.uReyx > div > section:nth-child(2)');
 }
 
public waitForShippingDeliveryRadioButtonSelected() {
    return this.shippingDeliveryRadioButton.waitForElementIsChecked();
 }

public clickOnPickUpDeliveryRadioButton() {
    this.pickUpDeliveryRadioButton.click();
 }

public async waitForPickUpDeliveryRadioButtonSelected() {
    this.pickUpDeliveryRadioButton.waitForElementIsChecked();
 } 

public checkShipDeliveryOptionElementText(text: string) {
    this.deliveryOptionModule.waitForElementVisible(); 
    this.deliveryOptionModule.checkForElementAttributeValue(text)
 }
}   