const db = require('../models');

module.exports = {

  create: (req, res) => {
    db.User.create({
      fbId: req.params.id,
      displayName: req.body.displayName
    })
      .then(newUser => res.json(newUser))
      .catch(err => res.status(422).json(err))
  },

  findOne: (req, res) => {
    db.User.findOne({ fbId: req.params.id })
      .then(userInfo => res.json(userInfo))
      .catch(err => res.status(422).json(err))
  }

};
