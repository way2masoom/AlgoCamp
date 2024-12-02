// Array some crazy methods and learning

const marvel_heroes=["thor","ironman","spiderman"];
const dc_heroes=["superman","flash","batman"];

// joining both array
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);

// using concat method
console.log();
const allHeroes=marvel_heroes.concat(dc_heroes);
console.log("Concat of the two arrays")
console.log(allHeroes);


// sperad method
const all_new_heroes=[...marvel_heroes, ...dc_heroes]

console.log(all_new_heroes);

//flat 
const anotherArray=[1,2,3,4,[[5,6],[7,8,9]],[11,12,98],21,22]
const real_another_array=anotherArray.flat(Infinity);
console.log(real_another_array);


// converting anythings into array
console.log(Array.isArray("MASOOM"));
console.log(Array.from("MASOOM"));