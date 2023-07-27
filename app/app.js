const express = require('express');
const { getAppHealthCheckerController } = require('../controller/app');

const app = express();

app.get('/health', getAppHealthCheckerController);

module.exports = app;
