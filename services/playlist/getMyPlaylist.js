const Playlist = require("../../models/playlist");

const getMyPlaylist = async (req, res) => {
  try {
    const myPlaylists = Playlist.find({ author: req.user.id });
    res.status(200).json(myPlaylists);
  } catch {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = getMyPlaylist;