// Q9. Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));

/*
    It print 5 10 because Promise.resolve goes to first then block where val is being passed then it print 5 return with 5 + 5 = 10 then another then block prints it.
*/
