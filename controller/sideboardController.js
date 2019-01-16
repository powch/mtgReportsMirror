const db = require('../models');

module.exports = {
  create: (req, res) => {
    db.sideboardRecommendation
      .create(req.body)
      .then(dbSideBoard => res.json(dbSideBoard))
      .catch(err => res.status(422));
  },

  destroy: (req, res) => {
    db.sideboardRecommendation
      .destroy({ where: { id: req.params.id } })
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    db.sideboardRecommendation
      .update(req.body, {
        where: { id: req.body.id }
      })
      .then(dbRound => res.json(dbRound))
      .catch(err => res.status(422).json(err));
  },

  findOne: (req, res) => {
    db.sideboardRecommendation
      .find({
        where: { id: req.params.id }
      })
      .then(dbSideBoard => res.json(dbSideBoard))
      .catch(err => res.status(422).json(err));
  }
}