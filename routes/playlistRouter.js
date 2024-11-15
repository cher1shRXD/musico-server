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
playlistRouter.post('/add', auth, addToPlaylist);
playlistRouter.patch('/update', auth, updatePlaylist);
playlistRouter.delete('/', auth, deletePlaylist);
playlistRouter.delete('/delete', auth, deleteFromPlaylist);

module.exports = playlistRouter;