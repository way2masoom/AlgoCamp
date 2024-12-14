//JavaScript is single-threaded, meaning it executes one command at a time. However, 
// it can handle asynchronous operations using callbacks, promises, and async/await. 
// This allows JavaScript to perform non-blocking operations, 
// such as fetching data from a server, while continuing to execute other code.
console.log("Start");

setTimeout(function f() {
    console.log("This is an asynchronous message");
}, 3000);

console.log("End");