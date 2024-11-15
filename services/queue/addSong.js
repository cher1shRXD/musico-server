const User = require("../../models/user");

const addSong = async (req, res) => {
  try{
    const user = await User.findById(req.user.id).select(
      "-password -refreshToken"
    );
    const data = req.body;
    const isDuplicated = user.queue.filter((item)=>item.trackId === data.trackId);

    if(isDuplicated.length > 0){
      const index = user.queue.findIndex((item) => item.trackId === data.trackId);
      user.currentSong = index;
    }else{
      user.queue.push(data);
      user.currentSong = user.queue.length - 1;
    }
    await user.save();

    const userObject = user.toObject();

    if (userObject.isShuffle) {
      userObject.queue = [...userObject.queue].sort(() => Math.random() - 0.5);
    }

    res.json(userObject); 
  }catch{
    res.status(500).json({ message: 'SERVER_ERROR' });
  }
}

module.exports = addSong