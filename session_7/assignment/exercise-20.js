// Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();

/*
    Output: Sarah
    Print is defined as arrow function so it take this from it's parent lexical scope which is the instance of Manager class so this.name prints Sarah it doesn't matter how the method is called
*/