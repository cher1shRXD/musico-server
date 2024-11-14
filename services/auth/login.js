const User = require("../../models/user");
const { generateAccessToken, generateRefreshToken } = require("../../utils/token");
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ message: "USER_NOT_FOUND" });
    }

    const isValid = await bcrypt.compare(password, user.password)
    console.log(isValid);
    if (!isValid) {
      return res
        .status(401)
        .json({ message: "UNATHORIZED" });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    res.json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = login;