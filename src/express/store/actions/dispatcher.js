const express = require("express");
const { setStore, getDispatcher } = require("../index.js");

const router = express.Router();

router.post("/actions", (req, res) => {
  const { state, router } = req.body;
  setStore({ state, router });
  console.log(state);
  res.json(getDispatcher());
});

module.exports = router;
