// Write a utility that accepts an array of promises and returns a new promise that:
// Waits for all promises to finish
// Does not fail fast
// Returns the result of each promise with its status without using Promise.allSettled

function promiseAllSettled(promises) {
    return new Promise((resolve) => {
        let output = new Array(promises.length);
        let currResolved = 0;
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then((res) => {
                    output[i] = {
                        status: "fulfilled",
                        value: res
                    }
                })
                .catch((err) => {
                    output[i] = {
                        status: "rejected",
                        reason: err
                    }
                })
                .finally(() => {
                    currResolved++;
                    if (currResolved === promises.length) {
                        resolve(output);
                    }
                })
        }
    })
}

const slow = new Promise(res => setTimeout(() => res("slow"), 3000));
const fast = new Promise(res => setTimeout(() => res("fast"), 500));

promiseAllSettled([slow, fast]).then(console.log);




