// Q2. Basic Promise Flow

console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);

/* 
    it prints console.log 1, 3, 2 because promise goes to micro task queue and console goes directly call stack that's why it prints 1 and 3 then after call stack is being empty and event loop pickup from the microtask queue and run on callstack
*/
