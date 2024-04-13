let guestList = ["Hiba", "Nimra","Laraib","Haya"];

let dontCome = guestList[0];

console.log(dontCome, "nhi Ahh sakti");

guestList.splice(0, 1, "Hina");

guestList.forEach(guest => console.log(`Salam ${guest}, Would you like to dinner with me?`));