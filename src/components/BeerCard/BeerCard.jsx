import React from "react";
import "./BeerCard.css";

const BeerCard = ({ data }) => {
  return (
    <div className="beerCard" key={data.id}>
      <img className="cardImage" src={data.image_url} />
      <h1>{data.name}</h1>
      <p>{data.tagline}</p>
    </div>
  );
};

export default BeerCard;
