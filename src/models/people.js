const mongoose = require("../database");

const PeopleSchema = new mongoose.Schema({
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
        height: {
          type: Number,
          required: true
        },
        mass: {
          type: Number,
          required: true
        },
        hair_color: {
          type: String,
          required: true
        },
        skin_color: {
          type: String,
          required: true
        },
        eye_color: {
          type: String,
          required: true
        },
        birth_year: {
          type: String,
          required: true
        },
        gender: {
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

const People = mongoose.model("People", PeopleSchema);

module.exports = People;
