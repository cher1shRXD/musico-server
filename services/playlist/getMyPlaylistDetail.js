const Playlist = require("../../models/playlist");

const getMyPlaylistDetail = async (req, res) => {
  try {
    const { playlistId } = req.query;
    const playlist = await Playlist.findOne({ id: playlistId });
    res.status(200).json(playlist);
  } catch {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = getMyPlaylistDetail;
