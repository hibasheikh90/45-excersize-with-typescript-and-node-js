var guestList = ["Hiba", "Nimra", "Laraib", "Haya"];
var dontCome = guestList[0];
console.log(dontCome, "nhi Ahh sakti");
guestList.splice(0, 1, "Hina");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would you like to dinner with me?")); });
