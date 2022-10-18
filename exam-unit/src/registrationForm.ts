
export class RegistrationForm {
     constructor() {}

get invalidInputNameMessage() {
    return "Please, keep in minde, all characters should be only UpperCase letters";
   }

public getInvalidNamesLengthMessage(inputValueLength: number) {
    return `Please, provide Name with no more then ${inputValueLength} characters`;
  }

get lowerCaseAlphabet() {
    return (String.fromCharCode(...Array(123).keys()).slice(97)).split("");
   }

get upperCaseAlphabet() {
    return (String.fromCharCode(...Array(123).keys()).slice(65, 91)).split("");

   }

get numberValues() {
    return Array.from(Array(10).keys());
   }

get specialCharactersValues() {
    return (String.fromCharCode(...Array(123).keys()).slice(32, 48))
.concat(String.fromCharCode(...Array(123).keys()).slice(59, 65)).split("");
   }

public upperCaseCharactersValidation(inputValue: string) {
    let result;
    let resultsArray = [];
    for(let i = 0; i <= inputValue.split('').length - 1; i++) {
        result = this.upperCaseAlphabet.some((element) => {
            return element === inputValue[i];
          })
            if(result === true) {
            resultsArray.push(result); 
            }
        }   
    if(resultsArray.length === inputValue.length) {
        return true;
    } else {
        return this.invalidInputNameMessage;
    }
  }

public namesLengthValidation(inputValue: string, inputValueLength: number) {
    let result = inputValueLength;
    if(inputValue.split('').length <= inputValueLength) {
        return result;
    } else {
        return this.getInvalidNamesLengthMessage(inputValueLength)
    }
  }
}