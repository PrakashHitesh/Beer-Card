import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./components/BeerCard";
import "./App.css";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get("https://api.sampleapis.com/beers/ale");
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching the beers:", error);
      }
    };
    fetchBeers();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>🍺 Beer Card</h1>
      <input
        type="text"
        placeholder="Search beers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="card-grid">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
