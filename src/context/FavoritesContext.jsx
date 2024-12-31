import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (property) => {
    if (!favorites.some((fav) => fav.id === property.id)) {
      setFavorites((prev) => [...prev, property]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
