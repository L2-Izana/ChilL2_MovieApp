import MovieCard from "./MovieCard";

export default function MovieList() {
  return (
    <div>
      <ul className="flex space-x-1">
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
      </ul>
    </div>
  );
}
