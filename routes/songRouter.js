const express = require("express");
const getRankSong = require("../services/song/getRankSongs");
const searchSong = require("../services/song/searchSongs");
const getNewSong = require("../services/song/getNewSong");
const songRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Songs
 *   description: Song-related APIs
 */

/**
 * @swagger
 * /songs/chart:
 *   get:
 *     tags: [Songs]
 *     summary: Get ranked songs (chart)
 *     responses:
 *       200:
 *         description: Ranked songs retrieved successfully
 */

/**
 * @swagger
 * /songs/search:
 *   get:
 *     tags: [Songs]
 *     summary: Search for songs
 *     parameters:
 *       - name: q
 *         in: query
 *         description: 검색어
 *         required: true
 *         schema:
 *           type: string
 *           example: "애쉬아일랜드"
 *     responses:
 *       200:
 *         description: Songs retrieved successfully
 */

/**
 * @swagger
 * /songs/new-songs:
 *   get:
 *     tags: [Songs]
 *     summary: Get new songs
 *     responses:
 *       200:
 *         description: New songs retrieved successfully
 */

songRouter.get("/chart", getRankSong);
songRouter.get("/search", searchSong);
songRouter.get("/new-songs", getNewSong);

module.exports = songRouter;