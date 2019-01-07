const router = require('express').Router();
const reportRoutes = require('./reports');
const userRoutes = require('./users');

router.use('/reports', reportRoutes);
router.use('/user', userRoutes);

module.exports = router;
