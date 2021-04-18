const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const storeRouter = require("./store/actions/dispatcher.js");
const store = require("./store/index.js");

const app = express();

app.use(cors({ origin: "http://localhost:3100" }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/store", storeRouter);

module.exports = app;
