// Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));

/*
    It print Fail and Recovered because Promise.reject directly goes to catch block which print the Fail msg and then after it return "Recovered" which considered as resolve value that's why it goes to then block which print the Recovered.
*/