const router = require('express').Router();
const userController = require('../../controller/userController');

router
  .route('/:id')
  .get(userController.findOneAndPopulate)
  .post(userController.create)

  module.exports = router; 