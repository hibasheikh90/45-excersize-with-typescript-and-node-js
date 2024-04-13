//Array of current users
var current_users = ["Irtiza", "Kabeer", "Haya", "Hiba", "Miral", "Haya"];
//Arrat of new users
var new_users = ["Shayan", "Ayat", "Hiba", "Subhan", "irtiza"];
// loop through new_users to check  for usernames availablity
new_users.forEach(function (new_one_user) {
    //making a conditon for user already exists and save in oue_conditon variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //print driffrent massege If.else statmentss
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
