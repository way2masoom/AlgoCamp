// Basic example of Foreach(For each don't return the vale)
// const coding = ["js", "ruby", "python", "java", "Cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;

// });

// console.log(values);

// filter map
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => {
    return num > 4;
});
// console.log(newNums);


// books example
const books = [
    { title: 'book one', genera: 'history', public: 1981, edition: "2024" },
    { title: 'book two', genera: 'history', public: 1981, edition: '2024' },
    { title: 'book three', genera: 'fiction', public: 2000, edition: '2026' },
    { title: 'book four', genera: 'biography', public: 2010, edition: '2027' },
    { title: 'book five', genera: 'fantasy', public: 2020, edition: '2028' }
];

// displaying the book and there properties using filter maps
let userBooks = books.filter((bk) => {
    return bk.genera == 'history'
});

userBooks = books.filter((bk) => { // overriding the Userbooks entity
    return bk.public <= 2002 && bk.genera == 'history'
})

// console.log(userBooks);


// new method map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = myNumbers.map((num) => num + 10)
// console.log(newNum); 

//used of multiple maps and filter method
const numList=[1,2,3,4,5,6,7,8,9,10] 
const newList=numList
                    .map((num)=>num*10)
                    .map((num=>num+1));

console.log(newList);

console.log("numbers grater then 40");
const newList2=numList.filter((num)=>num>40).map((num)=>num+5);
console.log(newList2);


