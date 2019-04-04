const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fbId: {
    type: String,
    required: 'User ID is required'
  },
  displayName: {
    type: String,
    required: 'Display name is required'
  },
  report: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Report'
  }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;