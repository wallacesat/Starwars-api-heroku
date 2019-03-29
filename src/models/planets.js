const mongoose = require("../database");

const PlantesSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true
  },
  results: [
    [
      {
        name: {
          type: String,
          required: true
        },
        avatar: {
          type: String,
          required: true
        },
        rotation_period: {
          type: Number,
          required: true
        },
        orbital_period: {
          type: Number,
          required: true
        },
        diameter: {
          type: Number,
          required: true
        },
        climate: {
          type: String,
          required: true
        },
        gravity: {
          type: Number,
          required: true
        },
        terrain: {
          type: String,
          required: true
        },
        surface_water: {
          type: Number,
          required: true
        },
        population: {
          type: Number,
          required: true
        },
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ]
  ]
});

const Planets = mongoose.model("Planets", PlantesSchema);
module.exports = Planets;
