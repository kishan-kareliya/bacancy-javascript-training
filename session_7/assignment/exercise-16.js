// Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

/*
    Output: C, A, D, B
    C is logged first because it directly goes to the call stack then foo() is called which logs A then await block directly goes to microtask queue so D is logged next then after call stack is empty event loop picks up the await promise from microtask queue and logs B.
*/