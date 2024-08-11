// Example of IIFE Function
// IIFE are very useful to avoid name conflict bec, the don't conflict those variable which are in the outer scope

// Square of Number By Rohit
function sqrt(x){
    return x*x;
};

// IIFE - Immediately Invoked Function Expression
// Square of Number By MD, which will run only once || temporary function
var x=10;
(function sqrt(x){
    return x*x;
})(10);

// Once we call IIFE function we can't call it another time
console.log("Square of the number By IIFE function ",x); // 10 

// Calling the function
const rohitFun=sqrt(20);
console.log("Square of the number By Rohit function ",rohitFun); // 10

