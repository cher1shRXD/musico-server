const express = require("express");
const auth = require("../middleware/auth");
const addSong = require("../services/queue/addSong");
const deleteSong = require("../services/queue/deleteSong");
const addLast = require("../services/queue/addLast");
const queueRouter = express.Router();

queueRouter.post("/", auth, addSong);
queueRouter.delete('/', auth, deleteSong);
queueRouter.post('/add', auth, addLast);

module.exports = queueRouter;
