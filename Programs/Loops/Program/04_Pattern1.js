// patter -1

// Binding the pattern into a function 
function pattern(n) {
    // logic for the patter -1 
    for (let row = 1; row <= n; row += 1) {
        // the task is to concatenate "*" n times 
        let str = "";
        for (let col = 1; col <= n; col += 1) {
            str += "*";
        }
        console.log(str); // displaying the star *
    }

}

// calling the function for pattern problems 
pattern(4); // 4*4 pattern

console.log();

pattern(6); // 6*6 pattern

console.log();



