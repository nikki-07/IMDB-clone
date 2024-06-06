import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="p-5 flex gap-4 items-center border-solid border-2 ">
        <img
          className="size-12"
          src="https://tse2.mm.bing.net/th?id=OIP.frrn93RG3lxXFjUvyE9sPwHaGo&pid=Api&P=0&h=180"
          alt=""
        />
        <Link className="text-blue-500 text-lg" to="/">
          Movies
        </Link>
        <Link className="text-blue-500 text-lg" to="/Watchlist">
          Watchlist
        </Link>
      </div>
    </>
  );
}
export default Navbar;
