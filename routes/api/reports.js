const router = require('express').Router();
const reportController = require('../../controller/reportController');

router
  .route('/')
  .get(reportController.findAll);


router
  .route('/:id')
  .post(reportController.create);
module.exports = router;
