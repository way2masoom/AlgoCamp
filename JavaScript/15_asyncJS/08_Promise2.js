// Promise Demo

// creating a new promise
const pr = new Promise(function exes(res, rej) {
    console.log("Executor callback trigger by promise constructor");
    //Algorithm that executed 
    let randomNumber = Math.floor(Math.random() * 100)
    console.log(randomNumber);
    
    if (randomNumber % 2 === 0) {
        // randomNumber is even
        res();
    } else {
        // randomNumber is odd 
        rej();
    }
});


// Main code
console.log("Creating the promise Object");
console.log(pr);

