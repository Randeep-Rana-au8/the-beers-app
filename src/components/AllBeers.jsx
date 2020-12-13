import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./BeerCard/BeerCard";
import "./AllBeers.css";

const AllBeers = () => {
  const [datas, setDatas] = useState([]);

  const newData = async () =>
    await axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      console.log(res);
      setDatas(res.data);
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

export default AllBeers;
