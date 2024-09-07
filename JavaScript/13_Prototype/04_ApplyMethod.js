// Apply method is same as Call method
// Only difference is that apply method Instead of taking N number of arguments
// it takes only two 
// 1) the Object to which it point to 
// 2) An array of values which will passed  to the function 



// Creating a new Object with more than one Parameters 
const obj={
    Fname:'MD',
     // Function to display name and passing Parameters
    greet:function(welcomeMsg,age,branch){
        console.log(welcomeMsg,`Hello my name is ${this.Fname}`,age,branch);
    }
}

// Creating a new Object
const newObj={Fname:'Mohit'}

// Calling obj greet function using Apply method 
obj.greet.apply(newObj,["Welcome To club,","i am 20 years old"," & my Branch is CSE"]);


// Interested  Question
// var name = 'abcd';  // This is in the global scope, not part of the objTest 
                    // In nodeJs we have to manual define the global object var or Let can't be define as global object
global.name = 'abcd';  // Attach 'name' directly to the global object


let objTest = {
    name: 'xyz',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

objTest.greet.call();  // it will print 'Hello undefined'
