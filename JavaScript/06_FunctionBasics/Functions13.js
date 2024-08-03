// In JavaScript,function are the first class citizens.
// In javascript, functions can be returned from a function and function can pass as argument to another function.

// Example 1
function somefunction() {
    // computation
    return function x() {
        // computation
        return 10;

    }

}

// example of passing function as argument to another function

function anotherfunction(f1) {
    // computation
    f1(); // we expect function here
    console.log("Called f1");

}

function hello() {
    console.log("Hello");
}

anotherfunction(hello); // function passed as argument to another function


