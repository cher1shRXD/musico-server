const Playlist = require("../../models/playlist");
const User = require("../../models/user");

const copyPlaylist = async (req, res) => {
  try {
    const { playlistId } = req.query;
    const user = await User.findById(req.user.id);
    const playlist = await Playlist.findOne({ id: playlistId });

    user.queue = playlist.songs;
    user.originalQueue = playlist.songs;
    user.currentSong = 0;

    user.save();
    res.status(200).json(user);
  } catch {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = copyPlaylist;