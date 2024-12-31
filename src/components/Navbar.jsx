import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-lg font-bold">
        Property Sale
      </Link>
      <Link to="/favorites" className="relative flex items-center space-x-2">
        <span className="text-lg font-bold">{favorites.length}</span>
        <OutlineHeartIcon className="w-8 h-8 text-gray-400" />
      </Link>
    </nav>
  );
};

export default Navbar;
