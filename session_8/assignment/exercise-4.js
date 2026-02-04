// ### Code Block 4: Complex Async Chain

console.log("1");

setTimeout(function () {
    console.log("2");
}, 0);

queueMicrotask(function () {
    console.log("3");
});

Promise.resolve().then(function () {
    console.log("4");
    queueMicrotask(function () {
        console.log("5");
    });
});

setTimeout(function () {
    console.log("6");
}, 0);

console.log("7");


// **Your Prediction (order):**
// Write the order you expect: 1, 7, 3, 4, 5, 2, 6

// **Actual Output:**
// Run and write the actual order: 1, 7, 3, 4, 5, 2, 6

// **Explanation:**
/*

console.log("1") goes to call stack and is executed first
setTimeout with 0 delay goes to macrotask queue and will be executed after the current call stack and microtasks are completed
queueMicrotask goes to microtask queue and will be executed after the current call stack is empty
Promise.resolve() goes to microtask queue and will be executed after the current call stack is empty
console.log("7") goes to call stack and is executed second
After the call stack is empty microtasks are executed next so console.log("3") is executed
Then console.log("4") is executed from the Promise microtask then after that another queueMicrotask is created which goes to microtask queue which executes console.log("5")
Then event loop checks macrotask queue and executes the first setTimeout callback, so console.log("2") is executed then console.log("6") is executed last

*/