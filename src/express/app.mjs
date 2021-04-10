import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import storeRouter from "./store/actions/dispatcher.mjs";
import store from "./store/index.mjs";

const app = express();

app.use(cors({ origin: "http://localhost:3100" }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/store", storeRouter);

export default app;
