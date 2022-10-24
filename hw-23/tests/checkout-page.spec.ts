import { test } from '@playwright/test';
import { costaRica, checkoutsPage} from "../src/support/constants";
import { HomePage } from '../src/pages/homePage';
import { ProductPage } from '../src/pages/productPage';
import { CheckoutPage } from '../src/pages/checkoutPage';
import { expect } from "chai";

let productPage: ProductPage;
let homePage: HomePage;
let checkoutPage: CheckoutPage

test.describe('Rum Baba Delivery Options Accessibility', async() => {
    test('Should display different delivery options when user clicks radio buttons', async ( {page} ) => {
        productPage = new ProductPage(page);
        homePage = new HomePage(page);
        checkoutPage = new CheckoutPage(page);
        await homePage.visitPage();
        await homePage.header.clickOnSearchButton();
        await homePage.header.searchForProductName(costaRica);
        await productPage.clickOnProductPageLink();
        await productPage.clickOnAddToCartButton();
        await productPage.clickOnCheckoutButton();
        await productPage.waitForPageLoad(checkoutsPage);
        expect(await checkoutPage.isShippingDeliveryRadioButtonSelected()).to.be.true;
        expect(await checkoutPage.getShipDeliveryOptionText()).equal('Shipping address');
        await checkoutPage.clickOnPickUpDeliveryRadioButton();
        expect(await checkoutPage.isPickUpDeliveryRadioButtonSelected()).to.be.true;
        expect(await checkoutPage.getShipDeliveryOptionText()).equal('Pickup locations');
    });
})