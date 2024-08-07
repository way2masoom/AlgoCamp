// Mutability and immutability in JS

// Mutability

let x=30;
x=40; // here if we can update the value of x so it is mutable
console.log("The value of X is",x);

// Immutability
const y=50;
// y=90; // can't change the value of variable 
// here we can't update the value of y so it is immutable 
// so it will give an error
console.log("The value of Y is",y); 


// Mutable Object
const obj={x:10,y:20};
obj.z=99; // here we can add the new property to the object so it is mutable too
console.log(obj);

