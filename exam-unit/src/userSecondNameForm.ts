import { secondNameLengthLimit } from "../helper/constants";
import { RegistrationForm } from "./registrationForm";

export class UserSecondNameForm extends RegistrationForm {
    constructor() {
        super()
    }

public userSecondNameFormValidation(userName: any) {
    let result;
    if(this.upperCaseCharactersValidation(userName) === true) {
        result = this.namesLengthValidation(userName, secondNameLengthLimit);
            if(typeof result === 'number') {
                return true
            } else {
                return this.getInvalidNamesLengthMessage(secondNameLengthLimit);
            }
    } else {
      return this.invalidInputNameMessage;
    }
  }
}
  
export const userSecondNameForm = new UserSecondNameForm(); 