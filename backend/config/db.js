// Import modules
const mongoose = require("mongoose");

// Configure
require("dotenv").config();

// async function main() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {});

//     /* Test CRUD operations
//     const Schema = mongoose.Schema;
//     */
//     // Define a schema

//     /* Insert an instance into a collection
//     const TestModeSchema = new Schema({
//       a_string: String,
//     });

//     // Compile model from schema
//     const TestModel = mongoose.model("Test Model", TestModeSchema);

//     // Create an instance
//     const test_instance = new TestModel({ a_string: "the fuck" });
//     await test_instance.save(); // works

//     console.log("Instance saved successfully");
//     */

//     /*

//     */
//     const movieSchema = new mongoose.Schema({
//       title: String,
//       year: Number,
//     });

//     const Movie = mongoose.model("Movie", movieSchema);

//     const new_movie_instance = new Movie({ title: "Conan", year: 2023 });
//     await Movie.find()
//       .then((movies) => console.log(movies))
//       .catch((err) => console.error(err));
//   } catch (error) {
//     console.error("Error occurred:", error);
//   } finally {
//     // Ensure the connection is closed even if an error occurs
//     await mongoose.disconnect();
//   }
// }

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
