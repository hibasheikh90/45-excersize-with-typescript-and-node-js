// Define a function to print each magician name from an array

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}

function make_Great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);

}

// Define an array containig magician name

let magician_names = ["Harry Poter", "Hamdan", "Bilal"]

// calling function

 let great_magician = make_Great(magician_names);

 show_magicians(great_magician);

 