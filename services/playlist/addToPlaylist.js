const Playlist = require("../../models/playlist");

const addToPlaylist = async (req, res) => {
  try {
    const { playlistId } = req.query;
    const song = req.body;
    const playlist = await Playlist.findOne({ id: playlistId });

    if (req.user.id != playlist.author) {
      res.status(403).json({ message: "YOU_ARE_NOT_AUTHOR" });
      return;
    }

    const isDuplicated = playlist.songs.filter(
      (item) => item.trackId == song.trackId
    );
    if (isDuplicated.length > 0) {
      res.status(409).json({ message: "SONG_DUPLICATED" });
      return;
    } else {
      playlist.songs.push(song);
    }

    await playlist.save();
    res.status(201).json({message: 'SUCCESSFULLY_ADDED_TO_PLAYLIST'});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = addToPlaylist;
