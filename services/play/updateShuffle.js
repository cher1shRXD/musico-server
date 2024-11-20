const User = require("../../models/user")

const updateShuffle = async (req, res) => {
  try{
    const user = await User.findById(req.user.id).select("-refreshToken -password");
    const currentPlaying = user.queue[user.currentSong].trackId;
    user.isShuffle = !user.isShuffle;

    if(user.isShuffle) {
      user.queue = [...user.originalQueue].sort(() => Math.random() - 0.5);
    }else{
      user.queue = user.originalQueue;
    }

    const currentPlayingIdx = user.queue.findIndex(item=>item.trackId == currentPlaying);
    user.currentSong = currentPlayingIdx;

    await user.save();

    res.status(200).json(user); 
  }catch(err){
    console.log(err);
    res.status(500).json({ message: "SERVER_ERROR" });
  }
}

module.exports = updateShuffle;