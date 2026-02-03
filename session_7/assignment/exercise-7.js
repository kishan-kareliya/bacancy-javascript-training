// Q7. Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

/*
    It prints Start, End, Promise, Timeout because Start goes to call stack and directly execute then SetTimeout goes to MacroTaskQueue (Low Priority Queue) and Promise.resolve() goes to MicroTaskQueue (High Priority Queue) and then after console.log("End") goes directly to call stack that's why it print End then event loop pickup first from MicroTaskQueue and print Promise then MicroTaskQueue is empty then event loop pickup from the MacroTaskQueue and print Timeout
*/