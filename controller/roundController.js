const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Round
      .findAll({})
      .then(dbRound => res.json(dbRound))
      .catch(err => res.status(422).json(err));
  },

  findOne: (req, res) => {
    db.Round
      .findOne({
        where: { id: req.body.id },
        include: [ db.sideboardRecommendation ]
      })
      .then(dbRound => res.json(dbRound))
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    db.Round
      .create(req.body)
      .then(newRound => res.json(newRound))
      .catch(err => res.status(422).json(err));
  },

  destroy: (req, res) => {
    db.Round
      .destroy({ where: { id: req.params.id }})
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    db.Round
      .update(req.body, {
        where: { id: req.body.id }
      })
      .then(dbRound => res.json(dbRound))
      .catch(err => res.status(422).json(err));
  }
};