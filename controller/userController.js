const db = require('../models');

module.exports = {

  create: (req, res) => {
    db.User.create( req.body )
  },

  findOneAndPopulate: (req, res) => {
    db.User.fineOne({ uid: req.body.uid })
      .populate('report')
      .then(userReports => res.json(userReports))
      .catch(err => res.status(422).json(err))
  }

};
