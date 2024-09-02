// let myName = "happy"
// let myChennal = "prajapati"
// console.log(myName.trueLength);


let myHero = ["thor", "spider"]
let heroPower = {
    thor: "hammer",
    spider: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spider}`);
    }
}
Object.prototype.happy = function(){
    console.log(`happy is present in the  object`);
}
Array.prototype.happy = function(){
    console.log(`happy says hello`);
}
//heroPower.happy()
myHero.happy()

//inheritance
const User = {
    name: "happy",
    email: "happy@,com"
}
const Teacher = {
    isavilable : false
}
const TeachingSupport = { 
    isavilable: false
}
const TAsupport = {
    makeAssignment: 'js assignment', 
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User

//morden syntex
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsename = "happy prajapati"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.lo(`true length is:${this.trim().length}`);
    
}
anotherUsename.trueLength()