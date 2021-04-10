import express from "express";
import { setStore, getDispatcher } from "../index.mjs";

const router = express.Router();

router.post("/actions", (req, res) => {
  const { state, router } = req.body;
  setStore({ state, router });
  res.json(getDispatcher());
});

export default router;
