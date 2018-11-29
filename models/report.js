const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
