const router = require('express').Router();
const apiRoutes = require('./api');

// This is for api routes.
router.use('/api', apiRoutes);

// This is the catch-all for undefined routes.
router.use((req, res) => res.status(404).send('Wrong route.'));

module.exports = router;