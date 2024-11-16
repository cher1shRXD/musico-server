const Playlist = require("../../models/playlist");

const deletePlaylist = async (req, res) => {
  try {
    const { playlistId } = req.query;
    await Playlist.findOneAndDelete({ id: playlistId });
    res.status(204).json({ message: "SUCCESSFULLY_DELETED" });
  } catch {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = deletePlaylist;
