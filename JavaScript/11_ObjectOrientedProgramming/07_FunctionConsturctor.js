// Example of Function Constructor

// This is the old method to follow Instead of Class 
function product(n,p,d){
    this.name=n;
    this.price=p;
    this.description=d;

    this.displayProduct=function(){
        console.log("Name:",this.name,"Price:",this.price,"Description:",this.description);
    }
}

// Creating an object with function

let obj=new product("MacBook",123244,"good One");
console.log(obj);