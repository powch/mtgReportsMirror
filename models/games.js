const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
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
      type: Schema.Types.ObjectId,
      ref: 'Round'
    }
  ]
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
