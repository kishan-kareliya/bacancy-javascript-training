// Assignment 7: Enums
// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
// Write a function that accepts only this enum
// Try passing an invalid value and observe the error
// Why enums are better than magic strings?

enum PaymentState {
  INITIATED = "INITIATED",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

function processPayment(state: PaymentState) {
  switch (state) {
    case PaymentState.INITIATED:
      console.log("Payment initiated.");
      break;
    case PaymentState.SUCCESS:
      console.log("Payment success.");
      break;
    case PaymentState.FAILED:
      console.log("Payment failed.");
      break;
  }
}

processPayment(PaymentState.INITIATED);
processPayment(PaymentState.SUCCESS);
processPayment(PaymentState.FAILED);
// processPayment("SUCCESS"); // This will give a compile-time error

/*

Why enums are better than magic strings?

enum is better than magic strings because it easier to understand the intent of the code. enums can be easily refactored and provide better type safety compared to using plain strings, which can lead to runtime errors if not handled correctly.

*/
