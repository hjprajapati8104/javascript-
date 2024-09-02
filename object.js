const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Happy",
            lastname: "Prajapati"
        }
    }
}
//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3= {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1, 
        email: "h@gmail.com",
    }
]


const users1 = [
    {
        id: 1,
        email: "h@gamil.com"
    }
]



ggf
console.log(tinderUser);
console.log(Object.keys(tinderUser))
oconsole.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    corsename: "js in hindi",
    price: "9999",
    courseInstructor: "happy"
}
//course. courseInstructor
//const {courseInstructor: instrctor} = course
//console.log(courseInstructor);
//console.log(instrctor);
//const navbar = ({company}) =>{
  //  navbar(company = "happy")
//}
// {
//     "name": "happy",
//     "coursename": "js in hindi",
//     "price": "free",
// }
[
    {}
]