import React from 'react';
import "./CityStyles.css";
import CityData from "./CityData";
import City1 from "../assets/tapei.webp";
import City2 from "../assets/new_taipei.webp";
import City3 from "../assets/taoyuan.webp";
import City4 from "../assets/hsinchu.webp";
import City5 from "../assets/taichung.webp";
import City6 from "../assets/changhua.webp";
import City7 from "../assets/tainan.webp";
import City8 from "../assets/kaohsiung.webp";
import City9 from "../assets/pingtung.webp";

function City() {
  return (
    <div className="city">
      <h2>我們有在您所在的城市提供送餐服務</h2>
      <div className="citycard">
        <CityData image={City1} heading="台北市" />
        <CityData image={City2} heading="新北市" />
        <CityData image={City3} heading="桃園市" />
        <CityData image={City4} heading="新竹市" />
        <CityData image={City5} heading="台中市" />
        <CityData image={City6} heading="彰化市" />
        <CityData image={City7} heading="台南市" />
        <CityData image={City8} heading="高雄市" />
        <CityData image={City9} heading="屏東縣" />
      </div>
    </div>
  );
}

export default City;
