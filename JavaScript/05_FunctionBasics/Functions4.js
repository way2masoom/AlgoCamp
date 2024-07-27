
function isEvenOrOdd(x){
    if(x%2==0){
    // if X is divisible by 2
        return "Even";
    } else{
        return "Odd";
    }
}

// Simple Calling Function 
isEvenOrOdd(10);

// Storing the value in a variable 

const ans=isEvenOrOdd(10);
console.log(ans);
