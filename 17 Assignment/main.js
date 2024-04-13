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
// inform that only tow guests can be invited for dinner
console.log("Unfortunately, the new dinner table arrive on time, so i can invite only tow guests to dinner with me");
//using while loop to remove guest form the array until only to name remains
while (guestList.length > 2) {
    var removeguest = guestList.pop();
    console.log("Sorry, ".concat(removeguest, " i cant invite you to dinner"));
}
console.log("invitations to the last 2 guest");
//sanding a invitation to the last to guest on the list
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ", you are still invited to dinner")); });
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);
