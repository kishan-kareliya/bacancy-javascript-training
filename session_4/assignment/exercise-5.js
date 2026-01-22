// 5. Trace the execution of this class logic.

class Counter {
    static count = 0;
    count = 10;

    constructor() {
        Counter.count++;
    }

    getCount() {
        return this.count;
    }

    static getStaticCount() {
        return this.count;
    }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount());        // 10
console.log(Counter.getStaticCount()); // 2
console.log(c1.getStaticCount());  // error

/*
    when the Counter class have two count variable one which is static and another one which is normal so when the constructor called when we create the object like c1, c2 the constructor called so it increment the static count incrementally so c1 constructor called the it's value is 1 then c2 constructor called it's value is 2.
    
    c1.getCount() method is non static method so it return 10 because it doesn't return static count because it is non static method and called via the object 

    Counter.getStaticCount() this method is static method so that it able to access the static counter and return it that's why it print the 2 and it is called via Counter class method

    c1.getStaticCount() this method throws an error because we can't call the static method with the help of the object static method only called via the class because static method belong to the class
*/
