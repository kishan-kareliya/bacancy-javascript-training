// Q5. Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));


/*
    It prints 10 * 2 = 20 because the promise is being resolved and it goes to first then block which multiply with 2 then that number goes to other then block which prints 20. 
*/

