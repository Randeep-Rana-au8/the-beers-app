import React from "react";
import "./Header.css";
import svg from "../../allSVGs/main.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header header-div">
        <div>
          <img className="logo" src={svg} />
        </div>
        <div className="navItems">
          <Link className="link" to="/">
            <div>Home</div>
          </Link>
          <Link className="link" to="/shop">
            <div>Shop</div>
          </Link>
          <Link className="link" to="/user">
            <div>User</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
