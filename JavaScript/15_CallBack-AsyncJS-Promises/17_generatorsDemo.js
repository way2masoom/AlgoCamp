// A generator in JavaScript is a special type of function that can be paused and resumed,
// allowing you to produce a sequence of values over time, rather than computing them all at
// once and sending them back like a regular function.
// Generators are defined using the function* syntax and use the yield keyword to yield values.

// Generator Demo
function* myGenerator() {
    console.log("Inside generator");
    yield 100;
    console.log("Line -4");
    yield 99;
    console.log("Line -7");
    yield 55;
    console.log("Line -8");
    yield -1;

}

// calling the generator function
const i = myGenerator();
console.log(i.next());
console.log("Out");

console.log(i.next());
console.log("Out");

console.log(i.next());
console.log("Out");

console.log(i.next());
console.log("Out");

console.log(i.next());
console.log("Out");

