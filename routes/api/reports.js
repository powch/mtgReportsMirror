const router = require('express').Router();
const reportController = require('../../controller/reportController');

router
  .route('/')
  .get(reportController.findAll)
  .post(reportController.create);

router
  .route('/:id')
  .get(reportController.findById)
  .put(reportController.update)
  .delete(reportController.remove);

module.exports = router;
