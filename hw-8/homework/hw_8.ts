

class FootballPlayer {
    firstName: string
    lastName: string
    age: number
    country: string
    position: string
    club: string
    static PROFESSION: string = "Athlete";

  constructor(firstName: string, lastName: string, age: number, country: string, position: string, club: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.position = position;
    this.club = club;
  }
  transfer(newClub: string, newAge: number) {
    this.club = newClub;
    this.age = newAge;
  }  
  get GameStatus() {
    return `Game Status: ${this.club}.${this.position}`;
  }
  set GameStatus(value: string) {
    value = `${this.club}.${this.position}`;
  }
} 


let Messi = new FootballPlayer("Lionel", "Messi", 34, "Argentina", "Forward", "Barcelona")


Messi.transfer("PSG", 35)
console.log(Messi)
console.log(Messi.GameStatus)
console.log(FootballPlayer.PROFESSION)