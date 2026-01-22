// Assignment 8: Prototype Pollution

Object.prototype.power = "infinite";

const obj = {};
const arr = [];

console.log(obj.power); // ?
console.log(arr.power); // ?
console.log("power" in arr); // ?


// Explain prototype lookup order
// Why is this dangerous in real apps?

/*
    obj.power -> infinite
    arr.power -> infinite
    "power" in arr -> true

    obj.power prints the infinite because prototype lookup order is that object and array is being prototype with the Object.prototype so Object.prototype by default had a many inbuilt methods like map filter reduce toString and so on so when we define the arr.map() it passed through prototype chaining like first it check that it exist in the arr itself it doesn't then it goes to it parent class which is Object and Object parent is null so it goes through this chaining 

    so by default objects and array is inherit the method from the Object class and the move forward to parent and it's parent class to find out the method that is knows as prototype chaining
*/