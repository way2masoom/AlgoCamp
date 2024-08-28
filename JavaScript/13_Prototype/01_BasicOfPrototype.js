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