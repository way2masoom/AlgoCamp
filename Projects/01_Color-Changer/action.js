console.log("Hello Color changing page");
// Selecting all Buttons
const buttons = document.querySelectorAll('.button');

// It will give the nodeList of the colors
// console.log(buttons);

// selecting the body
const body = document.querySelector("body");

buttons.forEach(function (button) {
    console.log(button);

    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        // condition to change the body color
        if(e.target.id=='grey'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id=='white'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id=='blue'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id=='yellow'){
            body.style.backgroundColor=e.target.id;
        }
    })



});