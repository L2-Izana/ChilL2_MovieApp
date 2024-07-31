import MovieList from "./MovieList";

export default function Content() {
  return (
    <div className="mx-20 space-y-5">
      <MovieList category={"HOT"} />
      <MovieList category={"RECOMMENDED"} />
      <MovieList category={"COMMING SOON"} />
    </div>
  );
}
