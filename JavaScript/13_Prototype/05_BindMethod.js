// Bind Method
const obj = {
    name: 'rohit',
    greet: function(age) {
        console.log("Hello my name is", this.name, age); // 'this' refers to current context
    }
}

// creating a new object
let newObj = { name: 'simran' }

// Using bind() to create a new function 'f' with 'this' bound to newObj
f = obj.greet.bind(newObj);
f("I am 20 years old"); // 'this' refers to 'newObj', so it prints simran

// Original function remains unchanged
obj.greet("& I am 20 years"); // 'this' refers to 'obj', so it prints rohit
dd