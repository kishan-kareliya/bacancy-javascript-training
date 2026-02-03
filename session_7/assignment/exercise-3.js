// Q3. The Broken Chain

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));


/* 
    It prints "Error occured" because Promise.reject throws error that's why it directly goes to catch block.
*/