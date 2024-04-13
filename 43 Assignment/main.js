// Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_Great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array containig magician name
var magician_names = ["Harry Poter", "Hamdan", "Bilal"];
// Making a copy of original array through .slice() function
var copy_magician_names = magician_names.slice();
//Modify the copied array to include "The Great" with their names
var copy_great_magicians = make_Great(copy_magician_names);
// Show boths arrys
// Original
console.log("Original Array\n");
show_magicians(magician_names);
//Copy
console.log("\n Copied Array");
show_magicians(copy_great_magicians);
