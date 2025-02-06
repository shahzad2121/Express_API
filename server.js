const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const { title } = require("process");

const app = express();
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


const PORT = 3000;

app.use((req, res, next) => {
  //Date.now shows current data from Jan 1, 1970
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${delta}ms`);
});

app.get("/img", (req, res) => {
  //path.join is express builtin fnc which determine the path to the file based on the system as OS uses diff path mac[/friends/1], windows[\friends\1]
  res.sendFile(path.join(__dirname, ".", "public", "res.png"));
  // res.send("<h1>hello world</h1>");
});

//this is a express builtin fnc to convert js object to json file
app.use(express.json());
app.use("/friends", friendsRouter);
app.use('/site', express.static(path.join(__dirname,'.', 'public')))

app.get('/view', (req, res) => {
  res.render('index', {
    title:'Hello World!',
    caption: 'let\'s have some fun'
  })
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});
