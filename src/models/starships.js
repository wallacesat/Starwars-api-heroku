const mongoose = require("../database");

const StarshipsSchema = new mongoose.Schema({
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
        starship_class: {
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

const Starships = mongoose.model("Starships", StarshipsSchema);
module.exports = Starships;
