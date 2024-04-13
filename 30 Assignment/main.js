// creating a array 
var userNamae = ["Hiba", "Haya", "Admine", "Nayab", "Ayat"];
//using ForEach loop on array
userNamae.forEach(function (oneUser) {
    if (oneUser === "Admine") {
        console.log("Hello ".concat(oneUser, ", would You Like To See A Status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for logging  in again."));
    }
});
