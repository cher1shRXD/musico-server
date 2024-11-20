const User = require("../../models/user");

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -refreshToken"
    );

    res.json(user); 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = getMe;
