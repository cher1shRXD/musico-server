const User = require("../../models/user");

const playNext = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -refreshToken"
    );
    if(user.queue.length - 1 == user.currentSong) {
      user.currentSong = 0;
    }else{
      user.currentSong += 1;
    }
    await user.save();

    res.json(user); 
  }catch{
    res.status(500).json({ message: "SERVER_ERROR" });
  }
}

module.exports = playNext;