const User = require("../../models/user");
const { generateAccessToken, generateRefreshToken } = require("../../utils/token");
const jwt = require("jsonwebtoken");

const refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({ message: "NO_TOKEN" });
    }

    const user = await User.findOne({ refreshToken });
    if (!user) {
      return res
        .status(401)
        .json({ message: "INVALID_REFRESHTOKEN" });
    }

    try {
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    } catch (error) {
      user.refreshToken = null;
      await user.save();
      return res
        .status(401)
        .json({ message: "REFRESHTOKN_EXPIRED" });
    }

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    user.refreshToken = newRefreshToken;
    await user.save();

    res.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = refresh;