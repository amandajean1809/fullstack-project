//___________________
//Dependencies
//___________________
const express = require('express');
const app = express();
const mongoose = require ('mongoose');
// const Activity = require('./models/activities.js');
const methodOverride  = require('method-override');

const db = mongoose.connection;

require('dotenv').config();
//___________________
// Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;
//
//___________________
// Middleware
//___________________
// use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
//
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
//
//use public folder for static assets
app.use(express.static('public'));
//
app.use(express.json());// returns middleware that only parses JSON
//
//
const activityController = require('./controllers/activities.js');
app.use('/activities', activityController);

//___________________
// Listener
//___________________
app.listen(3000, () => {
  console.log( 'Listening on port:', 3000 );
});

//___________________
// Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/27017/ '+ `activities`;

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// Error / success
// db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
// db.on('disconnected', () => console.log('mongo disconnected'));
//
// // open the connection to mongo
// db.on('open' , ()=>{});
