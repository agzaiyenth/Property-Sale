
import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/Navbar";
import PropertySearch from "./components/PropertySearch";
import PropertyDetails from "./components/PropertyDetails";
import FavoritesPage from "./components/FavoritesPage";

const App = () => (
  <FavoritesProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PropertySearch />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  </FavoritesProvider>
);

export default App;

