// const coding = ["js", "rb","py", "c++"] 
// const values = coding.forEach((item) => {
//     console.log(item);
// })
// console.log(values);
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num >4
// })

// const newNums = []
// myNums.forEach((num) => {
//     if (num >4){
//         newNums.push(num)
//     }
// })
//     console.log(newNums);


const books = [
    {title: 'book one', genre: 'fiction', publish: 1212, edition: 2333},
    {title: 'book two', genre: ' non fiction', publish: 1214, edition: 2388},
    {title: 'book three', genre: 'history', publish: 1216, edition: 6765},
    {title: 'book four', genre: 'non fictionon', publish: 1218, edition: 3455},
    {title: 'book five', genre: 'english', publish: 1213, edition: 7765},
];
let userBooks = books.filter((bk) => bk.genre ==='history')
userBooks = books.filter((bk) => { return bk.publish >=6000 && bk.genre === 'history'})
console.log(userBooks);
