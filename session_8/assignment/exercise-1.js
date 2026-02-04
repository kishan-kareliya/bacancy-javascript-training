// Task 1: Predict Output of Async Code

// Objective
// Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.

// ### Requirements
// 1. Predict the output order for each code block
// 2. Run the code and compare with your prediction
// 3. Explain the execution order based on the event loop


// ### Code Block 1: Basic Async

console.log("1");

setTimeout(function () {
    console.log("2");
}, 0);

Promise.resolve().then(function () {
    console.log("3");
});

console.log("4");


// **Your Prediction (order):**
// Write the order you expect: 1, 4, 3, 2

// **Actual Output:**
// Run and write the actual order: 1, 4, 3, 2

// **Explanation:**
/*

console.log("1") goes to call stack and is executed first
setTimeout with 0 delay goes to macrotask queue and will be executed after the current call stack and microtasks are completed
Promise.resolve() goes to microtask queue and will be executed after the current call stack is empty
console.log("4") goes to call stack and is executed second
After the call stack is empty microtasks are executed next so console.log("3") is executed
then event loop checks macrotask queue and executes console.log("2") from setTimeout last

*/