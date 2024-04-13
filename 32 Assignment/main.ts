//Array of current users
let current_users = ["Irtiza", "Kabeer", "Haya", "Hiba", "Miral", "Haya"];

//Arrat of new users
let new_users = ["Shayan", "Ayat", "Hiba", "Subhan", "irtiza"];

// loop through new_users to check  for usernames availablity

new_users.forEach(new_one_user =>{
  
    //making a conditon for user already exists and save in oue_conditon variable
     let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
     
     //print driffrent massege If.else statmentss
     if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
     }else{
        console.log(`This username ${new_one_user} is available`)
     }
})

