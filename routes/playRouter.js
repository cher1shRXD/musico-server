const express = require('express');
const playNext = require('../services/play/playNext');
const playPrevious = require('../services/play/playPrevious');
const auth = require('../middleware/auth');
const updateShuffle = require('../services/play/updateShuffle');
const playRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Play
 *   description: Song playback management APIs
 */

/**
 * @swagger
 * /play/next:
 *   get:
 *     tags: [Play]
 *     summary: Play the next song
 *     responses:
 *       200:
 *         description: Next song played successfully
 */

/**
 * @swagger
 * /play/previous:
 *   get:
 *     tags: [Play]
 *     summary: Play the previous song
 *     responses:
 *       200:
 *         description: Previous song played successfully
 */

/**
 * @swagger
 * /play/update-shuffle:
 *   patch:
 *     tags: [Play]
 *     summary: Update shuffle mode
 *     responses:
 *       200:
 *         description: Shuffle mode updated successfully
 */

playRouter.get('/next', auth, playNext);
playRouter.get("/previous", auth, playPrevious);
playRouter.patch('/update-shuffle', auth, updateShuffle);

module.exports = playRouter;