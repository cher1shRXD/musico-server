const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    queue: {
      type: [
        {
          title: String,
          artist: [
            {
              artistId: Number,
              artistName: String,
              isGroup: Boolean,
              imageUrl: String,
            },
          ],
          videoId: String,
          trackId: String,
          coverUrl: String,
        },
      ],
      default: [],
    },
    currentNowPlaying: { type: Number, default: 0 },
    refreshToken: String
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
