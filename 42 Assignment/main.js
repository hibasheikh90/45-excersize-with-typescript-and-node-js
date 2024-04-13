// Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_Great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array containig magician name
var magician_names = ["Harry Poter", "Hamdan", "Bilal"];
// calling function
var great_magician = make_Great(magician_names);
show_magicians(great_magician);
