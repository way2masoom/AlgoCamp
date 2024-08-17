// Static In js || Static member are those members which are associated with class Not with Object

//Creating a class 
class product{
    // creating a static variable
    static x=10;

    // Creating a Constructor
    constructor(n,p,d){
        this.name=n;
        this.price=p;
        this.description=d;
    }
}

// creating an object
let obj=new product("Iphone 11 pro",78788,"best phone");
console.log(obj);

// calling the static variable 
console.log(obj.x); // it will print Undefine bec. static can't be accessible with Object
console.log(product.x); // it will print x:10 bec. It is accessible with class
