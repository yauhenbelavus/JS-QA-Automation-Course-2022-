import { expect } from "chai";
import { HomePage } from "../src/pages/homePage";
import { test } from '@playwright/test';
import { ProductPage } from "../src/pages/productPage";
import { costaRicaPageUrl, productsPageUrl, costaRica } from "../src/support/constants";

let homePage: HomePage;
let productPage: ProductPage;
const elementsNumber = 4;

test.describe('Rum Baba Header Actions', async() => {
    test.beforeEach(async ( {page} ) => {
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        await homePage.visitPage();
    });
    
    test('Should proceed to "Product" page after clicking "Shop" button in header', async () => {
        await homePage.header.clickOnShopButton();
        expect(productPage.pageUrl).to.equal(productsPageUrl);
    });

    test('Should provide search function using search input in header', async () => {
        await homePage.header.clickOnSearchButton();
        await homePage.header.searchForProductName(costaRica);
        await productPage.clickOnProductPageLink();
        await productPage.waitForPageLoad(costaRicaPageUrl);
    });

    test(`Should open dropdown list of ${elementsNumber} after user clicks "Coffee" button`, async () => { 
        await homePage.header.clickOnCoffeeButton(); 
        expect (await homePage.header.getVisibleElementsDropdownCount(elementsNumber)).to.be.equal(elementsNumber);  
    });
});