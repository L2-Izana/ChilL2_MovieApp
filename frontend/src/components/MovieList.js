import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import fetchMovies from "./api";

export default function MovieList({ category }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const fetchedMovies = await fetchMovies(category);
        setMovies(fetchedMovies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-sky-950 mb-4 border-b-2 border-gray-300 pb-2">
        {category}
      </h1>
      <ul className="flex space-x-1">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard
                thumbnailImg={movie.imageUrl}
                title={movie.title}
                genre={movie.genre_ids}
                description={movie.description}
              />
            </li>
          ))
        ) : (
          <li>No movies found</li>
        )}
      </ul>
    </div>
  );
}
