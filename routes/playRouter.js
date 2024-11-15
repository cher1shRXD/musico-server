const express = require('express');
const playNext = require('../services/play/playNext');
const playPrevious = require('../services/play/playPrevious');
const auth = require('../middleware/auth');
const updateShuffle = require('../services/play/updateShuffle');
const playRouter = express.Router();

playRouter.get('/next', auth, playNext);
playRouter.get("/previous", auth, playPrevious);
playRouter.patch('/update-shuffle', auth, updateShuffle);

module.exports = playRouter;