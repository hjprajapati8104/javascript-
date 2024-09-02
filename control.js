// if 
//const isUserLoggedIn = true
const temperature =41
// if (temperature < 50){
//     console.log("less then 50")
// }
// else{
//     console.log("temperature is > 5000");
// }

// const score = 200;
// if (score > 100){
//     var power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


const balance = 1000
// if (balance > 500) console.log("test");
// console.log("test2");
// if (balance < 500){
//     console.log("less then 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard & 2==3){
    console.log("allow to by course")

}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}
