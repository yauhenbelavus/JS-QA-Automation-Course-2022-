import { accountPage, imNotRobotPageUrl } from "../support/constans";
import { LoginPage } from "../pages/loginPage";

const loginPage = new LoginPage();

  describe('Rum Baba login actions', () => {
      beforeEach(() => {
        loginPage.visitPage();
      });
      
      it('Should open "I am not a robot" page after inputing invalid credentials', () => {
        loginPage.signInWithEmailValue();
        loginPage.waitForPageLoad(imNotRobotPageUrl);
      });

      it('Should open "Account" page after inputing valid credentials and clicking "Sing In" button', () => {
        loginPage.setLoginCredentials();
        loginPage.waitForPageLoad(accountPage);
      });
  });