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

/**
 * @swagger
 * tags:
 *   name: Play
 *   description: 재생
 */

/**
 * @swagger
 * /play/next:
 *   get:
 *     tags: [Play]
 *     summary: currentSong에 +1
 *     responses:
 *       200:
 *         description: 다음 곡 재생 성공
 */

/**
 * @swagger
 * /play/previous:
 *   get:
 *     tags: [Play]
 *     summary: currentSong에 -1
 *     responses:
 *       200:
 *         description: 이전 곡 재생 성공
 */

/**
 * @swagger
 * /play/update-shuffle:
 *   patch:
 *     tags: [Play]
 *     summary: 재생목록 섞기 on off
 *     responses:
 *       200:
 *         description: 셔플 전환 성공
 */