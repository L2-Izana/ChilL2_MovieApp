// index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movieRoutes");

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/movies", movieRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
