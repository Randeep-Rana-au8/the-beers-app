import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { add_details } from "../../actions/actions";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewDetails.css";

const NewDetails = ({ id, add_details, productDetails }) => {
  var newId;
  if (id == null) {
    newId = Number(localStorage.getItem("id"));
  } else {
    localStorage.setItem("id", id);
    newId = id;
  }

  const newData = async () =>
    await axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      console.log("i am working in the detals page", res.data);
      console.log(id);

      console.log(newId);
      const product = res.data.filter((data) => data.id === newId);
      add_details(product);
      console.log(product);
    });

  useEffect(() => {
    setTimeout(() => newData(), 1000);
  }, []);

  return (
    <div className="details-container">
      {productDetails ? (
        <div className="details-page">
          <div className="left-content">
            <img className="product-image" src={productDetails.image_url} />
            <h2 className="title">{productDetails.name}</h2>
            <p className="description">{productDetails.description}</p>
          </div>
          <div className="right-content">
            <h2 className="ingredients-name">Ingredients</h2>
            <div className="ingredients-list">
              {productDetails.ingredients.hops.map((data) => (
                <div key={data.id}>
                  <h4>{data.name}</h4>
                  <p>{`value: ${data.amount.value} ${data.amount.unit}`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Spinner className="spinner" animation="border" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productDetails: state.productDetails[0],
    id: state.productId,
  };
};

export default connect(mapStateToProps, { add_details })(NewDetails);
