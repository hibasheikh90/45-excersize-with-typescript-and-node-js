// Define variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = "10";
var twenty = "20";
var fruits = ["Apple", "Mango", "orange"];
// test for equality and inequality with string
console.log("is apple is equal to apple");
console.log(apple == "apple");
console.log("is apple not equal to apple");
console.log(apple != apple);
// test using lowercase faunction
console.log("\nis APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//numerical test
//not equal to
console.log("\nis ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\nis ten is not equal to twenty?");
console.log(ten != twenty);
//greater than
console.log("\nis ten is greater then zero?");
console.log(10 > 0);
//less than
console.log("\nis twenty is less than 10?");
console.log(twenty < ten);
//greater than or equal to
console.log("\nis ten is greater than or equal to 5?");
console.log(10 >= 5);
//less than or equal to
console.log("\ntwenty is less than or equal to 10?");
console.log(20 <= 10);
//tests using "and" & "or" oppraters
//using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != ten && twenty > ten);
console.log("\ntwenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != ten && twenty > ten);
//using || (or)
console.log("\n 20 is greater than 50 OR 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);
// Test wheather an item is include in array  
console.log("\n is orange include in my fruits array?");
console.log(fruits.includes("orange"));
console.log("\nis orange not include in my fruits array?");
console.log(!fruits.includes("orange"));
