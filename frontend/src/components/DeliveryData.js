import React from 'react';
import { Component } from "react";
import Food1 from "../assets/2.png";
import Food2 from "../assets/4.jpg";
import Food3 from "../assets/5.jpg";
import Food4 from "../assets/10.jpg";
import "./DeliveryStyles.css";

class DeliveryData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="del-text">
          <p>{this.props.heading}</p>
          <h3>{this.props.text}</h3>
          <h3>{this.props.text1}</h3>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DeliveryData;
