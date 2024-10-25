//Write a Function to check that will take an argument 
// check the argument is NaN or not
// Number.isNaN(NaN)

function isArgumentNaN(value) {
    if (value === NaN) { // base condition 
    }
    return Number.isNaN(value);
}

console.log(isArgumentNaN(NaN));           // true
console.log(isArgumentNaN(10));            // false
console.log(isArgumentNaN("Hello"));       // false
console.log(isArgumentNaN(undefined));     // false
console.log(isArgumentNaN("NaN"));         // false
console.log(isArgumentNaN(0 / 0));         // true


// y=0
// to check -0 or +0 we used Object.is(y,-0) or Object.is(y,0)

let y = 0;
console.log(Object.is(y, -0)); // true if y is -0, false if it's +0
console.log(Object.is(y, 0));  // true if y is +0, false if it's -0
