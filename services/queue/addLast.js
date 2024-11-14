const User = require("../../models/user")

const addLast = async (req, res) => {
  try{
    const user = await User.findById(req.user.id).select("-refreshToken -password");
    const data = req.body;
    user.queue.push(data);
    await user.save();

    res.status(201).json(user);
  }catch{
    res.status(500).json({ message: 'SERVER_ERROR' });
  }
}

module.exports = addLast;