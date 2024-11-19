const User = require("../../models/user");

const deleteSong = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -refreshToken"
    );
    const target = req.query.trackId;
    if(user.queue[user.currentSong].trackId == target) {
      if (
        user.queue.length - 2 == user.currentSong ||
        user.queue.length - 1 == user.currentSong
      ) {
        user.currentSong = 0;
      } else {
        user.currentSong += 1;
      }
    }
    user.queue = user.queue.filter((item) => item.trackId != target);
    
    await user.save();

    const userObject = user.toObject();

    if (userObject.isShuffle) {
      userObject.queue = [...userObject.queue].sort(() => Math.random() - 0.5);
    }

    res.json(userObject); 
  } catch {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = deleteSong;
