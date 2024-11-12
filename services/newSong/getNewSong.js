const axios = require("axios");

const getNewSong = async (req, res) => {
  const url =
    "https://apis.naver.com/vibeWeb/musicapiweb/vibe/v1/recommend/tracks/recent?start=1&display=100";
  try {
    const response = await axios.get(url, {
      headers: { "User-Agent": "Chrome" },
    });

    const data = [];
    const tracks = response.data.response.result.tracks;

    tracks.forEach((track) => {
      data.push({
        title: track.trackTitle,
        albumArt: track.album.imageUrl,
        artists: track.artists,
        trackId: track.trackId,
      });
    });

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving chart data");
  }
};

module.exports = getNewSong;
