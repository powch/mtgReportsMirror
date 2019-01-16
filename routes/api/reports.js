const router = require('express').Router();
const reportController = require('../../controller/reportController');

router
  .route('/')
  .get(reportController.findAll)
  .post(reportController.create);

router
  .route('/:id')
  .get(reportController.findOne)
  .put(reportController.update)
  .delete(reportController.destroy);

module.exports = router;
