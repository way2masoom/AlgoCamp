// given a Value N(Positive Integer)
// print the following pattern on the screen 

// patter -2

// A function to display pattern-2
function pattern(n) {
    // logic for the rows
    for (let row = 1; row <= n; row += 1) {
        let str = " ";
        // logic for the row 
        for (let col = 1; col <= row; col += 1) {
            str += "*";
        }
        console.log(str);
    }
}


// calling the function for pattern problems 
pattern(4); // 4*4 pattern

console.log();

pattern(10); // 6*6 pattern

console.log();



