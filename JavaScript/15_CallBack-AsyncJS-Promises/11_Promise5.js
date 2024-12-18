// How to consume the Promise
console.log("Start");

// creating a new promise 
const p1 = new Promise(function exes(res, rej) {
    console.log("Executor callback trigger by promise constructor P1");
    setTimeout(() => {
        console.log("Time of p1 is done");
        res(100);
    }, 500)

});

//p1.then do only registration not execution 
p1.then(function a() { console.log("a") }, function b() { console.log("B") })

setTimeout(function timerCB() { // timer Callback
    console.log("Time 1 done");
}, 2000) // timer for 3 sec 


// creating a new promise
const pr = new Promise(function exes(res, rej) {
    console.log("Executor callback trigger by promise constructor");
    //Algorithm that executed 
    setTimeout(function prCB() { // prCB= promise callback
        let randomNumber = Math.floor(Math.random() * 100)
        console.log(randomNumber);

        if (randomNumber % 2 === 0) {
            // randomNumber is even
            res();
        } else {
            // randomNumber is odd 
            rej();
        }
    }, 3000);  // time of 1 sec
});


// Main code
pr.then(function f() {
    console.log("Executing f")
}, function g() {
    console.log("Executing g")
});

pr.then(function h() {
    console.log("Executing h")
}, function i() {
    console.log("Executing i")
});


// to make JS main thread BG
for (let i = 0; i < 1000000000; i++) {

}
for (let i = 0; i < 1000000000; i++) {

}

console.log("End");



