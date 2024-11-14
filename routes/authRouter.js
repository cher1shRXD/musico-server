const express = require("express");
const login = require("../services/auth/login");
const signup = require("../services/auth/signup");
const refresh = require("../services/auth/refresh");
const getMe = require("../services/auth/me");
const auth = require("../middleware/auth");
const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signup", signup);
authRouter.post("/refresh", refresh);
authRouter.get("/me", auth, getMe);

module.exports = authRouter;