// Define a function with a rest parameter that accept items argument representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\n Making a Sandwich with the following items:\n");

     items.forEach(singleItem => console.log(singleItem));

     console.log("\nHow Enjoy sandwich");
    
}
// calling the function 3 times with 3 diffrent numbers of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Cheese", "Mayo", "Egg", "Chicken");

