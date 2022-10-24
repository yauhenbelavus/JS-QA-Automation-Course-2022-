"use strict";
// // рекурсия. Вызов функцией саму себя
// // base - основа рекурсии

// // Факториал 6! = 6 * (5 * 4 * 3 * 2 * 1)

function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

factorial(6);



// // 1. number == 6. 6 * factroial(5)
// // 2. number == 5. 5 * factroial(4)
// // 3. number == 4. 4 * factroial(3)
// // 4. number == 3. 3 * factroial(2)
// // 5. number == 2. 2 * factroial(1)
// // 6. number == 1. 1 * factroial(0)
// // 7 . nummber

// // Immediatly invoked function expression

// // возведение в степень через рекурсию!!!!

// function pow(number, base) {
//   return base ? number * pow(number, base - 1) : 1;
// }

// // pow(5, 3); // 125 = 5 * (5 * 5)
// сигнатура
// key - ключ, который является СТРОКОЙ!!!!!!!!!!!!!
// метод - это функция внутри объекта

// let shop = {
//   orange: 10,
//   banana: 40,
//   apple: 100,
// };
// let sum = 0;
// for (let prop in user) {
//   sum += user[prop];
// }

function fn() {
  if (!this) {
  }
  console.log(this);
}

// let obj = {
//   prop: 10,
// };
// obj.method = fn;

// fn(); // undefined
// obj.method();

// true || false -- true

// obj.method --

// КОНТЕКСТ ВЫЗОВА ФУНКЦИЙ!!!!! THIS
// контекст вызова - это объект в контексте которого вызвана функция
// КАК ФУНКЦИЯ ВЫЗВАНА
// функция вызвана как обычная функция!!!! fn() global | undefined
// функция-метод obj.method() this
// let user = {
//   // [key]: value
//   name: "Виталий",
//   lastName: "Трунц",
//   age: 24,
//   toString() {
//     return this.name + " " + this.lastName;
//   },
// };

// let user1 = user;
// user1.name = "Злата";
// user1.lastName = "Кутузова";
// console.log(user.toString());
// console.log(user1.toString());

// JSON - JAVASCRIPT OBJECT NOTATION
let user = {
  // [key]: value
  name: "Виталий",
  lastName: "Трунц",
  age: 24,
  toString() {
    return this.name + " " + this.lastName;
  },
};
let string = JSON.stringify(user);
console.log(string.name);
let obj = JSON.parse(string);
console.log(obj.name);
