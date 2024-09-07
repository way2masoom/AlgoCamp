
// Creating a Basic of Prototype
const obj={
    Fname:'Rohit',
    // Function to display name
    greet:function (){
        console.log(`hello my Name is ${this.Fname}`);
    }
}

// creating a new obj 
const newObj={Fname:'arjun'}

//calling the greet function directly
obj.greet()

// calling Obj greet function using CALL method and with newObj
obj.greet.call(newObj)



// Creating a new Object with Parameters 
const obj2={
    Fname:'Alam',
     // Function to display name and passing Parameters
    greet:function(welcomeMsg){
        console.log(`Hello my name is ${this.Fname}`,welcomeMsg);
    }
}

// creating a new obj 
const newObj2={Fname:'MD'}

// calling ob2 greet Function using CALL method and with parameters
obj2.greet.call(newObj2,"Welcome to the Club");


// Creating a new Object with more than one Parameters 
const obj3={
    Fname:'Laxmi',
     // Function to display name and passing Parameters
    greet:function(welcomeMsg,age){
        console.log(welcomeMsg,`Hello my name is ${this.Fname}`,age);
    }
}

// Creating a new 
const newObj3={Fname:'Mohit'}

// Calling obj3 greet function using CALL method with 2 parameters 
obj3.greet.call(newObj3,"Welcome To club,","i am 20 years old");
