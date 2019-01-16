const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Report
      .findAll({ include: [ db.Round ]})
      .then(dbReports => res.json(dbReports))
      .catch(err => status(422).json(err));
  },

  findOne: (req, res) => {
    db.Report
      .findOne(
        { 
          where: { id: req.params.id }, 
          include: [ db.Round ]
        }
      )
      .then(dbReport => res.json(dbReport))
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    db.Report
      .create(req.body)
      .then(dbReport => res.json(dbReport))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    db.Report
      .update( req.body, {
        where: { id: req.body.id }
      })
      .then(dbReport => res.json(dbReport))
      .catch(err => res.status(422).json(err));
  },

  destroy: (req, res) => {
    db.Report
      .destroy({ where: { id: req.body.id }})
      .then(dbReport => res.json(dbReport))
      .catch(err => res.status(422).json(err));
  }
};
