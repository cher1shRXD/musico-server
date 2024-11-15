const User = require("../../models/user");

const addLast = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-refreshToken -password"
    );
    const data = req.body;
    const isDuplicated = user.queue.filter(
      (item) => item.trackId == data.trackId
    );
    if (isDuplicated.length > 0) {
      const index = user.queue.findIndex(
        (item) => item.trackId == data.trackId
      );
      user.currentSong = index;
    } else {
      user.queue.push(data);
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

module.exports = addLast;
