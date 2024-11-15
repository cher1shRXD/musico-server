const User = require("../../models/user")

const updateShuffle = async (req, res) => {
  try{
    const user = await User.findById(req.user.id).select("-refreshToken -password");
    user.isShuffle = !user.isShuffle;
    await user.save();

    if (user.isShuffle) {
      res.status(201).send({
        ...user,
        queue: [...user.queue].sort(() => Math.random() - 0.5),
      });
    } else {
      res.status(201).send(user);
    }
  }catch{
    res.status(500).json({ message: "SERVER_ERROR" });
  }
}

module.exports = updateShuffle;