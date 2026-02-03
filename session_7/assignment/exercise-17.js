// Q17. The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));

/*
    Output: Cleanup, Done
    finally block is used for cleanup task and it doesn't care about the return value inside the finally block it always passes the previous resolved value to the next then block that's why it print Done after Cleanup
*/