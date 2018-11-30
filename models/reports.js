const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  format: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  },
  userDeck: {
    type: String,
    required: true
  },
  rounds: [
    {
      type: Schema.Types.Mixed,
      required: true
    }
  ]
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
