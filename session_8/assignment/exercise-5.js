// Explain the execution order
// ### Code Block 5: Async/Await

console.log("Start");

async function asyncFunction() {
    console.log("Async 1");
    await Promise.resolve();
    console.log("Async 2");
}

asyncFunction();

Promise.resolve().then(function () {
    console.log("Promise 1");
});

setTimeout(function () {
    console.log("Timeout");
}, 0);

console.log("End");


// **Your Prediction (order):**
// Write the order you expect: Start, Async 1, End, Async 2, Promise 1, Timeout

// **Actual Output:**
// Run and write the actual order: Start, Async 1, End, Async 2, Promise 1, Timeout

// **Explanation:**
// Explain the execution order
/*

console.log("Start") goes to call stack and is executed first
asyncFunction() is called and goes to call stack
inside asyncFunction console.log("Async 1") is executed and after the await block the function pause and goes to microtask queue
Promise.resolve() goes to microtask queue setTimeout goes to macrotask queue
console.log("End") goes to call stack and is executed second
After the call stack is empty microtasks are executed next so console.log("Async 2") is executed from asyncFunction
Then console.log("Promise 1") is executed from the Promise microtask
Then event loop checks macrotask queue and executes console.log("Timeout") from setTimeout last


*/
