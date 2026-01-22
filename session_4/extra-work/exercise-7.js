// Assignment 7: this + Arrow + Prototype

function Player(name) {
    this.name = name;
}

Player.prototype.intro = () => {
    return `Hi, I am ${this.name}`;
};

const p1 = new Player("Alex");

console.log(p1.intro()); // ?


// Why does this behave differently than a normal function?
// Where does this point exactly ?

/*
    it prints Hi I am undefined
    
    this behave different on normal function and arrow function so arrow function take it's parent lexical scope when the primitive value doesn't exist within arrow function it use scope chain and it define global scope so it points to global.name or window.name which is undefined 
*/