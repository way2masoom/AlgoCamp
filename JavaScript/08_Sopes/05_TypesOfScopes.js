// Types of Scope

// Global Scope
let x = 10;
function globalVariable() {
    console.log("Global call", x);
}

// another function
function anotherFunction() {
    for (let i = 0; i < 2; i++) {
        console.log("Another Function Call", x);
    }
}

// Calling the Function 
globalVariable();
anotherFunction();

console.log("The value of X is", x);