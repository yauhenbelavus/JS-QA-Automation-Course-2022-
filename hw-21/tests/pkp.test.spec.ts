import { Builder, Capabilities, WebDriver } from "selenium-webdriver";
import { PAGES } from "../helpers/types";
import { expect } from "chai";
import { PageFactory } from "../PageFactory/pageFactory";
import { NoBarriersPage } from "../PageObjects/noBarriersPage";
import { HomePage } from "../PageObjects/homePage";

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

const homePage = PageFactory.getPage(driver, PAGES.HOMEPAGE) as HomePage;
const noBarriersPage = PageFactory.getPage(driver, PAGES.NOBARRIERS) as NoBarriersPage;

describe("PKP UI Test", () => {
    before(async () => {
        await homePage.maximizeWindow();
        await homePage.visitPage();
    });

    it("Should open all pages one by one from homepage by clicking buttons in header", 
      async () => {
        await homePage.acceptCookies();
        const buttonsNumber = 7;
        const visitedPagesNumber = await homePage.openNewPageClickingNavigationButton(buttonsNumber);
        expect(visitedPagesNumber).to.be.equal(buttonsNumber);
    });
    
    it("Should expand dropdown by pointing at 'Dworce' button",
      async () => {
        const numberOfDropDownElements = 8
        const getDworceDropdownResult = await homePage.getStationsDropdownCountAndVisibility(numberOfDropDownElements);
        const [dropDownVisibility, numberOfVisibleElements] = getDworceDropdownResult;
        expect(dropDownVisibility).to.be.true;
        expect(numberOfVisibleElements).to.be.equal(numberOfDropDownElements); 
    });

    it("Should open the same page by clicking different buttons 'Kup bilet'",
      async () => {
        await homePage.refreshPage();
        await homePage.getKupBiletPageByClickingHeaderButton();
        const headerButtonResultPage = await homePage.getPageTitle();
        await homePage.navigatePageBack();
        await homePage.getKupBiletPageByClickingBodyButton();
        const bodyButtonResultPage = await homePage.getPageTitle();
        expect (headerButtonResultPage).to.be.equal(bodyButtonResultPage);
    });

    it("Should display alert message if click 'Pokaż' button while search box is empty",
      async () => {
        await noBarriersPage.visitPage();
        const expectedAlertMessage = await noBarriersPage.acceptSearchErrorAlertAndGetItsText();
        const defaultAlertMessage = "Nazwa dworca musi zawierać co najmniej 3 znaki!!!";
        expect(expectedAlertMessage).to.be.equal(defaultAlertMessage);
    });

    it("Should display railway station address as the result of search process",
      async () => {
        await noBarriersPage.searchFor("Kraków");
        expect(await (await noBarriersPage.getStationInformationElement()).isDisplayed()).to.be.true                
    });

    after(async () => {
        await noBarriersPage.quitBrowser();
    });
}) 