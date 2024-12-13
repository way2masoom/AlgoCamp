// Displaying the time in real-time
console.log("Displaying time");

// Select the element where the clock will be displayed
const clock = document.getElementById('clock');

// Displaying the time in the console
// let date=new Date();
// console.log(date.toLocaleTimeString());

// Function to update the time every second
setInterval(function () {
    // Create a new Date object to get the current time
    let date = new Date();

    // Convert the current time to a localized string format (e.g., HH:MM:SS)
    // and update the clock element's innerHTML with this time
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); // Set the interval to 1000 milliseconds (1 second)
