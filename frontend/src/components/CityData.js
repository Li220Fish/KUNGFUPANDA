import React from 'react';
import City from "./City";
import "./CityStyles.css";

function CityData(props) {
  return (
    <div className="c-card">
      <div className="c-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default CityData;
