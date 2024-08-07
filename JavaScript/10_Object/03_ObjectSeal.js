// Example of Object Seal In js

// Creating a simple object of product
const product={
    name:"Iphone 14 Pro",
    color:"Black",
    price:100000,
    warranty:"2 Year"
}
// Displaying the output
console.log(product);

// Lets'set the product object as sealed
Object.seal(product);

product.company="Apple"; // new addition not allowed in Sealed object
console.log(product); // this will still print  - {name: 'Iphone 14 Pro', color: 'Black', price: 100000, warranty: '2 Year'}

// deleting the key values pair
delete product.color; // deletion not allowed in Sealed object
console.log(product); // this will still print  - {name: 'Iphone 14 Pro', color: 'Black', price: 100000, warranty: '2 Year'}

// updating the key values pair
product.name="Iphone 15 pro"; // Updating allowed in Sealed object
console.log(product); // this will print  - {name: 'Iphone 15 pro', color: 'Black', price: 100000, warranty: '2 Year'}
