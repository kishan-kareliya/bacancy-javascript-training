// ### Exercise 3: setTimeout with Clear
// **Task:** Create a countdown timer that counts from 10 to 0, then stops.

// TODO: Implement countdown function
function countDown(start) {
    for (let i = start; i >= 0; i--) {
        setTimeout(() => {
            console.log(i);
        }, (start - i) * 1000)

    }
}

countDown(10);

// Expected output:
// 10 (immediately)
// 9  (after 1 second)
// 8  (after 2 seconds)
// ...
// 0  (after 10 seconds)
