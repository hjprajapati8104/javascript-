// for loop
for(let i = 0; i <= 10; i++){
    const element = i;
    // if(element == 5){
    //     console.log("5 is best nu,ber")
    // }
    // console.log(element);
}
// console.log(element);;
for(let i = 1; i <= 10; i++){
    //console.log(`outer loop value: ${i}`);
    for(let j = 1; j <= 10; j++){
        //console.log(`inner loop value : ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + "=" + i*j);
    }
}
let myarray = ["flash", "batman", "superman"]
//console.log(myarray.length);
for(let index = 0; index <myarray.length; index++){
    const element = myarray[index];
    //console.log(element);
}

// break and continue
// for(let i = 0; i<=20; i++){
//     if(i ==5){
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }
for(let i = 0; i<=20; i++){
    if(i ==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);
}