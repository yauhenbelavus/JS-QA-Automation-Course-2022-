import { Given, When, Then } from "@wdio/cucumber-framework";
import { loginPage } from "../pages/loginPage";
import { imNotRobotPageUrl } from "../support/constants";

Given(/^the user opens "Login" page$/, async () => {
    await loginPage.visitPage();
});

When(/^the user inputs only email and clicks "Sign in" button$/, async () => { 
    await loginPage.signInWithEmailValue();
});

Then(/^the user sees opened "I'am not a robot" page$/, async () => { 
    await loginPage.waitForPageLoad(imNotRobotPageUrl);
});