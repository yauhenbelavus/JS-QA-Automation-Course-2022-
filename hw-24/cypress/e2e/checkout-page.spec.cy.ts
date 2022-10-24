import { costaRica } from '../support/constans';
import { ProductPage } from '../pages/productPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { HomePage } from '../pages/homePage';
import { checkoutsPage } from '../support/constans';

const productPage = new ProductPage();
const homePage = new HomePage();
const checkoutPage = new CheckoutPage();

  describe('Rum Baba Delivery Options Accessibility', () => {
      it('Should display different delivery options when user clicks radio buttons', () => {
        homePage.visitPage();
        homePage.header.clickOnSearchButton();
        homePage.header.searchForProductName(costaRica);
        productPage.clickOnProductPageLink();
        productPage.clickOnAddToCartButton();
        productPage.clickOnCheckoutButton();
        productPage.waitForPageLoad(checkoutsPage);
        checkoutPage.waitForShippingDeliveryRadioButtonSelected();
        checkoutPage.checkShipDeliveryOptionElementText('Shipping address');
        checkoutPage.clickOnPickUpDeliveryRadioButton();
        checkoutPage.waitForPickUpDeliveryRadioButtonSelected();
        checkoutPage.checkShipDeliveryOptionElementText('Pickup locations');
    });
})