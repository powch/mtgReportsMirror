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

  findOneAndPopulate: (req, res) => {
    db.User.findOne({ uid: req.params.id })
      .populate('report')
      .then(userReports => res.json(userReports))
      .catch(err => res.status(422).json(err))
  }

};
