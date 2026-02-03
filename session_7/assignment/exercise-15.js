// Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

/*
    Output: Caught Error 10
    Promise.resolve executed and directly goes to then block which throws error so after that it goes to catch block and where it print "Caught Error" and it return 10 which considered as Promise.resolve internally so that's why it goes to then block and it print 10.
*/
