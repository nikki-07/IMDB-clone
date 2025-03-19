/* eslint-disable react/prop-types */

function MovieCard({
  movie,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchList,
}) {
  function isInWatchList(movie) {
    return watchList.some((item) => item.id === movie.id);
  }

  return (
    <div className="bg-gray-800 p-3 rounded-lg shadow-lg">
      <div
        className="h-[40vh] w-[200px] bg-center bg-cover flex flex-col justify-between items-end rounded-lg hover:scale-110 transition-transform duration-300 shadow-lg"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
        }}
      >
        <div className="bg-black/60 w-full text-white text-center py-1 rounded-b-lg">
          {movie.original_title || movie.name}
        </div>

        {isInWatchList(movie) ? (
          <div
            className="flex justify-center items-center text-xl m-4 bg-red-600 hover:bg-red-800 text-white rounded-full h-8 w-8 cursor-pointer transition-colors duration-200"
            onClick={() => handleRemoveFromWatchList(movie)}
          >
            &#10060;
          </div>
        ) : (
          <div
            className="flex justify-center items-center text-xl m-4 bg-green-600 hover:bg-green-800 text-white rounded-full h-8 w-8 cursor-pointer"
            onClick={() => handleAddToWatchList(movie)}
          >
            &#128525;
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
