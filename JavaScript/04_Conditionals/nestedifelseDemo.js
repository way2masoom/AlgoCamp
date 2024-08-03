// Nested condition in JavaScript 

let isUserSubscribed=true;
let userHasLionsGatePlay=true;
let userHasSony=true;

if(isUserSubscribed) {
    if(isUserSubscribed){
        console.log("Watch John Wick");
    } else if(userHasSony){
        console.log("Watch Doremone");
    } else{
        console.log("Watch Panchaayat");
    }
}