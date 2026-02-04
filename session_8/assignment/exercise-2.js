// Explain the execution order
// ### Code Block 2: Nested Async

console.log("Start");

setTimeout(function () {
    console.log("Timeout 1");
    Promise.resolve().then(function () {
        console.log("Promise 1");
    });
}, 0);

Promise.resolve().then(function () {
    console.log("Promise 2");
    setTimeout(function () {
        console.log("Timeout 2");
    }, 0);
});

console.log("End");

// **Your Prediction (order):**
// Write the order you expect: Start, End, Promise 2, Timeout 1, Promise 1, Timeout 2

// **Actual Output:**
// Run and write the actual order: Start, End, Promise 2, Timeout 1, Promise 1, Timeout 2

// **Explanation:**
// Explain the execution order
/*

console.log("Start") goes to call stack and is executed first.
setTimeout with 0 delay goes to macrotask queue and will be executed after the current call stack and microtasks are completed
Promise.resolve() goes to microtask queue and will be executed after the current call stack is empty
console.log("End") goes to call stack and is executed second
After the call stack is empty microtasks are executed next so console.log("Promise 2") is executed
Inside this microtask another setTimeout is created which goes to macrotask queue.
Then event loop checks macrotask queue and executes the first setTimeout callback, so console.log("Timeout 1") is executed.
Inside this callback, a Promise is resolved which goes to microtask queue
After executing the macrotask, microtasks are checked and console.log("Promise 1") is executed next
Finally, the event loop checks the macrotask queue again and executes console.log("Timeout 2") from the second setTimeout last

*/


