import { test } from '@playwright/test';
import { imNotRobotPageUrl } from "../src/support/constants";
import { LoginPage } from "../src/pages/loginPage";

let loginPage: LoginPage;

test.describe('Rum Baba login actions', async() => {
    test('Should open "I am not a robot" page after inputing invalid credentials', async ( {page} ) => {
        loginPage = new LoginPage(page);
        await loginPage.visitPage();
        await loginPage.signInWithEmailValue();
        await loginPage.waitForPageLoad(imNotRobotPageUrl);
    });
});