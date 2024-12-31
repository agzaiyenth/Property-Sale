import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <Link
        to="/"
        className="text-2xl font-bold tracking-wider hover:text-oceanBlue transition-colors"
      >
        PropQuest
      </Link>
      <div className="flex items-center space-x-6">
      
        <Link
          to="/favorites"
          className="relative flex items-center space-x-2 hover:scale-105 transition-transform"
        >
          <span className="text-lg font-semibold">{favorites.length}</span>
          <OutlineHeartIcon className="w-8 h-8 text-oceanBlue" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
