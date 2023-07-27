const router = require('express').Router();

const { getHomeController } = require('../controller');

router.get('/', getHomeController);

module.exports = router;
