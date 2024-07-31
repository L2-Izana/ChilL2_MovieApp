require("dotenv").config();

const apiKey = process.env.MOVIE_API_KEY;
const baseUrl = process.env.MOVIE_API_URL;

const fetchMovies = async (category, page = 1) => {
  const categoryEndpoints = {
    hot: "/trending/movie/week",
    recommend: "/movie/popular",
    comingSoon: "/movie/upcoming",
  };

  const url = `${baseUrl}${categoryEndpoints[category]}?api_key=${apiKey}&page=${page}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      genre_ids: movie.genre_ids,
      description: movie.overview,
      imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    }));
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export default fetchMovies;
