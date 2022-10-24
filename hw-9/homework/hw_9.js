var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(carName, engineType) {
        this.carName = carName;
        this.engineType = engineType;
        this.carName = carName;
        this.engineType = engineType;
    }
    return Car;
}());
var SportCar = /** @class */ (function (_super) {
    __extends(SportCar, _super);
    function SportCar(maxSpeed, carName, engineType, carCost) {
        var _this = _super.call(this, carName, engineType) || this;
        _this.maxSpeed = maxSpeed;
        _this.carCost = carCost;
        _this.maxSpeed = maxSpeed;
        _this.carCost = carCost;
        return _this;
    }
    SportCar.prototype.getText = function () {
        return "This is ".concat(this.carName, ". It has ").concat(this.engineType, " engine and max speed equal to ").concat(this.maxSpeed, ". Approximetly cost of the car is ").concat(this.carCost);
    };
    return SportCar;
}(Car));
var LuxuryCar = /** @class */ (function (_super) {
    __extends(LuxuryCar, _super);
    function LuxuryCar(maxSpeed, carName, engineType, carCost) {
        var _this = _super.call(this, carName, engineType) || this;
        _this.maxSpeed = maxSpeed;
        _this.carCost = carCost;
        _this.maxSpeed = maxSpeed;
        _this.carCost = carCost;
        return _this;
    }
    LuxuryCar.prototype.getText = function () {
        return "This is ".concat(this.carName, ". It has ").concat(this.engineType, " engine and max speed equal to ").concat(this.maxSpeed, ". Approximetly cost of the car is ").concat(this.carCost);
    };
    return LuxuryCar;
}(Car));
var Masseratti = new SportCar(350, "Masseratti", "V8", 100000);
var Lexus = new LuxuryCar(250, "Lexus", "V6", 80000);
console.log(Masseratti.getText());
console.log(Lexus.getText());
function sayMyName() {
    console.log("My name is ".concat(this.firstName));
}
var Man = {
    firstName: "Alexander",
    secondName: "Petkevich",
    age: 30
};
var Woman = {
    firstName: "Olga",
    secondName: "Korotkevich",
    age: 22
};
var fn_1 = sayMyName.bind(Man);
fn_1();
sayMyName.call(Woman);
var Ford = {
    type: "car",
    doorsNumber: 3,
    wheelPosition: "left-hand",
    carInformation: function () {
        console.log("This car has ".concat(this.doorsNumber, " doors and this is ").concat(this.wheelPosition, " drive car"));
    }
};
var Toyota = {
    type: "car"
};
function carInformation(doorsNumber, wheelPosition) {
    console.log("This car has ".concat(doorsNumber, " doors and this is ").concat(wheelPosition, " drive car"));
}
Ford.carInformation();
carInformation.call(Ford, 3, "left-hand");
var fn_2 = carInformation.bind(Toyota, 5, "right-hand");
fn_2();
