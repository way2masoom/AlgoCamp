//WAP to find the minimum number among three numbers.

let num1 = 10, num2 = 20, num3 = 30;

// condition to check the minimum number
if (num1 < num2 && num1 < num3) {
    console.log(num1, "Num1 is the minimum number");
} else if (num2 < num1 && num2 < num3) {
    console.log(num2, "num2 Is the minimum number");
} else {
    console.log(num3, "num3 Is the minimum number");
}