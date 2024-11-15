const Playlist = require("../../models/playlist");
const User = require("../../models/user")

const createPlaylist = async (req, res) => {
  try{
    const user = await User.findById(req.user.id);
    const { title } = req.body;

    const playlist = new Playlist({
      title,
      author: user.id,
    });

    await playlist.save();

    res.status(201).json({ message: "PLAYLIST_CREATED_SUCCESSFULLY" });
  }catch{
    res.status(500).json({ message: "SERVER_ERROR" });
  }
}

module.exports = createPlaylist;