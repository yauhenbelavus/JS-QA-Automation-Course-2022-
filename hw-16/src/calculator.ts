import { Operation } from "../types";

export function calculator(firstDigit: number, secondDigit: number, operation: Operation) {
   switch (operation) {
     case "+":
       return firstDigit + secondDigit;
     case "-":
       return firstDigit - secondDigit;
     case "/":
       return firstDigit / secondDigit;
     case "*":
       return firstDigit * secondDigit;
 }
}