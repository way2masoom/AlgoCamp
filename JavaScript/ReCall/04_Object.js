// Object in Js

const jsUser={
    name:"Alam",
    age:19,
    location:"Birgunj",
    email:"alam@gmail.com",
    "Full name":"MD ALAM"
}

// displaying all the keyValues
const keyValues=Object.keys(jsUser);
console.log(keyValues);

// displaying all the user Vales 
const userValues=Object.values(jsUser);
console.log(userValues);

// accessing the full name
// console.log(jsUser["Full name"]);
console.log();


// merging two object
// New object
 const target={
    1:"alam",
    2:16
}

 const source={
    3:"md",
    4:19
}

// merging two object
// const obj3={obj1,obj2};
const obj3=Object.assign({},target,source)
console.log(obj3);
// or 
const obj4={...target,...source} // out will be same
console.log(obj4);


