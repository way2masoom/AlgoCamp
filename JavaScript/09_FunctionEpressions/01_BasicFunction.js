// Basic Function and their Types of function Declaration


// Example 1
// Function Declaration
function fun(){ //named function expression
    x=10;
    console.log("Example One ",x); 
}
fun(); // function call


// Example 2
const myFun=function(x){  // anonymous function expression
    console.log(x);
}
myFun("Example two ",20); // function call


// Example 3
const myFun2=()=>{ // arrow function / arrow function expression
    console.log("Example three");
}
myFun2(); // function call


// Example 4
(function fun(x) { // IIFE - Immediately invoked function expression
    console.log("Example four", x);
   })(30)