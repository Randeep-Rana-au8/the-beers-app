import React from "react";
import "./BeerCard.css";
import { connect } from "react-redux";
import { getProductDetails } from "../../actions/actions";
import { Link } from "react-router-dom";

const BeerCard = ({ data, getProductDetails }) => {
  if (data.name.length > 16) {
    data.name = data.name.slice(0, 15);
  }
  if (data.tagline.length > 32) {
    data.tagline = data.tagline.slice(0, 32);
  }

  const getDetails = () => {
    console.log(data.id);
    getProductDetails(data.id);
  };

  return (
    <div className="beerCard" key={data.id}>
      <div className="productDetails">
        <img className="cardImage" alt="beerImage" src={data.image_url} />
        <h2>{data.name}</h2>
        <p>{data.tagline}</p>
        <p>${data.target_og}</p>
      </div>
      <div className="productButtonDiv">
        <Link to="/product-details">
          <button onClick={getDetails} className="mybutton detailsButton">
            More Details
          </button>
        </Link>
        <button className="mybutton">Add to Card</button>
      </div>
    </div>
  );
};

export default connect(null, { getProductDetails })(BeerCard);
