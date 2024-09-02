const user = {

    username: "happy",
    price: 222,


    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this)
    }

}
//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "happy"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "happy"
//     console.log(this.username);
// }
// chai()
//arrow function..................
const chai = () =>{
    let username = "happy"
    console.log(this);
}
// chai()
// const addTwo =(num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// const addTwo =(num1, num2) =>  num1 + num2
//const addTwo =(num1, num2) =>  (num1 + num2)

const addTwo =(num1, num2) =>  ({username: "happy"})
console.log(addTwo(3, 4))

const myArray = [2,3,4,5,6]

myArray.forEach()