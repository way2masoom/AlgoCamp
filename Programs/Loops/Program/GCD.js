// Function to find the greatest common divisor (GCD) using iteration

function gcd(a, b) {
    let ans = 1; // Initialize 'ans' with 1 (default GCD if no other is found)
    for (let i = 2; i < Math.min(a, b); i++) {
         // Check if both a and b are divisible by i
        if (a % i == 0 && b % i == 0) {
            ans = i;    // Update 'ans' to the current divisor
        }
    }
    return ans; // Return the greatest common divisor found
}

// Main Program
console.log("common divisible is =",gcd(10,20));