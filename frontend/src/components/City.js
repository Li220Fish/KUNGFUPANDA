import React from 'react';
import "./CityStyles.css";
import CityData from "./CityData";
import City1 from "../assets/manila1.jpg";
import City2 from "../assets/visayas.jpg";
import City3 from "../assets/mindanao.jpg";

function City() {
  return (
    <div className="city">
      <h1>Reaching More Cities</h1>
      <p>Find us in the cities and many more!</p>
      <div className="citycard">
        <CityData image={City1} heading="Manila" />
        <CityData image={City2} heading="Visayas" />
        <CityData image={City3} heading="Mindanao" />
      </div>
    </div>
  );
}

export default City;
