import { costaRica } from '../support/constans';
import { ProductPage } from '../pages/productPage';
import { HomePage } from '../pages/homePage'
import { ShoppingCartPage } from '../pages/shoppingCartPage';
import { expect } from 'chai';

const productPage = new ProductPage();
const homePage = new HomePage();
const shoppingCartPage = new ShoppingCartPage();

describe('Rum Baba "Shopping Cart" Test', () => {
    before(() => {
        cy.intercept("GET", "https://rumbaba.nl/cart.json").as ("cart");
    })
    it('Should display "Your cart is empty" message after user clicks "Remove" Button', () => {
        homePage.visitPage();
        homePage.header.clickOnSearchButton();
        homePage.header.searchForProductName(costaRica);
        productPage.clickOnProductPageLink();
        productPage.clickOnAddToCartButton();
        productPage.clickOnViewMyCartButton();
        shoppingCartPage.clickOnRemoveButton();
        cy.wait("@cart").then(data => {
            expect(data.response?.statusCode).to.equal(200);
            expect(data.response?.body.items).to.have.length(0);
        });
        shoppingCartPage.checkEmptyCartMessageElementHasText("Your cart is empty");    
    });
});