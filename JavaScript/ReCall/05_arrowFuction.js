// Arrow function and this keywords

const user={
    username:"alam",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},"Welcome to Website"`);
    }
}

console.log(user);
console.log(user.username);
user.welcomeMessage();


// arrow function
// const fun=function() {
//     console.log(this);   
// }

// console.log("Calling function");
// fun()

// arrow function Declaration
const fun=()=> {
    console.log(this);   
}

console.log("Calling function");
fun()


const addTwo=(num1,num2)=>{
    return num1+num2;
}

// another way to write the arrow function 
const addTwo2=(num1,num2)=>(num1+num2)

console.log("arrow function1 : ",addTwo(5,4));
console.log("arrow function2 : ",addTwo2(5,4)); // both will print the same result




