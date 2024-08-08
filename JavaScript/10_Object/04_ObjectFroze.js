// Example of Object freeze In js

// Creating a simple object of product
const product={
    name:"Iphone 14 Pro",
    color:"Black",
    price:100000,
    warranty:"2 Year"
}
// Displaying the output
console.log(product);

// Lets'set the product object as Freeze
Object.freeze(product);

product.company="Apple"; // new addition not allowed in freeze object
console.log(product); // this will still print  - {name: 'Iphone 14 Pro', color: 'Black', price: 100000, warranty: '2 Year'}

// deleting the key values pair
delete product.color; // deletion not allowed in freeze object
console.log(product); // this will still print  - {name: 'Iphone 14 Pro', color: 'Black', price: 100000, warranty: '2 Year'}

// updating the key values pair
product.name="Iphone 15 pro"; // Updating also not allowed in freeze object
console.log(product); // this will still print - {name: 'Iphone 14 Pro', color: 'Black', price: 100000, warranty: '2 Year'}

// checking it the product is freeze or sealed
console.log("Frozen =",Object.isFrozen(product)); // true
console.log("Sealed =",Object.isSealed(product)); // true
