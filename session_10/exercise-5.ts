// Assignment 5: Type Aliases
// Create reusable aliases for union and intersection types
// Observe how readability improves
// Create a type alias for string | number
// Use it in two variables
// How does this improve readability?

type ID = string | number;

let userId: ID = 101;
let orderId: ID = "ORDER-123";

/*

How does this improve readability?
reduce repetation because we don't need to write string | number every time we need to use it and also it gives more meaning to the code because we can easily understand that this variable is used for id and it can be either string or number

*/
