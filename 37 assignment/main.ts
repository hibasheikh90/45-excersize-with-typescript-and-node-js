// Making A function
function make_shirt(size: string = "Large", printMessage: string = "I Love TypeScript"){
  console.log(`Creating A ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a Function with by default value 
 make_shirt();

 // calling A Function now with medium size and default message

 make_shirt("medium")

 // calling A Function now with small size and also print diffrent message

 make_shirt("small", "I Love Javacript")