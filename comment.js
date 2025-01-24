// Importing express library
const express = require("express");

// Initializing the express app
const app = express();

// Setting the port number
const PORT = 3000;

// Array of friends as mock data
const friends = [
  {
    id: 0,
    name: "Habib",
  },
  {
    id: 1,
    name: "Murtaza",
  },
  {
    id: 2,   // Changed id to 2 for uniqueness
    name: "Atif",
  },
];

// Route for the home page, sending a simple HTML response
app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

// Route for getting all friends, responds with the friends array
app.get("/friends", (req, res) => {
  res.send(friends);
});

// Route for getting a specific friend by their id (friendId)
app.get('/friends/:friendId', (req, res) => {
    // Extracting friendId from the request parameters and converting it to a number
    const friendId = +req.params.friendId; // + is used to convert string to number
    const friend = friends[friendId]; // Finding the friend based on the ID
    if(friend){
        // If friend exists, respond with status 200 and friend data as JSON
        res.status(200).json(friend);
    } else {
        // If friend doesn't exist, respond with status 404 and error message
        res.status(404).json({ error: 'friend not found' });
    }
});

// Start listening on the specified PORT
app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});
