// Pattern 3

// Function to print a pattern of stars
function pattern(n) {
    // Loop through each row
    for (let row = 1; row <= n; row++) {
        let str = ""; // Initialize an empty string for each row

        // Add spaces to align the stars
        let spaceCount = n - row; // Spaces decrease as the row number increases
        for (let j = 1; j <= spaceCount; j++) {
            str += " ";
        }

        // Add stars for the current row
        let starCount = row; // Number of stars is equal to the row number
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
