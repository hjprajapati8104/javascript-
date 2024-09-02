const coding = ["js", "rb","py", "c++"] 
// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js",
    },
    {
        languagename: "python",
        languagefilename: "py",
    },
    {
        languagename: "ruby",
        languagefilename: "rb",
    }
]
mycoding.forEach((item) => {
    console.log(item.languagename);
})