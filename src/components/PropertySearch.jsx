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
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
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
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold text-gray-900">
          Search Your Dream Property
        </h1>
        <p className="text-center text-gray-600 mt-2 ">
          Filter properties by type, price, location, and more.
        </p>

        {/* Search Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg mt-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Property Type */}
            <div className="form-group">
              <label className="text-gray-700 font-medium mb-2 block">
                Property Type
              </label>
              <select
                name="type"
                value={searchCriteria.type}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md shadow-sm"
              >
                <option value="">Any</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
              </select>
            </div>

            {/* Min Price */}
            <div className="form-group">
              <label className="text-gray-700 font-medium mb-2 block">
                Min Price
              </label>
              <input
                type="number"
                name="minPrice"
                value={searchCriteria.minPrice}
                onChange={handleInputChange}
                placeholder="Enter minimum price"
                className="w-full p-3 border rounded-md shadow-sm"
              />
            </div>

            {/* Max Price */}
            <div className="form-group">
              <label className="text-gray-700 font-medium mb-2 block">
                Max Price
              </label>
              <input
                type="number"
                name="maxPrice"
                value={searchCriteria.maxPrice}
                onChange={handleInputChange}
                placeholder="Enter maximum price"
                className="w-full p-3 border rounded-md shadow-sm"
              />
            </div>

            {/* Min Bedrooms */}
            <div className="form-group">
              <label className="text-gray-700 font-medium mb-2 block">
                Min Bedrooms
              </label>
              <input
                type="number"
                name="minBedrooms"
                value={searchCriteria.minBedrooms}
                onChange={handleInputChange}
                placeholder="Enter minimum bedrooms"
                className="w-full p-3 border rounded-md shadow-sm"
              />
            </div>

            {/* Max Bedrooms */}
            <div className="form-group">
              <label className="text-gray-700 font-medium mb-2 block">
                Max Bedrooms
              </label>
              <input
                type="number"
                name="maxBedrooms"
                value={searchCriteria.maxBedrooms}
                onChange={handleInputChange}
                placeholder="Enter maximum bedrooms"
                className="w-full p-3 border rounded-md shadow-sm"
              />
            </div>

            {/* Location */}
            <div className="form-group">
              <label className="text-gray-700 font-medium mb-2 block">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={searchCriteria.location}
                onChange={handleInputChange}
                placeholder="Enter location"
                className="w-full p-3 border rounded-md shadow-sm"
              />
            </div>

            {/* Postcode */}
            <div className="form-group">
              <label className="text-gray-700 font-medium mb-2 block">
                Postcode
              </label>
              <input
                type="text"
                name="postcode"
                value={searchCriteria.postcode}
                onChange={handleInputChange}
                placeholder="Enter postcode"
                className="w-full p-3 border rounded-md shadow-sm"
              />
            </div>

            {/* Date Added */}
            <div className="form-group">
              <label className="text-gray-700 font-medium mb-2 block">
                Date Added
              </label>
              <DatePicker
                selected={searchCriteria.dateAdded}
                onChange={(date) =>
                  setSearchCriteria({ ...searchCriteria, dateAdded: date })
                }
                placeholderText="Select date"
                className="w-full p-3 border rounded-md shadow-sm"
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg shadow-md"
          >
            Search
          </button>
        </div>

        {/* Results Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Favorite Heart Icon */}
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

              {/* Property Card */}
              <Link to={`/property/${property.id}`} className="block">
                <img
                  src={property.images[currentImages[index]]}
                  alt={property.location}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {property.location}
                  </h2>
                  <p className="text-gray-600 mt-1 line-clamp-2">
                    {property.description}
                  </p>
                  <p className="text-blue-600 font-bold mt-3">
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
