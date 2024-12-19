// Creating a Exception in js
function manualException() {
    const randomNumber = Math.floor(Math.random() * 100)
    console.log(randomNumber);
    if (randomNumber % 2 === 0) {
        // randomNumber is even 
        return randomNumber
    } else {
        throw "RandomNumber is odd";
    }
}

// calling the random Number
manualException()