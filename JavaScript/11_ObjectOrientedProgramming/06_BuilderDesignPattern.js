// Builder Design Patter demo

// Example of a Product class with simplified initialization
class Product {
    // Private fields for various product features
    #name;
    #price;
    #category;
    #rating;
    #color;
    #brand;
    #model;
    #stock;
    #warranty;
    #discount;

    // Constructor takes an options object
    constructor({ name, price, category, rating, color, brand, model, stock, warranty, discount }) {
        this.#name = name;
        this.#price = price;
        this.#category = category;
        this.#rating = rating;
        this.#color = color;
        this.#brand = brand;
        this.#model = model;
        this.#stock = stock;
        this.#warranty = warranty;
        this.#discount = discount;
    }

    // Getter and Setter methods
    getName() { return this.#name; }
    setName(value) { this.#name = value; }

    getPrice() { return this.#price; }
    setPrice(value) { this.#price = value; }

    getCategory() { return this.#category; }
    setCategory(value) { this.#category = value; }

    getRating() { return this.#rating; }
    setRating(value) { this.#rating = value; }

    getColor() { return this.#color; }
    setColor(value) { this.#color = value; }

    getBrand() { return this.#brand; }
    setBrand(value) { this.#brand = value; }

    getModel() { return this.#model; }
    setModel(value) { this.#model = value; }

    getStock() { return this.#stock; }
    setStock(value) { this.#stock = value; }

    getWarranty() { return this.#warranty; }
    setWarranty(value) { this.#warranty = value; }

    getDiscount() { return this.#discount; }
    setDiscount(value) { this.#discount = value; }

    // Method to display product details
    displayProduct() {
        console.log("Product Details:");
        console.log("Name:", this.#name);
        console.log("Price:", this.#price);
        console.log("Category:", this.#category);
        console.log("Rating:", this.#rating);
        console.log("Color:", this.#color);
        console.log("Brand:", this.#brand);
        console.log("Model:", this.#model);
        console.log("Stock:", this.#stock);
        console.log("Warranty:", this.#warranty);
        console.log("Discount:", this.#discount);
    }
}

// Creating an object of the Product class with an options object
const product1 = new Product({
    name: "iPhone 15 Pro",
    price: 149999,
    category: "Smartphone",
    rating: 4.8,
    color: "Black",
    brand: "Apple",
    model: "A2896",
    stock: 50,
    warranty: "2 years",
    discount: "10%"
});


// Displaying the product details
product1.displayProduct();
