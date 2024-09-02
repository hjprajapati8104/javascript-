//immidiatly invoked function expression
(function chai(){
    //named iife
    console.log('DB CONNECTED');
})();
// chai()

( (name) => {
    console.log(`DB connected two ${name}`);
})('happy');
