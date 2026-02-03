// Q13.Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
    .then(res => console.log("Result:", res))
    .catch(err => console.log("Caught:", err));

/*
    Output: Caught: Error 1 
    Promise.all take the array of promises so all must needed to all the promise being resolved if any of the promise is rejected then whole Promise.all block considered as rejected that's why it directly goes to catch block.
*/
