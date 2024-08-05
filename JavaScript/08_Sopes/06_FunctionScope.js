// Exam of Function/Local Scope

// Local Scope
function localScope() {
    let x = 10;
    console.log("Local call", x); // Here X is available bec. we try to access it within the function
}
console.log("The value of X is", x); // X is not available here

// Calling the Function
localScope(); // X is available here at Function call


// function scope another with Var and let
function fun() {
    console.log("The Value of y is", y); // y is not available here
    var y = 20; // there will be not error only undefined
    // let y=20; // there will be error
    console.log("The value of y is", y); // z is not available here
}
fun(); // y is available here at Function call