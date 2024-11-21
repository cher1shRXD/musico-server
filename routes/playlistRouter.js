const express = require('express');
const getMyPlaylist = require('../services/playlist/getMyPlaylist');
const getMyPlaylistDetail = require('../services/playlist/getMyPlaylistDetail');
const createPlaylist = require('../services/playlist/createPlaylist');
const addToPlaylist = require('../services/playlist/addToPlaylist');
const updatePlaylist = require('../services/playlist/updatePlaylist');
const deletePlaylist = require('../services/playlist/deletePlaylist');
const deleteFromPlaylist = require('../services/playlist/deleteFromPlaylist');
const auth = require('../middleware/auth');
const playlistRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Playlist
 *   description: 플레이리스트
 */

/**
 * @swagger
 * /playlist:
 *   get:
 *     tags: [Playlist]
 *     summary: 내 플리 조회
 *     responses:
 *       200:
 *         description: 플리 조회 성공
 */

/**
 * @swagger
 * /playlist/my:
 *   get:
 *     tags: [Playlist]
 *     summary: 내 플리 상세 조회
 *     parameters:
 *       - name: playlistId
 *         in: query
 *         description: 플레이리스트 id
 *         required: true
 *         schema:
 *           type: string
 *           example: "090679dd-3760-45e4-a111-e74ea32e938c"
 *     responses:
 *       200:
 *         description: 내 플리 상세 조회 성공
 */

/**
 * @swagger
 * /playlist:
 *   post:
 *     tags: [Playlist]
 *     summary: 플레이리스트 생성
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 
 *     responses:
 *       201:
 *         description: 플레이리스트 생성 성공
 */

/**
 * @swagger
 * /playlist/song:
 *   post:
 *     tags: [Playlist]
 *     summary: 플레이리스트에 곡 추가
 *     parameters:
 *       - name: playlistId
 *         in: query
 *         description: 플레이리스트 id
 *         required: true
 *         schema:
 *           type: string
 *           example: "090679dd-3760-45e4-a111-e74ea32e938c"
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
 *         description: 추가 성공
 */

/**
 * @swagger
 * /playlist:
 *   patch:
 *     tags: [Playlist]
 *     summary: Update a playlist
 *     parameters:
 *       - name: playlistId
 *         in: query
 *         description: 플레이리스트 id
 *         required: true
 *         schema:
 *           type: string
 *           example: "090679dd-3760-45e4-a111-e74ea32eaaa"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: Playlist updated successfully
 */

/**
 * @swagger
 * /playlist:
 *   delete:
 *     tags: [Playlist]
 *     summary: Delete a playlist
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
 *         description: Playlist deleted successfully
 */

/**
 * @swagger
 * /playlist/song:
 *   delete:
 *     tags: [Playlist]
 *     summary: Remove a song from a playlist
 *     parameters:
 *       - name: playlistId
 *         in: query
 *         description: 플레이리스트 id
 *         required: true
 *         schema:
 *           type: string
 *           example: "090679dd-3760-45e4-a111-e74ea32eaaa"
 *       - name: targetId
 *         in: targetId
 *         description: 트랙 id
 *         required: true
 *         schema:
 *           type: string
 *           example: "9999999"
 *     responses:
 *       200:
 *         description: Song removed from playlist successfully
 */

playlistRouter.get('/', auth, getMyPlaylist);
playlistRouter.get('/my', auth, getMyPlaylistDetail);
playlistRouter.post('/', auth, createPlaylist);
playlistRouter.post('/song', auth, addToPlaylist);
playlistRouter.patch('/', auth, updatePlaylist);
playlistRouter.delete('/', auth, deletePlaylist);
playlistRouter.delete('/song', auth, deleteFromPlaylist);

module.exports = playlistRouter;