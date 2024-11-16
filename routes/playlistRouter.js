const express = require('express');
const getMyPlaylist = require('../services/playlist/getMyPlaylist');
const getMyPlaylistDetail = require('../services/playlist/getMyPlaylistDetail');
const createPlaylist = require('../services/playlist/createPlaylist');
const addToPlaylist = require('../services/playlist/addToPlaylist');
const updatePlaylist = require('../services/playlist/updatePlaylist');
const deletePlaylist = require('../services/playlist/deletePlaylist');
const deleteFromPlaylist = require('../services/playlist/deleteFromPlaylist');
const playlistRouter = express.Router();

playlistRouter.get('/', auth, getMyPlaylist);
playlistRouter.get('/my', auth, getMyPlaylistDetail);
playlistRouter.post('/', auth, createPlaylist);
playlistRouter.post('/song', auth, addToPlaylist);
playlistRouter.patch('/', auth, updatePlaylist);
playlistRouter.delete('/', auth, deletePlaylist);
playlistRouter.delete('/song', auth, deleteFromPlaylist);

module.exports = playlistRouter;