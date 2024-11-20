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
      user.originalQueue.push(data);
    }
    await user.save();

    res.status(200).json(user);
  } catch {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = addLast;
