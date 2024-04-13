// Define a function to creat a car object with optional options...

function creat_car(manufacturer, model, ...options){
    //initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // add additionals option object to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car [key.trim()] = value.trim();
    });

    return car;
}
// call the function to create a car object
let my_car = creat_car("Toyota", "Corrolla", "Color:Black", "Sunroof:True");

// print the variable  to ensure all the information is stored correctly in the car object

console.log(my_car);