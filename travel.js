const fs = require("fs");

// Read the file
const data = fs.readFileSync("itinerary.json");

// Convert JSON string → JS object
const itinerary = JSON.parse(data);

// Print details
console.log("Trip Name:", itinerary.tripName);
console.log("Traveler:", itinerary.traveler.name);
console.log("First Destination:", itinerary.destinations[0].location);
console.log("First Activity:", itinerary.destinations[0].activities[0].title);
