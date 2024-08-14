
// Example of a class in JavaScript

// Define a class named 'Product'
class Product {
    // Class properties (fields)
    name;         // The name of the product
    price;        // The price of the product
    category;     // The category to which the product belongs
    description;  // A description of the product
    rating;       // The rating of the product

    // Method to add the product to the cart
    addToCart() {
        console.log("Product added to cart");
    }

    // Method to remove the product from the cart
    removeFromCart() {
        console.log("Product removed from cart");
    }

    // Method to display product details
    displayProduct() {
        console.log("Product name: ", this.name);          
        console.log("Product price: ", this.price);        
        console.log("Product category: ", this.category);  
        console.log("Product description: ", this.description); 
        console.log("Product rating: ", this.rating);     
    }

    // Method to buy the product
    buyProduct() {
        console.log("Product bought");
    }
}

// typeof product
console.log("type is =",typeof (product)); // Undefine
// Create an object of the class 'Product'
let NewProduct = new Product();
NewProduct.name = "Iphone";
console.log(NewProduct); // Iphone

console.log("type is =",typeof (NewProduct)); // object
