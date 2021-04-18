const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const storeRouter = require("./store/actions/dispatcher.js");
const store = require("./store/index.js");

const isDev = process.env.APP_DEV
  ? process.env.APP_DEV.trim() == "true"
  : false;

const app = express();

if (isDev) {
  app.use(cors({ origin: "http://localhost:3001" }));
}
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/store", storeRouter);

module.exports = app;
