// Implement a function mySetTimeout that delays execution of a callback without using setTimeout.

function mySetTimeout(cb, ms) {
    let start = Date.now();
    let end;
    do {
        end = Date.now();
    } while (!((end - start) > ms))
    cb();
}

mySetTimeout(() => {
    console.log("Hello World");
}, 1000);