const express = require('express');
const router = express.Router();
const Activity = require('../models/activities.js');

//___________________
// Routes
//___________________
//
// app.get('/activities' , (req, res) => {
// router.get('/' , (req, res) => {
//   // res.render('index.ejs');
//   res.send('Activity');
// });

router.get('/', (req, res) => {
  Activity.find({}, (error, allActivities) => {
    res.render('index.ejs', {
      activities : allActivities
    });
  });
});

router.get('/seed', (req, res) => {
  Activity.create([
    {
      name: 'Cyndy',
      activity: 'biking',
      time: 1.0,
      date: '2018-10-10'
    },
    {
      name: 'Judy',
      activity: 'running',
      time: 1.5,
      date: '2018-10-9'
    },
    {
      name: 'Mimi',
      activity: 'swimming',
      time: .75,
      date: '2018-10-5'
    }
  ], (err, data) => {
    res.redirect('/activities');
  });
});

router.get('/new', (req, res) => {
  res.render('new.ejs');
});

router.get('/:id', (req, res) => {
  res.render('show.ejs');;
});

router.get('/:id/edit', (req, res) => {
  res.render('edit.ejs');
});


module.exports = router;
