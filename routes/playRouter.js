const express = require('express');
const playNext = require('../services/play/playNext');
const playPrevious = require('../services/play/playPrevious');
const auth = require('../middleware/auth');
const playRouter = express.Router();

playRouter.get('/next', auth, playNext);
playRouter.get("/previous", auth, playPrevious);

module.exports = playRouter;