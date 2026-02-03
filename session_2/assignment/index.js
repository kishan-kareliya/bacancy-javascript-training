// Assignment 1: Number Check
// Write a program to check whether a number is positive, negative or zero

let num = 0;

if (num > 0) {
    console.log("Positive");
}
else if (num < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

// Assignment 2: Even/Odd in Range
// Print numbers from 1 to 20 and show whether each is Even or Odd.
// Expected format:
// 1 -> Odd
// 2 -> Even
// 3 -> Odd

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " -> Even");
    }
    else {
        console.log(i + " -> Odd");
    }
}


// Assignment 3: Role Access using switch-case
// Create a variable role with values like:
// "ADMIN"
// "USER"
// "MANAGER"

// Print:
// ADMIN → Full access
// USER → Limited access
// MANAGER → Moderate access
// default → Invalid role

const role = "MANAGER";

const roleObj = {
    "ADMIN": "ADMIN -> Full access",
    "USER": "USER -> Limited access",
    "MANAGER": "MANAGER -> Moderate access"
};

console.log(roleObj[role])

// switch (role) {
//     case "ADMIN":
//         console.log("Full access");
//         break;
//     case "USER":
//         console.log("Limited access");
//         break;
//     case "MANAGER":
//         console.log("Moderate access");
//         break;
//     default:
//         console.log("Invalid role");
// }



// Assignment 4: Total Price Function
// Create a function:
//     calculateTotalPrice(price, quantity)
// Return total.
//     Example:
// console.log(calculateTotalPrice(150, 4)); // 600

function calculateTotalPrice(price, qty) {
    return price * qty;
}

console.log(calculateTotalPrice(150, 4));


// Assignment 5: Coupon Discount Function
// Create a function:
//     applyCoupon(amount, couponCode)
// Rules:
// "SAVE10" → 10 % discount
// "SAVE20" → 20 % discount
// "NONE" → no discount

// Example:
// console.log(applyCoupon(1000, "SAVE10")); // 900
// console.log(applyCoupon(2000, "SAVE20")); // 1600
// console.log(applyCoupon(500, "NONE"));    // 500

function applyCoupon(amount, couponCode) {
    let discountAmount;
    switch (couponCode) {
        case "SAVE10":
            discountAmount = amount - amount * 0.1;
            break;
        case "SAVE20":
            discountAmount = amount - amount * 0.2;
            break;
        default:
            discountAmount = amount;
    }
    return discountAmount;
}

console.log(applyCoupon(500, "SAVE10"));
console.log(applyCoupon(500, "SAVE20"));
console.log(applyCoupon(500, "NONE"));
