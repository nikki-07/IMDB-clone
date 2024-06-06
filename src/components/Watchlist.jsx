import { useEffect, useState } from "react";
import { genreIds } from "../utilities/genre";
/* eslint-disable react/prop-types */
function Watchlist({ watchList, handleRemoveFromWatchList, setWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All genres"]);
  const [currentGenre, setCurrentGenre] = useState("All genres");
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleAscending = () => {
    let sorted = watchList.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setWatchList([...sorted]);
  };
  let handledescending = () => {
    let sorted = watchList.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setWatchList([...sorted]);
  };

  useEffect(() => {
    let temp = watchList.map((movie) => {
      return genreIds[movie.genre_ids[0]];
    });
    console.log(temp);
    console.log(genreList);
    temp = new Set(temp);
    setGenreList(["All genres", ...temp]);
  }, [watchList]);

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };
  return (
    <>
      <div className="flex justify-center pt-5">
        {genreList.map((genre) => {
          return (
            <button
              onClick={() => handleFilter(genre)}
              className={
                currentGenre == genre
                  ? "bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  : "bg-gray-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              }
            >
              {genre}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center outline-no mt-4  ">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search movies"
          className="bg-gray-400/30 px-2 rounded h-[35px]"
          value={search}
        />
      </div>
      <div>
        <table className=" w-[100%] text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <div>
                  <i
                    onClick={() => handleAscending()}
                    className="fa-solid fa-arrow-up hover:cursor-pointer"
                  ></i>
                  <span className="p-2">Ratings</span>
                  <i
                    onClick={() => handledescending()}
                    className="fa-solid fa-arrow-down hover:cursor-pointer"
                  ></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>genre</th>
            </tr>
          </thead>
          <tbody className="border-2">
            {watchList
              .filter((movieObj) => {
                if (currentGenre == "All genres") {
                  return true;
                } else {
                  return genreIds[movieObj.genre_ids[0]] == currentGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.name
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id}>
                    <td className="flex px-2">
                      <img
                        className="h-[60px] w-[80px]"
                        src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
                        alt=""
                      />
                      <h6 className="px-3 items-center flex">
                        {movieObj.name}
                      </h6>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreIds[movieObj.genre_ids[0]]}</td>
                    <td>
                      <button
                        onClick={() => handleRemoveFromWatchList(movieObj)}
                        className="font-bold text-red-600 hover:cursor-pointer shadow-xl py-2 px-4 "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            {/* <tr>
              <td className="flex px-2">
                <img
                  className="h-[60px] w-[80px]"
                  src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
                  alt=""
                />
                <h6 className="px-3 items-center flex">The matrix</h6>
              </td>
              <td>45</td>
              <td>45</td>
              <td>
                <button>Delete</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Watchlist;
