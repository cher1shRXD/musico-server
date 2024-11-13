const express = require("express");
const cors = require("cors");
const getRankSong = require("./services/rank/getRankSongs");
const searchSong = require("./services/search/searchSongs");
const getNewSong = require("./services/newSong/getNewSong");
const YoutubeMusicApi = require("youtube-music-api");


const api = new YoutubeMusicApi();

api.initalize().then(()=>{
  api.search("ne deve ne kush").then((result) => {
    console.log(result);
  });
})

const corsOption = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};

const app = express();
app.use(cors(corsOption));

app.get("/vibe-chart-top100", getRankSong);
app.get("/search", searchSong);
app.get('/new-songs', getNewSong);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
