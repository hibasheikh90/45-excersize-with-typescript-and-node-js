// Making A function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating A ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// Calling a Function with by default value 
make_shirt();
// calling A Function now with medium size and default message
make_shirt("medium");
// calling A Function now with small size and also print diffrent message
make_shirt("small", "I Love Javacript");
