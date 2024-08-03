// example of a simple arrays in JS

let arr1=[]; // empty array
let arr2=["MD", true, 2 , null , undefined, 3.5, "Alam"]; // array with 6 elements with different data types

console.log(arr1,arr2); 

console.log(arr2[0]); 
console.log(arr2[3]);

arr2[3]=10; // update the value of the third element of the array
console.log(arr2); // print the updated value of the third element of the array

// define an undefine array element
 arr2[10]="Js"; 
console.log(arr2); // print the updated value of the third element of the array


console.log("\n Defining a new ways of array");
let arr3=new Array(10, 20, 30, 40, 50); // array with 5 elements
console.log(arr3); 

let arr4= new Array(5); // array with 5 undefined elements
console.log(arr4); 

let arr5=new Array(4).fill(-3); // array with 4 elements with value -3
console.log(arr5); 