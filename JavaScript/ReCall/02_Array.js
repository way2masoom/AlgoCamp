// Array in JavaScript 

// Declaring  Array
let myArr=[1,2,4,5];
let myHero=["Thor","IronMan","Hulk"]

let myArr2=new Array(1,2,3,4,"Heros");
console.log(myArr2[4]);
console.log(myArr2[3]);
 
// Arrays Methods
console.log("\n Push and POP in array \n")
myArr.push(7,8);
console.log("Push array: ",myArr);

myArr.pop() // this will remove the last value from the array list
console.log("POP array: ",myArr); // [ 1, 2, 4, 5, 7, 8 ]

// Unshift method
console.log("\n Unshift Method \n")

myArr.unshift(9);
console.log("UNshift Array: ",myArr);

myArr.shift() // this remove the first value of shift method
console.log("Shift Array: ",myArr);

// More methods 
console.log("\n");
console.log(myArr.includes(99)); // check is 99 is includes in the array list or not
console.log(myArr.indexOf(4)); // index of the element

// Join methods
const newArr=myArr.join()
console.log(myArr);

console.log(newArr); 
console.log(typeof(newArr)); // after using join method It convert the method into sting Array








