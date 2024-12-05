// frontend/src/CityData.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./CityStyles.css";

function CityData(props) {
  const navigate = useNavigate(); // 使用 useNavigate 來處理跳轉

  // 點擊事件處理
  const handleClick = () => {
    console.log("handleClick Ture")
    navigate('/restaurant'); // 跳轉至 /service 頁面

  };

  return (
    <div className="c-card" onClick={handleClick}>
      <div className="c-image">
        <img src={props.image} alt="image" />
        <div className="c-caption">{props.heading}</div>
      </div>
      {props.text && <p className="c-text">{props.text}</p>}
    </div>
  );
}

export default CityData;
