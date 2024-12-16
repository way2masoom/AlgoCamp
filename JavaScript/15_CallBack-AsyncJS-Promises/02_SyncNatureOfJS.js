// JavaScript is a single-threaded, synchronous language by nature. 
// This means that it executes code line by line, one statement at a time. However, 
// JavaScript can also handle asynchronous operations using callbacks, promises, and async/await.

// Sync example
for (let i = 0; i < 10000000000; i++) {
    // some task
}

for (let i = 0; i < 1000; i++) {
    //some task
}
console.log("End");
