// ToBoolean Conversation 
// What happened in ToBoolean conversation
// The ToBoolean conversion in JavaScript is the process by which any 
// value is converted into a boolean (true or false). JavaScript classifies certain values as truthy or falsy. 
// This is primarily used by operations like the Logical NOT (!) operator.

// All Falsy Values
console.log(!false);  // true
console.log(!0);      // true (0 is falsy)
console.log(!"");     // true (empty string is falsy)
console.log(!null);   // true (null is falsy)
console.log(!undefined); // true (undefined is falsy)
console.log(!NaN);    // true (NaN is falsy)

// Rest other are Truthy Values
console.log(!{}); // false (Object{} is Truthy Value)
console.log(!"Hello"); // false (String is Truthy Value)
console.log(![]);     // false (empty array is truthy)


