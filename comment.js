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
    id: 2, // Changed id to 2 for uniqueness
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
app.get("/friends/:friendId", (req, res) => {
  // Extracting friendId from the request parameters and converting it to a number
  const friendId = +req.params.friendId; // + is used to convert string to number
  const friend = friends[friendId]; // Finding the friend based on the ID
  if (friend) {
    // If friend exists, respond with status 200 and friend data as JSON
    res.status(200).json(friend);
  } else {
    // If friend doesn't exist, respond with status 404 and error message
    res.status(404).json({ error: "friend not found" });
  }
});

// Start listening on the specified PORT
app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});

/*// Importing required modules
const { error } = require("console");
const express = require("express"); // Express framework for building the server

const app = express(); // Initializing an Express application
const PORT = 3000; // Port number on which the server will run

// Mock data: Array of friends (representing a simple database)
const friends = [
  { id: 0, name: "Habib" },
  { id: 1, name: "Murtaza" },
  { id: 1, name: "Atif" },
];

// Middleware: Logs request method, URL, and response time
app.use((req, res, next) => {
  const start = Date.now(); // Start time of the request
  next(); // Pass control to the next middleware/route handler
  const delta = Date.now() - start; // Calculate response time
  console.log(`${req.method} ${req.url} ${delta}ms`); // Log request details
});

// Middleware: Converts incoming JSON payloads into JavaScript objects
app.use(express.json());

// Route: Handle POST requests to add a new friend
app.post("/friends", (req, res) => {
  // Check if the request body contains a 'name' field
  if (!req.body.name) {
    // If 'name' is missing, respond with a 400 Bad Request error
    return res.status(400).json({
      error: "name is missing",
    });
  }

  // Create a new friend object with a name from the request body
  // Assign a unique ID based on the current length of the `friends` array
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  // Add the new friend to the `friends` array
  friends.push(newFriend);

  // Respond with the newly created friend and a 200 OK status
  res.status(200).json(newFriend);
});

// Route: Root endpoint that sends a simple HTML response
app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>"); // Respond with an HTML string
});

// Route: Retrieve all friends
app.get("/friends", (req, res) => {
  res.send(friends); // Send the entire `friends` array as the response
});

// Route: Retrieve a specific friend by their ID
app.get("/friends/:friendId", (req, res) => {
  // Extract `friendId` from the route parameter and convert it to a number
  const friendId = +req.params.friendId;

  // Find the friend in the `friends` array using the ID as the index
  const friend = friends[friendId];

  // If the friend exists, respond with their data and a 200 OK status
  if (friend) {
    res.status(200).json(friend);
  } else {
    // If the friend is not found, respond with a 404 Not Found error
    res.status(404).json({ error: "friend not found" });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`); // Log a message when the server is running
});
*/
