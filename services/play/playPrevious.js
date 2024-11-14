const User = require("../../models/user");

const playPrevious = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -refreshToken"
    );
    if (user.currentNowPlaying !== 0) {
      user.currentNowPlaying = user.currentNowPlaying - 1;
    }
    await user.save();

    res.status(200).send(user);
  } catch {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = playPrevious;
