function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
//calling function
describe_city("Karachi");
describe_city("Quetta");
describe_city("Berlin", "Germany");
