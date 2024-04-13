// making a Array of countries and print its original order
let countriestovisit: String[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("original order:", countriestovisit);

// Print the Arrey in Alphabetical order without modifying the actual arrey list
console.log("Alphabetical order:", [...countriestovisit].sort());

// Show that the arrey is still in its orignal order
console.log("Still in orignal order:", countriestovisit);

// Print the Arrey in Reversed order without modifying the Actual arrey list
console.log("Reverse order:", [...countriestovisit].reverse());

// show that the arrey is still in its orignal order
console.log("Still in orignal order:", countriestovisit);

// We have changed the orignal arrey order now
console.log("orignal arrey Reversed:", countriestovisit.reverse());

// Print the arrey to show that its back to its orignal order
console.log("Back to orignal order:",countriestovisit.reverse());

// Print the arrey to show that its order has been changed in Alphabetical order now
console.log("shorted in Alphabetical order:", countriestovisit.sort());

// We have changed again the orignal arrey order now in reverse order again
console.log("orignal arrey reversed again:",countriestovisit.reverse());



