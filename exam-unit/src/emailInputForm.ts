import { RegistrationForm } from "./registrationForm";

export class EmailInputForm extends RegistrationForm {
    constructor() {
        super()
    }

get invalidEmailInputMessage() {
    return "Email doesn't contain such obligatory characters as '.' or '@'";
}

public emailInputFormValidation(inputValue: string) {
    let result;
    const validationArray = [".", "@"];
    let resultsArray = [];
    for(let i = 0; i <= inputValue.split('').length - 1; i++) {
          result = validationArray.some((element) => {
              return element === inputValue[i];
            })
                if(result === true) {
                resultsArray.push(result); 
                }
        }
    if(resultsArray.length == 2) {    
        return true;
    } else {
        return this.invalidEmailInputMessage;
    }
  }
}

export const emailInputForm = new EmailInputForm();