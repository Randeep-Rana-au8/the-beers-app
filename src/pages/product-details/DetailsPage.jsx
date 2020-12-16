import React from "react";
import { connect } from "react-redux";

const DetailsPage = ({ productDetails }) => {
  console.log(productDetails);

  return (
    <div className="details-page">
      <div className="left-content">
        <h2>{productDetails.name}</h2>
        <p>{productDetails.description}</p>
      </div>
      <div className="right-content">
        <h2>Ingredients</h2>
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
  );
};

const mapStateToProps = (state) => {
  return {
    productDetails: state.productDetails,
  };
};

export default connect(mapStateToProps)(DetailsPage);
