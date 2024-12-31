import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/outline";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">No Favorites Yet</h1>
          <p className="text-gray-600 mt-2">
            Browse properties and add them to your favorites!
          </p>
          <Link
            to="/"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-6">
          Your Favorites
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={property.images[0]} // Display the first image
                alt={property.location}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 relative">
                <h2 className="text-xl font-bold text-gray-800">
                  {property.location}
                </h2>
                <p className="text-gray-600 mt-1">{property.description}</p>
                <p className="text-blue-600 font-bold mt-2">
                  Price: Rs.{property.price.toLocaleString()}
                </p>
                <p className="text-gray-600">Bedrooms: {property.bedrooms}</p>

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
                  className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
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
