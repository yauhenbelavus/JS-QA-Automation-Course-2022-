
import assert from "assert";
import { Calculator } from "../src/calculator";
import { expect } from "chai";


const calc = new Calculator;
const FAIL_MESSAGE = "Test failed!";

describe("Math summ operations test", () => {
    it("should summ positive numbers correctly", () => {
      assert.equal(calc.sum(2, 3), 5, FAIL_MESSAGE);
    });
    it("should summ negative numbers correctly", () => {
      assert.equal(calc.sum(-2, -3), -5, FAIL_MESSAGE);
    });
    it("should summ positive numbers the same if place of numbers is changed", () => {
      assert.equal(calc.sum(3, 2), 5, FAIL_MESSAGE);
    });
    it("should summ negative numbers the same if place of numbers is changed", () => {
      assert.equal(calc.sum(-3, -2), -5, FAIL_MESSAGE);
    });
    it("should summ positive number and null correctly", () => {
      assert.equal(calc.sum(3, null), 3, FAIL_MESSAGE);
    });
    it("should summ negative number and null correctly", () => {
      assert.equal(calc.sum(-3, null), -3, FAIL_MESSAGE);
    });
})

describe("Math diff operations test", () => {
    it("should subtract positive numbers correctly", () => {
      expect(calc.diff(6, 5)).to.equal(1, FAIL_MESSAGE);
    });
    it("should subtract negative numbers correctly", () => {
      expect(calc.diff(-5, -5)).to.equal(0, FAIL_MESSAGE);
    });
    it("should subtract positive and negative numbers correctly", () => {
      expect(calc.diff(10, -10)).equal(20, FAIL_MESSAGE);
    });
    it("should subtract positive and negative numbers correctly if place of numbers is changed", () => {
      expect(calc.diff(-10, 10)).equal(-20, FAIL_MESSAGE);
    });
})
    
describe("Math multpl operations test", () => {
    it("should multiply positive numbers correctly", () => {
      assert.equal(calc.multpl(10, 20), 200, FAIL_MESSAGE);
    });
    it("should multiply negative numbers correctly", () => {
      assert.equal(calc.multpl(-2, -3), 6, FAIL_MESSAGE);
    });
    it("should multiply positive numbers the same if place of numbers is changed", () => {
      assert.equal(calc.multpl(20, 10), 200, FAIL_MESSAGE);
    });
    it("should multiply negative numbers the same if place of numbers is changed", () => {
      assert.equal(calc.multpl(-3, -2), 6, FAIL_MESSAGE);
    });
    it("should multiply positive and negative numbers correctly", () => {
      assert.equal(calc.multpl(5, -5), -25, FAIL_MESSAGE);
    });
    it("should multiply positive number and zero correctly", () => {
      assert.equal(calc.multpl(5, 0), 0, FAIL_MESSAGE);
    });
})

describe("Math div operations test", () => {
    it("should divide positive numbers correctly", () => {
      expect(calc.div(6, 6)).to.equal(1, FAIL_MESSAGE);
    });
    it("should divide negative numbers correctly", () => {
      expect(calc.div(-5, -5)).to.equal(1, FAIL_MESSAGE);
    });
    it("shouldn't divide positive number on zero", () => {
      expect(calc.div(10, 0)).to.equal(Infinity, FAIL_MESSAGE);
    });
    it("shouldn't divide negative number on zero", () => {
      expect(calc.div(-5, 0)).to.equal(-Infinity, FAIL_MESSAGE);
    });
})