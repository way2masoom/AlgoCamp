// example of Getter and Setter In js

// Creating a class product with there features 
class Product {
    #name;
    #price;
    #description;
    category;
    company;

    // Creating a constructor
    constructor(ProductName, ProductPrice, ProductDescription, ProductCategory, ProductCompany) {
        this.#name = ProductName;
        this.#price = ProductPrice;
        this.#description = ProductDescription;
        this.category = ProductCategory;
        this.company = ProductCompany;
    }

    // method to of AddToCart 
    addToCart() {
        console.log("Add to Cart")
    }

    // Method to display the Product
    displayProduct() {
        console.log("Product Display:");
        console.log("Name:", this.getName());
        console.log("Price:", this.getPrice());
        console.log("Description:", this.description);
        console.log("Category:", this.category);
        console.log("Company:", this.company);
    }

    // Defining Getter and setter
    getPrice() {
        return this.#price
    }

    setPrice(p) {
        if (p > 0) {
            this.#price = p;
        } else {
            console.log("Invalid Price");
        }
    }

    getName(){
        return this.#name;
    }
    setName(n){
        this.#name=n;
    }

    // Shortcut to make getter and setter

    get description(){
        console.log("Getter call");
        return  this.#description;
    }
    
    set description(d){
        console.log("Setter call");
        if(d.length==0){
            console.log("Invalid Description")
            return;
        }
        this.#description=d;
    }

}

// Creating an Object
let iphone = new Product("Iphone 15 ", 999,"Best Phone", "Electronic", "Apple"); 
console.log(iphone); // name and price will not print bec. of Private filed 

//Setting the price of the product
iphone.setPrice(1000);

// Displaying the product details
iphone.displayProduct(); // This will display the product name and price bec. it is able to access the private filed 

// Getting the price of the product
console.log("Product Price:", iphone.getPrice());

// Shortcut call of Getter and setter
iphone.description="This is description"; // This will call the setter method

console.log(iphone.description); // this will call the getter method