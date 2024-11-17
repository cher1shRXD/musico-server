const User = require("../../models/user");

const addLast = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-refreshToken -password"
    );
    const data = req.body;
    const isDuplicated =
      user.queue.filter((item) => item.trackId == data.trackId).length > 0;
    if (isDuplicated) {
      res.status(409).json({ message: "SONG_DUPLICATED" });
      return;
    } else {
      user.queue.push(data);
    }
    await user.save();

    const copiedUser = user.toObject();

    if (copiedUser.isShuffle) {
      copiedUser.queue = [...copiedUser.queue].sort(() => Math.random() - 0.5);
    }

    res.status(200).json(copiedUser);
  } catch {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = addLast;
