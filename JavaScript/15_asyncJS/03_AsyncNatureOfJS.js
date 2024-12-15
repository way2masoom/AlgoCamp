//JavaScript is single-threaded, meaning it executes one command at a time. However, 
// it can handle asynchronous operations using callbacks, promises, and async/await. 
// This allows JavaScript to perform non-blocking operations, 
// such as fetching data from a server, while continuing to execute other code.
console.log("Start\n");

setTimeout(function f() {
    console.log("Hello");
}, 10);

setTimeout(function f() {
    console.log("wow");
}, 5);

let x = 0;
for (let i = 0; i < 100000000; i++) {
    x = x + 1;
}
console.log("End");