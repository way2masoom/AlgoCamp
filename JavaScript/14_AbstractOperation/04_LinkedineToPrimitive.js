// Question as in linkedin Using ToPrimitive
// Given :
/*  function fun(){ } 
and Sting "My Function is "

*/

// You have to Display this as 
// "My Function is  fun"


// Function
f=function fun() {

}

// String
x="My Function is";
// Displaying the function and sting together 
console.log(x+f);

console.log("Type of F: ",typeof(f));
console.log("toSting of F : ",f.toString());

// now overrating the fun 
f.toString=function () {
    return "fun";
}

// Displaying the function and sting together 
console.log(x+" "+f);  // My Function is fun

