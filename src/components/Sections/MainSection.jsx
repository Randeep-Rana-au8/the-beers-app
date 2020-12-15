import React from "react";
import beerImage from "../../allSVGs/beer-image.svg";
import { Link } from "react-router-dom";
import "./MainSection.css";

const MainSection = () => {
  return (
    <div className="mymain-container">
      <div className="my-container">
        <h1 className="title">
          Hi,
          <br />
          Welcome To
          <br />
          “The Beer Shop”
        </h1>
        <p>“For Every Cheer We Have a Beer”</p>
        <Link className="link" to="/shop">
          <button className="exploreButton">EXPLORE </button>
        </Link>
      </div>
      <div className="my-container">
        <img className="beerImage" src={beerImage} />
      </div>
    </div>
  );
};

export default MainSection;
