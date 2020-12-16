import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { add_details } from "../../actions/actions";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./AllBeers.css";

const NewDetails = ({ id, add_data, add_details, productDetails }) => {
  localStorage.setItem("id", id);
  const newData = async () =>
    await axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      console.log("i am working in the detals page", res.data);
      console.log(id);
      const newId = localStorage.getItem("id");
      console.log(newId);
      const product = res.data.filter((data) => data.id === newId);
      add_details(product);
      console.log(product);
    });

  useEffect(() => {
    newData();
  }, []);

  return (
    <div className="details-page">
      <div className="left-content">
        <h2>{productDetails.name}</h2>
        <p>{productDetails.description}</p>
      </div>
      <div className="right-content">
        <h2>Ingredients</h2>
        <div className="ingredients-list">
          {productDetails.length ? (
            productDetails[0].ingredients.hops.map((data) => (
              <div key={data.id}>
                <h4>{data.name}</h4>
                <p>{`value: ${data.amount.value} ${data.amount.unit}`}</p>
              </div>
            ))
          ) : (
            <Spinner className="spinner" animation="border" />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productDetails: state.productDetails,
    id: state.productId,
  };
};

export default connect(mapStateToProps, { add_details })(NewDetails);
