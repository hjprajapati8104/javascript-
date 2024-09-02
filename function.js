

function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");

}
//sayMyName()

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result;
    return number1 + number2

    //console.log(number1+number2);

}
const result = addTwoNumber(22, 22)
//console.log("Result:" , result)

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}
//console.log(loginUserMessage("happy"))
//console.log(loginUserMessage())

function calculateCartPrice(...num1){
        return num1
}
//console.log(calculateCartPrice(200, 400))
const user = {
    username: "happy",
    price: 1222
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 121
})

const myNewArray = [21,22,21,23,43]
function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(myNewArray));