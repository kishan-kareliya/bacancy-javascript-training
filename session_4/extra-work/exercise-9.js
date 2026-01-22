const proto = {
    x: 10,
    y: 20
};

const obj = Object.create(proto);

console.log(obj.x);       // 10
obj.x = 100;
console.log(obj.x);       // 100
console.log(obj.y);       // 20
console.log(obj.__proto__.x); // 10

delete obj.x;
console.log(obj.x);       // 10

/*  
    prototype chaining works when reading the data like if the x doesn't exist in the obj then it goes to it's parent that is x defined as 10 but when we modify the x then first javascript check that it doesn't exist on obj if not then write over there so it is shadowing and when read again it print the 100 because x define now in the obj it self same for y doesn't define go to the parent 

*/