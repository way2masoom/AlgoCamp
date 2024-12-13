// Generating a random value between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Selecting important DOM elements
const submit = document.querySelector('#subt'); // Submit button
const UserInput = document.querySelector('#guessField'); // Input field for user's guess
const guessSlot = document.querySelector('.guesses'); // Element to display previous guesses
const remaining = document.querySelector('.lastResult'); // Element to display remaining attempts
const lowOrhi = document.querySelector('.lowOrHi'); // Element to display feedback ("Too High" or "Too Low")
const startOver = document.querySelector('.resultParas'); // Container to append the "New Game" button

// Creating a new paragraph element to hold the "New Game" button
const p = document.createElement('p');

// Initializing variables
let prevGuess = []; // Stores all previous guesses
let numGuess = 1; // Tracks the number of guesses
let playGame = true; // Boolean to check if the game is still active

// Event listener for the submit button
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(); // Prevents the form from submitting
        const guess = parseInt(UserInput.value); // Convert user input to an integer
        console.log(guess); // Log the guess for debugging
        validateGuess(guess); // Pass the guess to the validation function
    });
}

// Function to validate the guess (check if it’s a valid number)
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('⚠️ Please Enter a Valid Number'); // Check if the input is not a number
    } else if (guess < 1) {
        alert('⚠️ Please Enter a Number Greater Than 1'); // Check if the input is less than 1
    } else if (guess > 100) {
        alert('⚠️ Please Enter a Number Less Than 100'); // Check if the input is greater than 100
    } else {
        prevGuess.push(guess); // Add the valid guess to the previous guesses array
        if (numGuess === 11) {
            // If the user has reached the maximum number of attempts
            displayGuess(guess); // Display the current guess
            displayMessage(`🔴 Game over. The Random Number was <span style="color: orange;">${randomNumber}</span>`); // Show game over message
            endGame(); // End the game
        } else {
            displayGuess(guess); // Display the current guess
            checkGuess(guess); // Check if the guess is correct or not
        }
    }
}

// Function to check if the user's guess is correct
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('<span style="color: green;">🎉 You Guessed It Right!</span>'); // Correct guess
        endGame(); // End the game
    } else if (guess < randomNumber) {
        displayMessage('<span style="color: orange;">Number is Too Low 📉</span>'); // Guess is too low
    } else if (guess > randomNumber) {
        displayMessage('<span style="color: orange;">Number is Too High 📈</span>'); // Guess is too high
    }
}

// Function to display the guess and update remaining attempts
function displayGuess(guess) {
    UserInput.value = ''; // Clear the input field
    guessSlot.innerHTML += `<span style="color: lightblue;">${guess}</span>,`; // Display the current guess
    numGuess++; // Increment the number of guesses
    remaining.innerHTML =  `<span style="color: yellow;">${11 - numGuess}</span>`;  // Update the remaining attempts
}

// Function to display a message (feedback or game result)
function displayMessage(messages) {
    lowOrhi.innerHTML = `<h3>${messages}</h3>`; // Update the message area with the feedback
}

// Function to end the game
function endGame() {
    UserInput.value = ''; // Clear the input field
    UserInput.setAttribute('disabled', ''); // Disable the input field
    p.classList.add('button'); // Add a class to the new paragraph for styling
    p.innerHTML = '<h2 id="newGame" style="color: orange; cursor: pointer;">🔄 Start New Game</h2>'; // Create the "New Game" button
    startOver.appendChild(p); // Append the "New Game" button to the container
    playGame = false; // Set the game state to inactive
    newGame(); // Call the newGame function to set up the restart
}

// Function to restart the game
function newGame() {
    const newGameBtn = document.querySelector('#newGame'); // Select the "New Game" button
    newGameBtn.addEventListener('click', function (e) {
        // Reset the game state
        randomNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
        prevGuess = []; // Clear previous guesses
        numGuess = 1; // Reset the guess count
        guessSlot.innerHTML = ''; // Clear the guess display
        remaining.innerHTML = `<span style="color: yellow;">${11 - numGuess}</span>`;; // Reset remaining attempts
        UserInput.removeAttribute('disabled'); // Enable the input field
        startOver.removeChild(p); // Remove the "New Game" button
        playGame = true; // Set the game state to active
    });
}
