// Generators Function
function* gen() {
    console.log("Inside Generator")
    const x = yield 10;
    return 88; // if you do return rest code will not executed 
    const y = x + 30;
    yield y;
}

// main code 
const it = gen();
console.log(it.next());
console.log(it.next(20));
console.log(it.next());
