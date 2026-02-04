// ## Task 2: setTimeout Examples

// ### Objective
// Complete and understand various setTimeout scenarios.
// ### Exercise 1: Basic setTimeout


// **Task:** Create a function that logs numbers 1 to 5, with a 1-second delay between each number.
// TODO: Implement countWithDelay function
function countWithDelay() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(`after ${i} seconds`);
        }, i * 1000);
    }
}

countWithDelay();

// ** Expected Output:**
// after 1 seconds
// after 2 seconds
// after 3 seconds
// after 4 seconds
// after 5 seconds
