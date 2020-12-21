import React from "react";
import "./Header.css";
import svg from "../../allSVGs/main.svg";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { connect } from "react-redux";

const Header = ({ length }) => {
  console.log(length);
  return (
    <div className="header">
      <div className="header header-div">
        <div>
          <Link to="/">
            <img className="logo" src={svg} />
          </Link>
        </div>
        <div className="navItems">
          <Link className="link" to="/">
            <div>Home</div>
          </Link>
          <Link className="link" to="/shop">
            <div>Shop</div>
          </Link>

          <Link className="link" to="/cart">
            <div className="cartItem">
              <ShoppingBasketIcon />
              <span style={{ "margin-left": "2px" }}>{length}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  console.log(state.cart.length);
  return {
    length: state.cart.length,
  };
};

export default connect(mapStateToProps)(Header);
