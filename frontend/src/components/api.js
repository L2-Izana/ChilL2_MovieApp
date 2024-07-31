const apiKey = "e0ff897deef002ca6f437faa84b9b91f";
const baseUrl = "https://api.themoviedb.org/3";

const fetchMovies = async (category, page = 1) => {
  const categoryEndpoints = {
    HOT: "/trending/movie/week",
    RECOMMENDED: "/movie/popular",
    "COMMING SOON": "/movie/upcoming",
  };

  const url = `${baseUrl}${categoryEndpoints[category]}?api_key=${apiKey}&page=${page}`;
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.results.length); // Assuming 'results' is the array you want to log
    const fetchedMovies = data.results.slice(0, 5).map((movie) => ({
      id: movie.id,
      title: movie.title,
      genre_ids: movie.genre_ids,
      description: movie.overview,
      imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    }));
    console.log(fetchedMovies);
    return fetchedMovies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export default fetchMovies;
