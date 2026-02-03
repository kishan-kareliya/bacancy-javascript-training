// Q11.The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

/*
    It print A, E, C, D, B because console.log all goes to call stack directly and executed it so A prints then setTimeout goes to macrotask queue and Promise goes to microtask queue and console.log("E") prints directly then event loop pickup from the first microtask queue and print C which another add new promise to microtask queue and execute that also then after microtask is being empty event loop pickup from macro task queue which prints B
*/

