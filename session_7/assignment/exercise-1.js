// Q1. Simple Object Context

const laptop = {
    brand: "Dell",
    getBrand: function () {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand);

/*
    It prints Dell because laptop.getBrand() function is being called and Dell value assigned to myBrand that's why myBrand prints Dell
*/
