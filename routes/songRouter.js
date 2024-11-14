const express = require("express");
const getRankSong = require("../services/song/getRankSongs");
const searchSong = require("../services/song/searchSongs");
const getNewSong = require("../services/song/getNewSong");
const songRouter = express.Router();

songRouter.get("/chart", getRankSong);
songRouter.get("/search", searchSong);
songRouter.get("/new-songs", getNewSong);

module.exports = songRouter;