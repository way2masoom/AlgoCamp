// Pattern-6
//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
//   *********
//    *******
//     *****
//      ***
//       *

// Function to print a pattern of stars
function upperTriangle(n) {
    // Loop through each row
    for (let row = 1; row <= n; row++) {
        let str = ""; // Initialize an empty string for each row

        // Add spaces to align the stars
        let spaceCount = n - row; // Spaces decrease as the row number increases
        for (let j = 1; j <= spaceCount; j++) {
            str += " ";
        }

        // Add stars for the current row
        let starCount = 2*row-1; // Number of stars is equal to the row number
        for (let col = 1; col <= starCount; col++) {
            str += "*";
        }

        // Print the final row
        console.log(str);
    }
}

function lowerTriangle(n) {
    // Loop through each row
    for (let row = 1; row <= n; row++) {
        let str = ""; // Initialize an empty string for each row

        // Add spaces to align the stars
        let spaceCount = row; // Spaces decrease as the row number increases
        for (let j = 1; j <= spaceCount; j++) {
            str += " ";
        }

        // Add stars for the current row
        let starCount = 2*(n-row)-1; // Number of stars is equal to the row number
        for (let col = 1; col <= starCount; col++) {
            str += "*";
        }

        // Print the final row
        console.log(str);
    }
}

// creating a function to call both triangle
function pattern(n){
    upperTriangle(n);
    lowerTriangle(n);
}

// Call the function to display a pattern with 6 rows Triangle
pattern(6)

console.log("END");
