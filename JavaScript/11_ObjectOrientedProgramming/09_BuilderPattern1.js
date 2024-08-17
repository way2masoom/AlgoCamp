// Example of Builder pattern

//Creating class 
class Product{
    // Creating a constructor with builder object
    constructor(builder){
        this.name=builder.name;
        // Validation for Price inside the constructor
        if(builder.price>=0 && typeof(builder.price)=="number"){
            this.price=builder.price;
        }else{
            return null;
        }
        this.price=builder.price;
        this.category=builder.category;
        this.description=builder.description;
        this.rating=builder.rating;
    }
    // Setting getter && setter
    get price(){
        return this.price;
    }
    
    set price(p){
        if(p>0){
            this.price=p;
        }else{
            console.log("Invalid price");
        }
    }
}

// Creating an object
const p= new Product({
    name:"iphone 13 pro",
    price:-14588,
    category:"Electronic",
    description:"Best phone",
    rating:4.5

});
// Displaying the Object P
console.log(p);

