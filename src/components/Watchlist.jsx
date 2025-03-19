/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { genreIds } from "../utilities/genre";

function Watchlist({ watchList, handleRemoveFromWatchList, setWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All genres"]);
  const [currentGenre, setCurrentGenre] = useState("All genres");

  let handleSearch = (e) => setSearch(e.target.value);

  let handleAscending = () => {
    let sorted = [...watchList].sort((a, b) => a.vote_average - b.vote_average);
    setWatchList(sorted);
  };

  let handledescending = () => {
    let sorted = [...watchList].sort((a, b) => b.vote_average - a.vote_average);
    setWatchList(sorted);
  };

  useEffect(() => {
    let temp = watchList
      .flatMap((movie) => movie.genre_ids.map((id) => genreIds[id]))
      .filter(Boolean);
    temp = [...new Set(temp)];
    setGenreList(["All genres", ...temp]);
  }, [watchList]);

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  // Filter movies based on search and genre
  const filteredMovies = watchList
    .filter((movieObj) => {
      if (currentGenre === "All genres") return true;
      return movieObj.genre_ids.some((id) => genreIds[id] === currentGenre);
    })
    .filter((movieObj) => {
      const movieName = movieObj.name || movieObj.title || "";
      return movieName.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <div className="min-h-screen bg-gray-900 text-white py-6">
      {/* Genre Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-5">
        {genreList.map((genre) => (
          <button
            key={genre}
            onClick={() => handleFilter(genre)}
            className={`px-4 py-2 rounded-full text-white font-bold transition-all duration-300 ${
              currentGenre === genre
                ? "bg-blue-600 hover:bg-blue-700 shadow-md scale-105"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search movies..."
          className="w-2/3 max-w-md px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
        />
      </div>

      {/* Movies Table */}
      <div className="overflow-x-auto mx-5">
        {filteredMovies.length > 0 ? (
          <table className="w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg text-center">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">
                  <div className="flex justify-center items-center gap-2">
                    <i
                      onClick={handleAscending}
                      className="fa-solid fa-arrow-up hover:cursor-pointer hover:text-blue-400"
                    ></i>
                    <span>Ratings</span>
                    <i
                      onClick={handledescending}
                      className="fa-solid fa-arrow-down hover:cursor-pointer hover:text-red-400"
                    ></i>
                  </div>
                </th>
                <th className="py-3 px-4">Popularity</th>
                <th className="py-3 px-4">Genre</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {filteredMovies.map((movieObj) => (
                <tr
                  key={movieObj.id}
                  className="hover:bg-gray-700 transition-all"
                >
                  <td className="flex px-4 py-3 items-center">
                    <img
                      className="h-16 w-12 rounded-md shadow-md"
                      src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
                      alt={movieObj.name || movieObj.title}
                    />
                    <h6 className="px-3 font-medium">
                      {movieObj.name || movieObj.title}
                    </h6>
                  </td>
                  <td className="py-3 px-4">{movieObj.vote_average}</td>
                  <td className="py-3 px-4">{movieObj.popularity}</td>
                  <td className="py-3 px-4">
                    {movieObj.genre_ids.map((id) => genreIds[id]).join(", ") ||
                      "--"}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleRemoveFromWatchList(movieObj)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          // "Not Found" message
          <div className="flex flex-col items-center justify-center mt-10">
            <p className="text-xl text-gray-400">No movies found.</p>
            <p className="text-gray-500">
              Try adjusting your search or filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
