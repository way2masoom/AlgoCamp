// Example of ObjectPreventExtension In js

// Creating a simple object of product
const product={
    name:"Iphone 16 pro Max",
    price:"1005000",
    color:"Black",
    warranty:"3 Year"
}

// making the object as ObjectPreventExtension
Object.preventExtensions(product);

// adding new key value pair
product.company="Apple"; // new addition not allowed in preventExtensions object
console.log(product); // this will still print  - {name: 'Iphone 16 pro Max', price: '1005000', color: 'Black', warranty: '3 Year'} 

// Deleting the key value pair
delete product.color; // deletion not allowed in preventExtensions object

// updating the key value pair
product.price="10780"; // this will update the price
console.log(product); // this will print  - {name: 'Iphone 16 pro Max', price: '10780', color: 'Black', warranty: '3 Year'}