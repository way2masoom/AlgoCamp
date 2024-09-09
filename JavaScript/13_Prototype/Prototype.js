// ANother example of the Prototype 

// WAP to find the true length of the name even with space

// let myName="Masoom"
// let myName="Masoom     "

// console.log("Length of my Name: ",myName.trim().length);
// console.log("Length of my Name: ",myName.truelength());


// creating an array 
let myHero = ["thor", "ironMan"];

// Creating an object 
let heroPower = {
    thor: "Hammer",
    ironMan: "Tech",

    // defining method  for thor power
    getThorPower: function () {
        console.log(`Thor have ${this.thor} power`);

    }
};


// Creating an alam() custom method in Object method
Object.prototype.alam = function () {
    console.log(`Alam is accessible in All Object`);
}

// creating an md() custom method that is only accessible with the Array
Array.prototype.md=function(){
    console.log(`I am md`);
    
}


// Can we access custom method || for that we have to define it before
heroPower.alam();

// checking if the myHero have the alam() method or not
myHero.alam(); // yes


// calling md() method with herePower
// heroPower.md(); // ERROR || not available beca. the md() is only accessible by the Array

// calling md() method with myHero Array
myHero.md(); // available beca. the md() is only accessible by the Array & here myHero is an Array




