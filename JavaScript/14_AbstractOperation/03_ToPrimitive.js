// Default to primitive 
x={};
console.log("Default ToPrimitive ",x.toString()); // this return the ['object', 'object']
console.log("Default ValueOff ",x.valueOf()); // this return the same object, here it is {}

// again 
y=10;
console.log("ToPrimitive ",y.toString()); // this return the ['object', 'object']
console.log("ValueOff ",y.valueOf()); // this return the same object, here it is 10


// Changing the Default ToPrimitive
z={
    a:10,
    b:20,
    toString:function(){
        return 'My String';
    }
};

//Displaying the change Toprimitive 
console.log("ToString ",z.toString()); // It will display 'My String' as the toString has change the functionality of default toString
console.log("ValueOf ",z.valueOf()); // Return the same Object given in the 'Z' object " { a: 10, b: 20, toString: [Function: toString] } "


// Assigning a new valueOf function directly to the `valueOf` property
z.valueOf = function() {
    return 1000;
};
console.log("ValueOf:", z.valueOf());    // Outputs: 1000

