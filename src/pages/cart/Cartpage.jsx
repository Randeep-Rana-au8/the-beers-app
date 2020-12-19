import React from "react";
import { connect } from "react-redux";
import Product from "../../components/cart-product/Product";
import "./Cartpage.css";

const Cartpage = ({ data }) => {
  let total = 0;
  return (
    <div className="cart-page">
      <div className="cart-products-container">
        <h1 style={{ marginLeft: "40px", marginTop: "10px" }}>
          Welcome to the Cart Page
        </h1>
        {data.map(
          (item) => ((total += item.target_og), (<Product item={item} />))
        )}
      </div>
      <div className="cart-total">
        <h2>Subtotal({data.length})</h2>
        <h5 className="cart-total-price">${total}</h5>
        <button className="button">Buy Now</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.cart,
  };
};

export default connect(mapStateToProps)(Cartpage);
