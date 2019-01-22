const router = require('express').Router();
const roundController = require('../../controller/roundController');

router
  .route('/')
  .get(roundController.findAll)
  .post(roundController.create);

router
  .route('/:id')
  .get(roundController.findOne)
  .put(roundController.update)
  .delete(roundController.destroy);

module.exports = router;
