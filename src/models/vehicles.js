const mongoose = require("../database");

const VehiclesSchema = new mongoose.Schema({
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
        model: {
          type: String,
          required: true
        },
        manufacturer: {
          type: String,
          required: true
        },
        length: {
          type: Number,
          required: true
        },
        max_atmosphering_speed: {
          type: Number,
          required: true
        },
        passengers: {
          type: Number,
          required: true
        },
        cargo_capacity: {
          type: Number,
          required: true
        },
        consumables: {
          type: Number,
          required: true
        },
        vehicle_class: {
          type: String,
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

const Vehicles = mongoose.model("Vehicles", VehiclesSchema);
module.exports = Vehicles;
