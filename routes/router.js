const router = require('express').Router();

const { getHomeController } = require('../controller/home');

router.get('/', getHomeController);

module.exports = router;
