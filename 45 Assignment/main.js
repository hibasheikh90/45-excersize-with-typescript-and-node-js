// Define a function to creat a car object with optional options...
function creat_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // add additionals option object to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object
var my_car = creat_car("Toyota", "Corrolla", "Color:Black", "Sunroof:True");
// print the variable  to ensure all the information is stored correctly in the car object
console.log(my_car);
