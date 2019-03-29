const express = require("express");
const Planets = require("../models/planets");

const router = express.Router();

router.post("/planets", async (req, res) => {
  try {
    const planets = await Planets.create(req.body);
    return res.send({ planets });
  } catch (err) {
    return res.status(400).send({ error: "Registration Failed", err });
  }
});

router.get("/planets", async (req, res) => {
  try {
    Planets.find({}, (err, p) => {
      const { count, results } = p[0];
      res.status(200).send({ count, results: results[0] });
    });
  } catch (err) {
    return res.status(400).send({ error: "Requisition Failed", err });
  }
});

router.get("/planets/:page", async (req, res) => {
  const page = req.params.page.slice(5, 6) - 1;

  try {
    Planets.find({}, (err, p) => {
      const { count, results } = p[0];
      res.status(200).send({ count, results: results[page] });
    });
  } catch (err) {
    return res.status(400).send({ error: "Requisition Failed", err });
  }
});

module.exports = app => app.use("/api", router);
