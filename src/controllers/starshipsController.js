const express = require("express");
const Starships = require("../models/starships");

const router = express.Router();

router.post("/starships", async (req, res) => {
  try {
    const starships = await Starships.create(req.body);
    return res.send({ starships });
  } catch (err) {
    return res.status(400).send({ error: "Registration Feiled", err });
  }
});

router.get("/starships", async (req, res) => {
  try {
    Starships.find({}, (err, s) => {
      const { count, results } = s[0];
      res.status(200).send({ count, results: results[0] });
    });
  } catch (err) {
    return res.status(400).send({ error: "Requisition Failed", err });
  }
});

router.get("/starships/:page", async (req, res) => {
  const page = req.params.page.slice(5, 6) - 1;
  try {
    Starships.find({}, (err, s) => {
      const { count, results } = s[0];
      res.status(200).send({ count, results: results[page] });
    });
  } catch (err) {
    return res.status(400).send({ error: "Requisition Failed", err });
  }
});

module.exports = app => app.use("/api", router);
