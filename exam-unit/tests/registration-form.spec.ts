import { emailInputForm } from "../src/emailInputForm";
import { userFirstNameForm } from "../src/userFirstNameForm";
import { userSecondNameForm } from "../src/userSecondNameForm";
import { firstNameLengthLimit, passwordMinLength } from "../helper/constants";
import { secondNameLengthLimit } from "../helper/constants";
import { expect } from "chai";
import { passwordForm } from "../src/passwordForm";

describe('Registration Form Testing', () => {
    describe('Positive testing', () => {
        it('Should accept "FirstUserName" value in upperCase', () => {
            expect(userFirstNameForm.userFirstNameFormValidation('POTASIUM')).to.be.true
        });
    
        it(`Should accept "FirstUserName" value in upperCase at max valid lenght in ${firstNameLengthLimit} characters`, () => {
            expect(userFirstNameForm.namesLengthValidation('POTASUIMCU', firstNameLengthLimit)).to.equal(firstNameLengthLimit);
        });
    
        it('Should accept "SecondUserName" value in upperCase', () => {
            expect(userSecondNameForm.userSecondNameFormValidation('CHLORID')).to.be.true
        });
    
        it(`Should accept "SecondUserName" value in upperCase at max valid lenght in ${secondNameLengthLimit} characters`, () => {
            expect(userFirstNameForm.namesLengthValidation('CHLORIDIUMSUM', secondNameLengthLimit)).to.equal(secondNameLengthLimit);
        });
    
        it('Should accept "E-mail" value', () => {
            expect(emailInputForm.emailInputFormValidation('belouszhenya@gmail.com')).to.be.true
        });

        it('Should accept "E-mail" value with upperCase and number ', () => {
            expect(emailInputForm.emailInputFormValidation('Belouszhenya86@gmail.com')).to.be.true
        });

        it('Should accept "Password" value with at least one special charachter, upperCase and number' , () => {
            expect(passwordForm.passwordFormValidation('45S&45f')).to.be.true
        });
    });
   
    describe('Negative testing', () => {
        it(`Should return error message: ${userFirstNameForm.invalidInputNameMessage} if "FirstUserName" value isn't in upperCase `, () => {
            expect(userFirstNameForm.userFirstNameFormValidation('POTAsIUM')).to.equal(userFirstNameForm.invalidInputNameMessage)
        });

        it(`Should return error message: ${userSecondNameForm.getInvalidNamesLengthMessage(secondNameLengthLimit)} if "SecondUserName" value length is ${secondNameLengthLimit + 1}`, () => {
            expect(userSecondNameForm.namesLengthValidation('CHLORIDIUMSUMA', secondNameLengthLimit)).to.equal(userSecondNameForm.getInvalidNamesLengthMessage(secondNameLengthLimit));
        });
    
        it(`Should return error message: ${emailInputForm.invalidEmailInputMessage} if "E-mail" value doesn't contain "@" symbol`, () => {
            expect(emailInputForm.emailInputFormValidation('belouszhenyagmail.com')).to.equal(emailInputForm.invalidEmailInputMessage);
        });

        it(`Should return error message: ${passwordForm.invalidPasswordLenghtMessage} if "Password" value is less then ${passwordMinLength}`, () => {
            expect(passwordForm.passwordLenghtValidation('82B@ssd', passwordMinLength)).to.equal(passwordForm.invalidPasswordLenghtMessage);
        });

        it(`Should return error message: ${passwordForm.passwordNoSpecialCharacterMessage} if "Password" value doesn't contain any special character`, () => {
            expect(passwordForm.passwordFormValidation('45Password')).equal(passwordForm.passwordNoSpecialCharacterMessage);
        });
    });
})