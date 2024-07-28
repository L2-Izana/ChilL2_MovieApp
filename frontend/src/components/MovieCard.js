import { useState } from "react";

import DefaultMovieImage from "../media/movie_images/Appleseed_Alpha.jpg";
const defaultTitle = "My Love";
const defaultGenre = "Romance/Comedy";
const defaultDescription =
  "My Love is a heartfelt romantic drama that explores the deep and enduring bonds of love. The film follows the journey of its protagonists as they navigate the complexities of their relationship, facing both joys and challenges. With poignant storytelling and compelling performances, My Love delves into the themes of devotion, sacrifice, and the transformative power of love. It's a touching portrayal of how love can shape our lives and lead us to unexpected places.";

function MovieCard({ thumbnailImg, title, genre, description }) {
  const [isFrontSide, setIsFrontSide] = useState(true);

  const handleCardFlip = () => {
    setIsFrontSide(!isFrontSide);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {isFrontSide ? (
        <MovieCardFrontSide
          thumbnailImg={thumbnailImg || DefaultMovieImage}
          title={title || defaultTitle}
          handleCardFlip={handleCardFlip}
        />
      ) : (
        <MovieCardBackSide
          title={title || defaultTitle}
          genre={genre || defaultGenre}
          description={description || defaultDescription}
          handleCardFlip={handleCardFlip}
        />
      )}
    </div>
  );
}

function MovieCardFrontSide({ thumbnailImg, title, handleCardFlip }) {
  return (
    <div>
      <img
        onClick={() => handleCardFlip}
        className="rounded-t-lg"
        src={thumbnailImg}
        alt="Movie Thumbnail"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-sky-800 hover:text-fuchsia-400 hover:cursor-pointer dark:text-white  dark:hover:text-purple-300 no-underline">
          {title}
        </h5>
        <p className="font-serif text-gray-400">{title}</p>

        <p
          style={{ textDecoration: "none" }}
          className="mb-3 font-normal text-gray-700 dark:text-gray-400 no-underline"
        >
          {/* {description ? description : defaultDescription} */}
        </p>
        <button
          onClick={handleCardFlip}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function MovieCardBackSide({ title, genre, description, handleCardFlip }) {
  return (
    <div>
      <h5 className="mb-1 text-2xl font-bold tracking-tight text-sky-800 hover:text-fuchsia-400 hover:cursor-pointer dark:text-white  dark:hover:text-purple-300 no-underline">
        {title}
      </h5>
      <small className="text-blue-400 dark:text-gray-500">{genre}</small>
      <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden hover:overflow-auto h-48">
        {description}
      </p>
      <div className="flex justify-between my-2">
        <button className="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Watch
        </button>
        <button
          onClick={handleCardFlip}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </button>
        <button className="inline-flex items-center px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-500">
          Review
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
