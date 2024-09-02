class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const a =new Teacher("a", "a@gmail.com", "123")
a.addCourse()

const name = new User("namme")
name.logMe()
console.log (a === name);
console.log (a === Teacher);
console.log(a instanceof User);