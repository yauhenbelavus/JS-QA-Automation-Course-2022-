
class Car {                                                                      // task 1
    constructor(protected carName: string, protected engineType: string) {
     this.carName = carName;
     this.engineType = engineType;
 }
}

class SportCar extends Car {
    constructor(public maxSpeed: number, carName: string, engineType: string, public carCost: number,) {
        super(carName, engineType);
        this.maxSpeed = maxSpeed;
        this.carCost = carCost;
    }
    getText() {
       return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}` 
    }
}
class LuxuryCar extends Car {
    constructor(public maxSpeed: number, carName: string, engineType: string, public carCost: number,) {
        super(carName, engineType);
        this.maxSpeed = maxSpeed;
        this.carCost = carCost;
    }
    getText() {
       return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}` 
    }
}

let Masseratti = new SportCar(350, "Masseratti", "V8", 100000);
let Lexus = new LuxuryCar(250, "Lexus", "V6", 80000);
console.log(Masseratti.getText());
console.log(Lexus.getText());


  
function sayMyName() {                                            // task 2
    console.log(`My name is ${this.firstName}`);
}


let Man = {                                    
    firstName: "Alexander",
    secondName: "Petkevich",
    age: 30,
}

let Woman = {
    firstName: "Olga",
    secondName: "Korotkevich",
    age: 22,
}

let fn_1 = sayMyName.bind(Man);
fn_1();
sayMyName.call(Woman);


let Ford = {                  // task 3
   type: "car",
   doorsNumber: 3,
   wheelPosition: "left-hand",
   carInformation() {
    console.log(`This car has ${this.doorsNumber} doors and this is ${this.wheelPosition} drive car`);
  }
}


let Toyota = {
    type: "car",
}

function carInformation(doorsNumber: number, wheelPosition: string) {
   console.log(`This car has ${doorsNumber} doors and this is ${wheelPosition} drive car`);
}

Ford.carInformation();
carInformation.call(Ford, 3, "left-hand");
let fn_2 = carInformation.bind(Toyota, 5, "right-hand");
fn_2();