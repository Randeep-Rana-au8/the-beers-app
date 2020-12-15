import React, { useEffect } from "react";
import axios from "axios";
import BeerCard from "./BeerCard/BeerCard";
import { connect } from "react-redux";
import { add_data } from "../actions/actions";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AllBeers.css";

const AllBeers = ({ datas, add_data }) => {
  const newData = async () =>
    await axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      console.log(res);
      add_data(res.data);
    });

  useEffect(() => {
    newData();
  }, []);

  return (
    <div className="allBeers">
      {datas.length != 0 ? (
        datas.map((data) => <BeerCard key="data.id" data={data} />)
      ) : (
        <Spinner className="spinner" animation="border" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    datas: state.data,
  };
};

export default connect(mapStateToProps, { add_data })(AllBeers);
