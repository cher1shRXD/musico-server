const express = require('express');
const imageUrlProxy = require('../services/proxy/imageProxy');
const imageFileProxy = require('../services/proxy/imageFileProxy');
const proxyRouter = express.Router();

proxyRouter.get('/url', imageUrlProxy);
proxyRouter.get('/image', imageFileProxy);

module.exports = proxyRouter;