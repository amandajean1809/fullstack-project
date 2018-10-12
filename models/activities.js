const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = Schema({
  name: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  time: Number,
  date: {
    type: Date,
    default: Date.now
  }
})

const Activity = mongoose.model('Activity', activitySchema)

module.exports = Activity
