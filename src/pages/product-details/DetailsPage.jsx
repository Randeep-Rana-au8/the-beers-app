import React from "react";
import { connect } from "react-redux";

const DetailsPage = ({ productDetails }) => {
  console.log(productDetails);

  return (
    <div className="details-page">
      <div>
        <h2>{productDetails.name}</h2>
        <p>{productDetails.description}</p>
      </div>
      <div className="ingredients-container">
        <h2>Ingredients</h2>
        <div className="ingredients-list">
          {productDetails.ingredients.hops.map((data) => (
            <div key={data.id}>
              <h2>{data.name}</h2>
              <p>{`value: ${data.amount.value} ${data.amount.unit}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productDetails: state.productDetails,
  };
};

export default connect(mapStateToProps)(DetailsPage);
