const db = require("../models");

module.exports = {

  create: (req, res) => {
    db.Report.create( req.body )
      .then(newReport => {
        return db.User.findOneAndUpdate(
          { fbId: req.params.id },
          { report: newReport._id },
          { new: true }
        )
      })
      .then(updatedUser => res.json(updatedUser))
      .catch(err => res.status(422).json(err))
  },

  findAll: (req, res) => {
    db.Report.find({}).sort({date: -1})
      .then(reports => res.json(reports))
      .catch(err => res.status(422).json(err))
  }

};
