// array with functions 

let arr =[1, 2 , 3, 4, 5];
console.log(arr);
console.log("\nlength of array is :",arr.length,"\n") // Length is not a function, it is a property of an array

arr.push(5); // add an element at the end of the array
console.log(arr);

arr.pop(); // remove the last element of the array
console.log(arr);

arr.shift(); // remove the first element of the array
console.log(arr);

arr.unshift(100); // add an element at the beginning of the array
console.log(arr);


arr.reverse(); // reverse the array
console.log(arr);

console.log("index :",arr.indexOf(100)); // find the index of the element in the array
