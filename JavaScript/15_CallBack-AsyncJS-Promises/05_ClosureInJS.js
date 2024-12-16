// Closure in Js
// A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment). 
// In other words, a closure gives a function access to its outer scope. 
// In JavaScript, closures are created every time a function is created, at function creation time.


function fun(c,d){
    let m=10;
    // another function 
    function gun(){
        console.log("The sum of m and c is =",m+c);
    }
    return gun;
}

// starting the code
const g=fun(5,10);
g(); // it's able to  access the function variable after executing is done by Closure