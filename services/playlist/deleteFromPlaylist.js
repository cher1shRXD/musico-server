const Playlist = require("../../models/playlist");

const deleteFromPlaylist = async (req, res) => {
  try {
    const { playlistId, trackId } = req.query;
    const playlist = await Playlist.findOne({ id: playlistId });

    if (req.user.id != playlist.author) {
      res.status(403).json({ message: "YOU_ARE_NOT_AUTHOR" });
      return;
    }

    playlist.songs = playlist.songs.filter(
      (item) => item.trackId != trackId
    );
    
    await playlist.save();
    res.status(204).json({ message: "SUCCESSFULLY_DELETED_FROM_PLAYLIST" });
  } catch {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = deleteFromPlaylist;
