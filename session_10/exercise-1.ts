// Assignment 1: Type Inference
// Declare variables using let and const with initial values and observe inferred types
// Try reassigning incompatible values and note the compiler errors
// Write a function without a return type and inspect what TypeScript infers

let strs = "Hello";
const country = "India";
// country = "USA"; // Error: Cannot assign to 'country' because it is a constant.

console.log(typeof strs);
console.log(typeof country);

function add(a, b) {
  return a + b;
}

console.log(typeof add(5, 10));
console.log(typeof add("kishan", "kareliya"));
