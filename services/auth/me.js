const User = require("../../models/user");

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -refreshToken"
    );
    if(user.isShuffle) {
      res.send({...user, queue: [...user.queue].sort(() => Math.random() - 0.5)});
    }else{
      res.json(user);
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = getMe;