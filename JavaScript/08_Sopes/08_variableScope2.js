// 
var teacher = "Sanket Singh";

function fun() {
    var teacher = "Sanket";
    console.log("Hello", teacher);
    
    //another function
    function gun() {
        var student = "Md Alam";
        console.log(student, teacher);
    }
    gun(); //calling gun function

}


// Calling functions 
fun();