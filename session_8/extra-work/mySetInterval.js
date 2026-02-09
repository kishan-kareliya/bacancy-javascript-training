// Create a custom interval function that:
// Executes a callback
// Waits for the delay
// Schedules the next execution only after the current one finishes

function mySetInterval(cb, ms) {
    function tick() {
        setTimeout(() => {
            cb();
            tick();
        }, ms);
    }
    tick()
}

mySetInterval(() => {
    console.log("Hello World");
}, 2000)