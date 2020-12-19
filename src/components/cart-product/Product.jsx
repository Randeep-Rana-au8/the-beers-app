import React from "react";
import { connect } from "react-redux";
import { deleteToCart } from "../../actions/actions";

const Product = ({ item, deleteToCart }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    deleteToCart(item.id);
  };
  return (
    <div className="cart-product">
      <img className="cart-product-image" src={item.image_url} />
      <form>
        <h3>{item.name}</h3>
        <p>${item.target_og}</p>
        <button id={item.id} onClick={handleDelete} className="remove-button">
          Remove
        </button>
      </form>
    </div>
  );
};

export default connect(null, { deleteToCart })(Product);
