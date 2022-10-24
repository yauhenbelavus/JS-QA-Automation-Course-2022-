import { WebDriver } from "selenium-webdriver";
import { NoBarriersPage } from "../PageObjects/noBarriersPage";
import { HomePage } from "../PageObjects/homePage";
import { PAGES } from "../helpers/types";

export  class PageFactory {
    constructor() {}

    static getPage(driver: WebDriver, pageName: PAGES) {
        switch(pageName) {
            case PAGES.HOMEPAGE:
                return new HomePage(driver);
            case PAGES.NOBARRIERS:
                return new NoBarriersPage(driver);
            default: 
                return new HomePage(driver);
        }  
    }
}