var session = require('express-session');
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

app.use(session({
  secret: 'kingKrool',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Require path
var path = require('path');
// Require Mongoose
var mongoose = require('mongoose');

// Use native promises
mongoose.Promise = global.Promise;

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes

//require express flash
const flash = require('express-flash');
app.use(flash());

require('./server/config/routes.js')(app)
require('./server/config/mongoose.js')

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
