const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  reports: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Report'
    }
  ]
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
