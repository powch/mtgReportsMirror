const router = require('express').Router();
const reportRoutes = require('./reports');
const userRoutes = require('./users');
const roundRoutes = require('./rounds');
const sideboardRoutes = require('./sideboards');

router.use('/user', userRoutes);
router.use('/report', reportRoutes);
router.use('/round', roundRoutes);
router.use('/sideboard', sideboardRoutes);

module.exports = router;
