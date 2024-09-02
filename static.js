class User{
    constructor(){
        this.username = username
    }
    logMe(){
        console.log(`$ Username : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const happy = new User("happy")
//console.log(happy.createId())
class Teacher extends User{
    constructor(username, email){
        super(username)
        
        this.email = email
    }
}
const iphone = new Teacher("iphone", "iphone@gmail.com")
console.log(iphone.logMe());
