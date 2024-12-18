// How to consume the Promise
console.log("Start");

setTimeout(function timerCB() { // timer Callback
    console.log("Time 1 done");
}, 1000)


// creating a new promise
const pr = new Promise(function exes(res, rej) {
    console.log("Executor callback trigger by promise constructor");
    //Algorithm that executed 
    setTimeout(function prCB(){ // prCB= promise callback
        let randomNumber = Math.floor(Math.random() * 100)
        console.log(randomNumber);

        if (randomNumber % 2 === 0) {
            // randomNumber is even
            res();
        } else {
            // randomNumber is odd 
            rej();
        } 
    }, 2000);  // time of 1 sec
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
for(let i=0;i<1000000000;i++){
    
}
for(let i=0;i<1000000000;i++){
    
}

console.log("End");



