// Pattern-5
// ******
// *****
// ****
// ***
// **
// *

// Function to print a pattern of stars
function pattern(n) {
    // Loop through each row
    for (let row = 1; row <= n; row++) {
        let str = ""; // Initialize an empty string for each row

        // Add stars for the current row
        let starCount = n - row + 1; // Number of stars is equal to the row number
        
        for (let col = 1; col <= starCount; col++) {
            str += "*";
        }

        // Print the final row
        console.log(str);
    }
}

// Call the function to display a pattern with 6 rows
pattern(6);

console.log("END");