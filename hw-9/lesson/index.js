"use strict";
// class Appartament {
//   constructor(protected wallMaterial: string) {}
// }
// class Flat extends Appartament {
//   private _room: number = 20;
//   area: number;
//   constructor(room: number, area: number, wallMaterial: string) {
//     super(wallMaterial);
//     this._room = room;
//     this.area = area;
//   }
//   getArea() {
//     return this.area + "m^2";
//   }
//   setArea(value: number) {
//     this.area = value;
//   }
//   //   get room() {
//   //     return this._room;
//   //   }
//   //   set room(value) {
//   //     this._room = value;
//   //   }
// }
// const flat = new Flat(4, 40, "Кирпич");
// интерфейсы, абстрактные классы/методы, generic
// важен момент вызова функции !!!
// call, apply bind
var obj = {
    a: 10,
    method: function () {
        console.log(this);
    }
};
var fn = obj.method.bind(obj);
fn(); // undefined
