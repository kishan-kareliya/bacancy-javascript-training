// Assignment 2: any vs unknown
// Create a function that accepts any and performs operations without checks
// Create the same function using unknown and add proper type guards
// Compare the compiler behavior and runtime safety
// Create one variable using any
// Create another variable using unknown
// Try calling methods directly on both
// Which one forces you to write safer code?

// any function without checks
function procesAny(input: any) {
  console.log(input.toUpperCase()); // This will work if input is a string
}

// function using unknown and need to use type guards
function procesUnknown(input: unknown) {
  if (typeof input == "string") {
    console.log(input.toUpperCase());
  } else if (typeof input == "number") {
    console.log("Hurrah its a Number");
  }
}

// variable using any
const ip: any = "test string";

// variable using unknown
const unknownTest: unknown = 2;

procesAny(ip);
procesAny(unknownTest); //gives error because unknownTest is number that doesn't have toUpperCase() method

procesUnknown(ip);
procesUnknown(unknownTest);

//use unknown most of the time instead of any because that force to use typeguards
