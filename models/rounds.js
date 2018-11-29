const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roundSchema = new Schema({
  roundNumber: {
    type: Number,
    required: true
  },
  score: {
    type: String,
    required: true
  },
  sideboardRecommendation: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
});

const Round = mongoose.model('Round', roundSchema);

module.exports = Round;
