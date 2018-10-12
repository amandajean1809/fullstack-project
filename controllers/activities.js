const express = require('express');
const router = express.Router();
const Activity = require('../models/activities.js');

//___________________
// Routes
//___________________
//
// app.get('/activities' , (req, res) => {
router.get('/' , (req, res) => {
  // res.render('index.ejs');
  res.send('Activity');
});

module.exports = router;
