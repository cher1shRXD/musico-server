const express = require("express");
const auth = require("../middleware/auth");
const addSong = require("../services/queue/addSong");
const deleteSong = require("../services/queue/deleteSong");
const addLast = require("../services/queue/addLast");
const copyPlaylist = require("../services/queue/copyPlaylist");
const queueRouter = express.Router();

queueRouter.post("/", auth, addSong);
queueRouter.delete('/', auth, deleteSong);
queueRouter.post('/add', auth, addLast);
queueRouter.post('/copy', auth, copyPlaylist);

module.exports = queueRouter;

/**
 * @swagger
 * tags:
 *   name: Queue
 *   description: 내 재생목록 가져오기
 */

/**
 * @swagger
 * /queue:
 *   post:
 *     tags: [Queue]
 *     summary: videoId가 있는 곡을 재생목록에 추가
 *     requestBody:
 *       request: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: 트랙 제목
 *               artist:
 *                 type: array
 *                 description: 아티스트 목록
 *                 items:
 *                   type: object
 *                   properties:
 *                     artistName:
 *                       type: string
 *                       description: 아티스트 이름
 *                     artistId:
 *                       type: number
 *                       description: 아티스트 아이디
 *                     isGroup:
 *                       type: boolean
 *                       description: 그룹인지 아닌지 표시
 *                     imageUrl:
 *                       type: string
 *                       description: 아티스트 프로필 사진
 *               videoId:
 *                 type: array
 *                 description: videoId가 담긴 배열
 *                 items:
 *                   type: string
 *               trackId:
 *                 type: number
 *                 description: 트랙 아이디
 *               coverUrl:
 *                 type: string
 *                 description: 앨범 커버
 *     responses:
 *       200:
 *         description: 재생목록에 추가 성공
 */

/**
 * @swagger
 * /queue:
 *   delete:
 *     tags: [Queue]
 *     summary: 트랙 id로 재생목록에서 곡 삭제
 *     parameters:
 *       - name: targetId
 *         in: query
 *         description: 트랙 id
 *         required: true
 *         schema:
 *           type: string
 *           example: "99999999"
 *     responses:
 *       200:
 *         description: 재생목록에서 곡 삭제 성공
 */

/**
 * @swagger
 * /queue/add:
 *   post:
 *     tags: [Queue]
 *     summary: videoId가 있는 곡을 재생목록 가장 마지막에 곡 추가
 *     requestBody:
 *       request: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: 트랙 제목
 *               artist:
 *                 type: array
 *                 description: 아티스트 목록
 *                 items:
 *                   type: object
 *                   properties:
 *                     artistName:
 *                       type: string
 *                       description: 아티스트 이름
 *                     artistId:
 *                       type: number
 *                       description: 아티스트 아이디
 *                     isGroup:
 *                       type: boolean
 *                       description: 그룹인지 아닌지 표시
 *                     imageUrl:
 *                       type: string
 *                       description: 아티스트 프로필 이미지
 *               videoId:
 *                 type: array
 *                 description: 비디오 아이디가 담긴 배열
 *                 items:
 *                   type: string
 *               trackId:
 *                 type: number
 *                 description: 트랙 id
 *               coverUrl:
 *                 type: string
 *                 description: 앨범 커버
 *     responses:
 *       200:
 *         description: Song added to the end of the queue successfully
 */

/**
 * @swagger
 * /queue/copy:
 *   post:
 *     tags: [Queue]
 *     summary: 플레이리스트 id를 이용해 특정 플레이리스트를 재생목록으로 복사
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
 *         description: 플레이리스트 복사 성공
 */