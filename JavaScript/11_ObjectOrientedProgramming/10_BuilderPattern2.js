// Example of BuilderPattern in Js

// Creating a class
class Product {
    #name;
    #price;
    #description;

    // Creating a constructor
    constructor(builder) {
        //Valuations before object creation 
        this.#name = builder.name;
        if (builder.price > 0 && typeof (builder.price) == "number") {
            this.#price = builder.price;
        } else {
            return {};
        }
        this.#description = builder.description;
    }

    // Creating a method to display 
    displayProduct() {
        console.log("Product Displaying:", this.#name, this.#price, this.#description);
    }

    // Creating a Getter with Static 
    static get Builder() {
        // Creating a class in side the get builder
        console.log("Calling the product Constructor");
        
        class Builder {
            // Creating a constructor
            constructor() {
                this.name = ""; // Random values
                this.price = 0;
                this.description = "";
            }

            // Setting the value for the constructor entities 
            setName(incomingName) {
                this.name = incomingName;
                return this;
            }
            setPrice(incomingPrice) {
                this.price = incomingPrice
                return this;
            }
            setDescription(incomingDescription) {
                this.description = incomingDescription;
                return this;
            }

            // Method to build the final Product object
            build() {
                return new Product(this);
            }
        }

        return Builder;
    }
}

// Calling the classes

/**
 * Product.Builder call the Builder getter
 */

const product = new Product.Builder()
    .setName("Iphone 12")
    .setPrice(1999)
    .setDescription("good night")
    .build(); //build() method called to get the Product instance

product.displayProduct();