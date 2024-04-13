// creating a array 
let userNamae = ["Hiba", "Haya", "Admine", "Nayab", "Ayat"];

//using ForEach loop on array

userNamae.forEach(oneUser =>{
    if(oneUser === "Admine"){
        console.log(`Hello ${oneUser}, would You Like To See A Status report?`)
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging  in again.`)
    }
})