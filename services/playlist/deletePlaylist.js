const Playlist = require("../../models/playlist");

const deletePlaylist = async (req, res) => {
  try{
    const { playlistId } = req.query;
    await Playlist.findByIdAndDelete(playlistId);
    res.status(204);
  }catch{
    res.status(500).json({message:"SERVER_ERROR"});
  }
}

module.exports = deletePlaylist;