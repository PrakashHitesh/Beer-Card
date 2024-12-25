import React from "react";
import "./BeerCard.css";

const BeerCard = ({ beer }) => {
  return (
    <div className="card">
      <img
        src={beer.image || "https://via.placeholder.com/150"}
        alt={beer.name}
      />
      <div className="card-content">
        <h3>{beer.name}</h3>
        <p>{beer.style}</p>
        <p>
          <strong>ABV:</strong> {beer.abv || "N/A"}%
        </p>
      </div>
    </div>
  );
};

export default BeerCard;
