// TypeScript Basics
// Create a variable prices as an array of numbers
// Write a function calculateTotal that:
// Accepts a number array
// Returns the total sum
// Write another function that:
// Accepts two numbers
// Returns a string if the result is greater than 100

const prices: number[] = [100, 120, 80, 160, 240, 50];

function calculateTotal(arr: number[]): number {
  return arr.reduce((acc, num) => (acc += num));
}

let ans: number = calculateTotal(prices);
console.log(ans);

function isGreaterThan100(num1: number, num2: number): string | number {
  return num1 + num2 > 100 ? "greater than 100" : num1 + num2;
}

let check = isGreaterThan100(40, 80);
console.log(check);
