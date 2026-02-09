// Create a function tossCoin() that returns a Promise.
// Resolve with "Heads" if a random number is greater than 0.5, otherwise reject with "Tails".
// Consume the promise using .then() and .catch().

async function tossCoin() {
    return new Promise((res, rej) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            res("Heads");
        } else {
            rej("Tail");
        }

    })
}
tossCoin().then((result) => {
    console.log(result);

}).catch((result) => {
    console.log(result);

})
