// Assignment 8: Typed Functions
// Write a function with required and optional parameters
// Define return types explicitly
// Create a small utility function that would exist in a real project
// Write a function with one required and one optional parameter
// Call it with and without the optional argument
// How does TypeScript enforce correctness here?

function printName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `Full Name: ${firstName} ${lastName}`;
  }
  return `First Name: ${firstName}`;
}

printName("Kishan", "kareliya");
printName("Kishan");
