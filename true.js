const userEmail = []
if(userEmail){
    console.log("email is valid")
}
else{
    console.log("dont have email")
}
//falsey value
//false, 0 , -0, BigInt 0n, "", null, undefined, NaN
//truethy value
// "0", 'false', " ", [], {}, function(){}
// if (userEmail.length === 0){
//     console.log("aray is empty");
// }
const emptyObj = {

}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}
//Nulish Coalescing operator(??):null undefined
let val1;
// val1 = 5?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10?? 20

console.log(val1);

//terniry operator
//condition ?? true : false
const icePrice = 100
icePrice >=80 ? console.log("less then 80") : console.log("more then 80")