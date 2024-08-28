// Prototype In Js 

class Product {
    // Creating a constructor function
    constructor(n, p) {
        this.name = n;
        this.price = p;
    }

    // display function empty
    display() {

    }
}

// Creating an Object
let obj = new Product("Iphone",1299);
console.log(obj);

console.log(Product.prototype);

// use of dunder proto
// Creating a new object that will inherit from Product
let electronicProduct = {
    category: 'Electronics'
};

// Linking electronicProduct's prototype to Product's prototype using __proto__
electronicProduct.__proto__ = new Product("Laptop", 1500);

console.log(electronicProduct.__proto__); // Output: Product { name: 'Laptop', price: 1500 }
