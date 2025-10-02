const fs = require("fs");

// Read the file
const data = fs.readFileSync("itinerary.json");

// Convert JSON string → JS object
const itinerary = JSON.parse(data);


// Print details
console.log("Trip Name:", itinerary.tripName);
console.log("Traveler:", itinerary.traveler.name);
console.log("Transportation:", itinerary.transportation.mode);
console.log("Rental Car Cost:", itinerary.transportation.cost);
console.log("Hotel Name:", itinerary.hotel.name);
console.log("Hotel Pricing per day:", itinerary.hotel.cost_per_day);
console.log("First Destination:", itinerary.destinations[0].location);
console.log("First Activity:", itinerary.destinations[0].activities[0].title);
console.log("Second Destination:", itinerary.destinations[1].location);
console.log("Second Activity:", itinerary.destinations[1].activities[0].title);