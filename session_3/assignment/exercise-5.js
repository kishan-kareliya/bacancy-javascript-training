// Exercise 5: The "One-Liner" Chain
// Scenario: Combine both methods.
// Input: [-10, 20, 50, -5]
// Task:
// Filter out negative numbers.
// Map the remaining numbers to double them (x * 2).
// Expected Output: [40, 100]

let input = [-10, 20, 50, -5];
let result = input
    .filter((num) => {
        return num > 0;
    })
    .map((num) => {
        return num * 2;
    })
console.log(result);
