// ToNumber
// working of - Subtract operator

// When performing the operation 1 - '2' in JavaScript, the engine first converts the string '2' 
// to the number 2 using the ToNumber operation, as subtraction requires both operands to be numbers. 
// Once the conversion is done, the subtraction takes place, resulting in 1 - 2, which equals -1. Therefore, 
// the final result of 1 - '2' is -1

console.log("working of - Subtract operator");

console.log(1-'2'); // 2 (strings converted to numbers)
console.log("10" - "5"); // 5 (strings converted to numbers)
console.log(true - false); // 1 (true is 1, false is 0)
console.log("10" - 2);    // 8 (string converted to number 10)
console.log(null - 1);    // -1 (null converts to 0)
console.log(undefined - 1); // NaN (undefined converts to NaN)

// working of + Plus operator

// When using the + operator in JavaScript, it behaves differently depending on the types of the operands.
//  If one operand is a string and the other is a number (or another type), ToPrimitive and 
//  ToString operations are applied. For example, in the case of 1 + '2', the number 1 is first converted 
//  to the string '1', and then the two strings are concatenated. 
//  As a result, 1 + '2' becomes '1' + '2', which equals '12'.
console.log("working of + Plus operator");
let result = 1 + '2';
console.log(result); // Output: '12'

// Here, the number 5 is converted to a string and concatenated with '10', 
// resulting in the string '510'.
let result1 = 5 + '10';
console.log(result1); // Output: '510'

