// Create a function wait(ms) that returns a Promise and resolves after ms milliseconds using setTimeout.
// Use it to log "2 seconds passed" after 2000 ms.

function wait(ms) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(console.log(`${ms / 1000} seconds passed`));
        }, ms);
    })
}
const output = await wait(2000);

