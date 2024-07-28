const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: String,
  year: Number,
  genre: String,
  description: String,
});

module.exports = mongoose.model("Movie", movieSchema);
