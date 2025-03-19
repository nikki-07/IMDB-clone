import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 px-8 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          className="h-12 w-auto"
          src="https://tse2.mm.bing.net/th?id=OIP.frrn93RG3lxXFjUvyE9sPwHaGo&pid=Api&P=0&h=180"
          alt="Movie Logo"
        />
        <h1 className="text-white text-xl font-semibold">MovieDB</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <Link
          className="text-white text-lg hover:text-yellow-400 transition"
          to="/"
        >
          Movies
        </Link>
        <Link
          className="text-white text-lg hover:text-yellow-400 transition"
          to="/watchlist"
        >
          Watchlist
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
