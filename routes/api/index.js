const router = require('express').Router();
const reportRoutes = require('./reports');
const userRoutes = require('./users');

router.use('/user', userRoutes);
router.use('/report', reportRoutes);

module.exports = router;
