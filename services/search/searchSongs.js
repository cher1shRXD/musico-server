const axios = require("axios");

const searchSong = async (req, res) => {
  const query = req.query.q;
  const url = `https://apis.naver.com/vibeWeb/musicapiweb/v4/search/track?query=${query}&start=1&display=100&sort=RELEVANCE&cact=ogn`;
  const getMoreUrl = `https://apis.naver.com/vibeWeb/musicapiweb/v4/search/track?query=${query}&start=101&display=100&sort=RELEVANCE&cact=ogn`;
  try {
    const response = await axios.get(url);
    const getMoreResponse = await axios.get(getMoreUrl);

    const data = [];
    const tracks = response.data.response.result.tracks;
    const moreTracks = getMoreResponse.data.response.result.tracks;

    if (tracks) {
      tracks.forEach((track) => {
        data.push({
          title: track.trackTitle,
          albumArt: track.album.imageUrl,
          artists: track.artists,
          trackId: track.trackId,
        });
      });
    }

    if (moreTracks) {
      moreTracks.forEach((track) => {
        data.push({
          title: track.trackTitle,
          albumArt: track.album.imageUrl,
          artists: track.artists,
          trackId: track.trackId,
        });
      });
    }

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving chart data");
  }
};

module.exports = searchSong;
