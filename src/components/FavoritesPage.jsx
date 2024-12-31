import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/outline";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-[#0D1F2D] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">No Favorites Yet</h1>
          <p className="text-gray-400 mt-2">
            Browse properties and add them to your favorites!
          </p>
          <Link
            to="/"
            className="mt-4 inline-block bg-[#005F73] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#94D2BD] transition"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-[#0D1F2D] p-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-extrabold mb-6">
          Your Favorites
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((property) => (
            <div
              key={property.id}
              className="bg-[#1A2B3C] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <img
                src={property.images[0]} 
                alt={property.location}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 relative">
                <h2 className="text-xl font-bold">{property.location}</h2>
                <p className="text-gray-400 mt-2 line-clamp-2">
                  {property.description}
                </p>
                <p className="text-[#94D2BD] font-semibold mt-3">
                  Price: Rs.{property.price.toLocaleString()}
                </p>
                <p className="text-gray-400">Bedrooms: {property.bedrooms}</p>

                {/* Remove from Favorites Button */}
                <button
                  onClick={() => removeFromFavorites(property.id)}
                  className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition"
                >
                  <TrashIcon className="w-6 h-6" />
                </button>

                {/* View Details Button */}
                <Link
                  to={`/property/${property.id}`}
                  className="mt-4 inline-block bg-[#005F73] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#94D2BD] transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
