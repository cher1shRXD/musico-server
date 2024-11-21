const express = require("express");
const auth = require("../middleware/auth");
const addSong = require("../services/queue/addSong");
const deleteSong = require("../services/queue/deleteSong");
const addLast = require("../services/queue/addLast");
const copyPlaylist = require("../services/queue/copyPlaylist");
const queueRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Queue
 *   description: Queue management APIs
 */

/**
 * @swagger
 * /queue:
 *   post:
 *     tags: [Queue]
 *     summary: Add a song to the queue
 *     requestBody:
 *       request: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the track
 *               artist:
 *                 type: array
 *                 description: List of artists
 *                 items:
 *                   type: object
 *                   properties:
 *                     artistName:
 *                       type: string
 *                       description: The name of the artist
 *                     artistId:
 *                       type: number
 *                       description: The unique ID of the artist
 *                     isGroup:
 *                       type: boolean
 *                       description: Whether the artist is a group
 *                     imageUrl:
 *                       type: string
 *                       description: URL of the artist's image
 *               videoId:
 *                 type: array
 *                 description: List of video IDs
 *                 items:
 *                   type: string
 *               trackId:
 *                 type: number
 *                 description: Unique ID of the track
 *               coverUrl:
 *                 type: string
 *                 description: URL of the cover image
 *     responses:
 *       200:
 *         description: Song added to queue successfully
 */

/**
 * @swagger
 * /queue:
 *   delete:
 *     tags: [Queue]
 *     summary: Remove a song from the queue
 *     parameters:
 *       - name: targetId
 *         in: query
 *         description: 트랙 id
 *         required: true
 *         schema:
 *           type: string
 *           example: "9999999"
 *     responses:
 *       200:
 *         description: Song removed from queue successfully
 */

/**
 * @swagger
 * /queue/add:
 *   post:
 *     tags: [Queue]
 *     summary: Add a song to the end of the queue
 *     requestBody:
 *       request: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the track
 *               artist:
 *                 type: array
 *                 description: List of artists
 *                 items:
 *                   type: object
 *                   properties:
 *                     artistName:
 *                       type: string
 *                       description: The name of the artist
 *                     artistId:
 *                       type: number
 *                       description: The unique ID of the artist
 *                     isGroup:
 *                       type: boolean
 *                       description: Whether the artist is a group
 *                     imageUrl:
 *                       type: string
 *                       description: URL of the artist's image
 *               videoId:
 *                 type: array
 *                 description: List of video IDs
 *                 items:
 *                   type: string
 *               trackId:
 *                 type: number
 *                 description: Unique ID of the track
 *               coverUrl:
 *                 type: string
 *                 description: URL of the cover image
 *     responses:
 *       200:
 *         description: Song added to the end of the queue successfully
 */

/**
 * @swagger
 * /queue/copy:
 *   post:
 *     tags: [Queue]
 *     summary: Copy a playlist to the queue
 *     parameters:
 *       - name: playlistId
 *         in: query
 *         description: 플레이리스트 id
 *         required: true
 *         schema:
 *           type: string
 *           example: "090679dd-3760-45e4-a111-e74ea32eaaa"
 *     responses:
 *       200:
 *         description: Playlist copied to queue successfully
 */

queueRouter.post("/", auth, addSong);
queueRouter.delete('/', auth, deleteSong);
queueRouter.post('/add', auth, addLast);
queueRouter.post('/copy', auth, copyPlaylist);

module.exports = queueRouter;
