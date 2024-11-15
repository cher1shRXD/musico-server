const Playlist = require("../../models/playlist");

const updatePlaylist = async (req, res) => {
  try{
    const { playlistId } = req.query;
    const { title } = req.body;
    const playlist = await Playlist.findById(playlistId);

    if (req.user.id != playlist.author) {
      res.status(403).json({ message: "YOU_ARE_NOT_AUTHOR" });
      return;
    }

    playlist.title = title;
    await playlist.save();

    res.status(201).json(playlist);
  }catch{
    res.status(500).json({message:"SERVER_ERROR"});
  }
}

module.exports = updatePlaylist;