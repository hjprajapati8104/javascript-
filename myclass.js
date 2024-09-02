//ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encrtyptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const a =new User("a","a@gmail.com", "123")
console.log(a.encrtyptPassword());
console.log(a.changeUserName());

//behind the sence
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encrtyptPassword = function(){
     return `${this.password}abc`
}
const b =new User("b","a@gmail.com", "123")
console.log(b.encrtyptPassword());
