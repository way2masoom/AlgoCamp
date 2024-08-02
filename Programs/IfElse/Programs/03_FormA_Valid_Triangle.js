// Give 3 integer a,b,c and check if we can form a 
// triangle with the side of the triangle having length a,b and c

let a=1,b=1,c=3;

if(a+b>=c && a+c>=b && b+c>=a){
    console.log("yes we can form the Triangle");
}else{
    console.log("No we can't form the triangle");
}