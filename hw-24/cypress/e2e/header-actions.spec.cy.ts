import { HomePage } from "../pages/homePage";
import { ProductPage } from "../pages/productPage";
import { productsPageUrl, costaRica, costaRicaPageUrl } from "../support/constans";
import { expect } from "chai";

const homePage = new HomePage();
const productPage = new ProductPage();
const elementsNumber = 4;

  describe('Rum Baba Header Actions', () => {
     beforeEach(() => {
        homePage.visitPage();
     });
     
     it('Should proceed to "Product" page after clicking "Shop" button in header', () => {
        homePage.header.clickOnShopButton();
        productPage.waitForPageLoad(productsPageUrl);
     });

     it('Should provide search function using search input in header', () => {
        homePage.header.clickOnSearchButton();
        homePage.header.searchForProductName(costaRica);
        productPage.clickOnProductPageLink();
        productPage.waitForPageLoad(costaRicaPageUrl);
     });

     it(`Should open dropdown list of ${elementsNumber} after user clicks "Coffee" button`, () => { 
        homePage.header.clickOnCoffeeButton(); 
        expect(homePage.header.getVisibleElementsDropdownCount(elementsNumber)).to.equal(elementsNumber); 
     });
 });