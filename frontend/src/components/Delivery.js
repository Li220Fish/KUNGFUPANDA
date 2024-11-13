import React from 'react';
import Food1 from "../assets/2.png";
import Food2 from "../assets/4.jpg";
import Food3 from "../assets/5.jpg";
import Food4 from "../assets/10.jpg";
import DeliveryData from "./DeliveryData";
import "./DeliveryStyles.css";
const Delivery = () => {
  return (
    <div className="delivery">
      <h2>It's the food and groceries you love, delivered</h2>
      <p>You prepare the food and products, we handle the rest</p>

      <DeliveryData
        className="first-ser"
        heading="We deliver any food you want"
        text="Your one-stop solution for online food delivery!"
        text1="With our wide range of options and seamless delivery service, we strive to make your life easier and more delicious."
        img1={Food2}
        img2={Food1}
      />
      <DeliveryData
        className="first-ser-reverse"
        heading="Local Delights"
        text="We work with the best local restaurants to offer you a wide variety of cuisines to choose from."
        text1="Whether you're in the mood for Italian, Chinese, Japanese, or anything in between, we've got you covered!"
        img1={Food3}
        img2={Food4}
      />
    </div>
  );
};

export default Delivery;
