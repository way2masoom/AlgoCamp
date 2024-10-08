// Simple example of object 

let product={
    name:"Iphone",
    company:"Apple",
    color:"Black",
    price:100000,
    warranty:"1 Year"
}

// If we need fetch all the unique keys of our object say product
const keysValue=Object.keys(product);
console.log(keysValue); // [ 'name', 'company', 'color', 'price', 'warranty' ]

// if we need to fetch all the available values of our object say product
const productValues=Object.values(product);
console.log("\n",productValues); // [ 'Iphone', 'Apple', 'Black', 100000, '1 Year' ]


// if we need to fetch all the key value pairs of our object say product    
const entries=Object.entries(product);
console.log("\n",entries); //  [ 'name', 'Iphone' ],  [ 'company', 'Apple' ], [ 'color', 'Black' ], [ 'price', 100000 ],

