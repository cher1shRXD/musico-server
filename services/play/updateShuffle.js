const User = require("../../models/user")

const updateShuffle = async (req, res) => {
  try{
    const user = await User.findById(req.user.id).select("-refreshToken -password");
    user.isShuffle = !user.isShuffle;
    await user.save();

    const userObject = user.toObject();

    if (userObject.isShuffle) {
      userObject.queue = [...userObject.queue].sort(() => Math.random() - 0.5);
    }

    res.json(userObject); 
  }catch{
    res.status(500).json({ message: "SERVER_ERROR" });
  }
}

module.exports = updateShuffle;