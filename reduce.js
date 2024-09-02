// const myNums = [1, 2, 3]
// const mytotal = myNums.reduce(function(acc, currval){
//     console.log(`acc:${acc} and currval: ${currval}`)
//     return acc + currval
// }, 3)
const mytotal = myNums.reduce((acc, currval) => acc + currval , 0)
console.log(mytotal);
const shoppingcart = [
    {
        itemname: "js course",
        price: 2323
    },
    {
        itemname: "py course",
        price: 2323
    },
    {
        itemname: "java course",
        price: 2323
    },
]

const peicetopay =shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(peicetopay);