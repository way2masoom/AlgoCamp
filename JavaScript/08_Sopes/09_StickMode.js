// Example of Using Stick Mode

// Strict mode makes it impossible to accidentally create global variables. 
// In sloppy mode, mistyping a variable in an assignment creates a new property on the global object and continues to "work".
// Assignments which would accidentally create global variables throw an error in strict mode:

"use strict";
var teacher="Sanket Singh";
function fun(){
    var teacher="Sanket";
    content="Js"; // Here content is not declares in formal way so, it will not execute in strict mode
    console.log("hello",teacher,content);
}

console.log(teacher);
fun();