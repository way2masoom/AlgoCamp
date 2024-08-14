// Working with This keyword
/***************************************** OBJECT-1 **********************************************/
let obj = {
    x: 10,
    y: 20,

    // z: {
    //     x:99,y:90,
    //     fn: function () {
    //         console.log(this.x, this.y);
    //     }
    // }

    fn: function () {
        console.log(this.x, this.y);
    },
}

// Calling the object 1
console.log("Calling OBJECT 1");
obj.fn(); // 10 20
// obj.z.fn(); // 99 90

/***************************************** OBJECT-2 **********************************************/

// Creating another object with arrow function
let obj2={
    x:11,
    y:14,
    fn:()=>{
        console.log(this.x,this.y);
    }
}

// calling object 2
console.log("Calling OBJECT 2");
obj2.fn(); // undefined undefined

/***************************************** OBJECT-3 **********************************************/

// creating another object with arrow & normal function
 let obj3={
    x:90,
    y:88,
    // creating a function
    fn:function(){
        // creating an arrow function
       const arrow = ()=>{
            console.log(this.x,this.y);
        }
        //calling arrow function
        arrow();
    }
 }

 // calling object 3
 console.log("Calling OBJECT 3");
 obj3.fn();
 /***************************************** OBJECT -3 END  **********************************************/
