const user = {
    username: "happy",
    loginCount: 9,

    getUserDetails: function(){
        //console.log("got user details from database")
        //console.log(`Usename: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const user1 = new User("happy", 12, true)
const user2 = new User("prajapati", 11, true)
console.log(user1.constructor);
console.log(user2.constructor);