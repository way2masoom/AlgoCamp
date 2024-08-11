// example of Custom map array function

const arr=[1,2,3,4,5];

arr.map(function f(element){
    console.log("Received element ",element);
    return element;
});

// Custom mapFunction
function customMap(arr,fn){
    const result=[]; // new result array 
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i])); // call the fn on the element and store the result in the result array
    }
    return result; // return the result
}


const arr2=[1,2,3,4,5];
const returnValue=arr.map(function fn(element){
    return element*2;
});

console.log("Multiple of the element",returnValue);

// Square array function
const arr3=[1,2,3,4,5];
const returnSqrt=arr.map(function square(element){
    return element*element;
});

console.log("Square of the element",returnSqrt);

