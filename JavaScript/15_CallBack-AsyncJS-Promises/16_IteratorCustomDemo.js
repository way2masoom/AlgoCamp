// An iterator is an object that allows you to traverse through a 
// collection (like an array or a list) one element at a time. 
// In JavaScript, an iterator is an object that implements the Iterator protocol 
// by having a next() method that returns an object with two properties: value and done.

// Custom iterator function
function fetchNextElement(arr) {
    let index = 0;
    function next() {
        // some logic
        if (index > arr.length) {
            return { values: undefined, done: true };
        }

        const newElement = arr[index];
        index++;
        return { value: newElement, done: false };
    }
    return{next}
}

// How program work
// arr=[1,2,3,4,5]
// fetchNextElement(arr)=> 1
// fetchNextElement(arr)=> 2
// fetchNextElement(arr)=> 3
// fetchNextElement(arr)=> 4
// fetchNextElement(arr)=> 5
// fetchNextElement(arr)=> Undefine
// ....


// Example usage
const myArray = [1, 2, 3, 4, 5];
const autoFeather = fetchNextElement(myArray);
console.log(autoFeather.next());
console.log(autoFeather.next());
console.log(autoFeather.next());
console.log(autoFeather.next());

for (let i = 0; i < 1000000000; i++) {
    // some operation 
}
console.log(autoFeather.next());


