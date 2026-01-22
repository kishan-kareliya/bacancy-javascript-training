function Robot(name) {
    this.name = name;
}

const r1 = new Robot("R2D2");

// We add a method to the prototype AFTER creating the instance
Robot.prototype.beep = function () {
    console.log(this.name + " says Beep!");
};

// We completely overwrite the prototype
Robot.prototype = {
    boop: function () {
        console.log("Boop!");
    }
};

const r2 = new Robot("C3PO");

r1.beep();   // ?
r1.boop();   // ?
r2.beep();   // ?
r2.boop();   // ?

/*
    Here the Output: 
    r1.beep() -> prints R2D2 says Beep!
    r1.boop() -> throws error
    r2.beep() -> throws error
    r2.boop() -> prints Boop

    why this happened because the normal constructor function is defined as Robot then r1 object being created
    then Robot.prototype.beep function is being added to the same prototype object the object is modified now it actually have the name and as well as beep prototype method it doest overwrite it modified
    
    Robot.prototype = {} it actually create a new object and overwrite the existing prototype so r1 continues to point to the old prototype object and now any new object is created is added to this prototype address so when r2 object is created then it points to this new prototype which doesn't have name and beep() it only had boop() function that's why 

    r2.beep() throws an error and r2.boop() works.
*/