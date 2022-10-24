// class People {
//   race: string;
//   static PULSE = 60;
//   static sleep() {
//     // человек закрывает глаза
//     // ложиться на бок
//     // глубокий вдох
//     // включаем функцию сновидений (random)
//   }
//   constructor(race: string) {
//     this.race = race;
//   }
//   startBreathe() {
//     console.log("BREATHER");
//   }
// }

// class User1 extends People {
//   // класс
//   firstName;
//   lastName;
//   constructor(firstName: string, lastName: string, race: string) {
//     super(race);
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   get fullname() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullname(value) {
//     const [firstName, lastName] = value.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   sayHi() {
//     return `Всем привет. Меня зовут ${this.fullname}`;
//   }

//   changeName(str: string) {
//     this.fullname = str;
//     console.log(this.firstName);
//     console.log(this.lastName);
//   }
// }

// let vitalij = new User1("Виталий", "Трунц", "Европеодная");
// vitalij.startBreathe();
