function SetUserName(username){
    //complex DB calls
    this.username = username
    console.log("calld");
}
function createUser(username, email, password){
    SetUserName.call(this, username)

    this.email = email
    this.password = password
}
const a = new createUser("a", "a@.com", "123")
console.log(a);