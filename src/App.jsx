import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let [watchList, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    setWatchList(newWatchList);
    localStorage.setItem("watchlist", JSON.stringify(newWatchList));
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchList(filteredWatchList);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("watchlist");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                  watchList={watchList}
                />
              </>
            }
          ></Route>
          <Route
            path="/Watchlist"
            element={
              <Watchlist
                watchList={watchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
                setWatchList={setWatchList}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
