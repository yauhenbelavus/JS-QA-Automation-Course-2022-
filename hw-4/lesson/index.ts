// function fooboo(flag: boolean, firstCb: Function, secondCb: Function): any {
//   return flag ? firstCb() : secondCb();
// }

// function foo() {
//   console.log("foo");
//   return "foo";
// }

// function boo() {
//   return console.log("boo");
// }

// fooboo(true, foo, boo); // вызов
// fooboo(true, boo, foo);

// function summ(a: number) {
//   return function (b: number) {
//     return a + b;
//   };
// }

// let result = summ(2);

// function click(button: string, cb: Function) {
//   // 1. он должен вытянуть id кнопки из нашей вёрстки
//   // 2. словить событие CLICK на этой кнопке
//   // 3. вызвать CB из параметра
//   let x = cb(); // pause
//   return x; //
// }

// click("add", () => {
//   // 1. выятнуть продукт который мы добавляем
//   // 2. добавить его в корзину
//   // 3. пересчитать сумму заказа
//   console.log("продукт добавлен");
// });
// click("remove", () => {
//   console.log("продукт удалён");
// });

// btn.addEventListner("click", () => {
//   console.log("мы кликнули");
// });
// btn.addEventListner("dbclick", () => {
//   console.log("мы кликнули два раза");
// });
type User = {
  name: string;
  age: number;
  nickname: string;
  isAdmin?: boolean;
  x?: number;
};

let user: User = {
  name: "asdsad",
  age: 10,
  nickname: "asdasdasd",
};

user.x = 20;
