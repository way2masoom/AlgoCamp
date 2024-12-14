// Example of a Higher-Order Function (HOF) and Callback in JavaScript

// // A simple callback function
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// // Higher-Order Function that takes a callback as an argument
// function processUserInput(fn) {
//     const name = prompt("Please enter your name.");
//     fn(name);
// }

// // Using the HOF with the callback
// processUserInput(greet);


// const arr = [1, 2, 3, 4, 5,]
//Here arr.map() is HOF(High order function) because It accepting fn() as Argument
//and fn is the callback function because it's passing as argument in the arr.map() function

// console.log(arr.map(function fn(x) {
//     return x = x * 2;
// }));

console.log("\nCreating own map function");

const arr = [1, 2, 3, 4, 5,]
// creating my on Map function
function myMap(arr, fn) {
    let result = [] // Create a new array to store the result
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i)); // here fn(arr[i],i) is array first element add i is the Index of the element
    }
    return result;
}

// calling the myMap function(HOF)
console.log(myMap(arr, function g(element) {
    return element ** 2;
}));





