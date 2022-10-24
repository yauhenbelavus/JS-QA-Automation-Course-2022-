import { Given, When, Then } from "@wdio/cucumber-framework";
import { productPage } from "../pages/productPage";
import { costaRica, costaRicaPagePartUrl, productsPageUrl } from "../support/constants";
import { homePage } from "../pages/homePage";
import { expect } from "chai";

Given(/^the user opens "Homepage"$/, async () => {
    await homePage.visitPage();
});

When(/^the user clicks "Shop" button in header$/, async () => { 
    await homePage.header.clickOnShopButton();
});

Then(/^the user sees opened "Shop" page$/, async () => { 
    expect(await productPage.pageUrl).to.equal(productsPageUrl);
});

When(/^the user clicks "Search" button in header$/, async () => {
    await homePage.header.clickOnSearchButton();
});

Then(/^the user inserts product name in search input and press "Enter" button$/, async () => {
    await homePage.header.searchForProductName(costaRica);
});

Then(/^the user clicks on Product page link$/, async () => {
    await productPage.clickOnProductPageLink();
});

Then(/^the user sees opened Product page$/, async () => {
    await productPage.waitForPageLoad(costaRicaPagePartUrl);
});

When(/^the user clicks "Coffee" button in header$/, async () => {
    await homePage.header.clickOnCoffeeButton();   
});

Then(/^the user sees dropdown list of (.+) elements$/, async (elementsNumber: string) => {
    expect(await homePage.header.getVisibleElementsDropdownCount(+elementsNumber)).to.be.equal(+elementsNumber);
});