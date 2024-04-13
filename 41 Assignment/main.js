// Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array containig magician name
var magician_names = ["Harry Poter", "Hamdan", "Bilal"];
// calling function
show_magicians(magician_names);
