import React, { useEffect } from "react";
import axios from "axios";
import BeerCard from "./BeerCard/BeerCard";
import "./AllBeers.css";
import { connect } from "react-redux";
import { add_data } from "../actions/actions";
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
      {datas.map((data) => (
        <BeerCard data={data} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    datas: state.data,
  };
};

export default connect(mapStateToProps, { add_data })(AllBeers);
