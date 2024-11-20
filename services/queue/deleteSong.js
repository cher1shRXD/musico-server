const User = require("../../models/user");
const { use } = require("../../routes/authRouter");

const deleteSong = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -refreshToken"
    );
    const target = req.query.trackId;

    if (user.currentSong !== 0) {
      user.currentSong -= 1;
    }

    user.queue = user.queue.filter((item) => item.trackId != target);
    user.originalQueue = user.queue.filter((item) => item.trackId != target);
    
    await user.save();

    res.json(user);
  } catch {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = deleteSong;
