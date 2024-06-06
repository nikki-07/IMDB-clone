/* eslint-disable react/prop-types */

function MovieCard({
  poster_path,
  original_name,
  handleAddToWatchList,
  movie,
  handleRemoveFromWatchList,
  watchList,
}) {
  function doesContain(movie) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movie.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div>
      <div
        className="h-[40vh] w-[200px] bg-center bg-cover flex flex-col justify-between items-end rounded-xl hover:cursor-pointer hover:scale-110 duration-300"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
        }}
      >
        {doesContain(movie) ? (
          <div
            className="flex justify-center items-center rounded text-xl m-4 bg-gray-900/60 h-8 w-8"
            onClick={() => handleRemoveFromWatchList(movie)}
          >
            &#10060;;
          </div>
        ) : (
          <div
            className="flex justify-center items-center rounded text-xl m-4 bg-gray-900/60 h-8 w-8"
            onClick={() => handleAddToWatchList(movie)}
          >
            &#128525;
          </div>
        )}

        <div className="bg-gray-900/60 items-end  text-white p-2 w-full text-center">
          {original_name}
        </div>
      </div>
    </div>
  );
}
export default MovieCard;
