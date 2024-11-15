const Playlist = require("../../models/playlist");

const addToPlaylist = async (req, res) => {
  try {
    const { playlistId } = req.query;
    const song = req.body;
    const playlist = await Playlist.findById(playlistId);

    if (req.user.id != playlist.author) {
      res.status(403).json({ message: "YOU_ARE_NOT_AUTHOR" });
      return;
    }

    const isDuplicated = playlist.songs.filter(
      (item) => item.trackId == song.trackId
    );
    if (isDuplicated.length > 0) {
      res.status(409).json({ message: "SONG_DUPLICATED" });
    } else {
      playlist.songs.push(data);
    }

    await playlist.save();
    res.status(201);
  } catch {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = addToPlaylist;