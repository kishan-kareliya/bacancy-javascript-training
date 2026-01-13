## Assignment 1: Number Check

**Objective:**
Write a program to check whether a given number is:

- Positive
- Negative
- Zero

**Example Logic:**

- If number > 0 → Positive
- If number < 0 → Negative
- If number === 0 → Zero

---

## Assignment 2: Even/Odd in Range

**Objective:**
Print numbers from **1 to 20** and display whether each number is **Even** or **Odd**.

**Expected Output Format:**

```
1 -> Odd
2 -> Even
3 -> Odd
...
20 -> Even
```

**Hint:**
Use a loop and the modulus (`%`) operator.

---

## Assignment 3: Role Access using switch-case

**Objective:**
Create a variable `role` with possible values:

- `"ADMIN"`
- `"USER"`
- `"MANAGER"`

Use **switch-case** to print access levels.

**Output Rules:**

- `ADMIN` → Full access
- `USER` → Limited access
- `MANAGER` → Moderate access
- Default → Invalid role

---

## Assignment 4: Total Price Function

**Objective:**
Create a function:

```js
calculateTotalPrice(price, quantity);
```

The function should return the total price.

**Example:**

```js
console.log(calculateTotalPrice(150, 4)); // 600
```

---

## Assignment 5: Coupon Discount Function

**Objective:**
Create a function:

```js
applyCoupon(amount, couponCode);
```

### Coupon Rules:

- `"SAVE10"` → 10% discount
- `"SAVE20"` → 20% discount
- `"NONE"` → No discount

**Example Outputs:**

```js
console.log(applyCoupon(1000, "SAVE10")); // 900
console.log(applyCoupon(2000, "SAVE20")); // 1600
console.log(applyCoupon(500, "NONE")); // 500
```
