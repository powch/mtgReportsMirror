const db = require('../models');

module.exports = {

  findOne: (req, res) => {
    db.User.findOne({
      where: { userId: req.params.userId },
      include: [
        {
          model: db.Report,
          include: [
            {
              model: db.Round,
              include: [db.sideboardRecommendation]
            }
          ]
        }
      ]
    })
    .then(foundUser => res.json(foundUser))
    .catch(err => res.status(422).json(err));
  },

  findOrCreate: (req, res) => {
    db.User
      .findOrCreate({
        where: { userId: req.params.userId }
      })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};
