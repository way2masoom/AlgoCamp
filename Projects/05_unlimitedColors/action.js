// All js code here

// function to generate random color
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[(Math.floor(Math.random() * 16))]
    }
    return color;
};

console.log(randomColor());


let intervalId; // to store the variable;

// To Start changing the color
const startChangingColor = function () {
    console.log("START");
    // continuous Changing the color 
     // Start the interval if it's not already running
    if(!intervalId){ 
        intervalId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

// To Stop changing the color

const stopChangingColor = function () {
    console.log("STOP");
    clearInterval(intervalId)
    intervalId = null;
}


// selecting the Start Button
document.querySelector('#start').addEventListener('click', startChangingColor);

// selecting the Stop Button
document.querySelector('#stop').addEventListener('click', stopChangingColor)