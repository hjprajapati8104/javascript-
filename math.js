const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

// console.log(Math.PI);
// Math.PI(5)
// console.log(Math.PI);
const aa = {
    name: 'most a',
    price: 121,
    isAvailable: true,

    orderaa: function(){
        console.log(
            "aa is np]ot most"
        );
        
    }
}
console.log(Object.getOwnPropertyDescriptor(aa,"name"));
    Object.defineProperty(aa, 'name',{
       //writable: false,
       enumerable: true,

 })
// console.log(Object.getOwnPropertyDescriptor(aa,"name"));

for (let [key, value] of Object.entries(aa)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
    
    
}