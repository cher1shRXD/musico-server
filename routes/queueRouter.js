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
