// Example of name function

// Program to find the factorial of the Array element

const arr=[1,2,3,4,5];
arr.map(function factorial(n){
    if(n==1) return 1;
    return n*factorial(n-1);
});


// Recursion function 
function fact(n){
    if(n=1) return 1;
return n*fact(n-1);
}
console.log(arr.map(fact));
