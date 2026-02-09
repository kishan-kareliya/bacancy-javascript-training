//  Create three functions step1, step2, and step3, each accepting a callback and completing after 1 second using setTimeout.
// Call them in sequence using nested callbacks.
// Log "All steps finished" only after step3 completes.

function setp1(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}
function step2(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}
function step3(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}
setp1(() => {
    console.log("Step-1 Completed");
    step2(() => {
        console.log("Step-2 Completed");
        step3(() => {
            console.log("Step-3 Completed");
            console.log("All step Completed");
        })
    })
})