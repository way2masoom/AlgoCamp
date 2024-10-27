const arr =[1,2,3,4,5];

// CallBack Function
function MyArr(arr, fn) { // MyArr is the Hof(High order Function)
    let result=[];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i],i));
    }

    return result;
}


console.log(MyArr(arr, function g(element) { // Hof: High order Function 
    return element**2;
}));
