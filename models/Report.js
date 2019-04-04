const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  format: {
    type: String,
    required: 'Format is required'
  },
  event: {
    type: String
  },
  userDeck: {
    type: String,
    required: 'User deck is required'
  },
  rounds: [{
    opponentDeck: {
      type: String,
      required: 'Opponent deck is required'
    },
    result: {
      type: String,
      required: 'Round result is required'
    },
    sideboardRecommendation: {
      type: String
    },
    notes: {
      type: String
    }
  }]
});

const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;