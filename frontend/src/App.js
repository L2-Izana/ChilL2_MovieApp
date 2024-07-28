// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// export default function App() {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/movies")
//       .then((response) => {
//         setMovies(response.data);
//       })
//       .catch((error) => {
//         setError("There was an error fetching the data!");
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Movie List</h1>
//         {error && <p className="error">{error}</p>}
//         <ul>
//           {movies.map((movie) => (
//             <li key={movie.id}>
//               <strong>{movie.title}</strong> ({movie.year}) - {movie.genre}
//             </li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

import Content from "./components/Content";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
