import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { homePage } from "../pages/homePage";
import { checkoutPage } from "../pages/checkoutPage";
import { productPage } from "../pages/productPage";
import { costaRica } from "../support/constants";

Given(/^the user is on "Home" page$/, async () => {
    await homePage.visitPage();
});

When(/^the user clicks "Search" button$/, async () => { 
    await homePage.header.clickOnSearchButton();
});

Then(/^the user inputs product name for search$/, async () => { 
    await homePage.header.searchForProductName(costaRica);
});

Then(/^the user clicks on "Product" page link$/, async () => { 
    await productPage.clickOnProductPageLink();
});

Then(/^the user clicks "Add To Cart" button$/, async () => { 
    await productPage.clickOnAddToCartButton();
});

Then(/^the user clicks "Checkout" button/, async () => { 
    await productPage.clickOnCheckoutButton();
});

Then(/^the user sees "Checkout" page$/, async () => { 
    await productPage.waitForPageLoad("checkouts");
});

Then(/^the user sees "Ship" radiobutton is on by default$/, async () => { 
    expect(await checkoutPage.isShippingDeliveryRadioButtonSelected()).to.be.true;
});

Then(/^the user sees "Shipping" address field$/, async () => { 
    expect(await checkoutPage.getShipDeliveryOptionText()).equal('Shipping address');
});

Then(/^the user click "Pick Up" radiobutton$/, async () => { 
    await checkoutPage.clickOnPickUpDeliveryRadioButton();
});

Then(/^the user sees "Pick Up" address field$/, async () => { 
    expect(await checkoutPage.isPickUpDeliveryRadioButtonSelected()).to.be.true;
    expect(await checkoutPage.getShipDeliveryOptionText()).equal('Pickup locations');
});