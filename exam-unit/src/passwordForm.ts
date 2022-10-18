import { passwordMinLength } from "../helper/constants";
import { RegistrationForm } from "./registrationForm";

export class PasswordForm extends RegistrationForm {
    constructor() {
        super()
    }

get passwordNoUpperCaseMessage() {
    return "Password must contain at least one upperCase charachter";
    }

get passwordNoSpecialCharacterMessage() {
    return "Password must conatain at least one special charachter";
}

get passwordNoNumberMessage() {
    return "Password must conatain at least one number";
}

get invalidPasswordLenghtMessage() {
    return `Password must be at least ${passwordMinLength} symbols in lenght`;
}

public passwordFormUpperCaseValidation(passwordValue: string) {
        let result;
        let resultsArray = [];
        for(let i = 0; i <= passwordValue.split('').length - 1; i++) {
            result = this.upperCaseAlphabet.some((element) => {
                return element === passwordValue[i];
              })
                if(result === true) {
                resultsArray.push(result); 
                }
            }   
        if(resultsArray.length >= 1) {
            return true;
            }
       }

public passwordSpecialCharacterValidation(passwordValue: string) {
       let result;
       let resultsArray = [];
       for(let i = 0; i <= passwordValue.split('').length - 1; i++) {
            result = this.specialCharactersValues.some((element) => {
                return element === passwordValue[i];
              })
                if(result === true) {
                resultsArray.push(result); 
                }
            }   
        if(resultsArray.length >= 1) {
        return true;
            } 
       }

public passwordNumberValidation(passwordValue: string) {
        let result;
        let resultsArray = [];
        for(let i = 0; i <= passwordValue.split('').length - 1; i++) {
            result = this.numberValues.some((element) => {
                return (element) === Number(passwordValue[i]);
               })
                if(result === true) {
                resultsArray.push(result); 
                }
            }   
        if(resultsArray.length >= 1) {
         return true;
            } 
        }

public passwordLenghtValidation(passwordValue: string, passwordLength: number) {
       let result = passwordLength;
       if(passwordValue.split('').length >= passwordLength) {
            return result
       } else {
        return this.invalidPasswordLenghtMessage
       }
    }

public passwordFormValidation(passwordValue: string) {
       let passwordFormUpperCaseValidationResult = this.passwordFormUpperCaseValidation(passwordValue);
       let passwordSpecialCharacterValidationResult = this.passwordSpecialCharacterValidation(passwordValue);
       let passwordNumberValidation = this.passwordNumberValidation(passwordValue);

       if(passwordFormUpperCaseValidationResult && passwordSpecialCharacterValidationResult && passwordNumberValidation === true) {
           return true
       }
       else if(passwordFormUpperCaseValidationResult && passwordSpecialCharacterValidationResult === true) {
           return this.passwordNoNumberMessage;
       }
       else if(passwordFormUpperCaseValidationResult && passwordNumberValidation === true) {
           return this.passwordNoSpecialCharacterMessage;
       }
       else if(passwordNumberValidation && passwordSpecialCharacterValidationResult === true) {
            return this.passwordNoUpperCaseMessage; 
       }
    }
}
    
export const passwordForm = new PasswordForm();