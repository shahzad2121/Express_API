const express = require("express");

const friendsRouter = require('./routes/friends.router')
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  //Date.now shows current data from Jan 1, 1970
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

//this is a express builtin fnc to convert js object to json file
app.use(express.json());

app.use("/friends", friendsRouter);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});
