const User = require("../../models/user");

const addSong = async (req, res) => {
  try{
    const user = await User.findById(req.user.id).select(
      "-password -refreshToken"
    );
    const data = req.body;
    user.queue.push(data);
    user.currentNowPlaying = user.queue.length - 1;
    await user.save();

    res.status(201).json(user);
  }catch{
    res.status(500).json({ message: 'SERVER_ERROR' });
  }
}

module.exports = addSong