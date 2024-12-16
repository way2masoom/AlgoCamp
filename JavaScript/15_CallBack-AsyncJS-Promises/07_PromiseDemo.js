// Promise Demo

// creating a new promise
const pr=new Promise((res,rej)=>{
    console.log("Executor callback trigger by promise constructor");
    for (let i = 0; i < 1000000; i++) {
        // some operation
    }
})


// Main code
console.log("Creating the promise Object");
console.log(pr);

