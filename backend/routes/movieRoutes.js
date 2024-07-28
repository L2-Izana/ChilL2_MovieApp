const express = require("express");
const {
  getMovies,
  getMovie,
  addMovie,
} = require("../controllers/movieController");

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovie);
router.post("/", addMovie);

module.exports = router;
