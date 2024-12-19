// Function to through manualException
function manualException() {
    const randomNumber = Math.floor(Math.random() * 100)
    console.log(randomNumber);
    if (randomNumber % 2 === 0) {
        return randomNumber;
    } else {
        throw "RandomNumber is odd Number"
    }
}

// crating another function with try and cath to handel the error or throw 
function caller() {
    try {
        console.log("this is risky zone");
        const response = manualException();
        console.log("Risky code is working fine", response);
    } catch (execution) {
        console.log("bad Luck we are in catch");
        console.log(execution);
    }
}

// calling manual Exception function 
// manualException() // it will run the 'throw' method to through the Exception

// calling the caller function 
caller() // it will run the 'try' and 'catch' method to through the Exception