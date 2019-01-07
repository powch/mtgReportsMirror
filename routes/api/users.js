const router = require('express').Router();
const userController = require('../../controller/userController');

router
  .route('/:id')
  .get(userController.findOne)
  .post(userController.findOrCreate)

  module.exports = router; 