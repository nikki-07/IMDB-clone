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
  const [moviesList, setMovie] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=56f82d659ce1b62802d827aaea365b3c&language=en-US&page=${pageNumber}`
      )
      .then((res) => {
        setMovie(res.data.results);
      });
  }, []);

  function handlePrevious() {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  }
  function handleNext() {
    setPageNumber((prev) => prev + 1);
  }
  return (
    <>
      <div className="text-center mt-5 ">
        <span className="font-bold text-lg">Trending movies</span>
      </div>
      <div className="flex  flex-wrap justify-between gap-8 m-2">
        {moviesList.map((movie, index) => {
          return (
            <MovieCard
              movie={movie}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              key={index}
              poster_path={movie.poster_path}
              original_name={movie.original_name}
              watchList={watchList}
            />
          );
        })}
      </div>
      <Pagination
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        pageNumber={pageNumber}
      />
    </>
  );
}
export default Movies;
