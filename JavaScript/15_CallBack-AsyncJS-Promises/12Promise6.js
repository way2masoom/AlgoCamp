console.log("Start");

// creating a new promise 
const p1 = new Promise(function exes(res, rej) {
    console.log("Executor callback trigger by promise constructor P1");
    setTimeout(() => {
        console.log("Time of p1 is done");
        res(100); // Pending--> fulfilled ; undefine-->100
    }, 500)

});

//p1.then do only registration not execution 
//.then return bran new Promise Object
// p2 is brand new Promise
const p2 = p1.then(function a(v) { console.log("Executing B", v) }, function b(v) { console.log("Executing B", v) })
// p3 is also brand new promise
const p3 = p1.then(function f(v) { console.log("Executing f", v) }, function g(v) { console.log("Executing g", v) });