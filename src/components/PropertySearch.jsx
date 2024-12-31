import React, { useState, useEffect, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/outline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import properties from "../data/properties";

const PropertySearch = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  const [searchCriteria, setSearchCriteria] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    location: "",
    postcode: "",
    dateAdded: null,
  });

  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [currentImages, setCurrentImages] = useState(properties.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((index, i) => (index + 1) % properties[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "postcode" && /[^a-zA-Z0-9]/.test(value)) return;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSearch = () => {
    const filtered = properties.filter((property) => {
      const {
        type,
        minPrice,
        maxPrice,
        minBedrooms,
        maxBedrooms,
        location,
        postcode,
        dateAdded,
      } = searchCriteria;

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const propertyAddedDate = new Date(
        property.added.year,
        months.indexOf(property.added.month),
        property.added.day
      );

      return (
        (type ? property.type === type : true) &&
        (!minPrice || property.price >= parseInt(minPrice)) &&
        (!maxPrice || property.price <= parseInt(maxPrice)) &&
        (!minBedrooms || property.bedrooms >= parseInt(minBedrooms)) &&
        (!maxBedrooms || property.bedrooms <= parseInt(maxBedrooms)) &&
        (location
          ? property.location.toLowerCase().includes(location.toLowerCase())
          : true) &&
        (postcode ? property.postcode.startsWith(postcode) : true) &&
        (dateAdded ? propertyAddedDate >= dateAdded : true)
      );
    });

    setFilteredProperties(filtered);
  };

  const toggleFavorite = (property) => {
    if (favorites.some((fav) => fav.id === property.id)) {
      removeFromFavorites(property.id);
    } else {
      addToFavorites(property);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-100 to-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-5xl font-extrabold text-gray-800">
          Find Your Dream Home
        </h1>
        <p className="text-center text-lg text-gray-600 mt-3">
          Tailored property searches just for you.
        </p>

        {/* Search Form */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl mt-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: "Property Type", type: "select", options: ["House", "Flat"], name: "type" },
              { label: "Min Price", type: "number", name: "minPrice" },
              { label: "Max Price", type: "number", name: "maxPrice" },
              { label: "Min Bedrooms", type: "number", name: "minBedrooms" },
              { label: "Max Bedrooms", type: "number", name: "maxBedrooms" },
              { label: "Location", type: "text", name: "location" },
              { label: "Postcode", type: "text", name: "postcode" },
            ].map((field) => (
              <div key={field.name} className="form-group">
                <label className="text-gray-700 font-semibold mb-2 block">
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={searchCriteria[field.name]}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 border rounded-xl"
                  >
                    <option value="">Any</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={searchCriteria[field.name]}
                    onChange={handleInputChange}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    className="w-full p-3 bg-gray-100 border rounded-xl"
                  />
                )}
              </div>
            ))}

            {/* Date Added */}
            <div className="form-group">
              <label className="text-gray-700 font-semibold mb-2 block">
                Date Added
              </label>
              <DatePicker
                selected={searchCriteria.dateAdded}
                onChange={(date) =>
                  setSearchCriteria({ ...searchCriteria, dateAdded: date })
                }
                placeholderText="Select date"
                className="w-full p-3 bg-gray-100 border rounded-xl"
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="mt-6 w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Search
          </button>
        </div>

        {/* Results Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div
                className="absolute top-3 right-3 cursor-pointer z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(property);
                }}
              >
                {favorites.some((fav) => fav.id === property.id) ? (
                  <FilledHeartIcon className="w-8 h-8 text-red-500" />
                ) : (
                  <OutlineHeartIcon className="w-8 h-8 text-gray-400" />
                )}
              </div>

              <Link to={`/property/${property.id}`} className="block">
                <img
                  src={property.images[currentImages[index]]}
                  alt={property.location}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {property.location}
                  </h2>
                  <p className="text-gray-600 mt-2 line-clamp-2">
                    {property.description}
                  </p>
                  <p className="text-blue-500 font-semibold mt-3">
                    Price: Rs.{property.price.toLocaleString()}
                  </p>
                  <p className="text-gray-600">Bedrooms: {property.bedrooms}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
