// Closure in Js
function fun(c,d){
    let m=10;
    // another function 
    function gun(){
        console.log("The sum of m and c is =",m+c);
    }
    return gun;
}

// starting the code
const g=fun(5,10);
g(); // it's able to  access the function variable after executing is done by Closure