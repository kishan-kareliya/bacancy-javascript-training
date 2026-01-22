// 3. Predict the result of the following execution.

function SmartPhone(brand) {
    this.brand = brand;

    return {
        brand: "Generic",
        os: "Android"
    };
}

SmartPhone.prototype.getBrand = function () {
    return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);    // Generic
console.log(myPhone.getBrand); // undefined

/*

    myPhone.brand -> it prints the Generic because when in the constructor of SmartPhone actually return the object so it actually return this but it passed the object instead of that so the instance actually able to access the object return by the constructor which is brand and os not the actual value passed as a arugment of the constructor because javascript ignore that basically return {} is override that.

    myPhone.getBrand -> it prints undefined because when we set the prototype method like getBrand it doesn't inherit SmartPhone.prototype because it didn't able to pass this that's why it doesn't work so getBrand function it self is undefined.

*/
