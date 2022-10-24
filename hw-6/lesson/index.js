"use strict";
// Мы на футбольном матче, счет забитых голов одной команды не может превышать
// 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо
// это вывести в консоль словами. Давайте напишем программу которая будет за нас
// переводить формат и выводить результат в консоль.
//   ----УТОЧНИТЬ
var numList = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
};
function convertCount(num) {
    // let a;
    // let b;
    // for (let key in numList) {
    //   if (num1 == key) a = numList[key];
    //   if (num2 == key) b = numList[key];
    // }
    // console.log(a, b);
    return numList[num];
}
function showCount(str) {
    var numberArray = str.split(":");
    for (var i = 0; i < numberArray.length - 1; i++) {
        convertCount(numberArray[i]);
    }
    return "";
}
