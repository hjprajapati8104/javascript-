const promise1 = new Promise(function(resolve, reject){
    //do an async task
    //db calls,cryptography, network
    setTimeout(function(){
        console.log('Ásync task is complete');
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("promice consume");
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
    },1000)
}).then(function(){
    console.log("Async task 2 resolved");
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "happy", email: "happy@.com"})
    },100)
})
promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Happy", password: "123"})
        }
        else{
            reject('ERROR: Somethin want to wrong')
        }
    },1000)
})
const username = promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is resolve or rejected"));

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript", password: "123"})
        }
        else{
            reject('ERROR: js want to wrong')
        }
    },1000)
});
async function consumePromise5(){
    try{
        const response = await promise5
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromise5()

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = response.json()
        console.log(data);
    }
    catch(error){
        console.log("E:",error);
    }

}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))