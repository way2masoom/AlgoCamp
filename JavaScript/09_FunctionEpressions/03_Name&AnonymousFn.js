// Example of name function

// Program to find the factorial of the Array element

const arr = [1, 2, 3, 4, 5];
console.log(
    arr.map(function factorial(n) {
        if (n == 1) return 1;
        return n * factorial(n - 1);
    }));


const arr2 = [2, 4, 6, 8];
// Recursion function  || Anonymous function
function fact(n) {
    if (n == 1) return 1;
    return n * arguments.callee(n - 1);
}
console.log(arr2.map(fact));
