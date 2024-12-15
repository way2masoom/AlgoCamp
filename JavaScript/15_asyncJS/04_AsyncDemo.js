// 04_AsyncDemo.js
function createTime(time,timeId){
    console.log("Creating a new time with id",timeId);
    setTimeout(() => {
        console.log(`Timer with id ${timeId} is done`);
    }, time);
    console.log("SuccessFully created a new time with id ",timeId);
    
}

console.log("Starting the code");
createTime(2000,1);
createTime(0,2);
console.log("Starting a loop")
        
for(let i=0; i<1000000000;i++){
    // some task
}

console.log("Loop is done")
console.log("Last line of code done");

// Output 

// Starting the code
// Creating a new time with id 1
// SuccessFully created a new time with id  1
// Creating a new time with id 2
// SuccessFully created a new time with id  2
// Starting a loop
// -----
// ------
// Loop is done
// Last line of code done
// Timer with id 2 is done
// Timer with id 1 is done