// Example of Object DefineProperties In js

const product={
    name:"Iphone 17 pro Max",
    price:"1005000",
    color:"Black",
    warranty:"3 Year"
}

console.log(product);

// making the object as ObjectPreventExtension
Object.defineProperty(product,'name',{writable:false});

// Trying to update the name of the product
product.name="Iphone 18 pro Max"; // this will not update the name
console.log(product); // this will print  - {name: 'Iphone 17 pro Max', price: '1005000', color: 'Black', warranty: '3 Year'}

// trying to update color
product.color="White"; // this will not update the color bec. Define Property is false
console.log(product);

// Making the name updatable
Object.defineProperty(product, 'name',{writable:true});

// Trying to update the name of the product after define true for writable
product.name="Iphone 16 Pro MAx";
console.log(product); // after updating the name - {name: 'Iphone 16 Pro MAx', price: '1005000', color: 'White', warranty: '3 Year'}

delete product.name; // this will delete the product name
console.log(product); // this will print  - {price: '1005000', color: 'White', warranty: '3 Year'}  
delete product.color
console.log(product);