// Example of Object DefineProperty In js using Object.defineProperty() method manually

// crating a object of product
const product={
    name:"Headphone",
    color:"red",
    price:"1500"
}

// Displaying the output
console.log(product);

//Fetching the key of the object
let key=Object.keys(product);
console.log("Keys =",key);


// Making the object as ObjectDefineProperty manually For all values
for(let i=0;i<key.length;i++){
    //Configurable -> can we delete Or modify the Properties
    // Writable ->  can we change or Update the Properties 
     Object.defineProperty(product,key[i],{configurable:false, writable:false});
}
console.log("\nAfter setting the Value Define property\n");
console.log(product);

// Trying to delete the product price
delete product.price;
console.log("\nPrinting the Value after deleting the Price\n");
console.log(product);

// Stopping New Values Pair
Object.preventExtensions(product);

// Try to add new values
product.company="Boat"; // after using PreventExtension Adding of product will also not allowed
console.log("Printing the Values after adding new pair of values");
console.log(product);