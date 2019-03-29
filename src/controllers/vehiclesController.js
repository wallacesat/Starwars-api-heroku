const express = require("express");
const Vehicles = require("../models/vehicles");

const router = express.Router();

router.post("/vehicles", async (req, res) => {
  try {
    const vehicles = await Vehicles.create(req.body);
    return res.send({ vehicles });
  } catch (err) {
    return res.status(400).send({ error: "Registration Feiled", err });
  }
});

router.get("/vehicles", async (req, res) => {
  try {
    Vehicles.find({}, (err, v) => {
      const { count, results } = v[0];
      res.status(200).send({ count, results: results[0] });
    });
  } catch (err) {
    return res.status(400).send({ error: "Requisition Failed", err });
  }
});

router.get("/vehicles/:page", async (req, res) => {
  const page = req.params.page.slice(5, 6) - 1;
  try {
    Vehicles.find({}, (err, v) => {
      const { count, results } = v[0];
      res.status(200).send({ count, results: results[page] });
    });
  } catch (err) {
    return res.status(400).send({ error: "Requisition Failed", err });
  }
});

module.exports = app => app.use("/api", router);
