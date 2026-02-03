// Q8. Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle();

/*
    It prints undefined because getTitle define using arrow function and arrow function take it parent lexical scope so in this case it take a global scope which doesn't have title so that's why it print undefined
*/
