// Date in JS

let myDate=new Date();
console.log("Date : ",myDate);
 console.log(myDate.toString());
 console.log(myDate.toLocaleDateString());
 console.log(myDate.toDateString());
 
 console.log(myDate.toLocaleTimeString());
 console.log(myDate.toJSON());
 

 // types of date
 console.log(typeof(myDate));
 
 // creating my own date
 let myCreatedDate=new Date(2023,3,15);
 console.log("MyDate: ",myCreatedDate.toDateString());

 let myCreatedDate2=new Date(2023,3,15,11,3);
 console.log("MyDate 2: ",myCreatedDate2.toLocaleDateString());
 

 // Creating date with DD-MM-YY
 let creatingDate=new Date("2024-11-21");
 console.log("DD-MM-YY",creatingDate.toLocaleString());
 

 console.log();
 console.log("NEW DATE");
 
 
 let newDate =new Date()
 console.log(newDate);
 console.log(newDate.getDate());
 console.log(newDate.getDay());
 console.log(newDate.getMonth());
 console.log(newDate.getTime());
 
 let modify= newDate.toDateString('default',{
    weekday:"short"
 })

 console.log("Modify =",modify);
 