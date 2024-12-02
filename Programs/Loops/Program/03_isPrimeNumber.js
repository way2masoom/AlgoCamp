// check the given number is Prime number or not

// function 
function isPrime(n) {
    for (let i = 2; i < n - 1; i += 1) {
        if (n % i == 0) {
            return false
        }
    }
    return true;
}

let num = isPrime(11); // function call
if (num == true) {
    console.log("Number is Prime ")
} else {
    console.log("Number is not a prime")
}


console.log();

// another approach
function isPrime2(n) {
    let isPrime2 = true; // at the begging consider that the number is prime number
    for (let i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            isPrime2 = false    // if number is false then It's not prime 
            return;
        }
    }
    return isPrime2; // if true then return Prime number
}

let prime2 = isPrime2(20);
if (prime2 == true) {
    console.log("Number is Prime ")
} else {
    console.log("Number is not a prime")
}