// Логические операторы !, ||, &&

// || - должен быть хотябы один true

// && - стоп на первом false

// let x = true || !undefined || !"asdasd" || !"" || !10;

// циклы

// for (let i = 0; i < 20; i++) {
//   console.log(i);
// }

// let i = 20
// while(i < 20) {
//     console.log(i)
//     i++
// }

// let j = 20;
// do {
//   console.log(j);
// } while (j < 20);

// посчитать сумму чётных чисел до 100

// for (let start = 0; start <= 100; start++) {
//   if (start % 2 === 0) {
//     continue;
//   }
//   summ += start;
// }
// let summ = 0;
// let start = 0;
// while (start <= 100) {
//   if (start % 2 === 0) {
//     summ += start;
//   }
//   start++;
// }

// if (side == 'юг') {
//     console.log ("на юг пойдешь счастье найдешь");
// } else if ( side == 'север') {
//     console.log ("на север пойдешь много денег найдешь");
// } else if ( side == 'запад') {
//     console.log ("на запад пойдешь верного друга найдешь");
// } else if ( side == 'восток') {
//     console.log ("на восток пойдешь разработчиком станешь");
// } else {
// console.log ("Неверные данные, попробуйте еще раз");
// }
// let side = prompt("В какую сторону хотите пойти?", "").toLowerCase();

// switch (side) {
//   case "юг":
//     console.log("на юг пойдешь счастье найдешь");
//     break;
//   case "север":
//     console.log("на север пойдешь много денег найдешь");
//     break;
//   case "запад":
//     console.log("на запад пойдешь любовь найдешь");
//     break;
//   default:
//     console.log("Неверные данные, попробуйте еще раз");
// }
console.log(undefined + 1);
// "" + 1 + 0; // "10"
// "" - 1 + 0; // -1
// true + false; // 1
// 6 / "3"; 2
// "2" * "3"; 6
// 4 + 5 + "px"; 9px
// "$" + 4 + 5; $45
// "4" - 2; 2
// "4px" - 2; NaN
// "  -9  " + 5; "  -9  5"
// "  -9  " - 5; -14
// null + 1; 1 0
// undefined + 1; NaN
// "     " - 2; -2

// Типы данных и их методы

// набор одинаковых возможностей и функционала

// Если в строке нет приветствия, то сказать "как грубо!!!"
// "привет"

let question = "привет Скажи мне как получить информацию о ваших контактах!!!!";

if (!question.indexOf("привет")) {
  console.log("поздравойтесь со мной полиз");
}

// у меня есть список студентов в виде строки. Каждое имя сделдат с заглавной буквы

let studentStr = "владимир, елена, алина, ульяна, кирилл, виктория, светлана";

let studentList = studentStr.split(", "); // [владимир, елена, алина, ульяна, кирилл, виктория, светлана]
let resultString = "";
for (let index = 0; index < studentList.length; index++) {
  let name = studentList[index]; // 'владимир'
  name = name.charAt(0).toUpperCase() + name.slice(1); // 'Владимир'
  resultString += name + ", ";
}

console.log(resultString);

let number = 5.94545;

// Math - модуль, которые реализует работу с числами и алгербаические значения
console.log(Math.max(1, 123, 40));

Math.random() * 5; // 0 - 5

const date = new Date();
console.log(date.toLocaleString());
