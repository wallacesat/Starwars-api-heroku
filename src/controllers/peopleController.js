const express = require("express");
const People = require("../models/people");

const router = express.Router();

router.post("/people", async (req, res) => {
  try {
    const people = await People.create(req.body);
    return res.send({ people });
  } catch (err) {
    return res.status(400).send({ error: "Registration Feiled", err });
  }
});

router.get("/people", async (req, res) => {
  try {
    People.find({}, (err, p) => {
      const { count, results } = p[0];
      res.status(200).send({ count, results: results[0] });
    });
  } catch (err) {
    return res.status(400).send({ error: "Requisition Failed", err });
  }
});

router.get("/people/:page", async (req, res) => {
  const page = req.params.page.slice(5, 6) - 1;
  try {
    People.find({}, (err, p) => {
      const { count, results } = p[0];
      res.status(200).send({ count, results: results[page] });
    });
  } catch (err) {
    return res.status(400).send({ error: "Requisition Failed", err });
  }
});

module.exports = app => app.use("/api", router);
