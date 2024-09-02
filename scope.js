let a =10
const b = 20
var c = 30

if(true){
    let a =10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "happy"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username = "happy"
    if(username === "happy"){
        const website = "youtube"
       // console.log(username + website);

    }
    //comsole.log(website);
}
//console.log(username);
console.log(addone(5))
function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
addTwo(5)      

const user = {
    username: "happy",
    price: 1222,
    

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);
