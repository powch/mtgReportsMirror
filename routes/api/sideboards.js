const router = require('express').Router();
const sideboardController = require('../../controller/sideboardController');

router
  .route('/:id')
  .put(sideboardController.update)
  .post(sideboardController.create)
  .delete(sideboardController.destroy)

module.exports = router; 