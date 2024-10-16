// parents class
class Events{
    bookEvent(){
        console.log("booking events");
        
    }
}

// movie class Inherent the properties of bookEvent
class movie extends Events{
    showtime(){
        console.log("show time");
    }
}

console.log(movie.prototype.__proto__);
m=new movie();
m.showtime();
m.bookEvent();