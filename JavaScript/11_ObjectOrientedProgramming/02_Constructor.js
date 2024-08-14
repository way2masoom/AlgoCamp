// Example of constructor in JavaScript

// Creating a 'Product' class
class Product {
    // Class properties (fields)
    name;          // The name of the product
    price;         // The price of the product
    description;   // A description of the product
    color;         // The color of the product

    // Method to add the product to the cart
    addToCart() {
        console.log("Product added to cart");
    }

    // Method to remove the product from the cart
    removeFromCart() {
        console.log("Product removed from cart");
    }

    // Creating a constructor method
    // constructor() {
    //     // Constructor is automatically called when an object is created
    //     console.log("Constructor called");

    //     // If we explicitly return an object, that object will be returned as the instance
    //     // Example: return {x: 10}; // This would replace the instance with the returned object

    //     // If we return anything other than an object (like a primitive), the created object instance is still returned
    //     // Example: return 10; // The instance of 'Product' will still be returned despite this return statement
    //     return 10; // This return statement doesn't affect the instance creation since it's not an object

    // }

    // Another constructor with parameters
    constructor(productName, ProductPrice, ProductDescription, ProductColor) {
        this.name = productName;
        this.price = ProductPrice;
        this.description = ProductDescription;
        this.color = ProductColor;
    }
}

// Creating an instance (object) of the 'Product' class
// let obj = new Product(); // The constructor is called automatically when we use 'new'
// console.log(obj); // Logs the created object; because the constructor returned a primitive (10), the 'Product' object is still returned

// Creating an object 
let iphone = new Product("iPhone 12", 1000, "A high-end smartphone", "Black");
let samsung=new Product("Samsung Galaxy S21", 900, "A high-end smartphone", "White");
console.log(iphone);
console.log(samsung);
console.log(typeof(Product)); // function;