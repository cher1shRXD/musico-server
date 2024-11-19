const User = require("../../models/user");

const deleteSong = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -refreshToken"
    );
    const target = req.query.trackId;
    }

    user.queue = user.queue.filter((item) => item.trackId != target);
    if (user.queue.length - 1 === user.currentSong) {
      if (user.currentSong !== 0) {
        user.currentSong -= 1;
      }
    }

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
