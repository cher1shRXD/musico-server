const User = require("../../models/user");

const deleteSong = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -refreshToken"
    );
    const target = req.query.trackId;

    user.queue = user.queue.filter((item) => item.trackId != target);
    if(user.currentNowPlaying === user.queue.length - 1) {
      user.currentNowPlaying = user.currentNowPlaying - 1;
    }

    await user.save();

    res.status(204).send(user);
  } catch {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = deleteSong;
