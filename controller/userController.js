const db = require('../models');

module.exports = {

  findOne: (req, res) => {
    db.User.findOne({
      where: { fbId: req.params.id },
      include: [
        {
          model: db.Report,
          include: [
            {
              model: db.Round
            }
          ]
        }
      ]
    })
    .then(foundUser => res.json(foundUser))
    .catch(err => res.status(422).json(err));
  },

  findOneReports: (req, res) => {
    db.User.findOne({
      where: { fbId: req.params.id },
      include: [
        {
          model: db.Report
        }
      ]
    })
    .then(foundReports => res.json(foundReports))
    .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    db.User
      .create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  findOrCreate: (req, res) => {
    db.User.findOrCreate({
      where: { fbId: req.params.id },
      defaults: {
        profilePic:
          'https://s3.amazonaws.com/whisperinvest-images-prod/default-profile.png?dc=1548153033841'
      }
    })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};
