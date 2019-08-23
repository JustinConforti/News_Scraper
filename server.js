var express = require("express");
var logger = require("morgan");
const url = 'mongodb://localhost:27017/news_scraper';//=========================//

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Configure middleware
// Use morgan logger for logging requests
app.use(logger("dev"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
// require("./controllers/controller.js")(app);
const Article = require('./models/article.js');


app.listen(PORT, function(){
    console.log(`Listening on port: ${PORT}`);
})