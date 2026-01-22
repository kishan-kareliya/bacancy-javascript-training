// 2. Identify why the following code throws an error and fix it without using the class keyword.

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function () {
    console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

// Intent: Dog should inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

myDog.bark(); // Why does this happen?
console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?

/*
    1. genericAnimal.bark() -> it works but fundamentally every animal shouldn't bark so the problem with this line Dog.prototype = Animal.prototype; where Dog prototype and Animal prototype pointing towards the same memory/location causing the same constructor share same prototype that's why when we add a new proto type method it add in the animal as well 

    2. console.log(myDog.constructor.name); -> same as above reason both pointing towards the same memory that's why when we console the myDog it actually shows the animal 
*/
