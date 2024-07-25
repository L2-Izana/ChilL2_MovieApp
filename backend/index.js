// index.js
const express = require("express");
const cors = require("cors");
const connection = require("./db");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/movies", (req, res) => {
  const query = "SELECT * FROM movies";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
