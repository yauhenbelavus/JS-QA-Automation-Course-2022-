import { Calculator } from "../src/calculator";

const calc = new Calculator;

describe("Math summ operations test", () => {
   test("should summ positive numbers correctly", () => {
      expect(calc.sum(5, 5)).toBe(10);
   });
   test("should summ negative numbers correctly", () => {
      expect(calc.sum(-10, -10)).toEqual(-20);
   });
   test("should sum positive number and null correctly", () => {
      expect(calc.sum(5, null)).toBe(5);
   });
   test("should summ negative number and null correctly", () => {
      expect(calc.sum(-5, null)).toBe(-5);
   })
   test("should summ of floating numbers correctly", () => {
      expect(calc.sum(5.45, 5.45)).toBe(10.90);
   });
   test("should summ positive number and string correctly", () => {
      expect(calc.sum(5, "5")).toBe("55");
   });
})

describe("Math mltpl operations test", () => {
   test("should multiply positive numbers correctly", () => {
      expect(calc.multpl(2, 5)).toBe(10);
   });
   test("should multiply negative numbers correctly", () => {
      expect(calc.multpl(-10, -5)).toBe(50);
   });
   test("should multiply positive numbers the same if place of numbers is changed", () => {
      expect(calc.multpl(5, 2)).toBe(10);
   });
   test("should multiply negative numbers the same if place of numbers is changed", () => {
      expect(calc.multpl(-5, -10)).toBe(50);
   });
   test("should multiply positive and negative numbers correctly", () => {
      expect(calc.multpl(4, -4)).toBe(-16);
   });
   test("should multiply positive number and zero correctly", () => {
      expect(calc.multpl(4, 0)).toBe(0);
   });
})

describe("Math divide operations test", () => {
   test("should divide positive numbers correctly", () => {
      expect(calc.div(7, 7)).toBe(1);
   });
   test("should divide negative numbers correctly", () => {
      expect(calc.div(-7, -7)).toBe(1);
   });
   test("shouldn't divide positive number on zero", () => {
      expect(calc.div(25, 0)).toBe(Infinity);
   });
   test("shouldn't divide negative number on zero", () => {
      expect(calc.div(-20, 0)).toBe(-Infinity);
   });
})
describe("Math diff operations test", () => {
   test("should subtract positive numbers correctly", () => {
      expect(calc.diff(7, 7)).toBe(0);
   });
   test("should subtract negative numbers correctly", () => {
      expect(calc.diff(-7, -7)).toBe(0); 
   });
   test("should subtract positive and negative numbers correctly", () => {
      expect(calc.diff(7, -7)).toBe(14); 
   });
   test("should subtract positive and negative numbers correctly if place of numbers is changed", () => {
      expect(calc.diff(-7, 7)).toBe(-14); 
   });
})