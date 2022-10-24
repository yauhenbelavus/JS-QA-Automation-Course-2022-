import { Operation } from "../types";
import { calculator } from "./calculator";

export function checker(firstDigit: number, secondDigit: number, operation: Operation, result: number) {
    if (calculator(firstDigit, secondDigit, operation) === result) {
      console.log("Test passed");
    } else {
      console.log("Test failed!");
  }
}