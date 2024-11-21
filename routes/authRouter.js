const express = require("express");
const login = require("../services/auth/login");
const signup = require("../services/auth/signup");
const refresh = require("../services/auth/refresh");
const getMe = require("../services/auth/me");
const auth = require("../middleware/auth");
const authRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: 인증인가
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: 로그인 성공
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags: [Auth]
 *     summary: 회원가입
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원가입 성공
 */

/**
 * @swagger
 * /auth/refresh:
 *   post:
 *     tags: [Auth]
 *     summary: 토큰 재발급
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: 토큰 재발급 성공
 */

/**
 * @swagger
 * /auth/me:
 *   get:
 *     tags: [Auth]
 *     summary: 나 조회
 *     responses:
 *       200:
 *         description: 나 조회 성공
 */
authRouter.post("/login", login);
authRouter.post("/signup", signup);
authRouter.post("/refresh", refresh);
authRouter.get("/me", auth, getMe);

module.exports = authRouter;