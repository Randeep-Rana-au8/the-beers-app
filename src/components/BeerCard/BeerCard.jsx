import React from "react";
import "./BeerCard.css";

const BeerCard = ({ data }) => {
  if (data.name.length > 16) {
    data.name = data.name.slice(0, 15);
  }
  if (data.tagline.length > 32) {
    data.tagline = data.tagline.slice(0, 32);
  }

  return (
    <div className="beerCard" key={data.id}>
      <div className="productDetails">
        <img className="cardImage" src={data.image_url} />
        <h2>{data.name}</h2>
        <p>{data.tagline}</p>
      </div>
      <div className="productButtonDiv">
        <button className="button detailsButton">More Details</button>
        <button className="button">Add to Card</button>
      </div>
    </div>
  );
};

export default BeerCard;
