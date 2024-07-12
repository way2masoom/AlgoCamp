// Short circuit in JavaScript using AND (&&)

console.log(10 && 30);     // Output: 30
// Explanation: Both values are truthy, so it returns the last truthy value (30).

console.log(0 && "");      // Output: 0
// Explanation: The first value (0) is falsy, so it returns 0 without evaluating the second value.

console.log(0 && 30);      // Output: 0
// Explanation: The first value (0) is falsy, so it returns 0 without evaluating the second value.

console.log(40 && null);   // Output: null
// Explanation: The first value (40) is truthy, so it evaluates the second value and returns null (falsy).

console.log("md" && 40);   // Output: 40
// Explanation: Both values are truthy, so it returns the last truthy value (40).



// Short circuit in JavaScript using OR (||)

console.log(10 || 30);     // Output: 10
// Explanation: The first value (10) is truthy, so it returns 10 without evaluating the second value.

console.log(0 || "");      // Output: ""
// Explanation: Both values are falsy, so it returns the last falsy value ("").

console.log(0 || 30);      // Output: 30
// Explanation: The first value (0) is falsy, so it returns the second value (30).

console.log(40 || null);   // Output: 40
// Explanation: The first value (40) is truthy, so it returns 40 without evaluating the second value.

console.log("md" || 40);   // Output: "md"
// Explanation: The first value ("md") is truthy, so it returns "md" without evaluating the second value.



// Logical NOT (!) Operator

console.log(!10);          // Output: false
// Explanation: The value (10) is truthy, so !10 returns false.

console.log(!0);           // Output: true
// Explanation: The value (0) is falsy, so !0 returns true.

console.log(!"md");        // Output: false
// Explanation: The value ("md") is truthy, so !"md" returns false.

console.log(!!"md");       // Output: true
// Explanation: !!"md" first converts "md" to a boolean (true), then negates it (false), and negates again (true).
