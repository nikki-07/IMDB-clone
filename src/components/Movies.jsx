/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchList,
}) {
  const [moviesList, setMoviesList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=56f82d659ce1b62802d827aaea365b3c&language=en-US&page=${pageNumber}`
      )
      .then((res) => {
        setMoviesList(res.data.results);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [pageNumber]);

  function handlePrevious() {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function handleNext() {
    setPageNumber((prev) => prev + 1);
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {" "}
      {/* ✅ Background applied */}
      <div className="text-center pt-6">
        <span className="font-bold text-2xl">🎬 Trending Movies</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {moviesList.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleAddToWatchList={handleAddToWatchList}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
            watchList={watchList}
          />
        ))}
      </div>
      <Pagination
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default Movies;
