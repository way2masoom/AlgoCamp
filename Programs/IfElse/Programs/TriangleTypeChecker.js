// Given valid Triangle sides a,b,c, 
// write a program to check the type of triangle formed by the sides.

let a=10,b=8,c=4;

// condition to check valid triangle
if(a+b>c && a+c>b && b+c>a){
    console.log("yes we can form the Triangle");
    
    // check for type of triangle
    if(a==b && b==c && c==a){
        console.log("Equilateral Triangle");
    }
    else if(a==b || b==c || c==a){
        console.log("Isosceles Triangle");
    }else{
        console.log("Scalene Triangle");
    }

}else{
    console.log("No we can't form the triangle");
}