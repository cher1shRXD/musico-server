const User = require("../../models/user");

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -refreshToken"
    );
    const userObject = user.toObject(); 

    if (userObject.isShuffle) {
      userObject.queue = [...userObject.queue].sort(() => Math.random() - 0.5);
    }

    res.json(userObject); 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = getMe;
