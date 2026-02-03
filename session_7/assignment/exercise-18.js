// Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;

/*
    Output: undefined, 10
    console.log(a) prints undefined because of variable hoisting where declaration goes to top of the scope but not the assign so it prints undefined Then Promise.resolve goes to the microtask queue and when event loop picks it up it prints 10 because by that time a is assigned with 10
*/