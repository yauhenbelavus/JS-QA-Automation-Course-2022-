import { firstNameLengthLimit } from "../helper/constants";
import { RegistrationForm } from "./registrationForm";

export class UserFirstNameForm extends RegistrationForm {
    constructor() {
        super()
    }

public userFirstNameFormValidation(userName: any) {
    let result;
    if(this.upperCaseCharactersValidation(userName) === true) {
        result = this.namesLengthValidation(userName, firstNameLengthLimit)
              if(typeof result === 'number') {
                return true
              } else {
                return this.getInvalidNamesLengthMessage(firstNameLengthLimit);
              }
    } else {
      return this.invalidInputNameMessage;
    }
  }
}

export const userFirstNameForm = new UserFirstNameForm(); 