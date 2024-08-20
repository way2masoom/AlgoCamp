// Object Destructuring in JavaScript
// Object Destructuring is a way to extract multiple properties from an object and assign them to variables.

// class product {
//     name;
//     price;
//     category;

//     constructor(name, price, category) {
//         this.name = name;
//         this.price = price;
//         this.category = category;

//     }
// }

// Defining a product object with key-value pairs
const product1 = {
    name: "Laptop", 
    price: 1000, 
    category: "Electronics"
};
// Logging the entire product object
console.log(product1);

// Destructuring the product object
const {name,price,category}=product1;

// Logging the product object again to show it remains unchanged
console.log(product1);
console.log();  // Adds a blank line for better readability in output

// Logging the destructured variables
console.log("Name =", name);
console.log("Price =", price);
console.log("Category =", category);


// Creating an another object
const product2={
    PhoneName:"Mobile",
    PhonePrice:500,
    PhoneCategory:"Smart Phone"
};

// Destructuring the two object only name and price
console.log("\nDestructuring the two object only name and price");

// Destructuring the product object
const {PhoneName,PhonePrice}=product2;
console.log("Name =",PhoneName);
console.log("Price =",PhonePrice);

// Destructuring an object inside another object
// fot this we have to used spread operator ... that can help us to unpack one object's all key value pair to another object
console.log("\nDestructuring an object inside another object");

// Defining a product object with key-value pairs
const ProductObj={
    objName:"macbook",
    objPrice:2000,
    objCategory:"Laptop"
}
// using spread operator to unpack the object to the another object
const anotherProduct={...ProductObj, objPrice:2500}; // {objName : "mac", objPrice : 2500, objCategory : "Laptop"}
console.log(anotherProduct);


// Used of Alias in Destructuring
console.log("\nUsed of Alias in Destructuring");
const {objName:ProductName,objPrice:ProductPrice,objCategory}=ProductObj;
// Logging the destructured variables
console.log(ProductName);
console.log(ProductPrice);
console.log(objCategory); // Here we have not used alias so it will print the original key name


// Destructuring the object for nested o
console.log("\nDestucturing the object for nested object");
const product = {
    name: "Iphone 14 prp",
    price: 125000, 
    category: {
        name:"Mobiles", 
        categoryId: 12
    } };


