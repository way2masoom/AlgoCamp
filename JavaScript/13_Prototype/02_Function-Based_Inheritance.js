// Parent function
function EventBooking(eventType) {
    this.eventType = eventType;
}

// Adding a method to the EventBooking prototype
EventBooking.prototype.book = function() {
    console.log(`Booking confirmed for ${this.eventType}.`);
};

// Child function Movie
function Movie(name) {
    EventBooking.call(this, 'Movie'); // Inheriting properties from EventBooking
    this.name = name;
}

// Inherit methods from EventBooking prototype
Movie.prototype = Object.create(EventBooking.prototype);

// Adding a method specific to Movie
Movie.prototype.showDetails = function() {
    console.log(`Movie: ${this.name}`);
};

// Child function Comedy
function Comedy(name) {
    EventBooking.call(this, 'Comedy'); // Inheriting properties from EventBooking
    this.name = name;
}

// Inherit methods from EventBooking prototype
Comedy.prototype = Object.create(EventBooking.prototype);

// Adding a method specific to Comedy
Comedy.prototype.showDetails = function() {
    console.log(`Comedy Show: ${this.name}`);
};

// Creating instances of Movie and Comedy
let movie1 = new Movie('Inception');
let comedy1 = new Comedy('Stand-Up Special');

// Calling inherited and child-specific methods
movie1.book();          // Output: Booking confirmed for Movie.
movie1.showDetails();   // Output: Movie: Inception.

comedy1.book();         // Output: Booking confirmed for Comedy.
comedy1.showDetails();  // Output: Comedy Show: Stand-Up Special.
