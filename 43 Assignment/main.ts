// Define a function to print each magician name from an array

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}

function make_Great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);

}

// Define an array containig magician name

let magician_names = ["Harry Poter", "Hamdan", "Bilal"];

// Making a copy of original array through .slice() function

let copy_magician_names =  magician_names.slice()

//Modify the copied array to include "The Great" with their names

let copy_great_magicians = make_Great(copy_magician_names);

// Show boths arrys
// Original
console.log("Original Array\n")
show_magicians(magician_names);

//Copy
console.log("\n Copied Array")
show_magicians(copy_great_magicians);