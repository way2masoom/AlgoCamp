// Logical operators In JS

// Logical Operators in JavaScript

let x = true, y = false;

// Logical AND (&&) Operator
console.log("Logical AND (x && y):", x && y);
console.log("Logical AND (x && y):", x && x);
console.log("Logical AND (y && x):", y && x);



// Logical OR (||) Operator
console.log("Logical OR (x || y):", x || y);
console.log("Logical OR (x || x):", x || x);
console.log("Logical OR (y || y):", y || y);

// Logical NOT (!) Operator
console.log("Logical NOT (!x):", !x);
console.log("Logical NOT (!y):", !y);

// Combining logical operators
let a = 5, b = 10;
console.log("Combining logical operators (a > 0 && b < 15):", a > 0 && b < 15);
console.log("Combining logical operators (a > 0 || b < 5):", a > 0 || b < 5);
console.log("Combining logical operators (!(a < 0 && b > 5)):", !(a < 0 && b > 5));
