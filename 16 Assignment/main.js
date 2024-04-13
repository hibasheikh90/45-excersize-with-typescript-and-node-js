// Creating a Guest List Array
var guestList = ["Hiba", "Nimra", "laraib", "Haya"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "nhi ahh sakty hain");
// Add or remove value from guest list Array
guestList.splice(0, 1, "Amirr");
// Message print for Bigger table
console.log("Good news ! we have found a bigger table for dinner?.");
// Adding a new value at starting index off array
guestList.unshift("Hira");
//Adding a new value at ending index of array
guestList.push("Nayab");
//Get a middle index of our guest array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Kiran");
//Print message of updated list
console.log("Updated List of our guest");
//Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me ?")); });
