const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter");
const songRouter = require("./routes/songRouter");
const queueRouter = require("./routes/queueRouter");
const playRouter = require("./routes/playRouter");
const playlistRouter = require("./routes/playlistRouter");
const proxyRouter = require("./routes/proxyRouter");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const corsOption = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

const app = express();
app.use(cors(corsOption));
app.use(express.json());

const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}/?retryWrites=true&w=majority&appName=${process.env.MONGO_APP_NAME}`;
mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

app.use("/songs", songRouter);
app.use("/auth", authRouter);
app.use("/queue", queueRouter);
app.use("/play", playRouter);
app.use("/playlist", playlistRouter);
app.use('/proxy', proxyRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
