const User = require("../../models/user");
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "USER_ALREADY_EXIST" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "USER_CREATED_SUCCESSFULLY" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "SERVER_ERROR" });
  }
};

module.exports = signup;