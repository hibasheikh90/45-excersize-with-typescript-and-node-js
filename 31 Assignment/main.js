var userName = ["Hiba", "Haya", "Admine", "Nayab", "Ayat"];
userName = [];
if (userName.length === 0) {
    console.log("your array is empty we need to find some users!");
}
else {
    //using ForEach loop on array
    userName.forEach(function (oneUser) {
        if (oneUser === "Admine") {
            console.log("Hello ".concat(oneUser, ", would You Like To See A Status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thank you for logging  in again."));
        }
    });
}
