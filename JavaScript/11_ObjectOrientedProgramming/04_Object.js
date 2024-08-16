// Example of Object

//Product class Define
class product {
   // Private fields (not accessible outside the class)
   #name;
   #price;
   #category;

   // Public fields (accessible outside the class)
   rating;
   color;

    //Creating A constructor
    constructor(productName, productPrice, productCategory, productRatting, productColor) {
        this.#name = productName;
        this.#price = productPrice;
        this.#category = productCategory;
        this.rating = productRatting
        this.color = productColor;
    }

    displayProduct() {
        console.log("Product Display :", this); //'this' refers to the current object instance
    }
}

// Creating an object 
const p=new product("Iphone 13",145999,"Smart phone",4.5,"black");
p.displayProduct(); // Displaying the initial state of the object

// Attempting to modify both public and private fields directly
p.name="iphone 15 pro" 
p.price=134566;
p.category="electronic";
p.rating=3.3;
p.color="red";

p.displayProduct(); // Displaying the initial state of the object

