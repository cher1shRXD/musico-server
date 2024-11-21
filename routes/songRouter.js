const express = require("express");
const getRankSong = require("../services/song/getRankSongs");
const searchSong = require("../services/song/searchSongs");
const getNewSong = require("../services/song/getNewSong");
const songRouter = express.Router();

songRouter.get("/chart", getRankSong);
songRouter.get("/search", searchSong);
songRouter.get("/new-songs", getNewSong);

module.exports = songRouter;

/**
 * @swagger
 * tags:
 *   name: Songs
 *   description: 노래 목록 가져오기
 */

/**
 * @swagger
 * /songs/chart:
 *   get:
 *     tags: [Songs]
 *     summary: 차트 가져오기
 *     responses:
 *       200:
 *         description: 차트 가져오기 성공
 */

/**
 * @swagger
 * /songs/search:
 *   get:
 *     tags: [Songs]
 *     summary: 검색어를 통해 노래 검색
 *     parameters:
 *       - name: q
 *         in: query
 *         description: 검색어
 *         required: true
 *         schema:
 *           type: string
 *           example: "악몽 - 애쉬아일랜드"
 *     responses:
 *       200:
 *         description: 노래 검색 성공
 */

/**
 * @swagger
 * /songs/new-songs:
 *   get:
 *     tags: [Songs]
 *     summary: 신곡 가져오기
 *     responses:
 *       200:
 *         description: 신곡 가져오기 성공
 */