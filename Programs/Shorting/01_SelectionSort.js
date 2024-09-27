// Selection Sort

// Function to find the minium index
function getMinIndex(arr, i) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j; // updating the minium index
        }
    }
    return minIndex;
}

// Function to find the sorted array
function selectionSort(arr) { // assuming the givin array is integer array
    for (let i = 0; i < arr.length; i++) {
        //Finding the Minium Index
        let minIndex = getMinIndex(arr, i);
        // SWAP the ith Element with Minium Index
        let temp = arr[i];
        arr[i] = arr[minIndex]
        arr[minIndex] = temp;
    }
}

// Declaring an Integer Array 
let arr = [15, 6, 1, 3, -1, 2, 10]
selectionSort(arr);
console.log(arr);
