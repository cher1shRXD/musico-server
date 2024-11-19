const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const playlistSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv4,
    },
    title: String,
    author: String,
    songs: {
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
          videoId: [String],
          trackId: Number,
          coverUrl: String,
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Playlist = mongoose.model("Playlist", playlistSchema);
module.exports = Playlist;
