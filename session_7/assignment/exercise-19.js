// Q19. Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

/*
    Output: End, P1, P2, T1, T2
    All the setTimout and Promise goes to the micro and macro task queue but the console.log("End") goes directly to call stack so it prints first then event loop picks up from microtask queue first so P1 prints and T2 goes to macrotask queue then P2 prints next then after microtask queue is empty event loop picks from macrotask queue and T1 prints and then T2 prints.
*/