// ### Code Block 3: Multiple Microtasks


console.log("A");

Promise.resolve().then(function () {
    console.log("B");
    Promise.resolve().then(function () {
        console.log("C");
    });
    console.log("D");
});

Promise.resolve().then(function () {
    console.log("E");
});

setTimeout(function () {
    console.log("F");
}, 0);

console.log("G");


// **Your Prediction (order):**
// Write the order you expect: A, G, B, D, E, C, F


// **Actual Output:**
// Run and write the actual order: A, G, B, D, E, C, F


// **Explanation:**
// Explain the execution order
/*

console.log("A") goes to call stack and is executed first
Promise.resolve() goes to microtask queue and will be executed after the current call stack is empty
console.log("G") goes to call stack and is executed second
Inside the first microtask console.log("B") is executed
Inside the first microtask another Promise is created which goes to microtask queue
console.log("D") is executed next inside the first microtask
Inside the second microtask console.log("C") is executed
Promise.resolve() goes to microtask queue and will be executed after all previous microtasks are completed
console.log("E") is executed next inside the second microtask
setTimeout with 0 delay goes to macrotask queue and will be executed after all microtasks are completed
console.log("F") is executed last when setTimeout callback runs

*/