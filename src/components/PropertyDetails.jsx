import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import properties from "../data/properties";
import {
  HomeIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
  PhoneIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/outline";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change images every 3 seconds (or desired interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % property.images.length
      );
    }, 3000); // Adjust the interval as needed
    return () => clearInterval(interval); // Cleanup the interval
  }, [property.images.length]);

  const toggleFavorite = (property) => {
    if (favorites.some((fav) => fav.id === property.id)) {
      removeFromFavorites(property.id);
    } else {
      addToFavorites(property);
    }
  };

  if (!property) return <p>Property not found!</p>;

  return (
    <div className="property-details max-w-7xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mb-6"
      >
        ← Back to Home
      </button>

      {/* Header Section with Swipeable Images */}
      <div className="relative rounded-lg overflow-hidden shadow-md mb-6">
        <div className="relative">
          <img
            src={property.images[currentImageIndex]}
            alt={property.type}
            className="w-full h-96 object-cover transition-opacity duration-700 ease-in-out"
          />

          {/* Heart Icon for Favorites */}
          <div
            className="absolute top-3 right-3 cursor-pointer z-10"
            onClick={() => toggleFavorite(property)} // Pass the current property
          >
            {favorites.some((fav) => fav.id === property.id) ? (
              <FilledHeartIcon className="w-8 h-8 text-red-500" />
            ) : (
              <OutlineHeartIcon className="w-8 h-8 text-gray-400" />
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <h1 className="text-white text-3xl font-bold">{property.location}</h1>
          <p className="text-gray-200 mt-2 flex items-center">
            <LocationMarkerIcon className="w-5 h-5 mr-2" />
            {property.postcode}
          </p>
        </div>
      </div>

      {/* Property Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <ClipboardListIcon className="w-6 h-6 text-blue-600 mr-2" />
            Property Details
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <HomeIcon className="w-5 h-5 text-gray-600 mr-2" />
              <span>Type: {property.type}</span>
            </li>
            <li className="flex items-center">
              <CurrencyDollarIcon className="w-5 h-5 text-gray-600 mr-2" />
              <span>Price: Rs.{property.price.toLocaleString("en-US")}</span>
            </li>
            <li className="flex items-center">
              <HomeIcon className="w-5 h-5 text-gray-600 mr-2" />
              <span>Bedrooms: {property.bedrooms}</span>
            </li>
            <li className="flex items-center">
              <ClipboardListIcon className="w-5 h-5 text-gray-600 mr-2" />
              <span>Tenure: {property.tenure}</span>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="w-5 h-5 text-gray-600 mr-2" />
              <span>Contact: {property.contact}</span>
            </li>
          </ul>
        </div>

        {/* Description */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <ClipboardListIcon className="w-6 h-6 text-blue-600 mr-2" />
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {property.description}
          </p>
        </div>
      </div>

      {/* Floor Plan */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <ClipboardListIcon className="w-6 h-6 text-blue-600 mr-2" />
          Floor Plan
        </h2>
        <div className="space-y-2">
          {property.floorPlan?.length > 0 ? (
            property.floorPlan.map((room, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-gray-700 border-b py-2"
              >
                <span>{room.room}</span>
                <span>{room.dimensions}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No floor plan available.</p>
          )}
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <LocationMarkerIcon className="w-6 h-6 text-blue-600 mr-2" />
          Location Map
        </h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            title={`Map for ${property.location}`}
            src={property.mapEmbed}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
