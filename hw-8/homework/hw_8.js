var FootballPlayer = /** @class */ (function () {
    function FootballPlayer(firstName, lastName, age, country, position, club) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.position = position;
        this.club = club;
    }
    FootballPlayer.prototype.transfer = function (newClub, newAge) {
        this.club = newClub;
        this.age = newAge;
    };
    Object.defineProperty(FootballPlayer.prototype, "GameStatus", {
        get: function () {
            return "Game Status: ".concat(this.club, ".").concat(this.position);
        },
        set: function (value) {
            value = "".concat(this.club, ".").concat(this.position);
        },
        enumerable: false,
        configurable: true
    });
    FootballPlayer.PROFESSION = "Athlete";
    return FootballPlayer;
}());
var Messi = new FootballPlayer("Lionel", "Messi", 34, "Argentina", "Forward", "Barcelona");
Messi.transfer("PSG", 35);
console.log(Messi);
console.log(Messi.GameStatus);
console.log(FootballPlayer.PROFESSION);
