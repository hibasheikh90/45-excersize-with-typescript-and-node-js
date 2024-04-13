// Define a function to print each magician name from an array

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}

// Define an array containig magician name

let magician_names = ["Harry Poter", "Hamdan", "Bilal"]

// calling function
show_magicians(magician_names);