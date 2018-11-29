const router = require('express').Router();
const reportRoutes = require('./reports');

router.use('/reports', reportRoutes);

module.exports = router;
