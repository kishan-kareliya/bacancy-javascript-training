// Create a Promise that resolves with the number 5.
// Chain .then() to double the number, then another .then() to add 20, and finally log the result.

Promise.resolve(5)
    .then((result) => result * 2)
    .then((result) => result + 20)
    .then((result) => {
        console.log(result);
    })